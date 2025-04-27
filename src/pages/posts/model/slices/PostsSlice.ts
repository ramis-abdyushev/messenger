import { apiSlice } from 'shared/api/api';
import { Post } from 'entities/post';

export const apiSliceWithPosts = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = apiSliceWithPosts;
