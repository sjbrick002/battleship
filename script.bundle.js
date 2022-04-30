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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --deep-black: rgb(28, 28, 33);\n    --spaceship-white: rgb(242, 247, 247);\n    --tech-blue: rgb(0, 188, 235);\n    --race-orange: rgb(252, 116, 25);\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 100%;\n    font-family: monospace;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    font-size: 2.5rem;\n    background-color: black;\n    color: var(--tech-blue);\n}\n\nimg {\n    width: 80px;\n    height: 80px;\n}\n\n.initial-background {\n    width: clamp(600px, 50%, 1200px);\n    height: inherit;\n    margin: 0 auto;\n    background-color: var(--deep-black);\n}\n\n.start-btn {\n    width: clamp(400px, 80%, 800px);\n    height: 20%;\n    margin: 100px 10% 0;\n    font-size: 8rem;\n    border-top: 5px solid white;\n    border-left: 5px solid white;\n    border-right: 5px solid gray;\n    border-bottom: 5px solid gray;\n    background-color: var(--race-orange);\n    color: var(--spaceship-white);\n}\n\n.start-btn:active {\n    border-top: 5px solid gray;\n    border-left: 5px solid gray;\n    border-right: 5px solid white;\n    border-bottom: 5px solid white;\n    background-color: rgb(252, 104, 6);\n}\n\n.game-mode-display {\n    margin: 0 10%;\n}\n\n.opponent-gallery {\n    margin: 0 10%;\n    padding: 30px 10px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly; \n}\n\n.opponent-card {\n    outline: 1px solid var(--tech-blue);\n    width: clamp(60px, 25%, 120%);\n    height: 200px;\n    margin: 0 20px 30px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.opponent-card:hover {\n    background-color: rgba(75, 74, 74, 0.829);\n}\n\n.opponent-card:active {\n    background-color: rgba(75, 74, 74, 1);\n}\n\n\n.game-panel {\n    width: clamp(860px, 80%, 1600px);\n    height: inherit;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: var(--deep-black);\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-panel-left {\n    width: clamp(350px, 42%, 650px);\n    height: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n}\n\n.player-fleet-display, .enemy-fleet-display {\n    margin-top: 18px;\n    padding: 2px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: flex-end;\n    gap: 6px;\n}\n\n.player-fleet-display > div, .enemy-fleet-display > div {\n    margin: 0 16px;\n    display: flex;\n}\n\n.ship-hull-block {\n    width: 22px;\n    height: 22px;\n    border-radius: 4px;\n    margin: 2px;\n    background-color: var(--spaceship-white);\n}\n\n.home-board, .targeting-board {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n    grid-template-rows: 1fr 10fr;\n}\n\n.home-board-number-coordinates, .targeting-board-number-coordinates {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-letter-coordinates, .targeting-board-letter-coordinates {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-blocks, .targeting-board-blocks {\n    border: 1px solid gray;\n    border-radius: 4px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 1px;\n}\n\n.board-block {\n    background-color: black;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-block:hover {\n    background-color: rgba(75, 74, 74, 0.829);\n}\n\n.board-block:active {\n    background-color: rgba(75, 74, 74, 1);\n}\n\n.board-block > div {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-block > div > div{\n    width: 50%;\n    height: 50%;\n    background-color: black;\n    border-radius: 50px;\n}\n\n.game-panel-right {\n    width: clamp(550px, 55%, 800px);\n    height: 100%;\n}\n\n.targeting-board {\n    height: 65%;\n}\n\n.controls-display {\n    height: 25%;\n    margin-top: 15px;\n    color: var(--race-orange);\n}\n\n.controls-display > div {\n    height: 85%;\n    border: 1px solid var(--race-orange);\n    padding: 8px;\n    font-size: 1.5rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,qCAAqC;IACrC,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,cAAc;IACd,mCAAmC;AACvC;;AAEA;IACI,+BAA+B;IAC/B,WAAW;IACX,mBAAmB;IACnB,eAAe;IACf,2BAA2B;IAC3B,4BAA4B;IAC5B,4BAA4B;IAC5B,6BAA6B;IAC7B,oCAAoC;IACpC,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,6BAA6B;IAC7B,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,wBAAwB;IACxB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,qCAAqC;AACzC;;;AAGA;IACI,gCAAgC;IAChC,eAAe;IACf,cAAc;IACd,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,QAAQ;AACZ;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,oCAAoC;IACpC,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":[":root {\n    --deep-black: rgb(28, 28, 33);\n    --spaceship-white: rgb(242, 247, 247);\n    --tech-blue: rgb(0, 188, 235);\n    --race-orange: rgb(252, 116, 25);\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 100%;\n    font-family: monospace;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    font-size: 2.5rem;\n    background-color: black;\n    color: var(--tech-blue);\n}\n\nimg {\n    width: 80px;\n    height: 80px;\n}\n\n.initial-background {\n    width: clamp(600px, 50%, 1200px);\n    height: inherit;\n    margin: 0 auto;\n    background-color: var(--deep-black);\n}\n\n.start-btn {\n    width: clamp(400px, 80%, 800px);\n    height: 20%;\n    margin: 100px 10% 0;\n    font-size: 8rem;\n    border-top: 5px solid white;\n    border-left: 5px solid white;\n    border-right: 5px solid gray;\n    border-bottom: 5px solid gray;\n    background-color: var(--race-orange);\n    color: var(--spaceship-white);\n}\n\n.start-btn:active {\n    border-top: 5px solid gray;\n    border-left: 5px solid gray;\n    border-right: 5px solid white;\n    border-bottom: 5px solid white;\n    background-color: rgb(252, 104, 6);\n}\n\n.game-mode-display {\n    margin: 0 10%;\n}\n\n.opponent-gallery {\n    margin: 0 10%;\n    padding: 30px 10px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly; \n}\n\n.opponent-card {\n    outline: 1px solid var(--tech-blue);\n    width: clamp(60px, 25%, 120%);\n    height: 200px;\n    margin: 0 20px 30px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.opponent-card:hover {\n    background-color: rgba(75, 74, 74, 0.829);\n}\n\n.opponent-card:active {\n    background-color: rgba(75, 74, 74, 1);\n}\n\n\n.game-panel {\n    width: clamp(860px, 80%, 1600px);\n    height: inherit;\n    margin: 0 auto;\n    padding: 20px;\n    background-color: var(--deep-black);\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-panel-left {\n    width: clamp(350px, 42%, 650px);\n    height: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n}\n\n.player-fleet-display, .enemy-fleet-display {\n    margin-top: 18px;\n    padding: 2px 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: flex-end;\n    gap: 6px;\n}\n\n.player-fleet-display > div, .enemy-fleet-display > div {\n    margin: 0 16px;\n    display: flex;\n}\n\n.ship-hull-block {\n    width: 22px;\n    height: 22px;\n    border-radius: 4px;\n    margin: 2px;\n    background-color: var(--spaceship-white);\n}\n\n.home-board, .targeting-board {\n    margin: 0 10%;\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n    grid-template-rows: 1fr 10fr;\n}\n\n.home-board-number-coordinates, .targeting-board-number-coordinates {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-letter-coordinates, .targeting-board-letter-coordinates {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.home-board-blocks, .targeting-board-blocks {\n    border: 1px solid gray;\n    border-radius: 4px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 1px;\n}\n\n.board-block {\n    background-color: black;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-block:hover {\n    background-color: rgba(75, 74, 74, 0.829);\n}\n\n.board-block:active {\n    background-color: rgba(75, 74, 74, 1);\n}\n\n.board-block > div {\n    width: 50%;\n    height: 50%;\n    background-color: white;\n    border-radius: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-block > div > div{\n    width: 50%;\n    height: 50%;\n    background-color: black;\n    border-radius: 50px;\n}\n\n.game-panel-right {\n    width: clamp(550px, 55%, 800px);\n    height: 100%;\n}\n\n.targeting-board {\n    height: 65%;\n}\n\n.controls-display {\n    height: 25%;\n    margin-top: 15px;\n    color: var(--race-orange);\n}\n\n.controls-display > div {\n    height: 85%;\n    border: 1px solid var(--race-orange);\n    padding: 8px;\n    font-size: 1.5rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/img/white-g.png":
/*!*****************************!*\
  !*** ./src/img/white-g.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56dbf17ae4ec5b5d786e.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_white_g_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/white-g.png */ "./src/img/white-g.png");
//import { Ship, Board, Player } from "./factory.js";
//import { checkWinner } from "./gamePlay.js";



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
    });
    initialBackground.appendChild(startBtn);

    const gameModeDisplay = document.createElement("p");
    gameModeDisplay.className = "game-mode-display";
    const gameMode = document.createElement("span");
    gameMode.className = "game-mode";
    gameModeDisplay.appendChild(gameMode);
    initialBackground.appendChild(gameModeDisplay);

    const opponentGallery = document.createElement("div");
    opponentGallery.className = "opponent-gallery";
    const gunnerCard = document.createElement("div");
    gunnerCard.className = "opponent-card";
    gunnerImg = document.createElement("img");
    gunnerImg.src = _img_white_g_png__WEBPACK_IMPORTED_MODULE_1__;
    gunnerName = document.createElement("p");
    gunnerName.textContent = "Gunner";
    gunnerDifficulty = document.createElement("p");
    gunnerDifficulty.textContent = "(Easy)";
    gunnerCard.appendChild(gunnerImg);
    gunnerCard.appendChild(gunnerName);
    gunnerCard.appendChild(gunnerDifficulty);
    opponentGallery.appendChild(gunnerCard);
    initialBackground.appendChild(opponentGallery);

    body.appendChild(initialBackground);
};

function renderFleetDisplay(fleetOwnerString, commanderString) {
    const fleetSection = document.createElement("div");
    const fleetPara = document.createElement("p");
    fleetPara.textContent = `${fleetOwnerString} fleet`.toUpperCase();
    const fleetDisplay = document.createElement("div");
    fleetDisplay.className = `${commanderString}-fleet-display`;
    for (let i = 0; i < 5; i++) {
        const shipNameArray = ["carrirer", "battleship", "cruiser", "submarine", "destroyer"];
        const shipHullCount = [5,4,3,3,2];
        const shipDiv = document.createElement("div");
        for (let j = 0; j < shipHullCount[i]; j++) {
            const shipBlock = document.createElement("div");
            shipBlock.className = `${commanderString}-${shipNameArray[i]}-${j + 1} ship-hull-block`;
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
            for (let j = 0; j < 100; j++) {
                const boardBlock = document.createElement("div");
                boardBlock.className = `${classString}`;
                div.appendChild(boardBlock);
            };
        };
        if (i > 0) {
            console.log("greater than 0");
            div.className = `${boardTypeString}-board-${classesArray[i]}`;
            if (i === 1) {
                console.log("i equals 1");
                createCoordinateDisplay("numbers");
            };
            if (i === 2) {
                console.log("i equals 2");
                createCoordinateDisplay("letters");
            };
            if (i === 3) {
                console.log("i equals 3");
                createBoardBlocks(boardItems.class);
            };
        };
        board.appendChild(div);
    };
    boardSection.appendChild(boardPara);
    boardSection.appendChild(board);
    return boardSection;
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

    
    const controlsDisplay = document.createElement("div");
    controlsDisplay.className = "controls-display";
    const controlsDisplayPara = document.createElement("p");
    controlsDisplayPara.textContent = "CONTROLS";
    const controlsDisplayDiv = document.createElement("div");
    const instructionsPara = document.createElement("p");
    instructionsPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores minima ad modi aliquid sapiente. Magnam repellat ad //placeat? Quo exercitationem assumenda aliquid non nostrum magnam praesentium minus, est error.";
    controlsDisplayDiv.appendChild(instructionsPara);
    controlsDisplay.appendChild(controlsDisplayPara);
    controlsDisplay.appendChild(controlsDisplayDiv);

    gamePanelRight.appendChild(renderBoard("targeting"));
    gamePanelRight.appendChild(controlsDisplay);
    gamePanel.appendChild(gamePanelRight);

    body.appendChild(gamePanel);
};

renderStartingPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9DQUFvQyw0Q0FBNEMsb0NBQW9DLHVDQUF1QyxHQUFHLDRCQUE0QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFVBQVUsc0JBQXNCLDZCQUE2QixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQix3QkFBd0IsOEJBQThCLDhCQUE4QixHQUFHLFNBQVMsa0JBQWtCLG1CQUFtQixHQUFHLHlCQUF5Qix1Q0FBdUMsc0JBQXNCLHFCQUFxQiwwQ0FBMEMsR0FBRyxnQkFBZ0Isc0NBQXNDLGtCQUFrQiwwQkFBMEIsc0JBQXNCLGtDQUFrQyxtQ0FBbUMsbUNBQW1DLG9DQUFvQywyQ0FBMkMsb0NBQW9DLEdBQUcsdUJBQXVCLGlDQUFpQyxrQ0FBa0Msb0NBQW9DLHFDQUFxQyx5Q0FBeUMsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsdUJBQXVCLG9CQUFvQiwyQkFBMkIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsR0FBRyxvQkFBb0IsMENBQTBDLG9DQUFvQyxvQkFBb0IsMEJBQTBCLG9CQUFvQiwrQkFBK0Isb0NBQW9DLDBCQUEwQixHQUFHLDBCQUEwQixnREFBZ0QsR0FBRywyQkFBMkIsNENBQTRDLEdBQUcsbUJBQW1CLHVDQUF1QyxzQkFBc0IscUJBQXFCLG9CQUFvQiwwQ0FBMEMsb0JBQW9CLHFDQUFxQyxHQUFHLHNCQUFzQixzQ0FBc0MsbUJBQW1CLG9CQUFvQiwrQkFBK0IscUNBQXFDLEdBQUcsaURBQWlELHVCQUF1QixxQkFBcUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsNEJBQTRCLGVBQWUsR0FBRyw2REFBNkQscUJBQXFCLG9CQUFvQixHQUFHLHNCQUFzQixrQkFBa0IsbUJBQW1CLHlCQUF5QixrQkFBa0IsK0NBQStDLEdBQUcsbUNBQW1DLG9CQUFvQixvQkFBb0Isc0NBQXNDLG1DQUFtQyxHQUFHLHlFQUF5RSxvQkFBb0IsNkNBQTZDLDRCQUE0QiwwQkFBMEIsR0FBRyx5RUFBeUUsb0JBQW9CLDBDQUEwQyw0QkFBNEIsMEJBQTBCLEdBQUcsaURBQWlELDZCQUE2Qix5QkFBeUIsb0JBQW9CLDZDQUE2QywwQ0FBMEMsZUFBZSxHQUFHLGtCQUFrQiw4QkFBOEIseUJBQXlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsd0JBQXdCLGdEQUFnRCxHQUFHLHlCQUF5Qiw0Q0FBNEMsR0FBRyx3QkFBd0IsaUJBQWlCLGtCQUFrQiw4QkFBOEIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsNkJBQTZCLGlCQUFpQixrQkFBa0IsOEJBQThCLDBCQUEwQixHQUFHLHVCQUF1QixzQ0FBc0MsbUJBQW1CLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLHVCQUF1QixrQkFBa0IsdUJBQXVCLGdDQUFnQyxHQUFHLDZCQUE2QixrQkFBa0IsMkNBQTJDLG1CQUFtQix3QkFBd0IsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxpQ0FBaUMsb0NBQW9DLDRDQUE0QyxvQ0FBb0MsdUNBQXVDLEdBQUcsNEJBQTRCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsVUFBVSxzQkFBc0IsNkJBQTZCLEdBQUcsVUFBVSxtQkFBbUIsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsOEJBQThCLEdBQUcsU0FBUyxrQkFBa0IsbUJBQW1CLEdBQUcseUJBQXlCLHVDQUF1QyxzQkFBc0IscUJBQXFCLDBDQUEwQyxHQUFHLGdCQUFnQixzQ0FBc0Msa0JBQWtCLDBCQUEwQixzQkFBc0Isa0NBQWtDLG1DQUFtQyxtQ0FBbUMsb0NBQW9DLDJDQUEyQyxvQ0FBb0MsR0FBRyx1QkFBdUIsaUNBQWlDLGtDQUFrQyxvQ0FBb0MscUNBQXFDLHlDQUF5QyxHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLDJCQUEyQixvQkFBb0IsMEJBQTBCLHFDQUFxQyxHQUFHLG9CQUFvQiwwQ0FBMEMsb0NBQW9DLG9CQUFvQiwwQkFBMEIsb0JBQW9CLCtCQUErQixvQ0FBb0MsMEJBQTBCLEdBQUcsMEJBQTBCLGdEQUFnRCxHQUFHLDJCQUEyQiw0Q0FBNEMsR0FBRyxtQkFBbUIsdUNBQXVDLHNCQUFzQixxQkFBcUIsb0JBQW9CLDBDQUEwQyxvQkFBb0IscUNBQXFDLEdBQUcsc0JBQXNCLHNDQUFzQyxtQkFBbUIsb0JBQW9CLCtCQUErQixxQ0FBcUMsR0FBRyxpREFBaUQsdUJBQXVCLHFCQUFxQixvQkFBb0IsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsZUFBZSxHQUFHLDZEQUE2RCxxQkFBcUIsb0JBQW9CLEdBQUcsc0JBQXNCLGtCQUFrQixtQkFBbUIseUJBQXlCLGtCQUFrQiwrQ0FBK0MsR0FBRyxtQ0FBbUMsb0JBQW9CLG9CQUFvQixzQ0FBc0MsbUNBQW1DLEdBQUcseUVBQXlFLG9CQUFvQiw2Q0FBNkMsNEJBQTRCLDBCQUEwQixHQUFHLHlFQUF5RSxvQkFBb0IsMENBQTBDLDRCQUE0QiwwQkFBMEIsR0FBRyxpREFBaUQsNkJBQTZCLHlCQUF5QixvQkFBb0IsNkNBQTZDLDBDQUEwQyxlQUFlLEdBQUcsa0JBQWtCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyx3QkFBd0IsZ0RBQWdELEdBQUcseUJBQXlCLDRDQUE0QyxHQUFHLHdCQUF3QixpQkFBaUIsa0JBQWtCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyw2QkFBNkIsaUJBQWlCLGtCQUFrQiw4QkFBOEIsMEJBQTBCLEdBQUcsdUJBQXVCLHNDQUFzQyxtQkFBbUIsR0FBRyxzQkFBc0Isa0JBQWtCLEdBQUcsdUJBQXVCLGtCQUFrQix1QkFBdUIsZ0NBQWdDLEdBQUcsNkJBQTZCLGtCQUFrQiwyQ0FBMkMsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQjtBQUMxa1Y7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZkEsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxjQUFjO0FBQ0o7QUFDa0I7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRCxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0EscUNBQXFDLGdCQUFnQixHQUFHLGlCQUFpQixHQUFHLE9BQU87QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQSwrQ0FBK0MseUJBQXlCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckM7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQixTQUFTLGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1kZWVwLWJsYWNrOiByZ2IoMjgsIDI4LCAzMyk7XFxuICAgIC0tc3BhY2VzaGlwLXdoaXRlOiByZ2IoMjQyLCAyNDcsIDI0Nyk7XFxuICAgIC0tdGVjaC1ibHVlOiByZ2IoMCwgMTg4LCAyMzUpO1xcbiAgICAtLXJhY2Utb3JhbmdlOiByZ2IoMjUyLCAxMTYsIDI1KTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tdGVjaC1ibHVlKTtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmluaXRpYWwtYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiBjbGFtcCg2MDBweCwgNTAlLCAxMjAwcHgpO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLWJsYWNrKTtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxuICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgODAlLCA4MDBweCk7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBtYXJnaW46IDEwMHB4IDEwJSAwO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5zdGFydC1idG46YWN0aXZlIHtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMTA0LCA2KTtcXG59XFxuXFxuLmdhbWUtbW9kZS1kaXNwbGF5IHtcXG4gICAgbWFyZ2luOiAwIDEwJTtcXG59XFxuXFxuLm9wcG9uZW50LWdhbGxlcnkge1xcbiAgICBtYXJnaW46IDAgMTAlO1xcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxcbn1cXG5cXG4ub3Bwb25lbnQtY2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS10ZWNoLWJsdWUpO1xcbiAgICB3aWR0aDogY2xhbXAoNjBweCwgMjUlLCAxMjAlKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luOiAwIDIwcHggMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wcG9uZW50LWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDAuODI5KTtcXG59XFxuXFxuLm9wcG9uZW50LWNhcmQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzQsIDc0LCAxKTtcXG59XFxuXFxuXFxuLmdhbWUtcGFuZWwge1xcbiAgICB3aWR0aDogY2xhbXAoODYwcHgsIDgwJSwgMTYwMHB4KTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWUtcGFuZWwtbGVmdCB7XFxuICAgIHdpZHRoOiBjbGFtcCgzNTBweCwgNDIlLCA2NTBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wbGF5ZXItZmxlZXQtZGlzcGxheSwgLmVuZW15LWZsZWV0LWRpc3BsYXkge1xcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5wbGF5ZXItZmxlZXQtZGlzcGxheSA+IGRpdiwgLmVuZW15LWZsZWV0LWRpc3BsYXkgPiBkaXYge1xcbiAgICBtYXJnaW46IDAgMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXAtaHVsbC1ibG9jayB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5ob21lLWJvYXJkLCAudGFyZ2V0aW5nLWJvYXJkIHtcXG4gICAgbWFyZ2luOiAwIDEwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG59XFxuXFxuLmhvbWUtYm9hcmQtbnVtYmVyLWNvb3JkaW5hdGVzLCAudGFyZ2V0aW5nLWJvYXJkLW51bWJlci1jb29yZGluYXRlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJvYXJkLWxldHRlci1jb29yZGluYXRlcywgLnRhcmdldGluZy1ib2FyZC1sZXR0ZXItY29vcmRpbmF0ZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1ib2FyZC1ibG9ja3MsIC50YXJnZXRpbmctYm9hcmQtYmxvY2tzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4uYm9hcmQtYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWJsb2NrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzQsIDc0LCAwLjgyOSk7XFxufVxcblxcbi5ib2FyZC1ibG9jazphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDEpO1xcbn1cXG5cXG4uYm9hcmQtYmxvY2sgPiBkaXYge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtYmxvY2sgPiBkaXYgPiBkaXZ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmdhbWUtcGFuZWwtcmlnaHQge1xcbiAgICB3aWR0aDogY2xhbXAoNTUwcHgsIDU1JSwgODAwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXJnZXRpbmctYm9hcmQge1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxuLmNvbnRyb2xzLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXJhY2Utb3JhbmdlKTtcXG59XFxuXFxuLmNvbnRyb2xzLWRpc3BsYXkgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZGVlcC1ibGFjazogcmdiKDI4LCAyOCwgMzMpO1xcbiAgICAtLXNwYWNlc2hpcC13aGl0ZTogcmdiKDI0MiwgMjQ3LCAyNDcpO1xcbiAgICAtLXRlY2gtYmx1ZTogcmdiKDAsIDE4OCwgMjM1KTtcXG4gICAgLS1yYWNlLW9yYW5nZTogcmdiKDI1MiwgMTE2LCAyNSk7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXRlY2gtYmx1ZSk7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5pbml0aWFsLWJhY2tncm91bmQge1xcbiAgICB3aWR0aDogY2xhbXAoNjAwcHgsIDUwJSwgMTIwMHB4KTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1ibGFjayk7XFxufVxcblxcbi5zdGFydC1idG4ge1xcbiAgICB3aWR0aDogY2xhbXAoNDAwcHgsIDgwJSwgODAwcHgpO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgbWFyZ2luOiAxMDBweCAxMCUgMDtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBncmF5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1zcGFjZXNoaXAtd2hpdGUpO1xcbn1cXG5cXG4uc3RhcnQtYnRuOmFjdGl2ZSB7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDEwNCwgNik7XFxufVxcblxcbi5nYW1lLW1vZGUtZGlzcGxheSB7XFxuICAgIG1hcmdpbjogMCAxMCU7XFxufVxcblxcbi5vcHBvbmVudC1nYWxsZXJ5IHtcXG4gICAgbWFyZ2luOiAwIDEwJTtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBcXG59XFxuXFxuLm9wcG9uZW50LWNhcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdGVjaC1ibHVlKTtcXG4gICAgd2lkdGg6IGNsYW1wKDYwcHgsIDI1JSwgMTIwJSk7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG1hcmdpbjogMCAyMHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5vcHBvbmVudC1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzQsIDc0LCAwLjgyOSk7XFxufVxcblxcbi5vcHBvbmVudC1jYXJkOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc0LCA3NCwgMSk7XFxufVxcblxcblxcbi5nYW1lLXBhbmVsIHtcXG4gICAgd2lkdGg6IGNsYW1wKDg2MHB4LCA4MCUsIDE2MDBweCk7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtYmxhY2spO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5nYW1lLXBhbmVsLWxlZnQge1xcbiAgICB3aWR0aDogY2xhbXAoMzUwcHgsIDQyJSwgNjUwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucGxheWVyLWZsZWV0LWRpc3BsYXksIC5lbmVteS1mbGVldC1kaXNwbGF5IHtcXG4gICAgbWFyZ2luLXRvcDogMThweDtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4ucGxheWVyLWZsZWV0LWRpc3BsYXkgPiBkaXYsIC5lbmVteS1mbGVldC1kaXNwbGF5ID4gZGl2IHtcXG4gICAgbWFyZ2luOiAwIDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaGlwLWh1bGwtYmxvY2sge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zcGFjZXNoaXAtd2hpdGUpO1xcbn1cXG5cXG4uaG9tZS1ib2FyZCwgLnRhcmdldGluZy1ib2FyZCB7XFxuICAgIG1hcmdpbjogMCAxMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxufVxcblxcbi5ob21lLWJvYXJkLW51bWJlci1jb29yZGluYXRlcywgLnRhcmdldGluZy1ib2FyZC1udW1iZXItY29vcmRpbmF0ZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1ib2FyZC1sZXR0ZXItY29vcmRpbmF0ZXMsIC50YXJnZXRpbmctYm9hcmQtbGV0dGVyLWNvb3JkaW5hdGVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYm9hcmQtYmxvY2tzLCAudGFyZ2V0aW5nLWJvYXJkLWJsb2NrcyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLmJvYXJkLWJsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1ibG9jazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc0LCA3NCwgMC44MjkpO1xcbn1cXG5cXG4uYm9hcmQtYmxvY2s6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzQsIDc0LCAxKTtcXG59XFxuXFxuLmJvYXJkLWJsb2NrID4gZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWJsb2NrID4gZGl2ID4gZGl2e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5nYW1lLXBhbmVsLXJpZ2h0IHtcXG4gICAgd2lkdGg6IGNsYW1wKDU1MHB4LCA1NSUsIDgwMHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFyZ2V0aW5nLWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbi5jb250cm9scy1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1yYWNlLW9yYW5nZSk7XFxufVxcblxcbi5jb250cm9scy1kaXNwbGF5ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vaW1wb3J0IHsgU2hpcCwgQm9hcmQsIFBsYXllciB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbi8vaW1wb3J0IHsgY2hlY2tXaW5uZXIgfSBmcm9tIFwiLi9nYW1lUGxheS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB3aGl0ZUcgZnJvbSBcIi4vaW1nL3doaXRlLWcucG5nXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCA9IGJvZHkpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVuZGVyU3RhcnRpbmdQYWdlKCkge1xuICAgIGNvbnN0IGluaXRpYWxCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbml0aWFsQmFja2dyb3VuZC5jbGFzc05hbWUgPSBcImluaXRpYWwtYmFja2dyb3VuZFwiO1xuXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN0YXJ0QnRuLmNsYXNzTmFtZSA9IFwic3RhcnQtYnRuXCI7XG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlNUQVJUXCI7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJFbGVtZW50KCk7XG4gICAgICAgIHJlbmRlckdhbWVQYW5lbCgpO1xuICAgIH0pO1xuICAgIGluaXRpYWxCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcblxuICAgIGNvbnN0IGdhbWVNb2RlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGdhbWVNb2RlRGlzcGxheS5jbGFzc05hbWUgPSBcImdhbWUtbW9kZS1kaXNwbGF5XCI7XG4gICAgY29uc3QgZ2FtZU1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBnYW1lTW9kZS5jbGFzc05hbWUgPSBcImdhbWUtbW9kZVwiO1xuICAgIGdhbWVNb2RlRGlzcGxheS5hcHBlbmRDaGlsZChnYW1lTW9kZSk7XG4gICAgaW5pdGlhbEJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZ2FtZU1vZGVEaXNwbGF5KTtcblxuICAgIGNvbnN0IG9wcG9uZW50R2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3Bwb25lbnRHYWxsZXJ5LmNsYXNzTmFtZSA9IFwib3Bwb25lbnQtZ2FsbGVyeVwiO1xuICAgIGNvbnN0IGd1bm5lckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGd1bm5lckNhcmQuY2xhc3NOYW1lID0gXCJvcHBvbmVudC1jYXJkXCI7XG4gICAgZ3VubmVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBndW5uZXJJbWcuc3JjID0gd2hpdGVHO1xuICAgIGd1bm5lck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBndW5uZXJOYW1lLnRleHRDb250ZW50ID0gXCJHdW5uZXJcIjtcbiAgICBndW5uZXJEaWZmaWN1bHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZ3VubmVyRGlmZmljdWx0eS50ZXh0Q29udGVudCA9IFwiKEVhc3kpXCI7XG4gICAgZ3VubmVyQ2FyZC5hcHBlbmRDaGlsZChndW5uZXJJbWcpO1xuICAgIGd1bm5lckNhcmQuYXBwZW5kQ2hpbGQoZ3VubmVyTmFtZSk7XG4gICAgZ3VubmVyQ2FyZC5hcHBlbmRDaGlsZChndW5uZXJEaWZmaWN1bHR5KTtcbiAgICBvcHBvbmVudEdhbGxlcnkuYXBwZW5kQ2hpbGQoZ3VubmVyQ2FyZCk7XG4gICAgaW5pdGlhbEJhY2tncm91bmQuYXBwZW5kQ2hpbGQob3Bwb25lbnRHYWxsZXJ5KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhbEJhY2tncm91bmQpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyRmxlZXREaXNwbGF5KGZsZWV0T3duZXJTdHJpbmcsIGNvbW1hbmRlclN0cmluZykge1xuICAgIGNvbnN0IGZsZWV0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZmxlZXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmxlZXRQYXJhLnRleHRDb250ZW50ID0gYCR7ZmxlZXRPd25lclN0cmluZ30gZmxlZXRgLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgZmxlZXREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmbGVldERpc3BsYXkuY2xhc3NOYW1lID0gYCR7Y29tbWFuZGVyU3RyaW5nfS1mbGVldC1kaXNwbGF5YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBzaGlwTmFtZUFycmF5ID0gW1wiY2FycmlyZXJcIiwgXCJiYXR0bGVzaGlwXCIsIFwiY3J1aXNlclwiLCBcInN1Ym1hcmluZVwiLCBcImRlc3Ryb3llclwiXTtcbiAgICAgICAgY29uc3Qgc2hpcEh1bGxDb3VudCA9IFs1LDQsMywzLDJdO1xuICAgICAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwSHVsbENvdW50W2ldOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzaGlwQmxvY2suY2xhc3NOYW1lID0gYCR7Y29tbWFuZGVyU3RyaW5nfS0ke3NoaXBOYW1lQXJyYXlbaV19LSR7aiArIDF9IHNoaXAtaHVsbC1ibG9ja2A7XG4gICAgICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgICAgIH07XG4gICAgICAgIGZsZWV0RGlzcGxheS5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICB9O1xuICAgIGZsZWV0U2VjdGlvbi5hcHBlbmRDaGlsZChmbGVldFBhcmEpO1xuICAgIGZsZWV0U2VjdGlvbi5hcHBlbmRDaGlsZChmbGVldERpc3BsYXkpO1xuICAgIHJldHVybiBmbGVldFNlY3Rpb247XG59O1xuXG5mdW5jdGlvbiByZW5kZXJCb2FyZChib2FyZFR5cGVTdHJpbmcpIHtcbiAgICBjb25zdCBib2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvYXJkUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJvYXJkUGFyYS50ZXh0Q29udGVudCA9IGAke2JvYXJkVHlwZVN0cmluZ30gYm9hcmRgLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLmNsYXNzTmFtZSA9IGAke2JvYXJkVHlwZVN0cmluZ30tYm9hcmRgO1xuICAgIGNvbnN0IGNsYXNzZXNBcnJheSA9IFtudWxsLFwibnVtYmVyLWNvb3JkaW5hdGVzXCIsXCJsZXR0ZXItY29vcmRpbmF0ZXNcIixcImJsb2Nrc1wiXTtcbiAgICBjb25zdCBib2FyZEl0ZW1zID0ge1xuICAgICAgICBudW1iZXJzOiBbMSwyLDMsNCw1LDYsNyw4LDksMTBdLFxuICAgICAgICBsZXR0ZXJzOiBbXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCJdLFxuICAgICAgICBjbGFzczogXCJib2FyZC1ibG9ja1wiXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVDb29yZGluYXRlRGlzcGxheShib2FyZEl0ZW0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVEaXYudGV4dENvbnRlbnQgPSBgJHtib2FyZEl0ZW1zW2JvYXJkSXRlbV1bal19YDtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29vcmRpbmF0ZURpdik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZEJsb2NrcyhjbGFzc1N0cmluZykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGJvYXJkQmxvY2suY2xhc3NOYW1lID0gYCR7Y2xhc3NTdHJpbmd9YDtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYm9hcmRCbG9jayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ3JlYXRlciB0aGFuIDBcIik7XG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gYCR7Ym9hcmRUeXBlU3RyaW5nfS1ib2FyZC0ke2NsYXNzZXNBcnJheVtpXX1gO1xuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImkgZXF1YWxzIDFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29vcmRpbmF0ZURpc3BsYXkoXCJudW1iZXJzXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpIGVxdWFscyAyXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNvb3JkaW5hdGVEaXNwbGF5KFwibGV0dGVyc1wiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaSA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaSBlcXVhbHMgM1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCb2FyZEJsb2Nrcyhib2FyZEl0ZW1zLmNsYXNzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfTtcbiAgICBib2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmRQYXJhKTtcbiAgICBib2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgIHJldHVybiBib2FyZFNlY3Rpb247XG59O1xuXG5mdW5jdGlvbiByZW5kZXJHYW1lUGFuZWwoKSB7XG4gICAgY29uc3QgZ2FtZVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lUGFuZWwuY2xhc3NOYW1lID0gXCJnYW1lLXBhbmVsXCI7XG5cbiAgICBjb25zdCBnYW1lUGFuZWxMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lUGFuZWxMZWZ0LmNsYXNzTmFtZSA9IFwiZ2FtZS1wYW5lbC1sZWZ0XCI7XG5cbiAgICBnYW1lUGFuZWxMZWZ0LmFwcGVuZENoaWxkKHJlbmRlckZsZWV0RGlzcGxheShcInlvdXJcIiwgXCJwbGF5ZXJcIikpO1xuICAgIGdhbWVQYW5lbExlZnQuYXBwZW5kQ2hpbGQocmVuZGVyRmxlZXREaXNwbGF5KFwiZW5lbXlcIiwgXCJlbmVteVwiKSk7XG4gICAgZ2FtZVBhbmVsTGVmdC5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZChcImhvbWVcIikpO1xuXG4gICAgZ2FtZVBhbmVsLmFwcGVuZENoaWxkKGdhbWVQYW5lbExlZnQpO1xuXG4gICAgY29uc3QgZ2FtZVBhbmVsUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVQYW5lbFJpZ2h0LmNsYXNzTmFtZSA9IFwiZ2FtZS1wYW5lbC1yaWdodFwiO1xuXG4gICAgXG4gICAgY29uc3QgY29udHJvbHNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250cm9sc0Rpc3BsYXkuY2xhc3NOYW1lID0gXCJjb250cm9scy1kaXNwbGF5XCI7XG4gICAgY29uc3QgY29udHJvbHNEaXNwbGF5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRyb2xzRGlzcGxheVBhcmEudGV4dENvbnRlbnQgPSBcIkNPTlRST0xTXCI7XG4gICAgY29uc3QgY29udHJvbHNEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaW5zdHJ1Y3Rpb25zUGFyYS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVmVsIGFzcGVyaW9yZXMgbWluaW1hIGFkIG1vZGkgYWxpcXVpZCBzYXBpZW50ZS4gTWFnbmFtIHJlcGVsbGF0IGFkIC8vcGxhY2VhdD8gUXVvIGV4ZXJjaXRhdGlvbmVtIGFzc3VtZW5kYSBhbGlxdWlkIG5vbiBub3N0cnVtIG1hZ25hbSBwcmFlc2VudGl1bSBtaW51cywgZXN0IGVycm9yLlwiO1xuICAgIGNvbnRyb2xzRGlzcGxheURpdi5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnNQYXJhKTtcbiAgICBjb250cm9sc0Rpc3BsYXkuYXBwZW5kQ2hpbGQoY29udHJvbHNEaXNwbGF5UGFyYSk7XG4gICAgY29udHJvbHNEaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRyb2xzRGlzcGxheURpdik7XG5cbiAgICBnYW1lUGFuZWxSaWdodC5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZChcInRhcmdldGluZ1wiKSk7XG4gICAgZ2FtZVBhbmVsUmlnaHQuYXBwZW5kQ2hpbGQoY29udHJvbHNEaXNwbGF5KTtcbiAgICBnYW1lUGFuZWwuYXBwZW5kQ2hpbGQoZ2FtZVBhbmVsUmlnaHQpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChnYW1lUGFuZWwpO1xufTtcblxucmVuZGVyU3RhcnRpbmdQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9