"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["script"],{

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --deep-black: rgb(28, 28, 33);\n    --spaceship-white: rgb(242, 247, 247);\n    --tech-blue: rgb(0, 188, 235);\n    --race-orange: rgb(252, 116, 25);\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 100%;\n    font-family: monospace;\n}\n\nbody {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    font-size: 2.5rem;\n    background-color: black;\n    color: var(--tech-blue);\n}\n\nimg {\n    width: 80px;\n    height: 80px;\n}\n\n.initial-background {\n    width: clamp(600px, 50%, 1200px);\n    height: inherit;\n    margin: 0 auto;\n    background-color: var(--deep-black);\n}\n\n.start-btn {\n    width: clamp(400px, 80%, 800px);\n    height: 20%;\n    margin: 100px 10% 0;\n    font-size: 8rem;\n    border-top: 5px solid white;\n    border-left: 5px solid white;\n    border-right: 5px solid gray;\n    border-bottom: 5px solid gray;\n    background-color: var(--race-orange);\n    color: var(--spaceship-white);\n}\n\n.start-btn:active {\n    border-top: 5px solid gray;\n    border-left: 5px solid gray;\n    border-right: 5px solid white;\n    border-bottom: 5px solid white;\n    background-color: rgb(252, 104, 6);\n}\n\n.game-mode-display {\n    margin: 0 10%;\n}\n\n.opponent-gallery {\n    margin: 0 10%;\n    padding: 30px 10px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly; \n}\n\n.opponent-card {\n    outline: 1px solid var(--tech-blue);\n    width: clamp(60px, 25%, 120%);\n    height: 200px;\n    margin: 0 20px 30px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.opponent-card:hover {\n    background-color: rgba(75, 74, 74, 0.829);\n}\n\n.opponent-card:active {\n    background-color: rgba(75, 74, 74, 1);\n}\n\n.game-panel {\n    width: clamp(860px, 80%, 1600px);\n    height: inherit;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: var(--deep-black);\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-panel-left {\n    width: clamp(350px, 42%, 650px);\n    height: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n}\n\n.player-fleet-display, .enemy-fleet-display {\n    margin-top: 18px;\n    padding: 2px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: flex-end;\n    gap: 6px;\n}\n\n.player-fleet-display > div, .enemy-fleet-display > div {\n    margin: 0 16px;\n    display: flex;\n}\n\n.ship-hull-block {\n    width: 22px;\n    height: 22px;\n    border-radius: 4px;\n    margin: 2px;\n    background-color: var(--spaceship-white);\n}\n\n.home-board, .targeting-board {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n    grid-template-rows: 1fr 10fr;\n}\n\n.home-board-number-coordinates, .targeting-board-number-coordinates {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-letter-coordinates, .targeting-board-letter-coordinates {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-blocks, .targeting-board-blocks {\n    border: 1px solid gray;\n    border-radius: 4px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 1px;\n}\n\n.home-board-block, .targeting-board-block {\n    background-color: black;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.target-grid-block {\n    border: solid 1px var(--race-orange);\n    color: var(--spaceship-white);\n}\n\n.flashing-background {\n    animation: flash 1.3s infinite;\n}\n\n@keyframes flash {\n    0% {\n        background-color: rgb(75, 74, 74);\n    }\n    50% {\n        background-color: var(--spaceship-white);\n    }\n    100% {\n        background-color: rgb(75, 74, 74);\n    }\n}\n\n.firing {\n    animation: firing 0.3s;\n}\n\n@keyframes firing {\n    0% {\n        width: 0px;\n        background-color: var(--race-orange);\n    }\n    100% {\n        background-color: var(--race-orange);\n    }\n}\n\n.undamaged-hull {\n    background-color: var(--spaceship-white);\n}\n\n.damaged-hull {\n    background-color: var(--race-orange);\n}\n\n.empty-grid-block {\n    border: solid 1px var(--tech-blue);\n}\n\n.game-panel-right {\n    width: clamp(550px, 55%, 800px);\n    height: 100%;\n}\n\n.targeting-board {\n    height: 65%;\n}\n\n.how-to-play-display {\n    height: 25%;\n    margin-top: 15px;\n    color: var(--race-orange);\n}\n\n.how-to-play-instrucitons {\n    height: 85%;\n    border: 1px solid var(--race-orange);\n    padding: 8px;\n    font-size: 1.5rem;\n    overflow: auto;\n}\n\n.how-to-play-span {\n    background-color: rgba(211, 211, 211, .1);\n    border-radius: 4px;\n}\n\n.instruction-controls {\n    display: flex;\n    flex-flow: row nowrap;\n}\n\n.instructions-btn {\n    display: flex;\n    flex: row nowrap;\n    justify-content: center;\n    align-items: center;\n    border-left: 1px solid var(--race-orange);\n    border-bottom: 1px solid var(--race-orange);\n    border-right: 1px solid var(--race-orange);\n    width: 50px;\n    height: 20px;\n}\n\n.sound-options {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    display: flex;\n    flex-flow: column nowrap;\n    width: 200px;\n    font-size: 1.7rem;\n}\n\n.sound-options > div {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n}\n\n.strikethrough {\n    text-decoration-line: line-through;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --deep-black: rgb(28, 28, 33);\n    --spaceship-white: rgb(242, 247, 247);\n    --tech-blue: rgb(0, 188, 235);\n    --race-orange: rgb(252, 116, 25);\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 100%;\n    font-family: monospace;\n}\n\nbody {\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    font-size: 2.5rem;\n    background-color: black;\n    color: var(--tech-blue);\n}\n\nimg {\n    width: 80px;\n    height: 80px;\n}\n\n.initial-background {\n    width: clamp(600px, 50%, 1200px);\n    height: inherit;\n    margin: 0 auto;\n    background-color: var(--deep-black);\n}\n\n.start-btn {\n    width: clamp(400px, 80%, 800px);\n    height: 20%;\n    margin: 100px 10% 0;\n    font-size: 8rem;\n    border-top: 5px solid white;\n    border-left: 5px solid white;\n    border-right: 5px solid gray;\n    border-bottom: 5px solid gray;\n    background-color: var(--race-orange);\n    color: var(--spaceship-white);\n}\n\n.start-btn:active {\n    border-top: 5px solid gray;\n    border-left: 5px solid gray;\n    border-right: 5px solid white;\n    border-bottom: 5px solid white;\n    background-color: rgb(252, 104, 6);\n}\n\n.game-mode-display {\n    margin: 0 10%;\n}\n\n.opponent-gallery {\n    margin: 0 10%;\n    padding: 30px 10px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly; \n}\n\n.opponent-card {\n    outline: 1px solid var(--tech-blue);\n    width: clamp(60px, 25%, 120%);\n    height: 200px;\n    margin: 0 20px 30px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.opponent-card:hover {\n    background-color: rgba(75, 74, 74, 0.829);\n}\n\n.opponent-card:active {\n    background-color: rgba(75, 74, 74, 1);\n}\n\n.game-panel {\n    width: clamp(860px, 80%, 1600px);\n    height: inherit;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: var(--deep-black);\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-panel-left {\n    width: clamp(350px, 42%, 650px);\n    height: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n}\n\n.player-fleet-display, .enemy-fleet-display {\n    margin-top: 18px;\n    padding: 2px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: flex-end;\n    gap: 6px;\n}\n\n.player-fleet-display > div, .enemy-fleet-display > div {\n    margin: 0 16px;\n    display: flex;\n}\n\n.ship-hull-block {\n    width: 22px;\n    height: 22px;\n    border-radius: 4px;\n    margin: 2px;\n    background-color: var(--spaceship-white);\n}\n\n.home-board, .targeting-board {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n    grid-template-rows: 1fr 10fr;\n}\n\n.home-board-number-coordinates, .targeting-board-number-coordinates {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-letter-coordinates, .targeting-board-letter-coordinates {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-blocks, .targeting-board-blocks {\n    border: 1px solid gray;\n    border-radius: 4px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 1px;\n}\n\n.home-board-block, .targeting-board-block {\n    background-color: black;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.target-grid-block {\n    border: solid 1px var(--race-orange);\n    color: var(--spaceship-white);\n}\n\n.flashing-background {\n    animation: flash 1.3s infinite;\n}\n\n@keyframes flash {\n    0% {\n        background-color: rgb(75, 74, 74);\n    }\n    50% {\n        background-color: var(--spaceship-white);\n    }\n    100% {\n        background-color: rgb(75, 74, 74);\n    }\n}\n\n.firing {\n    animation: firing 0.3s;\n}\n\n@keyframes firing {\n    0% {\n        width: 0px;\n        background-color: var(--race-orange);\n    }\n    100% {\n        background-color: var(--race-orange);\n    }\n}\n\n.undamaged-hull {\n    background-color: var(--spaceship-white);\n}\n\n.damaged-hull {\n    background-color: var(--race-orange);\n}\n\n.empty-grid-block {\n    border: solid 1px var(--tech-blue);\n}\n\n.game-panel-right {\n    width: clamp(550px, 55%, 800px);\n    height: 100%;\n}\n\n.targeting-board {\n    height: 65%;\n}\n\n.how-to-play-display {\n    height: 25%;\n    margin-top: 15px;\n    color: var(--race-orange);\n}\n\n.how-to-play-instrucitons {\n    height: 85%;\n    border: 1px solid var(--race-orange);\n    padding: 8px;\n    font-size: 1.5rem;\n    overflow: auto;\n}\n\n.how-to-play-span {\n    background-color: rgba(211, 211, 211, .1);\n    border-radius: 4px;\n}\n\n.instruction-controls {\n    display: flex;\n    flex-flow: row nowrap;\n}\n\n.instructions-btn {\n    display: flex;\n    flex: row nowrap;\n    justify-content: center;\n    align-items: center;\n    border-left: 1px solid var(--race-orange);\n    border-bottom: 1px solid var(--race-orange);\n    border-right: 1px solid var(--race-orange);\n    width: 50px;\n    height: 20px;\n}\n\n.sound-options {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    display: flex;\n    flex-flow: column nowrap;\n    width: 200px;\n    font-size: 1.7rem;\n}\n\n.sound-options > div {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n}\n\n.strikethrough {\n    text-decoration-line: line-through;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Board": () => (/* binding */ Board),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (name, hitpoints) => {
    let hull = [];
    for (let i = 0; i < hitpoints; i++) {
        hull.push(0);
    };
    function hit(hullIndex) {
        hull[hullIndex] = 1;
    };
    function isSunk() {
        let damage = hull.reduce((prev, current) => prev + current, 0);
        if (hitpoints === damage) {return true};
        return false;
    };
    return { name, hull, hit, isSunk};
};

const Board = () => {
    let board = function() {
        let array = [];
        for (let i = 0; i < 100; i++) {
            array.push({beenAttacked: false, asset: null});
        };
        return array;
    }();
    function reportCoordinateAsset(gridCoordinate) {
        let coordinateValue = board[gridCoordinate].asset;
        return coordinateValue;
    };
    function placeBoat(gridCoordinate, ship, isVertical = false) {
        if (isVertical) {
            let remainingVerticalSpace = 10 - ship.hull.length - Math.floor(gridCoordinate / 10);
            if (remainingVerticalSpace < 0) {return "Insufficient space"};
            for (let i = 0; i < ship.hull.length; i++) {
                if (board[gridCoordinate + i * 10].asset !== null) {return "There is already a ship there!"};
            };
            for (let i = 0; i < ship.hull.length; i++) {
                board[gridCoordinate + i * 10].asset = [ship, i];
            };
            return "success";
        };
        if (!isVertical) {
            let remainingHorizontalSpace = 10 - ship.hull.length - gridCoordinate % 10;
            if (remainingHorizontalSpace < 0) {return "Insufficient space"};
            for (let i = 0; i < ship.hull.length; i++) {
                if (board[gridCoordinate + i].asset !== null) {return "There is already a ship there!"};
            };
            for (let i = 0; i < ship.hull.length; i++) {
                board[gridCoordinate + i].asset = [ship, i];
            };
            return "success";
        };
    };
    function targetCoordinate(gridCoordinate) {
        if (!board[gridCoordinate].beenAttacked) {
            board[gridCoordinate].beenAttacked = true;
            let asset = reportCoordinateAsset(gridCoordinate);
            if (asset) {
                asset[0].hit(asset[1]);
                return [asset[0].name, asset[0].isSunk()];
            };
            return asset;
        }; 
    };
    return { reportCoordinateAsset, placeBoat, targetCoordinate };
};

const Player = () => {
    const board = Board();
    const carrier = Ship("carrier",5);
    const battleship = Ship("battleship",4);
    const cruiser = Ship("cruiser",3);
    const submarine = Ship("submarine",3);
    const destroyer = Ship("destroyer",2);
    const fleet = [carrier, battleship, cruiser, submarine, destroyer];
    let placedShipCount = 0;
    function setShip(gridCoordinate, isVertical = false) {
        if (placedShipCount < fleet.length) {
            let result = board.placeBoat(gridCoordinate, fleet[placedShipCount], isVertical);
            if (result === "success") {placedShipCount++};
            return result;
        };
    };
    function receiveAttack(gridCoordinate) {
        const targetAsset = board.targetCoordinate(gridCoordinate);
        return targetAsset;
    };
    function attack(gridCoordinate, target) {
        const attackResult = target.receiveAttack(gridCoordinate);
        if (attackResult === null) {
            return [null,"miss"];
        };
        if (attackResult[1] === false) {
            return [attackResult[0],"hit"];
        };
        if (attackResult[1] === true) {
            return [attackResult[0],"sunk"];
        };
        return attackResult;
    };
    function isFleetDead() {
        let fleetGraveyard = fleet.filter(ship => ship.isSunk());
        if (fleetGraveyard.length === fleet.length) {return true};
        return false;
    };
    return {setShip, receiveAttack, attack, isFleetDead};
};



/***/ }),

/***/ "./src/gamePlay.js":
/*!*************************!*\
  !*** ./src/gamePlay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWinner": () => (/* binding */ checkWinner),
/* harmony export */   "getRandomCoordinate": () => (/* binding */ getRandomCoordinate),
/* harmony export */   "getRandomOrientation": () => (/* binding */ getRandomOrientation),
/* harmony export */   "newCompetitors": () => (/* binding */ newCompetitors)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


function checkWinner(playersArray) {
    const playerLost = playersArray[0].isFleetDead();
    const opponentLost = playersArray[1].isFleetDead();
    if (playerLost) {return "Opponent wins!"};
    if (opponentLost) {return "Player wins!"};
    if (playerLost && opponentLost) {return "Tie game!"};
    return false;
};

function newCompetitors() {
    const player = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.Player)();
    const opponent = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.Player)();
    const competitors = [player, opponent];
    return competitors;
};

function getRandomCoordinate() {
    return Math.floor(Math.random() * 100);
};

function getRandomOrientation() {
    const number = Math.floor(Math.random() * 2);
    if (number === 1) {return true};
    return false;
};



/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamePlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePlay.js */ "./src/gamePlay.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_white_g_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/white-g.png */ "./src/img/white-g.png");
/* harmony import */ var _sounds_391840_vabsounds_space_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds/391840__vabsounds__space.wav */ "./src/sounds/391840__vabsounds__space.wav");
/* harmony import */ var _sounds_339169_debsound_arcade_laser_014_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sounds/339169__debsound__arcade-laser-014.wav */ "./src/sounds/339169__debsound__arcade-laser-014.wav");







let competitors = [];
let isMusicOn = false;
let isFxOn = true;




const gameMusic = document.createElement("audio");
gameMusic.src = _sounds_391840_vabsounds_space_wav__WEBPACK_IMPORTED_MODULE_3__;
gameMusic.setAttribute("type", "audio/wav");

const firingSound = document.createElement("audio");
firingSound.src = _sounds_339169_debsound_arcade_laser_014_wav__WEBPACK_IMPORTED_MODULE_4__;
firingSound.setAttribute("type", "audio/wav");

function renderSoundOptions() {
    const soundOptions = document.createElement("div");
    soundOptions.className = "sound-options";
    const musicLabel = document.createElement("label");
    musicLabel.textContent = "Music";
    musicLabel.addEventListener("click", function() {
        isMusicOn = !isMusicOn;
        if (!isMusicOn) {musicLabel.className = "strikethrough"}
        else {musicLabel.className = ""};
        if (isMusicOn) {
            gameMusic.setAttribute("loop","");
            gameMusic.play();
        } else {
            gameMusic.removeAttribute("loop");
            gameMusic.pause();
        };
    });
    const fxLabel = document.createElement("label");
    fxLabel.textContent = "FX Sound";
    fxLabel.addEventListener("click", function() {
        isFxOn = !isFxOn;
        if (!isFxOn) {fxLabel.className = "strikethrough"}
        else {fxLabel.className = ""};
    });
    if (!isMusicOn) {musicLabel.className = "strikethrough"};
    if (!isFxOn) {fxLabel.className = "strikethrough"};
    soundOptions.appendChild(musicLabel);
    soundOptions.appendChild(fxLabel);
    body.appendChild(soundOptions);
};






let targetingBlockRefNumber = 0;
let previousOpponentTargetCoordinates = [];

function moveTargetingMarker(e) {
    const homeBlockList = document.querySelectorAll(".home-board-block");
    const targetingBlockList = document.querySelectorAll(".targeting-board-block");
    const currentTargetBlock = document.querySelector(".target-grid-block");
    function updateTargetMarker() {
        currentTargetBlock.classList.remove("target-grid-block");
        currentTargetBlock.textContent = "";
        targetingBlockList[targetingBlockRefNumber].classList.add("target-grid-block");
        targetingBlockList[targetingBlockRefNumber].textContent = "+";
    };
    if ((e.key === "a" || e.key === "ArrowLeft") && targetingBlockRefNumber > 0) {
        targetingBlockRefNumber--;
        updateTargetMarker();
    };
    if ((e.key === "s" || e.key === "ArrowDown") && targetingBlockRefNumber < 90) {
        targetingBlockRefNumber += 10;
        updateTargetMarker();
    };
    if ((e.key === "w" || e.key === "ArrowUp") && targetingBlockRefNumber > 9) {
        targetingBlockRefNumber -= 10;
        updateTargetMarker();
    };
    if ((e.key === "d" || e.key === "ArrowRight") && targetingBlockRefNumber < 99) {
        targetingBlockRefNumber++;
        updateTargetMarker();
    };
    if (e.key === "f" && !currentTargetBlock.classList.contains("firing")) {
        currentTargetBlock.classList.add("firing");
        if (isFxOn) {
            firingSound.currentTime = 0;
            firingSound.play()
        };
        const playerAttackResult = competitors[0].attack(targetingBlockRefNumber, competitors[1]);
        let currentOpponentTargetCoordinate = (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.getRandomCoordinate)();
        while (previousOpponentTargetCoordinates.includes(currentOpponentTargetCoordinate)) {
            currentOpponentTargetCoordinate = (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.getRandomCoordinate)();
        };
        previousOpponentTargetCoordinates.push(currentOpponentTargetCoordinate);
        const opponentAttackResult = competitors[1].attack(currentOpponentTargetCoordinate, competitors[0]);
        if (playerAttackResult[1] === "miss") {currentTargetBlock.classList.add("empty-grid-block")
        };
        if (playerAttackResult[1] === "hit") {currentTargetBlock.classList.add("damaged-hull")};
        if (playerAttackResult[1] === "sunk") {
            currentTargetBlock.classList.add("damaged-hull");
            const sunkFleetShip = document.querySelectorAll(`.enemy-${playerAttackResult[0]}`);
            sunkFleetShip.forEach(block => block.classList.add("damaged-hull"));
        };
        if (opponentAttackResult[1] === "miss") {homeBlockList[currentOpponentTargetCoordinate].classList.add("empty-grid-block")};
        if (opponentAttackResult[1] === "hit") {homeBlockList[currentOpponentTargetCoordinate].classList.add("damaged-hull")};
        if (opponentAttackResult[1] === "sunk") {
            homeBlockList[currentOpponentTargetCoordinate].classList.add("damaged-hull");
            const sunkFleetShip = document.querySelectorAll(`.player-${opponentAttackResult[0]}`);
            sunkFleetShip.forEach(block => block.classList.add("damaged-hull"));
        };
        if ((0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.checkWinner)(competitors)) {
            alert((0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.checkWinner)(competitors));
            endCombat();
            targetingBlockRefNumber = 0;
            previousOpponentTargetCoordinates = [];
            gameStarted = false;
            homeBlockRefNumber = 0;
            placedShipCount = 0;
            isShipVertical = false;
            clearElement(body);
            renderStartingPage();
        }
    };
};

function endCombat() {
    window.removeEventListener("keydown", moveTargetingMarker);
};


function initializeFiringStage() {
    const targetingBlockList = document.querySelectorAll(".targeting-board-block");
    targetingBlockList[0].classList.add("target-grid-block");
    targetingBlockList[0].textContent = "+";
    window.addEventListener("keydown", moveTargetingMarker);
}




let gameStarted = false;

let homeBlockRefNumber = 0;
let placedShipCount = 0;
let isShipVertical = false;
const shipSizeArray = [5,4,3,3,2];

function moveShipModel(e) {
    if (e.key === "Enter") {
        const homeBlockList = document.querySelectorAll(".home-board-block");
        function checkFreeSpace() {
            for (let i = 0; i < homeBlockList.length; i++) {
                if (homeBlockList[i].classList.contains("undamaged-hull") && homeBlockList[i].classList.contains("flashing-background")) {return true};
            };
        };
        let isSpaceTaken = checkFreeSpace();
        if (!isSpaceTaken) {
            competitors[0].setShip(homeBlockRefNumber, isShipVertical);
            let computerSetShipResult = "";
            while (computerSetShipResult !== "success" ) {
                computerSetShipResult = competitors[1].setShip((0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.getRandomCoordinate)(), (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.getRandomOrientation)());
            };
            if (!isShipVertical) {
                for (let i = 0; i < shipSizeArray[placedShipCount]; i++) {
                    homeBlockList[homeBlockRefNumber + i].classList.add("undamaged-hull")
                };
            };
            if (isShipVertical) {
                for (let i = 0; i < shipSizeArray[placedShipCount]; i++) {
                    homeBlockList[homeBlockRefNumber + i * 10].classList.add("undamaged-hull")
                };
            };
            removeShipModel();
            placedShipCount++;
            homeBlockRefNumber = 0;
            isShipVertical = false;
            if (placedShipCount < 5) {revealShipModel(isShipVertical)}
            else {initializeFiringStage()};
        };        
    };
    if (e.key === "r") {
        if (!isShipVertical && homeBlockRefNumber + shipSizeArray[placedShipCount] * 10 -10 <= 99 || isShipVertical && (homeBlockRefNumber) % 10 <= 10 - shipSizeArray[placedShipCount]) {
            isShipVertical = !isShipVertical;
            removeShipModel();
            revealShipModel(isShipVertical);
        };
    };
    if (!isShipVertical) {
        if ((e.key === "a" || e.key === "ArrowLeft") && homeBlockRefNumber % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber--;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "w" || e.key === "ArrowUp") && homeBlockRefNumber - 10 >= 0) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber - 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "s" || e.key === "ArrowDown") && homeBlockRefNumber + 10 <= 99) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber + 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "d" || e.key === "ArrowRight") && (homeBlockRefNumber + shipSizeArray[placedShipCount]) % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber++;
            revealShipModel(isShipVertical);
        };
    };
    if (isShipVertical) {
        if ((e.key === "a" || e.key === "ArrowLeft") && homeBlockRefNumber % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber--;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "w" || e.key === "ArrowUp") && homeBlockRefNumber - 10 >= 0) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber - 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "s" || e.key === "ArrowDown") && homeBlockRefNumber + shipSizeArray[placedShipCount] * 10 <= 99) {
            removeShipModel();
            homeBlockRefNumber = homeBlockRefNumber + 10;
            revealShipModel(isShipVertical);
        };
        if ((e.key === "d" || e.key === "ArrowRight") && (homeBlockRefNumber + 1) % 10 !== 0) {
            removeShipModel();
            homeBlockRefNumber++;
            revealShipModel(isShipVertical);
        };
    };
};

