import { memo, useCallback } from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import classes from './text-field.module.scss';
import { classNames } from 'shared/lib';

interface TextFieldProps extends Omit<MuiTextFieldProps, 'onChange'> {
  onChange: (value: string) => void;
}

export const TextField = memo(function TextField(props: TextFieldProps) {
  const { className, onChange, ...otherProps } = props;

  const handleChange = useCallback<NonNullable<MuiTextFieldProps['onChange']>>(
    (e) => onChange(e.target.value),
    [onChange],
  );

  return (
    <MuiTextField
      {...otherProps}
      onChange={handleChange}
      className={classNames([classes.textField, className])}
    />
  );
});
