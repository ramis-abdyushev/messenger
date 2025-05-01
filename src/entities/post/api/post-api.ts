import { EditPostQueryArg, Post } from './post-api.types';
import { apiSlice } from 'shared/api';

const apiSliceWithPosts = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
    }),
    getPost: build.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
    editPost: build.mutation<Post, EditPostQueryArg>({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body: data,
      }),
      async onQueryStarted({ id, data }, lifecycleApi) {
        const getPostsPatchResult = lifecycleApi.dispatch(
          apiSliceWithPosts.util.updateQueryData('getPosts', undefined, (draft) => {
            const post = draft.find((post) => post.id === id);

            if (post) {
              post.title = data.title;
              post.body = data.body;
            }
          }),
        );

        const getPostPatchResult = lifecycleApi.dispatch(
          apiSliceWithPosts.util.updateQueryData('getPost', id, (draft) => {
            draft.title = data.title;
            draft.body = data.body;
          }),
        );

        try {
          await lifecycleApi.queryFulfilled;
        } catch (e) {
          console.log(e);
          getPostsPatchResult.undo();
          getPostPatchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useEditPostMutation } = apiSliceWithPosts;
