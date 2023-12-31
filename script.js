document.addEventListener("DOMContentLoaded", () => {
const todoInput = document.querySelector(".todo-input");
const ulList = document.querySelector(".todolist ul");
const buttons = document.querySelectorAll(
  ".btn-all, .btn-active, .btn-completed, .btn-deleteAllCompleted"
  );
  
  const tasks = [];

  const addNewTodo = (e) => {
    e.preventDefault();
  
    if (e.key === "Enter") {
      const text = todoInput.value.trim();
      if (text !== "") {
        const newTodo = {
          id: new Date().valueOf(),
          text: text,
          status: "created",
        };
  
        tasks.push(newTodo);
        createTodosArea(newTodo); 
        todoInput.value = "";
      }
    }
  };

const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
};

const createTodosArea = (task) => {
  const newLi = document.createElement("li");
  newLi.classList.add('newTodo');
  newLi.setAttribute("data-id", task.id);
  
  newLi.innerHTML = `
    <div class="tools">
      <div class="circle"></div>
      <p class="textArea">${task.text}</p>
      <button class="delete"><i class="fas fa-times"></i></button>
    </div>
  `;

  const deleteBtn = newLi.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    deleteTodoAndElement(task.id, newLi);
  });
  ulList.append(newLi);
  
};
const findTaskIndexById = (id) => {
  return tasks.findIndex((task) => task.id === id);
};

const deleteTaskById = (id) => {
  const index = findTaskIndexById(id);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
};

const deleteElement = (element) => {
  element.remove();
};

const deleteTodoAndElement = (id, element) => {
  deleteTaskById(id);
  deleteElement(element);
};

const handleDoubleClick = (e) => {
  if (e.target.classList.contains("textArea")) {
    e.target.contentEditable = true;
    e.target.focus();
  }
};

const handleKeyDown = (e) => {
  if (e.key === "Enter" && e.target.contentEditable === "true") {
    e.preventDefault();
    e.target.contentEditable = false;
  }
};
const checkClick = (e) => {
  const listItem = e.target.closest("li");

  if (e.target.classList.contains("circle")) {
    listItem.classList.toggle("completed");
    e.target.innerHTML = listItem.classList.contains("completed") ? '<i class="fas fa-check"></i>' : "";
  }
  else if (e.target.classList.contains("delete")) {
    const todoId = listItem.dataset.id;
    deleteTodoAndElement(todoId, listItem);
  }
};

const handleClick = (e) => {
  const clickedButton = e.target;
  
  switch (true) {
    case clickedButton.classList.contains("btn-all"):
      manageTodos("show-all");
      break;
      case clickedButton.classList.contains("btn-active"):
      manageTodos("show-active");
      break;
      case clickedButton.classList.contains("btn-completed"):
      manageTodos("show-completed")
      break;
      case clickedButton.classList.contains("btn-deleteAllCompleted"):
        manageTodos ("delete-completed")
        break;
        default:
          break;
        }
      };

      const manageTodos = (action) => {
        const todoItems = ulList.querySelectorAll("li[data-id]");
        todoItems.forEach((item) => {
          const completed = item.classList.contains("completed");
      
          let displayStyle;
      
          switch (action) {
            case "show-all":
              displayStyle = "block";
              break;
            case "show-active":
              displayStyle = completed ? "none" : "block";
              break;
            case "show-completed":
              displayStyle = completed ? "block" : "none";
              break;
            case "delete-completed":
              if (completed) {
                item.remove();
              }
              return; 
          }
      
          item.style.display = displayStyle;
        });
      };
      
      const elementsEvents = [
        { elements: [todoInput], event: "keyup", handler: addNewTodo },
        { elements: [ulList], event: "click", handler: checkClick },
        { elements: [ulList], event: "dblclick", handler: handleDoubleClick },
        { elements: [ulList], event: "keydown", handler: handleKeyDown },
        { elements: buttons, event: "click", handler: handleClick },
      ];
      const addEventListeners = (elements, event, handler) => {
        elements.forEach((element) => {
          element.addEventListener(event, handler);
        });
      };
      elementsEvents.forEach(({ elements, event, handler }) => {
        addEventListeners(elements, event, handler);
      });
    })

