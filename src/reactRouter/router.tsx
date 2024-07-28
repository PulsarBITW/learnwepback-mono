import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Main } from "../components/pages/Main";
import { PostsPage } from "../components/pages/PostsPage";
import { CreatePostPage } from "../components/pages/CreatePost";
import { Layout } from "../components/features/Layout";
import { LazyCounter } from "../components/pages/Counter";
import { ROUTES } from "./routes";
import Spinner from "../components/features/Spinner";

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.MAIN,
      element: <Layout />,
      children: [
        { path: ROUTES.MAIN, element: <Main /> },
        { path: ROUTES.POSTS_PAGE, element: <PostsPage /> },
        { path: ROUTES.CREATE_POST_PAGE, element: <CreatePostPage /> },
        {
          path: ROUTES.LAZY_COUNTER_PAGE,
          element: (
            <Suspense fallback={<Spinner />}>
              <LazyCounter />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: process.env.BASE_URL ? process.env.BASE_URL : undefined, //add env in webpack
  }
);
