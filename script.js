
// prepare DOM Elements
    const todoInput = document.querySelector('.todo-input');
    const ulList = document.querySelector('.todolist ul');
    
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
// przygotowanie przycisków do uzycia
const buttons = document.querySelectorAll('.btn-all, .btn-active, .btn-completed');
// funkcja sprawdza czy w konsoli beda wyswietlac sie przyciski
const handleClick = (e) => {
  const clickedButton = e.target;
  
  if (clickedButton.classList.contains('btn-all')) {
    console.log('Clicked btn-all');
    
  } else if (clickedButton.classList.contains('btn-active')) {
    console.log('Clicked btn-active');
    
  } else if (clickedButton.classList.contains('btn-completed')) {
    console.log('Clicked btn-completed');
    
  }
};
// nasluchujemy na wszystkie przyciski z footera
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});
