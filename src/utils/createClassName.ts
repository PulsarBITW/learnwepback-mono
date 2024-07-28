export const createCN = (classes: string | string[]): string => {
  if (Array.isArray(classes)) return classes.join(" ");
  return classes;
};
