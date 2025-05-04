import { memo } from 'react';
import { NavLink } from 'react-router';
import classes from './navbar.module.scss';
import { RoutePaths } from 'shared/routes';

export const Navbar = memo(function Navbar() {
  return (
    <nav className={classes.navbar}>
      <NavLink to={RoutePaths.Products}>Товары</NavLink>
      <NavLink to={RoutePaths.Messages}>Сообщения</NavLink>
      <NavLink to={RoutePaths.Posts}>Посты</NavLink>
    </nav>
  );
});
