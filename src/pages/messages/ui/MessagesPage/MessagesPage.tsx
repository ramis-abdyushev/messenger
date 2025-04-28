import classes from './MessagesPage.module.scss';
import { ListMessages } from 'widgets/list-messages';
import { Messages } from 'widgets/messages';

export function MessagesPage() {
  return (
    <div className={classes.messagesPage}>
      <ListMessages />
      <Messages />
    </div>
  );
}
