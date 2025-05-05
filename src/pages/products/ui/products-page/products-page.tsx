import { memo, useCallback, useMemo, useState } from 'react';
import { ProductsList } from '../products-list/products-list';
import { useGetProductsQuery } from 'entities/product';
import { Pagination, SearchInput, Select, SelectOption } from 'shared/ui';

const pageLimitOptions: SelectOption[] = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
];

export default memo(function ProductsPage() {
  const [pageLimit, setPageLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, error } = useGetProductsQuery({
    pageLimit,
    currentPage,
    searchQuery,
  });

  const maxPageNumber = useMemo(() => {
    return data?.total ? Math.ceil(data.total / pageLimit) : 0;
  }, [data?.total, pageLimit]);

  const search = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const changePageLimit = useCallback((newLimit: string) => {
    setPageLimit(+newLimit);
    setCurrentPage(1);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ошибка1!: {JSON.stringify(error)}</div>;
  }

  if (!data?.total) {
    return <div>Нет данных</div>;
  }

  return (
    <div>
      <div>
        <SearchInput onChange={search} />
        <Select options={pageLimitOptions} value={pageLimit} onChange={changePageLimit} />
        <Pagination count={maxPageNumber} currentPage={currentPage} onChange={setCurrentPage} />
        <div>pageLimit: {pageLimit}</div>
        <div>currentPage: {currentPage}</div>
        <div>maxPageNumber {maxPageNumber}</div>
        <div>data.total {data.total}</div>
      </div>
      <ProductsList products={data.products} />
    </div>
  );
});
