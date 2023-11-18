document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");

    document.getElementById("addTask").addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);

            taskInput.value = "";
            listItem.querySelector(".delete-button").addEventListener("click", function () {
                listItem.remove();
            });
        }
    });
});
