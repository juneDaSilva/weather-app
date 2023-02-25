/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  /* font-family: \"Montserrat\", sans-serif; */\n  /* font-family: \"Vollkorn\", serif; */\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\nhtml {\n  background-color: #fff;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  position: relative;\n}\n\n.search-form {\n  position: relative;\n}\n\ninput[type=\"text\"] {\n  border: none;\n  border-bottom: 2px solid black;\n  width: 10rem;\n  background-color: transparent;\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n}\n\ninput[type=\"text\"]:focus {\n  outline: none;\n}\n\n.searchBtn {\n  position: absolute;\n  left: 140px;\n  transform: scale(-1, 1);\n\n  background-color: transparent;\n  border: none;\n}\n\n.searchBtn:hover {\n  cursor: pointer;\n}\n\n.error {\n  position: absolute;\n  left: 0px;\n  top: 20px;\n\n  color: red;\n  padding: 0px;\n  width: 12rem;\n  font-size: 0.8rem;\n}\n\n.error.active {\n  padding: 0.1rem;\n}\n\n/* ------ UNIT MEASUREMENT SLIDER STYLING ------- */\n.measure-unit {\n  position: absolute;\n  display: flex;\n  right: 20px;\n}\n\n.unit-label {\n  margin: 3px;\n  margin-right: 3px;\n  font-size: 0.8rem;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 20px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000000;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #000000;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #000000;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*  ----- ------- */\n\n/* --- MAIN BODY --- */\n\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n/* ------ TOP SECTION ------ */\n\n.daily-container {\n  flex: 1;\n  margin-top: 3rem;\n  max-height: 280px;\n  max-width: 70rem;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* ---- styling for today container ---- */\n.today {\n  height: 90%;\n  flex: 1;\n  max-width: 340px;\n  min-width: 280px;\n  margin: 5px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 10px;\n}\n\nh2 {\n  padding: 2px;\n  border-bottom: 2px solid black;\n  font-size: 2rem;\n  font-weight: 700;\n  letter-spacing: -1px;\n  margin: 0;\n}\n\n.current-calendar {\n  display: flex;\n  padding: 4px;\n  justify-content: space-between;\n  border-bottom: 2px solid black;\n  font-size: 0.9rem;\n  letter-spacing: -1px;\n}\n\n.current-main {\n  display: flex;\n  border-bottom: 2px solid black;\n}\n\n.main-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.city {\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: -1px;\n  color: orangered;\n}\n\n.temp-block {\n  display: flex;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 800;\n  letter-spacing: -2px;\n  margin: 0;\n}\n\n.sky {\n  font-size: 0.9rem;\n}\n\n.main-right {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.condition-img {\n  width: 7rem;\n}\n\n.current-details {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 2px solid #000;\n  padding: 5px;\n}\n\n.details-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.block-title {\n  font-size: 0.8rem;\n}\n\n.block-info {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: -1px;\n}\n\n/* --- Styling for upcoming days --- */\n\n.days-container {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 100%;\n}\n\n.day-block {\n  flex: 1;\n  min-width: 50px;\n  height: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n}\n\n.day-border {\n  border: 1px solid black;\n  height: 90%;\n}\n\n.days-name {\n  flex: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid black;\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -1px;\n}\n\n.days-imgs {\n  flex: 4;\n  display: flex;\n  justify-content: center;\n}\n\n.daily-img {\n  width: 30px;\n}\n\n.days-temp {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n/* ------- BOTTOM CONTAINER SECTION --------- */\n.hourly-container {\n  flex: 1;\n  max-height: 300px;\n\n  width: 90%;\n  max-width: 70rem;\n}\n\n@media only screen and (max-width: 700px) {\n  .daily-container {\n    flex-direction: column;\n    max-height: 550px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  /* font-family: \"Montserrat\", sans-serif; */\n  /* font-family: \"Vollkorn\", serif; */\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\nhtml {\n  background-color: #fff;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  position: relative;\n}\n\n.search-form {\n  position: relative;\n}\n\ninput[type=\"text\"] {\n  border: none;\n  border-bottom: 2px solid black;\n  width: 10rem;\n  background-color: transparent;\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n}\n\ninput[type=\"text\"]:focus {\n  outline: none;\n}\n\n.searchBtn {\n  position: absolute;\n  left: 140px;\n  transform: scale(-1, 1);\n\n  background-color: transparent;\n  border: none;\n}\n\n.searchBtn:hover {\n  cursor: pointer;\n}\n\n.error {\n  position: absolute;\n  left: 0px;\n  top: 20px;\n\n  color: red;\n  padding: 0px;\n  width: 12rem;\n  font-size: 0.8rem;\n}\n\n.error.active {\n  padding: 0.1rem;\n}\n\n/* ------ UNIT MEASUREMENT SLIDER STYLING ------- */\n.measure-unit {\n  position: absolute;\n  display: flex;\n  right: 20px;\n}\n\n.unit-label {\n  margin: 3px;\n  margin-right: 3px;\n  font-size: 0.8rem;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 20px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000000;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #000000;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #000000;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*  ----- ------- */\n\n/* --- MAIN BODY --- */\n\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n/* ------ TOP SECTION ------ */\n\n.daily-container {\n  flex: 1;\n  margin-top: 3rem;\n  max-height: 280px;\n  max-width: 70rem;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n/* ---- styling for today container ---- */\n.today {\n  height: 90%;\n  flex: 1;\n  max-width: 340px;\n  min-width: 280px;\n  margin: 5px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 10px;\n}\n\nh2 {\n  padding: 2px;\n  border-bottom: 2px solid black;\n  font-size: 2rem;\n  font-weight: 700;\n  letter-spacing: -1px;\n  margin: 0;\n}\n\n.current-calendar {\n  display: flex;\n  padding: 4px;\n  justify-content: space-between;\n  border-bottom: 2px solid black;\n  font-size: 0.9rem;\n  letter-spacing: -1px;\n}\n\n.current-main {\n  display: flex;\n  border-bottom: 2px solid black;\n}\n\n.main-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.city {\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: -1px;\n  color: orangered;\n}\n\n.temp-block {\n  display: flex;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 800;\n  letter-spacing: -2px;\n  margin: 0;\n}\n\n.sky {\n  font-size: 0.9rem;\n}\n\n.main-right {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.condition-img {\n  width: 7rem;\n}\n\n.current-details {\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 2px solid #000;\n  padding: 5px;\n}\n\n.details-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.block-title {\n  font-size: 0.8rem;\n}\n\n.block-info {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: -1px;\n}\n\n/* --- Styling for upcoming days --- */\n\n.days-container {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 100%;\n}\n\n.day-block {\n  flex: 1;\n  min-width: 50px;\n  height: 95%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n}\n\n.day-border {\n  border: 1px solid black;\n  height: 90%;\n}\n\n.days-name {\n  flex: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid black;\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -1px;\n}\n\n.days-imgs {\n  flex: 4;\n  display: flex;\n  justify-content: center;\n}\n\n.daily-img {\n  width: 30px;\n}\n\n.days-temp {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n/* ------- BOTTOM CONTAINER SECTION --------- */\n.hourly-container {\n  flex: 1;\n  max-height: 300px;\n\n  width: 90%;\n  max-width: 70rem;\n}\n\n@media only screen and (max-width: 700px) {\n  .daily-container {\n    flex-direction: column;\n    max-height: 550px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ }),

/***/ "./src/apps/display.js":
/*!*****************************!*\
  !*** ./src/apps/display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearError": () => (/* binding */ clearError),
