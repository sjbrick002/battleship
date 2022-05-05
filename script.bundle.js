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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_white_g_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/white-g.png */ "./src/img/white-g.png");
/* harmony import */ var _sounds_391840_vabsounds_space_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds/391840__vabsounds__space.wav */ "./src/sounds/391840__vabsounds__space.wav");
//import { Ship, Board, Player } from "./factory.js";
//import { checkWinner } from "./gamePlay.js";




const gameMusic = document.createElement("audio");
gameMusic.src = _sounds_391840_vabsounds_space_wav__WEBPACK_IMPORTED_MODULE_2__;
gameMusic.setAttribute("loop", "");

window.addEventListener("keydown", function(e){
    console.log(e);
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
    const gunnerImg = document.createElement("img");
    gunnerImg.src = _img_white_g_png__WEBPACK_IMPORTED_MODULE_1__;
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
            div.className = `${boardTypeString}-board-${classesArray[i]}`;
            if (i === 1) {
                createCoordinateDisplay("numbers");
            };
            if (i === 2) {
                createCoordinateDisplay("letters");
            };
            if (i === 3) {
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

/***/ }),

/***/ "./src/img/white-g.png":
/*!*****************************!*\
  !*** ./src/img/white-g.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56dbf17ae4ec5b5d786e.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5QztBQUNBLHFDQUFxQyxnQkFBZ0IsR0FBRyxpQkFBaUIsR0FBRyxPQUFPO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0EsK0NBQStDLHlCQUF5QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCLFNBQVMsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWRlZXAtYmxhY2s6IHJnYigyOCwgMjgsIDMzKTtcXG4gICAgLS1zcGFjZXNoaXAtd2hpdGU6IHJnYigyNDIsIDI0NywgMjQ3KTtcXG4gICAgLS10ZWNoLWJsdWU6IHJnYigwLCAxODgsIDIzNSk7XFxuICAgIC0tcmFjZS1vcmFuZ2U6IHJnYigyNTIsIDExNiwgMjUpO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWNoLWJsdWUpO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaW5pdGlhbC1iYWNrZ3JvdW5kIHtcXG4gICAgd2lkdGg6IGNsYW1wKDYwMHB4LCA1MCUsIDEyMDBweCk7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtYmxhY2spO1xcbn1cXG5cXG4uc3RhcnQtYnRuIHtcXG4gICAgd2lkdGg6IGNsYW1wKDQwMHB4LCA4MCUsIDgwMHB4KTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIG1hcmdpbjogMTAwcHggMTAlIDA7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgZ3JheTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbiAgICBjb2xvcjogdmFyKC0tc3BhY2VzaGlwLXdoaXRlKTtcXG59XFxuXFxuLnN0YXJ0LWJ0bjphY3RpdmUge1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxMDQsIDYpO1xcbn1cXG5cXG4uZ2FtZS1tb2RlLWRpc3BsYXkge1xcbiAgICBtYXJnaW46IDAgMTAlO1xcbn1cXG5cXG4ub3Bwb25lbnQtZ2FsbGVyeSB7XFxuICAgIG1hcmdpbjogMCAxMCU7XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgXFxufVxcblxcbi5vcHBvbmVudC1jYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXRlY2gtYmx1ZSk7XFxuICAgIHdpZHRoOiBjbGFtcCg2MHB4LCAyNSUsIDEyMCUpO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IDAgMjBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3Bwb25lbnQtY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc0LCA3NCwgMC44MjkpO1xcbn1cXG5cXG4ub3Bwb25lbnQtY2FyZDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDEpO1xcbn1cXG5cXG5cXG4uZ2FtZS1wYW5lbCB7XFxuICAgIHdpZHRoOiBjbGFtcCg4NjBweCwgODAlLCAxNjAwcHgpO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLWJsYWNrKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZS1wYW5lbC1sZWZ0IHtcXG4gICAgd2lkdGg6IGNsYW1wKDM1MHB4LCA0MiUsIDY1MHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBsYXllci1mbGVldC1kaXNwbGF5LCAuZW5lbXktZmxlZXQtZGlzcGxheSB7XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLnBsYXllci1mbGVldC1kaXNwbGF5ID4gZGl2LCAuZW5lbXktZmxlZXQtZGlzcGxheSA+IGRpdiB7XFxuICAgIG1hcmdpbjogMCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hpcC1odWxsLWJsb2NrIHtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BhY2VzaGlwLXdoaXRlKTtcXG59XFxuXFxuLmhvbWUtYm9hcmQsIC50YXJnZXRpbmctYm9hcmQge1xcbiAgICBtYXJnaW46IDAgMTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbn1cXG5cXG4uaG9tZS1ib2FyZC1udW1iZXItY29vcmRpbmF0ZXMsIC50YXJnZXRpbmctYm9hcmQtbnVtYmVyLWNvb3JkaW5hdGVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYm9hcmQtbGV0dGVyLWNvb3JkaW5hdGVzLCAudGFyZ2V0aW5nLWJvYXJkLWxldHRlci1jb29yZGluYXRlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJvYXJkLWJsb2NrcywgLnRhcmdldGluZy1ib2FyZC1ibG9ja3Mge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5ib2FyZC1ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtYmxvY2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDAuODI5KTtcXG59XFxuXFxuLmJvYXJkLWJsb2NrOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc0LCA3NCwgMSk7XFxufVxcblxcbi5ib2FyZC1ibG9jayA+IGRpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1ibG9jayA+IGRpdiA+IGRpdntcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uZ2FtZS1wYW5lbC1yaWdodCB7XFxuICAgIHdpZHRoOiBjbGFtcCg1NTBweCwgNTUlLCA4MDBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhcmdldGluZy1ib2FyZCB7XFxuICAgIGhlaWdodDogNjUlO1xcbn1cXG5cXG4uY29udHJvbHMtZGlzcGxheSB7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbn1cXG5cXG4uY29udHJvbHMtZGlzcGxheSA+IGRpdiB7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yYWNlLW9yYW5nZSk7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOzs7QUFHQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kZWVwLWJsYWNrOiByZ2IoMjgsIDI4LCAzMyk7XFxuICAgIC0tc3BhY2VzaGlwLXdoaXRlOiByZ2IoMjQyLCAyNDcsIDI0Nyk7XFxuICAgIC0tdGVjaC1ibHVlOiByZ2IoMCwgMTg4LCAyMzUpO1xcbiAgICAtLXJhY2Utb3JhbmdlOiByZ2IoMjUyLCAxMTYsIDI1KTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tdGVjaC1ibHVlKTtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmluaXRpYWwtYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiBjbGFtcCg2MDBweCwgNTAlLCAxMjAwcHgpO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLWJsYWNrKTtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxuICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgODAlLCA4MDBweCk7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBtYXJnaW46IDEwMHB4IDEwJSAwO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhY2Utb3JhbmdlKTtcXG4gICAgY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5zdGFydC1idG46YWN0aXZlIHtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMTA0LCA2KTtcXG59XFxuXFxuLmdhbWUtbW9kZS1kaXNwbGF5IHtcXG4gICAgbWFyZ2luOiAwIDEwJTtcXG59XFxuXFxuLm9wcG9uZW50LWdhbGxlcnkge1xcbiAgICBtYXJnaW46IDAgMTAlO1xcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxcbn1cXG5cXG4ub3Bwb25lbnQtY2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS10ZWNoLWJsdWUpO1xcbiAgICB3aWR0aDogY2xhbXAoNjBweCwgMjUlLCAxMjAlKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luOiAwIDIwcHggMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wcG9uZW50LWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDAuODI5KTtcXG59XFxuXFxuLm9wcG9uZW50LWNhcmQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzQsIDc0LCAxKTtcXG59XFxuXFxuXFxuLmdhbWUtcGFuZWwge1xcbiAgICB3aWR0aDogY2xhbXAoODYwcHgsIDgwJSwgMTYwMHB4KTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1ibGFjayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWUtcGFuZWwtbGVmdCB7XFxuICAgIHdpZHRoOiBjbGFtcCgzNTBweCwgNDIlLCA2NTBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wbGF5ZXItZmxlZXQtZGlzcGxheSwgLmVuZW15LWZsZWV0LWRpc3BsYXkge1xcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5wbGF5ZXItZmxlZXQtZGlzcGxheSA+IGRpdiwgLmVuZW15LWZsZWV0LWRpc3BsYXkgPiBkaXYge1xcbiAgICBtYXJnaW46IDAgMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXAtaHVsbC1ibG9jayB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwYWNlc2hpcC13aGl0ZSk7XFxufVxcblxcbi5ob21lLWJvYXJkLCAudGFyZ2V0aW5nLWJvYXJkIHtcXG4gICAgbWFyZ2luOiAwIDEwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG59XFxuXFxuLmhvbWUtYm9hcmQtbnVtYmVyLWNvb3JkaW5hdGVzLCAudGFyZ2V0aW5nLWJvYXJkLW51bWJlci1jb29yZGluYXRlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWJvYXJkLWxldHRlci1jb29yZGluYXRlcywgLnRhcmdldGluZy1ib2FyZC1sZXR0ZXItY29vcmRpbmF0ZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1ib2FyZC1ibG9ja3MsIC50YXJnZXRpbmctYm9hcmQtYmxvY2tzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG4uYm9hcmQtYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWJsb2NrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgNzQsIDc0LCAwLjgyOSk7XFxufVxcblxcbi5ib2FyZC1ibG9jazphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCA3NCwgNzQsIDEpO1xcbn1cXG5cXG4uYm9hcmQtYmxvY2sgPiBkaXYge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtYmxvY2sgPiBkaXYgPiBkaXZ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmdhbWUtcGFuZWwtcmlnaHQge1xcbiAgICB3aWR0aDogY2xhbXAoNTUwcHgsIDU1JSwgODAwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXJnZXRpbmctYm9hcmQge1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxuLmNvbnRyb2xzLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXJhY2Utb3JhbmdlKTtcXG59XFxuXFxuLmNvbnRyb2xzLWRpc3BsYXkgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmFjZS1vcmFuZ2UpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vaW1wb3J0IHsgU2hpcCwgQm9hcmQsIFBsYXllciB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbi8vaW1wb3J0IHsgY2hlY2tXaW5uZXIgfSBmcm9tIFwiLi9nYW1lUGxheS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB3aGl0ZUcgZnJvbSBcIi4vaW1nL3doaXRlLWcucG5nXCI7XG5pbXBvcnQgc3BhY2VNdXNpYyBmcm9tIFwiLi9zb3VuZHMvMzkxODQwX192YWJzb3VuZHNfX3NwYWNlLndhdlwiO1xuXG5jb25zdCBnYW1lTXVzaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG5nYW1lTXVzaWMuc3JjID0gc3BhY2VNdXNpYztcbmdhbWVNdXNpYy5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwiXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSl7XG4gICAgY29uc29sZS5sb2coZSk7XG59KTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50ID0gYm9keSkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiByZW5kZXJTdGFydGluZ1BhZ2UoKSB7XG4gICAgY29uc3QgaW5pdGlhbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluaXRpYWxCYWNrZ3JvdW5kLmNsYXNzTmFtZSA9IFwiaW5pdGlhbC1iYWNrZ3JvdW5kXCI7XG5cbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRCdG4uY2xhc3NOYW1lID0gXCJzdGFydC1idG5cIjtcbiAgICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiU1RBUlRcIjtcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjbGVhckVsZW1lbnQoKTtcbiAgICAgICAgcmVuZGVyR2FtZVBhbmVsKCk7XG4gICAgfSk7XG4gICAgaW5pdGlhbEJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gICAgY29uc3QgZ2FtZU1vZGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZ2FtZU1vZGVEaXNwbGF5LmNsYXNzTmFtZSA9IFwiZ2FtZS1tb2RlLWRpc3BsYXlcIjtcbiAgICBjb25zdCBnYW1lTW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGdhbWVNb2RlLmNsYXNzTmFtZSA9IFwiZ2FtZS1tb2RlXCI7XG4gICAgZ2FtZU1vZGVEaXNwbGF5LmFwcGVuZENoaWxkKGdhbWVNb2RlKTtcbiAgICBpbml0aWFsQmFja2dyb3VuZC5hcHBlbmRDaGlsZChnYW1lTW9kZURpc3BsYXkpO1xuXG4gICAgY29uc3Qgb3Bwb25lbnRHYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcHBvbmVudEdhbGxlcnkuY2xhc3NOYW1lID0gXCJvcHBvbmVudC1nYWxsZXJ5XCI7XG4gICAgY29uc3QgZ3VubmVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3VubmVyQ2FyZC5jbGFzc05hbWUgPSBcIm9wcG9uZW50LWNhcmRcIjtcbiAgICBjb25zdCBndW5uZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGd1bm5lckltZy5zcmMgPSB3aGl0ZUc7XG4gICAgY29uc3QgZ3VubmVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGd1bm5lck5hbWUudGV4dENvbnRlbnQgPSBcIkd1bm5lclwiO1xuICAgIGNvbnN0IGd1bm5lckRpZmZpY3VsdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBndW5uZXJEaWZmaWN1bHR5LnRleHRDb250ZW50ID0gXCIoRWFzeSlcIjtcbiAgICBndW5uZXJDYXJkLmFwcGVuZENoaWxkKGd1bm5lckltZyk7XG4gICAgZ3VubmVyQ2FyZC5hcHBlbmRDaGlsZChndW5uZXJOYW1lKTtcbiAgICBndW5uZXJDYXJkLmFwcGVuZENoaWxkKGd1bm5lckRpZmZpY3VsdHkpO1xuICAgIG9wcG9uZW50R2FsbGVyeS5hcHBlbmRDaGlsZChndW5uZXJDYXJkKTtcbiAgICBpbml0aWFsQmFja2dyb3VuZC5hcHBlbmRDaGlsZChvcHBvbmVudEdhbGxlcnkpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChpbml0aWFsQmFja2dyb3VuZCk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJGbGVldERpc3BsYXkoZmxlZXRPd25lclN0cmluZywgY29tbWFuZGVyU3RyaW5nKSB7XG4gICAgY29uc3QgZmxlZXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmbGVldFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmbGVldFBhcmEudGV4dENvbnRlbnQgPSBgJHtmbGVldE93bmVyU3RyaW5nfSBmbGVldGAudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBmbGVldERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZsZWV0RGlzcGxheS5jbGFzc05hbWUgPSBgJHtjb21tYW5kZXJTdHJpbmd9LWZsZWV0LWRpc3BsYXlgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lQXJyYXkgPSBbXCJjYXJyaXJlclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuICAgICAgICBjb25zdCBzaGlwSHVsbENvdW50ID0gWzUsNCwzLDMsMl07XG4gICAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBIdWxsQ291bnRbaV07IGorKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNoaXBCbG9jay5jbGFzc05hbWUgPSBgJHtjb21tYW5kZXJTdHJpbmd9LSR7c2hpcE5hbWVBcnJheVtpXX0tJHtqICsgMX0gc2hpcC1odWxsLWJsb2NrYDtcbiAgICAgICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmxlZXREaXNwbGF5LmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgIH07XG4gICAgZmxlZXRTZWN0aW9uLmFwcGVuZENoaWxkKGZsZWV0UGFyYSk7XG4gICAgZmxlZXRTZWN0aW9uLmFwcGVuZENoaWxkKGZsZWV0RGlzcGxheSk7XG4gICAgcmV0dXJuIGZsZWV0U2VjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkKGJvYXJkVHlwZVN0cmluZykge1xuICAgIGNvbnN0IGJvYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9hcmRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYm9hcmRQYXJhLnRleHRDb250ZW50ID0gYCR7Ym9hcmRUeXBlU3RyaW5nfSBib2FyZGAudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuY2xhc3NOYW1lID0gYCR7Ym9hcmRUeXBlU3RyaW5nfS1ib2FyZGA7XG4gICAgY29uc3QgY2xhc3Nlc0FycmF5ID0gW251bGwsXCJudW1iZXItY29vcmRpbmF0ZXNcIixcImxldHRlci1jb29yZGluYXRlc1wiLFwiYmxvY2tzXCJdO1xuICAgIGNvbnN0IGJvYXJkSXRlbXMgPSB7XG4gICAgICAgIG51bWJlcnM6IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF0sXG4gICAgICAgIGxldHRlcnM6IFtcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIl0sXG4gICAgICAgIGNsYXNzOiBcImJvYXJkLWJsb2NrXCJcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNvb3JkaW5hdGVEaXNwbGF5KGJvYXJkSXRlbSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZURpdi50ZXh0Q29udGVudCA9IGAke2JvYXJkSXRlbXNbYm9hcmRJdGVtXVtqXX1gO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb29yZGluYXRlRGl2KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkQmxvY2tzKGNsYXNzU3RyaW5nKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgYm9hcmRCbG9jay5jbGFzc05hbWUgPSBgJHtjbGFzc1N0cmluZ31gO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChib2FyZEJsb2NrKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGAke2JvYXJkVHlwZVN0cmluZ30tYm9hcmQtJHtjbGFzc2VzQXJyYXlbaV19YDtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29vcmRpbmF0ZURpc3BsYXkoXCJudW1iZXJzXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29vcmRpbmF0ZURpc3BsYXkoXCJsZXR0ZXJzXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQm9hcmRCbG9ja3MoYm9hcmRJdGVtcy5jbGFzcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH07XG4gICAgYm9hcmRTZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkUGFyYSk7XG4gICAgYm9hcmRTZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICByZXR1cm4gYm9hcmRTZWN0aW9uO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyR2FtZVBhbmVsKCkge1xuICAgIGNvbnN0IGdhbWVQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZVBhbmVsLmNsYXNzTmFtZSA9IFwiZ2FtZS1wYW5lbFwiO1xuXG4gICAgY29uc3QgZ2FtZVBhbmVsTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZVBhbmVsTGVmdC5jbGFzc05hbWUgPSBcImdhbWUtcGFuZWwtbGVmdFwiO1xuXG4gICAgZ2FtZVBhbmVsTGVmdC5hcHBlbmRDaGlsZChyZW5kZXJGbGVldERpc3BsYXkoXCJ5b3VyXCIsIFwicGxheWVyXCIpKTtcbiAgICBnYW1lUGFuZWxMZWZ0LmFwcGVuZENoaWxkKHJlbmRlckZsZWV0RGlzcGxheShcImVuZW15XCIsIFwiZW5lbXlcIikpO1xuICAgIGdhbWVQYW5lbExlZnQuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoXCJob21lXCIpKTtcblxuICAgIGdhbWVQYW5lbC5hcHBlbmRDaGlsZChnYW1lUGFuZWxMZWZ0KTtcblxuICAgIGNvbnN0IGdhbWVQYW5lbFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lUGFuZWxSaWdodC5jbGFzc05hbWUgPSBcImdhbWUtcGFuZWwtcmlnaHRcIjtcblxuICAgIFxuICAgIGNvbnN0IGNvbnRyb2xzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udHJvbHNEaXNwbGF5LmNsYXNzTmFtZSA9IFwiY29udHJvbHMtZGlzcGxheVwiO1xuICAgIGNvbnN0IGNvbnRyb2xzRGlzcGxheVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250cm9sc0Rpc3BsYXlQYXJhLnRleHRDb250ZW50ID0gXCJDT05UUk9MU1wiO1xuICAgIGNvbnN0IGNvbnRyb2xzRGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGluc3RydWN0aW9uc1BhcmEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlbCBhc3BlcmlvcmVzIG1pbmltYSBhZCBtb2RpIGFsaXF1aWQgc2FwaWVudGUuIE1hZ25hbSByZXBlbGxhdCBhZCAvL3BsYWNlYXQ/IFF1byBleGVyY2l0YXRpb25lbSBhc3N1bWVuZGEgYWxpcXVpZCBub24gbm9zdHJ1bSBtYWduYW0gcHJhZXNlbnRpdW0gbWludXMsIGVzdCBlcnJvci5cIjtcbiAgICBjb250cm9sc0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zUGFyYSk7XG4gICAgY29udHJvbHNEaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRyb2xzRGlzcGxheVBhcmEpO1xuICAgIGNvbnRyb2xzRGlzcGxheS5hcHBlbmRDaGlsZChjb250cm9sc0Rpc3BsYXlEaXYpO1xuXG4gICAgZ2FtZVBhbmVsUmlnaHQuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoXCJ0YXJnZXRpbmdcIikpO1xuICAgIGdhbWVQYW5lbFJpZ2h0LmFwcGVuZENoaWxkKGNvbnRyb2xzRGlzcGxheSk7XG4gICAgZ2FtZVBhbmVsLmFwcGVuZENoaWxkKGdhbWVQYW5lbFJpZ2h0KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZVBhbmVsKTtcbn07XG5cbnJlbmRlclN0YXJ0aW5nUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==