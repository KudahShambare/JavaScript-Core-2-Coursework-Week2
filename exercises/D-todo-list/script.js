function todoList(todos) {
  // Write your code here...
  let content = document.getElementById("content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  for (let i = 0; i < todos.length; i++) {
    function createItem() {
      let listItem = document.createElement("li");
      listItem.innerHTML = todos[i].todo;
      listItem.addEventListener("click", function () {
        listItem.style.textDecoration = "line-through";
      });
      unorderedList.appendChild(listItem);
    }
    createItem();
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
