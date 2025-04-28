import { memo } from 'react';
import { Route, Routes } from 'react-router';
import { MessagesPage } from 'pages/messages';
import { PostsPage } from 'pages/posts';

export const AppRouter = memo(function AppRouter() {
  return (
    <Routes>
      <Route index element={<MessagesPage />} />
      <Route path="posts" element={<PostsPage />} />
    </Routes>
  );
});
