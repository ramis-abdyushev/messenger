import classes from './Messages.module.scss';
import { MessageInput } from 'features/message-input';
import { MessageWrap } from 'features/message-wrap';

export function Messages() {
  return (
    <div className={classes.messages}>
      <MessageWrap />
      <MessageInput />
    </div>
  );
}
