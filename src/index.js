import "./style.css";

//form and submit button
const container = document.querySelector("#container");
const newTask = document.createElement("form");
const newTaskName = document.createElement("input");
newTaskName.type = "submit";
newTaskName.value = "+ New Task";

container.appendChild(newTask);

// task and date label

const task = document.createElement("input");
const date = document.createElement("input");
task.id = "task";
date.id = "date";
const labelTask = document.createElement("label");
const labelDate = document.createElement("label");
labelTask.value = "Task:";
labelDate.value = "Date:";

//Logic

newTask.append(labelTask, task, labelDate, date);
newTask.appendChild(newTaskName);
class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }
}

const task1 = new Task("dohw", "12/21/21");

const tasks = [];
tasks.push(task1);
console.log(tasks);

//eventlistener submit new task
let counter = 1;
newTaskName.addEventListener("click", submitToDo);

function submitToDo(event) {
  let newToDo = new Task(task.value, date.value);
  event.preventDefault();
  console.log(newToDo);
  //table row
  const table = document.getElementById("ToDoTable");
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const detail = document.createElement("button");
  detail.id = `${counter}`;
  cell1.id = `cell1-${counter}`;
  cell2.id = `cell2-${counter}`;
  cell1.classList.add("cells");
  cell2.classList.add("cells");
  counter++;
  detail.classList.add("tableButton");
  const cell3 = row.insertCell();
  detail.textContent = "Details";
  cell1.innerHTML = newToDo.title;
  cell2.innerHTML = newToDo.dueDate;
  cell3.appendChild(detail);
  task.value = '';
  date.value = '';
  updateTableButtons();
  addTableButtonListeners();
  
}

//details pop up

const popup = document.createElement("div");
popup.classList.add("popup");
const popupDate = document.createElement("p");
const popupTask = document.createElement("p");
const content = document.querySelector(".content");
const close = document.createElement("input");
close.setAttribute("type", "button");
close.setAttribute("value", "Close");

content.appendChild(popup);
popup.append(popupTask, popupDate, close);

//logic popup
let tableButtons = [];

function updateTableButtons() {
  tableButtons = document.querySelectorAll(".tableButton");
}

function addTableButtonListeners() {
  tableButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // const parentTd = button.parentNode;

      const adjacentTd1 = button.closest("tr").querySelector(".cells");
      console.log(adjacentTd1);
      const adjacentTd2 = adjacentTd1.nextElementSibling;
      popupTask.textContent = adjacentTd1.textContent;
      popupDate.textContent = adjacentTd2.textContent;

      // const td = button.closest('tr').querySelector('.cells')
      // popupTask.textContent = td.textContent;
      popup.style.display = "block";
      content.classList.add("blur");
    });
  });
}
updateTableButtons();

addTableButtonListeners();

close.addEventListener("click", () => {
  popup.style.display = "none";
  content.classList.remove("blur");
});
