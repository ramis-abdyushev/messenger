import { memo, useCallback, useMemo, useState } from 'react';
import { ProductsList } from '../products-list/products-list';
import { useGetProductsQuery } from 'entities/product';
import { Button, Select, SelectOption } from 'shared/ui';

const pageLimitOptions: SelectOption[] = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
];

export default memo(function ProductsPage() {
  const [pageLimit, setPageLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useGetProductsQuery({
    pageLimit,
    currentPage,
  });

  const maxPageNumber = useMemo(() => {
    return data?.total ? Math.ceil(data.total / pageLimit) : 0;
  }, [data?.total, pageLimit]);

  const changePageLimit = useCallback((newLimit: string) => {
    setPageLimit(+newLimit);
    setCurrentPage(1);
  }, []);

  const goPrevPage = useCallback(() => {
    setCurrentPage((c) => --c);
  }, []);

  const goNextPage = useCallback(() => {
    setCurrentPage((c) => ++c);
  }, []);

  const goPage = useCallback((number: number) => {
    setCurrentPage(number);
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
        <Select options={pageLimitOptions} value={pageLimit} onChange={changePageLimit} />
        <Button text="Назад" onClick={goPrevPage} disabled={currentPage === 1} />
        <Button text="Вперёд" onClick={goNextPage} disabled={currentPage === maxPageNumber} />
        <div>pageLimit: {pageLimit}</div>
        <div>currentPage: {currentPage}</div>
        <div>maxPageNumber {maxPageNumber}</div>
        <div>data.total {data.total}</div>
        <div>
          {Array.from({ length: maxPageNumber }, (_, pageNumber) => {
            pageNumber++;

            return (
              <Button
                key={pageNumber}
                text={currentPage === pageNumber ? `Тута ${pageNumber}` : pageNumber}
                onClick={() => goPage(pageNumber)}
              />
            );
          })}
        </div>
      </div>
      <ProductsList products={data.products} />
    </div>
  );
});
