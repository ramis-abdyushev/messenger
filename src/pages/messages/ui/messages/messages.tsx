import { memo } from 'react';
import { MessageWrap } from '../message-wrap/message-wrap';
import { MessageInput } from '../message-input/message-input';
import classes from './messages.module.scss';

export const Messages = memo(function Messages() {
  return (
    <div className={classes.messages}>
      <MessageWrap />
      <MessageInput />
    </div>
  );
});
