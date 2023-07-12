
// prepare DOM Elements
    const todoInput = document.querySelector('.todo-input')
    const ulList = document.querySelector('.todolist ul')
    const deleteBtn = document.querySelector('.delete')
    const complete = document.querySelector('.complete1')
    
    // This function adds new todo, after press enter. 
    const addNewTodo = (e) => {
        if (todoInput.value !== '' && e.key === 'Enter') {
            const newTodo = document.createElement('li');
            newTodo.textContent = todoInput.value
            // its should add checkbox and deleteBtn
            createToolsArea(newTodo)
             ulList.append(newTodo)
            todoInput.value = ''
        }
    }
    // prepare DOM event
    todoInput.addEventListener('keyup', addNewTodo)
    
const createToolsArea = (newTodo) => {
    const checkbox = document.createElement ('checkbox')
    checkbox.classList.add('complete1')
    newTodo.append(checkbox)
    
    const toolsPanel = document.createElement ('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)
    
    const deleteBtn = document.createElement ('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
    
    toolsPanel.append(deleteBtn)
    checkbox.append(complete)
}

ulList.addEventListener('click', checkClick);
ulList.addEventListener('dblclick', handleDoubleClick);
ulList.addEventListener('keydown', handleKeyDown);


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
    
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// shows all todos
const showAllTodos = () => {
  const todoItems = document.querySelectorAll('.todolist ul li');
  todoItems.forEach((item) => {
    item.style.display = "block";
  });
};

// shows todos without class completed
const showActiveTodos = () => {
  const todoItems = document.querySelectorAll('.todolist ul li');
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
  const todoItems = document.querySelectorAll('.todolist ul li');
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
  const todoItems = document.querySelectorAll('.todolist ul li');

  todoItems.forEach((item) => {
    if (item.classList.contains("completed")) {
      item.remove();
    } else {
      item.style.display = "block";
    }
  });
};



