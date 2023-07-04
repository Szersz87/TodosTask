// prepare DOM Elements
const todoInput = document.getElementsByClassName("todo-input")[0];
const ulList = document
  .getElementsByClassName("todolist")[0]
  .getElementsByTagName("ul")[0];

// This function adds new todo, after press enter.
const addNewTodo = (e) => {
  if (todoInput.value.trim() !== "" && e.key === "Enter") {
    const newLi = document.createElement("li");
    createToolsArea(newLi, todoInput.value);
    ulList.append(newLi);
    todoInput.value = "";
  }
};
// prepare DOM event
todoInput.addEventListener("keyup", addNewTodo);

const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
};

const createToolsArea = (newTodo, text) => {
  newTodo.innerHTML = `
  <div class='tools'>
    <div class='circle'></div>
    <p class='textArea'>${text}</p>
    <button class='delete'><i class="fas fa-times"></i></button>
  </div>
`;
};
const handleDoubleClick = (e) => {
  const listItem = e.target.closest("li");
  const checkBox = listItem.querySelector(".circle");
  const textArea = listItem.querySelector(".textArea");

  if (e.target.classList.contains("textArea")) {
    textArea.contentEditable = true;
    textArea.focus();
  }
};
const handleKeyDown = (e) => {
  const textArea = e.target.closest(".textArea");
  if (e.key === "Enter" && textArea?.contentEditable === "true") {
    e.preventDefault();
    textArea.contentEditable = false;
  }
};
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
      e.target.closest("li").remove();
      break;
  }
};
const eventHandlers = {
  click: checkClick,
  dblclick: handleDoubleClick,
  keydown: handleKeyDown,
};
["click", "dblclick", "keydown"].forEach((event) => {
  ulList.addEventListener(event, eventHandlers[event]);
});

// Create eventHandlers object
// prepare btns for used
const buttons = document.querySelectorAll(
  ".btn-all, .btn-active, .btn-completed"
);
// funktion looking for btns in clg
const handleClick = (e) => {
  const clickedButton = e.target;

  if (clickedButton.classList.contains("btn-all")) {
    console.log("Clicked btn-all");
  } else if (clickedButton.classList.contains("btn-active")) {
    console.log("Clicked btn-active");
  } else if (clickedButton.classList.contains("btn-completed")) {
    console.log("Clicked btn-completed");
  }
};
// lisener for click on bts
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
