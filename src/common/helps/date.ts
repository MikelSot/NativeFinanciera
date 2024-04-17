export const formatDate = (date: string): string => {
  const items = date.split('/');

  return `${items[2]}-${items[1]}-${items[0]}T00:00:00Z`;
};
