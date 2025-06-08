import { ElementType, memo } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import classes from './button.module.scss';
import { classNames } from 'shared/lib';

type ButtonProps<C extends ElementType> = MuiButtonProps<C>;

function ButtonComponent<C extends ElementType>(props: ButtonProps<C>) {
  const { className, ...otherProps } = props;

  return <MuiButton {...otherProps} className={classNames([classes.button, className])} />;
}

export const Button = memo(ButtonComponent) as typeof ButtonComponent;
