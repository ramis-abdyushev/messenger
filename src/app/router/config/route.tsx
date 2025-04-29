import { ComponentType, LazyExoticComponent } from 'react';
import { MessagesPage } from 'pages/messages';
import { PostsPage } from 'pages/posts';
import { PostDetailPage } from 'pages/postDetail';

export interface routeObject {
  path: string;
  Component?: LazyExoticComponent<ComponentType>;
  children?: routeObject[];
}

export enum RoutePaths {
  Messages = '',
  Posts = 'posts',
}

export const routeConfig: routeObject[] = [
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
