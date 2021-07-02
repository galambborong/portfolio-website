export const keyFormatter = (index: number, name: string) => {
  if (name === undefined) return '';
  return `${index}${name.slice(0, 3).toLowerCase()}`;
};
