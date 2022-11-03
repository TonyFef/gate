import { gridCounter } from "../helpers/gridCounter";
import { itemsDivAppender } from "../helpers/itemsDivAppender";
import { itemsDivRemover } from "../helpers/itemsDivRemover";
import { checkboxListenerModule } from "./checkboxListenerModule";

export const itemsModule = async (requestFromInput) => {
  let recievedData;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7"
  );
  const modifiedResponse = await response.json();

  if (requestFromInput) {
    const filteredRequestFromInput = modifiedResponse.filter(({ title }) => {
      const regExp = new RegExp(`${requestFromInput}`, "ig");

      // Matches everywhere in string
      return title.match(regExp);

      // Matches only at the beginning
      // return title.includes(requestFromInput);
    });
    recievedData = filteredRequestFromInput;
  } else {
    recievedData = modifiedResponse;
  }

  const gridFractions = gridCounter();

  itemsDivRemover();
  itemsDivAppender(gridFractions);

  // Appending each item on page
  recievedData.map((item) => {
    const itemsDiv = document.getElementById("items");

    const itemDiv = document.createElement("div");
    itemDiv.className = `item item${item.id}`;
    itemDiv.innerHTML = `
            <h3 class="item__title" >
                ${item.title}
            </h3>
            <p>${item.body}</p>
            <div class="item__checkbox">
              <label class="label" for="checkbox${item.id}" >
                <input type="checkbox" name="item${item.id}" class="checkbox" id="checkbox${item.id}" />
                <div class="slider round"></div> 
              </label>
            </div>
    `;

    itemsDiv.append(itemDiv);
  });

  const itemsDiv = document.getElementById("items");
  checkboxListenerModule(itemsDiv);
};
