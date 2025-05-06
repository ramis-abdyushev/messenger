import { ComponentPropsWithoutRef, memo, useCallback } from 'react';
import classes from './button.module.scss';
import { classNames } from 'shared/lib';

enum ButtonVariant {
  Primary = 'primary',
}

interface ButtonProps<T> extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick'> {
  onClick?: (value: T) => void;
  eventValue?: T;
  variant?: ButtonVariant;
}

function ButtonComponent<T = undefined>(props: ButtonProps<T>) {
  const { onClick, eventValue, variant = ButtonVariant.Primary, className, ...otherProps } = props;

  const handleClick = useCallback(() => onClick?.(eventValue as T), [onClick, eventValue]);

  return (
    <button
      {...otherProps}
      onClick={handleClick}
      className={classNames([classes.button, classes[variant], className])}
    />
  );
}

export const Button = memo(ButtonComponent) as typeof ButtonComponent;
