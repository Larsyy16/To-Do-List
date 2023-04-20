/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 20px;\n    text-align: center;\n}\n\n/* Set styles for the content section */\n.content {\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n}\n\n/* Set styles for the dashboard section */\n#dashboard {\n    background-color: #f2f2f2;\n    border-radius: 5px;\n    margin-right: 20px;\n    padding: 20px;\n    width: 250px;\n}\n\n/* Set styles for the dashboard buttons */\n.myButton1,\n.myButton2,\n.myButton3,\n.myButton4 {\n    background-color: #ffffff;\n    border: none;\n    border-radius: 5px;\n    color: #333333;\n    display: block;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n    text-align: left;\n    width: 100%;\n}\n\n/* Set styles for the container section */\n#container {\n    display: flex;\n    flex-direction: column;\n    background-color: #F0F0F0;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #cccccc;\n    flex-grow: 1;\n    padding: 20px;\n}\n\nfooter {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 16px;\n    padding: 10px;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\ncaption {\n    width: 50px;\n    margin-bottom: 30px;\n}\n\n#ToDoTable {\n    border-collapse: collapse;\n    width: 100%;\n    max-width: 600px;\n    margin: 0 auto;\n    background-color: #f1f1f1;\n    margin-top: 20px;\n    margin-bottom:30px;\n}\n\n/* Style for the caption */\n#ToDoTable caption {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 10px;\n    text-align: left;\n    width: 100px\n}\n\n/* Style for table header */\n#ToDoTable th {\n    background-color: #CCCCCC;\n    font-size: 1rem;\n    font-weight: bold;\n    text-align: left;\n    padding: 10px;\n}\n\n/* Style for table rows */\n#ToDoTable tr {\n    border-bottom: 1px solid #ddd;\n}\n\n/* Style for alternate table rows */\n#ToDoTable tr:nth-child(even) {\n    background-color: #f9f9f9;\n}\n\n/* Style for table cells */\n#ToDoTable td {\n    font-size: 1rem;\n    padding: 10px;\n    border: 1px solid #CCCCCC;\n}\n\n#ToDoTable tr:hover {\n    background-color: #ddd;\n}\n\n\n.popup {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999;\n    background-color: white;\n    width: 400px;\n    height: 300px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n}\n\n.popup p {\n    margin: 10px 0;\n    font-size: 18px;\n    margin-bottom: 10px;\n    margin-left:20px;\n    line-height: 1.5;\n    color: #333;  \n}\n\n    \n  .popup input[type=\"button\"] {\n    display: block;\n    margin: 20px auto 0;\n    padding: 10px 20px;\n    /* background-color: #fff; */\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n/* \n.popup::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: -1;\n     display: block; \n} */\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-color: #fff;\n    color: #000;\n    font-size: 14px;\n    padding: 4px;\n  }\n\n  form {\n    margin-right: 20px;\n\n  }\n  input[type=\"submit\"] {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 5px;\n  }\n  \n  /* Task input styles */\n  #task {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  flex-grow: 1;\n  background-color: #F0F0F0;\n  margin-right: 0;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"task\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  \n  /* Date input styles */\n  #dateInput {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  width: 200px;\n  background-color: #F0F0F0;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"dateInput\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  label {\n    display: flex;\n    align-items: center;\n    margin-right: 20px;\n    margin-bottom: 10px;\n  }\n  \n  label:last-of-type {\n    margin-right: 0;\n  }\n\n  .cells {\n    width: 150px;\n  }\n\n  .tableButton {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 14px;\n    border-radius: 5px;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,kBAAkB;AACtB;;AAEA,uCAAuC;AACvC;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA,yCAAyC;AACzC;IACI,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA,yCAAyC;AACzC;;;;IAII,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf;;AAEA,yCAAyC;AACzC;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,2BAA2B;IAC3B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,0BAA0B;AAC1B;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB;AACJ;;AAEA,2BAA2B;AAC3B;IACI,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;AACjB;;AAEA,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;AAEA,mCAAmC;AACnC;IACI,yBAAyB;AAC7B;;AAEA,0BAA0B;AAC1B;IACI,eAAe;IACf,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,2CAA2C;AAC/C;;AAEA;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;AACf;;;EAGE;IACE,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;IAClB,eAAe;EACjB;AACF;;;;;;;;;;;GAWG;;AAEH;IACI,sBAAsB;IACtB,WAAW;IACX,eAAe;IACf,YAAY;EACd;;EAEA;IACE,kBAAkB;;EAEpB;EACA;IACE,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,kBAAkB;EACpB;;EAEA,sBAAsB;EACtB;IACE,aAAa;EACf,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA,sBAAsB;EACtB;IACE,aAAa;EACf,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,kBAAkB;EACpB","sourcesContent":["body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 20px;\n    text-align: center;\n}\n\n/* Set styles for the content section */\n.content {\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n}\n\n/* Set styles for the dashboard section */\n#dashboard {\n    background-color: #f2f2f2;\n    border-radius: 5px;\n    margin-right: 20px;\n    padding: 20px;\n    width: 250px;\n}\n\n/* Set styles for the dashboard buttons */\n.myButton1,\n.myButton2,\n.myButton3,\n.myButton4 {\n    background-color: #ffffff;\n    border: none;\n    border-radius: 5px;\n    color: #333333;\n    display: block;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n    text-align: left;\n    width: 100%;\n}\n\n/* Set styles for the container section */\n#container {\n    display: flex;\n    flex-direction: column;\n    background-color: #F0F0F0;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #cccccc;\n    flex-grow: 1;\n    padding: 20px;\n}\n\nfooter {\n    background-color: #333333;\n    color: #ffffff;\n    font-size: 16px;\n    padding: 10px;\n    text-align: center;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\ncaption {\n    width: 50px;\n    margin-bottom: 30px;\n}\n\n#ToDoTable {\n    border-collapse: collapse;\n    width: 100%;\n    max-width: 600px;\n    margin: 0 auto;\n    background-color: #f1f1f1;\n    margin-top: 20px;\n    margin-bottom:30px;\n}\n\n/* Style for the caption */\n#ToDoTable caption {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 10px;\n    text-align: left;\n    width: 100px\n}\n\n/* Style for table header */\n#ToDoTable th {\n    background-color: #CCCCCC;\n    font-size: 1rem;\n    font-weight: bold;\n    text-align: left;\n    padding: 10px;\n}\n\n/* Style for table rows */\n#ToDoTable tr {\n    border-bottom: 1px solid #ddd;\n}\n\n/* Style for alternate table rows */\n#ToDoTable tr:nth-child(even) {\n    background-color: #f9f9f9;\n}\n\n/* Style for table cells */\n#ToDoTable td {\n    font-size: 1rem;\n    padding: 10px;\n    border: 1px solid #CCCCCC;\n}\n\n#ToDoTable tr:hover {\n    background-color: #ddd;\n}\n\n\n.popup {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999;\n    background-color: white;\n    width: 400px;\n    height: 300px;\n    border-radius: 10px;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n}\n\n.popup p {\n    margin: 10px 0;\n    font-size: 18px;\n    margin-bottom: 10px;\n    margin-left:20px;\n    line-height: 1.5;\n    color: #333;  \n}\n\n    \n  .popup input[type=\"button\"] {\n    display: block;\n    margin: 20px auto 0;\n    padding: 10px 20px;\n    /* background-color: #fff; */\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n/* \n.popup::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: -1;\n     display: block; \n} */\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-color: #fff;\n    color: #000;\n    font-size: 14px;\n    padding: 4px;\n  }\n\n  form {\n    margin-right: 20px;\n\n  }\n  input[type=\"submit\"] {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 5px;\n  }\n  \n  /* Task input styles */\n  #task {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  flex-grow: 1;\n  background-color: #F0F0F0;\n  margin-right: 0;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"task\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  \n  /* Date input styles */\n  #dateInput {\n    padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  width: 200px;\n  background-color: #F0F0F0;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  }\n  \n  label[for=\"dateInput\"] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-right: 10px;\n  }\n  label {\n    display: flex;\n    align-items: center;\n    margin-right: 20px;\n    margin-bottom: 10px;\n  }\n  \n  label:last-of-type {\n    margin-right: 0;\n  }\n\n  .cells {\n    width: 150px;\n  }\n\n  .tableButton {\n    background-color: #777777;\n    color: #FFFFFF;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 14px;\n    border-radius: 5px;\n  }"],"sourceRoot":""}]);
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
let tracker = 1;
function addTableButtonListeners() {
  tableButtons.forEach(button => {
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
      popupTask.id = 'popupTask';

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
  //  const popupTask = document.getElementById('popupTask')
  const popupDate = document.getElementById('popupDate');
  const tableButtons = document.querySelectorAll('.tableButton');
  tableButtons.forEach(button => {
    if (tracker == button.id) {
      let buttonLocate = button.closest("tr").querySelector(".cells").textContent;
      console.log(buttonLocate.textContent);
      //  buttonLocate.textContent = popupTask.textContent;
      button.nextElementSibling.textContent = popupDate.textContent;
    }
  });
  popup.style.display = "none";
  content.classList.remove("blur");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQ1QsU0FBUyxDQUFDdUIsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGNvbnRlbnQgc2VjdGlvbiAqL1xcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4vKiBTZXQgc3R5bGVzIGZvciB0aGUgZGFzaGJvYXJkIHNlY3Rpb24gKi9cXG4jZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGRhc2hib2FyZCBidXR0b25zICovXFxuLm15QnV0dG9uMSxcXG4ubXlCdXR0b24yLFxcbi5teUJ1dHRvbjMsXFxuLm15QnV0dG9uNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBTZXQgc3R5bGVzIGZvciB0aGUgY29udGFpbmVyIHNlY3Rpb24gKi9cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2NjY2M7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmNhcHRpb24ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI1RvRG9UYWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGhlIGNhcHRpb24gKi9cXG4jVG9Eb1RhYmxlIGNhcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiAxMDBweFxcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGFibGUgaGVhZGVyICovXFxuI1RvRG9UYWJsZSB0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qIFN0eWxlIGZvciB0YWJsZSByb3dzICovXFxuI1RvRG9UYWJsZSB0ciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgYWx0ZXJuYXRlIHRhYmxlIHJvd3MgKi9cXG4jVG9Eb1RhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi8qIFN0eWxlIGZvciB0YWJsZSBjZWxscyAqL1xcbiNUb0RvVGFibGUgdGQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XFxufVxcblxcbiNUb0RvVGFibGUgdHI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG5cXG5cXG4ucG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucG9wdXAgcCB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIGNvbG9yOiAjMzMzOyAgXFxufVxcblxcbiAgICBcXG4gIC5wb3B1cCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuLyogXFxuLnBvcHVwOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgICBkaXNwbGF5OiBibG9jazsgXFxufSAqL1xcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG5cXG4gIH1cXG4gIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcbiAgXFxuICAvKiBUYXNrIGlucHV0IHN0eWxlcyAqL1xcbiAgI3Rhc2sge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIGxhYmVsW2Zvcj1cXFwidGFza1xcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXFxuICAvKiBEYXRlIGlucHV0IHN0eWxlcyAqL1xcbiAgI2RhdGVJbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgbGFiZWxbZm9yPVxcXCJkYXRlSW5wdXRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG4gIGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICBsYWJlbDpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuY2VsbHMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICB9XFxuXFxuICAudGFibGVCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQSx1Q0FBdUM7QUFDdkM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0lBSUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLHlDQUF5QztBQUN6QztJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7O0VBR0U7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0FBQ0Y7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUg7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7O0VBRXBCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUEsc0JBQXNCO0VBQ3RCO0lBQ0UsYUFBYTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFLGFBQWE7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBjb250ZW50IHNlY3Rpb24gKi9cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGRhc2hib2FyZCBzZWN0aW9uICovXFxuI2Rhc2hib2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi8qIFNldCBzdHlsZXMgZm9yIHRoZSBkYXNoYm9hcmQgYnV0dG9ucyAqL1xcbi5teUJ1dHRvbjEsXFxuLm15QnV0dG9uMixcXG4ubXlCdXR0b24zLFxcbi5teUJ1dHRvbjQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogU2V0IHN0eWxlcyBmb3IgdGhlIGNvbnRhaW5lciBzZWN0aW9uICovXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjY2NjO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5jYXB0aW9uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbiNUb0RvVGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MzBweDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRoZSBjYXB0aW9uICovXFxuI1RvRG9UYWJsZSBjYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogMTAwcHhcXG59XFxuXFxuLyogU3R5bGUgZm9yIHRhYmxlIGhlYWRlciAqL1xcbiNUb0RvVGFibGUgdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGFibGUgcm93cyAqL1xcbiNUb0RvVGFibGUgdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIGFsdGVybmF0ZSB0YWJsZSByb3dzICovXFxuI1RvRG9UYWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGFibGUgY2VsbHMgKi9cXG4jVG9Eb1RhYmxlIHRkIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcbn1cXG5cXG4jVG9Eb1RhYmxlIHRyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuXFxuLnBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnBvcHVwIHAge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbn1cXG5cXG4gICAgXFxuICAucG9wdXAgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbi8qIFxcbi5wb3B1cDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICAgZGlzcGxheTogYmxvY2s7IFxcbn0gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gIH1cXG5cXG4gIGZvcm0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFxuICB9XFxuICBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gIFxcbiAgLyogVGFzayBpbnB1dCBzdHlsZXMgKi9cXG4gICN0YXNrIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICBsYWJlbFtmb3I9XFxcInRhc2tcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLyogRGF0ZSBpbnB1dCBzdHlsZXMgKi9cXG4gICNkYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIGxhYmVsW2Zvcj1cXFwiZGF0ZUlucHV0XFxcIl0ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgbGFiZWw6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLmNlbGxzIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgLnRhYmxlQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vZm9ybSBhbmQgc3VibWl0IGJ1dHRvblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5jb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbm5ld1Rhc2tOYW1lLnR5cGUgPSBcInN1Ym1pdFwiO1xubmV3VGFza05hbWUudmFsdWUgPSBcIisgTmV3IFRhc2tcIjtcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4vLyB0YXNrIGFuZCBkYXRlIGxhYmVsXG5cbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4vLyBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudGFzay5pZCA9IFwidGFza1wiO1xuLy8gZGF0ZS5pZCA9IFwiZGF0ZVwiO1xuY29uc3QgbGFiZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xubGFiZWxUYXNrLnRleHRDb250ZW50ID0gXCJUYXNrOlwiO1xubGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuXG5cbi8vZGF0ZSBjYWxlbmRhclxuLy8gY29uc3QgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG5cbi8vIGZ1bmN0aW9uIG9wZW5DYWxlbmRhcigpIHtcbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9ICdkYXRlSW5wdXQnO1xuICAgICAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy8gbGV0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJuZXdUYXNrXCIpWzBdO1xuLy8gICBuZXdUYXNrLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgLy8gICB9XG4vLyBcblxuXG5cblxuXG4vL0xvZ2ljXG5cbm5ld1Rhc2suYXBwZW5kKGxhYmVsVGFzaywgdGFzaywgbGFiZWxEYXRlLCBkYXRlSW5wdXQpO1xubmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZSk7XG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxufVxuXG5jb25zdCB0YXNrMSA9IG5ldyBUYXNrKFwiZG9od1wiLCBcIjEyLzIxLzIxXCIpO1xuXG5jb25zdCB0YXNrcyA9IFtdO1xudGFza3MucHVzaCh0YXNrMSk7XG5jb25zb2xlLmxvZyh0YXNrcyk7XG5cbi8vZXZlbnRsaXN0ZW5lciBzdWJtaXQgbmV3IHRhc2tcbmxldCBjb3VudGVyID0gMTtcbm5ld1Rhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUb0RvKTtcblxuZnVuY3Rpb24gc3VibWl0VG9EbyhldmVudCkge1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xuXG4gIGxldCBuZXdUb0RvID0gbmV3IFRhc2sodGFzay52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2cobmV3VG9Ebyk7XG4gIC8vdGFibGUgcm93XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUb0RvVGFibGVcIik7XG4gIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICBjb25zdCBjZWxsMSA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gIGNvbnN0IGNlbGwyID0gcm93Lmluc2VydENlbGwoKTtcbiAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGV0YWlsLmlkID0gYCR7Y291bnRlcn1gO1xuICBjZWxsMS5pZCA9IGBjZWxsMS0ke2NvdW50ZXJ9YDtcbiAgY2VsbDIuaWQgPSBgY2VsbDItJHtjb3VudGVyfWA7XG4gIGNlbGwxLmNsYXNzTGlzdC5hZGQoXCJjZWxsc1wiKTtcbiAgY2VsbDIuY2xhc3NMaXN0LmFkZChcImNlbGxzXCIpO1xuICBjb3VudGVyKys7XG4gIGRldGFpbC5jbGFzc0xpc3QuYWRkKFwidGFibGVCdXR0b25cIik7XG4gIGNvbnN0IGNlbGwzID0gcm93Lmluc2VydENlbGwoKTtcbiAgZGV0YWlsLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG4gIGNlbGwxLmlubmVySFRNTCA9IG5ld1RvRG8udGl0bGU7XG4gIGNlbGwyLmlubmVySFRNTCA9IG5ld1RvRG8uZHVlRGF0ZTtcbiAgY2VsbDMuYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgdGFzay52YWx1ZSA9ICcnO1xuLy8gICBkYXRlQnV0dG9uLnZhbHVlID0gJyc7XG4gIHVwZGF0ZVRhYmxlQnV0dG9ucygpO1xuICBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpO1xuICBcbn1cblxuLy9kZXRhaWxzIHBvcCB1cFxuXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG5jb25zdCBwb3B1cERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHBvcHVwVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY2xvc2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ2xvc2VcIik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQocG9wdXApO1xucG9wdXAuYXBwZW5kKHBvcHVwVGFzaywgcG9wdXBEYXRlLCBjbG9zZSk7XG5cbi8vbG9naWMgcG9wdXBcbmxldCB0YWJsZUJ1dHRvbnMgPSBbXTtcblxuZnVuY3Rpb24gdXBkYXRlVGFibGVCdXR0b25zKCkge1xuICB0YWJsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlQnV0dG9uXCIpO1xufVxubGV0IHRyYWNrZXIgPSAxO1xuXG5mdW5jdGlvbiBhZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpIHtcbiAgdGFibGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gY29uc3QgcGFyZW50VGQgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICAgICAgdHJhY2tlciA9IGJ1dHRvbi5pZDtcbiAgICAgIGNvbnN0IGFkamFjZW50VGQxID0gYnV0dG9uLmNsb3Nlc3QoXCJ0clwiKS5xdWVyeVNlbGVjdG9yKFwiLmNlbGxzXCIpO1xuICAgICAgY29uc29sZS5sb2codHJhY2tlcik7XG4gICAgICBjb25zdCBhZGphY2VudFRkMiA9IGFkamFjZW50VGQxLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHBvcHVwVGFzay50ZXh0Q29udGVudCA9IGFkamFjZW50VGQxLnRleHRDb250ZW50O1xuICAgICAgcG9wdXBEYXRlLnRleHRDb250ZW50ID0gYWRqYWNlbnRUZDIudGV4dENvbnRlbnQ7XG4gICAgICBwb3B1cFRhc2suY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgIHBvcHVwRGF0ZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgcG9wdXBEYXRlLmlkID0gJ3BvcHVwRGF0ZSc7XG4gICAgICBwb3B1cFRhc2suaWQgPSAncG9wdXBUYXNrJ1xuXG4gICAgICAvLyBjb25zdCB0ZCA9IGJ1dHRvbi5jbG9zZXN0KCd0cicpLnF1ZXJ5U2VsZWN0b3IoJy5jZWxscycpXG4gICAgICAvLyBwb3B1cFRhc2sudGV4dENvbnRlbnQgPSB0ZC50ZXh0Q29udGVudDtcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cbnVwZGF0ZVRhYmxlQnV0dG9ucygpO1xuXG5hZGRUYWJsZUJ1dHRvbkxpc3RlbmVycygpO1xuXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4vLyAgY29uc3QgcG9wdXBUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwVGFzaycpXG4gY29uc3QgcG9wdXBEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwRGF0ZScpO1xuIGNvbnN0IHRhYmxlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZUJ1dHRvbicpXG5cbiB0YWJsZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKHRyYWNrZXIgPT0gYnV0dG9uLmlkKSB7XG4gICAgICAgIGxldCBidXR0b25Mb2NhdGUgPSBidXR0b24uY2xvc2VzdChcInRyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbHNcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbkxvY2F0ZS50ZXh0Q29udGVudClcbiAgICAgICAgLy8gIGJ1dHRvbkxvY2F0ZS50ZXh0Q29udGVudCA9IHBvcHVwVGFzay50ZXh0Q29udGVudDtcbiAgICAgICAgYnV0dG9uLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IHBvcHVwRGF0ZS50ZXh0Q29udGVudDtcbiAgICB9XG4gfSlcbiBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIik7XG59KTtcblxuXG4iXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV3VGFzayIsImNyZWF0ZUVsZW1lbnQiLCJuZXdUYXNrTmFtZSIsInR5cGUiLCJ2YWx1ZSIsImFwcGVuZENoaWxkIiwidGFzayIsImlkIiwibGFiZWxUYXNrIiwibGFiZWxEYXRlIiwidGV4dENvbnRlbnQiLCJkYXRlSW5wdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmQiLCJUYXNrIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImR1ZURhdGUiLCJ0YXNrMSIsInRhc2tzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjb3VudGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Ym1pdFRvRG8iLCJldmVudCIsImdldEVsZW1lbnRCeUlkIiwibmV3VG9EbyIsInByZXZlbnREZWZhdWx0IiwidGFibGUiLCJyb3ciLCJpbnNlcnRSb3ciLCJjZWxsMSIsImluc2VydENlbGwiLCJjZWxsMiIsImRldGFpbCIsImNsYXNzTGlzdCIsImFkZCIsImNlbGwzIiwiaW5uZXJIVE1MIiwidXBkYXRlVGFibGVCdXR0b25zIiwiYWRkVGFibGVCdXR0b25MaXN0ZW5lcnMiLCJwb3B1cCIsInBvcHVwRGF0ZSIsInBvcHVwVGFzayIsImNvbnRlbnQiLCJjbG9zZSIsInNldEF0dHJpYnV0ZSIsInRhYmxlQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmFja2VyIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkamFjZW50VGQxIiwiY2xvc2VzdCIsImFkamFjZW50VGQyIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY29udGVudEVkaXRhYmxlIiwiYnV0dG9uTG9jYXRlIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==