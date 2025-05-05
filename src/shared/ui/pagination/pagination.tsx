import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import classes from 'shared/ui/search-input/search-input.module.scss';

interface PaginationProps {
  count: number;
  currentPage: number;
  onChange: (value: number) => void;
  className?: string;
}

export const Pagination = memo(function Pagination(props: PaginationProps) {
  const { count, currentPage, onChange, className } = props;

  const goPrevPage = useCallback(() => {
    onChange(currentPage - 1);
  }, [currentPage, onChange]);

  const goNextPage = useCallback(() => {
    onChange(currentPage + 1);
  }, [currentPage, onChange]);

  const goPage = useCallback(
    (number: number) => {
      onChange(number);
    },
    [onChange],
  );

  return (
    <div className={classNames([classes.pagination, className])}>
      <Button text="Назад" onClick={goPrevPage} disabled={currentPage === 1} />
      <Button text="Вперёд" onClick={goNextPage} disabled={currentPage === count} />
      <div>
        {Array.from({ length: count }, (_, pageNumber) => {
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
  );
});
