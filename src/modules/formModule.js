export const formModule = () => {
  const rootDiv = document.getElementById("root");

  let form = document.createElement("form");
  form.className = "form";
  form.innerHTML = `
  <form>
      <input type='text' class='form__input' />
      <button type='submit' class='form__button' >Найти</button>
  </form>`;

  rootDiv.append(form);

  console.log("form");
};
