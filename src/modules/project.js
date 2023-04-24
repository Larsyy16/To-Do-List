//button in index.js

//clears container and opens projects

//maybe project creates table
export default function clearContainer() {
    const content = document.querySelector('.content')
    const container = document.querySelector('#container');
    container.style.display = "none";
    const containerProject = document.createElement('div');
    const projectHeader = document.createElement('h2');
    projectHeader.textContent = 'Projects';
    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project Name';
    const projectName = document.createElement('input');
    projectName.id = 'projectName'
    const addProject = document.createElement('button');
    addProject.textContent = 'Create Project';
    addProject.id = 'addProject';

    




    content.appendChild(containerProject);
    containerProject.appendChild(projectHeader);
    projectHeader.append(projectLabel,projectName, addProject)


    addProject.addEventListener("click", () => {
      addTaskSetup();
    });
}


//Create project button
// let counter = 1;


export function addTaskSetup() {

    console.log('hi')
    const content = document.querySelector('.content')

    const newTask = document.createElement("form");
    
    const newTaskNameProject = document.createElement("input");
    newTaskNameProject.id = 'newTaskNameProject';
    newTaskNameProject.type = "submit";
    newTaskNameProject.value = "+ New Task";
  // task and date label

    const task = document.createElement("input");
task.id = "taskProject";
const labelTask = document.createElement("label");
const labelDate = document.createElement("label");
labelTask.textContent = "Task:";
labelDate.textContent = "Date:";

//date calendar

let dateInput = document.createElement("input");

dateInput.type = "date";
dateInput.id = 'dateInputProject';
dateInput.style.display = "block";




    const table = document.createElement('table');
    table.id = 'tableProject';
    const tableHeader = document.createElement('caption');
    const projectName = document.querySelector('#projectName');
    content.appendChild(table);
    content.appendChild(newTask);
    table.appendChild(tableHeader)
    tableHeader.textContent = projectName.value;


    newTask.append(labelTask, task, labelDate, dateInput);
    newTask.appendChild(newTaskNameProject);



    newTaskNameProject.addEventListener("click", newTaskButton);

  
  
}

export function newTaskButton(event) {
  const dateInput = document.getElementById("dateInputProject");

  event.preventDefault();
  //table row
  const table = document.getElementById("tableProject");
  const taskProject = document.querySelector('#taskProject');
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.classList.add("cells");
  cell2.classList.add("cells");
  const detail = document.createElement("button");
  
  detail.classList.add("tableButton");
  const cell3 = row.insertCell();
  detail.textContent = "Details";
  cell1.innerHTML = taskProject.value;
  cell2.innerHTML = dateInput.value;
  taskProject.textContent = '';
  dateInput.textContent = '';
  cell3.appendChild(detail);
    detail.addEventListener("click", function() {
    const content = document.querySelector('.content')
    const popup = document.querySelector('.popup')
    const popupTask = document.getElementById('popupTask');
    const popupDate = document.getElementById('popupDate');

 // const parentTd = button.parentNode;
  //  tracker = button.id;
 const adjacentTd1 = detail.closest("tr").querySelector(".cells");
//  console.log(tracker);
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
 content.classList.add("blur");});
}
// const newTaskName = document.getElementById("newTaskName")
//     addProject.addEventListener("click", addProj);
 
//   create task entry input and button
  //   const projectTaskButton = document.createElement('button');
  //   projectTaskButton.addEventListener("click", () => {
  //       const row = table.insertRow();
  //       const cell = row.insertCell();
  //       cell.innerHTML = task.textContent;
  //       task.textContent = '';
  //   });

  // event.preventDefault();
  // table row