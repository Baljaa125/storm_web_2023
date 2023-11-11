const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return; // Dont add an empty task.
    }


    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });


    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear the input field

}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', addInput);

function addInput (event) {
    if (event.key === "Enter") {
        addTask();
    }
}
