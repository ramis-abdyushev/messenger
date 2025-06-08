import { ElementType, memo } from 'react';
import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@mui/material';
import classes from './menu-item.module.scss';
import { classNames } from 'shared/lib';

type MenuItemProps<C extends ElementType> = MuiMenuItemProps<C>;

function MenuItemComponent<C extends ElementType>(props: MenuItemProps<C>) {
  const { className, ...otherProps } = props;

  return <MuiMenuItem {...otherProps} className={classNames([classes.menuItem, className])} />;
}

export const MenuItem = memo(MenuItemComponent) as typeof MenuItemComponent;
