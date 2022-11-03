export const urlModifier = (requestText, url) => {
  requestText
    ? history.replaceState({}, "", `${requestText}`)
    : (window.location.href = url);
};
