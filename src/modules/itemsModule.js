import { gridCounter } from "../helpers/gridCounter";
import { itemsDivAppender } from "../helpers/itemsDivAppender";
import { checkboxListenerModule } from "./checkboxListenerModule";

export const itemsModule = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7"
  );
  const recievedData = await response.json();

  const gridFractions = gridCounter();
  itemsDivAppender(gridFractions);

  recievedData.map((item) => {
    const itemsDiv = document.getElementById("items");

    const itemDiv = document.createElement("div");
    itemDiv.className = `item item${item.id}`;
    itemDiv.innerHTML = `
            <h3 class="item__title" >
                ${item.title}
            </h3>
            <p>${item.body}</p>
            <div>
                <input type="checkbox" name="item${item.id}">
            </div>
    `;

    itemsDiv.append(itemDiv);
  });

  const itemsDiv = document.getElementById("items");
  checkboxListenerModule(itemsDiv);
};
