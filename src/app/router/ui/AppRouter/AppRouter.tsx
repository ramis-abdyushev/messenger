import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { MessagesPage } from 'pages/messages';
import { PostsPage } from 'pages/posts';

export const AppRouter = memo(function AppRouter() {
  return (
    <Routes>
      <Route
        index
        element={
          // Баг
          <Suspense key={1} fallback={<div>Загрузка...</div>}>
            <MessagesPage />
          </Suspense>
        }
      />
      <Route
        path="posts"
        element={
          // Баг
          <Suspense key={2} fallback={<div>Загрузка...</div>}>
            <PostsPage />
          </Suspense>
        }
      />
    </Routes>
  );
});
