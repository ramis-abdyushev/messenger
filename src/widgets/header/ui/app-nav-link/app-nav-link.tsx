import { memo, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router';
import classes from './app-nav-link.module.scss';
import { Button } from 'shared/ui';

interface AppNavLinkProps extends Pick<NavLinkProps, 'to'> {
  children: ReactNode;
}

export const AppNavLink = memo(function AppNavLink(props: AppNavLinkProps) {
  const { children, to } = props;

  return (
    <Button className={classes.appNavLink} component={NavLink} to={to}>
      {children}
    </Button>
  );
});
