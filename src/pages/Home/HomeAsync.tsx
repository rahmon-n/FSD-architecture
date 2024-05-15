import { lazy } from 'react';

export const HomeAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./Home')), 1500);
    })
);
