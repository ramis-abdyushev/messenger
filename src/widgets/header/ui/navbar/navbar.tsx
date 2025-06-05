import { memo } from 'react';
import { AppNavLink } from '../app-nav-link/app-nav-link';
import classes from './navbar.module.scss';
import { RoutePaths } from 'shared/routes';

export const Navbar = memo(function Navbar() {
  return (
    <nav className={classes.navbar}>
      <AppNavLink to={RoutePaths.Main}>Товары</AppNavLink>
      <AppNavLink to={RoutePaths.Messages}>Сообщения</AppNavLink>
      <AppNavLink to={RoutePaths.Posts}>Посты</AppNavLink>
    </nav>
  );
});
