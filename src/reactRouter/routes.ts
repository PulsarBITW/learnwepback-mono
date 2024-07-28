export enum ROUTES {
  MAIN = "/",
  POSTS_PAGE = "/posts",
  CREATE_POST_PAGE = "/create-post",
  LAZY_COUNTER_PAGE = "/counter-lazy",
}

export const ROUTES_DATA = [
  { to: ROUTES.MAIN, name: "Главная" },
  { to: ROUTES.POSTS_PAGE, name: "Посты" },
  { to: ROUTES.CREATE_POST_PAGE, name: "Создать пост" },
  { to: ROUTES.LAZY_COUNTER_PAGE, name: "Счетчик (lazy)" },
];