/* harmony export */   "displayForecast": () => (/* binding */ displayForecast),
/* harmony export */   "showError": () => (/* binding */ showError),
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay)
/* harmony export */ });
const city = document.querySelector(".city");
const mainTemp = document.querySelector("#main-temp");
const skyDescriptiton = document.querySelector(".sky");
const feelsLike = document.querySelector(".feel");
const humidity = document.querySelector("#humidity");
const windSpeed = document.getElementById("wind-speed");
const currentDay = document.querySelector(".current-day");
const daysName = document.querySelectorAll(".days-name");
const month = document.getElementById("month");
const monthDay = document.getElementById("date");
const pop = document.getElementById("rain-chance");
const daysTemp = document.querySelectorAll(".daily-temp");
const dayBlock = document.querySelectorAll(".day-block");
const daysIcon = document.querySelectorAll(".daily-img");
const inputError = document.querySelector(".error");
const currentImg = document.querySelector(".condition-img");

const updateDisplay = (weatherData, forecast) => {
  clearError();
  displayDate();
  updateToday(weatherData);
  displayForecast(forecast);
};

const updateToday = (weatherData) => {
  city.textContent = weatherData.name;
  mainTemp.textContent = Math.round(weatherData.main.temp);

  // TODO: dynamic unit measurement choice
  skyDescriptiton.textContent = weatherData.weather[0].description;

  currentImg.src = `../src/images/${weatherData.weather[0].icon}.svg`;
  feelsLike.textContent = Math.round(weatherData.main.feels_like);
  humidity.textContent = Math.round(weatherData.main.humidity);
  windSpeed.textContent = weatherData.wind.speed.toFixed(1);
};