function revealShipModel(isShipVertical) {
    const homeBlockList = document.querySelectorAll(".home-board-block");
    for (let i = 0; i < shipSizeArray[placedShipCount]; i++) {
        if (isShipVertical) {homeBlockList[homeBlockRefNumber + i * 10].classList.add("flashing-background")};
        if (!isShipVertical) {homeBlockList[homeBlockRefNumber + i].classList.add("flashing-background")};
    };
    window.addEventListener("keydown", moveShipModel);
};

function removeShipModel() {
    window.removeEventListener("keydown", moveShipModel);
    const flashingHomeBlockList = document.querySelectorAll(".flashing-background");
    if (flashingHomeBlockList.length) {
        flashingHomeBlockList.forEach(block => block.classList.remove("flashing-background"));
    };
};

window.addEventListener("keydown", function(e){
    if (gameStarted) {
        if (e.key === " ") {
            revealShipModel();
        };
    };
});

const body = document.body;

function clearElement(element = body) {
    while (element.firstChild) {
        element.removeChild(body.firstChild);
    };
};

function renderStartingPage() {
    const initialBackground = document.createElement("div");
    initialBackground.className = "initial-background";

    const startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "START";
    startBtn.addEventListener("click", () => {
        clearElement();
        renderGamePanel();
        gameStarted = true;
        competitors = (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.newCompetitors)();
    });
    initialBackground.appendChild(startBtn);

    const gameModeDisplay = document.createElement("p");
    gameModeDisplay.className = "game-mode-display";
    gameModeDisplay.textContent = "Game Mode: ";
    const gameMode = document.createElement("span");
    gameMode.className = "game-mode";
    gameMode.textContent = "Gunner";
    gameModeDisplay.appendChild(gameMode);
    initialBackground.appendChild(gameModeDisplay);

    const opponentGallery = document.createElement("div");
    opponentGallery.className = "opponent-gallery";
    const gunnerCard = document.createElement("div");
    gunnerCard.className = "opponent-card";
    const gunnerImg = document.createElement("img");
    gunnerImg.src = _img_white_g_png__WEBPACK_IMPORTED_MODULE_2__;
    const gunnerName = document.createElement("p");
    gunnerName.textContent = "Gunner";
    const gunnerDifficulty = document.createElement("p");
    gunnerDifficulty.textContent = "(Easy)";
    gunnerCard.appendChild(gunnerImg);
    gunnerCard.appendChild(gunnerName);
    gunnerCard.appendChild(gunnerDifficulty);
    opponentGallery.appendChild(gunnerCard);
    initialBackground.appendChild(opponentGallery);

    body.appendChild(initialBackground);
    renderSoundOptions();
};

