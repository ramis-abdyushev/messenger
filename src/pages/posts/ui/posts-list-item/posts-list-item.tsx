import { memo } from 'react';
import { Link } from 'react-router';
import classes from './posts-list-item.module.scss';
import { Post } from 'entities/post';

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
