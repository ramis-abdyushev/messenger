import { memo, SetStateAction, useCallback, useMemo, useState } from 'react';
import { ProductsList } from '../products-list/products-list';
import { ProductsListSkeleton } from '../products-list/products-list-skeleton';
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

  const { data, isFetching, error } = useGetProductsQuery({
    pageLimit,
    currentPage,
    searchQuery,
  });

  const maxPageNumber = useMemo(() => {
    return data?.total ? Math.ceil(data.total / pageLimit) : 0;
  }, [data?.total, pageLimit]);

  const setPage = useCallback((action: SetStateAction<number>) => {
    setCurrentPage(action);
    console.log(123);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const search = useCallback((query: string) => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  const changePageLimit = useCallback((newLimit: string) => {
    setPageLimit(+newLimit);
    setPage(1);
  }, []);

  return (
    <div>
      <div>
        <SearchInput onChange={search} />
        <Select options={pageLimitOptions} value={pageLimit} onChange={changePageLimit} />
      </div>
      <div>
        {error ? (
          <div>Ошибка: {JSON.stringify(error)}</div>
        ) : !data?.total && !isFetching ? (
          <div>Нет данных</div>
        ) : (
          <div>
            {isFetching ? (
              <ProductsListSkeleton limit={pageLimit} />
            ) : (
              data?.products && <ProductsList products={data.products} />
            )}
            {!!maxPageNumber && (
              <Pagination count={maxPageNumber} page={currentPage} onChange={setPage} />
            )}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
});
