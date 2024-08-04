export enum ROUTES {
  MAIN = "/",
  POSTS_PAGE = "/posts",
  CREATE_POST_PAGE = "/create-post",
  LAZY_COUNTER_PAGE = "/counter-lazy",
  LAZY_GALLERY = "/gallery",
  LAZY_TODO = "/todoList",
}

export const ROUTES_DATA = [
  { to: ROUTES.MAIN, name: "Главная" },
  { to: ROUTES.POSTS_PAGE, name: "Посты" },
  { to: ROUTES.CREATE_POST_PAGE, name: "Создать пост" },
  { to: ROUTES.LAZY_COUNTER_PAGE, name: "Счетчик (lazy)" },
  { to: ROUTES.LAZY_GALLERY, name: "Картинки" },
  { to: ROUTES.LAZY_TODO, name: "Список дел" },
];
