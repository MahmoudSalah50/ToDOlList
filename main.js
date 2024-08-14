document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    // Append the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';

    // Add event listener to the delete button
    li.querySelector('.deleteBtn').addEventListener('click', function() {
        taskList.removeChild(li);
    });
});
