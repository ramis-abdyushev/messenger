import { MessageInput } from '../../../../features/message-input';
import { MessageWrap } from '../../../../features/message-wrap';
import classes from './Messages.module.scss';

export function Messages() {
  return (
    <div className={classes.messages}>
      <MessageWrap />
      <MessageInput />
    </div>
  );
}
