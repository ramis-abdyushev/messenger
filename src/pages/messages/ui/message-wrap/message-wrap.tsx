import { memo } from 'react';
import classes from './message-wrap.module.scss';
import { useAppSelector } from 'shared/lib';
import { selectMessages } from 'entities/message';

export const MessageWrap = memo(function MessageWrap() {
  const messages = useAppSelector(selectMessages);

  return (
    <div className={classes.messageWrap}>
      {messages.map((message) => (
        <div key={message.id}>
          id: {message.id} - {message.content}
        </div>
      ))}
    </div>
  );
});
