import { RouteProps } from 'react-router-dom';
import { Home } from 'pages/Home';
import { About } from 'pages/About';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
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
];
