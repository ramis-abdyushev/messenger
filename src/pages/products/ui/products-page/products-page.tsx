import { memo } from 'react';
import { ProductsList } from '../products-list/products-list';
import { useGetProductsQuery } from 'entities/product';

export default memo(function ProductsPage() {
  const { data = [], isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка1!: {JSON.stringify(error)}</div>;
  }

  return <ProductsList products={data} />;
});
