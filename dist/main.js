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
}
function newTaskButton(event) {
  const dateInput = document.getElementById("dateInputProject");
  event.preventDefault();
  //table row
  const table = document.getElementById("tableProject");
  const taskProject = document.querySelector('#taskProject');
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const detail = document.createElement("button");
  detail.classList.add("tableButton");
  const cell3 = row.insertCell();
  detail.textContent = "Details";
  cell1.innerHTML = taskProject.value;
  cell2.innerHTML = dateInput.value;
  taskProject.textContent = '';
  dateInput.textContent = '';
  cell3.appendChild(detail);
  detail.addEventListener("click", function () {
    console.log('hi');
  });
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
  // addTableButtonListeners();
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
addTableButtonListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQ2xELE1BQU00RCxLQUFLLEdBQUcvRCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDOUMsTUFBTUQsU0FBUyxHQUFHRixRQUFRLENBQUN1QyxjQUFjLENBQUMsV0FBVyxDQUFDO01BQ3RELE1BQU0wQixTQUFTLEdBQUdqRSxRQUFRLENBQUN1QyxjQUFjLENBQUMsV0FBVyxDQUFDOztNQUV6RDtNQUNFOEIsT0FBTyxHQUFHakUsTUFBTSxDQUFDZSxFQUFFO01BQ3JCLE1BQU15RCxXQUFXLEdBQUd4RSxNQUFNLENBQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQ0gsYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUNoRXNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMkMsT0FBTyxDQUFDO01BQ3BCLE1BQU1RLFdBQVcsR0FBR0QsV0FBVyxDQUFDSixrQkFBa0I7TUFDbER0RSxTQUFTLENBQUNHLFdBQVcsR0FBR3VFLFdBQVcsQ0FBQ3ZFLFdBQVc7TUFDL0M0RCxTQUFTLENBQUM1RCxXQUFXLEdBQUd3RSxXQUFXLENBQUN4RSxXQUFXO01BQy9DSCxTQUFTLENBQUM0RSxlQUFlLEdBQUcsSUFBSTtNQUNoQ2IsU0FBUyxDQUFDYSxlQUFlLEdBQUcsSUFBSTtNQUNoQ2IsU0FBUyxDQUFDOUMsRUFBRSxHQUFHLFdBQVc7TUFDMUJqQixTQUFTLENBQUNpQixFQUFFLEdBQUcsV0FBVzs7TUFFMUI7TUFDQTtNQUNBNEMsS0FBSyxDQUFDbkQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztNQUM3QkgsT0FBTyxDQUFDcUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKO0FBQ0Q7QUFDQzBCLHVCQUF1QixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGVsZXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYXNrICgpIHtcbiAgICBjb25zdCB0YWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVCdXR0b24nKVxuICAgIGNvbnN0IHBvcHVwVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFRhc2snKTtcbiAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiB0YWJsZUJ1dHRvbnMpIHtcbiAgICAgICBpZiAocG9wdXBUYXNrLnRleHRDb250ZW50ID09IGJ1dHRvbi5jbG9zZXN0KFwidHJcIikucXVlcnlTZWxlY3RvcihcIi5jZWxsc1wiKS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICBjb25zdCByb3cgPSBidXR0b24uY2xvc2VzdChcInRyXCIpO1xuICAgICAgICAgICByb3cucmVtb3ZlKCk7XG4gICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICBcbiAgICAgICB9XG4gICAgfVxufVxuXG5cbiIsIi8vYnV0dG9uIGluIGluZGV4LmpzXG5cbi8vY2xlYXJzIGNvbnRhaW5lciBhbmQgb3BlbnMgcHJvamVjdHNcblxuLy9tYXliZSBwcm9qZWN0IGNyZWF0ZXMgdGFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgY29udGFpbmVyUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLmlkID0gJ3Byb2plY3ROYW1lJ1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZFByb2plY3QnO1xuXG4gICAgXG5cblxuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lclByb2plY3QpO1xuICAgIGNvbnRhaW5lclByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmQocHJvamVjdExhYmVsLHByb2plY3ROYW1lLCBhZGRQcm9qZWN0KVxuXG5cbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRUYXNrU2V0dXAoKTtcbiAgICB9KTtcbn1cblxuXG4vL0NyZWF0ZSBwcm9qZWN0IGJ1dHRvblxuLy8gbGV0IGNvdW50ZXIgPSAxO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrU2V0dXAoKSB7XG5cbiAgICBjb25zb2xlLmxvZygnaGknKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgbmV3VGFza05hbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1Rhc2tOYW1lUHJvamVjdC5pZCA9ICduZXdUYXNrTmFtZVByb2plY3QnO1xuICAgIG5ld1Rhc2tOYW1lUHJvamVjdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBuZXdUYXNrTmFtZVByb2plY3QudmFsdWUgPSBcIisgTmV3IFRhc2tcIjtcbiAgLy8gdGFzayBhbmQgZGF0ZSBsYWJlbFxuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRhc2suaWQgPSBcInRhc2tQcm9qZWN0XCI7XG5jb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5sYWJlbFRhc2sudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5sYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG5cbi8vZGF0ZSBjYWxlbmRhclxuXG5sZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5kYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuZGF0ZUlucHV0LmlkID0gJ2RhdGVJbnB1dFByb2plY3QnO1xuZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblxuXG5cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGUuaWQgPSAndGFibGVQcm9qZWN0JztcbiAgICBjb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcHRpb24nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXIpXG4gICAgdGFibGVIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcblxuXG4gICAgbmV3VGFzay5hcHBlbmQobGFiZWxUYXNrLCB0YXNrLCBsYWJlbERhdGUsIGRhdGVJbnB1dCk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZVByb2plY3QpO1xuXG5cblxuICAgIG5ld1Rhc2tOYW1lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza0J1dHRvbik7XG5cbiAgXG4gIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3VGFza0J1dHRvbihldmVudCkge1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFByb2plY3RcIik7XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy90YWJsZSByb3dcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlUHJvamVjdFwiKTtcbiAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1Byb2plY3QnKTtcbiAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gIGNvbnN0IGNlbGwxID0gcm93Lmluc2VydENlbGwoKTtcbiAgY29uc3QgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBcbiAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZUJ1dHRvblwiKTtcbiAgY29uc3QgY2VsbDMgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBkZXRhaWwudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbiAgY2VsbDEuaW5uZXJIVE1MID0gdGFza1Byb2plY3QudmFsdWU7XG4gIGNlbGwyLmlubmVySFRNTCA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSAnJztcbiAgZGF0ZUlucHV0LnRleHRDb250ZW50ID0gJyc7XG4gIGNlbGwzLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gICAgZGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtjb25zb2xlLmxvZygnaGknKX0pO1xufVxuLy8gY29uc3QgbmV3VGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tOYW1lXCIpXG4vLyAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvaik7XG4gXG4vLyAgIGNyZWF0ZSB0YXNrIGVudHJ5IGlucHV0IGFuZCBidXR0b25cbiAgLy8gICBjb25zdCBwcm9qZWN0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAvLyAgIHByb2plY3RUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAvLyAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgLy8gICAgICAgY2VsbC5pbm5lckhUTUwgPSB0YXNrLnRleHRDb250ZW50O1xuICAvLyAgICAgICB0YXNrLnRleHRDb250ZW50ID0gJyc7XG4gIC8vICAgfSk7XG5cbiAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gdGFibGUgcm93IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBjb250ZW50IHNlY3Rpb24gKi9cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGRhc2hib2FyZCBzZWN0aW9uICovXFxuI2Rhc2hib2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBkYXNoYm9hcmQgYnV0dG9ucyAqL1xcbi5teUJ1dHRvbjEsXFxuLm15QnV0dG9uMixcXG4ubXlCdXR0b24zLFxcbi5teUJ1dHRvbjQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGNvbnRhaW5lciBzZWN0aW9uICovXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjY2NjO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5jYXB0aW9uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbiNUb0RvVGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MzBweDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRoZSBjYXB0aW9uICovXFxuI1RvRG9UYWJsZSBjYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwcHhcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRhYmxlIGhlYWRlciAqL1xcbiNUb0RvVGFibGUgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGFibGUgcm93cyAqL1xcbiNUb0RvVGFibGUgdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIGFsdGVybmF0ZSB0YWJsZSByb3dzICovXFxuI1RvRG9UYWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGFibGUgY2VsbHMgKi9cXG4jVG9Eb1RhYmxlIHRkIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcbn1cXG5cXG4jVG9Eb1RhYmxlIHRyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuXFxuLnBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwIHAge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbn1cXG5cXG4gICAgXFxuICAucG9wdXAgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbi8qIFxcbi5wb3B1cDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICAgZGlzcGxheTogYmxvY2s7IFxcbn0gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gIH1cXG5cXG4gIGZvcm0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFxuICB9XFxuICBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gIFxcbiAgLyogVGFzayBpbnB1dCBzdHlsZXMgKi9cXG4gICN0YXNrIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICBsYWJlbFtmb3I9XFxcInRhc2tcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLyogRGF0ZSBpbnB1dCBzdHlsZXMgKi9cXG4gICNkYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIGxhYmVsW2Zvcj1cXFwiZGF0ZUlucHV0XFxcIl0ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgbGFiZWw6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLmNlbGxzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnRhYmxlQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuICAjcHJvamVjdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuICAjcHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgfVxcblxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6QztJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7OztJQUlJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQSx5Q0FBeUM7QUFDekM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLG1DQUFtQztBQUNuQztJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7OztFQUdFO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUNGOzs7Ozs7Ozs7OztHQVdHOztBQUVIO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFLGFBQWE7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQSxzQkFBc0I7RUFDdEI7SUFDRSxhQUFhO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBjb250ZW50IHNlY3Rpb24gKi9cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGRhc2hib2FyZCBzZWN0aW9uICovXFxuI2Rhc2hib2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBkYXNoYm9hcmQgYnV0dG9ucyAqL1xcbi5teUJ1dHRvbjEsXFxuLm15QnV0dG9uMixcXG4ubXlCdXR0b24zLFxcbi5teUJ1dHRvbjQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGNvbnRhaW5lciBzZWN0aW9uICovXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjY2NjO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5jYXB0aW9uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbiNUb0RvVGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MzBweDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRoZSBjYXB0aW9uICovXFxuI1RvRG9UYWJsZSBjYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwcHhcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRhYmxlIGhlYWRlciAqL1xcbiNUb0RvVGFibGUgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGFibGUgcm93cyAqL1xcbiNUb0RvVGFibGUgdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIGFsdGVybmF0ZSB0YWJsZSByb3dzICovXFxuI1RvRG9UYWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGFibGUgY2VsbHMgKi9cXG4jVG9Eb1RhYmxlIHRkIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcbn1cXG5cXG4jVG9Eb1RhYmxlIHRyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuXFxuLnBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwIHAge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbn1cXG5cXG4gICAgXFxuICAucG9wdXAgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbi8qIFxcbi5wb3B1cDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICAgZGlzcGxheTogYmxvY2s7IFxcbn0gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gIH1cXG5cXG4gIGZvcm0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFxuICB9XFxuICBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gIFxcbiAgLyogVGFzayBpbnB1dCBzdHlsZXMgKi9cXG4gICN0YXNrIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICBsYWJlbFtmb3I9XFxcInRhc2tcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLyogRGF0ZSBpbnB1dCBzdHlsZXMgKi9cXG4gICNkYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIGxhYmVsW2Zvcj1cXFwiZGF0ZUlucHV0XFxcIl0ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgbGFiZWw6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLmNlbGxzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnRhYmxlQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuICAjcHJvamVjdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuICAjcHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgfVxcblxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tIFwiLi9tb2R1bGVzL2RlbGV0ZVwiO1xuaW1wb3J0IGNsZWFyQ29udGFpbmVyIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IGFkZFRhc2tTZXR1cCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbmltcG9ydCB7IG5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbi8vZm9ybSBhbmQgc3VibWl0IGJ1dHRvblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5jb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbm5ld1Rhc2tOYW1lLnR5cGUgPSBcInN1Ym1pdFwiO1xubmV3VGFza05hbWUudmFsdWUgPSBcIisgTmV3IFRhc2tcIjtcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4vLyB0YXNrIGFuZCBkYXRlIGxhYmVsXG5cbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50YXNrLmlkID0gXCJ0YXNrXCI7XG5jb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5sYWJlbFRhc2sudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XG5sYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG5cblxuLy9kYXRlIGNhbGVuZGFyXG5cbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9ICdkYXRlSW5wdXQnO1xuICAgICAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuLy9Mb2dpY1xuXG5uZXdUYXNrLmFwcGVuZChsYWJlbFRhc2ssIHRhc2ssIGxhYmVsRGF0ZSwgZGF0ZUlucHV0KTtcbm5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza05hbWUpO1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbn1cblxuY29uc3QgdGFzazEgPSBuZXcgVGFzayhcImRvaHdcIiwgXCIxMi8yMS8yMVwiKTtcblxuY29uc3QgdGFza3MgPSBbXTtcbnRhc2tzLnB1c2godGFzazEpO1xuY29uc29sZS5sb2codGFza3MpO1xuXG4vL2V2ZW50bGlzdGVuZXIgc3VibWl0IG5ldyB0YXNrXG5sZXQgY291bnRlciA9IDE7XG5sZXQgY291bnRlclByb2plY3QgPSAxO1xubmV3VGFza05hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRvRG8pO1xuXG5mdW5jdGlvbiBzdWJtaXRUb0RvKGV2ZW50KSB7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XG5cbiAgbGV0IG5ld1RvRG8gPSBuZXcgVGFzayh0YXNrLnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhuZXdUb0RvKTtcbiAgLy90YWJsZSByb3dcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRvRG9UYWJsZVwiKTtcbiAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gIGNvbnN0IGNlbGwxID0gcm93Lmluc2VydENlbGwoKTtcbiAgY29uc3QgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXRhaWwuaWQgPSBgJHtjb3VudGVyfWA7XG4gIGNlbGwxLmlkID0gYGNlbGwxLSR7Y291bnRlcn1gO1xuICBjZWxsMi5pZCA9IGBjZWxsMi0ke2NvdW50ZXJ9YDtcbiAgY2VsbDEuY2xhc3NMaXN0LmFkZChcImNlbGxzXCIpO1xuICBjZWxsMi5jbGFzc0xpc3QuYWRkKFwiY2VsbHNcIik7XG4gIGNvdW50ZXIrKztcbiAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZUJ1dHRvblwiKTtcbiAgY29uc3QgY2VsbDMgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBkZXRhaWwudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbiAgY2VsbDEuaW5uZXJIVE1MID0gbmV3VG9Eby50aXRsZTtcbiAgY2VsbDIuaW5uZXJIVE1MID0gbmV3VG9Eby5kdWVEYXRlO1xuICBjZWxsMy5hcHBlbmRDaGlsZChkZXRhaWwpO1xuICB0YXNrLnZhbHVlID0gJyc7XG4vLyAgIGRhdGVCdXR0b24udmFsdWUgPSAnJztcbiAgLy8gdXBkYXRlVGFibGVCdXR0b25zKCk7XG4gIC8vIGFkZFRhYmxlQnV0dG9uTGlzdGVuZXJzKCk7XG4gIFxufVxuXG4vL2RldGFpbHMgcG9wIHVwXG5cbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZGVsZXRlQnV0dG9uLmlkID0gJ2RlbGV0ZUJ1dHRvbic7XG5kZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGVsZXRlVGFzayk7XG5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5jb25zdCBwb3B1cERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHBvcHVwVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xucG9wdXBUYXNrLmlkID0gJ3BvcHVwVGFzayc7XG5wb3B1cERhdGUuaWQgPSdwb3B1cERhdGUnO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ2xvc2VcIik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xucG9wdXAuYXBwZW5kKHBvcHVwVGFzaywgcG9wdXBEYXRlLCBkZWxldGVCdXR0b24sIGNsb3NlKTtcblxuLy9sb2dpYyBwb3B1cFxuLy8gbGV0IHRhYmxlQnV0dG9ucyA9IFtdO1xuLy9EZXRhaWwgYnV0dG9uXG5cblxuXG5cbi8vY2xvc2UgYnV0dG9uXG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiBjb25zdCBwb3B1cFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBUYXNrJylcbi8vICBjb25zdCBwb3B1cERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBEYXRlJyk7XG4gY29uc3QgdGFibGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlQnV0dG9uJylcblxuIHRhYmxlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAodHJhY2tlciA9PSBidXR0b24uaWQpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkxvY2F0ZSA9IGJ1dHRvbi5jbG9zZXN0KFwidHJcIikucXVlcnlTZWxlY3RvcihcIi5jZWxsc1wiKTtcbiAgICAgICAgYnV0dG9uTG9jYXRlLnRleHRDb250ZW50ID0gcG9wdXBUYXNrLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgYnV0dG9uTG9jYXRlMiA9IGJ1dHRvbkxvY2F0ZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGJ1dHRvbkxvY2F0ZTIudGV4dENvbnRlbnQgPSBwb3B1cERhdGUudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vICBidXR0b25Mb2NhdGUudGV4dENvbnRlbnQgPSBwb3B1cFRhc2sudGV4dENvbnRlbnQ7XG4gICAgICAgIC8vIGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBwb3B1cERhdGUudGV4dENvbnRlbnQ7XG4gICAgfVxuIH0pXG4gcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpO1xufSk7XG5cbi8vUHJvamVjdHNcblxuLy9jbGVhckNvbnRhaW5lclxuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnV0dG9uJyk7XG5cbnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNsZWFyQ29udGFpbmVyKTtcblxuXG4vL2NyZWF0ZSB0YWJsZVxuLy8gY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0JylcblxuLy8gYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvaik7XG5cbi8vIHVwZGF0ZVRhYmxlQnV0dG9ucygpO1xuLy8gICBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpXG4vLyBmdW5jdGlvbiB1cGRhdGVUYWJsZUJ1dHRvbnMoKSB7XG4vLyAgfVxuIGxldCB0cmFja2VyID0gMTtcbiBcbiBmdW5jdGlvbiBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpIHtcbiAgbGV0IHByb2plY3RUYWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlQnV0dG9uXCIpO1xuXG5cbiAgICAgICBwcm9qZWN0VGFibGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJylcbiAgICAgICAgICBjb25zdCBwb3B1cFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBUYXNrJyk7XG4gICAgICAgICAgY29uc3QgcG9wdXBEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRGF0ZScpO1xuXG4gICAgICAgLy8gY29uc3QgcGFyZW50VGQgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgIHRyYWNrZXIgPSBidXR0b24uaWQ7XG4gICAgICAgY29uc3QgYWRqYWNlbnRUZDEgPSBidXR0b24uY2xvc2VzdChcInRyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbHNcIik7XG4gICAgICAgY29uc29sZS5sb2codHJhY2tlcik7XG4gICAgICAgY29uc3QgYWRqYWNlbnRUZDIgPSBhZGphY2VudFRkMS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgcG9wdXBUYXNrLnRleHRDb250ZW50ID0gYWRqYWNlbnRUZDEudGV4dENvbnRlbnQ7XG4gICAgICAgcG9wdXBEYXRlLnRleHRDb250ZW50ID0gYWRqYWNlbnRUZDIudGV4dENvbnRlbnQ7XG4gICAgICAgcG9wdXBUYXNrLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgcG9wdXBEYXRlLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgcG9wdXBEYXRlLmlkID0gJ3BvcHVwRGF0ZSc7XG4gICAgICAgcG9wdXBUYXNrLmlkID0gJ3BvcHVwVGFzaydcbiBcbiAgICAgICAvLyBjb25zdCB0ZCA9IGJ1dHRvbi5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJy5jZWxscycpXG4gICAgICAgLy8gcG9wdXBUYXNrLnRleHRDb250ZW50ID0gdGQudGV4dENvbnRlbnQ7XG4gICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpO1xuICAgICB9KTtcbiAgIH0pO1xuIH1cbi8vICB1cGRhdGVUYWJsZUJ1dHRvbnMoKTtcbiBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbImRlbGV0ZVRhc2siLCJ0YWJsZUJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cFRhc2siLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwidGV4dENvbnRlbnQiLCJjbG9zZXN0Iiwicm93IiwicmVtb3ZlIiwiY2xlYXJDb250YWluZXIiLCJjb250ZW50IiwiY29udGFpbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY29udGFpbmVyUHJvamVjdCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9qZWN0SGVhZGVyIiwicHJvamVjdExhYmVsIiwicHJvamVjdE5hbWUiLCJpZCIsImFkZFByb2plY3QiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRUYXNrU2V0dXAiLCJjb25zb2xlIiwibG9nIiwibmV3VGFzayIsIm5ld1Rhc2tOYW1lUHJvamVjdCIsInR5cGUiLCJ2YWx1ZSIsInRhc2siLCJsYWJlbFRhc2siLCJsYWJlbERhdGUiLCJkYXRlSW5wdXQiLCJ0YWJsZSIsInRhYmxlSGVhZGVyIiwibmV3VGFza0J1dHRvbiIsImV2ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2ZW50RGVmYXVsdCIsInRhc2tQcm9qZWN0IiwiaW5zZXJ0Um93IiwiY2VsbDEiLCJpbnNlcnRDZWxsIiwiY2VsbDIiLCJkZXRhaWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsMyIsImlubmVySFRNTCIsIm5ld1Rhc2tOYW1lIiwiVGFzayIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkdWVEYXRlIiwidGFzazEiLCJ0YXNrcyIsInB1c2giLCJjb3VudGVyIiwiY291bnRlclByb2plY3QiLCJzdWJtaXRUb0RvIiwibmV3VG9EbyIsInBvcHVwIiwiZGVsZXRlQnV0dG9uIiwicG9wdXBEYXRlIiwiY2xvc2UiLCJzZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwidHJhY2tlciIsImJ1dHRvbkxvY2F0ZSIsImJ1dHRvbkxvY2F0ZTIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm9qZWN0QnV0dG9uIiwiYWRkVGFibGVCdXR0b25MaXN0ZW5lcnMiLCJwcm9qZWN0VGFibGVCdXR0b25zIiwiYWRqYWNlbnRUZDEiLCJhZGphY2VudFRkMiIsImNvbnRlbnRFZGl0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=