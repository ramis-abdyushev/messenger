import { ComponentPropsWithoutRef, memo } from 'react';
import classes from './button.module.scss';
import { classNames } from 'shared/lib';

enum ButtonVariant {
  Primary = 'primary',
}

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
  variant?: ButtonVariant;
}

export const Button = memo(function Button(props: ButtonProps) {
  const { text, variant = ButtonVariant.Primary, className } = props;

  return (
    <button {...props} className={classNames([classes.button, classes[variant], className])}>
      {text}
    </button>
  );
});
