export const itemsDivAppender = (gridFractions) => {
  const rootDiv = document.getElementById("root");

  const itemsDiv = document.createElement("div");

  itemsDiv.className = "items";
  itemsDiv.id = "items";
  itemsDiv.style.gridTemplateColumns = `repeat(${+gridFractions}, 1fr)`;
  itemsDiv.id = "items";

  rootDiv.append(itemsDiv);
};
