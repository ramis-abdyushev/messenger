import classes from './MessageWrap.module.scss';
import { selectMessages } from 'entities/messages/model/messagesSelectors';
import { useAppSelector } from 'app/store/store';

export function MessageWrap() {
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
}
