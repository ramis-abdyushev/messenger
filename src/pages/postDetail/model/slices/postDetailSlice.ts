import { apiSlice } from 'shared/api/api';
import { Post } from 'entities/post';

export const apiSlicePostDetail = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostQuery } = apiSlicePostDetail;
