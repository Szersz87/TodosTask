
// prepare DOM Elements
    const todoInput = document.querySelector('.todo-input')
    const ulList = document.querySelector('.todolist ul')
    const deleteBtn = document.querySelector('.delete')
    // const circle = document.querySelector('.circle')
    // const toolsPanel = document.querySelector('.tools')
    
    
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
    
    const createElementWithClass = (type, className) => {
                const element = document.createElement(type);
                element.classList.add(className);
                return element;
            }

        const createToolsArea = (newTodo) => {
                const toolsPanel = createElementWithClass('div', 'tools');
                const checkBox = createElementWithClass('circle', 'circle');
                const textArea = createElementWithClass('textArea', 'textArea');
                const deleteBtn = createElementWithClass('button', 'delete');
                deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        
                toolsPanel.append(checkBox, textArea, deleteBtn);
                newTodo.append(toolsPanel);
        
        }
// creat function to make our toolPanel used
const checkClick = e => {
    // if we click circle we will add class complited
    if(e.target.matches('.circle')){
    e.target.closest('li').classList.toggle('complited')
}else if(e.target.matches('.textArea')) {
    console.log('edit');
}else if(e.target.matches('.delete')){
    console.log('delete');
}
}
ulList.addEventListener('click', checkClick)


