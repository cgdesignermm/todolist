const taskInput = document.getElementById('newTask');
const taskList = document.getElementById('task-list');
const addtaskbtn = document.getElementById('addtaskbtn');
const cache = [];

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
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });
    cache.push(taskText);
    console.log(cache);
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

//Reset Data
function resetData() {
    // t();
    const saveData = localStorage.getItem('saveData');
    const savedDataElement = document.getElementById('savedData');
    if (saveData) {
        savedDataElement.textContent = 'Nothing to do yet.';
    }
}

//Save Data
function saveData() {
    //Save the Input Task to localstorage
    localStorage.setItem('saveData', cache);

    //Update the displayed saved data
    displaySavedData();
    console.log(cache);
}

//Display Save Data
function displaySavedData() {
    // console.log("displaySavedData");
    const saveData = localStorage.getItem('saveData');
    const savedDataElement = document.getElementById('savedData');
    if (saveData) {
        savedDataElement.textContent = saveData;
    } else {
        savedDataElement.textContent = 'Nothing to do yet.';
    }
}

//Load Display Save Data
window.onload = displaySavedData;

// Event Listener Click & Enter & Save
addtaskbtn.addEventListener('click', clickTaskCreate);
taskInput.addEventListener('keypress', enterTaskCreate);
saveDataBtn.addEventListener('click', saveData);
resetDataBtn.addEventListener('click', resetData);

function t() {
    console.log("Got It!");
}


