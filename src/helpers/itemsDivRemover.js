export const itemsDivRemover = () => {
  const itemsDiv = document.querySelector("#items");
  
  itemsDiv ? (itemsDiv.innerHTML = "") : null;
};
