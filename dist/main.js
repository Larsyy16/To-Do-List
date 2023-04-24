/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTask)
/* harmony export */ });
function deleteTask() {
  const tableButtons = document.querySelectorAll('.tableButton');
  const popupTask = document.querySelector('#popupTask');
  for (const button of tableButtons) {
    if (popupTask.textContent == button.closest("tr").querySelector(".cells").textContent) {
      const row = button.closest("tr");
      row.remove();
      break;
    }
  }
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskSetup": () => (/* binding */ addTaskSetup),
/* harmony export */   "default": () => (/* binding */ clearContainer),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "newTaskButton": () => (/* binding */ newTaskButton)
/* harmony export */ });
//button in index.js

//clears container and opens projects

//maybe project creates table
function clearContainer() {
  const content = document.querySelector('.content');
  const container = document.querySelector('#container');
  container.style.display = "none";
  const containerProject = document.createElement('div');
  const projectHeader = document.createElement('h2');
  projectHeader.textContent = 'Projects';
  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project Name';
  const projectName = document.createElement('input');
  projectName.id = 'projectName';
  const addProject = document.createElement('button');
  addProject.textContent = 'Create Project';
  addProject.id = 'addProject';
  content.appendChild(containerProject);
  containerProject.appendChild(projectHeader);
  projectHeader.append(projectLabel, projectName, addProject);
  addProject.addEventListener("click", () => {
    addTaskSetup();
  });
}

//Create project button
// let counter = 1;

