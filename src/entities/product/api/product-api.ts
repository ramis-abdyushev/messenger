import { createEntityAdapter } from '@reduxjs/toolkit';
import {
  EditProductQueryArg,
  GetProductsCache,
  GetProductsQueryArg,
  GetProductsQueryParams,
  GetProductsRes,
  Product,
} from './product-api.types';
import { apiSlice } from 'shared/api';

const productsAdapter = createEntityAdapter<Product>();
const initialState = productsAdapter.getInitialState();

const apiSliceWithProducts = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<GetProductsCache, GetProductsQueryArg>({
      query: ({ pageLimit, currentPage, searchQuery }) => {
        let url = '/products';

        const params: GetProductsQueryParams = {
          limit: pageLimit,
          skip: pageLimit * (currentPage - 1),
        };

        searchQuery = searchQuery.trim();

        if (searchQuery) {
          url += '/search';
          params.q = searchQuery;
        }

        return {
          url,
          params,
        };
      },
      transformResponse: (res: GetProductsRes) => ({
        products: productsAdapter.setAll(initialState, res.products),
        total: res.total,
      }),
    }),
    getProduct: build.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    editProduct: build.mutation<Product, EditProductQueryArg>({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      // async onQueryStarted({ id, data }, lifecycleApi) {
      //   const getPostsPatchResult = lifecycleApi.dispatch(
      //     apiSliceWithProducts.util.updateQueryData('getProducts', undefined, (draft) => {
      // const product = draft.find((product) => product.id === id);
      //
      // if (product) {
      //   product = { ...product, ...data };
      // }
      //   }),
      // );

      // const getPostPatchResult = lifecycleApi.dispatch(
      //   apiSliceWithProducts.util.updateQueryData('getPost', id, (draft) => {
      //     draft.title = data.title;
      //     draft.body = data.body;
      //   }),
      // );

      // try {
      //   await lifecycleApi.queryFulfilled;
      // } catch (e) {
      //   console.log(e);
      // getPostsPatchResult.undo();
      // getPostPatchResult.undo();
      // }
      // },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useEditProductMutation } =
  apiSliceWithProducts;
