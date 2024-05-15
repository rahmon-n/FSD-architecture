import { RouteProps } from 'react-router-dom';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.home,
    element: <Home />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
