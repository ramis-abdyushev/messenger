import { memo } from 'react';
import { ListMessages } from '../list-messages/list-messages';
import { Messages } from '../messages/messages';
import classes from './messages-page.module.scss';

export default memo(function MessagesPage() {
  return (
    <div className={classes.messagesPage}>
      <ListMessages />
      <Messages />
    </div>
  );
});
