// Define UI Variables
const form = document.getElementById("todo-form");
const todoList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-todos");
const filter = document.getElementById("filter");
const todoInput = document.getElementById("todo");

loadEventListeners();
removeTodo();

// Load all event listeners
function loadEventListeners() {
  // Add todo event
  form.addEventListener("submit", addTodo);
  // Remove todo
  todoList.addEventListener("click", removeTodo);
  // Clear all todos
  clearBtn.addEventListener("click", clearAllTodos);
  // Filter Todos
  filter.addEventListener("keyup", filterTodos);
}

// Add todo function
function addTodo(e) {
  console.log(e);
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

function removeTodo(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearAllTodos(e) {
  if (confirm("Are you sure")) {
    todoList.innerHTML = "";
  }
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
