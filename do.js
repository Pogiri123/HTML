document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const category = categorySelect.value;

        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        taskContent.innerHTML = `<span>${taskText}</span> <small>${category}</small>`;
        taskItem.appendChild(taskContent);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');
        taskActions.innerHTML = `
            <button class="complete"><i class="fas fa-check"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        `;
        taskItem.appendChild(taskActions);

        tasksList.appendChild(taskItem);

        taskInput.value = '';
        categorySelect.value = 'offical';

        taskActions.querySelector('.complete').addEventListener('click', () => {
            taskContent.classList.toggle('completed');
        });

        taskActions.querySelector('.delete').addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });
    }
});
