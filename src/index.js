import "./style.css";
import deleteTask from "./modules/delete";

//form and submit button
const container = document.querySelector("#container");
const newTask = document.createElement("form");
const newTaskName = document.createElement("input");
newTaskName.type = "submit";
newTaskName.value = "+ New Task";

container.appendChild(newTask);

// task and date label

const task = document.createElement("input");
// const date = document.createElement("input");
task.id = "task";
// date.id = "date";
const labelTask = document.createElement("label");
const labelDate = document.createElement("label");
labelTask.textContent = "Task:";
labelDate.textContent = "Date:";


//date calendar
// const dateButton = document.createElement('button');
// dateButton.textContent = 'Due Date';

// function openCalendar() {
    let dateInput = document.createElement("input");

        dateInput.type = "date";
        dateInput.id = 'dateInput';
        dateInput.style.display = "block";
        // let newTaskForm = document.getElementsByName("newTask")[0];
//   newTask.appendChild(dateInput);
    //   }
// 





//Logic

newTask.append(labelTask, task, labelDate, dateInput);
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
    const dateInput = document.getElementById("dateInput");

  let newToDo = new Task(task.value, dateInput.value);
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
//   dateButton.value = '';
  updateTableButtons();
  addTableButtonListeners();
  
}

//details pop up

const popup = document.createElement("div");
const deleteButton = document.createElement('button');
deleteButton.id = 'deleteButton';
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click',deleteTask);
popup.classList.add("popup");
const popupDate = document.createElement("p");
const popupTask = document.createElement("p");
const content = document.querySelector(".content");
const close = document.createElement("input");
close.setAttribute("type", "button");
close.setAttribute("value", "Close");

content.appendChild(popup);
popup.append(popupTask, popupDate, deleteButton, close);

//logic popup
let tableButtons = [];

function updateTableButtons() {
  tableButtons = document.querySelectorAll(".tableButton");
}
let tracker = 1;

function addTableButtonListeners() {
  tableButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // const parentTd = button.parentNode;
        tracker = button.id;
      const adjacentTd1 = button.closest("tr").querySelector(".cells");
      console.log(tracker);
      const adjacentTd2 = adjacentTd1.nextElementSibling;
      popupTask.textContent = adjacentTd1.textContent;
      popupDate.textContent = adjacentTd2.textContent;
      popupTask.contentEditable = true;
      popupDate.contentEditable = true;
      popupDate.id = 'popupDate';
      popupTask.id = 'popupTask'

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

 const popupTask = document.getElementById('popupTask')
//  const popupDate = document.getElementById('popupDate');
 const tableButtons = document.querySelectorAll('.tableButton')

 tableButtons.forEach((button) => {
    if (tracker == button.id) {
        let buttonLocate = button.closest("tr").querySelector(".cells");
        buttonLocate.textContent = popupTask.textContent;
        let buttonLocate2 = buttonLocate.nextElementSibling;
        buttonLocate2.textContent = popupDate.textContent;
        //  buttonLocate.textContent = popupTask.textContent;
        // button.nextElementSibling.textContent = popupDate.textContent;
    }
 })
 popup.style.display = "none";
  content.classList.remove("blur");
});


