import { KeyboardEvent, useCallback, useState } from 'react';
import { Textarea } from '../../../../shared/ui/Textarea/Textarea';
import { addMessage } from '../../../../entities/messages/model/messagesSlice';
import classes from './MessageInput.module.scss';
import { useAppDispatch } from 'app/store/store';

const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
  navigator.userAgent,
);

export function MessageInput() {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const sendMessage = () => {
    dispatch(addMessage(message));
    setMessage('');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.shiftKey || isMobile) {
        return;
      }
      e.preventDefault();
      sendMessage();
    }
  };

  const handleChange = useCallback((message: string) => {
    setMessage(message);
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
    </div>
  );
}
