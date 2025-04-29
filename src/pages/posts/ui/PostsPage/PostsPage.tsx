import { memo } from 'react';
import { useGetPostsQuery } from '../../model/slices/postsSlice';
import { PostsList } from 'entities/post';

export default memo(function PostsPage() {
  const { data = [], isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка1!: {JSON.stringify(error)}</div>;
  }

  return <PostsList posts={data} />;
});
