function updateClock() {
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];
    document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

function addtodo() {
    const todoText = document.getElementById('todo-input').value;
    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.className = 'todo__item';
        li.innerHTML = `${todoText} <div class='item__controls'><button id='edit' onclick="edittodo(this)"><img class='edit__item' src="./img/edit.png" alt=""></button> <button onclick="removetodo(this)">X</button></div>`;
        todoList.appendChild(li);
        document.getElementById('todo-input').value = '';
    }
}
function removetodo(button) {
    const dv = button.parentElement;
    const li = dv.parentElement;
    li.remove();
}
function edittodo(item){
    const dv = item.parentElement;
    const li = dv.parentElement;
    li.contentEditable = true;
    li.focus();
    li.addEventListener('blur', () => {
        li.contentEditable = false;
    });
}
function clearalltodos() {
    document.getElementById('todo-list').innerHTML = '';
}