import { ChangeEvent, memo, useCallback } from 'react';
import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';
import classes from './pagination.module.scss';
import { classNames } from 'shared/lib';

interface PaginationProps extends Omit<MuiPaginationProps, 'onChange'> {
  onChange: (page: number) => void;
}

export const Pagination = memo(function Pagination(props: PaginationProps) {
  const { className, siblingCount = 2, onChange, ...otherProps } = props;

  const handleChange = useCallback(
    (_e: ChangeEvent<unknown>, page: number) => {
      onChange(page);
    },
    [onChange],
  );

  return (
    <MuiPagination
      {...otherProps}
      className={classNames([classes.pagination, className])}
      siblingCount={siblingCount}
      onChange={handleChange}
    />
  );
});
