// prepare DOM Elements

const todoInput = document.querySelector(".todo-input");
const ulList = document.querySelector(".todolist ul");
const buttons = document.querySelectorAll(
  ".btn-all, .btn-active, .btn-completed, .btn-deleteAllCompleted"
);
const getTodoItems = () => document.querySelectorAll(".todolist ul li");

const tasks = [];

// This function adds new todo, after press enter.
const addNewTodo = (e) => {
  if (todoInput.value !== "" && e.key === "Enter") {
    const newTodo = {
      id: new Date().valueOf(),
      text: todoInput.value,
      status: "created",
    };

    tasks.push(newTodo);
    console.log(tasks);
    const newLi = document.createElement("li");
    createTodosArea(newLi, newTodo.text, newTodo.id);
    ulList.append(newLi);
    todoInput.value = "";
  }
};

const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
};

const createTodosArea = (newTodo, text, id) => {
  const toolsPanel = createElementWithClass("div", "tools");
  const checkBox = createElementWithClass("div", "circle");
  const textArea = createElementWithClass("p", "textArea");
  const deleteBtn = createElementWithClass("button", "delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  textArea.textContent = text;
  newTodo.dataset.id = id
  textArea.addEventListener("dblclick", handleDoubleClick);
  textArea.addEventListener("keydown", handleEditKeyDown);
  toolsPanel.append(checkBox, textArea, deleteBtn);
  newTodo.append(toolsPanel);
  
  deleteBtn.addEventListener("click", () => {
    deleteTodoAndElement(id, newTodo);
  });
};
const deleteTodoAndElement = (id, element) => {
  const index = tasks.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    element.remove();
  }
};


let isEditing = false;

const handleDoubleClick = (e) => {
  const listItem = e.target.closest("li");
  const checkBox = listItem.querySelector(".circle");
  const textArea = listItem.querySelector(".textArea");
  
  if (e.target.classList.contains("textArea") && !isEditing) {
    isEditing = true;
    textArea.contentEditable = true;
    textArea.focus();
  }
};
//   funkcja zamykania okna edycji po kliknieciu entera
const handleEditKeyDown = (e) => {
  const textArea = e.target.closest(".textArea");

  if (e.key === "Enter") {
    e.preventDefault();
    textArea.contentEditable = false;
    textArea.blur();

    const listItem = e.target.closest("li"); // move this line here
    const todoId = Number(listItem.dataset.id); // use Number to convert string to number
    const index = tasks.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      tasks[index].text = textArea.textContent;
      console.log(tasks);
    }
    isEditing = false;
  }
};
    
  
ulList.addEventListener("keydown", (e) => {
  if (isEditing) {
    handleEditKeyDown(e);
  }
});

const checkClick = (e) => {
  const listItem = e.target.closest("li");
  const checkBox = listItem.querySelector(".circle");
  const textArea = listItem.querySelector(".textArea");

  switch (true) {
    case e.target.classList.contains("circle"):
      listItem.classList.toggle("completed");
      if (listItem.classList.contains("completed")) {
        checkBox.innerHTML = '<i class="fas fa-check"></i>';
      } else {
        checkBox.innerHTML = "";
      }
      break;
    case e.target.classList.contains("delete"):
      const todoId = listItem.dataset.id;
      deleteTodoAndElement(todoId, listItem);
      break;
  }
};

const handleClick = (e) => {
  const clickedButton = e.target;

  switch (true) {
    case clickedButton.classList.contains("btn-all"):
      showAllTodos();
      break;
    case clickedButton.classList.contains("btn-active"):
      showActiveTodos();
      break;
    case clickedButton.classList.contains("btn-completed"):
      showCompletedTodos();
      break;
    case clickedButton.classList.contains("btn-deleteAllCompleted"):
      deleteCompletedTodos();
      break;
    default:
      break;
  }
};

// shows all todos
const showAllTodos = () => {
  const todoItems = getTodoItems();
  todoItems.forEach((item) => {
    item.style.display = "block";
  });
};

// shows todos without class completed
const showActiveTodos = () => {
  const todoItems = getTodoItems();
  todoItems.forEach((item) => {
    if (!item.classList.contains("completed")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

// shows todos with class completed
const showCompletedTodos = () => {
  const todoItems = getTodoItems();
  todoItems.forEach((item) => {
    if (item.classList.contains("completed")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

// delete all completed todos
const deleteCompletedTodos = () => {
  const todoItems = getTodoItems();

  todoItems.forEach((item) => {
    if (item.classList.contains("completed")) {
      item.remove();
    } else {
      item.style.display = "block";
    }
  });
};

todoInput.addEventListener("keyup", addNewTodo);
ulList.addEventListener("click", checkClick);
ulList.addEventListener("dblclick", handleDoubleClick);
// ulList.addEventListener("keydown", handleKeyDown);
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
