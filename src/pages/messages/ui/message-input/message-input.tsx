import { ChangeEvent, KeyboardEvent, memo, useCallback, useState } from 'react';
import classes from './message-input.module.scss';
import { useAppDispatch } from 'shared/lib';
import { addMessage } from 'entities/message';
import { Button } from 'shared/ui';

const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

export const MessageInput = memo(function MessageInput() {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const sendMessage = useCallback(() => {
    dispatch(addMessage(message));
    setMessage('');
  }, [dispatch, message]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.shiftKey || isMobile) {
        return;
      }

      e.preventDefault();
      sendMessage();
    }
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }, []);

  return (
    <div className={classes.messageInput}>
      {/*<Textarea*/}
      {/*  className={classes.textarea}*/}
      {/*  maxRows={12}*/}
      {/*  autoFocus*/}
      {/*  onKeyDown={handleKeyDown}*/}
      {/*  value={message}*/}
      {/*  onChange={handleChange}*/}
      {/*/>*/}
      <Button className={classes.button} disabled={!message} onClick={sendMessage}>
        Отправить
      </Button>
    </div>
  );
});
