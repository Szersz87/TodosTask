let todoInput, newTodo, ulList, completeBtn, deleteBtn, allBtn, activeBtn,completedBtn;

const main = () => {
    prepareDOMElements ()
    prepareDOMEvents ()
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    add = document.querySelector('.')
    ulList = document.querySelector('.todolist ul')
    deleteBtn = document.querySelector('.delete')
    completeBtn = document.querySelector('.complete')
    allBtn = document.querySelector('.btn-all')
    activeBtn = document.querySelector('.btn-active')
    completedBtn = document.querySelector('.btn-completed')
}
const prepareDOMEvents = () => {

}
document.addEventListener('DOMContentLoaded',main)