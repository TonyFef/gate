export const urlModifier = (requestText) => {
  history.pushState({}, "", `${requestText}`);
};
