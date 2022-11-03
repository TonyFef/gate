import { urlModifier } from "../helpers/urlModifier";
import { itemsModule } from "./itemsModule";

export const inputListenerModule = (form, input) => {
  const url = window.location.href;

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputValue = input.value;

      itemsModule(inputValue);

      return input.value;
    });
  }

  if (input) {
    input.addEventListener("input", (e) => {
      
      // Input validation (a-Z0-9 only)
      if (e.data && e.data.match(/[^\w]/g)) {
        input.value = e.target.value.slice(0, -1);
      }

      // Deleting one letter
      else if (e.data === null && e.target.value !== "") {
        urlModifier(e.target.value);
      }

      // Deleting last letter typed
      else if (e.target.value === "") {
        urlModifier("", url);
      }

      // Rest cases
      else {
        urlModifier(e.target.value);
      }
    });
  }
};
