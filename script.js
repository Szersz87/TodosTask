
// prepare DOM Elements
    const todoInput = document.querySelector('.todo-input')
    const ulList = document.querySelector('.todolist ul')
    const deleteBtn = document.querySelector('.delete')
    // const circle = document.querySelector('.circle')
    
    
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

    const toolsPanel = document.createElement ('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)
    
    const checkBox = document.createElement ('circle')
    checkBox.classList.add('circle')

    const textArea = document.createElement ('textArea')
    
    const deleteBtn = document.createElement ('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
    
    toolsPanel.append(checkBox, textArea, deleteBtn)
    
}


document.addEventListener('DOMContentLoaded')