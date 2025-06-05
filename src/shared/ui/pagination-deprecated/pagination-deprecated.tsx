import { Dispatch, memo, SetStateAction, useCallback, useMemo } from 'react';
import { Button } from '../button/button';
import classes from './pagination-deprecated.module.scss';
import { classNames, generateRange } from 'shared/lib';

interface PaginationProps {
  count: number;
  page: number;
  onChange: Dispatch<SetStateAction<number>>;
  siblingCount?: number;
  minHiddenPages?: number;
  className?: string;
}

type PageNumbers = ('ellipsis' | number)[];

/**
 * @deprecated
 */
export const PaginationDeprecated = memo(function Pagination(props: PaginationProps) {
  const { count, page, onChange, siblingCount = 2, minHiddenPages = 2, className } = props;

  const ellipsis = 'ellipsis';

  const pageNumbers = useMemo<PageNumbers>(() => {
    const ellipsisTrigger = siblingCount + minHiddenPages;

    const pagesBeforeCurrent = page - 1;
    const pagesAfterCurrent = count - page;

    if (pagesBeforeCurrent > ellipsisTrigger || pagesAfterCurrent > ellipsisTrigger) {
      const firstWithEllipsis: PageNumbers = [1, ellipsis];
      const lastWithEllipsis: PageNumbers = [ellipsis, count];

      const totalVisibleSlots =
        firstWithEllipsis.length + siblingCount + 1 + siblingCount + lastWithEllipsis.length;

      if (pagesBeforeCurrent <= ellipsisTrigger && pagesAfterCurrent > ellipsisTrigger) {
        const availableSlots = totalVisibleSlots - lastWithEllipsis.length;

        const visiblePages = generateRange(availableSlots);

        return [...visiblePages, ...lastWithEllipsis];
      }

      if (pagesBeforeCurrent > ellipsisTrigger && pagesAfterCurrent <= ellipsisTrigger) {
        const availableSlots = totalVisibleSlots - firstWithEllipsis.length;

        const visiblePages = generateRange(count - (availableSlots - 1), count);

        return [...firstWithEllipsis, ...visiblePages];
      }

      const firstSibling = page - siblingCount;
      const lastSibling = page + siblingCount;

      const visiblePages = generateRange(firstSibling, lastSibling);

      return [...firstWithEllipsis, ...visiblePages, ...lastWithEllipsis];
    }

    return generateRange(count);
  }, [count, minHiddenPages, page, siblingCount]);

  const goPrevPage = useCallback(() => {
    onChange((p) => p - 1);
  }, [onChange]);

  const goNextPage = useCallback(() => {
    onChange((p) => p + 1);
  }, [onChange]);

  const goPage = useCallback(
    (pageNumber: number) => {
      onChange(pageNumber);
    },
    [onChange],
  );

  return (
    <div className={classNames([classes.pagination, className])}>
      <Button className={classes.arrow} onClick={goPrevPage} disabled={page === 1}>
        Назад
      </Button>
      <div>
        {pageNumbers.map((pageNumber, index) =>
          pageNumber !== ellipsis ? (
            <Button<number>
              className={pageNumber === page ? classes.active : ''}
              key={pageNumber}
              eventValue={pageNumber}
              onClick={goPage}
            >
              {pageNumber}
            </Button>
          ) : (
            <span className={classes.ellipsis} key={pageNumber + index}>
              ...
            </span>
          ),
        )}
      </div>
      <Button className={classes.arrow} onClick={goNextPage} disabled={page === count}>
        Вперёд
      </Button>
    </div>
  );
});
