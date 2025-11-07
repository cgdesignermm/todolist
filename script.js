document.getElementById('add-task-btn').addEventListener('click', function () {
    if (this.clicked = true) {
        const taskInput = document.getElementById('new-task');
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskList = document.getElementById('task-list');
            const listItem = document.createElement('li');
            const deleteBtn = document.createElement('deleteButton');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                taskList.removeChild(listItem);
                taskList.removeChild(deleteBtn);
            });
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            listItem.appendChild(deleteBtn);
            taskInput.value = '';
        }
    }
});

document.getElementById('new-task').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const taskInput = document.getElementById('new-task');
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskList = document.getElementById('task-list');
            const listItem = document.createElement('li');
            const deleteBtn = document.createElement('deleteButton');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                taskList.removeChild(listItem);
                taskList.removeChild(deleteBtn);
            });
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            listItem.appendChild(deleteBtn);
            taskInput.value = '';
        }
    }
});