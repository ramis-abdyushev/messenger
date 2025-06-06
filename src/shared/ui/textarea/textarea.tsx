import TextareaAutosize from 'react-textarea-autosize';
import { ComponentPropsWithoutRef, memo } from 'react';
import classes from './textarea.module.scss';
import { classNames } from 'shared/lib';

enum TextareaVariant {
  Primary = 'primary',
}

interface TextareaProps extends ComponentPropsWithoutRef<typeof TextareaAutosize> {
  variant?: TextareaVariant;
}

export const Textarea = memo(function Textarea(props: TextareaProps) {
  const { variant = TextareaVariant.Primary, className } = props;

  return (
    <TextareaAutosize
      {...props}
      className={classNames([classes.textarea, classes[variant], className])}
    />
  );
});
