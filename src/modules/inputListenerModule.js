import { urlModifier } from "../helpers/urlModifier";

export const inputListenerModule = (form, input) => {
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      return input.value;
    });
  }

  // Input validation (a-Z0-9 only)
  if (input) {
    input.addEventListener("input", (e) => {
      if (e.data.match(/[^\w]/g)) {
        input.value = e.target.value.slice(0, -1);
      }

      urlModifier(e.target.value);
    });
  }

  return;
};