function renderFleetDisplay(fleetOwnerString, commanderString) {
    const fleetSection = document.createElement("div");
    const fleetPara = document.createElement("p");
    fleetPara.textContent = `${fleetOwnerString} fleet`.toUpperCase();
    const fleetDisplay = document.createElement("div");
    fleetDisplay.className = `${commanderString}-fleet-display`;
    for (let i = 0; i < 5; i++) {
        const shipNameArray = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
        const shipHullCount = [5,4,3,3,2];
        const shipDiv = document.createElement("div");
        for (let j = 0; j < shipHullCount[i]; j++) {
            const shipBlock = document.createElement("div");
            shipBlock.className = `${commanderString}-${shipNameArray[i]} ship-hull-block`;
            shipDiv.appendChild(shipBlock);
        };
        fleetDisplay.appendChild(shipDiv);
    };
    fleetSection.appendChild(fleetPara);
    fleetSection.appendChild(fleetDisplay);
    return fleetSection;
};

function renderBoard(boardTypeString) {
    const boardSection = document.createElement("div");
    const boardPara = document.createElement("p");
    boardPara.textContent = `${boardTypeString} board`.toUpperCase();
    const board = document.createElement("div");
    board.className = `${boardTypeString}-board`;
    const classesArray = [null,"number-coordinates","letter-coordinates","blocks"];
    const boardItems = {
        numbers: [1,2,3,4,5,6,7,8,9,10],
        letters: ["A","B","C","D","E","F","G","H","I","J"],
        class: "board-block"
    };
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        function createCoordinateDisplay(boardItem) {
            for (let j = 0; j < 10; j++) {
                const coordinateDiv = document.createElement("div");
                coordinateDiv.textContent = `${boardItems[boardItem][j]}`;
                div.appendChild(coordinateDiv);
            };
        };
        function createBoardBlocks(classString) {
            for (let j = 0; j < 10; j++) {
                const boardBlock = document.createElement("div");
                boardBlock.className = `${boardTypeString}-${classString}`;
                div.appendChild(boardBlock);
            };
        };
        if (i > 0) {
            div.className = `${boardTypeString}-board-${classesArray[i]}`;
            if (i === 1) {
                createCoordinateDisplay("numbers");
            };
            if (i === 2) {
                createCoordinateDisplay("letters");
            };
            if (i === 3) {
                let x = 0;
                while (x < 10) {
                    createBoardBlocks(boardItems.class);
                    x++;
                };
            };
        };
        board.appendChild(div);
    };
    boardSection.appendChild(boardPara);
    boardSection.appendChild(board);
    return boardSection;
};

function renderHowToPlay() {
    let i = 0
    const gameInstructions = ["Welcome!</br></br>To start, press <span class='how-to-play-span'>space</span> to set your fleet on the home board!","Use <span class='how-to-play-span'>wasd</span> or <span class='how-to-play-span'>arrow</span> keys to move the ship model and the <span class='how-to-play-span'>r</span> button to flip its orientation.</br></br>When you are happy with its position, press <span class='how-to-play-span'>enter</span> to confirm it!","After setting your fleet on the board, it's time to start firing!</br></br>Using the <span class='how-to-play-span'>wasd</span> or <span class='how-to-play-span'>arrow</span> keys, press <span class='how-to-play-span'>f</span> to fire at target coordinates to try and sink you opponents ships before they sink yours; good luck!!!"];
    function updateHowToPlayDisplay(element) {
        element.innerHTML = gameInstructions[i];
    };

    const howToPlayDisplay = document.createElement("div");
    howToPlayDisplay.className = "how-to-play-display";
    const howToPlayDisplayPara = document.createElement("p");
    howToPlayDisplayPara.textContent = "HOW TO PLAY";
    const howToPlayDisplayDiv = document.createElement("div");
    howToPlayDisplayDiv.className = "how-to-play-instrucitons";
    const instructionsPara = document.createElement("p");
    updateHowToPlayDisplay(instructionsPara);
    const instructionControls = document.createElement("div");
    instructionControls.className = "instruction-controls";
    const backBtn = document.createElement("div");
    backBtn.className = "instructions-btn";
    backBtn.textContent = "<";
    backBtn.addEventListener("click", function() {
        if (i > 0) {i--};
        updateHowToPlayDisplay(instructionsPara);
    });
    const forwardBtn = document.createElement("div");
    forwardBtn.className = "instructions-btn";
    forwardBtn.textContent = ">";
    forwardBtn.addEventListener("click", function() {
        if (i < 2) {i++};
        updateHowToPlayDisplay(instructionsPara);
    });
    instructionControls.appendChild(backBtn);
    instructionControls.appendChild(forwardBtn);
    howToPlayDisplayDiv.appendChild(instructionsPara);
    howToPlayDisplay.appendChild(howToPlayDisplayPara);
    howToPlayDisplay.appendChild(howToPlayDisplayDiv);
    howToPlayDisplay.appendChild(instructionControls);
    return howToPlayDisplay;
};

function renderGamePanel() {
    const gamePanel = document.createElement("div");
    gamePanel.className = "game-panel";

    const gamePanelLeft = document.createElement("div");
    gamePanelLeft.className = "game-panel-left";

    gamePanelLeft.appendChild(renderFleetDisplay("your", "player"));
    gamePanelLeft.appendChild(renderFleetDisplay("enemy", "enemy"));
    gamePanelLeft.appendChild(renderBoard("home"));

    gamePanel.appendChild(gamePanelLeft);

    const gamePanelRight = document.createElement("div");
    gamePanelRight.className = "game-panel-right";


    gamePanelRight.appendChild(renderBoard("targeting"));
    gamePanelRight.appendChild(renderHowToPlay());
    gamePanel.appendChild(gamePanelRight);

    body.appendChild(gamePanel);
    renderSoundOptions();
};

renderStartingPage();

/***/ }),

/***/ "./src/img/white-g.png":
/*!*****************************!*\
  !*** ./src/img/white-g.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56dbf17ae4ec5b5d786e.png";

/***/ }),

/***/ "./src/sounds/339169__debsound__arcade-laser-014.wav":
/*!***********************************************************!*\
  !*** ./src/sounds/339169__debsound__arcade-laser-014.wav ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "743fb4f6def8e9a730f4.wav";

/***/ }),

