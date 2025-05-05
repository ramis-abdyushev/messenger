import { ChangeEventHandler, ComponentPropsWithoutRef, memo, useCallback } from 'react';
import classes from './input.module.scss';
import { classNames } from 'shared/lib';

enum InputVariant {
  Primary = 'primary',
}

interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> {
  onChange: (value: string) => void;
  variant?: InputVariant;
}

export const Input = memo(function Input(props: InputProps) {
  const { onChange, variant = InputVariant.Primary, className } = props;

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <input
      {...props}
      onChange={handleChange}
      className={classNames([classes.input, classes[variant], className])}
    />
  );
});
