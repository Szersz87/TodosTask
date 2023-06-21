let todoInput, newTodo, ulList, newTodos;

const main = () => {
    prepareDOMElementsAndEvents ()
}
const prepareDOMElementsAndEvents = () => {
    todoInput = document.querySelector('.todo-input')
    ulList = document.querySelector('.todolist ul')
    todoInput.addEventListener('keyup', addNewTodo)
}
// Dodajemy nowego todo jezeli input nie jest pusty i uzyjemy entera. tworzymy wtedy li z naszej ullisty i dodajemy do niej tekst ktory wpisalismy w inpucie. Nastepnie chcemy by ten tekst zniknal z inputa
const addNewTodo = (e) => {
    if (todoInput.value !== '' && e.key === 'Enter') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        todoInput.value = ''
    }
}



document.addEventListener('DOMContentLoaded',main)
