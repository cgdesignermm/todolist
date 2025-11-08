const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addtaskbtn = document.getElementById('addtaskbtn');

// Check Input
function checkInput() {
    return taskInput.value.trim();
}

// Create Task
function createTask() {
    const taskText = checkInput();
    if (taskText === '') return;
    
    const listItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    const deleteBtn = document.createElement('button');
    
    taskTextSpan.textContent = taskText;
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    // Add delete functionality to this specific button
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
    
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    
    // Clear input after adding task
    taskInput.value = '';
}

//Create Task when Click
function clickTaskCreate() {
    createTask();
}

//Create Task when Enter Key
function enterTaskCreate(event) {
    if (event.keyCode === 13) {
        createTask();
    }
}

// Event Listener Click & Enter
addtaskbtn.addEventListener('click', clickTaskCreate);
taskInput.addEventListener('keypress', enterTaskCreate);

function Test() {
    console.log("Got It!");
}