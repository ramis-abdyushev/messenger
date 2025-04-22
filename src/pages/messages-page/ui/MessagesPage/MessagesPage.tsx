import { Sidebar } from '../../../../widgets/sidebar';
import { ListMessages } from '../../../../widgets/list-messages';
import { Messages } from '../../../../widgets/messages';
import classes from './MessagesPage.module.scss';

export function MessagesPage() {
  return (
    <div className={classes.messagesPage}>
      <Sidebar />
      <ListMessages />
      <Messages />
    </div>
  );
}
