import { memo } from 'react';
import { NavLink } from 'react-router';
import classes from './navbar.module.scss';
import { RoutePaths } from 'shared/routes';

export const Navbar = memo(function Navbar() {
  return (
    <nav className={classes.navbar}>
      {/* TODO: Вынести в отдельный компонент */}
      <NavLink className={({ isActive }) => (isActive ? classes.active : '')} to={RoutePaths.Main}>
        Товары
      </NavLink>
      <NavLink to={RoutePaths.Messages}>Сообщения</NavLink>
      <NavLink to={RoutePaths.Posts}>Посты</NavLink>
    </nav>
  );
});
