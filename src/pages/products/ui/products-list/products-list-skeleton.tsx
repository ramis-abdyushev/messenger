import { memo } from 'react';
import { ProductsListItemSkeleton } from '../products-list-item/products-list-item-skeleton';
import classes from './products-list.module.scss';
import { generateRange } from 'shared/lib';

interface ProductsListSkeletonProps {
  limit: number;
}

export const ProductsListSkeleton = memo(function ProductsListSkeleton(
  props: ProductsListSkeletonProps,
) {
  const { limit } = props;

  return (
    <div className={classes.productsList}>
      {generateRange(limit).map((id) => (
        <ProductsListItemSkeleton key={id} />
      ))}
    </div>
  );
});
