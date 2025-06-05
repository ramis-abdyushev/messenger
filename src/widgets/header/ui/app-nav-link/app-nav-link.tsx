import { ComponentPropsWithoutRef, memo } from 'react';
import { NavLink } from 'react-router';
import classes from './app-nav-link.module.scss';
import { classNames } from 'shared/lib';

type AppNavLinkProps = Omit<ComponentPropsWithoutRef<typeof NavLink>, 'className'>;

export const AppNavLink = memo(function AppNavLink(props: AppNavLinkProps) {
  const { children, ...otherProps } = props;

  return (
    <NavLink
      {...otherProps}
      className={({ isActive }) => classNames([classes.appNavLink, isActive ? classes.active : ''])}
    >
      {children}
    </NavLink>
  );
});
