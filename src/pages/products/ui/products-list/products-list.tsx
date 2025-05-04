import { memo } from 'react';
import { ProductsListItem } from '../products-list-item/products-list-item';
import classes from './products-list.module.scss';
import { ProductsEntityState } from 'entities/product';

interface ProductsListProps {
  products: ProductsEntityState;
}

export const ProductsList = memo(function ProductsList(props: ProductsListProps) {
  const { products } = props;

  return (
    <div className={classes.productsList}>
      {products.ids.map((id) => (
        <ProductsListItem product={products.entities[id]} key={id} />
      ))}
    </div>
  );
});