const displayDate = () => {
  const weekday = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  let dayNum = date.getDay();

  // update todays day
  currentDay.textContent = weekday[dayNum];
  // update current month
  month.textContent = months[date.getMonth()];
  // update day of month
  monthDay.textContent = date.getDate();

  // update upcoming days names
  daysName.forEach((day) => {
    if (dayNum == 6) {
      dayNum = 0;
    } else {
      dayNum++;
    }
    day.textContent = days[dayNum];
  });
};

const displayForecast = (forecast) => {
  let list = forecast.list;
  pop.textContent = list[0].pop * 100;

  let i = 6;
  for (let day = 0; day < dayBlock.length; day++) {
    daysTemp[day].textContent = Math.round(list[i].main.temp);
    daysIcon[day].src = `../src/images/${list[i].weather[0].icon}.svg`;
    i += 8;
  }
};

const showError = () => {
  inputError.textContent =
    'Location not found.\n\nPlease enter: "City", "City, State" or "City, Country".';
  inputError.className = "error active";
};

const clearError = () => {
  inputError.textContent = "";
  inputError.className = "error active";
};


/***/ }),

/***/ "./src/apps/fetch.js":
/*!***************************!*\
  !*** ./src/apps/fetch.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "city": () => (/* binding */ city),
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "runSearch": () => (/* binding */ runSearch)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/apps/display.js");


let city = "paris";

function getWeather(location, key, unit) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}&units=${unit}`,
      { mode: "cors" }
    ).then((response) => {
      if (response.statusText == "Not Found") {
        reject(Error("city not found"));
      }

      resolve(response.json());
    });
  });
}

const getForecast = (location, key, unit) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}&units=${unit}`,
      { mode: "cors" }
    ).then((response) => {
      if (response.statusText == "Not Found") {
        reject(Error("city not found"));
      }

      resolve(response.json());
    });
  });
};

async function runSearch(location, key, unit) {
  Promise.all([
    getWeather(location, key, unit),
    getForecast(location, key, unit),
  ])
    .then((data) => {
      (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateDisplay)(data[0], data[1]);
      city = location;
    })
    .catch((err) => {
      console.log(err);
      (0,_display__WEBPACK_IMPORTED_MODULE_0__.showError)();
    });
}


/***/ }),

/***/ "./src/apps/myKey.js":
/*!***************************!*\
  !*** ./src/apps/myKey.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myKey": () => (/* binding */ myKey)
/* harmony export */ });
const myKey = "b4b68481d804f19629d4a998e4bd6983";


/***/ }),

/***/ "./src/apps/switch.js":
/*!****************************!*\
  !*** ./src/apps/switch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "measurement": () => (/* binding */ measurement),
/* harmony export */   "toggleSwitch": () => (/* binding */ toggleSwitch)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/apps/fetch.js");
/* harmony import */ var _myKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myKey */ "./src/apps/myKey.js");


let measurement = "imperial";
const degree = document.querySelectorAll(".degree");

const toggleSwitch = () => {
  changeUnit();
  if (_fetch__WEBPACK_IMPORTED_MODULE_0__.city != "") {
    (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.runSearch)(_fetch__WEBPACK_IMPORTED_MODULE_0__.city, _myKey__WEBPACK_IMPORTED_MODULE_1__.myKey, measurement);
  }
  displayUnit();
};

const changeUnit = () => {
  if (measurement == "imperial") {
    measurement = "metric";
  } else {
    measurement = "imperial";
  }
};

