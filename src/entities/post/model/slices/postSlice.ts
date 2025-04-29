import { PostDataForm } from '../../ui/PostForm/PostForm';
import { apiSlice } from 'shared/api/api';
import { Post } from 'entities/post';

interface editPost {
  id: Post['id'];
  dataForm: PostDataForm;
}

export const apiSlicePost = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
    }),
    getPost: build.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
    editPost: build.mutation<Post, editPost>({
      query: ({ id, dataForm }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body: dataForm,
      }),
      async onQueryStarted({ id, dataForm }, lifecycleApi) {
        const getPostsPatchResult = lifecycleApi.dispatch(
          apiSlicePost.util.updateQueryData('getPosts', undefined, (draft) => {
            const post = draft.find((post) => post.id === id);

            if (post) {
              post.title = dataForm.title;
              post.body = dataForm.body;
            }
          }),
        );

        const getPostPatchResult = lifecycleApi.dispatch(
          apiSlicePost.util.updateQueryData('getPost', id, (draft) => {
            draft.title = dataForm.title;
            draft.body = dataForm.body;
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

export const { useGetPostsQuery, useGetPostQuery, useEditPostMutation } = apiSlicePost;
