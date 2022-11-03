export const gridCounter = () => {
  const clientWidth = document.documentElement.clientWidth;
  const gridItemWidth = 300;

  const gridQuantity = (clientWidth / gridItemWidth - 1).toFixed();

  return gridQuantity;
};
