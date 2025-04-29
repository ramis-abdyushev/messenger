import { memo } from 'react';
import { NavLink } from 'react-router';
import classes from './Sidebar.module.scss';
import { RoutePaths } from 'app/router/config/route';

export const Sidebar = memo(function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <NavLink to={RoutePaths.Messages}>Сообщения</NavLink>
      <NavLink to={RoutePaths.Posts}>Посты</NavLink>
    </div>
  );
});
