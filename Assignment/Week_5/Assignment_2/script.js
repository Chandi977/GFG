// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

// Add Task
const addTask = () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return alert("Please enter a task");

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(task);
  renderTasks();
  taskInput.value = "";
};

// Render Tasks
const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "list-group-item task-item";

    const taskContent = document.createElement("span");
    taskContent.textContent = task.text;
    if (task.completed) taskContent.classList.add("completed");
    taskContent.style.cursor = "pointer";

    // Toggle complete on click
    taskContent.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    const btnGroup = document.createElement("div");

    const markBtn = document.createElement("button");
    markBtn.textContent = task.completed ? "Unmark" : "Mark";
    markBtn.className = "btn btn-sm btn-success me-2";
    markBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-sm btn-primary me-2";
    editBtn.addEventListener("click", () => editTask(task.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    btnGroup.appendChild(markBtn);
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(taskContent);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
  });
};

// Edit Task
const editTask = (id) => {
  const task = tasks.find((t) => t.id === id);
  const newText = prompt("Edit task:", task.text);
  if (newText !== null && newText.trim() !== "") {
    task.text = newText.trim();
    renderTasks();
  }
};

// Delete Task
const deleteTask = (id) => {
  tasks = tasks.filter((t) => t.id !== id);
  renderTasks();
};

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Initial render
renderTasks();
