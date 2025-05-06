import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import classes from './post-form.module.scss';
import { Post, PostMutableData, useEditPostMutation } from 'entities/post';
import { Button, Textarea } from 'shared/ui';

type PostFormData = PostMutableData;

interface PostFormProps {
  post: Post;
}

export const PostForm = memo(function PostForm(props: PostFormProps) {
  const { post } = props;

  const { register, handleSubmit } = useForm<PostFormData>({
    defaultValues: {
      title: post.title,
      body: post.body,
    },
  });

  const [editPost] = useEditPostMutation();

  const onSubmit = useCallback<SubmitHandler<PostFormData>>(
    async (formData) => {
      console.log(formData);

      try {
        await editPost({ id: post.id, data: formData });
      } catch (e) {
        console.log(e);
      }
    },
    [editPost, post.id],
  );

  return (
    <form className={classes.postForm} onSubmit={handleSubmit(onSubmit)}>
      {/*<Input {...register('title')} />*/}
      <Textarea {...register('body')} />
      <Button>Отправить</Button>
    </form>
  );
});
