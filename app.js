// Define UI Variables
const form = document.getElementById("todo-form");
const todoList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-todos");
const filter = document.getElementById("filter");
const todoInput = document.getElementById("todo");

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add todo event
  form.addEventListener("submit", addTodo);
}

// Add todo function
function addTodo(e) {
  // Check for input value
  if (todoInput.value === "") {
    alert("Add todo");
  }

  //   Create li element on submit
  const li = document.createElement("li");
  //   Add materialize class to li
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(todoInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  todoList.appendChild(li);

  //   Clear input
  todoInput.value = "";

  // Prevent form submit

  e.preventDefault();
}
