import { memo } from 'react';
import { useParams } from 'react-router';
import { useGetProductQuery } from 'entities/product';

export default memo(function ProductDetailPage() {
  const { id } = useParams();

  const { data, isFetching, error } = useGetProductQuery(+id!);

  return (
    <div>
      {isFetching ? (
        <div>Загрузка</div>
      ) : error ? (
        <div>Ошибка</div>
      ) : (
        data && (
          <div>
            <div>{data.title}</div>
            <img src={data.thumbnail} alt={data.title} />
            <div>{data.price}</div>
          </div>
        )
      )}
    </div>
  );
});
