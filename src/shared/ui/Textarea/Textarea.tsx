import TextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, ComponentPropsWithoutRef, useCallback } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import classes from './Textarea.module.scss';

interface TextareaProps
  extends Omit<ComponentPropsWithoutRef<typeof TextareaAutosize>, 'onChange'> {
  onChange: (value: string) => void;
}

export function Textarea(props: TextareaProps) {
  const { onChange } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <TextareaAutosize
      {...props}
      onChange={handleChange}
      className={classNames([classes.textarea, props.className])}
    />
  );
}
