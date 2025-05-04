import { ChangeEventHandler, ComponentPropsWithoutRef, memo, useCallback } from 'react';
import classes from './select.module.scss';
import { classNames } from 'shared/lib';

enum SelectVariant {
  Primary = 'primary',
}

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends Omit<ComponentPropsWithoutRef<'select'>, 'onChange'> {
  options: SelectOption[];
  onChange: (value: string) => void;
  variant?: SelectVariant;
}

export const Select = memo(function Select(props: SelectProps) {
  const { options, onChange, variant = SelectVariant.Primary, className } = props;

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <select
      {...props}
      onChange={handleChange}
      className={classNames([classes.select, classes[variant], className])}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
