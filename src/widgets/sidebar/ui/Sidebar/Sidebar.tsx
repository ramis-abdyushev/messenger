import { memo } from 'react';
import { NavLink } from 'react-router';
import classes from './Sidebar.module.scss';

export const Sidebar = memo(function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <NavLink to="/">Сообщения</NavLink>
      <NavLink to="/posts">Посты</NavLink>
    </div>
  );
});
