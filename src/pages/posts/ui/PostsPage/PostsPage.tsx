import { memo } from 'react';
import { useGetPostsQuery } from '../../model/slices/PostsSlice';
import { PostsList } from 'entities/post/ui/PostsList/PostsList';

export default memo(function PostsPage() {
  const { data = [], isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка!: {JSON.stringify(error)}</div>;
  }

  return <PostsList posts={data} />;
});