/***/ "./src/sounds/391840__vabsounds__space.wav":
/*!*************************************************!*\
  !*** ./src/sounds/391840__vabsounds__space.wav ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "016d99cace9c0aafcce4.wav";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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Q0EsK0NBQStDLHlCQUF5QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0EsMENBQTBDLGdCQUFnQixHQUFHLFlBQVk7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCLFNBQVMsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZ3QkFBNndCO0FBQzd3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lUGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1kZWVwLWJsYWNrOiByZ2IoMjgsIDI4LCAzMyk7XFxuICAgIC0tc3BhY2VzaGlwLXdoaXRlOiByZ2IoMjQyLCAyNDcsIDI0Nyk7XFxuICAgIC0tdGVjaC1ibHVlOiByZ2IoMCwgMTg4LCAyMzUpO1xcbiAgICAtLXJhY2Utb3JhbmdlOiByZ2IoMjUyLCAxMTYsIDI1KTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWNoLWJsdWUpO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaW5pdGlhbC1iYWNrZ3JvdW5kIHtcXG4gICAgd2lkdGg6IGNsYW1wKDYwMHB4LCA1MCUsIDEyMDBweCk7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtYmxhY2spO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gICAgd2lkdGg6IGNsYW1wKDQwMHB4LCA4MCUsIDgwMHB4KTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIG1hcmdpbjogMTAwcHggMTAlIDA7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgZ3JheTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbiAgICBjb2xvcjogdmFyKC0tc3BhY2VzaGlwLXdoaXRlKTtcXG59XFxuXFxuLnN0YXJ0LWJ0bjphY3RpdmUge1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxMDQsIDYpO1xcbn1cXG5cXG4uZ2FtZS1tb2RlLWRpc3BsYXkge1xcbiAgICBtYXJnaW46IDAgMTAlO1xcbn1cXG5cXG4ub3Bwb25lbnQtZ2FsbGVyeSB7XFxuICAgIG1hcmdpbjogMCAxMCU7XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgXFxufVxcblxcbi5vcHBvbmVudC1jYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXRlY2gtYmx1ZSk7XFxuICAgIHdpZHRoOiBjbGFtcCg2MHB4LCAyNSUsIDEyMCUpO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IDAgMjBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3Bwb25lbnQtY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc0LCA3NCwgMC44MjkpO1xcbn1cXG5cXG4ub3Bwb25lbnQtY2FyZDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDEpO1xcbn1cXG5cXG4uZ2FtZS1wYW5lbCB7XFxuICAgIHdpZHRoOiBjbGFtcCg4NjBweCwgODAlLCAxNjAwcHgpO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLWJsYWNrKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZS1wYW5lbC1sZWZ0IHtcXG4gICAgd2lkdGg6IGNsYW1wKDM1MHB4LCA0MiUsIDY1MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBsYXllci1mbGVldC1kaXNwbGF5LCAuZW5lbXktZmxlZXQtZGlzcGxheSB7XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLnBsYXllci1mbGVldC1kaXNwbGF5ID4gZGl2LCAuZW5lbXktZmxlZXQtZGlzcGxheSA+IGRpdiB7XFxuICAgIG1hcmdpbjogMCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hpcC1odWxsLWJsb2NrIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BhY2VzaGlwLXdoaXRlKTtcXG59XFxuXFxuLmhvbWUtYm9hcmQsIC50YXJnZXRpbmctYm9hcmQge1xcbiAgICBtYXJnaW46IDAgMTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbn1cXG5cXG4uaG9tZS1ib2FyZC1udW1iZXItY29vcmRpbmF0ZXMsIC50YXJnZXRpbmctYm9hcmQtbnVtYmVyLWNvb3JkaW5hdGVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYm9hcmQtbGV0dGVyLWNvb3JkaW5hdGVzLCAudGFyZ2V0aW5nLWJvYXJkLWxldHRlci1jb29yZGluYXRlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJvYXJkLWJsb2NrcywgLnRhcmdldGluZy1ib2FyZC1ibG9ja3Mge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5ob21lLWJvYXJkLWJsb2NrLCAudGFyZ2V0aW5nLWJvYXJkLWJsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXJnZXQtZ3JpZC1ibG9jayB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5mbGFzaGluZy1iYWNrZ3JvdW5kIHtcXG4gICAgYW5pbWF0aW9uOiBmbGFzaCAxLjNzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NCwgNzQpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zcGFjZXNoaXAtd2hpdGUpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NCwgNzQpO1xcbiAgICB9XFxufVxcblxcbi5maXJpbmcge1xcbiAgICBhbmltYXRpb246IGZpcmluZyAwLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZpcmluZyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIH1cXG59XFxuXFxuLnVuZGFtYWdlZC1odWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BhY2VzaGlwLXdoaXRlKTtcXG59XFxuXFxuLmRhbWFnZWQtaHVsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhY2Utb3JhbmdlKTtcXG59XFxuXFxuLmVtcHR5LWdyaWQtYmxvY2sge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS10ZWNoLWJsdWUpO1xcbn1cXG5cXG4uZ2FtZS1wYW5lbC1yaWdodCB7XFxuICAgIHdpZHRoOiBjbGFtcCg1NTBweCwgNTUlLCA4MDBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhcmdldGluZy1ib2FyZCB7XFxuICAgIGhlaWdodDogNjUlO1xcbn1cXG5cXG4uaG93LXRvLXBsYXktZGlzcGxheSB7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbn1cXG5cXG4uaG93LXRvLXBsYXktaW5zdHJ1Y2l0b25zIHtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5ob3ctdG8tcGxheS1zcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmluc3RydWN0aW9uLWNvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IHJvdyBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc291bmQtb3B0aW9ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5zb3VuZC1vcHRpb25zID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3RyaWtldGhyb3VnaCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFD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cUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLDJDQUEyQztJQUMzQywwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZGVlcC1ibGFjazogcmdiKDI4LCAyOCwgMzMpO1xcbiAgICAtLXNwYWNlc2hpcC13aGl0ZTogcmdiKDI0MiwgMjQ3LCAyNDcpO1xcbiAgICAtLXRlY2gtYmx1ZTogcmdiKDAsIDE4OCwgMjM1KTtcXG4gICAgLS1yYWNlLW9yYW5nZTogcmdiKDI1MiwgMTE2LCAyNSk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tdGVjaC1ibHVlKTtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmluaXRpYWwtYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiBjbGFtcCg2MDBweCwgNTAlLCAxMjAwcHgpO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLWJsYWNrKTtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxuICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgODAlLCA4MDBweCk7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBtYXJnaW46IDEwMHB4IDEwJSAwO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5zdGFydC1idG46YWN0aXZlIHtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMTA0LCA2KTtcXG59XFxuXFxuLmdhbWUtbW9kZS1kaXNwbGF5IHtcXG4gICAgbWFyZ2luOiAwIDEwJTtcXG59XFxuXFxuLm9wcG9uZW50LWdhbGxlcnkge1xcbiAgICBtYXJnaW46IDAgMTAlO1xcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxcbn1cXG5cXG4ub3Bwb25lbnQtY2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS10ZWNoLWJsdWUpO1xcbiAgICB3aWR0aDogY2xhbXAoNjBweCwgMjUlLCAxMjAlKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luOiAwIDIwcHggMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wcG9uZW50LWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDAuODI5KTtcXG59XFxuXFxuLm9wcG9uZW50LWNhcmQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzQsIDc0LCAxKTtcXG59XFxuXFxuLmdhbWUtcGFuZWwge1xcbiAgICB3aWR0aDogY2xhbXAoODYwcHgsIDgwJSwgMTYwMHB4KTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWUtcGFuZWwtbGVmdCB7XFxuICAgIHdpZHRoOiBjbGFtcCgzNTBweCwgNDIlLCA2NTBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wbGF5ZXItZmxlZXQtZGlzcGxheSwgLmVuZW15LWZsZWV0LWRpc3BsYXkge1xcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5wbGF5ZXItZmxlZXQtZGlzcGxheSA+IGRpdiwgLmVuZW15LWZsZWV0LWRpc3BsYXkgPiBkaXYge1xcbiAgICBtYXJnaW46IDAgMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXAtaHVsbC1ibG9jayB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5ob21lLWJvYXJkLCAudGFyZ2V0aW5nLWJvYXJkIHtcXG4gICAgbWFyZ2luOiAwIDEwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG59XFxuXFxuLmhvbWUtYm9hcmQtbnVtYmVyLWNvb3JkaW5hdGVzLCAudGFyZ2V0aW5nLWJvYXJkLW51bWJlci1jb29yZGluYXRlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJvYXJkLWxldHRlci1jb29yZGluYXRlcywgLnRhcmdldGluZy1ib2FyZC1sZXR0ZXItY29vcmRpbmF0ZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1ib2FyZC1ibG9ja3MsIC50YXJnZXRpbmctYm9hcmQtYmxvY2tzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4uaG9tZS1ib2FyZC1ibG9jaywgLnRhcmdldGluZy1ib2FyZC1ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFyZ2V0LWdyaWQtYmxvY2sge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1zcGFjZXNoaXAtd2hpdGUpO1xcbn1cXG5cXG4uZmxhc2hpbmctYmFja2dyb3VuZCB7XFxuICAgIGFuaW1hdGlvbjogZmxhc2ggMS4zcyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzQsIDc0KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BhY2VzaGlwLXdoaXRlKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzQsIDc0KTtcXG4gICAgfVxcbn1cXG5cXG4uZmlyaW5nIHtcXG4gICAgYW5pbWF0aW9uOiBmaXJpbmcgMC4zcztcXG59XFxuXFxuQGtleWZyYW1lcyBmaXJpbmcge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDogMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbiAgICB9XFxufVxcblxcbi51bmRhbWFnZWQtaHVsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5kYW1hZ2VkLWh1bGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYWNlLW9yYW5nZSk7XFxufVxcblxcbi5lbXB0eS1ncmlkLWJsb2NrIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tdGVjaC1ibHVlKTtcXG59XFxuXFxuLmdhbWUtcGFuZWwtcmlnaHQge1xcbiAgICB3aWR0aDogY2xhbXAoNTUwcHgsIDU1JSwgODAwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXJnZXRpbmctYm9hcmQge1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxuLmhvdy10by1wbGF5LWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXJhY2Utb3JhbmdlKTtcXG59XFxuXFxuLmhvdy10by1wbGF5LWluc3RydWNpdG9ucyB7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaG93LXRvLXBsYXktc3BhbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbi1jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG59XFxuXFxuLmluc3RydWN0aW9ucy1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiByb3cgbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnNvdW5kLW9wdGlvbnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uc291bmQtb3B0aW9ucyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNoaXAgPSAobmFtZSwgaGl0cG9pbnRzKSA9PiB7XG4gICAgbGV0IGh1bGwgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdHBvaW50czsgaSsrKSB7XG4gICAgICAgIGh1bGwucHVzaCgwKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGhpdChodWxsSW5kZXgpIHtcbiAgICAgICAgaHVsbFtodWxsSW5kZXhdID0gMTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgICAgbGV0IGRhbWFnZSA9IGh1bGwucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBwcmV2ICsgY3VycmVudCwgMCk7XG4gICAgICAgIGlmIChoaXRwb2ludHMgPT09IGRhbWFnZSkge3JldHVybiB0cnVlfTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIHsgbmFtZSwgaHVsbCwgaGl0LCBpc1N1bmt9O1xufTtcblxuY29uc3QgQm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHtiZWVuQXR0YWNrZWQ6IGZhbHNlLCBhc3NldDogbnVsbH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfSgpO1xuICAgIGZ1bmN0aW9uIHJlcG9ydENvb3JkaW5hdGVBc3NldChncmlkQ29vcmRpbmF0ZSkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZVZhbHVlID0gYm9hcmRbZ3JpZENvb3JkaW5hdGVdLmFzc2V0O1xuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZVZhbHVlO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcGxhY2VCb2F0KGdyaWRDb29yZGluYXRlLCBzaGlwLCBpc1ZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIGxldCByZW1haW5pbmdWZXJ0aWNhbFNwYWNlID0gMTAgLSBzaGlwLmh1bGwubGVuZ3RoIC0gTWF0aC5mbG9vcihncmlkQ29vcmRpbmF0ZSAvIDEwKTtcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmdWZXJ0aWNhbFNwYWNlIDwgMCkge3JldHVybiBcIkluc3VmZmljaWVudCBzcGFjZVwifTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5odWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2dyaWRDb29yZGluYXRlICsgaSAqIDEwXS5hc3NldCAhPT0gbnVsbCkge3JldHVybiBcIlRoZXJlIGlzIGFscmVhZHkgYSBzaGlwIHRoZXJlIVwifTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaHVsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2dyaWRDb29yZGluYXRlICsgaSAqIDEwXS5hc3NldCA9IFtzaGlwLCBpXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gXCJzdWNjZXNzXCI7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgbGV0IHJlbWFpbmluZ0hvcml6b250YWxTcGFjZSA9IDEwIC0gc2hpcC5odWxsLmxlbmd0aCAtIGdyaWRDb29yZGluYXRlICUgMTA7XG4gICAgICAgICAgICBpZiAocmVtYWluaW5nSG9yaXpvbnRhbFNwYWNlIDwgMCkge3JldHVybiBcIkluc3VmZmljaWVudCBzcGFjZVwifTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5odWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2dyaWRDb29yZGluYXRlICsgaV0uYXNzZXQgIT09IG51bGwpIHtyZXR1cm4gXCJUaGVyZSBpcyBhbHJlYWR5IGEgc2hpcCB0aGVyZSFcIn07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmh1bGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtncmlkQ29vcmRpbmF0ZSArIGldLmFzc2V0ID0gW3NoaXAsIGldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBcInN1Y2Nlc3NcIjtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHRhcmdldENvb3JkaW5hdGUoZ3JpZENvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFib2FyZFtncmlkQ29vcmRpbmF0ZV0uYmVlbkF0dGFja2VkKSB7XG4gICAgICAgICAgICBib2FyZFtncmlkQ29vcmRpbmF0ZV0uYmVlbkF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IHJlcG9ydENvb3JkaW5hdGVBc3NldChncmlkQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgICAgICBhc3NldFswXS5oaXQoYXNzZXRbMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbYXNzZXRbMF0ubmFtZSwgYXNzZXRbMF0uaXNTdW5rKCldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBhc3NldDtcbiAgICAgICAgfTsgXG4gICAgfTtcbiAgICByZXR1cm4geyByZXBvcnRDb29yZGluYXRlQXNzZXQsIHBsYWNlQm9hdCwgdGFyZ2V0Q29vcmRpbmF0ZSB9O1xufTtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gQm9hcmQoKTtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcChcImNhcnJpZXJcIiw1KTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcChcImJhdHRsZXNoaXBcIiw0KTtcbiAgICBjb25zdCBjcnVpc2VyID0gU2hpcChcImNydWlzZXJcIiwzKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKFwic3VibWFyaW5lXCIsMyk7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcChcImRlc3Ryb3llclwiLDIpO1xuICAgIGNvbnN0IGZsZWV0ID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgICBsZXQgcGxhY2VkU2hpcENvdW50ID0gMDtcbiAgICBmdW5jdGlvbiBzZXRTaGlwKGdyaWRDb29yZGluYXRlLCBpc1ZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHBsYWNlZFNoaXBDb3VudCA8IGZsZWV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGJvYXJkLnBsYWNlQm9hdChncmlkQ29vcmRpbmF0ZSwgZmxlZXRbcGxhY2VkU2hpcENvdW50XSwgaXNWZXJ0aWNhbCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcInN1Y2Nlc3NcIikge3BsYWNlZFNoaXBDb3VudCsrfTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGdyaWRDb29yZGluYXRlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEFzc2V0ID0gYm9hcmQudGFyZ2V0Q29vcmRpbmF0ZShncmlkQ29vcmRpbmF0ZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRBc3NldDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGF0dGFjayhncmlkQ29vcmRpbmF0ZSwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHRhcmdldC5yZWNlaXZlQXR0YWNrKGdyaWRDb29yZGluYXRlKTtcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtudWxsLFwibWlzc1wiXTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdFsxXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBbYXR0YWNrUmVzdWx0WzBdLFwiaGl0XCJdO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0WzFdID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gW2F0dGFja1Jlc3VsdFswXSxcInN1bmtcIl07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBpc0ZsZWV0RGVhZCgpIHtcbiAgICAgICAgbGV0IGZsZWV0R3JhdmV5YXJkID0gZmxlZXQuZmlsdGVyKHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgICAgIGlmIChmbGVldEdyYXZleWFyZC5sZW5ndGggPT09IGZsZWV0Lmxlbmd0aCkge3JldHVybiB0cnVlfTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIHtzZXRTaGlwLCByZWNlaXZlQXR0YWNrLCBhdHRhY2ssIGlzRmxlZXREZWFkfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAsIEJvYXJkLCBQbGF5ZXIgfTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5mdW5jdGlvbiBjaGVja1dpbm5lcihwbGF5ZXJzQXJyYXkpIHtcbiAgICBjb25zdCBwbGF5ZXJMb3N0ID0gcGxheWVyc0FycmF5WzBdLmlzRmxlZXREZWFkKCk7XG4gICAgY29uc3Qgb3Bwb25lbnRMb3N0ID0gcGxheWVyc0FycmF5WzFdLmlzRmxlZXREZWFkKCk7XG4gICAgaWYgKHBsYXllckxvc3QpIHtyZXR1cm4gXCJPcHBvbmVudCB3aW5zIVwifTtcbiAgICBpZiAob3Bwb25lbnRMb3N0KSB7cmV0dXJuIFwiUGxheWVyIHdpbnMhXCJ9O1xuICAgIGlmIChwbGF5ZXJMb3N0ICYmIG9wcG9uZW50TG9zdCkge3JldHVybiBcIlRpZSBnYW1lIVwifTtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBuZXdDb21wZXRpdG9ycygpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoKTtcbiAgICBjb25zdCBvcHBvbmVudCA9IFBsYXllcigpO1xuICAgIGNvbnN0IGNvbXBldGl0b3JzID0gW3BsYXllciwgb3Bwb25lbnRdO1xuICAgIHJldHVybiBjb21wZXRpdG9ycztcbn07XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG59O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZiAobnVtYmVyID09PSAxKSB7cmV0dXJuIHRydWV9O1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IGNoZWNrV2lubmVyLCBuZXdDb21wZXRpdG9ycywgZ2V0UmFuZG9tQ29vcmRpbmF0ZSwgZ2V0UmFuZG9tT3JpZW50YXRpb24gfTsiLCJpbXBvcnQgeyBjaGVja1dpbm5lciwgbmV3Q29tcGV0aXRvcnMsIGdldFJhbmRvbUNvb3JkaW5hdGUsIGdldFJhbmRvbU9yaWVudGF0aW9uIH0gZnJvbSBcIi4vZ2FtZVBsYXkuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgd2hpdGVHIGZyb20gXCIuL2ltZy93aGl0ZS1nLnBuZ1wiO1xuaW1wb3J0IHNwYWNlTXVzaWMgZnJvbSBcIi4vc291bmRzLzM5MTg0MF9fdmFic291bmRzX19zcGFjZS53YXZcIjtcbmltcG9ydCBsYXNlclNvdW5kIGZyb20gXCIuL3NvdW5kcy8zMzkxNjlfX2RlYnNvdW5kX19hcmNhZGUtbGFzZXItMDE0LndhdlwiO1xuXG5cbmxldCBjb21wZXRpdG9ycyA9IFtdO1xubGV0IGlzTXVzaWNPbiA9IGZhbHNlO1xubGV0IGlzRnhPbiA9IHRydWU7XG5cblxuXG5cbmNvbnN0IGdhbWVNdXNpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbmdhbWVNdXNpYy5zcmMgPSBzcGFjZU11c2ljO1xuZ2FtZU11c2ljLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJhdWRpby93YXZcIik7XG5cbmNvbnN0IGZpcmluZ1NvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuZmlyaW5nU291bmQuc3JjID0gbGFzZXJTb3VuZDtcbmZpcmluZ1NvdW5kLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJhdWRpby93YXZcIik7XG5cbmZ1bmN0aW9uIHJlbmRlclNvdW5kT3B0aW9ucygpIHtcbiAgICBjb25zdCBzb3VuZE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvdW5kT3B0aW9ucy5jbGFzc05hbWUgPSBcInNvdW5kLW9wdGlvbnNcIjtcbiAgICBjb25zdCBtdXNpY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG11c2ljTGFiZWwudGV4dENvbnRlbnQgPSBcIk11c2ljXCI7XG4gICAgbXVzaWNMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzTXVzaWNPbiA9ICFpc011c2ljT247XG4gICAgICAgIGlmICghaXNNdXNpY09uKSB7bXVzaWNMYWJlbC5jbGFzc05hbWUgPSBcInN0cmlrZXRocm91Z2hcIn1cbiAgICAgICAgZWxzZSB7bXVzaWNMYWJlbC5jbGFzc05hbWUgPSBcIlwifTtcbiAgICAgICAgaWYgKGlzTXVzaWNPbikge1xuICAgICAgICAgICAgZ2FtZU11c2ljLnNldEF0dHJpYnV0ZShcImxvb3BcIixcIlwiKTtcbiAgICAgICAgICAgIGdhbWVNdXNpYy5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnYW1lTXVzaWMucmVtb3ZlQXR0cmlidXRlKFwibG9vcFwiKTtcbiAgICAgICAgICAgIGdhbWVNdXNpYy5wYXVzZSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IGZ4TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZnhMYWJlbC50ZXh0Q29udGVudCA9IFwiRlggU291bmRcIjtcbiAgICBmeExhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNGeE9uID0gIWlzRnhPbjtcbiAgICAgICAgaWYgKCFpc0Z4T24pIHtmeExhYmVsLmNsYXNzTmFtZSA9IFwic3RyaWtldGhyb3VnaFwifVxuICAgICAgICBlbHNlIHtmeExhYmVsLmNsYXNzTmFtZSA9IFwiXCJ9O1xuICAgIH0pO1xuICAgIGlmICghaXNNdXNpY09uKSB7bXVzaWNMYWJlbC5jbGFzc05hbWUgPSBcInN0cmlrZXRocm91Z2hcIn07XG4gICAgaWYgKCFpc0Z4T24pIHtmeExhYmVsLmNsYXNzTmFtZSA9IFwic3RyaWtldGhyb3VnaFwifTtcbiAgICBzb3VuZE9wdGlvbnMuYXBwZW5kQ2hpbGQobXVzaWNMYWJlbCk7XG4gICAgc291bmRPcHRpb25zLmFwcGVuZENoaWxkKGZ4TGFiZWwpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc291bmRPcHRpb25zKTtcbn07XG5cblxuXG5cblxuXG5sZXQgdGFyZ2V0aW5nQmxvY2tSZWZOdW1iZXIgPSAwO1xubGV0IHByZXZpb3VzT3Bwb25lbnRUYXJnZXRDb29yZGluYXRlcyA9IFtdO1xuXG5mdW5jdGlvbiBtb3ZlVGFyZ2V0aW5nTWFya2VyKGUpIHtcbiAgICBjb25zdCBob21lQmxvY2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lLWJvYXJkLWJsb2NrXCIpO1xuICAgIGNvbnN0IHRhcmdldGluZ0Jsb2NrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFyZ2V0aW5nLWJvYXJkLWJsb2NrXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFyZ2V0LWdyaWQtYmxvY2tcIik7XG4gICAgZnVuY3Rpb24gdXBkYXRlVGFyZ2V0TWFya2VyKCkge1xuICAgICAgICBjdXJyZW50VGFyZ2V0QmxvY2suY2xhc3NMaXN0LnJlbW92ZShcInRhcmdldC1ncmlkLWJsb2NrXCIpO1xuICAgICAgICBjdXJyZW50VGFyZ2V0QmxvY2sudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB0YXJnZXRpbmdCbG9ja0xpc3RbdGFyZ2V0aW5nQmxvY2tSZWZOdW1iZXJdLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXQtZ3JpZC1ibG9ja1wiKTtcbiAgICAgICAgdGFyZ2V0aW5nQmxvY2tMaXN0W3RhcmdldGluZ0Jsb2NrUmVmTnVtYmVyXS50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIH07XG4gICAgaWYgKChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpICYmIHRhcmdldGluZ0Jsb2NrUmVmTnVtYmVyID4gMCkge1xuICAgICAgICB0YXJnZXRpbmdCbG9ja1JlZk51bWJlci0tO1xuICAgICAgICB1cGRhdGVUYXJnZXRNYXJrZXIoKTtcbiAgICB9O1xuICAgIGlmICgoZS5rZXkgPT09IFwic1wiIHx8IGUua2V5ID09PSBcIkFycm93RG93blwiKSAmJiB0YXJnZXRpbmdCbG9ja1JlZk51bWJlciA8IDkwKSB7XG4gICAgICAgIHRhcmdldGluZ0Jsb2NrUmVmTnVtYmVyICs9IDEwO1xuICAgICAgICB1cGRhdGVUYXJnZXRNYXJrZXIoKTtcbiAgICB9O1xuICAgIGlmICgoZS5rZXkgPT09IFwid1wiIHx8IGUua2V5ID09PSBcIkFycm93VXBcIikgJiYgdGFyZ2V0aW5nQmxvY2tSZWZOdW1iZXIgPiA5KSB7XG4gICAgICAgIHRhcmdldGluZ0Jsb2NrUmVmTnVtYmVyIC09IDEwO1xuICAgICAgICB1cGRhdGVUYXJnZXRNYXJrZXIoKTtcbiAgICB9O1xuICAgIGlmICgoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5ID09PSBcIkFycm93UmlnaHRcIikgJiYgdGFyZ2V0aW5nQmxvY2tSZWZOdW1iZXIgPCA5OSkge1xuICAgICAgICB0YXJnZXRpbmdCbG9ja1JlZk51bWJlcisrO1xuICAgICAgICB1cGRhdGVUYXJnZXRNYXJrZXIoKTtcbiAgICB9O1xuICAgIGlmIChlLmtleSA9PT0gXCJmXCIgJiYgIWN1cnJlbnRUYXJnZXRCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXJpbmdcIikpIHtcbiAgICAgICAgY3VycmVudFRhcmdldEJsb2NrLmNsYXNzTGlzdC5hZGQoXCJmaXJpbmdcIik7XG4gICAgICAgIGlmIChpc0Z4T24pIHtcbiAgICAgICAgICAgIGZpcmluZ1NvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIGZpcmluZ1NvdW5kLnBsYXkoKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwbGF5ZXJBdHRhY2tSZXN1bHQgPSBjb21wZXRpdG9yc1swXS5hdHRhY2sodGFyZ2V0aW5nQmxvY2tSZWZOdW1iZXIsIGNvbXBldGl0b3JzWzFdKTtcbiAgICAgICAgbGV0IGN1cnJlbnRPcHBvbmVudFRhcmdldENvb3JkaW5hdGUgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgIHdoaWxlIChwcmV2aW91c09wcG9uZW50VGFyZ2V0Q29vcmRpbmF0ZXMuaW5jbHVkZXMoY3VycmVudE9wcG9uZW50VGFyZ2V0Q29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcHBvbmVudFRhcmdldENvb3JkaW5hdGUgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHByZXZpb3VzT3Bwb25lbnRUYXJnZXRDb29yZGluYXRlcy5wdXNoKGN1cnJlbnRPcHBvbmVudFRhcmdldENvb3JkaW5hdGUpO1xuICAgICAgICBjb25zdCBvcHBvbmVudEF0dGFja1Jlc3VsdCA9IGNvbXBldGl0b3JzWzFdLmF0dGFjayhjdXJyZW50T3Bwb25lbnRUYXJnZXRDb29yZGluYXRlLCBjb21wZXRpdG9yc1swXSk7XG4gICAgICAgIGlmIChwbGF5ZXJBdHRhY2tSZXN1bHRbMV0gPT09IFwibWlzc1wiKSB7Y3VycmVudFRhcmdldEJsb2NrLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1ncmlkLWJsb2NrXCIpXG4gICAgICAgIH07XG4gICAgICAgIGlmIChwbGF5ZXJBdHRhY2tSZXN1bHRbMV0gPT09IFwiaGl0XCIpIHtjdXJyZW50VGFyZ2V0QmxvY2suY2xhc3NMaXN0LmFkZChcImRhbWFnZWQtaHVsbFwiKX07XG4gICAgICAgIGlmIChwbGF5ZXJBdHRhY2tSZXN1bHRbMV0gPT09IFwic3Vua1wiKSB7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0QmxvY2suY2xhc3NMaXN0LmFkZChcImRhbWFnZWQtaHVsbFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHN1bmtGbGVldFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZW5lbXktJHtwbGF5ZXJBdHRhY2tSZXN1bHRbMF19YCk7XG4gICAgICAgICAgICBzdW5rRmxlZXRTaGlwLmZvckVhY2goYmxvY2sgPT4gYmxvY2suY2xhc3NMaXN0LmFkZChcImRhbWFnZWQtaHVsbFwiKSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChvcHBvbmVudEF0dGFja1Jlc3VsdFsxXSA9PT0gXCJtaXNzXCIpIHtob21lQmxvY2tMaXN0W2N1cnJlbnRPcHBvbmVudFRhcmdldENvb3JkaW5hdGVdLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1ncmlkLWJsb2NrXCIpfTtcbiAgICAgICAgaWYgKG9wcG9uZW50QXR0YWNrUmVzdWx0WzFdID09PSBcImhpdFwiKSB7aG9tZUJsb2NrTGlzdFtjdXJyZW50T3Bwb25lbnRUYXJnZXRDb29yZGluYXRlXS5jbGFzc0xpc3QuYWRkKFwiZGFtYWdlZC1odWxsXCIpfTtcbiAgICAgICAgaWYgKG9wcG9uZW50QXR0YWNrUmVzdWx0WzFdID09PSBcInN1bmtcIikge1xuICAgICAgICAgICAgaG9tZUJsb2NrTGlzdFtjdXJyZW50T3Bwb25lbnRUYXJnZXRDb29yZGluYXRlXS5jbGFzc0xpc3QuYWRkKFwiZGFtYWdlZC1odWxsXCIpO1xuICAgICAgICAgICAgY29uc3Qgc3Vua0ZsZWV0U2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXItJHtvcHBvbmVudEF0dGFja1Jlc3VsdFswXX1gKTtcbiAgICAgICAgICAgIHN1bmtGbGVldFNoaXAuZm9yRWFjaChibG9jayA9PiBibG9jay5jbGFzc0xpc3QuYWRkKFwiZGFtYWdlZC1odWxsXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNoZWNrV2lubmVyKGNvbXBldGl0b3JzKSkge1xuICAgICAgICAgICAgYWxlcnQoY2hlY2tXaW5uZXIoY29tcGV0aXRvcnMpKTtcbiAgICAgICAgICAgIGVuZENvbWJhdCgpO1xuICAgICAgICAgICAgdGFyZ2V0aW5nQmxvY2tSZWZOdW1iZXIgPSAwO1xuICAgICAgICAgICAgcHJldmlvdXNPcHBvbmVudFRhcmdldENvb3JkaW5hdGVzID0gW107XG4gICAgICAgICAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaG9tZUJsb2NrUmVmTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHBsYWNlZFNoaXBDb3VudCA9IDA7XG4gICAgICAgICAgICBpc1NoaXBWZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgICAgICAgY2xlYXJFbGVtZW50KGJvZHkpO1xuICAgICAgICAgICAgcmVuZGVyU3RhcnRpbmdQYWdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZW5kQ29tYmF0KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBtb3ZlVGFyZ2V0aW5nTWFya2VyKTtcbn07XG5cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZpcmluZ1N0YWdlKCkge1xuICAgIGNvbnN0IHRhcmdldGluZ0Jsb2NrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFyZ2V0aW5nLWJvYXJkLWJsb2NrXCIpO1xuICAgIHRhcmdldGluZ0Jsb2NrTGlzdFswXS5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0LWdyaWQtYmxvY2tcIik7XG4gICAgdGFyZ2V0aW5nQmxvY2tMaXN0WzBdLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG1vdmVUYXJnZXRpbmdNYXJrZXIpO1xufVxuXG5cblxuXG5sZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcblxubGV0IGhvbWVCbG9ja1JlZk51bWJlciA9IDA7XG5sZXQgcGxhY2VkU2hpcENvdW50ID0gMDtcbmxldCBpc1NoaXBWZXJ0aWNhbCA9IGZhbHNlO1xuY29uc3Qgc2hpcFNpemVBcnJheSA9IFs1LDQsMywzLDJdO1xuXG5mdW5jdGlvbiBtb3ZlU2hpcE1vZGVsKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjb25zdCBob21lQmxvY2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lLWJvYXJkLWJsb2NrXCIpO1xuICAgICAgICBmdW5jdGlvbiBjaGVja0ZyZWVTcGFjZSgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9tZUJsb2NrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChob21lQmxvY2tMaXN0W2ldLmNsYXNzTGlzdC5jb250YWlucyhcInVuZGFtYWdlZC1odWxsXCIpICYmIGhvbWVCbG9ja0xpc3RbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhc2hpbmctYmFja2dyb3VuZFwiKSkge3JldHVybiB0cnVlfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGxldCBpc1NwYWNlVGFrZW4gPSBjaGVja0ZyZWVTcGFjZSgpO1xuICAgICAgICBpZiAoIWlzU3BhY2VUYWtlbikge1xuICAgICAgICAgICAgY29tcGV0aXRvcnNbMF0uc2V0U2hpcChob21lQmxvY2tSZWZOdW1iZXIsIGlzU2hpcFZlcnRpY2FsKTtcbiAgICAgICAgICAgIGxldCBjb21wdXRlclNldFNoaXBSZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgd2hpbGUgKGNvbXB1dGVyU2V0U2hpcFJlc3VsdCAhPT0gXCJzdWNjZXNzXCIgKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJTZXRTaGlwUmVzdWx0ID0gY29tcGV0aXRvcnNbMV0uc2V0U2hpcChnZXRSYW5kb21Db29yZGluYXRlKCksIGdldFJhbmRvbU9yaWVudGF0aW9uKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghaXNTaGlwVmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplQXJyYXlbcGxhY2VkU2hpcENvdW50XTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVCbG9ja0xpc3RbaG9tZUJsb2NrUmVmTnVtYmVyICsgaV0uY2xhc3NMaXN0LmFkZChcInVuZGFtYWdlZC1odWxsXCIpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNTaGlwVmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplQXJyYXlbcGxhY2VkU2hpcENvdW50XTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWVCbG9ja0xpc3RbaG9tZUJsb2NrUmVmTnVtYmVyICsgaSAqIDEwXS5jbGFzc0xpc3QuYWRkKFwidW5kYW1hZ2VkLWh1bGxcIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlbW92ZVNoaXBNb2RlbCgpO1xuICAgICAgICAgICAgcGxhY2VkU2hpcENvdW50Kys7XG4gICAgICAgICAgICBob21lQmxvY2tSZWZOdW1iZXIgPSAwO1xuICAgICAgICAgICAgaXNTaGlwVmVydGljYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwbGFjZWRTaGlwQ291bnQgPCA1KSB7cmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKX1cbiAgICAgICAgICAgIGVsc2Uge2luaXRpYWxpemVGaXJpbmdTdGFnZSgpfTtcbiAgICAgICAgfTsgICAgICAgIFxuICAgIH07XG4gICAgaWYgKGUua2V5ID09PSBcInJcIikge1xuICAgICAgICBpZiAoIWlzU2hpcFZlcnRpY2FsICYmIGhvbWVCbG9ja1JlZk51bWJlciArIHNoaXBTaXplQXJyYXlbcGxhY2VkU2hpcENvdW50XSAqIDEwIC0xMCA8PSA5OSB8fCBpc1NoaXBWZXJ0aWNhbCAmJiAoaG9tZUJsb2NrUmVmTnVtYmVyKSAlIDEwIDw9IDEwIC0gc2hpcFNpemVBcnJheVtwbGFjZWRTaGlwQ291bnRdKSB7XG4gICAgICAgICAgICBpc1NoaXBWZXJ0aWNhbCA9ICFpc1NoaXBWZXJ0aWNhbDtcbiAgICAgICAgICAgIHJlbW92ZVNoaXBNb2RlbCgpO1xuICAgICAgICAgICAgcmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGlmICghaXNTaGlwVmVydGljYWwpIHtcbiAgICAgICAgaWYgKChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpICYmIGhvbWVCbG9ja1JlZk51bWJlciAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVTaGlwTW9kZWwoKTtcbiAgICAgICAgICAgIGhvbWVCbG9ja1JlZk51bWJlci0tO1xuICAgICAgICAgICAgcmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXkgPT09IFwiQXJyb3dVcFwiKSAmJiBob21lQmxvY2tSZWZOdW1iZXIgLSAxMCA+PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVTaGlwTW9kZWwoKTtcbiAgICAgICAgICAgIGhvbWVCbG9ja1JlZk51bWJlciA9IGhvbWVCbG9ja1JlZk51bWJlciAtIDEwO1xuICAgICAgICAgICAgcmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKChlLmtleSA9PT0gXCJzXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpICYmIGhvbWVCbG9ja1JlZk51bWJlciArIDEwIDw9IDk5KSB7XG4gICAgICAgICAgICByZW1vdmVTaGlwTW9kZWwoKTtcbiAgICAgICAgICAgIGhvbWVCbG9ja1JlZk51bWJlciA9IGhvbWVCbG9ja1JlZk51bWJlciArIDEwO1xuICAgICAgICAgICAgcmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSAmJiAoaG9tZUJsb2NrUmVmTnVtYmVyICsgc2hpcFNpemVBcnJheVtwbGFjZWRTaGlwQ291bnRdKSAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVTaGlwTW9kZWwoKTtcbiAgICAgICAgICAgIGhvbWVCbG9ja1JlZk51bWJlcisrO1xuICAgICAgICAgICAgcmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGlmIChpc1NoaXBWZXJ0aWNhbCkge1xuICAgICAgICBpZiAoKGUua2V5ID09PSBcImFcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikgJiYgaG9tZUJsb2NrUmVmTnVtYmVyICUgMTAgIT09IDApIHtcbiAgICAgICAgICAgIHJlbW92ZVNoaXBNb2RlbCgpO1xuICAgICAgICAgICAgaG9tZUJsb2NrUmVmTnVtYmVyLS07XG4gICAgICAgICAgICByZXZlYWxTaGlwTW9kZWwoaXNTaGlwVmVydGljYWwpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoKGUua2V5ID09PSBcIndcIiB8fCBlLmtleSA9PT0gXCJBcnJvd1VwXCIpICYmIGhvbWVCbG9ja1JlZk51bWJlciAtIDEwID49IDApIHtcbiAgICAgICAgICAgIHJlbW92ZVNoaXBNb2RlbCgpO1xuICAgICAgICAgICAgaG9tZUJsb2NrUmVmTnVtYmVyID0gaG9tZUJsb2NrUmVmTnVtYmVyIC0gMTA7XG4gICAgICAgICAgICByZXZlYWxTaGlwTW9kZWwoaXNTaGlwVmVydGljYWwpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoKGUua2V5ID09PSBcInNcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikgJiYgaG9tZUJsb2NrUmVmTnVtYmVyICsgc2hpcFNpemVBcnJheVtwbGFjZWRTaGlwQ291bnRdICogMTAgPD0gOTkpIHtcbiAgICAgICAgICAgIHJlbW92ZVNoaXBNb2RlbCgpO1xuICAgICAgICAgICAgaG9tZUJsb2NrUmVmTnVtYmVyID0gaG9tZUJsb2NrUmVmTnVtYmVyICsgMTA7XG4gICAgICAgICAgICByZXZlYWxTaGlwTW9kZWwoaXNTaGlwVmVydGljYWwpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoKGUua2V5ID09PSBcImRcIiB8fCBlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpICYmIChob21lQmxvY2tSZWZOdW1iZXIgKyAxKSAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVTaGlwTW9kZWwoKTtcbiAgICAgICAgICAgIGhvbWVCbG9ja1JlZk51bWJlcisrO1xuICAgICAgICAgICAgcmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmV2ZWFsU2hpcE1vZGVsKGlzU2hpcFZlcnRpY2FsKSB7XG4gICAgY29uc3QgaG9tZUJsb2NrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZS1ib2FyZC1ibG9ja1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplQXJyYXlbcGxhY2VkU2hpcENvdW50XTsgaSsrKSB7XG4gICAgICAgIGlmIChpc1NoaXBWZXJ0aWNhbCkge2hvbWVCbG9ja0xpc3RbaG9tZUJsb2NrUmVmTnVtYmVyICsgaSAqIDEwXS5jbGFzc0xpc3QuYWRkKFwiZmxhc2hpbmctYmFja2dyb3VuZFwiKX07XG4gICAgICAgIGlmICghaXNTaGlwVmVydGljYWwpIHtob21lQmxvY2tMaXN0W2hvbWVCbG9ja1JlZk51bWJlciArIGldLmNsYXNzTGlzdC5hZGQoXCJmbGFzaGluZy1iYWNrZ3JvdW5kXCIpfTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBtb3ZlU2hpcE1vZGVsKTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZVNoaXBNb2RlbCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbW92ZVNoaXBNb2RlbCk7XG4gICAgY29uc3QgZmxhc2hpbmdIb21lQmxvY2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mbGFzaGluZy1iYWNrZ3JvdW5kXCIpO1xuICAgIGlmIChmbGFzaGluZ0hvbWVCbG9ja0xpc3QubGVuZ3RoKSB7XG4gICAgICAgIGZsYXNoaW5nSG9tZUJsb2NrTGlzdC5mb3JFYWNoKGJsb2NrID0+IGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJmbGFzaGluZy1iYWNrZ3JvdW5kXCIpKTtcbiAgICB9O1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xuICAgIGlmIChnYW1lU3RhcnRlZCkge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICByZXZlYWxTaGlwTW9kZWwoKTtcbiAgICAgICAgfTtcbiAgICB9O1xufSk7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCA9IGJvZHkpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVuZGVyU3RhcnRpbmdQYWdlKCkge1xuICAgIGNvbnN0IGluaXRpYWxCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbml0aWFsQmFja2dyb3VuZC5jbGFzc05hbWUgPSBcImluaXRpYWwtYmFja2dyb3VuZFwiO1xuXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN0YXJ0QnRuLmNsYXNzTmFtZSA9IFwic3RhcnQtYnRuXCI7XG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlNUQVJUXCI7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJFbGVtZW50KCk7XG4gICAgICAgIHJlbmRlckdhbWVQYW5lbCgpO1xuICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIGNvbXBldGl0b3JzID0gbmV3Q29tcGV0aXRvcnMoKTtcbiAgICB9KTtcbiAgICBpbml0aWFsQmFja2dyb3VuZC5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5cbiAgICBjb25zdCBnYW1lTW9kZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBnYW1lTW9kZURpc3BsYXkuY2xhc3NOYW1lID0gXCJnYW1lLW1vZGUtZGlzcGxheVwiO1xuICAgIGdhbWVNb2RlRGlzcGxheS50ZXh0Q29udGVudCA9IFwiR2FtZSBNb2RlOiBcIjtcbiAgICBjb25zdCBnYW1lTW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGdhbWVNb2RlLmNsYXNzTmFtZSA9IFwiZ2FtZS1tb2RlXCI7XG4gICAgZ2FtZU1vZGUudGV4dENvbnRlbnQgPSBcIkd1bm5lclwiO1xuICAgIGdhbWVNb2RlRGlzcGxheS5hcHBlbmRDaGlsZChnYW1lTW9kZSk7XG4gICAgaW5pdGlhbEJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZ2FtZU1vZGVEaXNwbGF5KTtcblxuICAgIGNvbnN0IG9wcG9uZW50R2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3Bwb25lbnRHYWxsZXJ5LmNsYXNzTmFtZSA9IFwib3Bwb25lbnQtZ2FsbGVyeVwiO1xuICAgIGNvbnN0IGd1bm5lckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGd1bm5lckNhcmQuY2xhc3NOYW1lID0gXCJvcHBvbmVudC1jYXJkXCI7XG4gICAgY29uc3QgZ3VubmVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBndW5uZXJJbWcuc3JjID0gd2hpdGVHO1xuICAgIGNvbnN0IGd1bm5lck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBndW5uZXJOYW1lLnRleHRDb250ZW50ID0gXCJHdW5uZXJcIjtcbiAgICBjb25zdCBndW5uZXJEaWZmaWN1bHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZ3VubmVyRGlmZmljdWx0eS50ZXh0Q29udGVudCA9IFwiKEVhc3kpXCI7XG4gICAgZ3VubmVyQ2FyZC5hcHBlbmRDaGlsZChndW5uZXJJbWcpO1xuICAgIGd1bm5lckNhcmQuYXBwZW5kQ2hpbGQoZ3VubmVyTmFtZSk7XG4gICAgZ3VubmVyQ2FyZC5hcHBlbmRDaGlsZChndW5uZXJEaWZmaWN1bHR5KTtcbiAgICBvcHBvbmVudEdhbGxlcnkuYXBwZW5kQ2hpbGQoZ3VubmVyQ2FyZCk7XG4gICAgaW5pdGlhbEJhY2tncm91bmQuYXBwZW5kQ2hpbGQob3Bwb25lbnRHYWxsZXJ5KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhbEJhY2tncm91bmQpO1xuICAgIHJlbmRlclNvdW5kT3B0aW9ucygpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyRmxlZXREaXNwbGF5KGZsZWV0T3duZXJTdHJpbmcsIGNvbW1hbmRlclN0cmluZykge1xuICAgIGNvbnN0IGZsZWV0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZmxlZXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmxlZXRQYXJhLnRleHRDb250ZW50ID0gYCR7ZmxlZXRPd25lclN0cmluZ30gZmxlZXRgLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgZmxlZXREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmbGVldERpc3BsYXkuY2xhc3NOYW1lID0gYCR7Y29tbWFuZGVyU3RyaW5nfS1mbGVldC1kaXNwbGF5YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBzaGlwTmFtZUFycmF5ID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuICAgICAgICBjb25zdCBzaGlwSHVsbENvdW50ID0gWzUsNCwzLDMsMl07XG4gICAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBIdWxsQ291bnRbaV07IGorKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNoaXBCbG9jay5jbGFzc05hbWUgPSBgJHtjb21tYW5kZXJTdHJpbmd9LSR7c2hpcE5hbWVBcnJheVtpXX0gc2hpcC1odWxsLWJsb2NrYDtcbiAgICAgICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmxlZXREaXNwbGF5LmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgIH07XG4gICAgZmxlZXRTZWN0aW9uLmFwcGVuZENoaWxkKGZsZWV0UGFyYSk7XG4gICAgZmxlZXRTZWN0aW9uLmFwcGVuZENoaWxkKGZsZWV0RGlzcGxheSk7XG4gICAgcmV0dXJuIGZsZWV0U2VjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkKGJvYXJkVHlwZVN0cmluZykge1xuICAgIGNvbnN0IGJvYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9hcmRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYm9hcmRQYXJhLnRleHRDb250ZW50ID0gYCR7Ym9hcmRUeXBlU3RyaW5nfSBib2FyZGAudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuY2xhc3NOYW1lID0gYCR7Ym9hcmRUeXBlU3RyaW5nfS1ib2FyZGA7XG4gICAgY29uc3QgY2xhc3Nlc0FycmF5ID0gW251bGwsXCJudW1iZXItY29vcmRpbmF0ZXNcIixcImxldHRlci1jb29yZGluYXRlc1wiLFwiYmxvY2tzXCJdO1xuICAgIGNvbnN0IGJvYXJkSXRlbXMgPSB7XG4gICAgICAgIG51bWJlcnM6IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF0sXG4gICAgICAgIGxldHRlcnM6IFtcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIl0sXG4gICAgICAgIGNsYXNzOiBcImJvYXJkLWJsb2NrXCJcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNvb3JkaW5hdGVEaXNwbGF5KGJvYXJkSXRlbSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZURpdi50ZXh0Q29udGVudCA9IGAke2JvYXJkSXRlbXNbYm9hcmRJdGVtXVtqXX1gO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb29yZGluYXRlRGl2KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkQmxvY2tzKGNsYXNzU3RyaW5nKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBib2FyZEJsb2NrLmNsYXNzTmFtZSA9IGAke2JvYXJkVHlwZVN0cmluZ30tJHtjbGFzc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChib2FyZEJsb2NrKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGAke2JvYXJkVHlwZVN0cmluZ30tYm9hcmQtJHtjbGFzc2VzQXJyYXlbaV19YDtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29vcmRpbmF0ZURpc3BsYXkoXCJudW1iZXJzXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29vcmRpbmF0ZURpc3BsYXkoXCJsZXR0ZXJzXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICh4IDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQm9hcmRCbG9ja3MoYm9hcmRJdGVtcy5jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9O1xuICAgIGJvYXJkU2VjdGlvbi5hcHBlbmRDaGlsZChib2FyZFBhcmEpO1xuICAgIGJvYXJkU2VjdGlvbi5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgcmV0dXJuIGJvYXJkU2VjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckhvd1RvUGxheSgpIHtcbiAgICBsZXQgaSA9IDBcbiAgICBjb25zdCBnYW1lSW5zdHJ1Y3Rpb25zID0gW1wiV2VsY29tZSE8L2JyPjwvYnI+VG8gc3RhcnQsIHByZXNzIDxzcGFuIGNsYXNzPSdob3ctdG8tcGxheS1zcGFuJz5zcGFjZTwvc3Bhbj4gdG8gc2V0IHlvdXIgZmxlZXQgb24gdGhlIGhvbWUgYm9hcmQhXCIsXCJVc2UgPHNwYW4gY2xhc3M9J2hvdy10by1wbGF5LXNwYW4nPndhc2Q8L3NwYW4+IG9yIDxzcGFuIGNsYXNzPSdob3ctdG8tcGxheS1zcGFuJz5hcnJvdzwvc3Bhbj4ga2V5cyB0byBtb3ZlIHRoZSBzaGlwIG1vZGVsIGFuZCB0aGUgPHNwYW4gY2xhc3M9J2hvdy10by1wbGF5LXNwYW4nPnI8L3NwYW4+IGJ1dHRvbiB0byBmbGlwIGl0cyBvcmllbnRhdGlvbi48L2JyPjwvYnI+V2hlbiB5b3UgYXJlIGhhcHB5IHdpdGggaXRzIHBvc2l0aW9uLCBwcmVzcyA8c3BhbiBjbGFzcz0naG93LXRvLXBsYXktc3Bhbic+ZW50ZXI8L3NwYW4+IHRvIGNvbmZpcm0gaXQhXCIsXCJBZnRlciBzZXR0aW5nIHlvdXIgZmxlZXQgb24gdGhlIGJvYXJkLCBpdCdzIHRpbWUgdG8gc3RhcnQgZmlyaW5nITwvYnI+PC9icj5Vc2luZyB0aGUgPHNwYW4gY2xhc3M9J2hvdy10by1wbGF5LXNwYW4nPndhc2Q8L3NwYW4+IG9yIDxzcGFuIGNsYXNzPSdob3ctdG8tcGxheS1zcGFuJz5hcnJvdzwvc3Bhbj4ga2V5cywgcHJlc3MgPHNwYW4gY2xhc3M9J2hvdy10by1wbGF5LXNwYW4nPmY8L3NwYW4+IHRvIGZpcmUgYXQgdGFyZ2V0IGNvb3JkaW5hdGVzIHRvIHRyeSBhbmQgc2luayB5b3Ugb3Bwb25lbnRzIHNoaXBzIGJlZm9yZSB0aGV5IHNpbmsgeW91cnM7IGdvb2QgbHVjayEhIVwiXTtcbiAgICBmdW5jdGlvbiB1cGRhdGVIb3dUb1BsYXlEaXNwbGF5KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBnYW1lSW5zdHJ1Y3Rpb25zW2ldO1xuICAgIH07XG5cbiAgICBjb25zdCBob3dUb1BsYXlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3dUb1BsYXlEaXNwbGF5LmNsYXNzTmFtZSA9IFwiaG93LXRvLXBsYXktZGlzcGxheVwiO1xuICAgIGNvbnN0IGhvd1RvUGxheURpc3BsYXlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG93VG9QbGF5RGlzcGxheVBhcmEudGV4dENvbnRlbnQgPSBcIkhPVyBUTyBQTEFZXCI7XG4gICAgY29uc3QgaG93VG9QbGF5RGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG93VG9QbGF5RGlzcGxheURpdi5jbGFzc05hbWUgPSBcImhvdy10by1wbGF5LWluc3RydWNpdG9uc1wiO1xuICAgIGNvbnN0IGluc3RydWN0aW9uc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB1cGRhdGVIb3dUb1BsYXlEaXNwbGF5KGluc3RydWN0aW9uc1BhcmEpO1xuICAgIGNvbnN0IGluc3RydWN0aW9uQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluc3RydWN0aW9uQ29udHJvbHMuY2xhc3NOYW1lID0gXCJpbnN0cnVjdGlvbi1jb250cm9sc1wiO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhY2tCdG4uY2xhc3NOYW1lID0gXCJpbnN0cnVjdGlvbnMtYnRuXCI7XG4gICAgYmFja0J0bi50ZXh0Q29udGVudCA9IFwiPFwiO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaSA+IDApIHtpLS19O1xuICAgICAgICB1cGRhdGVIb3dUb1BsYXlEaXNwbGF5KGluc3RydWN0aW9uc1BhcmEpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvcndhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcndhcmRCdG4uY2xhc3NOYW1lID0gXCJpbnN0cnVjdGlvbnMtYnRuXCI7XG4gICAgZm9yd2FyZEJ0bi50ZXh0Q29udGVudCA9IFwiPlwiO1xuICAgIGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaSA8IDIpIHtpKyt9O1xuICAgICAgICB1cGRhdGVIb3dUb1BsYXlEaXNwbGF5KGluc3RydWN0aW9uc1BhcmEpO1xuICAgIH0pO1xuICAgIGluc3RydWN0aW9uQ29udHJvbHMuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gICAgaW5zdHJ1Y3Rpb25Db250cm9scy5hcHBlbmRDaGlsZChmb3J3YXJkQnRuKTtcbiAgICBob3dUb1BsYXlEaXNwbGF5RGl2LmFwcGVuZENoaWxkKGluc3RydWN0aW9uc1BhcmEpO1xuICAgIGhvd1RvUGxheURpc3BsYXkuYXBwZW5kQ2hpbGQoaG93VG9QbGF5RGlzcGxheVBhcmEpO1xuICAgIGhvd1RvUGxheURpc3BsYXkuYXBwZW5kQ2hpbGQoaG93VG9QbGF5RGlzcGxheURpdik7XG4gICAgaG93VG9QbGF5RGlzcGxheS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbkNvbnRyb2xzKTtcbiAgICByZXR1cm4gaG93VG9QbGF5RGlzcGxheTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVQYW5lbCgpIHtcbiAgICBjb25zdCBnYW1lUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVQYW5lbC5jbGFzc05hbWUgPSBcImdhbWUtcGFuZWxcIjtcblxuICAgIGNvbnN0IGdhbWVQYW5lbExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVQYW5lbExlZnQuY2xhc3NOYW1lID0gXCJnYW1lLXBhbmVsLWxlZnRcIjtcblxuICAgIGdhbWVQYW5lbExlZnQuYXBwZW5kQ2hpbGQocmVuZGVyRmxlZXREaXNwbGF5KFwieW91clwiLCBcInBsYXllclwiKSk7XG4gICAgZ2FtZVBhbmVsTGVmdC5hcHBlbmRDaGlsZChyZW5kZXJGbGVldERpc3BsYXkoXCJlbmVteVwiLCBcImVuZW15XCIpKTtcbiAgICBnYW1lUGFuZWxMZWZ0LmFwcGVuZENoaWxkKHJlbmRlckJvYXJkKFwiaG9tZVwiKSk7XG5cbiAgICBnYW1lUGFuZWwuYXBwZW5kQ2hpbGQoZ2FtZVBhbmVsTGVmdCk7XG5cbiAgICBjb25zdCBnYW1lUGFuZWxSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZVBhbmVsUmlnaHQuY2xhc3NOYW1lID0gXCJnYW1lLXBhbmVsLXJpZ2h0XCI7XG5cblxuICAgIGdhbWVQYW5lbFJpZ2h0LmFwcGVuZENoaWxkKHJlbmRlckJvYXJkKFwidGFyZ2V0aW5nXCIpKTtcbiAgICBnYW1lUGFuZWxSaWdodC5hcHBlbmRDaGlsZChyZW5kZXJIb3dUb1BsYXkoKSk7XG4gICAgZ2FtZVBhbmVsLmFwcGVuZENoaWxkKGdhbWVQYW5lbFJpZ2h0KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZVBhbmVsKTtcbiAgICByZW5kZXJTb3VuZE9wdGlvbnMoKTtcbn07XG5cbnJlbmRlclN0YXJ0aW5nUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==