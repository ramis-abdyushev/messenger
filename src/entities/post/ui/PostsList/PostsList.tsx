import { memo } from 'react';
import { Post } from '../../model/types/post';
import { PostsListItem } from '../PostsListItem/PostsListItem';

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
