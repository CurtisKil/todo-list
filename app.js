// Define UI Variables
const form = document.getElementById("todo-form");
const todoList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-todos");
const filter = document.getElementById("filter");
const todoInput = document.getElementById("todo");

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTodos);
  // Add todo event
  form.addEventListener("submit", addTodo);
  // Remove todo
  todoList.addEventListener("click", removeTodo);
  // Clear all todos
  clearBtn.addEventListener("click", clearAllTodos);
  // Filter Todos
  filter.addEventListener("keyup", filterTodos);
}

// Get todos from LS
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //   Create li element on submit
    const li = document.createElement("li");
    //   Add materialize class to li
    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(todo));
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
  });
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

  // Local Storage
  storeTodo(todoInput.value);

  //   Clear input
  todoInput.value = "";

  // Prevent form submit
  e.preventDefault();
}

// Store Todo to LS
function storeTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTodoFromLs(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTodoFromLs(todoItem) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo, index) {
    if (todoItem.textContent === todo) {
      todos.splice(index, 1);
    }
  });
}

function clearAllTodos(e) {
  if (confirm("Are you sure")) {
    todoList.innerHTML = "";
  }
  clearTodosFromLs();
}

// Clear todos from LS
function clearTodosFromLs() {
  localStorage.clear();
}

// Filter Todos
function filterTodos(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (todo) {
    const item = todo.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      todo.style.display = "block";
    } else {
      todo.style.display = "none";
    }
  });
}
