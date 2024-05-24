export const getCardBgColor = (index: number): string => {
  if ((index + 1) % 2 === 0) return "#ff5e84";
  return "#2cd9af";
};
