import { memo } from 'react';
import { PostsList } from '../posts-list/posts-list';
import { useGetPostsQuery } from 'entities/post';

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
