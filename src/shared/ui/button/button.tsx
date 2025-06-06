import { ElementType, memo, useCallback } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import classes from './button.module.scss';
import { classNames } from 'shared/lib';

type ButtonProps<C extends ElementType, T> = MuiButtonProps<C> & {
  onClick?: (value: T | undefined) => void;
  eventValue?: T;
};

function ButtonComponent<C extends ElementType, T>(props: ButtonProps<C, T>) {
  const { onClick, eventValue, className, ...otherProps } = props;

  const handleClick = useCallback(() => {
    onClick?.(eventValue);
  }, [onClick, eventValue]);

  return (
    <MuiButton
      {...otherProps}
      onClick={handleClick}
      className={classNames([classes.button, className])}
    />
  );
}

export const Button = memo(ButtonComponent) as typeof ButtonComponent;
