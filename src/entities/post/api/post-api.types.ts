export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostMutableData = Pick<Post, 'title' | 'body'>;

export interface EditPostQueryArg {
  id: Post['id'];
  data: PostMutableData;
}
