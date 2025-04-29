import { memo } from 'react';
import { useParams } from 'react-router';
import { useGetPostQuery } from '../../model/slices/postDetailSlice';

export default memo(function PostDetailPage() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetPostQuery(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка!: {JSON.stringify(error)}</div>;
  }

  return (
    <>
      <div>id: {data!.id}</div>
      <div>userId: {data!.userId}</div>
      <div>title: {data!.title}</div>
    </>
  );
});
