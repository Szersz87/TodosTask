
// prepare DOM Elements
    const todoInput = document.querySelector('.todo-input')
    const ulList = document.querySelector('.todolist ul')
    const deleteBtn = document.querySelector('.delete')
    // const circle = document.querySelector('.circle')
    // const toolsPanel = document.querySelector('.tools')
    
    
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
                const checkBox = createElementWithClass('circle', 'circle');
                const textArea = createElementWithClass('p', 'textArea');
                const deleteBtn = createElementWithClass('button', 'delete');
                deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        textArea.textContent = text
                toolsPanel.append(checkBox, textArea, deleteBtn);
                newTodo.append(toolsPanel);
        
        }

const checkClick = e => {
    
switch (e.target){

case document.querySelector('.circle'):
    e.target.closest('li').classList.toggle('complited');
    break;
    case document.querySelector('.delete'):
        console.log('delete');
        break;
    case document.querySelector('.textArea'):
        console.log('nothing');
}
}

ulList.addEventListener('click', checkClick)


