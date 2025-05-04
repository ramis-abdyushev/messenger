import { memo } from 'react';
import { Link } from 'react-router';
import classes from './products-list-item.module.scss';
import { Product } from 'entities/product';

interface ProductsListItemProps {
  product: Product;
}

export const ProductsListItem = memo(function ProductsListItem(props: ProductsListItemProps) {
  const { product } = props;

  return (
    <article className={classes.productsListItem}>
      <Link className={classes.link} to={`${product.id}`}>
        <div>{product.title}</div>
        <img src={product.thumbnail} alt={product.title} />
        <div>{product.price}</div>
      </Link>
    </article>
  );
});
