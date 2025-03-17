const modal = document.getElementById("addTaskModal");
const openTaskBtn = document.getElementById("openAddTask");
const closeBtn = document.querySelector(".close");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.querySelector(".task-list");

openTaskBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

addTaskBtn.addEventListener("click", () => {
    const title = document.getElementById("taskTitle").value;
    const subject = document.getElementById("taskSubject").value;
    const deadline = document.getElementById("taskDeadline").value;

    if (title === "" || subject === "" || deadline === "") {
        alert("Please fill out all fields!");
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task-item");
    task.innerHTML = `
        <div>
            <strong>${title}</strong><br>${subject}
        </div>
        <span>${new Date(deadline).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
    `;

    taskList.appendChild(task);

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskSubject").value = "";
    document.getElementById("taskDeadline").value = "";

    modal.style.display = "none";
});
