import { ComponentPropsWithoutRef, memo } from 'react';
import classes from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

enum InputVariant {
  Primary = 'primary',
}

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  variant?: InputVariant;
}

export const Input = memo(function Input(props: InputProps) {
  const { variant = InputVariant.Primary, className } = props;

  return <input {...props} className={classNames([classes.input, classes[variant], className])} />;
});
