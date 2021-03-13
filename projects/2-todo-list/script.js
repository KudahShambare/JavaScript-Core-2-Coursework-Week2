function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    let listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    list.appendChild(listItem);
    let spanItem = document.createElement("span");
    spanItem.className = "badge bg-primary rounded-pill";
    listItem.textContent = todos[i].task;
    listItem.appendChild(spanItem);
    let taskDone = document.createElement("i");
    taskDone.className = "fa fa-check";
    taskDone.setAttribute("aria-hidden", "true");
    spanItem.appendChild(taskDone);
    let deleteTask = document.createElement("i");
    deleteTask.className = "fa fa-trash";
    deleteTask.setAttribute("aria-hidden", "true");
    spanItem.appendChild(deleteTask);
    //Click Events
    taskDone.addEventListener("click", function () {
      let parent=taskDone.parentElement;
      let grandparent=parent.parentElement;
      grandparent.style.textDecoration="line-through"
      console.log(grandparent)
     
    });
    deleteTask.addEventListener("click", function () {
       let parent = taskDone.parentElement;
       let grandparent = parent.parentElement;
       list.removeChild(grandparent);
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  let additionalTasks = [];
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputValue = document.querySelector("input");
  let objectInput = { task: "", completed: false };
  objectInput.task = inputValue.value;
  additionalTasks.push(objectInput);

  todos.push(inputValue);
  document.querySelector("form").reset();
  populateTodoList(additionalTasks);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
