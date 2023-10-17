document.addEventListener("DOMContentLoaded", function() {
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("tasks");

    addTaskButton.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();

        if (taskText) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-task">Remove</button>
            `;

            taskList.appendChild(listItem);
            newTaskInput.value = "";

            const removeTaskButtons = document.querySelectorAll(".remove-task");
            for (const button of removeTaskButtons) {
                button.addEventListener("click", function() {
                    taskList.removeChild(button.parentElement);
                });
            }
        }
    });
});
