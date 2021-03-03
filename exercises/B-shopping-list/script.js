function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.getElementById("content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  for (let i = 0; i < arrayOfPeople.length; i++) {
    function makeIt() {
      let listItem = document.createElement("li");
      listItem.className = "shoppingList";
      listItem.innerHTML = arrayOfPeople[i];

      unorderedList.appendChild(listItem);
    }

    makeIt();
  }
}

console.dir("content");

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