const displayUnit = () => {
  degree.forEach((each) => {
    if (measurement == "imperial") {
      each.textContent = "℉";
    } else {
      each.textContent = "℃";
    }
  });
};


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
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _apps_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/fetch */ "./src/apps/fetch.js");
/* harmony import */ var _apps_myKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/myKey */ "./src/apps/myKey.js");
/* harmony import */ var _apps_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps/switch */ "./src/apps/switch.js");
/* harmony import */ var _apps_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apps/display */ "./src/apps/display.js");





const form = document.querySelector(".search-form");
const input = document.getElementById("input");
const unitSwitch = document.getElementById("unit-switch");

form.onsubmit = (e) => {
  if (input.value != "") {
    (0,_apps_fetch__WEBPACK_IMPORTED_MODULE_1__.runSearch)(input.value, _apps_myKey__WEBPACK_IMPORTED_MODULE_2__.myKey, _apps_switch__WEBPACK_IMPORTED_MODULE_3__.measurement);
    input.value = "";
  } else {
    (0,_apps_display__WEBPACK_IMPORTED_MODULE_4__.showError)();
  }

  e.preventDefault();
};

unitSwitch.onclick = () => {
  (0,_apps_switch__WEBPACK_IMPORTED_MODULE_3__.toggleSwitch)();
};

