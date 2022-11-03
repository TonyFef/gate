export const listenersModule = (itemsDiv) => {
  if (itemsDiv) {
    itemsDiv.addEventListener("click", (e) => {
      if (e.target.type === "checkbox") {
        const clickedDiv = document.querySelector(`.${e.target.name}`);

        clickedDiv.classList.contains("active")
          ? clickedDiv.classList.remove("active")
          : clickedDiv.classList.add("active");
      }
    });
  }
};
