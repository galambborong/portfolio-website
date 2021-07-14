export const keyFormatter = (index: number, name: string): string => {
  if (name === undefined) return '';
  return `${index}${name.slice(0, 3).toLowerCase()}`;
};