// TODO: find out how to get weather for whole week  -- DONE
// TODO: find out the codes for icons -- DONE
// TODO: find out how to get chance of rain -- DONE
// TODO: dynamic unit measurement choice -- DONE

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsRUFBRSwwREFBWTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHBzL2ZldGNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcHMvbXlLZXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwcy9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIC8qIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7ICovXFxuICAvKiBmb250LWZhbWlseTogXFxcIlZvbGxrb3JuXFxcIiwgc2VyaWY7ICovXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2hCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTQwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoQnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMjBweDtcXG5cXG4gIGNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwcHg7XFxuICB3aWR0aDogMTJyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICBwYWRkaW5nOiAwLjFyZW07XFxufVxcblxcbi8qIC0tLS0tLSBVTklUIE1FQVNVUkVNRU5UIFNMSURFUiBTVFlMSU5HIC0tLS0tLS0gKi9cXG4ubWVhc3VyZS11bml0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLnVuaXQtbGFiZWwge1xcbiAgbWFyZ2luOiAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMwMDAwMDA7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiAgLS0tLS0gLS0tLS0tLSAqL1xcblxcbi8qIC0tLSBNQUlOIEJPRFkgLS0tICovXFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi8qIC0tLS0tLSBUT1AgU0VDVElPTiAtLS0tLS0gKi9cXG5cXG4uZGFpbHktY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWF4LWhlaWdodDogMjgwcHg7XFxuICBtYXgtd2lkdGg6IDcwcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiAtLS0tIHN0eWxpbmcgZm9yIHRvZGF5IGNvbnRhaW5lciAtLS0tICovXFxuLnRvZGF5IHtcXG4gIGhlaWdodDogOTAlO1xcbiAgZmxleDogMTtcXG4gIG1heC13aWR0aDogMzQwcHg7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmgyIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmN1cnJlbnQtY2FsZW5kYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxufVxcblxcbi5jdXJyZW50LW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1haW4tbGVmdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBjb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG4udGVtcC1ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5za3kge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5tYWluLXJpZ2h0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbmRpdGlvbi1pbWcge1xcbiAgd2lkdGg6IDdyZW07XFxufVxcblxcbi5jdXJyZW50LWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZXRhaWxzLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmxvY2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5ibG9jay1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG59XFxuXFxuLyogLS0tIFN0eWxpbmcgZm9yIHVwY29taW5nIGRheXMgLS0tICovXFxuXFxuLmRheXMtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGF5LWJsb2NrIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kYXktYm9yZGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5kYXlzLW5hbWUge1xcbiAgZmxleDogMDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG59XFxuXFxuLmRheXMtaW1ncyB7XFxuICBmbGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHktaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZGF5cy10ZW1wIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4vKiAtLS0tLS0tIEJPVFRPTSBDT05UQUlORVIgU0VDVElPTiAtLS0tLS0tLS0gKi9cXG4uaG91cmx5LWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuXFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA3MHJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmRhaWx5LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQ0FBMkM7RUFDM0Msb0NBQW9DO0VBQ3BDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCOztFQUV2Qiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUzs7RUFFVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pC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QUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQSwrQ0FBK0M7QUFDL0M7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCOztFQUVqQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAvKiBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmOyAqL1xcbiAgLyogZm9udC1mYW1pbHk6IFxcXCJWb2xsa29yblxcXCIsIHNlcmlmOyAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE0MHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNlYXJjaEJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwcHg7XFxuICB0b3A6IDIwcHg7XFxuXFxuICBjb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5lcnJvci5hY3RpdmUge1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0gVU5JVCBNRUFTVVJFTUVOVCBTTElERVIgU1RZTElORyAtLS0tLS0tICovXFxuLm1lYXN1cmUtdW5pdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcblxcbi51bml0LWxhYmVsIHtcXG4gIG1hcmdpbjogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMDAwMDAwO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogIC0tLS0tIC0tLS0tLS0gKi9cXG5cXG4vKiAtLS0gTUFJTiBCT0RZIC0tLSAqL1xcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4vKiAtLS0tLS0gVE9QIFNFQ1RJT04gLS0tLS0tICovXFxuXFxuLmRhaWx5LWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xcbiAgbWF4LXdpZHRoOiA3MHJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogLS0tLSBzdHlsaW5nIGZvciB0b2RheSBjb250YWluZXIgLS0tLSAqL1xcbi50b2RheSB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGZsZXg6IDE7XFxuICBtYXgtd2lkdGg6IDM0MHB4O1xcbiAgbWluLXdpZHRoOiAyODBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jdXJyZW50LWNhbGVuZGFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbn1cXG5cXG4uY3VycmVudC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tYWluLWxlZnQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLnRlbXAtYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2t5IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubWFpbi1yaWdodCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb25kaXRpb24taW1nIHtcXG4gIHdpZHRoOiA3cmVtO1xcbn1cXG5cXG4uY3VycmVudC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGV0YWlscy1ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJsb2NrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uYmxvY2staW5mbyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxufVxcblxcbi8qIC0tLSBTdHlsaW5nIGZvciB1cGNvbWluZyBkYXlzIC0tLSAqL1xcblxcbi5kYXlzLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRheS1ibG9jayB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA5NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGF5LWJvcmRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG4uZGF5cy1uYW1lIHtcXG4gIGZsZXg6IDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxufVxcblxcbi5kYXlzLWltZ3Mge1xcbiAgZmxleDogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5LWltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmRheXMtdGVtcCB7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLyogLS0tLS0tLSBCT1RUT00gQ09OVEFJTkVSIFNFQ1RJT04gLS0tLS0tLS0tICovXFxuLmhvdXJseS1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcblxcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNzByZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5kYWlseS1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG5jb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi10ZW1wXCIpO1xuY29uc3Qgc2t5RGVzY3JpcHRpdG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za3lcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlcIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmQtc3BlZWRcIik7XG5jb25zdCBjdXJyZW50RGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWRheVwiKTtcbmNvbnN0IGRheXNOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlzLW5hbWVcIik7XG5jb25zdCBtb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGhcIik7XG5jb25zdCBtb250aERheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbmNvbnN0IHBvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFpbi1jaGFuY2VcIik7XG5jb25zdCBkYXlzVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHktdGVtcFwiKTtcbmNvbnN0IGRheUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXktYmxvY2tcIik7XG5jb25zdCBkYXlzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHktaW1nXCIpO1xuY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XG5jb25zdCBjdXJyZW50SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24taW1nXCIpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRGlzcGxheSA9ICh3ZWF0aGVyRGF0YSwgZm9yZWNhc3QpID0+IHtcbiAgY2xlYXJFcnJvcigpO1xuICBkaXNwbGF5RGF0ZSgpO1xuICB1cGRhdGVUb2RheSh3ZWF0aGVyRGF0YSk7XG4gIGRpc3BsYXlGb3JlY2FzdChmb3JlY2FzdCk7XG59O1xuXG5jb25zdCB1cGRhdGVUb2RheSA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZTtcbiAgbWFpblRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG5cbiAgLy8gVE9ETzogZHluYW1pYyB1bml0IG1lYXN1cmVtZW50IGNob2ljZVxuICBza3lEZXNjcmlwdGl0b24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gIGN1cnJlbnRJbWcuc3JjID0gYC4uL3NyYy9pbWFnZXMvJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259LnN2Z2A7XG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHkpO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkLnRvRml4ZWQoMSk7XG59O1xuXG5jb25zdCBkaXNwbGF5RGF0ZSA9ICgpID0+IHtcbiAgY29uc3Qgd2Vla2RheSA9IFtcbiAgICBcIlNVTkRBWVwiLFxuICAgIFwiTU9OREFZXCIsXG4gICAgXCJUVUVTREFZXCIsXG4gICAgXCJXRURORVNEQVlcIixcbiAgICBcIlRIVVJTREFZXCIsXG4gICAgXCJGUklEQVlcIixcbiAgICBcIlNBVFVSREFZXCIsXG4gIF07XG4gIGNvbnN0IGRheXMgPSBbXCJTVU5cIiwgXCJNT05cIiwgXCJUVUVcIiwgXCJXRURcIiwgXCJUSFVcIiwgXCJGUklcIiwgXCJTQVRcIiwgXCJTVU5cIl07XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdO1xuXG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IGRheU51bSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgLy8gdXBkYXRlIHRvZGF5cyBkYXlcbiAgY3VycmVudERheS50ZXh0Q29udGVudCA9IHdlZWtkYXlbZGF5TnVtXTtcbiAgLy8gdXBkYXRlIGN1cnJlbnQgbW9udGhcbiAgbW9udGgudGV4dENvbnRlbnQgPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgLy8gdXBkYXRlIGRheSBvZiBtb250aFxuICBtb250aERheS50ZXh0Q29udGVudCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gIC8vIHVwZGF0ZSB1cGNvbWluZyBkYXlzIG5hbWVzXG4gIGRheXNOYW1lLmZvckVhY2goKGRheSkgPT4ge1xuICAgIGlmIChkYXlOdW0gPT0gNikge1xuICAgICAgZGF5TnVtID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5TnVtKys7XG4gICAgfVxuICAgIGRheS50ZXh0Q29udGVudCA9IGRheXNbZGF5TnVtXTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheUZvcmVjYXN0ID0gKGZvcmVjYXN0KSA9PiB7XG4gIGxldCBsaXN0ID0gZm9yZWNhc3QubGlzdDtcbiAgcG9wLnRleHRDb250ZW50ID0gbGlzdFswXS5wb3AgKiAxMDA7XG5cbiAgbGV0IGkgPSA2O1xuICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCBkYXlCbG9jay5sZW5ndGg7IGRheSsrKSB7XG4gICAgZGF5c1RlbXBbZGF5XS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobGlzdFtpXS5tYWluLnRlbXApO1xuICAgIGRheXNJY29uW2RheV0uc3JjID0gYC4uL3NyYy9pbWFnZXMvJHtsaXN0W2ldLndlYXRoZXJbMF0uaWNvbn0uc3ZnYDtcbiAgICBpICs9IDg7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiB7XG4gIGlucHV0RXJyb3IudGV4dENvbnRlbnQgPVxuICAgICdMb2NhdGlvbiBub3QgZm91bmQuXFxuXFxuUGxlYXNlIGVudGVyOiBcIkNpdHlcIiwgXCJDaXR5LCBTdGF0ZVwiIG9yIFwiQ2l0eSwgQ291bnRyeVwiLic7XG4gIGlucHV0RXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckVycm9yID0gKCkgPT4ge1xuICBpbnB1dEVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgaW5wdXRFcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufTtcbiIsImltcG9ydCB7IHVwZGF0ZURpc3BsYXksIHNob3dFcnJvciB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuZXhwb3J0IGxldCBjaXR5ID0gXCJwYXJpc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwga2V5LCB1bml0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke2tleX0mdW5pdHM9JHt1bml0fWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzVGV4dCA9PSBcIk5vdCBGb3VuZFwiKSB7XG4gICAgICAgIHJlamVjdChFcnJvcihcImNpdHkgbm90IGZvdW5kXCIpKTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShyZXNwb25zZS5qc29uKCkpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgZ2V0Rm9yZWNhc3QgPSAobG9jYXRpb24sIGtleSwgdW5pdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bG9jYXRpb259JkFQUElEPSR7a2V5fSZ1bml0cz0ke3VuaXR9YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNUZXh0ID09IFwiTm90IEZvdW5kXCIpIHtcbiAgICAgICAgcmVqZWN0KEVycm9yKFwiY2l0eSBub3QgZm91bmRcIikpO1xuICAgICAgfVxuXG4gICAgICByZXNvbHZlKHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blNlYXJjaChsb2NhdGlvbiwga2V5LCB1bml0KSB7XG4gIFByb21pc2UuYWxsKFtcbiAgICBnZXRXZWF0aGVyKGxvY2F0aW9uLCBrZXksIHVuaXQpLFxuICAgIGdldEZvcmVjYXN0KGxvY2F0aW9uLCBrZXksIHVuaXQpLFxuICBdKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICB1cGRhdGVEaXNwbGF5KGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgY2l0eSA9IGxvY2F0aW9uO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBzaG93RXJyb3IoKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBteUtleSA9IFwiYjRiNjg0ODFkODA0ZjE5NjI5ZDRhOTk4ZTRiZDY5ODNcIjtcbiIsImltcG9ydCB7IGNpdHksIHJ1blNlYXJjaCB9IGZyb20gXCIuL2ZldGNoXCI7XG5pbXBvcnQgeyBteUtleSB9IGZyb20gXCIuL215S2V5XCI7XG5leHBvcnQgbGV0IG1lYXN1cmVtZW50ID0gXCJpbXBlcmlhbFwiO1xuY29uc3QgZGVncmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWdyZWVcIik7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVTd2l0Y2ggPSAoKSA9PiB7XG4gIGNoYW5nZVVuaXQoKTtcbiAgaWYgKGNpdHkgIT0gXCJcIikge1xuICAgIHJ1blNlYXJjaChjaXR5LCBteUtleSwgbWVhc3VyZW1lbnQpO1xuICB9XG4gIGRpc3BsYXlVbml0KCk7XG59O1xuXG5jb25zdCBjaGFuZ2VVbml0ID0gKCkgPT4ge1xuICBpZiAobWVhc3VyZW1lbnQgPT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgbWVhc3VyZW1lbnQgPSBcIm1ldHJpY1wiO1xuICB9IGVsc2Uge1xuICAgIG1lYXN1cmVtZW50ID0gXCJpbXBlcmlhbFwiO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VW5pdCA9ICgpID0+IHtcbiAgZGVncmVlLmZvckVhY2goKGVhY2gpID0+IHtcbiAgICBpZiAobWVhc3VyZW1lbnQgPT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgICBlYWNoLnRleHRDb250ZW50ID0gXCLihIlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWFjaC50ZXh0Q29udGVudCA9IFwi4oSDXCI7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21haW4uY3NzXCI7XG5pbXBvcnQgeyBydW5TZWFyY2ggfSBmcm9tIFwiLi9hcHBzL2ZldGNoXCI7XG5pbXBvcnQgeyBteUtleSB9IGZyb20gXCIuL2FwcHMvbXlLZXlcIjtcbmltcG9ydCB7IHRvZ2dsZVN3aXRjaCwgbWVhc3VyZW1lbnQgfSBmcm9tIFwiLi9hcHBzL3N3aXRjaFwiO1xuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSBcIi4vYXBwcy9kaXNwbGF5XCI7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZm9ybVwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbmNvbnN0IHVuaXRTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXQtc3dpdGNoXCIpO1xuXG5mb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgaWYgKGlucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICBydW5TZWFyY2goaW5wdXQudmFsdWUsIG15S2V5LCBtZWFzdXJlbWVudCk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHNob3dFcnJvcigpO1xuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxudW5pdFN3aXRjaC5vbmNsaWNrID0gKCkgPT4ge1xuICB0b2dnbGVTd2l0Y2goKTtcbn07XG5cbi8vIFRPRE86IGZpbmQgb3V0IGhvdyB0byBnZXQgd2VhdGhlciBmb3Igd2hvbGUgd2VlayAgLS0gRE9ORVxuLy8gVE9ETzogZmluZCBvdXQgdGhlIGNvZGVzIGZvciBpY29ucyAtLSBET05FXG4vLyBUT0RPOiBmaW5kIG91dCBob3cgdG8gZ2V0IGNoYW5jZSBvZiByYWluIC0tIERPTkVcbi8vIFRPRE86IGR5bmFtaWMgdW5pdCBtZWFzdXJlbWVudCBjaG9pY2UgLS0gRE9ORVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9