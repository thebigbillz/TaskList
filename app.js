//Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all events listeners
loadEventListeners();

function loadEventListeners() {
  //DOM onload
  document.addEventListener("DOMContentLoaded", onload);
  //Add Task
  form.addEventListener("submit", addTask);
  //Remove Task
  taskList.addEventListener("click", removeTask);
  //Clear Tasks
  clearBtn.addEventListener("click", clearTasks);
  // Fillter
  filter.addEventListener("keyup", filterTasks);
}

function onload(e) {
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((task) => {
      //Create li
      const li = document.createElement("li");
      //Add Class
      li.className = "collection-item";
      //Add Text
      li.innerText = task;

      //Create Link
      const link = document.createElement("a");
      // Add Class
      link.className = "delete-item secondary-content";
      //Add Icon
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Add Link to Li
      li.appendChild(link);
      // Append Child to Ul
      taskList.appendChild(li);
    });
  }
}

function addTask(e) {
  if (!taskInput.value) {
    alert("Task Required");
  }
  //Create li
  const li = document.createElement("li");
  //Add Class
  li.className = "collection-item";
  //Add Text
  li.innerText = taskInput.value;

  //Create Link
  const link = document.createElement("a");
  // Add Class
  link.className = "delete-item secondary-content";
  //Add Icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Add Link to Li
  li.appendChild(link);
  // Append Child to Ul
  taskList.appendChild(li);

  storeTask(taskInput.value);

  //Clear Input
  taskInput.value = "";

  e.preventDefault();
}

//Store Task
function storeTask(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      removeTaskLs(e.target.parentElement.parentElement.innerText);
    }
  }

  e.preventDefault();
}

function removeTaskLs(taskItem) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasks.filter((task) => task != taskItem);
  console.log(tasks);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(e) {
  taskList.innerHTML = "";
  console.log("clear");

  clearLs();

  e.preventDefault();
}

function clearLs() {
  localStorage.clear();
}
//Filter Tasks
function filterTasks(e) {
  const items = document.querySelectorAll(".collection-item");
  items.forEach((item) => {
    if (
      item.innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
