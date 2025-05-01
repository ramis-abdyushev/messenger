import { ComponentType, LazyExoticComponent } from 'react';
import { MessagesPage } from 'pages/messages';
import { PostsPage } from 'pages/posts';
import { PostDetailPage } from 'pages/post-detail';
import { RoutePaths } from 'shared/routes';

export interface RouteConfig {
  path: string;
  Component?: LazyExoticComponent<ComponentType>;
  children?: RouteConfig[];
}

export const routerConfig: RouteConfig[] = [
  {
    path: RoutePaths.Messages,
    Component: MessagesPage,
  },
  {
    path: RoutePaths.Posts,
    children: [
      {
        path: '',
        Component: PostsPage,
      },
      {
        path: ':id',
        Component: PostDetailPage,
      },
    ],
  },
];
