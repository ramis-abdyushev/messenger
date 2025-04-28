import { memo } from 'react';
import classes from './MessagesPage.module.scss';
import { ListMessages } from 'widgets/list-messages';
import { Messages } from 'widgets/messages';

export default memo(function MessagesPage() {
  return (
    <div className={classes.messagesPage}>
      <ListMessages />
      <Messages />
    </div>
  );
});
