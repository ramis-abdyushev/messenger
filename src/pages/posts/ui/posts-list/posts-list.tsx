import { memo } from 'react';
import { PostsListItem } from '../posts-list-item/posts-list-item';
import { Post } from 'entities/post';

interface PostsListProps {
  posts: Post[];
}

export const PostsList = memo(function PostsList(props: PostsListProps) {
  const { posts } = props;

  return (
    <div>
      {posts.map((post) => (
        <PostsListItem post={post} key={post.id} />
      ))}
    </div>
  );
});
