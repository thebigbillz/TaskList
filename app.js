//Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all events listeners
loadEventListeners();

function loadEventListeners() {
  //Add Task
  form.addEventListener("submit", addTask);
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

  console.log(li);

  //Clear Input
  taskInput.value = "";

  e.preventDefault();
}
