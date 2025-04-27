import TextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, ComponentPropsWithoutRef, memo, useCallback } from 'react';
import classes from './Textarea.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

enum TextareaVariant {
  Primary = 'primary',
}

interface TextareaProps
  extends Omit<ComponentPropsWithoutRef<typeof TextareaAutosize>, 'onChange'> {
  onChange: (value: string) => void;
  variant?: TextareaVariant;
}

export const Textarea = memo(function Textarea(props: TextareaProps) {
  const { onChange, variant = TextareaVariant.Primary, className } = props;

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
      className={classNames([classes.textarea, classes[variant], className])}
    />
  );
});
