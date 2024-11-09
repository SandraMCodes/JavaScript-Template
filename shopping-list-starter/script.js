let shoppingListItems = ["milk", "eggs", "bread"];
const listElement = document.getElementById("shopping-list-items");
const newItemText = document.getElementById("new-item-text")


const addItem = () => {
let item = document.getElementById("new-item-text").value;
shoppingListItems = [...shoppingListItems, item];
updateItems();
};

const clearInput = () => {
newItemText.value = ""
}

const updateItems = () => {
// First we get the list element
 
 // Then we clear it of any existing items
 listElement.innerHTML = "";

 // Then we loop through the shopping list items and add them to the list
 for (const shoppingItem of shoppingListItems) {
   let itemElement = document.createElement("li");
   itemElement.innerText = shoppingItem;
   listElement.appendChild(itemElement);
 }
 
clearInput();

}

const clearItems = () => {
    shoppingListItems=[]
    updateItems();
}
updateItems()