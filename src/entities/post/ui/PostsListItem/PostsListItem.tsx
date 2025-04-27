import { memo } from 'react';
import { Post } from '../../model/types/post';
import classes from './PostsListItem.module.scss';

interface PostsListItemProps {
  post: Post;
}

export const PostsListItem = memo(function PostsListItem(props: PostsListItemProps) {
  const { post } = props;

  return (
    <div className={classes.postsListItem}>
      <div>id: {post.id}</div>
      <div>userId: {post.userId}</div>
      <div>title: {post.title}</div>
      <div>body: {post.body}</div>
    </div>
  );
});
