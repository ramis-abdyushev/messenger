import { memo } from 'react';
import classes from './products-list-item.module.scss';
import { classNames } from 'shared/lib';

export const ProductsListItemSkeleton = memo(function ProductsListItemSkeleton() {
  return <div className={classNames([classes.productsListItem, classes.skeleton])}>Загрузка</div>;
});
