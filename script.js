// prepare DOM Elements

    const todoInput = document.querySelector('.todo-input');
    const ulList = document.querySelector('.todolist ul');
    const buttons = document.querySelectorAll('.btn-all, .btn-active, .btn-completed, .btn-deleteAllCompleted');
    const todoItems = document.querySelectorAll('.todolist ul li');
    
    // This function adds new todo, after press enter. 
    const addNewTodo = (e) => {
        if (todoInput.value !== '' && e.key === 'Enter') {
            const newLi = document.createElement('li');
            createToolsArea(newLi, todoInput.value)
             ulList.append(newLi)
            todoInput.value = ''
        }
    }
    // prepare DOM event
    todoInput.addEventListener('keyup', addNewTodo)
    
    const createElementWithClass = (type, className) => {
                const element = document.createElement(type);
                element.classList.add(className);
                return element;
            }

        const createToolsArea = (newTodo, text) => {

                const toolsPanel = createElementWithClass('div', 'tools');
                const checkBox = createElementWithClass('div', 'circle');
                const textArea = createElementWithClass('p', 'textArea');
                const deleteBtn = createElementWithClass('button', 'delete');
                deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        textArea.textContent = text
                toolsPanel.append(checkBox, textArea, deleteBtn);
                newTodo.append(toolsPanel);
        }

// funkcja doubleClicka, jesli klikniemy na tekst w divie w li, uruchomimy edycje tekstu
const handleDoubleClick = (e) => {
            const listItem = e.target.closest('li');
            const checkBox = listItem.querySelector('.circle');
            const textArea = listItem.querySelector('.textArea');
          
            if (e.target.classList.contains('textArea')) {
              textArea.contentEditable = true;
              textArea.focus();
            }
          };
        //   funkcja zamykania okna edycji po kliknieciu entera
 const handleKeyDown = (e) => {
         const textArea = e.target.closest('.textArea');
            if (e.key === 'Enter' && textArea && textArea.contentEditable === 'true') {
              e.preventDefault();
              textArea.contentEditable = false;
            }
          };
const checkClick = e => {
    
    const listItem = e.target.closest('li');
    const checkBox = listItem.querySelector('.circle');
    const textArea = listItem.querySelector('.textArea');
    switch (true) {
        // jesli klikniemy na diva circle dodamy mu ikonke checked, a textarea otrzyma style comleted
        case e.target.classList.contains('circle'):
            listItem.classList.toggle('completed');
            if (listItem.classList.contains('completed')) {
                checkBox.innerHTML = '<i class="fas fa-check"></i>';
            } else {
                checkBox.innerHTML = '';
            }
            break;
        case e.target.classList.contains('delete'):
            e.target.closest('li').remove();
            break;
    }
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
  deleteCompletedButtonVisibility();
}
// show deleteAll button when something will be completed
const deleteCompletedButtonVisibility = () => {
  const deleteButton = document.querySelector('.btn-deleteAllCompleted');
  const completedTodos = document.querySelectorAll('.completed');

  if (completedTodos.length > 0) {
    deleteButton.style.display = 'block';
  } else {
    deleteButton.style.display = 'none';
  }
};
