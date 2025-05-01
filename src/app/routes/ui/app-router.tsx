import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router';
import { RouteConfig, routerConfig } from '../config/router';

export const AppRouter = memo(function AppRouter() {
  const renderRoutes = useCallback(
    (routes: RouteConfig[]) =>
      routes.map((route) => {
        const { path, Component, children } = route;

        return (
          <Route
            key={path}
            path={path}
            element={
              Component ? (
                // Баг без ключа
                <Suspense key={path} fallback={<div>Загрузка...</div>}>
                  <Component />
                </Suspense>
              ) : null
            }
          >
            {children ? renderRoutes(children) : null}
          </Route>
        );
      }),
    [],
  );

  return <Routes>{renderRoutes(routerConfig)}</Routes>;
});
