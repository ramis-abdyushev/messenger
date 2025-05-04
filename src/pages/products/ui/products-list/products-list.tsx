import { memo } from 'react';
import { ProductsListItem } from '../products-list-item/products-list-item';
import classes from './products-list.module.scss';
import { Product } from 'entities/product';

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = memo(function ProductsList(props: ProductsListProps) {
  const { products } = props;

  return (
    <div className={classes.productsList}>
      {products.map((product) => (
        <ProductsListItem product={product} key={product.id} />
      ))}
    </div>
  );
});
