let todoInput, newTodo, ulList, completeBtn, deleteBtn, allBtn, activeBtn,completedBtn, newTodos;

const main = () => {
    prepareDOMElements ()
    prepareDOMEvents ()
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    // add = document.querySelector('.')
    ulList = document.querySelector('.todolist ul')
    deleteBtn = document.querySelector('.delete')
    completeBtn = document.querySelector('.complete')
    allBtn = document.querySelector('.btn-all')
    activeBtn = document.querySelector('.btn-active')
    completedBtn = document.querySelector('.btn-completed')
}
const prepareDOMEvents = () => {
    todoInput.addEventListener('keyup', enterKeyCheck)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        todoInput.value = ''
    }
}

const enterKeyCheck = e => {
    if (e.key === 'Enter'){
        addNewTodo()
    }
}

document.addEventListener('DOMContentLoaded',main)