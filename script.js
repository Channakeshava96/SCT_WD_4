document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const taskDateTime = document.getElementById('taskDateTime').value;

    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.innerText = taskInput;

    const taskTime = document.createElement('p');
    taskTime.classList.add('task-time');
    taskTime.innerText = taskDateTime ? `Due: ${taskDateTime}` : 'No Deadline';

    taskDetails.appendChild(taskText);
    taskDetails.appendChild(taskTime);

    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = 'Complete';
    completeBtn.addEventListener('click', () => {
        taskText.style.textDecoration = 'line-through';
    });

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () => {
        const newTask = prompt('Edit your task', taskText.innerText);
        if (newTask !== null) {
            taskText.innerText = newTask;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);

    taskItem.appendChild(taskDetails);
    taskItem.appendChild(taskButtons);
    taskList.appendChild(taskItem);

    document.getElementById('taskInput').value = '';
    document.getElementById('taskDateTime').value = '';
}
