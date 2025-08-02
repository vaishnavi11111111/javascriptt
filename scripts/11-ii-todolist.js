let toDoArray = [];

renderTodoList();

function getInputValue(){
const name = document.querySelector(".input-todo").value;
const dueDate = document.querySelector(".input-date").value;

toDoArray.push({ name: name, dueDate: dueDate });

document.querySelector(".input-todo").value = "";
document.querySelector(".input-date").value = "";
renderTodoList();
}

function renderTodoList(){
let todoListHTML = '';
for (let i = 0; i < toDoArray.length; i++) {
    const todoObject = toDoArray[i];
    const name=todoObject.name;
    const dueDate=todoObject.dueDate;
    const html = `
    <p class="todo-item">
        ${name} 
    </p>
    <p class="todo-item"> 
        ${dueDate}
    </p>
    <button onclick="
        toDoArray.splice(${i},1);
        renderTodoList()
        "
        class="delete-btn"
        >Delete
    </button>
     `;
    todoListHTML += html;
}

document.querySelector('.js-todolist')
    .innerHTML = todoListHTML;
}

renderTodoList();