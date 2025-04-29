import { ChangeEvent, KeyboardEvent, memo, useCallback, useState } from 'react';
import classes from './MessageInput.module.scss';
import { Textarea } from 'shared/ui/Textarea/Textarea';
import { addMessage } from 'entities/messages/model/messagesSlice';
import { useAppDispatch } from 'app/store/store';
import { Button } from 'shared/ui/Button/Button';

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
      <Textarea
        className={classes.textarea}
        maxRows={12}
        autoFocus
        onKeyDown={handleKeyDown}
        value={message}
        onChange={handleChange}
      />
      <Button
        className={classes.button}
        text="Отправить"
        disabled={!message}
        onClick={sendMessage}
      />
    </div>
  );
});
