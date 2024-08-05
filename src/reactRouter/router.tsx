import {ReactNode, Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import {ROUTES} from './routes';
import {Main} from '@/components/pages/Main';
import {PostsPage} from '@/components/pages/PostsPage';
import {CreatePostPage} from '@/components/pages/CreatePost';
import {Layout} from '@/components/features/Layout';
import {LazyCounter} from '@/components/pages/Counter';
import {LazyGallery} from '@/components/pages/Gallery';
import Spinner from '@/components/features/Spinner';
import {LazyTodo} from '@/components/pages/todo';

const getLazyElement = (element: JSX.Element, customSpinner?: ReactNode) => {
  return <Suspense fallback={customSpinner || <Spinner />}>{element}</Suspense>;
};
export const router = createBrowserRouter(
  [
    {
      path: ROUTES.MAIN,
      element: <Layout />,
      children: [
        {path: ROUTES.MAIN, element: <Main />},
        {path: ROUTES.POSTS_PAGE, element: <PostsPage />},
        {path: ROUTES.CREATE_POST_PAGE, element: <CreatePostPage />},
        {
          path: ROUTES.LAZY_COUNTER_PAGE,
          element: getLazyElement(<LazyCounter />),
        },
        {
          path: ROUTES.LAZY_GALLERY,
          element: getLazyElement(<LazyGallery />),
        },
        {
          path: ROUTES.LAZY_TODO,
          element: getLazyElement(<LazyTodo />),
        },
      ],
    },
  ],
  {
    basename: process.env.BASE_URL ? process.env.BASE_URL : undefined, //add env in webpack
  },
);
