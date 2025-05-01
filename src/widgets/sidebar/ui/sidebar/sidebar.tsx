import { memo } from 'react';
import { NavLink } from 'react-router';
import classes from './sidebar.module.scss';
import { RoutePaths } from 'shared/routes';

export const Sidebar = memo(function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <NavLink to={RoutePaths.Messages}>Сообщения</NavLink>
      <NavLink to={RoutePaths.Posts}>Посты</NavLink>
    </div>
  );
});
