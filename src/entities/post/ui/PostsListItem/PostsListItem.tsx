import { memo } from 'react';
import { Link } from 'react-router';
import { Post } from '../../model/types/post';
import classes from './PostsListItem.module.scss';

interface PostsListItemProps {
  post: Post;
}

export const PostsListItem = memo(function PostsListItem(props: PostsListItemProps) {
  const { post } = props;

  return (
    <Link className={classes.postsListItem} to={`${post.id}`}>
      <div>id: {post.id}</div>
      <div>userId: {post.userId}</div>
      <div>title: {post.title}</div>
    </Link>
  );
});
