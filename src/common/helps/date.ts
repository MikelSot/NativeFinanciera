export const formatDateToBack = (date: string): string => {
  const items = date.split('/');

  return `${items[2]}-${items[1]}-${items[0]}T00:00:00Z`;
};

export const formatDateToFront = (date: string): string => {
  const items = date.split('T');

  return items[0];
};
