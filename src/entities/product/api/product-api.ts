import { EditProductQueryArg, Product } from './product-api.types';
import { apiSlice } from 'shared/api';

interface ProductsRes {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

const apiSliceWithProducts = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => '/products',
      transformResponse: (res: ProductsRes) => res.products,
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
