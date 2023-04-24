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



    

    newTask.addEventListener("submit", (event) => {
      event.preventDefault();
      newTaskButton();
    });
    newTaskButton;
    loadTasks();
}

export function newTaskButton() {
  // Get the task and date input values
  const taskProject = document.querySelector('#taskProject').value;
  const dateInput = document.getElementById('dateInputProject').value;


  // Clear the task and date input fields
  document.querySelector('#taskProject').value = '';
  document.getElementById('dateInputProject').value = '';

  // Save the task to local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ task: taskProject, date: dateInput });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// When the page is loaded
export function loadTasks() {
  // Retrieve tasks from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Add tasks to the table
  const table = document.getElementById('tableProject');
  tasks.forEach((task) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const detail = document.createElement('button');
    detail.classList.add('tableButton2');
    detail.textContent = 'Details';
    const cell3 = row.insertCell();
    cell1.innerHTML = task.task;
    cell2.innerHTML = task.date;
    cell3.appendChild(detail);

    detail.addEventListener('click', () => {
      popupProject();
    });
  });
}
//popup
export function popupProject() {
  let projectTableButtons = document.querySelectorAll(".tableButton2");

       projectTableButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const content = document.querySelector('.content')
          const popup = document.querySelector('.popup')
          const popupTask = document.getElementById('popupTask');
          const popupDate = document.getElementById('popupDate');

       // const parentTd = button.parentNode;
       const adjacentTd1 = button.closest("tr").previousElementSibling;
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