function addTaskSetup() {
  console.log('hi');
  const content = document.querySelector('.content');
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
  table.appendChild(tableHeader);
  tableHeader.textContent = projectName.value;
  newTask.append(labelTask, task, labelDate, dateInput);
  newTask.appendChild(newTaskNameProject);
  newTaskNameProject.addEventListener("click", newTaskButton);
  loadTasks();
}
function newTaskButton(event) {
  // Get the task and date input values
  const taskProject = document.querySelector('#taskProject').value;
  const dateInput = document.getElementById('dateInputProject').value;

  // Add the task to the table
  const table = document.getElementById('tableProject');
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const detail = document.createElement('button');
  detail.classList.add('tableButton');
  detail.textContent = 'Details';
  const cell3 = row.insertCell();
  cell1.innerHTML = taskProject;
  cell2.innerHTML = dateInput;
  cell3.appendChild(detail);

  // Clear the task and date input fields
  document.querySelector('#taskProject').value = '';
  document.getElementById('dateInputProject').value = '';

  // Save the task to local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({
    task: taskProject,
    date: dateInput
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// When the page is loaded
function loadTasks() {
  // Retrieve tasks from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Add tasks to the table
  const table = document.getElementById('tableProject');
  tasks.forEach(task => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const detail = document.createElement('button');
    detail.classList.add('tableButton');
    detail.textContent = 'Details';
    const cell3 = row.insertCell();
    cell1.innerHTML = task.task;
    cell2.innerHTML = task.date;
    cell3.appendChild(detail);
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 20px;\n    text-align: center;\n}\n\n/* Set styles for the content section */\n.content {\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n}\n\n/* Set styles for the dashboard section */\n#dashboard {\n    background-color: #f2f2f2;\n    border-radius: 5px;\n    margin-right: 20px;\n    padding: 20px;\n    width: 250px;\n}\n\n/* Set styles for the dashboard buttons */\n.myButton1,\n.myButton2,\n.myButton3,\n.myButton4 {\n    background-color: #ffffff;\n    border: none;\n    border-radius: 5px;\n    color: #333333;\n    display: block;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n    text-align: left;\n    width: 100%;\n}\n\n/* Set styles for the container section */\n#container {\n    display: flex;\n    flex-direction: column;\n    background-color: #F0F0F0;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #cccccc;\n    flex-grow: 1;\n    padding: 20px;\n}\n\nfooter {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 16px;\n    padding: 10px;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\ncaption {\n    width: 50px;\n    margin-bottom: 30px;\n}\n\n#ToDoTable {\n    border-collapse: collapse;\n    width: 100%;\n    max-width: 600px;\n    margin: 0 auto;\n    background-color: #f1f1f1;\n    margin-top: 20px;\n    margin-bottom:30px;\n}\n\n/* Style for the caption */\n#ToDoTable caption {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 10px;\n    text-align: left;\n    width: 100px\n}\n\n/* Style for table header */\n#ToDoTable th {\n    background-color: #CCCCCC;\n    font-size: 1rem;\n    font-weight: bold;\n    text-align: left;\n    padding: 10px;\n}\n\n/* Style for table rows */\n#ToDoTable tr {\n    border-bottom: 1px solid #ddd;\n}\n\n/* Style for alternate table rows */\n#ToDoTable tr:nth-child(even) {\n    background-color: #f9f9f9;\n}\n\n/* Style for table cells */\n#ToDoTable td {\n    font-size: 1rem;\n    padding: 10px;\n    border: 1px solid #CCCCCC;\n}\n\n#ToDoTable tr:hover {\n    background-color: #ddd;\n}\n\n\n.popup {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999;\n    background-color: white;\n    width: 400px;\n    height: 300px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n}\n\n.popup p {\n    margin: 10px 0;\n    font-size: 18px;\n    margin-bottom: 10px;\n    margin-left:20px;\n    line-height: 1.5;\n    color: #333;  \n}\n\n    \n  .popup input[type=\"button\"] {\n    display: block;\n    margin: 20px auto 0;\n    padding: 10px 20px;\n    /* background-color: #fff; */\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n/* \n.popup::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: -1;\n     display: block; \n} */\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-color: #fff;\n    color: #000;\n    font-size: 14px;\n    padding: 4px;\n  }\n\n  form {\n    margin-right: 20px;\n\n  }\n  input[type=\"submit\"] {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 5px;\n  }\n  \n  /* Task input styles */\n  #task {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  flex-grow: 1;\n  background-color: #F0F0F0;\n  margin-right: 0;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"task\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  \n  /* Date input styles */\n  #dateInput {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  width: 200px;\n  background-color: #F0F0F0;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"dateInput\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  label {\n    display: flex;\n    align-items: center;\n    margin-right: 20px;\n    margin-bottom: 10px;\n  }\n  \n  label:last-of-type {\n    margin-right: 0;\n  }\n\n  .cells {\n    width: 150px;\n  }\n\n  .tableButton {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 14px;\n    border-radius: 5px;\n  }\n\n  #projectButton {\n    cursor:pointer;\n    border-radius: 5px;\n  }\n\n  #projectButton:hover {\n    background-color: #777777;\n    color:white;\n  }\n\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 20px;\n    text-align: center;\n}\n\n/* Set styles for the content section */\n.content {\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n}\n\n/* Set styles for the dashboard section */\n#dashboard {\n    background-color: #f2f2f2;\n    border-radius: 5px;\n    margin-right: 20px;\n    padding: 20px;\n    width: 250px;\n}\n\n/* Set styles for the dashboard buttons */\n.myButton1,\n.myButton2,\n.myButton3,\n.myButton4 {\n    background-color: #ffffff;\n    border: none;\n    border-radius: 5px;\n    color: #333333;\n    display: block;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n    text-align: left;\n    width: 100%;\n}\n\n/* Set styles for the container section */\n#container {\n    display: flex;\n    flex-direction: column;\n    background-color: #F0F0F0;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #cccccc;\n    flex-grow: 1;\n    padding: 20px;\n}\n\nfooter {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 16px;\n    padding: 10px;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\ncaption {\n    width: 50px;\n    margin-bottom: 30px;\n}\n\n#ToDoTable {\n    border-collapse: collapse;\n    width: 100%;\n    max-width: 600px;\n    margin: 0 auto;\n    background-color: #f1f1f1;\n    margin-top: 20px;\n    margin-bottom:30px;\n}\n\n/* Style for the caption */\n#ToDoTable caption {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 10px;\n    text-align: left;\n    width: 100px\n}\n\n/* Style for table header */\n#ToDoTable th {\n    background-color: #CCCCCC;\n    font-size: 1rem;\n    font-weight: bold;\n    text-align: left;\n    padding: 10px;\n}\n\n/* Style for table rows */\n#ToDoTable tr {\n    border-bottom: 1px solid #ddd;\n}\n\n/* Style for alternate table rows */\n#ToDoTable tr:nth-child(even) {\n    background-color: #f9f9f9;\n}\n\n/* Style for table cells */\n#ToDoTable td {\n    font-size: 1rem;\n    padding: 10px;\n    border: 1px solid #CCCCCC;\n}\n\n#ToDoTable tr:hover {\n    background-color: #ddd;\n}\n\n\n.popup {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999;\n    background-color: white;\n    width: 400px;\n    height: 300px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n}\n\n.popup p {\n    margin: 10px 0;\n    font-size: 18px;\n    margin-bottom: 10px;\n    margin-left:20px;\n    line-height: 1.5;\n    color: #333;  \n}\n\n    \n  .popup input[type=\"button\"] {\n    display: block;\n    margin: 20px auto 0;\n    padding: 10px 20px;\n    /* background-color: #fff; */\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n/* \n.popup::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: -1;\n     display: block; \n} */\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-color: #fff;\n    color: #000;\n    font-size: 14px;\n    padding: 4px;\n  }\n\n  form {\n    margin-right: 20px;\n\n  }\n  input[type=\"submit\"] {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 5px;\n  }\n  \n  /* Task input styles */\n  #task {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  flex-grow: 1;\n  background-color: #F0F0F0;\n  margin-right: 0;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"task\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  \n  /* Date input styles */\n  #dateInput {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  width: 200px;\n  background-color: #F0F0F0;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"dateInput\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  label {\n    display: flex;\n    align-items: center;\n    margin-right: 20px;\n    margin-bottom: 10px;\n  }\n  \n  label:last-of-type {\n    margin-right: 0;\n  }\n\n  .cells {\n    width: 150px;\n  }\n\n  .tableButton {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 14px;\n    border-radius: 5px;\n  }\n\n  #projectButton {\n    cursor:pointer;\n    border-radius: 5px;\n  }\n\n  #projectButton:hover {\n    background-color: #777777;\n    color:white;\n  }\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/delete */ "./src/modules/delete.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");






//form and submit button
const container = document.querySelector("#container");
const newTask = document.createElement("form");
const newTaskName = document.createElement("input");
newTaskName.type = "submit";
newTaskName.value = "+ New Task";
container.appendChild(newTask);

// task and date label

const task = document.createElement("input");
task.id = "task";
const labelTask = document.createElement("label");
const labelDate = document.createElement("label");
labelTask.textContent = "Task:";
labelDate.textContent = "Date:";

//date calendar

let dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = 'dateInput';
dateInput.style.display = "block";

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
let counterProject = 1;
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
  // updateTableButtons();
  addTableButtonListeners();
}

//details pop up

const popup = document.createElement("div");
const deleteButton = document.createElement('button');
deleteButton.id = 'deleteButton';
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', _modules_delete__WEBPACK_IMPORTED_MODULE_1__["default"]);
popup.classList.add("popup");
const popupDate = document.createElement("p");
const popupTask = document.createElement("p");
popupTask.id = 'popupTask';
popupDate.id = 'popupDate';
const content = document.querySelector(".content");
const close = document.createElement("input");
close.setAttribute("type", "button");
close.setAttribute("value", "Close");
content.appendChild(popup);
popup.append(popupTask, popupDate, deleteButton, close);

//logic popup
// let tableButtons = [];
//Detail button

//close button

close.addEventListener("click", () => {
  const popupTask = document.getElementById('popupTask');
  //  const popupDate = document.getElementById('popupDate');
  const tableButtons = document.querySelectorAll('.tableButton');
  tableButtons.forEach(button => {
    if (tracker == button.id) {
      let buttonLocate = button.closest("tr").querySelector(".cells");
      buttonLocate.textContent = popupTask.textContent;
      let buttonLocate2 = buttonLocate.nextElementSibling;
      buttonLocate2.textContent = popupDate.textContent;
      //  buttonLocate.textContent = popupTask.textContent;
      // button.nextElementSibling.textContent = popupDate.textContent;
    }
  });

  popup.style.display = "none";
  content.classList.remove("blur");
});

//Projects

//clearContainer
const projectButton = document.querySelector('#projectButton');
projectButton.addEventListener('click', _modules_project__WEBPACK_IMPORTED_MODULE_2__["default"]);

//create table
// const addProject = document.querySelector('#addProject')

// addProject.addEventListener("click", addProj);

// updateTableButtons();
//   addTableButtonListeners()
// function updateTableButtons() {
//  }
let tracker = 1;
function addTableButtonListeners() {
  let projectTableButtons = document.querySelectorAll(".tableButton");
  projectTableButtons.forEach(button => {
    button.addEventListener("click", () => {
      const content = document.querySelector('.content');
      const popup = document.querySelector('.popup');
      const popupTask = document.getElementById('popupTask');
      const popupDate = document.getElementById('popupDate');

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
      popupTask.id = 'popupTask';

      // const td = button.closest('tr').querySelector('.cells')
      // popupTask.textContent = td.textContent;
      popup.style.display = "block";
      content.classList.add("blur");
    });
  });
}
//  updateTableButtons();
(0,_modules_project__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.newTaskButton)();
(0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
addTableButtonListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFVBQVVBLENBQUEsRUFBSTtFQUNsQyxNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0VBQzlELE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsWUFBWSxDQUFDO0VBQ3RELEtBQUssTUFBTUMsTUFBTSxJQUFJTCxZQUFZLEVBQUU7SUFDaEMsSUFBSUcsU0FBUyxDQUFDRyxXQUFXLElBQUlELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDSCxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNFLFdBQVcsRUFBRTtNQUNuRixNQUFNRSxHQUFHLEdBQUdILE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQztNQUNoQ0MsR0FBRyxDQUFDQyxNQUFNLEVBQUU7TUFDWjtJQUVKO0VBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFQTs7QUFFQTtBQUNlLFNBQVNDLGNBQWNBLENBQUEsRUFBRztFQUNyQyxNQUFNQyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUNsRCxNQUFNUSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFlBQVksQ0FBQztFQUN0RFEsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQ2hDLE1BQU1DLGdCQUFnQixHQUFHZCxRQUFRLENBQUNlLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdEQsTUFBTUMsYUFBYSxHQUFHaEIsUUFBUSxDQUFDZSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2xEQyxhQUFhLENBQUNYLFdBQVcsR0FBRyxVQUFVO0VBQ3RDLE1BQU1ZLFlBQVksR0FBR2pCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNwREUsWUFBWSxDQUFDWixXQUFXLEdBQUcsY0FBYztFQUN6QyxNQUFNYSxXQUFXLEdBQUdsQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDbkRHLFdBQVcsQ0FBQ0MsRUFBRSxHQUFHLGFBQWE7RUFDOUIsTUFBTUMsVUFBVSxHQUFHcEIsUUFBUSxDQUFDZSxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ25ESyxVQUFVLENBQUNmLFdBQVcsR0FBRyxnQkFBZ0I7RUFDekNlLFVBQVUsQ0FBQ0QsRUFBRSxHQUFHLFlBQVk7RUFPNUJULE9BQU8sQ0FBQ1csV0FBVyxDQUFDUCxnQkFBZ0IsQ0FBQztFQUNyQ0EsZ0JBQWdCLENBQUNPLFdBQVcsQ0FBQ0wsYUFBYSxDQUFDO0VBQzNDQSxhQUFhLENBQUNNLE1BQU0sQ0FBQ0wsWUFBWSxFQUFDQyxXQUFXLEVBQUVFLFVBQVUsQ0FBQztFQUcxREEsVUFBVSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUN6Q0MsWUFBWSxFQUFFO0VBQ2hCLENBQUMsQ0FBQztBQUNOOztBQUdBO0FBQ0E7O0FBR08sU0FBU0EsWUFBWUEsQ0FBQSxFQUFHO0VBRTNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDakIsTUFBTWhCLE9BQU8sR0FBR1YsUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBRWxELE1BQU13QixPQUFPLEdBQUczQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFFOUMsTUFBTWEsa0JBQWtCLEdBQUc1QixRQUFRLENBQUNlLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDMURhLGtCQUFrQixDQUFDVCxFQUFFLEdBQUcsb0JBQW9CO0VBQzVDUyxrQkFBa0IsQ0FBQ0MsSUFBSSxHQUFHLFFBQVE7RUFDbENELGtCQUFrQixDQUFDRSxLQUFLLEdBQUcsWUFBWTtFQUN6Qzs7RUFFRSxNQUFNQyxJQUFJLEdBQUcvQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDaERnQixJQUFJLENBQUNaLEVBQUUsR0FBRyxhQUFhO0VBQ3ZCLE1BQU1hLFNBQVMsR0FBR2hDLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNqRCxNQUFNa0IsU0FBUyxHQUFHakMsUUFBUSxDQUFDZSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ2pEaUIsU0FBUyxDQUFDM0IsV0FBVyxHQUFHLE9BQU87RUFDL0I0QixTQUFTLENBQUM1QixXQUFXLEdBQUcsT0FBTzs7RUFFL0I7O0VBRUEsSUFBSTZCLFNBQVMsR0FBR2xDLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUUvQ21CLFNBQVMsQ0FBQ0wsSUFBSSxHQUFHLE1BQU07RUFDdkJLLFNBQVMsQ0FBQ2YsRUFBRSxHQUFHLGtCQUFrQjtFQUNqQ2UsU0FBUyxDQUFDdEIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztFQUs3QixNQUFNc0IsS0FBSyxHQUFHbkMsUUFBUSxDQUFDZSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzdDb0IsS0FBSyxDQUFDaEIsRUFBRSxHQUFHLGNBQWM7RUFDekIsTUFBTWlCLFdBQVcsR0FBR3BDLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNyRCxNQUFNRyxXQUFXLEdBQUdsQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDMURPLE9BQU8sQ0FBQ1csV0FBVyxDQUFDYyxLQUFLLENBQUM7RUFDMUJ6QixPQUFPLENBQUNXLFdBQVcsQ0FBQ00sT0FBTyxDQUFDO0VBQzVCUSxLQUFLLENBQUNkLFdBQVcsQ0FBQ2UsV0FBVyxDQUFDO0VBQzlCQSxXQUFXLENBQUMvQixXQUFXLEdBQUdhLFdBQVcsQ0FBQ1ksS0FBSztFQUczQ0gsT0FBTyxDQUFDTCxNQUFNLENBQUNVLFNBQVMsRUFBRUQsSUFBSSxFQUFFRSxTQUFTLEVBQUVDLFNBQVMsQ0FBQztFQUNyRFAsT0FBTyxDQUFDTixXQUFXLENBQUNPLGtCQUFrQixDQUFDO0VBSXZDQSxrQkFBa0IsQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFYyxhQUFhLENBQUM7RUFHM0RDLFNBQVMsRUFBRTtBQUNmO0FBRU8sU0FBU0QsYUFBYUEsQ0FBQ0UsS0FBSyxFQUFFO0VBQ25DO0VBQ0EsTUFBTUMsV0FBVyxHQUFHeEMsUUFBUSxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMyQixLQUFLO0VBQ2hFLE1BQU1JLFNBQVMsR0FBR2xDLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDWCxLQUFLOztFQUVuRTtFQUNBLE1BQU1LLEtBQUssR0FBR25DLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDckQsTUFBTWxDLEdBQUcsR0FBRzRCLEtBQUssQ0FBQ08sU0FBUyxFQUFFO0VBQzdCLE1BQU1DLEtBQUssR0FBR3BDLEdBQUcsQ0FBQ3FDLFVBQVUsRUFBRTtFQUM5QixNQUFNQyxLQUFLLEdBQUd0QyxHQUFHLENBQUNxQyxVQUFVLEVBQUU7RUFDOUIsTUFBTUUsTUFBTSxHQUFHOUMsUUFBUSxDQUFDZSxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQy9DK0IsTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDbkNGLE1BQU0sQ0FBQ3pDLFdBQVcsR0FBRyxTQUFTO0VBQzlCLE1BQU00QyxLQUFLLEdBQUcxQyxHQUFHLENBQUNxQyxVQUFVLEVBQUU7RUFDOUJELEtBQUssQ0FBQ08sU0FBUyxHQUFHVixXQUFXO0VBQzdCSyxLQUFLLENBQUNLLFNBQVMsR0FBR2hCLFNBQVM7RUFDM0JlLEtBQUssQ0FBQzVCLFdBQVcsQ0FBQ3lCLE1BQU0sQ0FBQzs7RUFFekI7RUFDQTlDLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDMkIsS0FBSyxHQUFHLEVBQUU7RUFDakQ5QixRQUFRLENBQUN5QyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ1gsS0FBSyxHQUFHLEVBQUU7O0VBRXREO0VBQ0EsTUFBTXFCLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtFQUM3REosS0FBSyxDQUFDSyxJQUFJLENBQUM7SUFBRXpCLElBQUksRUFBRVMsV0FBVztJQUFFaUIsSUFBSSxFQUFFdkI7RUFBVSxDQUFDLENBQUM7RUFDbERvQixZQUFZLENBQUNJLE9BQU8sQ0FBQyxPQUFPLEVBQUVOLElBQUksQ0FBQ08sU0FBUyxDQUFDUixLQUFLLENBQUMsQ0FBQztBQUN0RDs7QUFFQTtBQUNPLFNBQVNiLFNBQVNBLENBQUEsRUFBRztFQUMxQjtFQUNBLE1BQU1hLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRTs7RUFFN0Q7RUFDQSxNQUFNcEIsS0FBSyxHQUFHbkMsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUNyRFUsS0FBSyxDQUFDUyxPQUFPLENBQUU3QixJQUFJLElBQUs7SUFDdEIsTUFBTXhCLEdBQUcsR0FBRzRCLEtBQUssQ0FBQ08sU0FBUyxFQUFFO0lBQzdCLE1BQU1DLEtBQUssR0FBR3BDLEdBQUcsQ0FBQ3FDLFVBQVUsRUFBRTtJQUM5QixNQUFNQyxLQUFLLEdBQUd0QyxHQUFHLENBQUNxQyxVQUFVLEVBQUU7SUFDOUIsTUFBTUUsTUFBTSxHQUFHOUMsUUFBUSxDQUFDZSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DK0IsTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbkNGLE1BQU0sQ0FBQ3pDLFdBQVcsR0FBRyxTQUFTO0lBQzlCLE1BQU00QyxLQUFLLEdBQUcxQyxHQUFHLENBQUNxQyxVQUFVLEVBQUU7SUFDOUJELEtBQUssQ0FBQ08sU0FBUyxHQUFHbkIsSUFBSSxDQUFDQSxJQUFJO0lBQzNCYyxLQUFLLENBQUNLLFNBQVMsR0FBR25CLElBQUksQ0FBQzBCLElBQUk7SUFDM0JSLEtBQUssQ0FBQzVCLFdBQVcsQ0FBQ3lCLE1BQU0sQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QscUNBQXFDLGdCQUFnQixpQkFBaUIsR0FBRyxZQUFZLGdDQUFnQyxxQkFBcUIsc0JBQXNCLHdCQUF3QixvQkFBb0IseUJBQXlCLEdBQUcsd0RBQXdELG9CQUFvQiwwQkFBMEIsbUJBQW1CLEdBQUcsNERBQTRELGdDQUFnQyx5QkFBeUIseUJBQXlCLG9CQUFvQixtQkFBbUIsR0FBRyxtR0FBbUcsZ0NBQWdDLG1CQUFtQix5QkFBeUIscUJBQXFCLHFCQUFxQiwwQkFBMEIsdUJBQXVCLG9CQUFvQix1QkFBdUIsa0JBQWtCLEdBQUcsNERBQTRELG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHlCQUF5QixrQ0FBa0MsbUJBQW1CLG9CQUFvQixHQUFHLFlBQVksZ0NBQWdDLHFCQUFxQixzQkFBc0Isb0JBQW9CLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLDBCQUEwQixHQUFHLGdCQUFnQixnQ0FBZ0Msa0JBQWtCLHVCQUF1QixxQkFBcUIsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsR0FBRyxxREFBcUQsd0JBQXdCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHFCQUFxQixpREFBaUQsZ0NBQWdDLHNCQUFzQix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLCtDQUErQyxvQ0FBb0MsR0FBRyx5RUFBeUUsZ0NBQWdDLEdBQUcsZ0RBQWdELHNCQUFzQixvQkFBb0IsZ0NBQWdDLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLGNBQWMsb0JBQW9CLHNCQUFzQixlQUFlLGdCQUFnQix1Q0FBdUMsb0JBQW9CLDhCQUE4QixtQkFBbUIsb0JBQW9CLDBCQUEwQixrREFBa0QsR0FBRyxjQUFjLHFCQUFxQixzQkFBc0IsMEJBQTBCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLEdBQUcsMkNBQTJDLHFCQUFxQiwwQkFBMEIseUJBQXlCLGlDQUFpQyxxQkFBcUIseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixrQkFBa0Isc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQiwyQ0FBMkMsa0JBQWtCLHVCQUF1QixJQUFJLCtEQUErRCw2QkFBNkIsa0JBQWtCLHNCQUFzQixtQkFBbUIsS0FBSyxZQUFZLHlCQUF5QixPQUFPLDRCQUE0QixnQ0FBZ0MscUJBQXFCLG1CQUFtQix5QkFBeUIsc0JBQXNCLHNCQUFzQix5QkFBeUIsS0FBSywwQ0FBMEMsb0JBQW9CLG9CQUFvQixpQkFBaUIsdUJBQXVCLGlCQUFpQiw4QkFBOEIsb0JBQW9CLHdCQUF3QixLQUFLLDZCQUE2QixzQkFBc0Isd0JBQXdCLHlCQUF5QixLQUFLLCtDQUErQyxvQkFBb0Isb0JBQW9CLGlCQUFpQix1QkFBdUIsaUJBQWlCLDhCQUE4Qix1QkFBdUIsd0JBQXdCLEtBQUssa0NBQWtDLHNCQUFzQix3QkFBd0IseUJBQXlCLEtBQUssV0FBVyxvQkFBb0IsMEJBQTBCLHlCQUF5QiwwQkFBMEIsS0FBSyw0QkFBNEIsc0JBQXNCLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxvQkFBb0IsZ0NBQWdDLHFCQUFxQixtQkFBbUIsd0JBQXdCLHNCQUFzQixzQkFBc0IseUJBQXlCLEtBQUssc0JBQXNCLHFCQUFxQix5QkFBeUIsS0FBSyw0QkFBNEIsZ0NBQWdDLGtCQUFrQixLQUFLLGFBQWEsZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLFNBQVMsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLGVBQWUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVywrQkFBK0IscUNBQXFDLGdCQUFnQixpQkFBaUIsR0FBRyxZQUFZLGdDQUFnQyxxQkFBcUIsc0JBQXNCLHdCQUF3QixvQkFBb0IseUJBQXlCLEdBQUcsd0RBQXdELG9CQUFvQiwwQkFBMEIsbUJBQW1CLEdBQUcsNERBQTRELGdDQUFnQyx5QkFBeUIseUJBQXlCLG9CQUFvQixtQkFBbUIsR0FBRyxtR0FBbUcsZ0NBQWdDLG1CQUFtQix5QkFBeUIscUJBQXFCLHFCQUFxQiwwQkFBMEIsdUJBQXVCLG9CQUFvQix1QkFBdUIsa0JBQWtCLEdBQUcsNERBQTRELG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHlCQUF5QixrQ0FBa0MsbUJBQW1CLG9CQUFvQixHQUFHLFlBQVksZ0NBQWdDLHFCQUFxQixzQkFBc0Isb0JBQW9CLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLDBCQUEwQixHQUFHLGdCQUFnQixnQ0FBZ0Msa0JBQWtCLHVCQUF1QixxQkFBcUIsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsR0FBRyxxREFBcUQsd0JBQXdCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHFCQUFxQixpREFBaUQsZ0NBQWdDLHNCQUFzQix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLCtDQUErQyxvQ0FBb0MsR0FBRyx5RUFBeUUsZ0NBQWdDLEdBQUcsZ0RBQWdELHNCQUFzQixvQkFBb0IsZ0NBQWdDLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLGNBQWMsb0JBQW9CLHNCQUFzQixlQUFlLGdCQUFnQix1Q0FBdUMsb0JBQW9CLDhCQUE4QixtQkFBbUIsb0JBQW9CLDBCQUEwQixrREFBa0QsR0FBRyxjQUFjLHFCQUFxQixzQkFBc0IsMEJBQTBCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLEdBQUcsMkNBQTJDLHFCQUFxQiwwQkFBMEIseUJBQXlCLGlDQUFpQyxxQkFBcUIseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixrQkFBa0Isc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQiwyQ0FBMkMsa0JBQWtCLHVCQUF1QixJQUFJLCtEQUErRCw2QkFBNkIsa0JBQWtCLHNCQUFzQixtQkFBbUIsS0FBSyxZQUFZLHlCQUF5QixPQUFPLDRCQUE0QixnQ0FBZ0MscUJBQXFCLG1CQUFtQix5QkFBeUIsc0JBQXNCLHNCQUFzQix5QkFBeUIsS0FBSywwQ0FBMEMsb0JBQW9CLG9CQUFvQixpQkFBaUIsdUJBQXVCLGlCQUFpQiw4QkFBOEIsb0JBQW9CLHdCQUF3QixLQUFLLDZCQUE2QixzQkFBc0Isd0JBQXdCLHlCQUF5QixLQUFLLCtDQUErQyxvQkFBb0Isb0JBQW9CLGlCQUFpQix1QkFBdUIsaUJBQWlCLDhCQUE4Qix1QkFBdUIsd0JBQXdCLEtBQUssa0NBQWtDLHNCQUFzQix3QkFBd0IseUJBQXlCLEtBQUssV0FBVyxvQkFBb0IsMEJBQTBCLHlCQUF5QiwwQkFBMEIsS0FBSyw0QkFBNEIsc0JBQXNCLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxvQkFBb0IsZ0NBQWdDLHFCQUFxQixtQkFBbUIsd0JBQXdCLHNCQUFzQixzQkFBc0IseUJBQXlCLEtBQUssc0JBQXNCLHFCQUFxQix5QkFBeUIsS0FBSyw0QkFBNEIsZ0NBQWdDLGtCQUFrQixLQUFLLHlCQUF5QjtBQUNybFg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDSztBQUNGO0FBQ0s7QUFDSjtBQUM5QztBQUNBLE1BQU1uQyxTQUFTLEdBQUdYLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFlBQVksQ0FBQztBQUN0RCxNQUFNd0IsT0FBTyxHQUFHM0IsUUFBUSxDQUFDZSxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzlDLE1BQU04QyxXQUFXLEdBQUc3RCxRQUFRLENBQUNlLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDbkQ4QyxXQUFXLENBQUNoQyxJQUFJLEdBQUcsUUFBUTtBQUMzQmdDLFdBQVcsQ0FBQy9CLEtBQUssR0FBRyxZQUFZO0FBRWhDbkIsU0FBUyxDQUFDVSxXQUFXLENBQUNNLE9BQU8sQ0FBQzs7QUFFOUI7O0FBRUEsTUFBTUksSUFBSSxHQUFHL0IsUUFBUSxDQUFDZSxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzVDZ0IsSUFBSSxDQUFDWixFQUFFLEdBQUcsTUFBTTtBQUNoQixNQUFNYSxTQUFTLEdBQUdoQyxRQUFRLENBQUNlLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDakQsTUFBTWtCLFNBQVMsR0FBR2pDLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUNqRGlCLFNBQVMsQ0FBQzNCLFdBQVcsR0FBRyxPQUFPO0FBQy9CNEIsU0FBUyxDQUFDNUIsV0FBVyxHQUFHLE9BQU87O0FBRy9COztBQUVJLElBQUk2QixTQUFTLEdBQUdsQyxRQUFRLENBQUNlLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFM0NtQixTQUFTLENBQUNMLElBQUksR0FBRyxNQUFNO0FBQ3ZCSyxTQUFTLENBQUNmLEVBQUUsR0FBRyxXQUFXO0FBQzFCZSxTQUFTLENBQUN0QixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPOztBQUV6Qzs7QUFFQWMsT0FBTyxDQUFDTCxNQUFNLENBQUNVLFNBQVMsRUFBRUQsSUFBSSxFQUFFRSxTQUFTLEVBQUVDLFNBQVMsQ0FBQztBQUNyRFAsT0FBTyxDQUFDTixXQUFXLENBQUN3QyxXQUFXLENBQUM7QUFDaEMsTUFBTUMsSUFBSSxDQUFDO0VBQ1RDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFO0lBQzFCLElBQUksQ0FBQ0QsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQ3hCO0FBQ0Y7QUFFQSxNQUFNQyxLQUFLLEdBQUcsSUFBSUosSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7QUFFMUMsTUFBTVgsS0FBSyxHQUFHLEVBQUU7QUFDaEJBLEtBQUssQ0FBQ0ssSUFBSSxDQUFDVSxLQUFLLENBQUM7QUFDakJ6QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3lCLEtBQUssQ0FBQzs7QUFFbEI7QUFDQSxJQUFJZ0IsT0FBTyxHQUFHLENBQUM7QUFDZixJQUFJQyxjQUFjLEdBQUcsQ0FBQztBQUN0QlAsV0FBVyxDQUFDdEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOEMsVUFBVSxDQUFDO0FBRWpELFNBQVNBLFVBQVVBLENBQUM5QixLQUFLLEVBQUU7RUFDdkIsTUFBTUwsU0FBUyxHQUFHbEMsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUV4RCxJQUFJNkIsT0FBTyxHQUFHLElBQUlSLElBQUksQ0FBQy9CLElBQUksQ0FBQ0QsS0FBSyxFQUFFSSxTQUFTLENBQUNKLEtBQUssQ0FBQztFQUNuRFMsS0FBSyxDQUFDZ0MsY0FBYyxFQUFFO0VBQ3RCOUMsT0FBTyxDQUFDQyxHQUFHLENBQUM0QyxPQUFPLENBQUM7RUFDcEI7RUFDQSxNQUFNbkMsS0FBSyxHQUFHbkMsUUFBUSxDQUFDeUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUNsRCxNQUFNbEMsR0FBRyxHQUFHNEIsS0FBSyxDQUFDTyxTQUFTLEVBQUU7RUFDN0IsTUFBTUMsS0FBSyxHQUFHcEMsR0FBRyxDQUFDcUMsVUFBVSxFQUFFO0VBQzlCLE1BQU1DLEtBQUssR0FBR3RDLEdBQUcsQ0FBQ3FDLFVBQVUsRUFBRTtFQUM5QixNQUFNRSxNQUFNLEdBQUc5QyxRQUFRLENBQUNlLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDL0MrQixNQUFNLENBQUMzQixFQUFFLEdBQUksR0FBRWdELE9BQVEsRUFBQztFQUN4QnhCLEtBQUssQ0FBQ3hCLEVBQUUsR0FBSSxTQUFRZ0QsT0FBUSxFQUFDO0VBQzdCdEIsS0FBSyxDQUFDMUIsRUFBRSxHQUFJLFNBQVFnRCxPQUFRLEVBQUM7RUFDN0J4QixLQUFLLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUM1QkgsS0FBSyxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDNUJtQixPQUFPLEVBQUU7RUFDVHJCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ25DLE1BQU1DLEtBQUssR0FBRzFDLEdBQUcsQ0FBQ3FDLFVBQVUsRUFBRTtFQUM5QkUsTUFBTSxDQUFDekMsV0FBVyxHQUFHLFNBQVM7RUFDOUJzQyxLQUFLLENBQUNPLFNBQVMsR0FBR29CLE9BQU8sQ0FBQ04sS0FBSztFQUMvQm5CLEtBQUssQ0FBQ0ssU0FBUyxHQUFHb0IsT0FBTyxDQUFDTCxPQUFPO0VBQ2pDaEIsS0FBSyxDQUFDNUIsV0FBVyxDQUFDeUIsTUFBTSxDQUFDO0VBQ3pCZixJQUFJLENBQUNELEtBQUssR0FBRyxFQUFFO0VBQ2pCO0VBQ0U7RUFDQTBDLHVCQUF1QixFQUFFO0FBRTNCOztBQUVBOztBQUVBLE1BQU1DLEtBQUssR0FBR3pFLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUMzQyxNQUFNMkQsWUFBWSxHQUFHMUUsUUFBUSxDQUFDZSxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQ3JEMkQsWUFBWSxDQUFDdkQsRUFBRSxHQUFHLGNBQWM7QUFDaEN1RCxZQUFZLENBQUNyRSxXQUFXLEdBQUcsUUFBUTtBQUNuQ3FFLFlBQVksQ0FBQ25ELGdCQUFnQixDQUFDLE9BQU8sRUFBQ3pCLHVEQUFVLENBQUM7QUFDakQyRSxLQUFLLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDNUIsTUFBTTJCLFNBQVMsR0FBRzNFLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLEdBQUcsQ0FBQztBQUM3QyxNQUFNYixTQUFTLEdBQUdGLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLEdBQUcsQ0FBQztBQUM3Q2IsU0FBUyxDQUFDaUIsRUFBRSxHQUFHLFdBQVc7QUFDMUJ3RCxTQUFTLENBQUN4RCxFQUFFLEdBQUUsV0FBVztBQUN6QixNQUFNVCxPQUFPLEdBQUdWLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNsRCxNQUFNeUUsS0FBSyxHQUFHNUUsUUFBUSxDQUFDZSxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzdDNkQsS0FBSyxDQUFDQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztBQUNwQ0QsS0FBSyxDQUFDQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUVwQ25FLE9BQU8sQ0FBQ1csV0FBVyxDQUFDb0QsS0FBSyxDQUFDO0FBQzFCQSxLQUFLLENBQUNuRCxNQUFNLENBQUNwQixTQUFTLEVBQUV5RSxTQUFTLEVBQUVELFlBQVksRUFBRUUsS0FBSyxDQUFDOztBQUV2RDtBQUNBO0FBQ0E7O0FBS0E7O0FBRUFBLEtBQUssQ0FBQ3JELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBRXJDLE1BQU1yQixTQUFTLEdBQUdGLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDdkQ7RUFDQyxNQUFNMUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztFQUU5REYsWUFBWSxDQUFDNkQsT0FBTyxDQUFFeEQsTUFBTSxJQUFLO0lBQzlCLElBQUkwRSxPQUFPLElBQUkxRSxNQUFNLENBQUNlLEVBQUUsRUFBRTtNQUN0QixJQUFJNEQsWUFBWSxHQUFHM0UsTUFBTSxDQUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNILGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDL0Q0RSxZQUFZLENBQUMxRSxXQUFXLEdBQUdILFNBQVMsQ0FBQ0csV0FBVztNQUNoRCxJQUFJMkUsYUFBYSxHQUFHRCxZQUFZLENBQUNFLGtCQUFrQjtNQUNuREQsYUFBYSxDQUFDM0UsV0FBVyxHQUFHc0UsU0FBUyxDQUFDdEUsV0FBVztNQUNqRDtNQUNBO0lBQ0o7RUFDSCxDQUFDLENBQUM7O0VBQ0ZvRSxLQUFLLENBQUM3RCxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQzNCSCxPQUFPLENBQUNxQyxTQUFTLENBQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xDLENBQUMsQ0FBQzs7QUFFRjs7QUFFQTtBQUNBLE1BQU0wRSxhQUFhLEdBQUdsRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUU5RCtFLGFBQWEsQ0FBQzNELGdCQUFnQixDQUFDLE9BQU8sRUFBQ2Qsd0RBQWMsQ0FBQzs7QUFHdEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLElBQUlxRSxPQUFPLEdBQUcsQ0FBQztBQUVmLFNBQVNOLHVCQUF1QkEsQ0FBQSxFQUFHO0VBQ2xDLElBQUlXLG1CQUFtQixHQUFHbkYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7RUFHOURrRixtQkFBbUIsQ0FBQ3ZCLE9BQU8sQ0FBRXhELE1BQU0sSUFBSztJQUN2Q0EsTUFBTSxDQUFDbUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDckMsTUFBTWIsT0FBTyxHQUFHVixRQUFRLENBQUNHLGFBQWEsQ0FBQyxVQUFVLENBQUM7TUFDbEQsTUFBTXNFLEtBQUssR0FBR3pFLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUM5QyxNQUFNRCxTQUFTLEdBQUdGLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxXQUFXLENBQUM7TUFDdEQsTUFBTWtDLFNBQVMsR0FBRzNFLFFBQVEsQ0FBQ3lDLGNBQWMsQ0FBQyxXQUFXLENBQUM7O01BRXpEO01BQ0VxQyxPQUFPLEdBQUcxRSxNQUFNLENBQUNlLEVBQUU7TUFDckIsTUFBTWlFLFdBQVcsR0FBR2hGLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDSCxhQUFhLENBQUMsUUFBUSxDQUFDO01BQ2hFc0IsT0FBTyxDQUFDQyxHQUFHLENBQUNvRCxPQUFPLENBQUM7TUFDcEIsTUFBTU8sV0FBVyxHQUFHRCxXQUFXLENBQUNILGtCQUFrQjtNQUNsRC9FLFNBQVMsQ0FBQ0csV0FBVyxHQUFHK0UsV0FBVyxDQUFDL0UsV0FBVztNQUMvQ3NFLFNBQVMsQ0FBQ3RFLFdBQVcsR0FBR2dGLFdBQVcsQ0FBQ2hGLFdBQVc7TUFDL0NILFNBQVMsQ0FBQ29GLGVBQWUsR0FBRyxJQUFJO01BQ2hDWCxTQUFTLENBQUNXLGVBQWUsR0FBRyxJQUFJO01BQ2hDWCxTQUFTLENBQUN4RCxFQUFFLEdBQUcsV0FBVztNQUMxQmpCLFNBQVMsQ0FBQ2lCLEVBQUUsR0FBRyxXQUFXOztNQUUxQjtNQUNBO01BQ0FzRCxLQUFLLENBQUM3RCxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO01BQzdCSCxPQUFPLENBQUNxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7QUFDRDtBQUNBeEIsNERBQVksRUFBRTtBQUNiYSwrREFBYSxFQUFFO0FBQ2ZDLDJEQUFTLEVBQUU7QUFDWGtDLHVCQUF1QixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGVsZXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYXNrICgpIHtcbiAgICBjb25zdCB0YWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVCdXR0b24nKVxuICAgIGNvbnN0IHBvcHVwVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFRhc2snKTtcbiAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiB0YWJsZUJ1dHRvbnMpIHtcbiAgICAgICBpZiAocG9wdXBUYXNrLnRleHRDb250ZW50ID09IGJ1dHRvbi5jbG9zZXN0KFwidHJcIikucXVlcnlTZWxlY3RvcihcIi5jZWxsc1wiKS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICBjb25zdCByb3cgPSBidXR0b24uY2xvc2VzdChcInRyXCIpO1xuICAgICAgICAgICByb3cucmVtb3ZlKCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICBcbiAgICAgICB9XG4gICAgfVxufVxuXG5cbiIsIi8vYnV0dG9uIGluIGluZGV4LmpzXG5cbi8vY2xlYXJzIGNvbnRhaW5lciBhbmQgb3BlbnMgcHJvamVjdHNcblxuLy9tYXliZSBwcm9qZWN0IGNyZWF0ZXMgdGFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgY29udGFpbmVyUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLmlkID0gJ3Byb2plY3ROYW1lJ1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZFByb2plY3QnO1xuXG4gICAgXG5cblxuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lclByb2plY3QpO1xuICAgIGNvbnRhaW5lclByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmQocHJvamVjdExhYmVsLHByb2plY3ROYW1lLCBhZGRQcm9qZWN0KVxuXG5cbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRUYXNrU2V0dXAoKTtcbiAgICB9KTtcbn1cblxuXG4vL0NyZWF0ZSBwcm9qZWN0IGJ1dHRvblxuLy8gbGV0IGNvdW50ZXIgPSAxO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrU2V0dXAoKSB7XG5cbiAgICBjb25zb2xlLmxvZygnaGknKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgbmV3VGFza05hbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1Rhc2tOYW1lUHJvamVjdC5pZCA9ICduZXdUYXNrTmFtZVByb2plY3QnO1xuICAgIG5ld1Rhc2tOYW1lUHJvamVjdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBuZXdUYXNrTmFtZVByb2plY3QudmFsdWUgPSBcIisgTmV3IFRhc2tcIjtcbiAgLy8gdGFzayBhbmQgZGF0ZSBsYWJlbFxuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRhc2suaWQgPSBcInRhc2tQcm9qZWN0XCI7XG5jb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5sYWJlbFRhc2sudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5sYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG5cbi8vZGF0ZSBjYWxlbmRhclxuXG5sZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5kYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuZGF0ZUlucHV0LmlkID0gJ2RhdGVJbnB1dFByb2plY3QnO1xuZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblxuXG5cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuaWQgPSAndGFibGVQcm9qZWN0JztcbiAgICBjb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcHRpb24nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXIpXG4gICAgdGFibGVIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcblxuXG4gICAgbmV3VGFzay5hcHBlbmQobGFiZWxUYXNrLCB0YXNrLCBsYWJlbERhdGUsIGRhdGVJbnB1dCk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZVByb2plY3QpO1xuXG5cblxuICAgIG5ld1Rhc2tOYW1lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza0J1dHRvbik7XG5cbiAgXG4gICAgbG9hZFRhc2tzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrQnV0dG9uKGV2ZW50KSB7XG4gIC8vIEdldCB0aGUgdGFzayBhbmQgZGF0ZSBpbnB1dCB2YWx1ZXNcbiAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1Byb2plY3QnKS52YWx1ZTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dFByb2plY3QnKS52YWx1ZTtcblxuICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIHRhYmxlXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlUHJvamVjdCcpO1xuICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgY29uc3QgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBjb25zdCBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZXRhaWwuY2xhc3NMaXN0LmFkZCgndGFibGVCdXR0b24nKTtcbiAgZGV0YWlsLnRleHRDb250ZW50ID0gJ0RldGFpbHMnO1xuICBjb25zdCBjZWxsMyA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gIGNlbGwxLmlubmVySFRNTCA9IHRhc2tQcm9qZWN0O1xuICBjZWxsMi5pbm5lckhUTUwgPSBkYXRlSW5wdXQ7XG4gIGNlbGwzLmFwcGVuZENoaWxkKGRldGFpbCk7XG5cbiAgLy8gQ2xlYXIgdGhlIHRhc2sgYW5kIGRhdGUgaW5wdXQgZmllbGRzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJvamVjdCcpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlSW5wdXRQcm9qZWN0JykudmFsdWUgPSAnJztcblxuICAvLyBTYXZlIHRoZSB0YXNrIHRvIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgdGFza3MucHVzaCh7IHRhc2s6IHRhc2tQcm9qZWN0LCBkYXRlOiBkYXRlSW5wdXQgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbi8vIFdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICAvLyBSZXRyaWV2ZSB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcblxuICAvLyBBZGQgdGFza3MgdG8gdGhlIHRhYmxlXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlUHJvamVjdCcpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgY29uc3QgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgIGNvbnN0IGNlbGwyID0gcm93Lmluc2VydENlbGwoKTtcbiAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZXRhaWwuY2xhc3NMaXN0LmFkZCgndGFibGVCdXR0b24nKTtcbiAgICBkZXRhaWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyc7XG4gICAgY29uc3QgY2VsbDMgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwxLmlubmVySFRNTCA9IHRhc2sudGFzaztcbiAgICBjZWxsMi5pbm5lckhUTUwgPSB0YXNrLmRhdGU7XG4gICAgY2VsbDMuYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgfSk7XG59XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBTZXQgc3R5bGVzIGZvciB0aGUgY29udGVudCBzZWN0aW9uICovXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBkYXNoYm9hcmQgc2VjdGlvbiAqL1xcbiNkYXNoYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4vKiBTZXQgc3R5bGVzIGZvciB0aGUgZGFzaGJvYXJkIGJ1dHRvbnMgKi9cXG4ubXlCdXR0b24xLFxcbi5teUJ1dHRvbjIsXFxuLm15QnV0dG9uMyxcXG4ubXlCdXR0b240IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBjb250YWluZXIgc2VjdGlvbiAqL1xcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjY2NjYztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuY2FwdGlvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jVG9Eb1RhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XFxufVxcblxcbi8qIFN0eWxlIGZvciB0aGUgY2FwdGlvbiAqL1xcbiNUb0RvVGFibGUgY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDEwMHB4XFxufVxcblxcbi8qIFN0eWxlIGZvciB0YWJsZSBoZWFkZXIgKi9cXG4jVG9Eb1RhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRhYmxlIHJvd3MgKi9cXG4jVG9Eb1RhYmxlIHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi8qIFN0eWxlIGZvciBhbHRlcm5hdGUgdGFibGUgcm93cyAqL1xcbiNUb0RvVGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRhYmxlIGNlbGxzICovXFxuI1RvRG9UYWJsZSB0ZCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcXG59XFxuXFxuI1RvRG9UYWJsZSB0cjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcblxcbi5wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cCBwIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG59XFxuXFxuICAgIFxcbiAgLnBvcHVwIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4vKiBcXG4ucG9wdXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgIGRpc3BsYXk6IGJsb2NrOyBcXG59ICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICB9XFxuXFxuICBmb3JtIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcbiAgfVxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICBcXG4gIC8qIFRhc2sgaW5wdXQgc3R5bGVzICovXFxuICAjdGFzayB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgbGFiZWxbZm9yPVxcXCJ0YXNrXFxcIl0ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcXG4gIC8qIERhdGUgaW5wdXQgc3R5bGVzICovXFxuICAjZGF0ZUlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICBsYWJlbFtmb3I9XFxcImRhdGVJbnB1dFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG5cXG4gIC5jZWxscyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gIH1cXG5cXG4gIC50YWJsZUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgI3Byb2plY3RCdXR0b24ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgI3Byb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gIH1cXG5cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBLHVDQUF1QztBQUN2QztJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Is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QUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBTZXQgc3R5bGVzIGZvciB0aGUgY29udGVudCBzZWN0aW9uICovXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBkYXNoYm9hcmQgc2VjdGlvbiAqL1xcbiNkYXNoYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4vKiBTZXQgc3R5bGVzIGZvciB0aGUgZGFzaGJvYXJkIGJ1dHRvbnMgKi9cXG4ubXlCdXR0b24xLFxcbi5teUJ1dHRvbjIsXFxuLm15QnV0dG9uMyxcXG4ubXlCdXR0b240IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBjb250YWluZXIgc2VjdGlvbiAqL1xcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjY2NjYztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuY2FwdGlvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jVG9Eb1RhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XFxufVxcblxcbi8qIFN0eWxlIGZvciB0aGUgY2FwdGlvbiAqL1xcbiNUb0RvVGFibGUgY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDEwMHB4XFxufVxcblxcbi8qIFN0eWxlIGZvciB0YWJsZSBoZWFkZXIgKi9cXG4jVG9Eb1RhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRhYmxlIHJvd3MgKi9cXG4jVG9Eb1RhYmxlIHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi8qIFN0eWxlIGZvciBhbHRlcm5hdGUgdGFibGUgcm93cyAqL1xcbiNUb0RvVGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRhYmxlIGNlbGxzICovXFxuI1RvRG9UYWJsZSB0ZCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcXG59XFxuXFxuI1RvRG9UYWJsZSB0cjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcblxcbi5wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wb3B1cCBwIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG59XFxuXFxuICAgIFxcbiAgLnBvcHVwIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4vKiBcXG4ucG9wdXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgIGRpc3BsYXk6IGJsb2NrOyBcXG59ICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICB9XFxuXFxuICBmb3JtIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcbiAgfVxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICBcXG4gIC8qIFRhc2sgaW5wdXQgc3R5bGVzICovXFxuICAjdGFzayB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgbGFiZWxbZm9yPVxcXCJ0YXNrXFxcIl0ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcXG4gIC8qIERhdGUgaW5wdXQgc3R5bGVzICovXFxuICAjZGF0ZUlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICBsYWJlbFtmb3I9XFxcImRhdGVJbnB1dFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG5cXG4gIC5jZWxscyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gIH1cXG5cXG4gIC50YWJsZUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgI3Byb2plY3RCdXR0b24ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgI3Byb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gIH1cXG5cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSBcIi4vbW9kdWxlcy9kZWxldGVcIjtcbmltcG9ydCBjbGVhckNvbnRhaW5lciBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbmltcG9ydCBhZGRUYXNrU2V0dXAgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBuZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBsb2FkVGFza3MgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbi8vZm9ybSBhbmQgc3VibWl0IGJ1dHRvblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5jb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbm5ld1Rhc2tOYW1lLnR5cGUgPSBcInN1Ym1pdFwiO1xubmV3VGFza05hbWUudmFsdWUgPSBcIisgTmV3IFRhc2tcIjtcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4vLyB0YXNrIGFuZCBkYXRlIGxhYmVsXG5cbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrLmlkID0gXCJ0YXNrXCI7XG5jb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5sYWJlbFRhc2sudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5sYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG5cblxuLy9kYXRlIGNhbGVuZGFyXG5cbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9ICdkYXRlSW5wdXQnO1xuICAgICAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuLy9Mb2dpY1xuXG5uZXdUYXNrLmFwcGVuZChsYWJlbFRhc2ssIHRhc2ssIGxhYmVsRGF0ZSwgZGF0ZUlucHV0KTtcbm5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza05hbWUpO1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbn1cblxuY29uc3QgdGFzazEgPSBuZXcgVGFzayhcImRvaHdcIiwgXCIxMi8yMS8yMVwiKTtcblxuY29uc3QgdGFza3MgPSBbXTtcbnRhc2tzLnB1c2godGFzazEpO1xuY29uc29sZS5sb2codGFza3MpO1xuXG4vL2V2ZW50bGlzdGVuZXIgc3VibWl0IG5ldyB0YXNrXG5sZXQgY291bnRlciA9IDE7XG5sZXQgY291bnRlclByb2plY3QgPSAxO1xubmV3VGFza05hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRvRG8pO1xuXG5mdW5jdGlvbiBzdWJtaXRUb0RvKGV2ZW50KSB7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XG5cbiAgbGV0IG5ld1RvRG8gPSBuZXcgVGFzayh0YXNrLnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhuZXdUb0RvKTtcbiAgLy90YWJsZSByb3dcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRvRG9UYWJsZVwiKTtcbiAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gIGNvbnN0IGNlbGwxID0gcm93Lmluc2VydENlbGwoKTtcbiAgY29uc3QgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXRhaWwuaWQgPSBgJHtjb3VudGVyfWA7XG4gIGNlbGwxLmlkID0gYGNlbGwxLSR7Y291bnRlcn1gO1xuICBjZWxsMi5pZCA9IGBjZWxsMi0ke2NvdW50ZXJ9YDtcbiAgY2VsbDEuY2xhc3NMaXN0LmFkZChcImNlbGxzXCIpO1xuICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwiY2VsbHNcIik7XG4gIGNvdW50ZXIrKztcbiAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZUJ1dHRvblwiKTtcbiAgY29uc3QgY2VsbDMgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBkZXRhaWwudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbiAgY2VsbDEuaW5uZXJIVE1MID0gbmV3VG9Eby50aXRsZTtcbiAgY2VsbDIuaW5uZXJIVE1MID0gbmV3VG9Eby5kdWVEYXRlO1xuICBjZWxsMy5hcHBlbmRDaGlsZChkZXRhaWwpO1xuICB0YXNrLnZhbHVlID0gJyc7XG4vLyAgIGRhdGVCdXR0b24udmFsdWUgPSAnJztcbiAgLy8gdXBkYXRlVGFibGVCdXR0b25zKCk7XG4gIGFkZFRhYmxlQnV0dG9uTGlzdGVuZXJzKCk7XG4gIFxufVxuXG4vL2RldGFpbHMgcG9wIHVwXG5cbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZGVsZXRlQnV0dG9uLmlkID0gJ2RlbGV0ZUJ1dHRvbic7XG5kZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGVsZXRlVGFzayk7XG5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5jb25zdCBwb3B1cERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHBvcHVwVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xucG9wdXBUYXNrLmlkID0gJ3BvcHVwVGFzayc7XG5wb3B1cERhdGUuaWQgPSdwb3B1cERhdGUnO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ2xvc2VcIik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xucG9wdXAuYXBwZW5kKHBvcHVwVGFzaywgcG9wdXBEYXRlLCBkZWxldGVCdXR0b24sIGNsb3NlKTtcblxuLy9sb2dpYyBwb3B1cFxuLy8gbGV0IHRhYmxlQnV0dG9ucyA9IFtdO1xuLy9EZXRhaWwgYnV0dG9uXG5cblxuXG5cbi8vY2xvc2UgYnV0dG9uXG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiBjb25zdCBwb3B1cFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBUYXNrJylcbi8vICBjb25zdCBwb3B1cERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBEYXRlJyk7XG4gY29uc3QgdGFibGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlQnV0dG9uJylcblxuIHRhYmxlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAodHJhY2tlciA9PSBidXR0b24uaWQpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkxvY2F0ZSA9IGJ1dHRvbi5jbG9zZXN0KFwidHJcIikucXVlcnlTZWxlY3RvcihcIi5jZWxsc1wiKTtcbiAgICAgICAgYnV0dG9uTG9jYXRlLnRleHRDb250ZW50ID0gcG9wdXBUYXNrLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgYnV0dG9uTG9jYXRlMiA9IGJ1dHRvbkxvY2F0ZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGJ1dHRvbkxvY2F0ZTIudGV4dENvbnRlbnQgPSBwb3B1cERhdGUudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vICBidXR0b25Mb2NhdGUudGV4dENvbnRlbnQgPSBwb3B1cFRhc2sudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vIGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBwb3B1cERhdGUudGV4dENvbnRlbnQ7XG4gICAgfVxuIH0pXG4gcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpO1xufSk7XG5cbi8vUHJvamVjdHNcblxuLy9jbGVhckNvbnRhaW5lclxuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnV0dG9uJyk7XG5cbnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNsZWFyQ29udGFpbmVyKTtcblxuXG4vL2NyZWF0ZSB0YWJsZVxuLy8gY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0JylcblxuLy8gYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvaik7XG5cbi8vIHVwZGF0ZVRhYmxlQnV0dG9ucygpO1xuLy8gICBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpXG4vLyBmdW5jdGlvbiB1cGRhdGVUYWJsZUJ1dHRvbnMoKSB7XG4vLyAgfVxuIGxldCB0cmFja2VyID0gMTtcbiBcbiBmdW5jdGlvbiBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpIHtcbiAgbGV0IHByb2plY3RUYWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlQnV0dG9uXCIpO1xuXG5cbiAgICAgICBwcm9qZWN0VGFibGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJylcbiAgICAgICAgICBjb25zdCBwb3B1cFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBUYXNrJyk7XG4gICAgICAgICAgY29uc3QgcG9wdXBEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRGF0ZScpO1xuXG4gICAgICAgLy8gY29uc3QgcGFyZW50VGQgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgIHRyYWNrZXIgPSBidXR0b24uaWQ7XG4gICAgICAgY29uc3QgYWRqYWNlbnRUZDEgPSBidXR0b24uY2xvc2VzdChcInRyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbHNcIik7XG4gICAgICAgY29uc29sZS5sb2codHJhY2tlcik7XG4gICAgICAgY29uc3QgYWRqYWNlbnRUZDIgPSBhZGphY2VudFRkMS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgcG9wdXBUYXNrLnRleHRDb250ZW50ID0gYWRqYWNlbnRUZDEudGV4dENvbnRlbnQ7XG4gICAgICAgcG9wdXBEYXRlLnRleHRDb250ZW50ID0gYWRqYWNlbnRUZDIudGV4dENvbnRlbnQ7XG4gICAgICAgcG9wdXBUYXNrLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgcG9wdXBEYXRlLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgcG9wdXBEYXRlLmlkID0gJ3BvcHVwRGF0ZSc7XG4gICAgICAgcG9wdXBUYXNrLmlkID0gJ3BvcHVwVGFzaydcbiBcbiAgICAgICAvLyBjb25zdCB0ZCA9IGJ1dHRvbi5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJy5jZWxscycpXG4gICAgICAgLy8gcG9wdXBUYXNrLnRleHRDb250ZW50ID0gdGQudGV4dENvbnRlbnQ7XG4gICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpO1xuICAgICB9KTtcbiAgIH0pO1xuIH1cbi8vICB1cGRhdGVUYWJsZUJ1dHRvbnMoKTtcbmFkZFRhc2tTZXR1cCgpO1xuIG5ld1Rhc2tCdXR0b24oKTtcbiBsb2FkVGFza3MoKTtcbiBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpO1xuXG4iXSwibmFtZXMiOlsiZGVsZXRlVGFzayIsInRhYmxlQnV0dG9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBvcHVwVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJ0ZXh0Q29udGVudCIsImNsb3Nlc3QiLCJyb3ciLCJyZW1vdmUiLCJjbGVhckNvbnRhaW5lciIsImNvbnRlbnQiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJjb250YWluZXJQcm9qZWN0IiwiY3JlYXRlRWxlbWVudCIsInByb2plY3RIZWFkZXIiLCJwcm9qZWN0TGFiZWwiLCJwcm9qZWN0TmFtZSIsImlkIiwiYWRkUHJvamVjdCIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZFRhc2tTZXR1cCIsImNvbnNvbGUiLCJsb2ciLCJuZXdUYXNrIiwibmV3VGFza05hbWVQcm9qZWN0IiwidHlwZSIsInZhbHVlIiwidGFzayIsImxhYmVsVGFzayIsImxhYmVsRGF0ZSIsImRhdGVJbnB1dCIsInRhYmxlIiwidGFibGVIZWFkZXIiLCJuZXdUYXNrQnV0dG9uIiwibG9hZFRhc2tzIiwiZXZlbnQiLCJ0YXNrUHJvamVjdCIsImdldEVsZW1lbnRCeUlkIiwiaW5zZXJ0Um93IiwiY2VsbDEiLCJpbnNlcnRDZWxsIiwiY2VsbDIiLCJkZXRhaWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsMyIsImlubmVySFRNTCIsInRhc2tzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJkYXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZvckVhY2giLCJuZXdUYXNrTmFtZSIsIlRhc2siLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZHVlRGF0ZSIsInRhc2sxIiwiY291bnRlciIsImNvdW50ZXJQcm9qZWN0Iiwic3VibWl0VG9EbyIsIm5ld1RvRG8iLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRhYmxlQnV0dG9uTGlzdGVuZXJzIiwicG9wdXAiLCJkZWxldGVCdXR0b24iLCJwb3B1cERhdGUiLCJjbG9zZSIsInNldEF0dHJpYnV0ZSIsInRyYWNrZXIiLCJidXR0b25Mb2NhdGUiLCJidXR0b25Mb2NhdGUyIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvamVjdEJ1dHRvbiIsInByb2plY3RUYWJsZUJ1dHRvbnMiLCJhZGphY2VudFRkMSIsImFkamFjZW50VGQyIiwiY29udGVudEVkaXRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==