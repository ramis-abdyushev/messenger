import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Post } from '../../model/types/post';
import { useEditPostMutation } from '../../model/slices/postSlice';
import classes from './PostForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Textarea } from 'shared/ui/Textarea/Textarea';
import { Button } from 'shared/ui/Button/Button';

export type PostDataForm = Pick<Post, 'title' | 'body'>;

interface PostFormProps {
  post: Post;
}

export const PostForm = memo(function PostForm(props: PostFormProps) {
  const { post } = props;

  const { register, handleSubmit } = useForm<PostDataForm>({
    defaultValues: {
      title: post.title,
      body: post.body,
    },
  });

  const [editPost] = useEditPostMutation();

  const onSubmit = useCallback<SubmitHandler<PostDataForm>>(
    async (dataForm) => {
      console.log(dataForm);

      try {
        await editPost({ id: post.id, dataForm });
      } catch (e) {
        console.log(e);
      }
    },
    [editPost, post.id],
  );

  return (
    <form className={classes.postForm} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('title')} />
      <Textarea {...register('body')} />
      <Button text="Отправить" />
    </form>
  );
});
