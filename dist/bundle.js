(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Button, Input, Colors, Size, Default, Text, Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _src_components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/button */ "./src/components/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _src_components_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_components_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/input */ "./src/components/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _src_components_input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/constants/colors */ "./src/constants/colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _src_constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_constants_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/constants/size */ "./src/constants/size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return _src_constants_size__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_constants_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/constants/default */ "./src/constants/default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Default", function() { return _src_constants_default__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/core */ "./src/core/index.js");
/* harmony import */ var _src_components_switch_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/components/switch/switch */ "./src/components/switch/switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _src_components_switch_switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });








var Text = _src_core__WEBPACK_IMPORTED_MODULE_5__["Atoms"].Text; // const Switch = Atoms.Switch;



/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@styled-system/background/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/background/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (background);


/***/ }),

/***/ "./node_modules/@styled-system/border/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/border/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: border, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
var border = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (border);


/***/ }),

/***/ "./node_modules/@styled-system/color/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/color/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: color, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (color);


/***/ }),

/***/ "./node_modules/@styled-system/core/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/core/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: merge, get, createParser, createStyleFunction, system, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return createParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return createStyleFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "system", function() { return system; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);

var merge = function merge(a, b) {
  var result = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(result, (_assign = {}, _assign[key] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort().forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw));
          shouldSort = true;
        }

        continue;
      }

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, sx(raw, scale));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale);

    if (!media) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign2;

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign2 = {}, _assign2[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale);

    if (!breakpoint) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign3 = {}, _assign3[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale) {
    var result = {};
    var n = transform(value, scale);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};


/***/ }),

/***/ "./node_modules/@styled-system/flexbox/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/flexbox/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: flexbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return flexbox; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);


/***/ }),

/***/ "./node_modules/@styled-system/grid/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/grid/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: grid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (grid);


/***/ }),

/***/ "./node_modules/@styled-system/layout/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/layout/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");


var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  display: true,
  verticalAlign: true
};
var layout = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (layout);


/***/ }),

/***/ "./node_modules/@styled-system/position/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@styled-system/position/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: position, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space
  }
};
var position = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (position);


/***/ }),

/***/ "./node_modules/@styled-system/shadow/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/shadow/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: shadow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var shadow = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (shadow);


/***/ }),

/***/ "./node_modules/@styled-system/space/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/space/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: margin, padding, space, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber(n)) {
    return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.margin);
var padding = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.padding);
var space = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"])(margin, padding);
/* harmony default export */ __webpack_exports__["default"] = (space);


/***/ }),

/***/ "./node_modules/@styled-system/typography/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/typography/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: typography, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (typography);


/***/ }),

/***/ "./node_modules/@styled-system/variant/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/variant/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: variant, default, buttonStyle, textStyle, colorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return textStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      key = _ref.key;

  var sx = function sx(value, scale) {
    return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null);
  };

  sx.scale = scale || key;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parser;
};
/* harmony default export */ __webpack_exports__["default"] = (variant);
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});


/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isUndefined, isNull, isPlainObject, isObject, isAnyObject, isObjectLike, isFunction, isArray, isString, isFullString, isEmptyString, isNumber, isBoolean, isRegExp, isDate, isSymbol, isPrimitive, isType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return (payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
function isFunction(payload) {
    return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return (getType(payload) === 'Number' && !isNaN(payload));
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return (getType(payload) === 'Date' && !isNaN(payload));
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return (getType(payload) === 'Symbol');
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!type.hasOwnProperty('prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return (getType(payload) === name) || Boolean(payload && (payload.constructor === type));
}




/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default, merge, concatArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatArrays", function() { return concatArrays; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = props_1.concat(symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = props.concat(symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(originVal) && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ __webpack_exports__["default"] = (merge);



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.3.2");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.3.2" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.3.2", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.3.2" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

var isHMREnabled =  true && module.hot;

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children)
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.attrs, this.props);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, this.props.className, styledComponentId, this.attrs.className, generatedClassName).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/styled-system/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/styled-system/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: get, createParser, createStyleFunction, compose, system, margin, padding, space, color, layout, typography, flexbox, border, background, position, grid, shadow, boxShadow, textShadow, variant, buttonStyle, textStyle, colorStyle, width, height, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, display, overflow, opacity, fontSize, fontFamily, fontWeight, lineHeight, textAlign, fontStyle, letterSpacing, alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft, borderRadius, borders, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, zIndex, top, right, bottom, left, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "system", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"]; });

/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/space */ "./node_modules/@styled-system/space/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_1__["margin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_1__["padding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_1__["space"]; });

/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/color */ "./node_modules/@styled-system/color/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["color"]; });

/* harmony import */ var _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/layout */ "./node_modules/@styled-system/layout/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["layout"]; });

/* harmony import */ var _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/typography */ "./node_modules/@styled-system/typography/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["typography"]; });

/* harmony import */ var _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-system/flexbox */ "./node_modules/@styled-system/flexbox/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["flexbox"]; });

/* harmony import */ var _styled_system_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-system/border */ "./node_modules/@styled-system/border/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["border"]; });

/* harmony import */ var _styled_system_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styled-system/background */ "./node_modules/@styled-system/background/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "background", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["background"]; });

/* harmony import */ var _styled_system_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styled-system/position */ "./node_modules/@styled-system/position/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony import */ var _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styled-system/grid */ "./node_modules/@styled-system/grid/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["grid"]; });

/* harmony import */ var _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @styled-system/shadow */ "./node_modules/@styled-system/shadow/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["shadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @styled-system/variant */ "./node_modules/@styled-system/variant/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["variant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["buttonStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["textStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["colorStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "width", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "height", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verticalAlign", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "display", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "order", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundImage", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundSize", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundPosition", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundRepeat", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"]; });














 // v4 api shims








 // v4 style API shim

var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"])({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parse;
};


/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/core/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Button(_ref) {
  var text = _ref.text,
      type = _ref.type,
      isFluid = _ref.isFluid,
      isTransparent = _ref.isTransparent,
      props = _objectWithoutProperties(_ref, ["text", "type", "isFluid", "isTransparent"]);

  var maxWidth = isFluid ? '100%' : 'none';
  var width = isFluid ? '100%' : 'none';
  var backgroundColor = isTransparent ? 'transparent' : "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["colors"].blue);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["Styled"].Btn, _extends({
    style: {
      maxWidth: maxWidth,
      width: width,
      backgroundColor: backgroundColor
    },
    type: type
  }, props), text);
}
Button.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isTransparent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isFluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Button.defaultProps = {
  type: 'button',
  isTransparent: false,
  isFluid: false
};

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button/button.js");

/* harmony default export */ __webpack_exports__["default"] = (_button__WEBPACK_IMPORTED_MODULE_0__["Button"]);

/***/ }),

/***/ "./src/components/input/index.js":
/*!***************************************!*\
  !*** ./src/components/input/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/components/input/input.js");

/* harmony default export */ __webpack_exports__["default"] = (_input__WEBPACK_IMPORTED_MODULE_0__["Input"]);

/***/ }),

/***/ "./src/components/input/input.js":
/*!***************************************!*\
  !*** ./src/components/input/input.js ***!
  \***************************************/
/*! exports provided: StyledInput, StyledLabel, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLabel", function() { return StyledLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/core/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 23px;\n  font-weight: 300;\n  font-family: Roboto, sans-serif;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 32px;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-radius: 6px;\n  border-style: solid;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active,\n  input:-webkit-autofill:valid {\n  // TODO: could be removed\n    -webkit-text-fill-color: red !important;   \n  }\n  \n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_3__["color"]);
var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label(_templateObject2(), _constants__WEBPACK_IMPORTED_MODULE_5__["colors"].white);
function Input(props) {
  var type = props.type,
      width = props.width,
      labelText = props.labelText,
      id = props.id,
      name = props.name,
      isFluid = props.isFluid,
      restProps = _objectWithoutProperties(props, ["type", "width", "labelText", "id", "name", "isFluid"]);

  var color = _constants__WEBPACK_IMPORTED_MODULE_5__["colors"].blue,
      bgColor = _constants__WEBPACK_IMPORTED_MODULE_5__["colors"].primary;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_4__["Styled"].Container, {
    width: isFluid ? '100%' : width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, {
    htmlFor: id
  }, labelText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({
    id: id,
    name: name,
    color: color,
    bg: bgColor,
    type: type
  }, restProps)));
}
Input.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isFluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Input.defaultProps = {
  onChange: function onChange() {},
  type: 'text',
  width: '327px',
  isFluid: false
};

/***/ }),

/***/ "./src/components/switch/switch.js":
/*!*****************************************!*\
  !*** ./src/components/switch/switch.js ***!
  \*****************************************/
/*! exports provided: Switch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/colors */ "./src/constants/colors.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 13px;\n  width: 13px;\n  position: absolute;\n  border-radius: 50%;\n\n  top: 0;\n  background-color: ", ";\n  ", ": 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 10px;\n  width: 100%;\n\n  border-radius: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 26px;\n  height: 13px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SwitchContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label(_templateObject());
var SwitcherBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary);
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.isEnabled ? _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue : _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary3;
}, function (props) {
  return props.isEnabled ? 'right' : 'left';
});
var Hidden = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
function Switch(props) {
  debugger;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEnabled = _useState2[0],
      setEnabled = _useState2[1];

  var id = props.id,
      _onChange = props.onChange,
      state = props.state;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitcherBackground, {
    htmlFor: id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    isEnabled: isEnabled
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hidden, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(event) {
      _onChange(event);

      setEnabled(event.target.checked);
    },
    id: id,
    type: "checkbox"
  })));
}
Switch.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Switch.defaultProps = {
  id: 'switcher',
  state: false
};
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/constants/colors.js":
/*!*********************************!*\
  !*** ./src/constants/colors.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  black: '#000000',
  blue: '#1F8EFA',
  orange: '#FFAB4F',
  red: '#EE423D',
  green: '#05C985',
  primary: '#242E42',
  grey: '#979797',
  white: '#FFFFFF',
  secondary: '#2F3B52',
  secondary2: '#3E4E6C',
  secondary3: '#70889E'
});

/***/ }),

/***/ "./src/constants/default.js":
/*!**********************************!*\
  !*** ./src/constants/default.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fontSize: 12
});

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./src/constants/colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/constants/size.js":
/*!*******************************!*\
  !*** ./src/constants/size.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  maxWidth: '1440px'
});

/***/ }),

/***/ "./src/core/atoms/index.js":
/*!*********************************!*\
  !*** ./src/core/atoms/index.js ***!
  \*********************************/
/*! exports provided: Text, Switch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text/text */ "./src/core/atoms/text/text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text_text__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _switch_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch/switch */ "./src/core/atoms/switch/switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch_switch__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  Text: _text_text__WEBPACK_IMPORTED_MODULE_0__["default"],
  Switch: _switch_switch__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/core/atoms/switch/switch.js":
/*!*****************************************!*\
  !*** ./src/core/atoms/switch/switch.js ***!
  \*****************************************/
/*! exports provided: Switch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/colors */ "./src/constants/colors.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 13px;\n  width: 13px;\n  position: absolute;\n  border-radius: 50%;\n\n  top: 0;\n  background-color: ", ";\n  ", ": 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 10px;\n  width: 100%;\n\n  border-radius: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 26px;\n  height: 13px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SwitchContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label(_templateObject());
var SwitcherBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary);
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), function (props) {
  return props.isEnabled ? _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue : _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary3;
}, function (props) {
  return props.isEnabled ? 'right' : 'left';
});
var Hidden = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
function Switch(props) {
  var id = props.id,
      _onChange = props.onChange,
      state = props.state;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state),
      _useState2 = _slicedToArray(_useState, 2),
      isEnabled = _useState2[0],
      setEnabled = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitcherBackground, {
    htmlFor: id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    isEnabled: isEnabled
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hidden, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(event) {
      _onChange(event);

      setEnabled(event.target.checked);
    },
    id: id,
    type: "checkbox"
  })));
}
Switch.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Switch.defaultProps = {
  id: 'switcher',
  state: false
};
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/core/atoms/text/text.js":
/*!*************************************!*\
  !*** ./src/core/atoms/text/text.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/default */ "./src/constants/default.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Font = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]);
function Text(_ref) {
  var text = _ref.text,
      fontSize = _ref.fontSize,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["text", "fontSize", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Font, _extends({
    fontSize: fontSize,
    color: color
  }, props), text);
}
Text.propTypes = {
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Text.defaultProps = {
  fontSize: _constants_default__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize,
  color: _constants__WEBPACK_IMPORTED_MODULE_5__["colors"].blue
};

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: Styled, Atoms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./src/core/styled/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atoms */ "./src/core/atoms/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Atoms", function() { return _atoms__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/core/styled/button.js":
/*!***********************************!*\
  !*** ./src/core/styled/button.js ***!
  \***********************************/
/*! exports provided: padding, height, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  border: none;\n  text-transform: uppercase;\n  font-family: Roboto, sans-serif;\n  height: ", "px;\n  padding-right: ", "px;\n  padding-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var padding = 16;
var height = 33;
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject(), _constants__WEBPACK_IMPORTED_MODULE_1__["colors"].white, height, padding, padding));

/***/ }),

/***/ "./src/core/styled/container.js":
/*!**************************************!*\
  !*** ./src/core/styled/container.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_0__["width"]));

/***/ }),

/***/ "./src/core/styled/flex.js":
/*!*********************************!*\
  !*** ./src/core/styled/flex.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject()));

/***/ }),

/***/ "./src/core/styled/index.js":
/*!**********************************!*\
  !*** ./src/core/styled/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/core/styled/container.js");
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flex */ "./src/core/styled/flex.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/core/styled/button.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  Container: _container__WEBPACK_IMPORTED_MODULE_0__["default"],
  Flex: _flex__WEBPACK_IMPORTED_MODULE_1__["default"],
  Btn: _button__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vYm9yZGVyL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb2xvci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vY29yZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZmxleGJveC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZ3JpZC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vbGF5b3V0L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9wb3NpdGlvbi9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc2hhZG93L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zcGFjZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vdmFyaWFudC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtd2hhdC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21lcmdlLWFueXRoaW5nL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtc3lzdGVtL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsaXMtcnVsZS1zaGVldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGlzL3N0eWxpcy5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9zaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2F0b21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2F0b21zL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXRvbXMvdGV4dC90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0eWxlZC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3R5bGVkL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHlsZWQvZmxleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHlsZWQvaW5kZXguanMiXSwibmFtZXMiOlsiVGV4dCIsIkF0b21zIiwiQnV0dG9uIiwidGV4dCIsInR5cGUiLCJpc0ZsdWlkIiwiaXNUcmFuc3BhcmVudCIsInByb3BzIiwibWF4V2lkdGgiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImJsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIklucHV0IiwiU3R5bGVkSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsImNvbG9yIiwiU3R5bGVkTGFiZWwiLCJsYWJlbCIsIndoaXRlIiwibGFiZWxUZXh0IiwiaWQiLCJuYW1lIiwicmVzdFByb3BzIiwiYmdDb2xvciIsInByaW1hcnkiLCJvbkNoYW5nZSIsImZ1bmMiLCJTd2l0Y2hDb250YWluZXIiLCJTd2l0Y2hlckJhY2tncm91bmQiLCJkaXYiLCJDaXJjbGUiLCJpc0VuYWJsZWQiLCJzZWNvbmRhcnkzIiwiSGlkZGVuIiwiU3dpdGNoIiwidXNlU3RhdGUiLCJzZXRFbmFibGVkIiwic3RhdGUiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJibGFjayIsIm9yYW5nZSIsInJlZCIsImdyZWVuIiwiZ3JleSIsInNlY29uZGFyeSIsInNlY29uZGFyeTIiLCJmb250U2l6ZSIsIkZvbnQiLCJ0eXBvZ3JhcGh5IiwibnVtYmVyIiwiRGVmYXVsdCIsInBhZGRpbmciLCJoZWlnaHQiLCJidXR0b24iLCJDb250YWluZXIiLCJGbGV4IiwiQnRuIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFlBQVksVUFBVTtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4Tjs7Ozs7Ozs7Ozs7OztBQ3JNOU47QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEUsYUFBYTtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDM0MxQjtBQUFBO0FBQUE7QUFBQTtBQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2REFBYTtBQUN0QjtBQUNBLDBCQUEwQix1REFBTztBQUNqQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQVE7QUFDMUIsaUJBQWlCLHdEQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBTztBQUNqQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1Q0FBdUMsNkRBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsUUFBUSx1REFBTyxlQUFlLHVEQUFPO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFZSxvRUFBSyxFQUFDO0FBQ1U7Ozs7Ozs7Ozs7Ozs7QUNyRy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsZUFBZTtBQUNsQzs7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O0FBR0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0RBQXNELDhEQUFLO0FBQzNEO0FBQ0EsR0FBRzs7QUFFSCxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhGQUE4RixhQUFhO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSxLQUFxQyxJQUFJLDRDQUFLO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDRDQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsQ0FBQyw0Q0FBSzs7QUFFVDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUEsOEZBQThGLGFBQWE7QUFDM0c7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLDRDQUFLO0FBQ3ZCLFdBQVcsNENBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxZQUFZLEtBQXFDO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDRDQUFLLHdDQUF3QyxVQUFVLDZCQUE2QjtBQUNuRztBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBd0U7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFZSxxRUFBTSxFQUFDO0FBQ21PO0FBQ3pQOzs7Ozs7Ozs7Ozs7OztBQ2o3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNzQjtBQUNoQztBQUNqQjtBQUNFO0FBQ1E7QUFDTjtBQUNGO0FBQ1E7QUFDSjtBQUNSO0FBQ0k7QUFDcUM7QUFDQzs7QUFFaUs7QUFDNUw7QUFDaUo7QUFDbUk7QUFDSztBQUN6RjtBQUM1RjtBQUM1Qjs7QUFFM0g7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsY0FBYyx3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QUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUVPLElBQU1pRCxPQUFPLEdBQUcsRUFBaEI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUVRekMsd0hBQU0sQ0FBQzBDLE1BQXRCLG9CQUNXcEQsaURBQU0sQ0FBQ2UsS0FEbEIsRUFLWW9DLE1BTFosRUFNbUJELE9BTm5CLEVBT2tCQSxPQVBsQixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRWV4Qyx3SEFBTSxDQUFDZ0IsR0FBdEIsb0JBQ0k1QixtREFESixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRWVZLHdIQUFNLENBQUNnQixHQUF0QixxQjs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZTtBQUNiMkIsV0FBUyxFQUFUQSxrREFEYTtBQUViQyxNQUFJLEVBQUpBLDZDQUZhO0FBR2JDLEtBQUcsRUFBSEEsK0NBQUdBO0FBSFUsQ0FBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL3NyYy9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBDb2xvcnMgZnJvbSAnLi9zcmMvY29uc3RhbnRzL2NvbG9ycyc7XG5pbXBvcnQgU2l6ZSBmcm9tICcuL3NyYy9jb25zdGFudHMvc2l6ZSc7XG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuL3NyYy9jb25zdGFudHMvZGVmYXVsdCc7XG5pbXBvcnQgeyBBdG9tcyB9IGZyb20gJy4vc3JjL2NvcmUnO1xuXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvc3dpdGNoL3N3aXRjaCc7XG5cbmNvbnN0IFRleHQgPSBBdG9tcy5UZXh0O1xuLy8gY29uc3QgU3dpdGNoID0gQXRvbXMuU3dpdGNoO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIElucHV0LFxuICBDb2xvcnMsXG4gIFNpemUsXG4gIERlZmF1bHQsXG4gIFRleHQsXG4gIFN3aXRjaCxcbn1cbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYmFja2dyb3VuZDogdHJ1ZSxcbiAgYmFja2dyb3VuZEltYWdlOiB0cnVlLFxuICBiYWNrZ3JvdW5kU2l6ZTogdHJ1ZSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiB0cnVlLFxuICBiYWNrZ3JvdW5kUmVwZWF0OiB0cnVlXG59O1xuY29uZmlnLmJnSW1hZ2UgPSBjb25maWcuYmFja2dyb3VuZEltYWdlO1xuY29uZmlnLmJnU2l6ZSA9IGNvbmZpZy5iYWNrZ3JvdW5kU2l6ZTtcbmNvbmZpZy5iZ1Bvc2l0aW9uID0gY29uZmlnLmJhY2tncm91bmRQb3NpdGlvbjtcbmNvbmZpZy5iZ1JlcGVhdCA9IGNvbmZpZy5iYWNrZ3JvdW5kUmVwZWF0O1xuZXhwb3J0IHZhciBiYWNrZ3JvdW5kID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBiYWNrZ3JvdW5kO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBib3JkZXI6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlcicsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJXaWR0aDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyV2lkdGgnLFxuICAgIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xuICB9LFxuICBib3JkZXJTdHlsZToge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyU3R5bGUnLFxuICAgIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xuICB9LFxuICBib3JkZXJDb2xvcjoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQ29sb3InLFxuICAgIHNjYWxlOiAnY29sb3JzJ1xuICB9LFxuICBib3JkZXJSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyVG9wOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJUb3AnLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0JyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckxlZnQnLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyWDoge1xuICAgIHByb3BlcnRpZXM6IFsnYm9yZGVyTGVmdCcsICdib3JkZXJSaWdodCddLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyWToge1xuICAgIHByb3BlcnRpZXM6IFsnYm9yZGVyVG9wJywgJ2JvcmRlckJvdHRvbSddLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfVxufTtcbmV4cG9ydCB2YXIgYm9yZGVyID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBib3JkZXI7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGNvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdjb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjoge1xuICAgIHByb3BlcnR5OiAnYmFja2dyb3VuZENvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgb3BhY2l0eTogdHJ1ZVxufTtcbmNvbmZpZy5iZyA9IGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XG5leHBvcnQgdmFyIGNvbG9yID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBjb2xvcjtcbiIsImltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5leHBvcnQgdmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICB2YXIgcmVzdWx0ID0gYXNzaWduKHt9LCBhLCBiKTtcblxuICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgIHZhciBfYXNzaWduO1xuXG4gICAgaWYgKCFhW2tleV0gfHwgdHlwZW9mIGJba2V5XSAhPT0gJ29iamVjdCcpIGNvbnRpbnVlO1xuICAgIGFzc2lnbihyZXN1bHQsIChfYXNzaWduID0ge30sIF9hc3NpZ25ba2V5XSA9IGFzc2lnbihhW2tleV0sIGJba2V5XSksIF9hc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyBzb3J0IG9iamVjdC12YWx1ZSByZXNwb25zaXZlIHN0eWxlc1xuXG52YXIgc29ydCA9IGZ1bmN0aW9uIHNvcnQob2JqKSB7XG4gIHZhciBuZXh0ID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5leHRba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIG5leHQ7XG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGJyZWFrcG9pbnRzOiBbNDAsIDUyLCA2NF0ubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gKyAnZW0nO1xuICB9KVxufTtcblxudmFyIGNyZWF0ZU1lZGlhUXVlcnkgPSBmdW5jdGlvbiBjcmVhdGVNZWRpYVF1ZXJ5KG4pIHtcbiAgcmV0dXJuIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogXCIgKyBuICsgXCIpXCI7XG59O1xuXG52YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZShuLCBzY2FsZSkge1xuICByZXR1cm4gZ2V0KHNjYWxlLCBuLCBuKTtcbn07XG5cbmV4cG9ydCB2YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iaiwga2V5LCBkZWYsIHAsIHVuZGVmKSB7XG4gIGtleSA9IGtleSAmJiBrZXkuc3BsaXQgPyBrZXkuc3BsaXQoJy4nKSA6IFtrZXldO1xuXG4gIGZvciAocCA9IDA7IHAgPCBrZXkubGVuZ3RoOyBwKyspIHtcbiAgICBvYmogPSBvYmogPyBvYmpba2V5W3BdXSA6IHVuZGVmO1xuICB9XG5cbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWYgPyBkZWYgOiBvYmo7XG59O1xuZXhwb3J0IHZhciBjcmVhdGVQYXJzZXIgPSBmdW5jdGlvbiBjcmVhdGVQYXJzZXIoY29uZmlnKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIHZhciBwYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKHByb3BzKSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuICAgIHZhciBzaG91bGRTb3J0ID0gZmFsc2U7XG4gICAgdmFyIGlzQ2FjaGVEaXNhYmxlZCA9IHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLmRpc2FibGVTdHlsZWRTeXN0ZW1DYWNoZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKCFjb25maWdba2V5XSkgY29udGludWU7XG4gICAgICB2YXIgc3ggPSBjb25maWdba2V5XTtcbiAgICAgIHZhciByYXcgPSBwcm9wc1trZXldO1xuICAgICAgdmFyIHNjYWxlID0gZ2V0KHByb3BzLnRoZW1lLCBzeC5zY2FsZSwgc3guZGVmYXVsdHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHJhdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2FjaGUuYnJlYWtwb2ludHMgPSAhaXNDYWNoZURpc2FibGVkICYmIGNhY2hlLmJyZWFrcG9pbnRzIHx8IGdldChwcm9wcy50aGVtZSwgJ2JyZWFrcG9pbnRzJywgZGVmYXVsdHMuYnJlYWtwb2ludHMpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJhdykpIHtcbiAgICAgICAgICBjYWNoZS5tZWRpYSA9ICFpc0NhY2hlRGlzYWJsZWQgJiYgY2FjaGUubWVkaWEgfHwgW251bGxdLmNvbmNhdChjYWNoZS5icmVha3BvaW50cy5tYXAoY3JlYXRlTWVkaWFRdWVyeSkpO1xuICAgICAgICAgIHN0eWxlcyA9IG1lcmdlKHN0eWxlcywgcGFyc2VSZXNwb25zaXZlU3R5bGUoY2FjaGUubWVkaWEsIHN4LCBzY2FsZSwgcmF3KSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmF3ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVPYmplY3QoY2FjaGUuYnJlYWtwb2ludHMsIHN4LCBzY2FsZSwgcmF3KSk7XG4gICAgICAgICAgc2hvdWxkU29ydCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXNzaWduKHN0eWxlcywgc3gocmF3LCBzY2FsZSkpO1xuICAgIH0gLy8gc29ydCBvYmplY3QtYmFzZWQgcmVzcG9uc2l2ZSBzdHlsZXNcblxuXG4gICAgaWYgKHNob3VsZFNvcnQpIHtcbiAgICAgIHN0eWxlcyA9IHNvcnQoc3R5bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9O1xuXG4gIHBhcnNlLmNvbmZpZyA9IGNvbmZpZztcbiAgcGFyc2UucHJvcE5hbWVzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgcGFyc2UuY2FjaGUgPSBjYWNoZTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBrICE9PSAnY29uZmlnJztcbiAgfSk7XG5cbiAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgX2NyZWF0ZVBhcnNlcjtcblxuICAgICAgcGFyc2Vba2V5XSA9IGNyZWF0ZVBhcnNlcigoX2NyZWF0ZVBhcnNlciA9IHt9LCBfY3JlYXRlUGFyc2VyW2tleV0gPSBjb25maWdba2V5XSwgX2NyZWF0ZVBhcnNlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlO1xufTtcblxudmFyIHBhcnNlUmVzcG9uc2l2ZVN0eWxlID0gZnVuY3Rpb24gcGFyc2VSZXNwb25zaXZlU3R5bGUobWVkaWFRdWVyaWVzLCBzeCwgc2NhbGUsIHJhdykge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHJhdy5zbGljZSgwLCBtZWRpYVF1ZXJpZXMubGVuZ3RoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgIHZhciBtZWRpYSA9IG1lZGlhUXVlcmllc1tpXTtcbiAgICB2YXIgc3R5bGUgPSBzeCh2YWx1ZSwgc2NhbGUpO1xuXG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgYXNzaWduKHN0eWxlcywgc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2Fzc2lnbjI7XG5cbiAgICAgIGFzc2lnbihzdHlsZXMsIChfYXNzaWduMiA9IHt9LCBfYXNzaWduMlttZWRpYV0gPSBhc3NpZ24oe30sIHN0eWxlc1ttZWRpYV0sIHN0eWxlKSwgX2Fzc2lnbjIpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufTtcblxudmFyIHBhcnNlUmVzcG9uc2l2ZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlUmVzcG9uc2l2ZU9iamVjdChicmVha3BvaW50cywgc3gsIHNjYWxlLCByYXcpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiByYXcpIHtcbiAgICB2YXIgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRzW2tleV07XG4gICAgdmFyIHZhbHVlID0gcmF3W2tleV07XG4gICAgdmFyIHN0eWxlID0gc3godmFsdWUsIHNjYWxlKTtcblxuICAgIGlmICghYnJlYWtwb2ludCkge1xuICAgICAgYXNzaWduKHN0eWxlcywgc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2Fzc2lnbjM7XG5cbiAgICAgIHZhciBtZWRpYSA9IGNyZWF0ZU1lZGlhUXVlcnkoYnJlYWtwb2ludCk7XG4gICAgICBhc3NpZ24oc3R5bGVzLCAoX2Fzc2lnbjMgPSB7fSwgX2Fzc2lnbjNbbWVkaWFdID0gYXNzaWduKHt9LCBzdHlsZXNbbWVkaWFdLCBzdHlsZSksIF9hc3NpZ24zKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbmV4cG9ydCB2YXIgY3JlYXRlU3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlRnVuY3Rpb24oX3JlZikge1xuICB2YXIgcHJvcGVydGllcyA9IF9yZWYucHJvcGVydGllcyxcbiAgICAgIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eSxcbiAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIF9yZWYkdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gZ2V0VmFsdWUgOiBfcmVmJHRyYW5zZm9ybSxcbiAgICAgIGRlZmF1bHRTY2FsZSA9IF9yZWYuZGVmYXVsdFNjYWxlO1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBbcHJvcGVydHldO1xuXG4gIHZhciBzeCA9IGZ1bmN0aW9uIHN4KHZhbHVlLCBzY2FsZSkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgbiA9IHRyYW5zZm9ybSh2YWx1ZSwgc2NhbGUpO1xuICAgIGlmIChuID09PSBudWxsKSByZXR1cm47XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSBuO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgc3guc2NhbGUgPSBzY2FsZTtcbiAgc3guZGVmYXVsdHMgPSBkZWZhdWx0U2NhbGU7XG4gIHJldHVybiBzeDtcbn07IC8vIG5ldyB2NSBBUElcblxuZXhwb3J0IHZhciBzeXN0ZW0gPSBmdW5jdGlvbiBzeXN0ZW0oYXJncykge1xuICBpZiAoYXJncyA9PT0gdm9pZCAwKSB7XG4gICAgYXJncyA9IHt9O1xuICB9XG5cbiAgdmFyIGNvbmZpZyA9IHt9O1xuICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY29uZiA9IGFyZ3Nba2V5XTtcblxuICAgIGlmIChjb25mID09PSB0cnVlKSB7XG4gICAgICAvLyBzaG9ydGN1dCBkZWZpbml0aW9uXG4gICAgICBjb25maWdba2V5XSA9IGNyZWF0ZVN0eWxlRnVuY3Rpb24oe1xuICAgICAgICBwcm9wZXJ0eToga2V5LFxuICAgICAgICBzY2FsZToga2V5XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZ1trZXldID0gY29uZjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdba2V5XSA9IGNyZWF0ZVN0eWxlRnVuY3Rpb24oY29uZik7XG4gIH0pO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuZXhwb3J0IHZhciBjb21wb3NlID0gZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJzZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcnNlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBwYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgIGlmICghcGFyc2VyIHx8ICFwYXJzZXIuY29uZmlnKSByZXR1cm47XG4gICAgYXNzaWduKGNvbmZpZywgcGFyc2VyLmNvbmZpZyk7XG4gIH0pO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBhbGlnbkl0ZW1zOiB0cnVlLFxuICBhbGlnbkNvbnRlbnQ6IHRydWUsXG4gIGp1c3RpZnlJdGVtczogdHJ1ZSxcbiAganVzdGlmeUNvbnRlbnQ6IHRydWUsXG4gIGZsZXhXcmFwOiB0cnVlLFxuICBmbGV4RGlyZWN0aW9uOiB0cnVlLFxuICAvLyBpdGVtXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4QmFzaXM6IHRydWUsXG4gIGp1c3RpZnlTZWxmOiB0cnVlLFxuICBhbGlnblNlbGY6IHRydWUsXG4gIG9yZGVyOiB0cnVlXG59O1xuZXhwb3J0IHZhciBmbGV4Ym94ID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBmbGV4Ym94O1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl1cbn07XG52YXIgY29uZmlnID0ge1xuICBncmlkR2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkR2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRDb2x1bW5HYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRDb2x1bW5HYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZFJvd0dhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZFJvd0dhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQXV0b0Zsb3c6IHRydWUsXG4gIGdyaWRBdXRvQ29sdW1uczogdHJ1ZSxcbiAgZ3JpZEF1dG9Sb3dzOiB0cnVlLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0cnVlLFxuICBncmlkVGVtcGxhdGVSb3dzOiB0cnVlLFxuICBncmlkVGVtcGxhdGVBcmVhczogdHJ1ZSxcbiAgZ3JpZEFyZWE6IHRydWVcbn07XG5leHBvcnQgdmFyIGdyaWQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGdyaWQ7XG4iLCJpbXBvcnQgeyBzeXN0ZW0sIGdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuXG52YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG4pO1xufTtcblxudmFyIGdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgobiwgc2NhbGUpIHtcbiAgcmV0dXJuIGdldChzY2FsZSwgbiwgIWlzTnVtYmVyKG4pIHx8IG4gPiAxID8gbiA6IG4gKiAxMDAgKyAnJScpO1xufTtcblxudmFyIGNvbmZpZyA9IHtcbiAgd2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ3dpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJyxcbiAgICB0cmFuc2Zvcm06IGdldFdpZHRoXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtaW5XaWR0aDoge1xuICAgIHByb3BlcnR5OiAnbWluV2lkdGgnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1pbkhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWluSGVpZ2h0JyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtYXhXaWR0aDoge1xuICAgIHByb3BlcnR5OiAnbWF4V2lkdGgnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1heEhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWF4SGVpZ2h0JyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBzaXplOiB7XG4gICAgcHJvcGVydGllczogWyd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBvdmVyZmxvdzogdHJ1ZSxcbiAgZGlzcGxheTogdHJ1ZSxcbiAgdmVydGljYWxBbGlnbjogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgbGF5b3V0ID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIHBvc2l0aW9uOiB0cnVlLFxuICB6SW5kZXg6IHtcbiAgICBwcm9wZXJ0eTogJ3pJbmRleCcsXG4gICAgc2NhbGU6ICd6SW5kaWNlcydcbiAgfSxcbiAgdG9wOiB7XG4gICAgcHJvcGVydHk6ICd0b3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ3JpZ2h0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnYm90dG9tJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ2xlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5leHBvcnQgdmFyIHNoYWRvdyA9IHN5c3RlbSh7XG4gIGJveFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAnYm94U2hhZG93JyxcbiAgICBzY2FsZTogJ3NoYWRvd3MnXG4gIH0sXG4gIHRleHRTaGFkb3c6IHtcbiAgICBwcm9wZXJ0eTogJ3RleHRTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBzaGFkb3c7XG4iLCJpbXBvcnQgeyBnZXQsIHN5c3RlbSwgY29tcG9zZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xuXG52YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG4pO1xufTtcblxudmFyIGdldE1hcmdpbiA9IGZ1bmN0aW9uIGdldE1hcmdpbihuLCBzY2FsZSkge1xuICBpZiAoIWlzTnVtYmVyKG4pKSB7XG4gICAgcmV0dXJuIGdldChzY2FsZSwgbiwgbik7XG4gIH1cblxuICB2YXIgaXNOZWdhdGl2ZSA9IG4gPCAwO1xuICB2YXIgYWJzb2x1dGUgPSBNYXRoLmFicyhuKTtcbiAgdmFyIHZhbHVlID0gZ2V0KHNjYWxlLCBhYnNvbHV0ZSwgYWJzb2x1dGUpO1xuXG4gIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzTmVnYXRpdmUgPyAnLScgKyB2YWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICogKGlzTmVnYXRpdmUgPyAtMSA6IDEpO1xufTtcblxudmFyIGNvbmZpZ3MgPSB7fTtcbmNvbmZpZ3MubWFyZ2luID0ge1xuICBtYXJnaW46IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbicsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5Ub3A6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpblRvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5SaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5Cb3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luTGVmdDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luTGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5YOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5ZOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuY29uZmlncy5tYXJnaW4ubSA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbjtcbmNvbmZpZ3MubWFyZ2luLm10ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luVG9wO1xuY29uZmlncy5tYXJnaW4ubXIgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5SaWdodDtcbmNvbmZpZ3MubWFyZ2luLm1iID0gY29uZmlncy5tYXJnaW4ubWFyZ2luQm90dG9tO1xuY29uZmlncy5tYXJnaW4ubWwgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5MZWZ0O1xuY29uZmlncy5tYXJnaW4ubXggPSBjb25maWdzLm1hcmdpbi5tYXJnaW5YO1xuY29uZmlncy5tYXJnaW4ubXkgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5ZO1xuY29uZmlncy5wYWRkaW5nID0ge1xuICBwYWRkaW5nOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdUb3A6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdUb3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1JpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ0JvdHRvbToge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0JvdHRvbScsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nTGVmdDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0xlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1g6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1k6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmNvbmZpZ3MucGFkZGluZy5wID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmc7XG5jb25maWdzLnBhZGRpbmcucHQgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1RvcDtcbmNvbmZpZ3MucGFkZGluZy5wciA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nUmlnaHQ7XG5jb25maWdzLnBhZGRpbmcucGIgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ0JvdHRvbTtcbmNvbmZpZ3MucGFkZGluZy5wbCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nTGVmdDtcbmNvbmZpZ3MucGFkZGluZy5weCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWDtcbmNvbmZpZ3MucGFkZGluZy5weSA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWTtcbmV4cG9ydCB2YXIgbWFyZ2luID0gc3lzdGVtKGNvbmZpZ3MubWFyZ2luKTtcbmV4cG9ydCB2YXIgcGFkZGluZyA9IHN5c3RlbShjb25maWdzLnBhZGRpbmcpO1xuZXhwb3J0IHZhciBzcGFjZSA9IGNvbXBvc2UobWFyZ2luLCBwYWRkaW5nKTtcbmV4cG9ydCBkZWZhdWx0IHNwYWNlO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgZm9udEZhbWlseToge1xuICAgIHByb3BlcnR5OiAnZm9udEZhbWlseScsXG4gICAgc2NhbGU6ICdmb250cydcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICBzY2FsZTogJ2ZvbnRTaXplcycsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5mb250U2l6ZXNcbiAgfSxcbiAgZm9udFdlaWdodDoge1xuICAgIHByb3BlcnR5OiAnZm9udFdlaWdodCcsXG4gICAgc2NhbGU6ICdmb250V2VpZ2h0cydcbiAgfSxcbiAgbGluZUhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbGluZUhlaWdodCcsXG4gICAgc2NhbGU6ICdsaW5lSGVpZ2h0cydcbiAgfSxcbiAgbGV0dGVyU3BhY2luZzoge1xuICAgIHByb3BlcnR5OiAnbGV0dGVyU3BhY2luZycsXG4gICAgc2NhbGU6ICdsZXR0ZXJTcGFjaW5ncydcbiAgfSxcbiAgdGV4dEFsaWduOiB0cnVlLFxuICBmb250U3R5bGU6IHRydWVcbn07XG5leHBvcnQgdmFyIHR5cG9ncmFwaHkgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IHR5cG9ncmFwaHk7XG4iLCJpbXBvcnQgeyBnZXQsIGNyZWF0ZVBhcnNlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuZXhwb3J0IHZhciB2YXJpYW50ID0gZnVuY3Rpb24gdmFyaWFudChfcmVmKSB7XG4gIHZhciBfY29uZmlnO1xuXG4gIHZhciBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHByb3AgPSBfcmVmLnByb3AsXG4gICAgICBwcm9wID0gX3JlZiRwcm9wID09PSB2b2lkIDAgPyAndmFyaWFudCcgOiBfcmVmJHByb3AsXG4gICAgICBrZXkgPSBfcmVmLmtleTtcblxuICB2YXIgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUpIHtcbiAgICByZXR1cm4gZ2V0KHNjYWxlLCB2YWx1ZSwgbnVsbCk7XG4gIH07XG5cbiAgc3guc2NhbGUgPSBzY2FsZSB8fCBrZXk7XG4gIHZhciBjb25maWcgPSAoX2NvbmZpZyA9IHt9LCBfY29uZmlnW3Byb3BdID0gc3gsIF9jb25maWcpO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgdmFyaWFudDtcbmV4cG9ydCB2YXIgYnV0dG9uU3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAnYnV0dG9ucydcbn0pO1xuZXhwb3J0IHZhciB0ZXh0U3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAndGV4dFN0eWxlcycsXG4gIHByb3A6ICd0ZXh0U3R5bGUnXG59KTtcbmV4cG9ydCB2YXIgY29sb3JTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdjb2xvclN0eWxlcycsXG4gIHByb3A6ICdjb2xvcnMnXG59KTtcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvYmplY3QgdHlwZSBvZiB0aGUgZ2l2ZW4gcGF5bG9hZFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldFR5cGUocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXlsb2FkKS5zbGljZSg4LCAtMSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyB1bmRlZmluZWRcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHVuZGVmaW5lZH1cclxuICovXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnVW5kZWZpbmVkJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIG51bGxcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIG51bGx9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc051bGwocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdOdWxsJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3QgKGV4Y2x1ZGluZyBzcGVjaWFsIGNsYXNzZXMgb3Igb2JqZWN0cyB3aXRoIG90aGVyIHByb3RvdHlwZXMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyB7W2tleTogc3RyaW5nXTogYW55fX1cclxuICovXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QocGF5bG9hZCkge1xyXG4gICAgaWYgKGdldFR5cGUocGF5bG9hZCkgIT09ICdPYmplY3QnKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAocGF5bG9hZC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXlsb2FkKSA9PT0gT2JqZWN0LnByb3RvdHlwZSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0IChleGNsdWRpbmcgc3BlY2lhbCBjbGFzc2VzIG9yIG9iamVjdHMgd2l0aCBvdGhlciBwcm90b3R5cGVzKVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMge1trZXk6IHN0cmluZ106IGFueX19XHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdChwYXlsb2FkKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGFueSBraW5kIG9mIG9iamVjdCAoaW5jbHVkaW5nIHNwZWNpYWwgY2xhc3NlcyBvciBvYmplY3RzIHdpdGggZGlmZmVyZW50IHByb3RvdHlwZXMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyB7W2tleTogc3RyaW5nXTogYW55fX1cclxuICovXHJcbmZ1bmN0aW9uIGlzQW55T2JqZWN0KHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnT2JqZWN0JztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIG9iamVjdCBsaWtlIGEgdHlwZSBwYXNzZWQgaW4gPCA+XHJcbiAqXHJcbiAqIFVzYWdlOiBpc09iamVjdExpa2U8e2lkOiBhbnl9PihwYXlsb2FkKSAvLyB3aWxsIG1ha2Ugc3VyZSBpdCdzIGFuIG9iamVjdCBhbmQgaGFzIGFuIGBpZGAgcHJvcC5cclxuICpcclxuICogQHRlbXBsYXRlIFQgdGhpcyBtdXN0IGJlIHBhc3NlZCBpbiA8ID5cclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFR9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdExpa2UocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzQW55T2JqZWN0KHBheWxvYWQpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgRnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnRnVuY3Rpb24nO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gYXJyYXlcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHVuZGVmaW5lZH1cclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXkocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdBcnJheSc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHN0cmluZ1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgc3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdHJpbmcocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdTdHJpbmcnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBzdHJpbmcsIEJVVCByZXR1cm5zIGZhbHNlIGZvciAnJ1xyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgc3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGdWxsU3RyaW5nKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhwYXlsb2FkKSAmJiBwYXlsb2FkICE9PSAnJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzICcnXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VtcHR5U3RyaW5nKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBwYXlsb2FkID09PSAnJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgbnVtYmVyXHJcbiAqXHJcbiAqIFRoaXMgd2lsbCByZXR1cm4gZmFsc2UgZm9yIE5hTlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgbnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNOdW1iZXIocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIChnZXRUeXBlKHBheWxvYWQpID09PSAnTnVtYmVyJyAmJiAhaXNOYU4ocGF5bG9hZCkpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBib29sZWFuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNCb29sZWFuKHBheWxvYWQpIHtcclxuICAgIHJldHVybiBnZXRUeXBlKHBheWxvYWQpID09PSAnQm9vbGVhbic7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHJlZ3VsYXIgZXhwcmVzc2lvblxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgUmVnRXhwfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZWdFeHAocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdSZWdFeHAnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBkYXRlLCBhbmQgdGhhdCB0aGUgZGF0ZSBpcyBWYWxpZFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgRGF0ZX1cclxuICovXHJcbmZ1bmN0aW9uIGlzRGF0ZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gKGdldFR5cGUocGF5bG9hZCkgPT09ICdEYXRlJyAmJiAhaXNOYU4ocGF5bG9hZCkpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBTeW1ib2xcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHN5bWJvbH1cclxuICovXHJcbmZ1bmN0aW9uIGlzU3ltYm9sKHBheWxvYWQpIHtcclxuICAgIHJldHVybiAoZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1N5bWJvbCcpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBwcmltaXRpdmUgdHlwZSAoZWcuIEJvb2xlYW4gfCBOdWxsIHwgVW5kZWZpbmVkIHwgTnVtYmVyIHwgU3RyaW5nIHwgU3ltYm9sKVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMgeyhwYXlsb2FkIGlzIGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHwgbnVtYmVyIHwgc3RyaW5nIHwgc3ltYm9sKX1cclxuICovXHJcbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHBheWxvYWQpIHtcclxuICAgIHJldHVybiAoaXNCb29sZWFuKHBheWxvYWQpIHx8XHJcbiAgICAgICAgaXNOdWxsKHBheWxvYWQpIHx8XHJcbiAgICAgICAgaXNVbmRlZmluZWQocGF5bG9hZCkgfHxcclxuICAgICAgICBpc051bWJlcihwYXlsb2FkKSB8fFxyXG4gICAgICAgIGlzU3RyaW5nKHBheWxvYWQpIHx8XHJcbiAgICAgICAgaXNTeW1ib2wocGF5bG9hZCkpO1xyXG59XHJcbi8qKlxyXG4gKiBEb2VzIGEgZ2VuZXJpYyBjaGVjayB0byBjaGVjayB0aGF0IHRoZSBnaXZlbiBwYXlsb2FkIGlzIG9mIGEgZ2l2ZW4gdHlwZS5cclxuICogSW4gY2FzZXMgbGlrZSBOdW1iZXIsIGl0IHdpbGwgcmV0dXJuIHRydWUgZm9yIE5hTiBhcyBOYU4gaXMgYSBOdW1iZXIgKHRoYW5rcyBqYXZhc2NyaXB0ISk7XHJcbiAqIEl0IHdpbGwsIGhvd2V2ZXIsIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBvYmplY3QgYW5kIG51bGxcclxuICpcclxuICogQHRlbXBsYXRlIFRcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEBwYXJhbSB7VH0gdHlwZVxyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IFdpbGwgdGhyb3cgdHlwZSBlcnJvciBpZiB0eXBlIGlzIGFuIGludmFsaWQgdHlwZVxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBUfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNUeXBlKHBheWxvYWQsIHR5cGUpIHtcclxuICAgIGlmICghKHR5cGUgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUeXBlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0eXBlLmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1R5cGUgaXMgbm90IGEgY2xhc3MnKTtcclxuICAgIH1cclxuICAgIC8vIENsYXNzZXMgdXN1YWxseSBoYXZlIG5hbWVzIChhcyBmdW5jdGlvbnMgdXN1YWxseSBoYXZlIG5hbWVzKVxyXG4gICAgdmFyIG5hbWUgPSB0eXBlLm5hbWU7XHJcbiAgICByZXR1cm4gKGdldFR5cGUocGF5bG9hZCkgPT09IG5hbWUpIHx8IEJvb2xlYW4ocGF5bG9hZCAmJiAocGF5bG9hZC5jb25zdHJ1Y3RvciA9PT0gdHlwZSkpO1xyXG59XG5cbmV4cG9ydCB7IGdldFR5cGUsIGlzVW5kZWZpbmVkLCBpc051bGwsIGlzUGxhaW5PYmplY3QsIGlzT2JqZWN0LCBpc0FueU9iamVjdCwgaXNPYmplY3RMaWtlLCBpc0Z1bmN0aW9uLCBpc0FycmF5LCBpc1N0cmluZywgaXNGdWxsU3RyaW5nLCBpc0VtcHR5U3RyaW5nLCBpc051bWJlciwgaXNCb29sZWFuLCBpc1JlZ0V4cCwgaXNEYXRlLCBpc1N5bWJvbCwgaXNQcmltaXRpdmUsIGlzVHlwZSB9O1xuIiwiZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld0lucHV0c1tpXSAhPT0gbGFzdElucHV0c1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHtcbiAgICBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7XG4gIH1cblxuICB2YXIgbGFzdFRoaXM7XG4gIHZhciBsYXN0QXJncyA9IFtdO1xuICB2YXIgbGFzdFJlc3VsdDtcbiAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5ld0FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBuZXdBcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChjYWxsZWRPbmNlICYmIGxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG5cbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RBcmdzID0gbmV3QXJncztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplT25lO1xuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNQbGFpbk9iamVjdCwgaXNTeW1ib2wgfSBmcm9tICdpcy13aGF0JztcblxuZnVuY3Rpb24gYXNzaWduUHJvcChjYXJyeSwga2V5LCBuZXdWYWwsIG9yaWdpbmFsT2JqZWN0KSB7XHJcbiAgICB2YXIgcHJvcFR5cGUgPSBvcmlnaW5hbE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpXHJcbiAgICAgICAgPyAnZW51bWVyYWJsZSdcclxuICAgICAgICA6ICdub25lbnVtZXJhYmxlJztcclxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ2VudW1lcmFibGUnKVxyXG4gICAgICAgIGNhcnJ5W2tleV0gPSBuZXdWYWw7XHJcbiAgICBpZiAocHJvcFR5cGUgPT09ICdub25lbnVtZXJhYmxlJykge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYXJyeSwga2V5LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWwsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VSZWN1cnNpdmVseShvcmlnaW4sIG5ld0NvbWVyLCBleHRlbnNpb25zKSB7XHJcbiAgICAvLyB3b3JrIGRpcmVjdGx5IG9uIG5ld0NvbWVyIGlmIGl0cyBub3QgYW4gb2JqZWN0XHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QobmV3Q29tZXIpKSB7XHJcbiAgICAgICAgLy8gZXh0ZW5kIG1lcmdlIHJ1bGVzXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgaXNBcnJheShleHRlbnNpb25zKSkge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4dGVuZCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29tZXIgPSBleHRlbmQob3JpZ2luLCBuZXdDb21lcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3Q29tZXI7XHJcbiAgICB9XHJcbiAgICAvLyBkZWZpbmUgbmV3T2JqZWN0IHRvIG1lcmdlIGFsbCB2YWx1ZXMgdXBvblxyXG4gICAgdmFyIG5ld09iamVjdCA9IHt9O1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3JpZ2luKSkge1xyXG4gICAgICAgIHZhciBwcm9wc18xID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob3JpZ2luKTtcclxuICAgICAgICB2YXIgc3ltYm9sc18xID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvcmlnaW4pO1xyXG4gICAgICAgIG5ld09iamVjdCA9IHByb3BzXzEuY29uY2F0KHN5bWJvbHNfMSkucmVkdWNlKGZ1bmN0aW9uIChjYXJyeSwga2V5KSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdmFyIHRhcmdldFZhbCA9IG9yaWdpbltrZXldO1xyXG4gICAgICAgICAgICBpZiAoKCFpc1N5bWJvbChrZXkpICYmICFPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuZXdDb21lcikuaW5jbHVkZXMoa2V5KSkgfHxcclxuICAgICAgICAgICAgICAgIChpc1N5bWJvbChrZXkpICYmICFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG5ld0NvbWVyKS5pbmNsdWRlcyhrZXkpKSkge1xyXG4gICAgICAgICAgICAgICAgYXNzaWduUHJvcChjYXJyeSwga2V5LCB0YXJnZXRWYWwsIG9yaWdpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhcnJ5O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuICAgIHZhciBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5ld0NvbWVyKTtcclxuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuZXdDb21lcik7XHJcbiAgICB2YXIgcmVzdWx0ID0gcHJvcHMuY29uY2F0KHN5bWJvbHMpLnJlZHVjZShmdW5jdGlvbiAoY2FycnksIGtleSkge1xyXG4gICAgICAgIC8vIHJlLWRlZmluZSB0aGUgb3JpZ2luIGFuZCBuZXdDb21lciBhcyB0YXJnZXRWYWwgYW5kIG5ld1ZhbFxyXG4gICAgICAgIHZhciBuZXdWYWwgPSBuZXdDb21lcltrZXldO1xyXG4gICAgICAgIHZhciB0YXJnZXRWYWwgPSAoaXNQbGFpbk9iamVjdChvcmlnaW4pKVxyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgID8gb3JpZ2luW2tleV1cclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gZXh0ZW5kIG1lcmdlIHJ1bGVzXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgaXNBcnJheShleHRlbnNpb25zKSkge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4dGVuZCkge1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsID0gZXh0ZW5kKHRhcmdldFZhbCwgbmV3VmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdoZW4gbmV3VmFsIGlzIGFuIG9iamVjdCBkbyB0aGUgbWVyZ2UgcmVjdXJzaXZlbHlcclxuICAgICAgICBpZiAodGFyZ2V0VmFsICE9PSB1bmRlZmluZWQgJiYgaXNQbGFpbk9iamVjdChuZXdWYWwpKSB7XHJcbiAgICAgICAgICAgIG5ld1ZhbCA9IG1lcmdlUmVjdXJzaXZlbHkodGFyZ2V0VmFsLCBuZXdWYWwsIGV4dGVuc2lvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIG5ld1ZhbCwgbmV3Q29tZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJyeTtcclxuICAgIH0sIG5ld09iamVjdCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbi8qKlxyXG4gKiBNZXJnZSBhbnl0aGluZyByZWN1cnNpdmVseS5cclxuICogT2JqZWN0cyBnZXQgbWVyZ2VkLCBzcGVjaWFsIG9iamVjdHMgKGNsYXNzZXMgZXRjLikgYXJlIHJlLWFzc2lnbmVkIFwiYXMgaXNcIi5cclxuICogQmFzaWMgdHlwZXMgb3ZlcndyaXRlIG9iamVjdHMgb3Igb3RoZXIgYmFzaWMgdHlwZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KElDb25maWcgfCBhbnkpfSBvcmlnaW5cclxuICogQHBhcmFtIHsuLi5hbnlbXX0gbmV3Q29tZXJzXHJcbiAqIEByZXR1cm5zIHRoZSByZXN1bHRcclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlKG9yaWdpbikge1xyXG4gICAgdmFyIG5ld0NvbWVycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBuZXdDb21lcnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IG51bGw7XHJcbiAgICB2YXIgYmFzZSA9IG9yaWdpbjtcclxuICAgIGlmIChpc1BsYWluT2JqZWN0KG9yaWdpbikgJiYgb3JpZ2luLmV4dGVuc2lvbnMgJiYgT2JqZWN0LmtleXMob3JpZ2luKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBiYXNlID0ge307XHJcbiAgICAgICAgZXh0ZW5zaW9ucyA9IG9yaWdpbi5leHRlbnNpb25zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0NvbWVycy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgbmV3Q29tZXIpIHtcclxuICAgICAgICByZXR1cm4gbWVyZ2VSZWN1cnNpdmVseShyZXN1bHQsIG5ld0NvbWVyLCBleHRlbnNpb25zKTtcclxuICAgIH0sIGJhc2UpO1xyXG59XG5cbmZ1bmN0aW9uIGNvbmNhdEFycmF5cyhvcmlnaW5WYWwsIG5ld1ZhbCkge1xyXG4gICAgaWYgKGlzQXJyYXkob3JpZ2luVmFsKSAmJiBpc0FycmF5KG5ld1ZhbCkpIHtcclxuICAgICAgICAvLyBjb25jYXQgbG9naWNcclxuICAgICAgICByZXR1cm4gb3JpZ2luVmFsLmNvbmNhdChuZXdWYWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld1ZhbDsgLy8gYWx3YXlzIHJldHVybiBuZXdWYWwgYXMgZmFsbGJhY2shIVxyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuZXhwb3J0IHsgbWVyZ2UsIGNvbmNhdEFycmF5cyB9O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcblxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG5cbi8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7XG4gICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjguNic7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZ1dpdGhvdXRTdGFjayhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gOCkge1xuICAgICAgLy8gQ2hlY2sgYmVmb3JlIHRoZSBjb25kaXRpb24gdG8gY2F0Y2ggdmlvbGF0aW9ucyBlYXJseS5cbiAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgIH1cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpO1xuXG4gICAgICAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5lcnJvciwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayQxID0gd2FybmluZ1dpdGhvdXRTdGFjaztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogdm9pZCAwO1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHZhciBzb3VyY2VJbmZvID0gJyc7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgcGF0aEJlZm9yZVNsYXNoID0gbWF0Y2hbMV07XG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIHNvdXJjZUluZm87XG59O1xuXG52YXIgUmVzb2x2ZWQgPSAxO1xuXG5cbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArICcoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdDb25jdXJyZW50TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG5cbiAgICAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH1cblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjayQxO1xuXG57XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvd2FybmluZy1hbmQtaW52YXJpYW50LWFyZ3NcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxLmFwcGx5KHVuZGVmaW5lZCwgW2ZhbHNlLCBmb3JtYXQgKyAnJXMnXS5jb25jYXQoYXJncywgW3N0YWNrXSkpO1xuICB9O1xufVxuXG52YXIgd2FybmluZyQxID0gd2FybmluZztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTtcbiAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIHByb3BzID0ge307XG5cbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkICVzLicsIGVsZW1lbnQpIDogdm9pZCAwO1xuXG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMDtcbiAgdmFyIG5leHROYW1lID0gdm9pZCAwO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgIWRpZFdhcm5BYm91dE1hcHMgPyB3YXJuaW5nJDEoZmFsc2UsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICAhKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSBudWxsIHx8IHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcblxuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG5cbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB2b2lkIDA7XG4gICAgdmFyIHByb3BUeXBlcyA9IHZvaWQgMDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wcztcbiAgICAgICAgICAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzO1xuICAgICAgICAgIC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgIShcbiAgICAgIC8vIERvIG5vdCB3YXJuIGZvciAwIGFyZ3VtZW50cyBiZWNhdXNlIGl0IGNvdWxkIGJlIGR1ZSB0byB1c2FnZSBvZiB0aGUgJ2FyZ3VtZW50cycgb2JqZWN0XG4gICAgICByZW5kZXIubGVuZ3RoID09PSAwIHx8IHJlbmRlci5sZW5ndGggPT09IDIpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgIShyZW5kZXIuZGVmYXVsdFByb3BzID09IG51bGwgJiYgcmVuZGVyLnByb3BUeXBlcyA9PSBudWxsKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/JykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuICAhKGRpc3BhdGNoZXIgIT09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLicpIDogdm9pZCAwO1xuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICB7XG4gICAgISh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCkgPyB3YXJuaW5nJDEoZmFsc2UsICd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL2ZiLm1lL3J1bGVzLW9mLWhvb2tzJyA6ICcnKSA6IHZvaWQgMDtcblxuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0O1xuICAgICAgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHZvaWQgMDtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50UHJvcHMuX19zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50UHJvcHMuX19zb3VyY2U7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9ICdcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgJy4nO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcbiAgfVxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gIHZhciBwcm9wVHlwZXMgPSB2b2lkIDA7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fFxuICAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9wVHlwZXMpIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKTtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7XG5cbiAgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0ocHJvcHMpO1xuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmcgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnPCcgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyAnIC8+JztcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuICAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG4gIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG4vLyBIZWxwcyBpZGVudGlmeSBzaWRlIGVmZmVjdHMgaW4gYmVnaW4tcGhhc2UgbGlmZWN5Y2xlIGhvb2tzIGFuZCBzZXRTdGF0ZSByZWR1Y2VyczpcblxuXG4vLyBJbiBzb21lIGNhc2VzLCBTdHJpY3RNb2RlIHNob3VsZCBhbHNvIGRvdWJsZS1yZW5kZXIgbGlmZWN5Y2xlcy5cbi8vIFRoaXMgY2FuIGJlIGNvbmZ1c2luZyBmb3IgdGVzdHMgdGhvdWdoLFxuLy8gQW5kIGl0IGNhbiBiZSBiYWQgZm9yIHBlcmZvcm1hbmNlIGluIHByb2R1Y3Rpb24uXG4vLyBUaGlzIGZlYXR1cmUgZmxhZyBjYW4gYmUgdXNlZCB0byBjb250cm9sIHRoZSBiZWhhdmlvcjpcblxuXG4vLyBUbyBwcmVzZXJ2ZSB0aGUgXCJQYXVzZSBvbiBjYXVnaHQgZXhjZXB0aW9uc1wiIGJlaGF2aW9yIG9mIHRoZSBkZWJ1Z2dlciwgd2Vcbi8vIHJlcGxheSB0aGUgYmVnaW4gcGhhc2Ugb2YgYSBmYWlsZWQgY29tcG9uZW50IGluc2lkZSBpbnZva2VHdWFyZGVkQ2FsbGJhY2suXG5cblxuLy8gV2FybiBhYm91dCBkZXByZWNhdGVkLCBhc3luYy11bnNhZmUgbGlmZWN5Y2xlczsgcmVsYXRlcyB0byBSRkMgIzY6XG5cblxuLy8gR2F0aGVyIGFkdmFuY2VkIHRpbWluZyBtZXRyaWNzIGZvciBQcm9maWxlciBzdWJ0cmVlcy5cblxuXG4vLyBUcmFjZSB3aGljaCBpbnRlcmFjdGlvbnMgdHJpZ2dlciBlYWNoIGNvbW1pdC5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cbiAvLyBUT0RPOiB0cnVlPyBIZXJlIGl0IG1pZ2h0IGp1c3QgYmUgZmFsc2UuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIFJlYWN0IEZpcmU6IHByZXZlbnQgdGhlIHZhbHVlIGFuZCBjaGVja2VkIGF0dHJpYnV0ZXMgZnJvbSBzeW5jaW5nXG4vLyB3aXRoIHRoZWlyIHJlbGF0ZWQgRE9NIHByb3BlcnRpZXNcblxuXG4vLyBUaGVzZSBBUElzIHdpbGwgbm8gbG9uZ2VyIGJlIFwidW5zdGFibGVcIiBpbiB0aGUgdXBjb21pbmcgMTYuNyByZWxlYXNlLFxuLy8gQ29udHJvbCB0aGlzIGJlaGF2aW9yIHdpdGggYSBmbGFnIHRvIHN1cHBvcnQgMTYuNiBtaW5vciByZWxlYXNlcyBpbiB0aGUgbWVhbndoaWxlLlxudmFyIGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcyA9IGZhbHNlO1xuXG52YXIgUmVhY3QgPSB7XG4gIENoaWxkcmVuOiB7XG4gICAgbWFwOiBtYXBDaGlsZHJlbixcbiAgICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gICAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gICAgdG9BcnJheTogdG9BcnJheSxcbiAgICBvbmx5OiBvbmx5Q2hpbGRcbiAgfSxcblxuICBjcmVhdGVSZWY6IGNyZWF0ZVJlZixcbiAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IFB1cmVDb21wb25lbnQsXG5cbiAgY3JlYXRlQ29udGV4dDogY3JlYXRlQ29udGV4dCxcbiAgZm9yd2FyZFJlZjogZm9yd2FyZFJlZixcbiAgbGF6eTogbGF6eSxcbiAgbWVtbzogbWVtbyxcblxuICB1c2VDYWxsYmFjazogdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQ6IHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdDogdXNlRWZmZWN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlOiB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VEZWJ1Z1ZhbHVlOiB1c2VEZWJ1Z1ZhbHVlLFxuICB1c2VMYXlvdXRFZmZlY3Q6IHVzZUxheW91dEVmZmVjdCxcbiAgdXNlTWVtbzogdXNlTWVtbyxcbiAgdXNlUmVkdWNlcjogdXNlUmVkdWNlcixcbiAgdXNlUmVmOiB1c2VSZWYsXG4gIHVzZVN0YXRlOiB1c2VTdGF0ZSxcblxuICBGcmFnbWVudDogUkVBQ1RfRlJBR01FTlRfVFlQRSxcbiAgU3RyaWN0TW9kZTogUkVBQ1RfU1RSSUNUX01PREVfVFlQRSxcbiAgU3VzcGVuc2U6IFJFQUNUX1NVU1BFTlNFX1RZUEUsXG5cbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24sXG4gIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudCxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgdW5zdGFibGVfQ29uY3VycmVudE1vZGU6IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFLFxuICB1bnN0YWJsZV9Qcm9maWxlcjogUkVBQ1RfUFJPRklMRVJfVFlQRSxcblxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDogUmVhY3RTaGFyZWRJbnRlcm5hbHNcbn07XG5cbi8vIE5vdGU6IHNvbWUgQVBJcyBhcmUgYWRkZWQgd2l0aCBmZWF0dXJlIGZsYWdzLlxuLy8gTWFrZSBzdXJlIHRoYXQgc3RhYmxlIGJ1aWxkcyBmb3Igb3BlbiBzb3VyY2Vcbi8vIGRvbid0IG1vZGlmeSB0aGUgUmVhY3Qgb2JqZWN0IHRvIGF2b2lkIGRlb3B0cy5cbi8vIEFsc28gbGV0J3Mgbm90IGV4cG9zZSB0aGVpciBuYW1lcyBpbiBzdGFibGUgYnVpbGRzLlxuXG5pZiAoZW5hYmxlU3RhYmxlQ29uY3VycmVudE1vZGVBUElzKSB7XG4gIFJlYWN0LkNvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG4gIFJlYWN0LlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbiAgUmVhY3QudW5zdGFibGVfQ29uY3VycmVudE1vZGUgPSB1bmRlZmluZWQ7XG4gIFJlYWN0LnVuc3RhYmxlX1Byb2ZpbGVyID0gdW5kZWZpbmVkO1xufVxuXG5cblxudmFyIFJlYWN0JDIgPSBPYmplY3QuZnJlZXplKHtcblx0ZGVmYXVsdDogUmVhY3Rcbn0pO1xuXG52YXIgUmVhY3QkMyA9ICggUmVhY3QkMiAmJiBSZWFjdCApIHx8IFJlYWN0JDI7XG5cbi8vIFRPRE86IGRlY2lkZSBvbiB0aGUgdG9wLWxldmVsIGV4cG9ydCBmb3JtLlxuLy8gVGhpcyBpcyBoYWNreSBidXQgbWFrZXMgaXQgd29yayB3aXRoIGJvdGggUm9sbHVwIGFuZCBKZXN0LlxudmFyIHJlYWN0ID0gUmVhY3QkMy5kZWZhdWx0IHx8IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBTdHlsaXMgZnJvbSAnc3R5bGlzL3N0eWxpcy5taW4nO1xuaW1wb3J0IF9pbnNlcnRSdWxlUGx1Z2luIGZyb20gJ3N0eWxpcy1ydWxlLXNoZWV0JztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIGNyZWF0ZUNvbnRleHQsIENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzVmFsaWRFbGVtZW50VHlwZSwgRm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdmFsaWRBdHRyIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ21lcmdlLWFueXRoaW5nJztcblxuLy8gXG5cbnZhciBpbnRlcmxlYXZlID0gKGZ1bmN0aW9uIChzdHJpbmdzLCBpbnRlcnBvbGF0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gW3N0cmluZ3NbMF1dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbnRlcnBvbGF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIHJlc3VsdC5wdXNoKGludGVycG9sYXRpb25zW2ldLCBzdHJpbmdzW2kgKyAxXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuLy8gXG52YXIgaXNQbGFpbk9iamVjdCA9IChmdW5jdGlvbiAoeCkge1xuICByZXR1cm4gKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih4KSkgPT09ICdvYmplY3QnICYmIHguY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn0pO1xuXG4vLyBcbnZhciBFTVBUWV9BUlJBWSA9IE9iamVjdC5mcmVlemUoW10pO1xudmFyIEVNUFRZX09CSkVDVCA9IE9iamVjdC5mcmVlemUoe30pO1xuXG4vLyBcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbic7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHRhcmdldCkge1xuICByZXR1cm4gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiB0YXJnZXQgOiBmYWxzZSkgfHwgdGFyZ2V0LmRpc3BsYXlOYW1lIHx8IHRhcmdldC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGlzU3RhdGVsZXNzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgISh0ZXN0LnByb3RvdHlwZSAmJiB0ZXN0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkID09PSAnc3RyaW5nJztcbn1cblxuLy8gXG5cbnZhciBTQ19BVFRSID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIChwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUiB8fCBwcm9jZXNzLmVudi5TQ19BVFRSKSB8fCAnZGF0YS1zdHlsZWQnO1xuXG52YXIgU0NfVkVSU0lPTl9BVFRSID0gJ2RhdGEtc3R5bGVkLXZlcnNpb24nO1xuXG52YXIgU0NfU1RSRUFNX0FUVFIgPSAnZGF0YS1zdHlsZWQtc3RyZWFtZWQnO1xuXG52YXIgSVNfQlJPV1NFUiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdIVE1MRWxlbWVudCcgaW4gd2luZG93O1xuXG52YXIgRElTQUJMRV9TUEVFRFkgPSB0eXBlb2YgU0NfRElTQUJMRV9TUEVFRFkgPT09ICdib29sZWFuJyAmJiBTQ19ESVNBQkxFX1NQRUVEWSB8fCB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSB8fCBwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSkgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuLy8gU2hhcmVkIGVtcHR5IGV4ZWN1dGlvbiBjb250ZXh0IHdoZW4gZ2VuZXJhdGluZyBzdGF0aWMgc3R5bGVzXG52YXIgU1RBVElDX0VYRUNVVElPTl9DT05URVhUID0ge307XG5cbi8vIFxuXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKi9cbnZhciBFUlJPUlMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8ge1xuICBcIjFcIjogXCJDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJXMuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNvbnN1bWVkIGEgYFNlcnZlclN0eWxlU2hlZXRgJ3Mgc3R5bGVzISBgU2VydmVyU3R5bGVTaGVldGAgaXMgYSBvbmUgb2ZmIGluc3RhbmNlIGZvciBlYWNoIHNlcnZlci1zaWRlIHJlbmRlciBjeWNsZS5cXG5cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJldXNlIGl0IGFjcm9zcyByZW5kZXJzP1xcbi0gQXJlIHlvdSBhY2NpZGVudGFsbHkgY2FsbGluZyBjb2xsZWN0U3R5bGVzIHR3aWNlP1xcblxcblwiLFxuICBcIjNcIjogXCJTdHJlYW1pbmcgU1NSIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudDsgUGxlYXNlIGRvIG5vdCB0cnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgYnJvd3Nlci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiVGhlIGBTdHlsZVNoZWV0TWFuYWdlcmAgZXhwZWN0cyBhIHZhbGlkIHRhcmdldCBvciBzaGVldCBwcm9wIVxcblxcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBjbGllbnQgYW5kIGlzIHlvdXIgdGFyZ2V0IGZhbHN5P1xcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBzZXJ2ZXIgYW5kIGlzIHRoZSBzaGVldCBmYWxzeT9cXG5cXG5cIixcbiAgXCI1XCI6IFwiVGhlIGNsb25lIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgY2xpZW50IVxcblxcbi0gQXJlIHlvdSBydW5uaW5nIGluIGEgY2xpZW50LWxpa2UgZW52aXJvbm1lbnQgb24gdGhlIHNlcnZlcj9cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJ1biBTU1Igb24gdGhlIGNsaWVudD9cXG5cXG5cIixcbiAgXCI2XCI6IFwiVHJ5aW5nIHRvIGluc2VydCBhIG5ldyBzdHlsZSB0YWcsIGJ1dCB0aGUgZ2l2ZW4gTm9kZSBpcyB1bm1vdW50ZWQhXFxuXFxuLSBBcmUgeW91IHVzaW5nIGEgY3VzdG9tIHRhcmdldCB0aGF0IGlzbid0IG1vdW50ZWQ/XFxuLSBEb2VzIHlvdXIgZG9jdW1lbnQgbm90IGhhdmUgYSB2YWxpZCBoZWFkIGVsZW1lbnQ/XFxuLSBIYXZlIHlvdSBhY2NpZGVudGFsbHkgcmVtb3ZlZCBhIHN0eWxlIHRhZyBtYW51YWxseT9cXG5cXG5cIixcbiAgXCI3XCI6IFwiVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFxcXCJ0aGVtZVxcXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXFxcInRoZW1lXFxcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiTWlzc2luZyBkb2N1bWVudCBgPGhlYWQ+YFxcblxcblwiLFxuICBcIjEwXCI6IFwiQ2Fubm90IGZpbmQgYSBTdHlsZVNoZWV0IGluc3RhbmNlLiBVc3VhbGx5IHRoaXMgaGFwcGVucyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29waWVzIG9mIHN0eWxlZC1jb21wb25lbnRzIGxvYWRlZCBhdCBvbmNlLiBDaGVjayBvdXQgdGhpcyBpc3N1ZSBmb3IgaG93IHRvIHRyb3VibGVzaG9vdCBhbmQgZml4IHRoZSBjb21tb24gY2FzZXMgd2hlcmUgdGhpcyBzaXR1YXRpb24gY2FuIGhhcHBlbjogaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2lzc3Vlcy8xOTQxI2lzc3VlY29tbWVudC00MTc4NjIwMjFcXG5cXG5cIixcbiAgXCIxMVwiOiBcIl9UaGlzIGVycm9yIHdhcyByZXBsYWNlZCB3aXRoIGEgZGV2LXRpbWUgd2FybmluZywgaXQgd2lsbCBiZSBkZWxldGVkIGZvciB2NCBmaW5hbC5fIFtjcmVhdGVHbG9iYWxTdHlsZV0gcmVjZWl2ZWQgY2hpbGRyZW4gd2hpY2ggd2lsbCBub3QgYmUgcmVuZGVyZWQuIFBsZWFzZSB1c2UgdGhlIGNvbXBvbmVudCB3aXRob3V0IHBhc3NpbmcgY2hpbGRyZW4gZWxlbWVudHMuXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJJdCBzZWVtcyB5b3UgYXJlIGludGVycG9sYXRpbmcgYSBrZXlmcmFtZSBkZWNsYXJhdGlvbiAoJXMpIGludG8gYW4gdW50YWdnZWQgc3RyaW5nLiBUaGlzIHdhcyBzdXBwb3J0ZWQgaW4gc3R5bGVkLWNvbXBvbmVudHMgdjMsIGJ1dCBpcyBub3QgbG9uZ2VyIHN1cHBvcnRlZCBpbiB2NCBhcyBrZXlmcmFtZXMgYXJlIG5vdyBpbmplY3RlZCBvbi1kZW1hbmQuIFBsZWFzZSB3cmFwIHlvdXIgc3RyaW5nIGluIHRoZSBjc3NcXFxcYFxcXFxgIGhlbHBlciAoc2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjc3MpLCB3aGljaCBlbnN1cmVzIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGNvcnJlY3RseS5cXG5cXG5cIixcbiAgXCIxM1wiOiBcIiVzIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cXG5cIlxufSA6IHt9O1xuXG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICovXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIHZhciBhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYiA9IFtdO1xuXG4gIGZvciAodmFyIGMgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBjIDwgbGVuOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYXJndW1lbnRzLmxlbmd0aCA8PSBjID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcblxuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKi9cblxudmFyIFN0eWxlZENvbXBvbmVudHNFcnJvciA9IGZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgaW5oZXJpdHMoU3R5bGVkQ29tcG9uZW50c0Vycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudHNFcnJvcihjb2RlKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVkQ29tcG9uZW50c0Vycm9yKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXJyb3IuY2FsbCh0aGlzLCAnQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvcGFja2FnZXMvc3R5bGVkLWNvbXBvbmVudHMvc3JjL3V0aWxzL2Vycm9ycy5tZCMnICsgY29kZSArICcgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyArIChpbnRlcnBvbGF0aW9ucy5sZW5ndGggPiAwID8gJyBBZGRpdGlvbmFsIGFyZ3VtZW50czogJyArIGludGVycG9sYXRpb25zLmpvaW4oJywgJykgOiAnJykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXJyb3IuY2FsbCh0aGlzLCBmb3JtYXQuYXBwbHkodW5kZWZpbmVkLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKS50cmltKCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFN0eWxlZENvbXBvbmVudHNFcnJvcjtcbn0oRXJyb3IpO1xuXG4vLyBcbnZhciBTQ19DT01QT05FTlRfSUQgPSAvXlteXFxTXFxuXSo/XFwvXFwqIHNjLWNvbXBvbmVudC1pZDpcXHMqKFxcUyspXFxzK1xcKlxcLy9nbTtcblxudmFyIGV4dHJhY3RDb21wcyA9IChmdW5jdGlvbiAobWF5YmVDU1MpIHtcbiAgdmFyIGNzcyA9ICcnICsgKG1heWJlQ1NTIHx8ICcnKTsgLy8gRGVmaW5pdGVseSBhIHN0cmluZywgYW5kIGEgY2xvbmVcbiAgdmFyIGV4aXN0aW5nQ29tcG9uZW50cyA9IFtdO1xuICBjc3MucmVwbGFjZShTQ19DT01QT05FTlRfSUQsIGZ1bmN0aW9uIChtYXRjaCwgY29tcG9uZW50SWQsIG1hdGNoSW5kZXgpIHtcbiAgICBleGlzdGluZ0NvbXBvbmVudHMucHVzaCh7IGNvbXBvbmVudElkOiBjb21wb25lbnRJZCwgbWF0Y2hJbmRleDogbWF0Y2hJbmRleCB9KTtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuICByZXR1cm4gZXhpc3RpbmdDb21wb25lbnRzLm1hcChmdW5jdGlvbiAoX3JlZiwgaSkge1xuICAgIHZhciBjb21wb25lbnRJZCA9IF9yZWYuY29tcG9uZW50SWQsXG4gICAgICAgIG1hdGNoSW5kZXggPSBfcmVmLm1hdGNoSW5kZXg7XG5cbiAgICB2YXIgbmV4dENvbXAgPSBleGlzdGluZ0NvbXBvbmVudHNbaSArIDFdO1xuICAgIHZhciBjc3NGcm9tRE9NID0gbmV4dENvbXAgPyBjc3Muc2xpY2UobWF0Y2hJbmRleCwgbmV4dENvbXAubWF0Y2hJbmRleCkgOiBjc3Muc2xpY2UobWF0Y2hJbmRleCk7XG4gICAgcmV0dXJuIHsgY29tcG9uZW50SWQ6IGNvbXBvbmVudElkLCBjc3NGcm9tRE9NOiBjc3NGcm9tRE9NIH07XG4gIH0pO1xufSk7XG5cbi8vIFxuXG52YXIgQ09NTUVOVF9SRUdFWCA9IC9eXFxzKlxcL1xcLy4qJC9nbTtcblxuLy8gTk9URTogVGhpcyBzdHlsaXMgaW5zdGFuY2UgaXMgb25seSB1c2VkIHRvIHNwbGl0IHJ1bGVzIGZyb20gU1NSJ2Qgc3R5bGUgdGFnc1xudmFyIHN0eWxpc1NwbGl0dGVyID0gbmV3IFN0eWxpcyh7XG4gIGdsb2JhbDogZmFsc2UsXG4gIGNhc2NhZGU6IHRydWUsXG4gIGtleWZyYW1lOiBmYWxzZSxcbiAgcHJlZml4OiBmYWxzZSxcbiAgY29tcHJlc3M6IGZhbHNlLFxuICBzZW1pY29sb246IHRydWVcbn0pO1xuXG52YXIgc3R5bGlzID0gbmV3IFN0eWxpcyh7XG4gIGdsb2JhbDogZmFsc2UsXG4gIGNhc2NhZGU6IHRydWUsXG4gIGtleWZyYW1lOiBmYWxzZSxcbiAgcHJlZml4OiB0cnVlLFxuICBjb21wcmVzczogZmFsc2UsXG4gIHNlbWljb2xvbjogZmFsc2UgLy8gTk9URTogVGhpcyBtZWFucyBcImF1dG9jb21wbGV0ZSBtaXNzaW5nIHNlbWljb2xvbnNcIlxufSk7XG5cbi8vIFdyYXAgYGluc2VydFJ1bGVQbHVnaW4gdG8gYnVpbGQgYSBsaXN0IG9mIHJ1bGVzLFxuLy8gYW5kIHRoZW4gbWFrZSBvdXIgb3duIHBsdWdpbiB0byByZXR1cm4gdGhlIHJ1bGVzLiBUaGlzXG4vLyBtYWtlcyBpdCBlYXNpZXIgdG8gaG9vayBpbnRvIHRoZSBleGlzdGluZyBTU1IgYXJjaGl0ZWN0dXJlXG5cbnZhciBwYXJzaW5nUnVsZXMgPSBbXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG52YXIgcmV0dXJuUnVsZXNQbHVnaW4gPSBmdW5jdGlvbiByZXR1cm5SdWxlc1BsdWdpbihjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSAtMikge1xuICAgIHZhciBwYXJzZWRSdWxlcyA9IHBhcnNpbmdSdWxlcztcbiAgICBwYXJzaW5nUnVsZXMgPSBbXTtcbiAgICByZXR1cm4gcGFyc2VkUnVsZXM7XG4gIH1cbn07XG5cbnZhciBwYXJzZVJ1bGVzUGx1Z2luID0gX2luc2VydFJ1bGVQbHVnaW4oZnVuY3Rpb24gKHJ1bGUpIHtcbiAgcGFyc2luZ1J1bGVzLnB1c2gocnVsZSk7XG59KTtcblxudmFyIF9jb21wb25lbnRJZCA9IHZvaWQgMDtcbnZhciBfc2VsZWN0b3IgPSB2b2lkIDA7XG52YXIgX3NlbGVjdG9yUmVnZXhwID0gdm9pZCAwO1xuXG52YXIgc2VsZlJlZmVyZW5jZVJlcGxhY2VyID0gZnVuY3Rpb24gc2VsZlJlZmVyZW5jZVJlcGxhY2VyKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICBpZiAoXG4gIC8vIHRoZSBmaXJzdCBzZWxmLXJlZiBpcyBhbHdheXMgdW50b3VjaGVkXG4gIG9mZnNldCA+IDAgJiZcbiAgLy8gdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IHR3byBzZWxmLXJlZnMgdG8gZG8gYSByZXBsYWNlbWVudCAoLmIgPiAuYilcbiAgc3RyaW5nLnNsaWNlKDAsIG9mZnNldCkuaW5kZXhPZihfc2VsZWN0b3IpICE9PSAtMSAmJlxuICAvLyBubyBjb25zZWN1dGl2ZSBzZWxmIHJlZnMgKC5iLmIpOyB0aGF0IGlzIGEgcHJlY2VkZW5jZSBib29zdCBhbmQgdHJlYXRlZCBkaWZmZXJlbnRseVxuICBzdHJpbmcuc2xpY2Uob2Zmc2V0IC0gX3NlbGVjdG9yLmxlbmd0aCwgb2Zmc2V0KSAhPT0gX3NlbGVjdG9yKSB7XG4gICAgcmV0dXJuICcuJyArIF9jb21wb25lbnRJZDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaDtcbn07XG5cbi8qKlxuICogV2hlbiB3cml0aW5nIGEgc3R5bGUgbGlrZVxuICpcbiAqICYgKyAmIHtcbiAqICAgY29sb3I6IHJlZDtcbiAqIH1cbiAqXG4gKiBUaGUgc2Vjb25kIGFtcGVyc2FuZCBzaG91bGQgYmUgYSByZWZlcmVuY2UgdG8gdGhlIHN0YXRpYyBjb21wb25lbnQgY2xhc3MuIHN0eWxpc1xuICogaGFzIG5vIGtub3dsZWRnZSBvZiBzdGF0aWMgY2xhc3Mgc28gd2UgaGF2ZSB0byBpbnRlbGxpZ2VudGx5IHJlcGxhY2UgdGhlIGJhc2Ugc2VsZWN0b3IuXG4gKi9cbnZhciBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4gPSBmdW5jdGlvbiBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4oY29udGV4dCwgXywgc2VsZWN0b3JzKSB7XG4gIGlmIChjb250ZXh0ID09PSAyICYmIHNlbGVjdG9ycy5sZW5ndGggJiYgc2VsZWN0b3JzWzBdLmxhc3RJbmRleE9mKF9zZWxlY3RvcikgPiAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgc2VsZWN0b3JzWzBdID0gc2VsZWN0b3JzWzBdLnJlcGxhY2UoX3NlbGVjdG9yUmVnZXhwLCBzZWxmUmVmZXJlbmNlUmVwbGFjZXIpO1xuICB9XG59O1xuXG5zdHlsaXMudXNlKFtzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4sIHBhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSk7XG5zdHlsaXNTcGxpdHRlci51c2UoW3BhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSk7XG5cbnZhciBzcGxpdEJ5UnVsZXMgPSBmdW5jdGlvbiBzcGxpdEJ5UnVsZXMoY3NzKSB7XG4gIHJldHVybiBzdHlsaXNTcGxpdHRlcignJywgY3NzKTtcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVJ1bGVzKHJ1bGVzLCBzZWxlY3RvciwgcHJlZml4KSB7XG4gIHZhciBjb21wb25lbnRJZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJyYnO1xuXG4gIHZhciBmbGF0Q1NTID0gcnVsZXMuam9pbignJykucmVwbGFjZShDT01NRU5UX1JFR0VYLCAnJyk7IC8vIHJlcGxhY2UgSlMgY29tbWVudHNcblxuICB2YXIgY3NzU3RyID0gc2VsZWN0b3IgJiYgcHJlZml4ID8gcHJlZml4ICsgJyAnICsgc2VsZWN0b3IgKyAnIHsgJyArIGZsYXRDU1MgKyAnIH0nIDogZmxhdENTUztcblxuICAvLyBzdHlsaXMgaGFzIG5vIGNvbmNlcHQgb2Ygc3RhdGUgdG8gYmUgcGFzc2VkIHRvIHBsdWdpbnNcbiAgLy8gYnV0IHNpbmNlIEpTIGlzIHNpbmdsZT10aHJlYWRlZCwgd2UgY2FuIHJlbHkgb24gdGhhdCB0byBlbnN1cmVcbiAgLy8gdGhlc2UgcHJvcGVydGllcyBzdGF5IGluIHN5bmMgd2l0aCB0aGUgY3VycmVudCBzdHlsaXMgcnVuXG4gIF9jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICBfc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgX3NlbGVjdG9yUmVnZXhwID0gbmV3IFJlZ0V4cCgnXFxcXCcgKyBfc2VsZWN0b3IgKyAnXFxcXGInLCAnZycpO1xuXG4gIHJldHVybiBzdHlsaXMocHJlZml4IHx8ICFzZWxlY3RvciA/ICcnIDogc2VsZWN0b3IsIGNzc1N0cik7XG59XG5cbi8vIFxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby11bmRlZiAqL1xuXG52YXIgZ2V0Tm9uY2UgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbn0pO1xuXG4vLyBcbi8qIFRoZXNlIGFyZSBoZWxwZXJzIGZvciB0aGUgU3R5bGVUYWdzIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGluamVjdGVkXG4gKiBydWxlIG5hbWVzIGZvciBlYWNoIChjb21wb25lbnQpIElEIHRoYXQgdGhleSdyZSBrZWVwaW5nIHRyYWNrIG9mLlxuICogVGhleSdyZSBjcnVjaWFsIGZvciBkZXRlY3Rpbmcgd2hldGhlciBhIG5hbWUgaGFzIGFscmVhZHkgYmVlblxuICogaW5qZWN0ZWQuXG4gKiAoVGhpcyBleGNsdWRlcyByZWh5ZHJhdGVkIG5hbWVzKSAqL1xuXG4vKiBhZGRzIGEgbmV3IElEOm5hbWUgcGFpcmluZyB0byBhIG5hbWVzIGRpY3Rpb25hcnkgKi9cbnZhciBhZGROYW1lRm9ySWQgPSBmdW5jdGlvbiBhZGROYW1lRm9ySWQobmFtZXMsIGlkLCBuYW1lKSB7XG4gIGlmIChuYW1lKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdmFyIG5hbWVzRm9ySWQgPSBuYW1lc1tpZF0gfHwgKG5hbWVzW2lkXSA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgIG5hbWVzRm9ySWRbbmFtZV0gPSB0cnVlO1xuICB9XG59O1xuXG4vKiByZXNldHMgYW4gSUQgZW50aXJlbHkgYnkgb3ZlcndyaXRpbmcgaXQgaW4gdGhlIGRpY3Rpb25hcnkgKi9cbnZhciByZXNldElkTmFtZXMgPSBmdW5jdGlvbiByZXNldElkTmFtZXMobmFtZXMsIGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBuYW1lc1tpZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xufTtcblxuLyogZmFjdG9yeSBmb3IgYSBuYW1lcyBkaWN0aW9uYXJ5IGNoZWNraW5nIHRoZSBleGlzdGFuY2Ugb2YgYW4gSUQ6bmFtZSBwYWlyaW5nICovXG52YXIgaGFzTmFtZUZvcklkID0gZnVuY3Rpb24gaGFzTmFtZUZvcklkKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZXNbaWRdICE9PSB1bmRlZmluZWQgJiYgbmFtZXNbaWRdW25hbWVdO1xuICB9O1xufTtcblxuLyogc3RyaW5naWZpZXMgbmFtZXMgZm9yIHRoZSBodG1sL2VsZW1lbnQgb3V0cHV0ICovXG52YXIgc3RyaW5naWZ5TmFtZXMgPSBmdW5jdGlvbiBzdHJpbmdpZnlOYW1lcyhuYW1lcykge1xuICB2YXIgc3RyID0gJyc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgZm9yICh2YXIgaWQgaW4gbmFtZXMpIHtcbiAgICBzdHIgKz0gT2JqZWN0LmtleXMobmFtZXNbaWRdKS5qb2luKCcgJykgKyAnICc7XG4gIH1cbiAgcmV0dXJuIHN0ci50cmltKCk7XG59O1xuXG4vKiBjbG9uZXMgdGhlIG5lc3RlZCBuYW1lcyBkaWN0aW9uYXJ5ICovXG52YXIgY2xvbmVOYW1lcyA9IGZ1bmN0aW9uIGNsb25lTmFtZXMobmFtZXMpIHtcbiAgdmFyIGNsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICBmb3IgKHZhciBpZCBpbiBuYW1lcykge1xuICAgIGNsb25lW2lkXSA9IF9leHRlbmRzKHt9LCBuYW1lc1tpZF0pO1xuICB9XG4gIHJldHVybiBjbG9uZTtcbn07XG5cbi8vIFxuXG4vKiBUaGVzZSBhcmUgaGVscGVycyB0aGF0IGRlYWwgd2l0aCB0aGUgaW5zZXJ0UnVsZSAoYWthIHNwZWVkeSkgQVBJXG4gKiBUaGV5IGFyZSB1c2VkIGluIHRoZSBTdHlsZVRhZ3MgYW5kIHNwZWNpZmljYWxseSB0aGUgc3BlZWR5IHRhZ1xuICovXG5cbi8qIHJldHJpZXZlIGEgc2hlZXQgZm9yIGEgZ2l2ZW4gc3R5bGUgdGFnICovXG52YXIgc2hlZXRGb3JUYWcgPSBmdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICBpZiAodGFnLnNoZWV0KSByZXR1cm4gdGFnLnNoZWV0O1xuXG4gIC8qIEZpcmVmb3ggcXVpcmsgcmVxdWlyZXMgdXMgdG8gc3RlcCB0aHJvdWdoIGFsbCBzdHlsZXNoZWV0cyB0byBmaW5kIG9uZSBvd25lZCBieSB0aGUgZ2l2ZW4gdGFnICovXG4gIHZhciBzaXplID0gZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIHZhciBzaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoc2hlZXQub3duZXJOb2RlID09PSB0YWcpIHJldHVybiBzaGVldDtcbiAgfVxuXG4gIC8qIHdlIHNob3VsZCBhbHdheXMgYmUgYWJsZSB0byBmaW5kIGEgdGFnICovXG4gIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMTApO1xufTtcblxuLyogaW5zZXJ0IGEgcnVsZSBzYWZlbHkgYW5kIHJldHVybiB3aGV0aGVyIGl0IHdhcyBhY3R1YWxseSBpbmplY3RlZCAqL1xudmFyIHNhZmVJbnNlcnRSdWxlID0gZnVuY3Rpb24gc2FmZUluc2VydFJ1bGUoc2hlZXQsIGNzc1J1bGUsIGluZGV4KSB7XG4gIC8qIGFib3J0IGVhcmx5IGlmIGNzc1J1bGUgc3RyaW5nIGlzIGZhbHN5ICovXG4gIGlmICghY3NzUnVsZSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXhJbmRleCA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblxuICB0cnkge1xuICAgIC8qIHVzZSBpbnNlcnRSdWxlIGFuZCBjYXAgcGFzc2VkIGluZGV4IHdpdGggbWF4SW5kZXggKG5vIG9mIGNzc1J1bGVzKSAqL1xuICAgIHNoZWV0Lmluc2VydFJ1bGUoY3NzUnVsZSwgaW5kZXggPD0gbWF4SW5kZXggPyBpbmRleCA6IG1heEluZGV4KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLyogYW55IGVycm9yIGluZGljYXRlcyBhbiBpbnZhbGlkIHJ1bGUgKi9cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qIGRlbGV0ZXMgYHNpemVgIHJ1bGVzIHN0YXJ0aW5nIGZyb20gYHJlbW92YWxJbmRleGAgKi9cbnZhciBkZWxldGVSdWxlcyA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGVzKHNoZWV0LCByZW1vdmFsSW5kZXgsIHNpemUpIHtcbiAgdmFyIGxvd2VyQm91bmQgPSByZW1vdmFsSW5kZXggLSBzaXplO1xuICBmb3IgKHZhciBpID0gcmVtb3ZhbEluZGV4OyBpID4gbG93ZXJCb3VuZDsgaSAtPSAxKSB7XG4gICAgc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgfVxufTtcblxuLy8gXG5cbi8qIHRoaXMgbWFya2VyIHNlcGFyYXRlcyBjb21wb25lbnQgc3R5bGVzIGFuZCBpcyBpbXBvcnRhbnQgZm9yIHJlaHlkcmF0aW9uICovXG52YXIgbWFrZVRleHRNYXJrZXIgPSBmdW5jdGlvbiBtYWtlVGV4dE1hcmtlcihpZCkge1xuICByZXR1cm4gJ1xcbi8qIHNjLWNvbXBvbmVudC1pZDogJyArIGlkICsgJyAqL1xcbic7XG59O1xuXG4vKiBhZGQgdXAgYWxsIG51bWJlcnMgaW4gYXJyYXkgdXAgdW50aWwgYW5kIGluY2x1ZGluZyB0aGUgaW5kZXggKi9cbnZhciBhZGRVcFVudGlsSW5kZXggPSBmdW5jdGlvbiBhZGRVcFVudGlsSW5kZXgoc2l6ZXMsIGluZGV4KSB7XG4gIHZhciB0b3RhbFVwVG9JbmRleCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IGluZGV4OyBpICs9IDEpIHtcbiAgICB0b3RhbFVwVG9JbmRleCArPSBzaXplc1tpXTtcbiAgfVxuXG4gIHJldHVybiB0b3RhbFVwVG9JbmRleDtcbn07XG5cbi8qIGNyZWF0ZSBhIG5ldyBzdHlsZSB0YWcgYWZ0ZXIgbGFzdEVsICovXG52YXIgbWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKHRhcmdldCwgdGFnRWwsIGluc2VydEJlZm9yZSkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBlbC5zZXRBdHRyaWJ1dGUoU0NfQVRUUiwgJycpO1xuICBlbC5zZXRBdHRyaWJ1dGUoU0NfVkVSU0lPTl9BVFRSLCBcIjQuMy4yXCIpO1xuXG4gIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gIGlmIChub25jZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gIH1cblxuICAvKiBXb3JrIGFyb3VuZCBpbnNlcnRSdWxlIHF1aXJrIGluIEVkZ2VIVE1MICovXG4gIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG5cbiAgaWYgKHRhcmdldCAmJiAhdGFnRWwpIHtcbiAgICAvKiBBcHBlbmQgdG8gdGFyZ2V0IHdoZW4gbm8gcHJldmlvdXMgZWxlbWVudCB3YXMgcGFzc2VkICovXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXRhZ0VsIHx8ICF0YXJnZXQgfHwgIXRhZ0VsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNik7XG4gICAgfVxuXG4gICAgLyogSW5zZXJ0IG5ldyBzdHlsZSB0YWcgYWZ0ZXIgdGhlIHByZXZpb3VzIG9uZSAqL1xuICAgIHRhZ0VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBpbnNlcnRCZWZvcmUgPyB0YWdFbCA6IHRhZ0VsLm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIHJldHVybiBlbDtcbn07XG5cbi8qIHRha2VzIGEgY3NzIGZhY3RvcnkgZnVuY3Rpb24gYW5kIG91dHB1dHMgYW4gaHRtbCBzdHlsZWQgdGFnIGZhY3RvcnkgKi9cbnZhciB3cmFwQXNIdG1sVGFnID0gZnVuY3Rpb24gd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWRkaXRpb25hbEF0dHJzKSB7XG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICB2YXIgYXR0cnMgPSBbbm9uY2UgJiYgJ25vbmNlPVwiJyArIG5vbmNlICsgJ1wiJywgU0NfQVRUUiArICc9XCInICsgc3RyaW5naWZ5TmFtZXMobmFtZXMpICsgJ1wiJywgU0NfVkVSU0lPTl9BVFRSICsgJz1cIicgKyBcIjQuMy4yXCIgKyAnXCInLCBhZGRpdGlvbmFsQXR0cnNdO1xuXG4gICAgdmFyIGh0bWxBdHRyID0gYXR0cnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICByZXR1cm4gJzxzdHlsZSAnICsgaHRtbEF0dHIgKyAnPicgKyBjc3MoKSArICc8L3N0eWxlPic7XG4gIH07XG59O1xuXG4vKiB0YWtlcyBhIGNzcyBmYWN0b3J5IGZ1bmN0aW9uIGFuZCBvdXRwdXRzIGFuIGVsZW1lbnQgZmFjdG9yeSAqL1xudmFyIHdyYXBBc0VsZW1lbnQgPSBmdW5jdGlvbiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzO1xuXG4gICAgdmFyIHByb3BzID0gKF9wcm9wcyA9IHt9LCBfcHJvcHNbU0NfQVRUUl0gPSBzdHJpbmdpZnlOYW1lcyhuYW1lcyksIF9wcm9wc1tTQ19WRVJTSU9OX0FUVFJdID0gXCI0LjMuMlwiLCBfcHJvcHMpO1xuXG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHByb3BzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGNzcygpIH0gfSkpO1xuICB9O1xufTtcblxudmFyIGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeSA9IGZ1bmN0aW9uIGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeShtYXJrZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcmtlcnMpO1xuICB9O1xufTtcblxuLyogc3BlZWR5IHRhZ3MgdXRpbGlzZSBpbnNlcnRSdWxlICovXG52YXIgbWFrZVNwZWVkeVRhZyA9IGZ1bmN0aW9uIG1ha2VTcGVlZHlUYWcoZWwsIGdldEltcG9ydFJ1bGVUYWcpIHtcbiAgdmFyIG5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIG1hcmtlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc2l6ZXMgPSBbXTtcblxuICB2YXIgZXh0cmFjdEltcG9ydCA9IGdldEltcG9ydFJ1bGVUYWcgIT09IHVuZGVmaW5lZDtcbiAgLyogaW5kaWNhdGVzIHdoZXRoZXIgZ2V0SW1wb3J0UnVsZVRhZyB3YXMgY2FsbGVkICovXG4gIHZhciB1c2VkSW1wb3J0UnVsZVRhZyA9IGZhbHNlO1xuXG4gIHZhciBpbnNlcnRNYXJrZXIgPSBmdW5jdGlvbiBpbnNlcnRNYXJrZXIoaWQpIHtcbiAgICB2YXIgcHJldiA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChwcmV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIG1hcmtlcnNbaWRdID0gc2l6ZXMubGVuZ3RoO1xuICAgIHNpemVzLnB1c2goMCk7XG4gICAgcmVzZXRJZE5hbWVzKG5hbWVzLCBpZCk7XG5cbiAgICByZXR1cm4gbWFya2Vyc1tpZF07XG4gIH07XG5cbiAgdmFyIGluc2VydFJ1bGVzID0gZnVuY3Rpb24gaW5zZXJ0UnVsZXMoaWQsIGNzc1J1bGVzLCBuYW1lKSB7XG4gICAgdmFyIG1hcmtlciA9IGluc2VydE1hcmtlcihpZCk7XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcoZWwpO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IGFkZFVwVW50aWxJbmRleChzaXplcywgbWFya2VyKTtcblxuICAgIHZhciBpbmplY3RlZFJ1bGVzID0gMDtcbiAgICB2YXIgaW1wb3J0UnVsZXMgPSBbXTtcbiAgICB2YXIgY3NzUnVsZXNTaXplID0gY3NzUnVsZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3NSdWxlc1NpemU7IGkgKz0gMSkge1xuICAgICAgdmFyIGNzc1J1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgIHZhciBtYXlIYXZlSW1wb3J0ID0gZXh0cmFjdEltcG9ydDsgLyogQGltcG9ydCBydWxlcyBhcmUgcmVvcmRlcmVkIHRvIGFwcGVhciBmaXJzdCAqL1xuICAgICAgaWYgKG1heUhhdmVJbXBvcnQgJiYgY3NzUnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xKSB7XG4gICAgICAgIGltcG9ydFJ1bGVzLnB1c2goY3NzUnVsZSk7XG4gICAgICB9IGVsc2UgaWYgKHNhZmVJbnNlcnRSdWxlKHNoZWV0LCBjc3NSdWxlLCBpbnNlcnRJbmRleCArIGluamVjdGVkUnVsZXMpKSB7XG4gICAgICAgIG1heUhhdmVJbXBvcnQgPSBmYWxzZTtcbiAgICAgICAgaW5qZWN0ZWRSdWxlcyArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleHRyYWN0SW1wb3J0ICYmIGltcG9ydFJ1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHVzZWRJbXBvcnRSdWxlVGFnID0gdHJ1ZTtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGdldEltcG9ydFJ1bGVUYWcoKS5pbnNlcnRSdWxlcyhpZCArICctaW1wb3J0JywgaW1wb3J0UnVsZXMpO1xuICAgIH1cblxuICAgIHNpemVzW21hcmtlcl0gKz0gaW5qZWN0ZWRSdWxlczsgLyogYWRkIHVwIG5vIG9mIGluamVjdGVkIHJ1bGVzICovXG4gICAgYWRkTmFtZUZvcklkKG5hbWVzLCBpZCwgbmFtZSk7XG4gIH07XG5cbiAgdmFyIHJlbW92ZVJ1bGVzID0gZnVuY3Rpb24gcmVtb3ZlUnVsZXMoaWQpIHtcbiAgICB2YXIgbWFya2VyID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKG1hcmtlciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICB2YXIgc2l6ZSA9IHNpemVzW21hcmtlcl07XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcoZWwpO1xuICAgIHZhciByZW1vdmFsSW5kZXggPSBhZGRVcFVudGlsSW5kZXgoc2l6ZXMsIG1hcmtlcikgLSAxO1xuICAgIGRlbGV0ZVJ1bGVzKHNoZWV0LCByZW1vdmFsSW5kZXgsIHNpemUpO1xuICAgIHNpemVzW21hcmtlcl0gPSAwO1xuICAgIHJlc2V0SWROYW1lcyhuYW1lcywgaWQpO1xuXG4gICAgaWYgKGV4dHJhY3RJbXBvcnQgJiYgdXNlZEltcG9ydFJ1bGVUYWcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGdldEltcG9ydFJ1bGVUYWcoKS5yZW1vdmVSdWxlcyhpZCArICctaW1wb3J0Jyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIF9zaGVldEZvclRhZyA9IHNoZWV0Rm9yVGFnKGVsKSxcbiAgICAgICAgY3NzUnVsZXMgPSBfc2hlZXRGb3JUYWcuY3NzUnVsZXM7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgZm9yICh2YXIgaWQgaW4gbWFya2Vycykge1xuICAgICAgc3RyICs9IG1ha2VUZXh0TWFya2VyKGlkKTtcbiAgICAgIHZhciBtYXJrZXIgPSBtYXJrZXJzW2lkXTtcbiAgICAgIHZhciBlbmQgPSBhZGRVcFVudGlsSW5kZXgoc2l6ZXMsIG1hcmtlcik7XG4gICAgICB2YXIgc2l6ZSA9IHNpemVzW21hcmtlcl07XG4gICAgICBmb3IgKHZhciBpID0gZW5kIC0gc2l6ZTsgaSA8IGVuZDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBydWxlID0gY3NzUnVsZXNbaV07XG4gICAgICAgIGlmIChydWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHIgKz0gcnVsZS5jc3NUZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNSk7XG4gICAgfSxcblxuICAgIGNzczogY3NzLFxuICAgIGdldElkczogZ2V0SWRzRnJvbU1hcmtlcnNGYWN0b3J5KG1hcmtlcnMpLFxuICAgIGhhc05hbWVGb3JJZDogaGFzTmFtZUZvcklkKG5hbWVzKSxcbiAgICBpbnNlcnRNYXJrZXI6IGluc2VydE1hcmtlcixcbiAgICBpbnNlcnRSdWxlczogaW5zZXJ0UnVsZXMsXG4gICAgcmVtb3ZlUnVsZXM6IHJlbW92ZVJ1bGVzLFxuICAgIHNlYWxlZDogZmFsc2UsXG4gICAgc3R5bGVUYWc6IGVsLFxuICAgIHRvRWxlbWVudDogd3JhcEFzRWxlbWVudChjc3MsIG5hbWVzKSxcbiAgICB0b0hUTUw6IHdyYXBBc0h0bWxUYWcoY3NzLCBuYW1lcylcbiAgfTtcbn07XG5cbnZhciBtYWtlVGV4dE5vZGUgPSBmdW5jdGlvbiBtYWtlVGV4dE5vZGUoaWQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1ha2VUZXh0TWFya2VyKGlkKSk7XG59O1xuXG52YXIgbWFrZUJyb3dzZXJUYWcgPSBmdW5jdGlvbiBtYWtlQnJvd3NlclRhZyhlbCwgZ2V0SW1wb3J0UnVsZVRhZykge1xuICB2YXIgbmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbWFya2VycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgdmFyIGV4dHJhY3RJbXBvcnQgPSBnZXRJbXBvcnRSdWxlVGFnICE9PSB1bmRlZmluZWQ7XG5cbiAgLyogaW5kaWNhdGVzIHdoZXRoZXIgZ2V0SW1wb3J0UnVsZVRhZyB3YXMgY2FsbGVkICovXG4gIHZhciB1c2VkSW1wb3J0UnVsZVRhZyA9IGZhbHNlO1xuXG4gIHZhciBpbnNlcnRNYXJrZXIgPSBmdW5jdGlvbiBpbnNlcnRNYXJrZXIoaWQpIHtcbiAgICB2YXIgcHJldiA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChwcmV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIG1hcmtlcnNbaWRdID0gbWFrZVRleHROb2RlKGlkKTtcbiAgICBlbC5hcHBlbmRDaGlsZChtYXJrZXJzW2lkXSk7XG4gICAgbmFtZXNbaWRdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHJldHVybiBtYXJrZXJzW2lkXTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgbWFya2VyID0gaW5zZXJ0TWFya2VyKGlkKTtcbiAgICB2YXIgaW1wb3J0UnVsZXMgPSBbXTtcbiAgICB2YXIgY3NzUnVsZXNTaXplID0gY3NzUnVsZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3NSdWxlc1NpemU7IGkgKz0gMSkge1xuICAgICAgdmFyIHJ1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgIHZhciBtYXlIYXZlSW1wb3J0ID0gZXh0cmFjdEltcG9ydDtcbiAgICAgIGlmIChtYXlIYXZlSW1wb3J0ICYmIHJ1bGUuaW5kZXhPZignQGltcG9ydCcpICE9PSAtMSkge1xuICAgICAgICBpbXBvcnRSdWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF5SGF2ZUltcG9ydCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2VwYXJhdG9yID0gaSA9PT0gY3NzUnVsZXNTaXplIC0gMSA/ICcnIDogJyAnO1xuICAgICAgICBtYXJrZXIuYXBwZW5kRGF0YSgnJyArIHJ1bGUgKyBzZXBhcmF0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZE5hbWVGb3JJZChuYW1lcywgaWQsIG5hbWUpO1xuXG4gICAgaWYgKGV4dHJhY3RJbXBvcnQgJiYgaW1wb3J0UnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdXNlZEltcG9ydFJ1bGVUYWcgPSB0cnVlO1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgZ2V0SW1wb3J0UnVsZVRhZygpLmluc2VydFJ1bGVzKGlkICsgJy1pbXBvcnQnLCBpbXBvcnRSdWxlcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZW1vdmVSdWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVJ1bGVzKGlkKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChtYXJrZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgLyogY3JlYXRlIG5ldyBlbXB0eSB0ZXh0IG5vZGUgYW5kIHJlcGxhY2UgdGhlIGN1cnJlbnQgb25lICovXG4gICAgdmFyIG5ld01hcmtlciA9IG1ha2VUZXh0Tm9kZShpZCk7XG4gICAgZWwucmVwbGFjZUNoaWxkKG5ld01hcmtlciwgbWFya2VyKTtcbiAgICBtYXJrZXJzW2lkXSA9IG5ld01hcmtlcjtcbiAgICByZXNldElkTmFtZXMobmFtZXMsIGlkKTtcblxuICAgIGlmIChleHRyYWN0SW1wb3J0ICYmIHVzZWRJbXBvcnRSdWxlVGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBnZXRJbXBvcnRSdWxlVGFnKCkucmVtb3ZlUnVsZXMoaWQgKyAnLWltcG9ydCcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICBzdHIgKz0gbWFya2Vyc1tpZF0uZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig1KTtcbiAgICB9LFxuXG4gICAgY3NzOiBjc3MsXG4gICAgZ2V0SWRzOiBnZXRJZHNGcm9tTWFya2Vyc0ZhY3RvcnkobWFya2VycyksXG4gICAgaGFzTmFtZUZvcklkOiBoYXNOYW1lRm9ySWQobmFtZXMpLFxuICAgIGluc2VydE1hcmtlcjogaW5zZXJ0TWFya2VyLFxuICAgIGluc2VydFJ1bGVzOiBpbnNlcnRSdWxlcyxcbiAgICByZW1vdmVSdWxlczogcmVtb3ZlUnVsZXMsXG4gICAgc2VhbGVkOiBmYWxzZSxcbiAgICBzdHlsZVRhZzogZWwsXG4gICAgdG9FbGVtZW50OiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpLFxuICAgIHRvSFRNTDogd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKVxuICB9O1xufTtcblxudmFyIG1ha2VTZXJ2ZXJUYWcgPSBmdW5jdGlvbiBtYWtlU2VydmVyVGFnKG5hbWVzQXJnLCBtYXJrZXJzQXJnKSB7XG4gIHZhciBuYW1lcyA9IG5hbWVzQXJnID09PSB1bmRlZmluZWQgPyBPYmplY3QuY3JlYXRlKG51bGwpIDogbmFtZXNBcmc7XG4gIHZhciBtYXJrZXJzID0gbWFya2Vyc0FyZyA9PT0gdW5kZWZpbmVkID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IG1hcmtlcnNBcmc7XG5cbiAgdmFyIGluc2VydE1hcmtlciA9IGZ1bmN0aW9uIGluc2VydE1hcmtlcihpZCkge1xuICAgIHZhciBwcmV2ID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtlcnNbaWRdID0gWycnXTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgbWFya2VyID0gaW5zZXJ0TWFya2VyKGlkKTtcbiAgICBtYXJrZXJbMF0gKz0gY3NzUnVsZXMuam9pbignICcpO1xuICAgIGFkZE5hbWVGb3JJZChuYW1lcywgaWQsIG5hbWUpO1xuICB9O1xuXG4gIHZhciByZW1vdmVSdWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVJ1bGVzKGlkKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChtYXJrZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIG1hcmtlclswXSA9ICcnO1xuICAgIHJlc2V0SWROYW1lcyhuYW1lcywgaWQpO1xuICB9O1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICB2YXIgY3NzRm9ySWQgPSBtYXJrZXJzW2lkXVswXTtcbiAgICAgIGlmIChjc3NGb3JJZCkge1xuICAgICAgICBzdHIgKz0gbWFrZVRleHRNYXJrZXIoaWQpICsgY3NzRm9ySWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgdmFyIGNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgdmFyIG5hbWVzQ2xvbmUgPSBjbG9uZU5hbWVzKG5hbWVzKTtcbiAgICB2YXIgbWFya2Vyc0Nsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICBtYXJrZXJzQ2xvbmVbaWRdID0gW21hcmtlcnNbaWRdWzBdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZVNlcnZlclRhZyhuYW1lc0Nsb25lLCBtYXJrZXJzQ2xvbmUpO1xuICB9O1xuXG4gIHZhciB0YWcgPSB7XG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGNzczogY3NzLFxuICAgIGdldElkczogZ2V0SWRzRnJvbU1hcmtlcnNGYWN0b3J5KG1hcmtlcnMpLFxuICAgIGhhc05hbWVGb3JJZDogaGFzTmFtZUZvcklkKG5hbWVzKSxcbiAgICBpbnNlcnRNYXJrZXI6IGluc2VydE1hcmtlcixcbiAgICBpbnNlcnRSdWxlczogaW5zZXJ0UnVsZXMsXG4gICAgcmVtb3ZlUnVsZXM6IHJlbW92ZVJ1bGVzLFxuICAgIHNlYWxlZDogZmFsc2UsXG4gICAgc3R5bGVUYWc6IG51bGwsXG4gICAgdG9FbGVtZW50OiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpLFxuICAgIHRvSFRNTDogd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKVxuICB9O1xuXG4gIHJldHVybiB0YWc7XG59O1xuXG52YXIgbWFrZVRhZyA9IGZ1bmN0aW9uIG1ha2VUYWcodGFyZ2V0LCB0YWdFbCwgZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSwgZ2V0SW1wb3J0UnVsZVRhZykge1xuICBpZiAoSVNfQlJPV1NFUiAmJiAhZm9yY2VTZXJ2ZXIpIHtcbiAgICB2YXIgZWwgPSBtYWtlU3R5bGVUYWcodGFyZ2V0LCB0YWdFbCwgaW5zZXJ0QmVmb3JlKTtcblxuICAgIGlmIChESVNBQkxFX1NQRUVEWSkge1xuICAgICAgcmV0dXJuIG1ha2VCcm93c2VyVGFnKGVsLCBnZXRJbXBvcnRSdWxlVGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1ha2VTcGVlZHlUYWcoZWwsIGdldEltcG9ydFJ1bGVUYWcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlU2VydmVyVGFnKCk7XG59O1xuXG52YXIgcmVoeWRyYXRlID0gZnVuY3Rpb24gcmVoeWRyYXRlKHRhZywgZWxzLCBleHRyYWN0ZWQpIHtcbiAgLyogYWRkIGFsbCBleHRyYWN0ZWQgY29tcG9uZW50cyB0byB0aGUgbmV3IHRhZyAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXh0cmFjdGVkLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgdmFyIF9leHRyYWN0ZWQkaSA9IGV4dHJhY3RlZFtpXSxcbiAgICAgICAgY29tcG9uZW50SWQgPSBfZXh0cmFjdGVkJGkuY29tcG9uZW50SWQsXG4gICAgICAgIGNzc0Zyb21ET00gPSBfZXh0cmFjdGVkJGkuY3NzRnJvbURPTTtcblxuICAgIHZhciBjc3NSdWxlcyA9IHNwbGl0QnlSdWxlcyhjc3NGcm9tRE9NKTtcbiAgICB0YWcuaW5zZXJ0UnVsZXMoY29tcG9uZW50SWQsIGNzc1J1bGVzKTtcbiAgfVxuXG4gIC8qIHJlbW92ZSBvbGQgSFRNTFN0eWxlRWxlbWVudHMsIHNpbmNlIHRoZXkgaGF2ZSBiZWVuIHJlaHlkcmF0ZWQgKi9cbiAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gZWxzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSArPSAxKSB7XG4gICAgdmFyIGVsID0gZWxzW19pXTtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBcblxudmFyIFNQTElUX1JFR0VYID0gL1xccysvO1xuXG4vKiBkZXRlcm1pbmUgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNvbXBvbmVudHMgYmVmb3JlIHRhZ3MgYXJlIHNoYXJkZWQgKi9cbnZhciBNQVhfU0laRSA9IHZvaWQgMDtcbmlmIChJU19CUk9XU0VSKSB7XG4gIC8qIGluIHNwZWVkeSBtb2RlIHdlIGNhbiBrZWVwIGEgbG90IG1vcmUgcnVsZXMgaW4gYSBzaGVldCBiZWZvcmUgYSBzbG93ZG93biBjYW4gYmUgZXhwZWN0ZWQgKi9cbiAgTUFYX1NJWkUgPSBESVNBQkxFX1NQRUVEWSA/IDQwIDogMTAwMDtcbn0gZWxzZSB7XG4gIC8qIGZvciBzZXJ2ZXJzIHdlIGRvIG5vdCBuZWVkIHRvIHNoYXJkIGF0IGFsbCAqL1xuICBNQVhfU0laRSA9IC0xO1xufVxuXG52YXIgc2hlZXRSdW5uaW5nSWQgPSAwO1xudmFyIG1hc3RlciA9IHZvaWQgMDtcblxudmFyIFN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgLyogYSBtYXAgZnJvbSBpZHMgdG8gdGFncyAqL1xuXG4gIC8qIGRlZmVycmVkIHJ1bGVzIGZvciBhIGdpdmVuIGlkICovXG5cbiAgLyogdGhpcyBpcyB1c2VkIGZvciBub3QgcmVpbmplY3RpbmcgcnVsZXMgdmlhIGhhc05hbWVGb3JJZCgpICovXG5cbiAgLyogd2hlbiBydWxlcyBmb3IgYW4gaWQgYXJlIHJlbW92ZWQgdXNpbmcgcmVtb3ZlKCkgd2UgaGF2ZSB0byBpZ25vcmUgcmVoeWRyYXRlZE5hbWVzIGZvciBpdCAqL1xuXG4gIC8qIGEgbGlzdCBvZiB0YWdzIGJlbG9uZ2luZyB0byB0aGlzIFN0eWxlU2hlZXQgKi9cblxuICAvKiBhIHRhZyBmb3IgaW1wb3J0IHJ1bGVzICovXG5cbiAgLyogY3VycmVudCBjYXBhY2l0eSB1bnRpbCBhIG5ldyB0YWcgbXVzdCBiZSBjcmVhdGVkICovXG5cbiAgLyogY2hpbGRyZW4gKGFrYSBjbG9uZXMpIG9mIHRoaXMgU3R5bGVTaGVldCBpbmhlcml0aW5nIGFsbCBhbmQgZnV0dXJlIGluamVjdGlvbnMgKi9cblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBJU19CUk9XU0VSID8gZG9jdW1lbnQuaGVhZCA6IG51bGw7XG4gICAgdmFyIGZvcmNlU2VydmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIHRoaXMuZ2V0SW1wb3J0UnVsZVRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbXBvcnRSdWxlVGFnID0gX3RoaXMuaW1wb3J0UnVsZVRhZztcblxuICAgICAgaWYgKGltcG9ydFJ1bGVUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaW1wb3J0UnVsZVRhZztcbiAgICAgIH1cblxuICAgICAgdmFyIGZpcnN0VGFnID0gX3RoaXMudGFnc1swXTtcbiAgICAgIHZhciBpbnNlcnRCZWZvcmUgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gX3RoaXMuaW1wb3J0UnVsZVRhZyA9IG1ha2VUYWcoX3RoaXMudGFyZ2V0LCBmaXJzdFRhZyA/IGZpcnN0VGFnLnN0eWxlVGFnIDogbnVsbCwgX3RoaXMuZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSk7XG4gICAgfTtcblxuICAgIHNoZWV0UnVubmluZ0lkICs9IDE7XG4gICAgdGhpcy5pZCA9IHNoZWV0UnVubmluZ0lkO1xuICAgIHRoaXMuZm9yY2VTZXJ2ZXIgPSBmb3JjZVNlcnZlcjtcbiAgICB0aGlzLnRhcmdldCA9IGZvcmNlU2VydmVyID8gbnVsbCA6IHRhcmdldDtcbiAgICB0aGlzLnRhZ01hcCA9IHt9O1xuICAgIHRoaXMuZGVmZXJyZWQgPSB7fTtcbiAgICB0aGlzLnJlaHlkcmF0ZWROYW1lcyA9IHt9O1xuICAgIHRoaXMuaWdub3JlUmVoeWRyYXRlZE5hbWVzID0ge307XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jYXBhY2l0eSA9IDE7XG4gICAgdGhpcy5jbG9uZXMgPSBbXTtcbiAgfVxuXG4gIC8qIHJlaHlkcmF0ZSBhbGwgU1NSJ2Qgc3R5bGUgdGFncyAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUucmVoeWRyYXRlID0gZnVuY3Rpb24gcmVoeWRyYXRlJCQxKCkge1xuICAgIGlmICghSVNfQlJPV1NFUiB8fCB0aGlzLmZvcmNlU2VydmVyKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBlbHMgPSBbXTtcbiAgICB2YXIgZXh0cmFjdGVkID0gW107XG4gICAgdmFyIGlzU3RyZWFtZWQgPSBmYWxzZTtcblxuICAgIC8qIHJldHJpZXZlIGFsbCBvZiBvdXIgU1NSIHN0eWxlIGVsZW1lbnRzIGZyb20gdGhlIERPTSAqL1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlWycgKyBTQ19BVFRSICsgJ11bJyArIFNDX1ZFUlNJT05fQVRUUiArICc9XCInICsgXCI0LjMuMlwiICsgJ1wiXScpO1xuXG4gICAgdmFyIG5vZGVzU2l6ZSA9IG5vZGVzLmxlbmd0aDtcblxuICAgIC8qIGFib3J0IHJlaHlkcmF0aW9uIGlmIG5vIHByZXZpb3VzIHN0eWxlIHRhZ3Mgd2VyZSBmb3VuZCAqL1xuICAgIGlmICghbm9kZXNTaXplKSByZXR1cm4gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXNTaXplOyBpICs9IDEpIHtcbiAgICAgIHZhciBlbCA9IG5vZGVzW2ldO1xuXG4gICAgICAvKiBjaGVjayBpZiBzdHlsZSB0YWcgaXMgYSBzdHJlYW1lZCB0YWcgKi9cbiAgICAgIGlmICghaXNTdHJlYW1lZCkgaXNTdHJlYW1lZCA9ICEhZWwuZ2V0QXR0cmlidXRlKFNDX1NUUkVBTV9BVFRSKTtcblxuICAgICAgLyogcmV0cmlldmUgYWxsIGNvbXBvbmVudCBuYW1lcyAqL1xuICAgICAgdmFyIGVsTmFtZXMgPSAoZWwuZ2V0QXR0cmlidXRlKFNDX0FUVFIpIHx8ICcnKS50cmltKCkuc3BsaXQoU1BMSVRfUkVHRVgpO1xuICAgICAgdmFyIGVsTmFtZXNTaXplID0gZWxOYW1lcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBqID0gMCwgbmFtZTsgaiA8IGVsTmFtZXNTaXplOyBqICs9IDEpIHtcbiAgICAgICAgbmFtZSA9IGVsTmFtZXNbal07XG4gICAgICAgIC8qIGFkZCByZWh5ZHJhdGVkIG5hbWUgdG8gc2hlZXQgdG8gYXZvaWQgcmUtYWRkaW5nIHN0eWxlcyAqL1xuICAgICAgICB0aGlzLnJlaHlkcmF0ZWROYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIGV4dHJhY3QgYWxsIGNvbXBvbmVudHMgYW5kIHRoZWlyIENTUyAqL1xuICAgICAgZXh0cmFjdGVkLnB1c2guYXBwbHkoZXh0cmFjdGVkLCBleHRyYWN0Q29tcHMoZWwudGV4dENvbnRlbnQpKTtcblxuICAgICAgLyogc3RvcmUgb3JpZ2luYWwgSFRNTFN0eWxlRWxlbWVudCAqL1xuICAgICAgZWxzLnB1c2goZWwpO1xuICAgIH1cblxuICAgIC8qIGFib3J0IHJlaHlkcmF0aW9uIGlmIG5vdGhpbmcgd2FzIGV4dHJhY3RlZCAqL1xuICAgIHZhciBleHRyYWN0ZWRTaXplID0gZXh0cmFjdGVkLmxlbmd0aDtcbiAgICBpZiAoIWV4dHJhY3RlZFNpemUpIHJldHVybiB0aGlzO1xuXG4gICAgLyogY3JlYXRlIGEgdGFnIHRvIGJlIHVzZWQgZm9yIHJlaHlkcmF0aW9uICovXG4gICAgdmFyIHRhZyA9IHRoaXMubWFrZVRhZyhudWxsKTtcblxuICAgIHJlaHlkcmF0ZSh0YWcsIGVscywgZXh0cmFjdGVkKTtcblxuICAgIC8qIHJlc2V0IGNhcGFjaXR5IGFuZCBhZGp1c3QgTUFYX1NJWkUgYnkgdGhlIGluaXRpYWwgc2l6ZSBvZiB0aGUgcmVoeWRyYXRpb24gKi9cbiAgICB0aGlzLmNhcGFjaXR5ID0gTWF0aC5tYXgoMSwgTUFYX1NJWkUgLSBleHRyYWN0ZWRTaXplKTtcbiAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuXG4gICAgLyogcmV0cmlldmUgYWxsIGNvbXBvbmVudCBpZHMgKi9cbiAgICBmb3IgKHZhciBfaiA9IDA7IF9qIDwgZXh0cmFjdGVkU2l6ZTsgX2ogKz0gMSkge1xuICAgICAgdGhpcy50YWdNYXBbZXh0cmFjdGVkW19qXS5jb21wb25lbnRJZF0gPSB0YWc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyogcmV0cmlldmUgYSBcIm1hc3RlclwiIGluc3RhbmNlIG9mIFN0eWxlU2hlZXQgd2hpY2ggaXMgdHlwaWNhbGx5IHVzZWQgd2hlbiBubyBvdGhlciBpcyBhdmFpbGFibGVcbiAgICogVGhlIG1hc3RlciBTdHlsZVNoZWV0IGlzIHRhcmdldGVkIGJ5IGNyZWF0ZUdsb2JhbFN0eWxlLCBrZXlmcmFtZXMsIGFuZCBjb21wb25lbnRzIG91dHNpZGUgb2YgYW55XG4gICAgKiBTdHlsZVNoZWV0TWFuYWdlcidzIGNvbnRleHQgKi9cblxuXG4gIC8qIHJlc2V0IHRoZSBpbnRlcm5hbCBcIm1hc3RlclwiIGluc3RhbmNlICovXG4gIFN0eWxlU2hlZXQucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB2YXIgZm9yY2VTZXJ2ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgbWFzdGVyID0gbmV3IFN0eWxlU2hlZXQodW5kZWZpbmVkLCBmb3JjZVNlcnZlcikucmVoeWRyYXRlKCk7XG4gIH07XG5cbiAgLyogYWRkcyBcImNoaWxkcmVuXCIgdG8gdGhlIFN0eWxlU2hlZXQgdGhhdCBpbmhlcml0IGFsbCBvZiB0aGUgcGFyZW50cycgcnVsZXNcbiAgICogd2hpbGUgdGhlaXIgb3duIHJ1bGVzIGRvIG5vdCBhZmZlY3QgdGhlIHBhcmVudCAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh0aGlzLnRhcmdldCwgdGhpcy5mb3JjZVNlcnZlcik7XG5cbiAgICAvKiBhZGQgdG8gY2xvbmUgYXJyYXkgKi9cbiAgICB0aGlzLmNsb25lcy5wdXNoKHNoZWV0KTtcblxuICAgIC8qIGNsb25lIGFsbCB0YWdzICovXG4gICAgc2hlZXQudGFncyA9IHRoaXMudGFncy5tYXAoZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGlkcyA9IHRhZy5nZXRJZHMoKTtcbiAgICAgIHZhciBuZXdUYWcgPSB0YWcuY2xvbmUoKTtcblxuICAgICAgLyogcmVjb25zdHJ1Y3QgdGFnTWFwICovXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzaGVldC50YWdNYXBbaWRzW2ldXSA9IG5ld1RhZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1RhZztcbiAgICB9KTtcblxuICAgIC8qIGNsb25lIG90aGVyIG1hcHMgKi9cbiAgICBzaGVldC5yZWh5ZHJhdGVkTmFtZXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5yZWh5ZHJhdGVkTmFtZXMpO1xuICAgIHNoZWV0LmRlZmVycmVkID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmZXJyZWQpO1xuXG4gICAgcmV0dXJuIHNoZWV0O1xuICB9O1xuXG4gIC8qIGZvcmNlIFN0eWxlU2hlZXQgdG8gY3JlYXRlIGEgbmV3IHRhZyBvbiB0aGUgbmV4dCBpbmplY3Rpb24gKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnNlYWxBbGxUYWdzID0gZnVuY3Rpb24gc2VhbEFsbFRhZ3MoKSB7XG4gICAgdGhpcy5jYXBhY2l0eSA9IDE7XG5cbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHRhZy5zZWFsZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLm1ha2VUYWcgPSBmdW5jdGlvbiBtYWtlVGFnJCQxKHRhZykge1xuICAgIHZhciBsYXN0RWwgPSB0YWcgPyB0YWcuc3R5bGVUYWcgOiBudWxsO1xuICAgIHZhciBpbnNlcnRCZWZvcmUgPSBmYWxzZTtcblxuICAgIHJldHVybiBtYWtlVGFnKHRoaXMudGFyZ2V0LCBsYXN0RWwsIHRoaXMuZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSwgdGhpcy5nZXRJbXBvcnRSdWxlVGFnKTtcbiAgfTtcblxuICAvKiBnZXQgYSB0YWcgZm9yIGEgZ2l2ZW4gY29tcG9uZW50SWQsIGFzc2lnbiB0aGUgY29tcG9uZW50SWQgdG8gb25lLCBvciBzaGFyZCAqL1xuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXRUYWdGb3JJZCA9IGZ1bmN0aW9uIGdldFRhZ0ZvcklkKGlkKSB7XG4gICAgLyogc2ltcGx5IHJldHVybiBhIHRhZywgd2hlbiB0aGUgY29tcG9uZW50SWQgd2FzIGFscmVhZHkgYXNzaWduZWQgb25lICovXG4gICAgdmFyIHByZXYgPSB0aGlzLnRhZ01hcFtpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCAmJiAhcHJldi5zZWFsZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgLyogc2hhcmQgKGNyZWF0ZSBhIG5ldyB0YWcpIGlmIHRoZSB0YWcgaXMgZXhoYXVzdGVkIChTZWUgTUFYX1NJWkUpICovXG4gICAgdGhpcy5jYXBhY2l0eSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuY2FwYWNpdHkgPT09IDApIHtcbiAgICAgIHRoaXMuY2FwYWNpdHkgPSBNQVhfU0laRTtcbiAgICAgIHRhZyA9IHRoaXMubWFrZVRhZyh0YWcpO1xuICAgICAgdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWdNYXBbaWRdID0gdGFnO1xuICB9O1xuXG4gIC8qIG1haW5seSBmb3IgY3JlYXRlR2xvYmFsU3R5bGUgdG8gY2hlY2sgZm9yIGl0cyBpZCAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuaGFzSWQgPSBmdW5jdGlvbiBoYXNJZChpZCkge1xuICAgIHJldHVybiB0aGlzLnRhZ01hcFtpZF0gIT09IHVuZGVmaW5lZDtcbiAgfTtcblxuICAvKiBjYWNoaW5nIGxheWVyIGNoZWNraW5nIGlkK25hbWUgdG8gYWxyZWFkeSBoYXZlIGEgY29ycmVzcG9uZGluZyB0YWcgYW5kIGluamVjdGVkIHJ1bGVzICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5oYXNOYW1lRm9ySWQgPSBmdW5jdGlvbiBoYXNOYW1lRm9ySWQoaWQsIG5hbWUpIHtcbiAgICAvKiBleGNlcHRpb24gZm9yIHJlaHlkcmF0ZWQgbmFtZXMgd2hpY2ggYXJlIGNoZWNrZWQgc2VwYXJhdGVseSAqL1xuICAgIGlmICh0aGlzLmlnbm9yZVJlaHlkcmF0ZWROYW1lc1tpZF0gPT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlaHlkcmF0ZWROYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnTWFwW2lkXTtcbiAgICByZXR1cm4gdGFnICE9PSB1bmRlZmluZWQgJiYgdGFnLmhhc05hbWVGb3JJZChpZCwgbmFtZSk7XG4gIH07XG5cbiAgLyogcmVnaXN0ZXJzIGEgY29tcG9uZW50SWQgYW5kIHJlZ2lzdGVycyBpdCBvbiBpdHMgdGFnICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWZlcnJlZEluamVjdCA9IGZ1bmN0aW9uIGRlZmVycmVkSW5qZWN0KGlkLCBjc3NSdWxlcykge1xuICAgIC8qIGRvbid0IGluamVjdCB3aGVuIHRoZSBpZCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgKi9cbiAgICBpZiAodGhpcy50YWdNYXBbaWRdICE9PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHZhciBjbG9uZXMgPSB0aGlzLmNsb25lcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjbG9uZXNbaV0uZGVmZXJyZWRJbmplY3QoaWQsIGNzc1J1bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmdldFRhZ0ZvcklkKGlkKS5pbnNlcnRNYXJrZXIoaWQpO1xuICAgIHRoaXMuZGVmZXJyZWRbaWRdID0gY3NzUnVsZXM7XG4gIH07XG5cbiAgLyogaW5qZWN0cyBydWxlcyBmb3IgYSBnaXZlbiBpZCB3aXRoIGEgbmFtZSB0aGF0IHdpbGwgbmVlZCB0byBiZSBjYWNoZWQgKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmluamVjdCA9IGZ1bmN0aW9uIGluamVjdChpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgY2xvbmVzID0gdGhpcy5jbG9uZXM7XG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjbG9uZXNbaV0uaW5qZWN0KGlkLCBjc3NSdWxlcywgbmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMuZ2V0VGFnRm9ySWQoaWQpO1xuXG4gICAgLyogYWRkIGRlZmVycmVkIHJ1bGVzIGZvciBjb21wb25lbnQgKi9cbiAgICBpZiAodGhpcy5kZWZlcnJlZFtpZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQ29tYmluZSBwYXNzZWQgY3NzUnVsZXMgd2l0aCBwcmV2aW91c2x5IGRlZmVycmVkIENTUyBydWxlc1xuICAgICAgLy8gTk9URTogV2UgY2Fubm90IG11dGF0ZSB0aGUgZGVmZXJyZWQgYXJyYXkgaXRzZWxmIGFzIGFsbCBjbG9uZXNcbiAgICAgIC8vIGRvIHRoZSBzYW1lIChzZWUgY2xvbmVzW2ldLmluamVjdClcbiAgICAgIHZhciBydWxlcyA9IHRoaXMuZGVmZXJyZWRbaWRdLmNvbmNhdChjc3NSdWxlcyk7XG4gICAgICB0YWcuaW5zZXJ0UnVsZXMoaWQsIHJ1bGVzLCBuYW1lKTtcblxuICAgICAgdGhpcy5kZWZlcnJlZFtpZF0gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5pbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvKiByZW1vdmVzIGFsbCBydWxlcyBmb3IgYSBnaXZlbiBpZCwgd2hpY2ggZG9lc24ndCByZW1vdmUgaXRzIG1hcmtlciBidXQgcmVzZXRzIGl0ICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgICB2YXIgdGFnID0gdGhpcy50YWdNYXBbaWRdO1xuICAgIGlmICh0YWcgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdmFyIGNsb25lcyA9IHRoaXMuY2xvbmVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNsb25lc1tpXS5yZW1vdmUoaWQpO1xuICAgIH1cblxuICAgIC8qIHJlbW92ZSBhbGwgcnVsZXMgZnJvbSB0aGUgdGFnICovXG4gICAgdGFnLnJlbW92ZVJ1bGVzKGlkKTtcblxuICAgIC8qIGlnbm9yZSBwb3NzaWJsZSByZWh5ZHJhdGVkIG5hbWVzICovXG4gICAgdGhpcy5pZ25vcmVSZWh5ZHJhdGVkTmFtZXNbaWRdID0gdHJ1ZTtcblxuICAgIC8qIGRlbGV0ZSBwb3NzaWJsZSBkZWZlcnJlZCBydWxlcyAqL1xuICAgIHRoaXMuZGVmZXJyZWRbaWRdID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnRvSFRNTCgpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvUmVhY3RFbGVtZW50cyA9IGZ1bmN0aW9uIHRvUmVhY3RFbGVtZW50cygpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG5cbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7XG4gICAgICB2YXIga2V5ID0gJ3NjLScgKyBpZCArICctJyArIGk7XG4gICAgICByZXR1cm4gY2xvbmVFbGVtZW50KHRhZy50b0VsZW1lbnQoKSwgeyBrZXk6IGtleSB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBudWxsLCBbe1xuICAgIGtleTogJ21hc3RlcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gbWFzdGVyIHx8IChtYXN0ZXIgPSBuZXcgU3R5bGVTaGVldCgpLnJlaHlkcmF0ZSgpKTtcbiAgICB9XG5cbiAgICAvKiBOT1RFOiBUaGlzIGlzIGp1c3QgZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IHdpdGggamVzdC1zdHlsZWQtY29tcG9uZW50cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnN0YW5jZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gU3R5bGVTaGVldC5tYXN0ZXI7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxudmFyIEtleWZyYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gS2V5ZnJhbWVzKG5hbWUsIHJ1bGVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWZyYW1lcyk7XG5cbiAgICB0aGlzLmluamVjdCA9IGZ1bmN0aW9uIChzdHlsZVNoZWV0KSB7XG4gICAgICBpZiAoIXN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKF90aGlzLmlkLCBfdGhpcy5uYW1lKSkge1xuICAgICAgICBzdHlsZVNoZWV0LmluamVjdChfdGhpcy5pZCwgX3RoaXMucnVsZXMsIF90aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcigxMiwgU3RyaW5nKF90aGlzLm5hbWUpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG5cbiAgICB0aGlzLmlkID0gJ3NjLWtleWZyYW1lcy0nICsgbmFtZTtcbiAgfVxuXG4gIEtleWZyYW1lcy5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVzO1xufSgpO1xuXG4vLyBcblxuLyoqXG4gKiBpbmxpbmVkIHZlcnNpb24gb2ZcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxuLy8gXG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjg3YWFiZGZlMWI3NDYxZTczMzFhYmIzNjAxZDllNmJiMjc1NDRiYy9wYWNrYWdlcy9yZWFjdC1kb20vc3JjL3NoYXJlZC9kYW5nZXJvdXNTdHlsZVZhbHVlLmpzXG5mdW5jdGlvbiBhZGRVbml0SWZOZWVkZWQobmFtZSwgdmFsdWUpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FtaWxhamFjay9lc2xpbnQtcGx1Z2luLWZsb3d0eXBlLWVycm9ycy9pc3N1ZXMvMTMzXG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShuYW1lIGluIHVuaXRsZXNzKSkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS50cmltKCk7XG59XG5cbi8vIFxuXG4vKipcbiAqIEl0J3MgZmFsc2lzaCBub3QgZmFsc3kgYmVjYXVzZSAwIGlzIGFsbG93ZWQuXG4gKi9cbnZhciBpc0ZhbHNpc2ggPSBmdW5jdGlvbiBpc0ZhbHNpc2goY2h1bmspIHtcbiAgcmV0dXJuIGNodW5rID09PSB1bmRlZmluZWQgfHwgY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IGZhbHNlIHx8IGNodW5rID09PSAnJztcbn07XG5cbnZhciBvYmpUb0Nzc0FycmF5ID0gZnVuY3Rpb24gb2JqVG9Dc3NBcnJheShvYmosIHByZXZLZXkpIHtcbiAgdmFyIHJ1bGVzID0gW107XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaXNGYWxzaXNoKG9ialtrZXldKSkge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICAgIHJ1bGVzLnB1c2guYXBwbHkocnVsZXMsIG9ialRvQ3NzQXJyYXkob2JqW2tleV0sIGtleSkpO1xuXG4gICAgICAgIHJldHVybiBydWxlcztcbiAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihvYmpba2V5XSkpIHtcbiAgICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArICc6Jywgb2JqW2tleV0sICc7Jyk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgfVxuICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArICc6ICcgKyBhZGRVbml0SWZOZWVkZWQoa2V5LCBvYmpba2V5XSkgKyAnOycpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH0pO1xuXG4gIHJldHVybiBwcmV2S2V5ID8gW3ByZXZLZXkgKyAnIHsnXS5jb25jYXQocnVsZXMsIFsnfSddKSA6IHJ1bGVzO1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbihjaHVuaywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaHVuaykpIHtcbiAgICB2YXIgcnVsZVNldCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNodW5rLmxlbmd0aCwgcmVzdWx0OyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHJlc3VsdCA9IGZsYXR0ZW4oY2h1bmtbaV0sIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBjb250aW51ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHJ1bGVTZXQucHVzaC5hcHBseShydWxlU2V0LCByZXN1bHQpO2Vsc2UgcnVsZVNldC5wdXNoKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBpZiAoaXNGYWxzaXNoKGNodW5rKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyogSGFuZGxlIG90aGVyIGNvbXBvbmVudHMgKi9cbiAgaWYgKGlzU3R5bGVkQ29tcG9uZW50KGNodW5rKSkge1xuICAgIHJldHVybiAnLicgKyBjaHVuay5zdHlsZWRDb21wb25lbnRJZDtcbiAgfVxuXG4gIC8qIEVpdGhlciBleGVjdXRlIG9yIGRlZmVyIHRoZSBmdW5jdGlvbiAqL1xuICBpZiAoaXNGdW5jdGlvbihjaHVuaykpIHtcbiAgICBpZiAoaXNTdGF0ZWxlc3NGdW5jdGlvbihjaHVuaykgJiYgZXhlY3V0aW9uQ29udGV4dCkge1xuICAgICAgdmFyIF9yZXN1bHQgPSBjaHVuayhleGVjdXRpb25Db250ZXh0KTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNFbGVtZW50KF9yZXN1bHQpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihnZXRDb21wb25lbnROYW1lKGNodW5rKSArICcgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxhdHRlbihfcmVzdWx0LCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICB9IGVsc2UgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgaWYgKGNodW5rIGluc3RhbmNlb2YgS2V5ZnJhbWVzKSB7XG4gICAgaWYgKHN0eWxlU2hlZXQpIHtcbiAgICAgIGNodW5rLmluamVjdChzdHlsZVNoZWV0KTtcbiAgICAgIHJldHVybiBjaHVuay5nZXROYW1lKCk7XG4gICAgfSBlbHNlIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIC8qIEhhbmRsZSBvYmplY3RzICovXG4gIHJldHVybiBpc1BsYWluT2JqZWN0KGNodW5rKSA/IG9ialRvQ3NzQXJyYXkoY2h1bmspIDogY2h1bmsudG9TdHJpbmcoKTtcbn1cblxuLy8gXG5cbmZ1bmN0aW9uIGNzcyhzdHlsZXMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKHN0eWxlcykgfHwgaXNQbGFpbk9iamVjdChzdHlsZXMpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBmbGF0dGVuKGludGVybGVhdmUoRU1QVFlfQVJSQVksIFtzdHlsZXNdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIGZsYXR0ZW4oaW50ZXJsZWF2ZShzdHlsZXMsIGludGVycG9sYXRpb25zKSk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBFTVBUWV9PQkpFQ1Q7XG5cbiAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodGFnKSkge1xuICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMSwgU3RyaW5nKHRhZykpO1xuICB9XG5cbiAgLyogVGhpcyBpcyBjYWxsYWJsZSBkaXJlY3RseSBhcyBhIHRlbXBsYXRlIGZ1bmN0aW9uICovXG4gIC8vICRGbG93Rml4TWU6IE5vdCB0eXBlZCB0byBhdm9pZCBkZXN0cnVjdHVyaW5nIGFyZ3VtZW50c1xuICB2YXIgdGVtcGxhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uIHRlbXBsYXRlRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENvbnN0cnVjdG9yKHRhZywgb3B0aW9ucywgY3NzLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgLyogSWYgY29uZmlnIG1ldGhvZHMgYXJlIGNhbGxlZCwgd3JhcCB1cCBhIG5ldyB0ZW1wbGF0ZSBmdW5jdGlvbiBhbmQgbWVyZ2Ugb3B0aW9ucyAqL1xuICB0ZW1wbGF0ZUZ1bmN0aW9uLndpdGhDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCBjb25maWcpKTtcbiAgfTtcblxuICAvKiBNb2RpZnkvaW5qZWN0IG5ldyBwcm9wcyBhdCBydW50aW1lICovXG4gIHRlbXBsYXRlRnVuY3Rpb24uYXR0cnMgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGF0dHJzOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KG9wdGlvbnMuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbilcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIHRlbXBsYXRlRnVuY3Rpb247XG59XG5cbi8vIFxuLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanMvYmxvYi9tYXN0ZXIvbXVybXVyaGFzaDJfZ2MuanNcbmZ1bmN0aW9uIG11cm11cmhhc2goYykge1xuICBmb3IgKHZhciBlID0gYy5sZW5ndGggfCAwLCBhID0gZSB8IDAsIGQgPSAwLCBiOyBlID49IDQ7KSB7XG4gICAgYiA9IGMuY2hhckNvZGVBdChkKSAmIDI1NSB8IChjLmNoYXJDb2RlQXQoKytkKSAmIDI1NSkgPDwgOCB8IChjLmNoYXJDb2RlQXQoKytkKSAmIDI1NSkgPDwgMTYgfCAoYy5jaGFyQ29kZUF0KCsrZCkgJiAyNTUpIDw8IDI0LCBiID0gMTU0MDQ4MzQ3NyAqIChiICYgNjU1MzUpICsgKCgxNTQwNDgzNDc3ICogKGIgPj4+IDE2KSAmIDY1NTM1KSA8PCAxNiksIGIgXj0gYiA+Pj4gMjQsIGIgPSAxNTQwNDgzNDc3ICogKGIgJiA2NTUzNSkgKyAoKDE1NDA0ODM0NzcgKiAoYiA+Pj4gMTYpICYgNjU1MzUpIDw8IDE2KSwgYSA9IDE1NDA0ODM0NzcgKiAoYSAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChhID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpIF4gYiwgZSAtPSA0LCArK2Q7XG4gIH1cbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSAzOlxuICAgICAgYSBePSAoYy5jaGFyQ29kZUF0KGQgKyAyKSAmIDI1NSkgPDwgMTY7XG4gICAgY2FzZSAyOlxuICAgICAgYSBePSAoYy5jaGFyQ29kZUF0KGQgKyAxKSAmIDI1NSkgPDwgODtcbiAgICBjYXNlIDE6XG4gICAgICBhIF49IGMuY2hhckNvZGVBdChkKSAmIDI1NSwgYSA9IDE1NDA0ODM0NzcgKiAoYSAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChhID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpO1xuICB9XG4gIGEgXj0gYSA+Pj4gMTM7XG4gIGEgPSAxNTQwNDgzNDc3ICogKGEgJiA2NTUzNSkgKyAoKDE1NDA0ODM0NzcgKiAoYSA+Pj4gMTYpICYgNjU1MzUpIDw8IDE2KTtcbiAgcmV0dXJuIChhIF4gYSA+Pj4gMTUpID4+PiAwO1xufVxuXG4vLyBcbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxuLyogVGhpcyBpcyB0aGUgXCJjYXBhY2l0eVwiIG9mIG91ciBhbHBoYWJldCBpLmUuIDJ4MjYgZm9yIGFsbCBsZXR0ZXJzIHBsdXMgdGhlaXIgY2FwaXRhbGlzZWRcbiAqIGNvdW50ZXJwYXJ0cyAqL1xudmFyIGNoYXJzTGVuZ3RoID0gNTI7XG5cbi8qIHN0YXJ0IGF0IDc1IGZvciAnYScgdW50aWwgJ3onICgyNSkgYW5kIHRoZW4gc3RhcnQgYXQgNjUgZm9yIGNhcGl0YWxpc2VkIGxldHRlcnMgKi9cbnZhciBnZXRBbHBoYWJldGljQ2hhciA9IGZ1bmN0aW9uIGdldEFscGhhYmV0aWNDaGFyKGNvZGUpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIChjb2RlID4gMjUgPyAzOSA6IDk3KSk7XG59O1xuXG4vKiBpbnB1dCBhIG51bWJlciwgdXN1YWxseSBhIGhhc2ggYW5kIGNvbnZlcnQgaXQgdG8gYmFzZS01MiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShjb2RlKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciB4ID0gdm9pZCAwO1xuXG4gIC8qIGdldCBhIGNoYXIgYW5kIGRpdmlkZSBieSBhbHBoYWJldC1sZW5ndGggKi9cbiAgZm9yICh4ID0gY29kZTsgeCA+IGNoYXJzTGVuZ3RoOyB4ID0gTWF0aC5mbG9vcih4IC8gY2hhcnNMZW5ndGgpKSB7XG4gICAgbmFtZSA9IGdldEFscGhhYmV0aWNDaGFyKHggJSBjaGFyc0xlbmd0aCkgKyBuYW1lO1xuICB9XG5cbiAgcmV0dXJuIGdldEFscGhhYmV0aWNDaGFyKHggJSBjaGFyc0xlbmd0aCkgKyBuYW1lO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gaGFzRnVuY3Rpb25PYmplY3RLZXkob2JqKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaXNGdW5jdGlvbihvYmpba2V5XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNSdWxlcyhydWxlcywgYXR0cnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBydWxlID0gcnVsZXNbaV07XG5cbiAgICAvLyByZWN1cnNpdmUgY2FzZVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGUpICYmICFpc1N0YXRpY1J1bGVzKHJ1bGUsIGF0dHJzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihydWxlKSAmJiAhaXNTdHlsZWRDb21wb25lbnQocnVsZSkpIHtcbiAgICAgIC8vIGZ1bmN0aW9ucyBhcmUgYWxsb3dlZCB0byBiZSBzdGF0aWMgaWYgdGhleSdyZSBqdXN0IGJlaW5nXG4gICAgICAvLyB1c2VkIHRvIGdldCB0aGUgY2xhc3NuYW1lIG9mIGEgbmVzdGVkIHN0eWxlZCBjb21wb25lbnRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHgpIHx8IGhhc0Z1bmN0aW9uT2JqZWN0S2V5KHgpO1xuICB9KSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBcblxudmFyIGlzSE1SRW5hYmxlZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmhvdDtcblxuLyogY29tYmluZXMgaGFzaFN0ciAobXVybXVyaGFzaCkgYW5kIG5hbWVHZW5lcmF0b3IgZm9yIGNvbnZlbmllbmNlICovXG52YXIgaGFzaGVyID0gZnVuY3Rpb24gaGFzaGVyKHN0cikge1xuICByZXR1cm4gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShtdXJtdXJoYXNoKHN0cikpO1xufTtcblxuLypcbiBDb21wb25lbnRTdHlsZSBpcyBhbGwgdGhlIENTUy1zcGVjaWZpYyBzdHVmZiwgbm90XG4gdGhlIFJlYWN0LXNwZWNpZmljIHN0dWZmLlxuICovXG5cbnZhciBDb21wb25lbnRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50U3R5bGUocnVsZXMsIGF0dHJzLCBjb21wb25lbnRJZCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudFN0eWxlKTtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmlzU3RhdGljID0gIWlzSE1SRW5hYmxlZCAmJiBpc1N0YXRpY1J1bGVzKHJ1bGVzLCBhdHRycyk7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuXG4gICAgaWYgKCFTdHlsZVNoZWV0Lm1hc3Rlci5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIFN0eWxlU2hlZXQubWFzdGVyLmRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICAgKiBGbGF0dGVucyBhIHJ1bGUgc2V0IGludG8gdmFsaWQgQ1NTXG4gICAgICogSGFzaGVzIGl0LCB3cmFwcyB0aGUgd2hvbGUgY2h1bmsgaW4gYSAuaGFzaDEyMzQge31cbiAgICAgKiBSZXR1cm5zIHRoZSBoYXNoIHRvIGJlIGluamVjdGVkIG9uIHJlbmRlcigpXG4gICAgICogKi9cblxuXG4gIENvbXBvbmVudFN0eWxlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgICB2YXIgaXNTdGF0aWMgPSB0aGlzLmlzU3RhdGljLFxuICAgICAgICBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQsXG4gICAgICAgIGxhc3RDbGFzc05hbWUgPSB0aGlzLmxhc3RDbGFzc05hbWU7XG5cbiAgICBpZiAoSVNfQlJPV1NFUiAmJiBpc1N0YXRpYyAmJiB0eXBlb2YgbGFzdENsYXNzTmFtZSA9PT0gJ3N0cmluZycgJiYgc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIGxhc3RDbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gbGFzdENsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgZmxhdENTUyA9IGZsYXR0ZW4odGhpcy5ydWxlcywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gICAgdmFyIG5hbWUgPSBoYXNoZXIodGhpcy5jb21wb25lbnRJZCArIGZsYXRDU1Muam9pbignJykpO1xuICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIG5hbWUpKSB7XG4gICAgICBzdHlsZVNoZWV0LmluamVjdCh0aGlzLmNvbXBvbmVudElkLCBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnLicgKyBuYW1lLCB1bmRlZmluZWQsIGNvbXBvbmVudElkKSwgbmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0Q2xhc3NOYW1lID0gbmFtZTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBDb21wb25lbnRTdHlsZS5nZW5lcmF0ZU5hbWUgPSBmdW5jdGlvbiBnZW5lcmF0ZU5hbWUoc3RyKSB7XG4gICAgcmV0dXJuIGhhc2hlcihzdHIpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRTdHlsZTtcbn0oKTtcblxuLy8gXG5cbnZhciBMSU1JVCA9IDIwMDtcblxudmFyIGNyZWF0ZVdhcm5Ub29NYW55Q2xhc3NlcyA9IChmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgdmFyIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgdmFyIHdhcm5pbmdTZWVuID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAoIXdhcm5pbmdTZWVuKSB7XG4gICAgICBnZW5lcmF0ZWRDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGdlbmVyYXRlZENsYXNzZXMpLmxlbmd0aCA+PSBMSU1JVCkge1xuICAgICAgICAvLyBVbmFibGUgdG8gZmluZCBsYXRlc3RSdWxlIGluIHRlc3QgZW52aXJvbm1lbnQuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIHByZWZlci10ZW1wbGF0ZSAqL1xuICAgICAgICBjb25zb2xlLndhcm4oJ092ZXIgJyArIExJTUlUICsgJyBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgJyArIGRpc3BsYXlOYW1lICsgJy4gXFxuJyArICdDb25zaWRlciB1c2luZyB0aGUgYXR0cnMgbWV0aG9kLCB0b2dldGhlciB3aXRoIGEgc3R5bGUgb2JqZWN0IGZvciBmcmVxdWVudGx5IGNoYW5nZWQgc3R5bGVzLlxcbicgKyAnRXhhbXBsZTpcXG4nICsgJyAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyh7XFxuJyArICcgICAgc3R5bGU6ICh7IGJhY2tncm91bmQgfSkgPT4gKHtcXG4nICsgJyAgICAgIGJhY2tncm91bmQsXFxuJyArICcgICAgfSksXFxuJyArICcgIH0pYHdpZHRoOiAxMDAlO2BcXG5cXG4nICsgJyAgPENvbXBvbmVudCAvPicpO1xuICAgICAgICB3YXJuaW5nU2VlbiA9IHRydWU7XG4gICAgICAgIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuLy8gXG5cbnZhciBkZXRlcm1pbmVUaGVtZSA9IChmdW5jdGlvbiAocHJvcHMsIGZhbGxiYWNrVGhlbWUpIHtcbiAgdmFyIGRlZmF1bHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogRU1QVFlfT0JKRUNUO1xuXG4gIC8vIFByb3BzIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBUaGVtZVByb3ZpZGVyLCB3aGljaCBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXJcbiAgLy8gZGVmYXVsdFByb3BzLCBidXQgUmVhY3QgYXV0b21hdGljYWxseSBwdXRzIGRlZmF1bHRQcm9wcyBvbiBwcm9wcy5cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzLCBmbG93dHlwZS1lcnJvcnMvc2hvdy1lcnJvcnMgKi9cbiAgdmFyIGlzRGVmYXVsdFRoZW1lID0gZGVmYXVsdFByb3BzID8gcHJvcHMudGhlbWUgPT09IGRlZmF1bHRQcm9wcy50aGVtZSA6IGZhbHNlO1xuICB2YXIgdGhlbWUgPSBwcm9wcy50aGVtZSAmJiAhaXNEZWZhdWx0VGhlbWUgPyBwcm9wcy50aGVtZSA6IGZhbGxiYWNrVGhlbWUgfHwgZGVmYXVsdFByb3BzLnRoZW1lO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgcmV0dXJuIHRoZW1lO1xufSk7XG5cbi8vIFxudmFyIGVzY2FwZVJlZ2V4ID0gL1tbXFxdLiMqJD48K349fF46KCksXCInYC1dKy9nO1xudmFyIGRhc2hlc0F0RW5kcyA9IC8oXi18LSQpL2c7XG5cbi8qKlxuICogVE9ETzogRXhwbG9yZSB1c2luZyBDU1MuZXNjYXBlIHdoZW4gaXQgYmVjb21lcyBtb3JlIGF2YWlsYWJsZVxuICogaW4gZXZlcmdyZWVuIGJyb3dzZXJzLlxuICovXG5mdW5jdGlvbiBlc2NhcGUoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgLy8gUmVwbGFjZSBhbGwgcG9zc2libGUgQ1NTIHNlbGVjdG9yc1xuICAucmVwbGFjZShlc2NhcGVSZWdleCwgJy0nKVxuXG4gIC8vIFJlbW92ZSBleHRyYW5lb3VzIGh5cGhlbnMgYXQgdGhlIHN0YXJ0IGFuZCBlbmRcbiAgLnJlcGxhY2UoZGFzaGVzQXRFbmRzLCAnJyk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBpc1RhZyh0YXJnZXQpIHtcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gdGFyZ2V0LmNoYXJBdCgwKSA9PT0gdGFyZ2V0LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpIDogdHJ1ZSk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXlOYW1lKHRhcmdldCkge1xuICAvLyAkRmxvd0ZpeE1lXG4gIHJldHVybiBpc1RhZyh0YXJnZXQpID8gJ3N0eWxlZC4nICsgdGFyZ2V0IDogJ1N0eWxlZCgnICsgZ2V0Q29tcG9uZW50TmFtZSh0YXJnZXQpICsgJyknO1xufVxuXG52YXIgX1RZUEVfU1RBVElDUztcblxudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgVFlQRV9TVEFUSUNTID0gKF9UWVBFX1NUQVRJQ1MgPSB7fSwgX1RZUEVfU1RBVElDU1tGb3J3YXJkUmVmXSA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZVxufSwgX1RZUEVfU1RBVElDUyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSQxID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICBfT2JqZWN0JGdldE93blByb3BlcnQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIGdldE93blByb3BlcnR5U3ltYm9scyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW107XG59IDogX09iamVjdCRnZXRPd25Qcm9wZXJ0LFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBhcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gYXJyYXlQcm90b3R5cGUuY29uY2F0KGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KSxcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBUWVBFX1NUQVRJQ1NbdGFyZ2V0Q29tcG9uZW50LiQkdHlwZW9mXSB8fCBSRUFDVF9TVEFUSUNTO1xuXG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBUWVBFX1NUQVRJQ1Nbc291cmNlQ29tcG9uZW50LiQkdHlwZW9mXSB8fCBSRUFDVF9TVEFUSUNTO1xuXG4gICAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHZvaWQgMDtcbiAgICB2YXIga2V5ID0gdm9pZCAwO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKFxuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiZcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5JDEodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qIGZhaWwgc2lsZW50bHkgKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc0Rlcml2ZWRSZWFjdENvbXBvbmVudChmbikge1xuICByZXR1cm4gISEoZm4gJiYgZm4ucHJvdG90eXBlICYmIGZuLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuLy8gXG4vLyBIZWxwZXIgdG8gY2FsbCBhIGdpdmVuIGZ1bmN0aW9uLCBvbmx5IG9uY2VcbnZhciBvbmNlID0gKGZ1bmN0aW9uIChjYikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGNiLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59KTtcblxuLy8gXG5cbnZhciBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbnZhciBUaGVtZUNvbnN1bWVyID0gVGhlbWVDb250ZXh0LkNvbnN1bWVyO1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0aGVtZSB0byBhbiBlbnRpcmUgcmVhY3QgY29tcG9uZW50IHRyZWUgdmlhIGNvbnRleHRcbiAqL1xuXG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFRoZW1lUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZVByb3ZpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5nZXRDb250ZXh0ID0gbWVtb2l6ZShfdGhpcy5nZXRDb250ZXh0LmJpbmQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW5kZXJJbm5lciA9IF90aGlzLnJlbmRlcklubmVyLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZUNvbnRleHQuQ29uc3VtZXIsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5yZW5kZXJJbm5lclxuICAgICk7XG4gIH07XG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUucmVuZGVySW5uZXIgPSBmdW5jdGlvbiByZW5kZXJJbm5lcihvdXRlclRoZW1lKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQodGhpcy5wcm9wcy50aGVtZSwgb3V0ZXJUaGVtZSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRoZW1lQ29udGV4dC5Qcm92aWRlcixcbiAgICAgIHsgdmFsdWU6IGNvbnRleHQgfSxcbiAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRoZW1lIGZyb20gdGhlIHByb3BzLCBzdXBwb3J0aW5nIGJvdGggKG91dGVyVGhlbWUpID0+IHt9XG4gICAqIGFzIHdlbGwgYXMgb2JqZWN0IG5vdGF0aW9uXG4gICAqL1xuXG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuZ2V0VGhlbWUgPSBmdW5jdGlvbiBnZXRUaGVtZSh0aGVtZSwgb3V0ZXJUaGVtZSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoZW1lKSkge1xuICAgICAgdmFyIG1lcmdlZFRoZW1lID0gdGhlbWUob3V0ZXJUaGVtZSk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KG1lcmdlZFRoZW1lKSB8fCAodHlwZW9mIG1lcmdlZFRoZW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtZXJnZWRUaGVtZSkpICE9PSAnb2JqZWN0JykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig3KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICAgIH1cblxuICAgIGlmICh0aGVtZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHRoZW1lKSB8fCAodHlwZW9mIHRoZW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGVtZSkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbiAgfTtcblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q29udGV4dCh0aGVtZSwgb3V0ZXJUaGVtZSkge1xuICAgIHJldHVybiB0aGlzLmdldFRoZW1lKHRoZW1lLCBvdXRlclRoZW1lKTtcbiAgfTtcblxuICByZXR1cm4gVGhlbWVQcm92aWRlcjtcbn0oQ29tcG9uZW50KTtcblxuLy8gXG5cbnZhciBDTE9TSU5HX1RBR19SID0gL15cXHMqPFxcL1thLXpdL2k7XG5cbnZhciBTZXJ2ZXJTdHlsZVNoZWV0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJTdHlsZVNoZWV0KCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlclN0eWxlU2hlZXQpO1xuXG4gICAgLyogVGhlIG1hc3RlciBzaGVldCBtaWdodCBiZSByZXNldCwgc28ga2VlcCBhIHJlZmVyZW5jZSBoZXJlICovXG4gICAgdGhpcy5tYXN0ZXJTaGVldCA9IFN0eWxlU2hlZXQubWFzdGVyO1xuICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLm1hc3RlclNoZWV0LmNsb25lKCk7XG4gICAgdGhpcy5zZWFsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIHRoZSBTZXJ2ZXJTdHlsZVNoZWV0IGFzIGJlaW5nIGZ1bGx5IGVtaXR0ZWQgYW5kIG1hbnVhbGx5IEdDIGl0IGZyb20gdGhlXG4gICAqIFN0eWxlU2hlZXQgc2luZ2xldG9uLlxuICAgKi9cblxuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLnNlYWwgPSBmdW5jdGlvbiBzZWFsKCkge1xuICAgIGlmICghdGhpcy5zZWFsZWQpIHtcbiAgICAgIC8qIFJlbW92ZSBzZWFsZWQgU3R5bGVTaGVldHMgZnJvbSB0aGUgbWFzdGVyIHNoZWV0ICovXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLm1hc3RlclNoZWV0LmNsb25lcy5pbmRleE9mKHRoaXMuaW5zdGFuY2UpO1xuICAgICAgdGhpcy5tYXN0ZXJTaGVldC5jbG9uZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2VhbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuY29sbGVjdFN0eWxlcyA9IGZ1bmN0aW9uIGNvbGxlY3RTdHlsZXMoY2hpbGRyZW4pIHtcbiAgICBpZiAodGhpcy5zZWFsZWQpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBTdHlsZVNoZWV0TWFuYWdlcixcbiAgICAgIHsgc2hlZXQ6IHRoaXMuaW5zdGFuY2UgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXRTdHlsZVRhZ3MgPSBmdW5jdGlvbiBnZXRTdHlsZVRhZ3MoKSB7XG4gICAgdGhpcy5zZWFsKCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UudG9IVE1MKCk7XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuZ2V0U3R5bGVFbGVtZW50ID0gZnVuY3Rpb24gZ2V0U3R5bGVFbGVtZW50KCkge1xuICAgIHRoaXMuc2VhbCgpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnRvUmVhY3RFbGVtZW50cygpO1xuICB9O1xuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLmludGVybGVhdmVXaXRoTm9kZVN0cmVhbSA9IGZ1bmN0aW9uIGludGVybGVhdmVXaXRoTm9kZVN0cmVhbShyZWFkYWJsZVN0cmVhbSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDMpO1xuICAgIH1cblxuICAgIC8qIHRoZSB0YWcgaW5kZXgga2VlcHMgdHJhY2sgb2Ygd2hpY2ggdGFncyBoYXZlIGFscmVhZHkgYmVlbiBlbWl0dGVkICovXG4gICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZTtcblxuICAgIHZhciBpbnN0YW5jZVRhZ0luZGV4ID0gMDtcblxuICAgIHZhciBzdHJlYW1BdHRyID0gU0NfU1RSRUFNX0FUVFIgKyAnPVwidHJ1ZVwiJztcblxuICAgIHZhciB0cmFuc2Zvcm1lciA9IG5ldyBzdHJlYW0uVHJhbnNmb3JtKHtcbiAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gYXBwZW5kU3R5bGVDaHVua3MoY2h1bmssIC8qIGVuY29kaW5nICovXywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHRhZ3MgPSBpbnN0YW5jZS50YWdzO1xuXG4gICAgICAgIHZhciBodG1sID0gJyc7XG5cbiAgICAgICAgLyogcmV0cmlldmUgaHRtbCBmb3IgZWFjaCBuZXcgc3R5bGUgdGFnICovXG4gICAgICAgIGZvciAoOyBpbnN0YW5jZVRhZ0luZGV4IDwgdGFncy5sZW5ndGg7IGluc3RhbmNlVGFnSW5kZXggKz0gMSkge1xuICAgICAgICAgIHZhciB0YWcgPSB0YWdzW2luc3RhbmNlVGFnSW5kZXhdO1xuICAgICAgICAgIGh0bWwgKz0gdGFnLnRvSFRNTChzdHJlYW1BdHRyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGZvcmNlIG91ciBTdHlsZVNoZWV0cyB0byBlbWl0IGVudGlyZWx5IG5ldyB0YWdzICovXG4gICAgICAgIGluc3RhbmNlLnNlYWxBbGxUYWdzKCk7XG5cbiAgICAgICAgdmFyIHJlbmRlcmVkSHRtbCA9IGNodW5rLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgLyogcHJlcGVuZCBzdHlsZSBodG1sIHRvIGNodW5rLCB1bmxlc3MgdGhlIHN0YXJ0IG9mIHRoZSBjaHVuayBpcyBhIGNsb3NpbmcgdGFnIGluIHdoaWNoIGNhc2UgYXBwZW5kIHJpZ2h0IGFmdGVyIHRoYXQgKi9cbiAgICAgICAgaWYgKENMT1NJTkdfVEFHX1IudGVzdChyZW5kZXJlZEh0bWwpKSB7XG4gICAgICAgICAgdmFyIGVuZE9mQ2xvc2luZ1RhZyA9IHJlbmRlcmVkSHRtbC5pbmRleE9mKCc+Jyk7XG5cbiAgICAgICAgICB0aGlzLnB1c2gocmVuZGVyZWRIdG1sLnNsaWNlKDAsIGVuZE9mQ2xvc2luZ1RhZyArIDEpICsgaHRtbCArIHJlbmRlcmVkSHRtbC5zbGljZShlbmRPZkNsb3NpbmdUYWcgKyAxKSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLnB1c2goaHRtbCArIHJlbmRlcmVkSHRtbCk7XG5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlYWRhYmxlU3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc2VhbCgpO1xuICAgIH0pO1xuXG4gICAgcmVhZGFibGVTdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgX3RoaXMuc2VhbCgpO1xuXG4gICAgICAvLyBmb3J3YXJkIHRoZSBlcnJvciB0byB0aGUgdHJhbnNmb3JtIHN0cmVhbVxuICAgICAgdHJhbnNmb3JtZXIuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlYWRhYmxlU3RyZWFtLnBpcGUodHJhbnNmb3JtZXIpO1xuICB9O1xuXG4gIHJldHVybiBTZXJ2ZXJTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxudmFyIFN0eWxlU2hlZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xudmFyIFN0eWxlU2hlZXRDb25zdW1lciA9IFN0eWxlU2hlZXRDb250ZXh0LkNvbnN1bWVyO1xuXG52YXIgU3R5bGVTaGVldE1hbmFnZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhTdHlsZVNoZWV0TWFuYWdlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3R5bGVTaGVldE1hbmFnZXIocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0TWFuYWdlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZ2V0Q29udGV4dCA9IG1lbW9pemUoX3RoaXMuZ2V0Q29udGV4dCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3R5bGVTaGVldE1hbmFnZXIucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiBnZXRDb250ZXh0KHNoZWV0LCB0YXJnZXQpIHtcbiAgICBpZiAoc2hlZXQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCkge1xuICAgICAgcmV0dXJuIG5ldyBTdHlsZVNoZWV0KHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNCk7XG4gICAgfVxuICB9O1xuXG4gIFN0eWxlU2hlZXRNYW5hZ2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBzaGVldCA9IF9wcm9wcy5zaGVldCxcbiAgICAgICAgdGFyZ2V0ID0gX3Byb3BzLnRhcmdldDtcblxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBTdHlsZVNoZWV0Q29udGV4dC5Qcm92aWRlcixcbiAgICAgIHsgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dChzaGVldCwgdGFyZ2V0KSB9LFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pIDogY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0TWFuYWdlcjtcbn0oQ29tcG9uZW50KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFN0eWxlU2hlZXRNYW5hZ2VyLnByb3BUeXBlcyA9IHtcbiAgc2hlZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5pbnN0YW5jZU9mKFN0eWxlU2hlZXQpLCBQcm9wVHlwZXMuaW5zdGFuY2VPZihTZXJ2ZXJTdHlsZVNoZWV0KV0pLFxuXG4gIHRhcmdldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlbmRDaGlsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9KVxufSA6IHZvaWQgMDtcblxuLy8gXG5cbnZhciBpZGVudGlmaWVycyA9IHt9O1xuXG4vKiBXZSBkZXBlbmQgb24gY29tcG9uZW50cyBoYXZpbmcgdW5pcXVlIElEcyAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVJZChfQ29tcG9uZW50U3R5bGUsIF9kaXNwbGF5TmFtZSwgcGFyZW50Q29tcG9uZW50SWQpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIF9kaXNwbGF5TmFtZSAhPT0gJ3N0cmluZycgPyAnc2MnIDogZXNjYXBlKF9kaXNwbGF5TmFtZSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZW5zdXJlcyB1bmlxdWVuZXNzIGlmIHR3byBjb21wb25lbnRzIGhhcHBlbiB0byBzaGFyZVxuICAgKiB0aGUgc2FtZSBkaXNwbGF5TmFtZS5cbiAgICovXG4gIHZhciBuciA9IChpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gfHwgMCkgKyAxO1xuICBpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gPSBucjtcblxuICB2YXIgY29tcG9uZW50SWQgPSBkaXNwbGF5TmFtZSArICctJyArIF9Db21wb25lbnRTdHlsZS5nZW5lcmF0ZU5hbWUoZGlzcGxheU5hbWUgKyBucik7XG5cbiAgcmV0dXJuIHBhcmVudENvbXBvbmVudElkID8gcGFyZW50Q29tcG9uZW50SWQgKyAnLScgKyBjb21wb25lbnRJZCA6IGNvbXBvbmVudElkO1xufVxuXG4vLyAkRmxvd0ZpeE1lXG5cbnZhciBTdHlsZWRDb21wb25lbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhTdHlsZWRDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZWRDb21wb25lbnQpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuYXR0cnMgPSB7fTtcblxuICAgIF90aGlzLnJlbmRlck91dGVyID0gX3RoaXMucmVuZGVyT3V0ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMucmVuZGVySW5uZXIgPSBfdGhpcy5yZW5kZXJJbm5lci5iaW5kKF90aGlzKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfdGhpcy53YXJuSW5uZXJSZWYgPSBvbmNlKGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgXCJpbm5lclJlZlwiIEFQSSBoYXMgYmVlbiByZW1vdmVkIGluIHN0eWxlZC1jb21wb25lbnRzIHY0IGluIGZhdm9yIG9mIFJlYWN0IDE2IHJlZiBmb3J3YXJkaW5nLCB1c2UgXCJyZWZcIiBpbnN0ZWFkIGxpa2UgYSB0eXBpY2FsIGNvbXBvbmVudC4gXCJpbm5lclJlZlwiIHdhcyBkZXRlY3RlZCBvbiBjb21wb25lbnQgXCInICsgZGlzcGxheU5hbWUgKyAnXCIuJylcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy53YXJuQXR0cnNGbk9iamVjdEtleURlcHJlY2F0ZWQgPSBvbmNlKGZ1bmN0aW9uIChrZXksIGRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Z1bmN0aW9ucyBhcyBvYmplY3QtZm9ybSBhdHRycyh7fSkga2V5cyBhcmUgbm93IGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIHN0eWxlZC1jb21wb25lbnRzLiBTd2l0Y2ggdG8gdGhlIG5ldyBhdHRycyhwcm9wcyA9PiAoe30pKSBzeW50YXggaW5zdGVhZCBmb3IgZWFzaWVyIGFuZCBtb3JlIHBvd2VyZnVsIGNvbXBvc2l0aW9uLiBUaGUgYXR0cnMga2V5IGluIHF1ZXN0aW9uIGlzIFwiJyArIGtleSArICdcIiBvbiBjb21wb25lbnQgXCInICsgZGlzcGxheU5hbWUgKyAnXCIuJywgJ1xcbiAnICsgbmV3IEVycm9yKCkuc3RhY2spXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMud2Fybk5vblN0eWxlZENvbXBvbmVudEF0dHJzT2JqZWN0S2V5ID0gb25jZShmdW5jdGlvbiAoa2V5LCBkaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdJdCBsb29rcyBsaWtlIHlvdVxcJ3ZlIHVzZWQgYSBub24gc3R5bGVkLWNvbXBvbmVudCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBcIicgKyBrZXkgKyAnXCIgcHJvcCBpbiBhbiBvYmplY3QtZm9ybSBhdHRycyBjb25zdHJ1Y3RvciBvZiBcIicgKyBkaXNwbGF5TmFtZSArICdcIi5cXG4nICsgJ1lvdSBzaG91bGQgdXNlIHRoZSBuZXcgZnVuY3Rpb24tZm9ybSBhdHRycyBjb25zdHJ1Y3RvciB3aGljaCBhdm9pZHMgdGhpcyBpc3N1ZTogYXR0cnMocHJvcHMgPT4gKHsgeW91clN0dWZmIH0pKVxcbicgKyBcIlRvIGNvbnRpbnVlIHVzaW5nIHRoZSBkZXByZWNhdGVkIG9iamVjdCBzeW50YXgsIHlvdSdsbCBuZWVkIHRvIHdyYXAgeW91ciBjb21wb25lbnQgcHJvcCBpbiBhIGZ1bmN0aW9uIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGluc2lkZSB0aGUgc3R5bGVkIGNvbXBvbmVudCAoeW91J2xsIHN0aWxsIGdldCB0aGUgZGVwcmVjYXRpb24gd2FybmluZyB0aG91Z2guKVxcblwiICsgKCdGb3IgZXhhbXBsZSwgeyAnICsga2V5ICsgJzogKCkgPT4gSW5uZXJDb21wb25lbnQgfSBpbnN0ZWFkIG9mIHsgJyArIGtleSArICc6IElubmVyQ29tcG9uZW50IH0nKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFN0eWxlU2hlZXRDb25zdW1lcixcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLnJlbmRlck91dGVyXG4gICAgKTtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlck91dGVyID0gZnVuY3Rpb24gcmVuZGVyT3V0ZXIoKSB7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFN0eWxlU2hlZXQubWFzdGVyO1xuXG4gICAgdGhpcy5zdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcblxuICAgIC8vIE5vIG5lZWQgdG8gc3Vic2NyaWJlIGEgc3RhdGljIGNvbXBvbmVudCB0byB0aGVtZSBjaGFuZ2VzLCBpdCB3b24ndCBjaGFuZ2UgYW55dGhpbmdcbiAgICBpZiAodGhpcy5wcm9wcy5mb3J3YXJkZWRDb21wb25lbnQuY29tcG9uZW50U3R5bGUuaXNTdGF0aWMpIHJldHVybiB0aGlzLnJlbmRlcklubmVyKCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRoZW1lQ29uc3VtZXIsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5yZW5kZXJJbm5lclxuICAgICk7XG4gIH07XG5cbiAgU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJJbm5lciA9IGZ1bmN0aW9uIHJlbmRlcklubmVyKHRoZW1lKSB7XG4gICAgdmFyIF9wcm9wcyRmb3J3YXJkZWRDb21wbyA9IHRoaXMucHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LFxuICAgICAgICBjb21wb25lbnRTdHlsZSA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5jb21wb25lbnRTdHlsZSxcbiAgICAgICAgZGVmYXVsdFByb3BzID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgZGlzcGxheU5hbWUgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8uZGlzcGxheU5hbWUsXG4gICAgICAgIGZvbGRlZENvbXBvbmVudElkcyA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5mb2xkZWRDb21wb25lbnRJZHMsXG4gICAgICAgIHN0eWxlZENvbXBvbmVudElkID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLnN0eWxlZENvbXBvbmVudElkLFxuICAgICAgICB0YXJnZXQgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8udGFyZ2V0O1xuXG5cbiAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdm9pZCAwO1xuICAgIGlmIChjb21wb25lbnRTdHlsZS5pc1N0YXRpYykge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFTVBUWV9PQkpFQ1QsIHRoaXMucHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5lcmF0ZWRDbGFzc05hbWUgPSB0aGlzLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGRldGVybWluZVRoZW1lKHRoaXMucHJvcHMsIHRoZW1lLCBkZWZhdWx0UHJvcHMpIHx8IEVNUFRZX09CSkVDVCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRUb0JlQ3JlYXRlZCA9IHRoaXMucHJvcHMuYXMgfHwgdGhpcy5hdHRycy5hcyB8fCB0YXJnZXQ7XG4gICAgdmFyIGlzVGFyZ2V0VGFnID0gaXNUYWcoZWxlbWVudFRvQmVDcmVhdGVkKTtcblxuICAgIHZhciBwcm9wc0ZvckVsZW1lbnQgPSB7fTtcbiAgICB2YXIgY29tcHV0ZWRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmF0dHJzLCB0aGlzLnByb3BzKTtcblxuICAgIHZhciBrZXkgPSB2b2lkIDA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoa2V5IGluIGNvbXB1dGVkUHJvcHMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSA9PT0gJ2lubmVyUmVmJyAmJiBpc1RhcmdldFRhZykge1xuICAgICAgICB0aGlzLndhcm5Jbm5lclJlZihkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdmb3J3YXJkZWRDb21wb25lbnQnIHx8IGtleSA9PT0gJ2FzJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZm9yd2FyZGVkUmVmJykgcHJvcHNGb3JFbGVtZW50LnJlZiA9IGNvbXB1dGVkUHJvcHNba2V5XTtlbHNlIGlmIChrZXkgPT09ICdmb3J3YXJkZWRBcycpIHByb3BzRm9yRWxlbWVudC5hcyA9IGNvbXB1dGVkUHJvcHNba2V5XTtlbHNlIGlmICghaXNUYXJnZXRUYWcgfHwgdmFsaWRBdHRyKGtleSkpIHtcbiAgICAgICAgLy8gRG9uJ3QgcGFzcyB0aHJvdWdoIG5vbiBIVE1MIHRhZ3MgdGhyb3VnaCB0byBIVE1MIGVsZW1lbnRzXG4gICAgICAgIHByb3BzRm9yRWxlbWVudFtrZXldID0gY29tcHV0ZWRQcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnN0eWxlICYmIHRoaXMuYXR0cnMuc3R5bGUpIHtcbiAgICAgIHByb3BzRm9yRWxlbWVudC5zdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLmF0dHJzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcbiAgICB9XG5cbiAgICBwcm9wc0ZvckVsZW1lbnQuY2xhc3NOYW1lID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChmb2xkZWRDb21wb25lbnRJZHMsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCBzdHlsZWRDb21wb25lbnRJZCwgdGhpcy5hdHRycy5jbGFzc05hbWUsIGdlbmVyYXRlZENsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUb0JlQ3JlYXRlZCwgcHJvcHNGb3JFbGVtZW50KTtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCA9IGZ1bmN0aW9uIGJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMsIGF0dHJzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBwcm9wcywgeyB0aGVtZTogdGhlbWUgfSk7XG5cbiAgICBpZiAoIWF0dHJzLmxlbmd0aCkgcmV0dXJuIGNvbnRleHQ7XG5cbiAgICB0aGlzLmF0dHJzID0ge307XG5cbiAgICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyRGVmKSB7XG4gICAgICB2YXIgcmVzb2x2ZWRBdHRyRGVmID0gYXR0ckRlZjtcbiAgICAgIHZhciBhdHRyRGVmV2FzRm4gPSBmYWxzZTtcbiAgICAgIHZhciBhdHRyID0gdm9pZCAwO1xuICAgICAgdmFyIGtleSA9IHZvaWQgMDtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24ocmVzb2x2ZWRBdHRyRGVmKSkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHJlc29sdmVkQXR0ckRlZiA9IHJlc29sdmVkQXR0ckRlZihjb250ZXh0KTtcbiAgICAgICAgYXR0ckRlZldhc0ZuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBmb3IgKGtleSBpbiByZXNvbHZlZEF0dHJEZWYpIHtcbiAgICAgICAgYXR0ciA9IHJlc29sdmVkQXR0ckRlZltrZXldO1xuXG4gICAgICAgIGlmICghYXR0ckRlZldhc0ZuKSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oYXR0cikgJiYgIWlzRGVyaXZlZFJlYWN0Q29tcG9uZW50KGF0dHIpICYmICFpc1N0eWxlZENvbXBvbmVudChhdHRyKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLndhcm5BdHRyc0ZuT2JqZWN0S2V5RGVwcmVjYXRlZChrZXksIHByb3BzLmZvcndhcmRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHIgPSBhdHRyKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChhdHRyKSkge1xuICAgICAgICAgICAgICBfdGhpczIud2Fybk5vblN0eWxlZENvbXBvbmVudEF0dHJzT2JqZWN0S2V5KGtleSwgcHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuYXR0cnNba2V5XSA9IGF0dHI7XG4gICAgICAgIGNvbnRleHRba2V5XSA9IGF0dHI7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzID0gZnVuY3Rpb24gZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModGhlbWUsIHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRmb3J3YXJkZWRDb21wbzIgPSBwcm9wcy5mb3J3YXJkZWRDb21wb25lbnQsXG4gICAgICAgIGF0dHJzID0gX3Byb3BzJGZvcndhcmRlZENvbXBvMi5hdHRycyxcbiAgICAgICAgY29tcG9uZW50U3R5bGUgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8yLmNvbXBvbmVudFN0eWxlLFxuICAgICAgICB3YXJuVG9vTWFueUNsYXNzZXMgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8yLndhcm5Ub29NYW55Q2xhc3NlcztcblxuICAgIC8vIHN0YXRpY2FsbHkgc3R5bGVkLWNvbXBvbmVudHMgZG9uJ3QgbmVlZCB0byBidWlsZCBhbiBleGVjdXRpb24gY29udGV4dCBvYmplY3QsXG4gICAgLy8gYW5kIHNob3VsZG4ndCBiZSBpbmNyZWFzaW5nIHRoZSBudW1iZXIgb2YgY2xhc3MgbmFtZXNcblxuICAgIGlmIChjb21wb25lbnRTdHlsZS5pc1N0YXRpYyAmJiAhYXR0cnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50U3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRU1QVFlfT0JKRUNULCB0aGlzLnN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWUgPSBjb21wb25lbnRTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGlzLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMsIGF0dHJzKSwgdGhpcy5zdHlsZVNoZWV0KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5Ub29NYW55Q2xhc3Nlcykgd2FyblRvb01hbnlDbGFzc2VzKGNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZWRDb21wb25lbnQ7XG59KENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YXJnZXQsIG9wdGlvbnMsIHJ1bGVzKSB7XG4gIHZhciBpc1RhcmdldFN0eWxlZENvbXAgPSBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpO1xuICB2YXIgaXNDbGFzcyA9ICFpc1RhZyh0YXJnZXQpO1xuXG4gIHZhciBfb3B0aW9ucyRkaXNwbGF5TmFtZSA9IG9wdGlvbnMuZGlzcGxheU5hbWUsXG4gICAgICBkaXNwbGF5TmFtZSA9IF9vcHRpb25zJGRpc3BsYXlOYW1lID09PSB1bmRlZmluZWQgPyBnZW5lcmF0ZURpc3BsYXlOYW1lKHRhcmdldCkgOiBfb3B0aW9ucyRkaXNwbGF5TmFtZSxcbiAgICAgIF9vcHRpb25zJGNvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgIGNvbXBvbmVudElkID0gX29wdGlvbnMkY29tcG9uZW50SWQgPT09IHVuZGVmaW5lZCA/IGdlbmVyYXRlSWQoQ29tcG9uZW50U3R5bGUsIG9wdGlvbnMuZGlzcGxheU5hbWUsIG9wdGlvbnMucGFyZW50Q29tcG9uZW50SWQpIDogX29wdGlvbnMkY29tcG9uZW50SWQsXG4gICAgICBfb3B0aW9ucyRQYXJlbnRDb21wb24gPSBvcHRpb25zLlBhcmVudENvbXBvbmVudCxcbiAgICAgIFBhcmVudENvbXBvbmVudCA9IF9vcHRpb25zJFBhcmVudENvbXBvbiA9PT0gdW5kZWZpbmVkID8gU3R5bGVkQ29tcG9uZW50IDogX29wdGlvbnMkUGFyZW50Q29tcG9uLFxuICAgICAgX29wdGlvbnMkYXR0cnMgPSBvcHRpb25zLmF0dHJzLFxuICAgICAgYXR0cnMgPSBfb3B0aW9ucyRhdHRycyA9PT0gdW5kZWZpbmVkID8gRU1QVFlfQVJSQVkgOiBfb3B0aW9ucyRhdHRycztcblxuXG4gIHZhciBzdHlsZWRDb21wb25lbnRJZCA9IG9wdGlvbnMuZGlzcGxheU5hbWUgJiYgb3B0aW9ucy5jb21wb25lbnRJZCA/IGVzY2FwZShvcHRpb25zLmRpc3BsYXlOYW1lKSArICctJyArIG9wdGlvbnMuY29tcG9uZW50SWQgOiBvcHRpb25zLmNvbXBvbmVudElkIHx8IGNvbXBvbmVudElkO1xuXG4gIC8vIGZvbGQgdGhlIHVuZGVybHlpbmcgU3R5bGVkQ29tcG9uZW50IGF0dHJzIHVwIChpbXBsaWNpdCBleHRlbmQpXG4gIHZhciBmaW5hbEF0dHJzID1cbiAgLy8gJEZsb3dGaXhNZVxuICBpc1RhcmdldFN0eWxlZENvbXAgJiYgdGFyZ2V0LmF0dHJzID8gQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbikgOiBhdHRycztcblxuICB2YXIgY29tcG9uZW50U3R5bGUgPSBuZXcgQ29tcG9uZW50U3R5bGUoaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgcnVsZXMgdXAgKGltcGxpY2l0IGV4dGVuZClcbiAgLy8gJEZsb3dGaXhNZVxuICB0YXJnZXQuY29tcG9uZW50U3R5bGUucnVsZXMuY29uY2F0KHJ1bGVzKSA6IHJ1bGVzLCBmaW5hbEF0dHJzLCBzdHlsZWRDb21wb25lbnRJZCk7XG5cbiAgLyoqXG4gICAqIGZvcndhcmRSZWYgY3JlYXRlcyBhIG5ldyBpbnRlcmltIGNvbXBvbmVudCwgd2hpY2ggd2UnbGwgdGFrZSBhZHZhbnRhZ2Ugb2ZcbiAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcgUGFyZW50Q29tcG9uZW50IHRvIGNyZWF0ZSBfYW5vdGhlcl8gaW50ZXJpbSBjbGFzc1xuICAgKi9cbiAgdmFyIFdyYXBwZWRTdHlsZWRDb21wb25lbnQgPSB2b2lkIDA7XG4gIHZhciBmb3J3YXJkUmVmID0gZnVuY3Rpb24gZm9yd2FyZFJlZihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFyZW50Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgZm9yd2FyZGVkQ29tcG9uZW50OiBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCBmb3J3YXJkZWRSZWY6IHJlZiB9KSk7XG4gIH07XG4gIGZvcndhcmRSZWYuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoZm9yd2FyZFJlZik7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuYXR0cnMgPSBmaW5hbEF0dHJzO1xuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuY29tcG9uZW50U3R5bGUgPSBjb21wb25lbnRTdHlsZTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZm9sZGVkQ29tcG9uZW50SWRzID0gaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gJEZsb3dGaXhNZVxuICBBcnJheS5wcm90b3R5cGUuY29uY2F0KHRhcmdldC5mb2xkZWRDb21wb25lbnRJZHMsIHRhcmdldC5zdHlsZWRDb21wb25lbnRJZCkgOiBFTVBUWV9BUlJBWTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQgPSBzdHlsZWRDb21wb25lbnRJZDtcblxuICAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCB0YXJnZXQgdXAgc2luY2Ugd2UgZm9sZGVkIHRoZSBzdHlsZXNcbiAgLy8gJEZsb3dGaXhNZVxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnRhcmdldCA9IGlzVGFyZ2V0U3R5bGVkQ29tcCA/IHRhcmdldC50YXJnZXQgOiB0YXJnZXQ7XG5cbiAgLy8gJEZsb3dGaXhNZVxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LndpdGhDb21wb25lbnQgPSBmdW5jdGlvbiB3aXRoQ29tcG9uZW50KHRhZykge1xuICAgIHZhciBwcmV2aW91c0NvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgb3B0aW9uc1RvQ29weSA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFsnY29tcG9uZW50SWQnXSk7XG5cblxuICAgIHZhciBuZXdDb21wb25lbnRJZCA9IHByZXZpb3VzQ29tcG9uZW50SWQgJiYgcHJldmlvdXNDb21wb25lbnRJZCArICctJyArIChpc1RhZyh0YWcpID8gdGFnIDogZXNjYXBlKGdldENvbXBvbmVudE5hbWUodGFnKSkpO1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9uc1RvQ29weSwge1xuICAgICAgYXR0cnM6IGZpbmFsQXR0cnMsXG4gICAgICBjb21wb25lbnRJZDogbmV3Q29tcG9uZW50SWQsXG4gICAgICBQYXJlbnRDb21wb25lbnQ6IFBhcmVudENvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YWcsIG5ld09wdGlvbnMsIHJ1bGVzKTtcbiAgfTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCAnZGVmYXVsdFByb3BzJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKG9iaikge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzID0gaXNUYXJnZXRTdHlsZWRDb21wID8gbWVyZ2UodGFyZ2V0LmRlZmF1bHRQcm9wcywgb2JqKSA6IG9iajtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIFdyYXBwZWRTdHlsZWRDb21wb25lbnQud2FyblRvb01hbnlDbGFzc2VzID0gY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzKGRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy4nICsgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZDtcbiAgfTtcblxuICBpZiAoaXNDbGFzcykge1xuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdyYXBwZWRTdHlsZWRDb21wb25lbnQsIHRhcmdldCwge1xuICAgICAgLy8gYWxsIFNDLXNwZWNpZmljIHRoaW5ncyBzaG91bGQgbm90IGJlIGhvaXN0ZWRcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50U3R5bGU6IHRydWUsXG4gICAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgIGZvbGRlZENvbXBvbmVudElkczogdHJ1ZSxcbiAgICAgIHN0eWxlZENvbXBvbmVudElkOiB0cnVlLFxuICAgICAgdGFyZ2V0OiB0cnVlLFxuICAgICAgd2l0aENvbXBvbmVudDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFdyYXBwZWRTdHlsZWRDb21wb25lbnQ7XG59XG5cbi8vIFxuLy8gVGhhbmtzIHRvIFJlYWN0RE9NRmFjdG9yaWVzIGZvciB0aGlzIGhhbmR5IGxpc3QhXG5cbnZhciBkb21FbGVtZW50cyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJyxcblxuLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcblxuLy8gXG5cbnZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQodGFnKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjcmVhdGVTdHlsZWRDb21wb25lbnQsIHRhZyk7XG59O1xuXG4vLyBTaG9ydGhhbmRzIGZvciBhbGwgdmFsaWQgSFRNTCBFbGVtZW50c1xuZG9tRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZG9tRWxlbWVudCkge1xuICBzdHlsZWRbZG9tRWxlbWVudF0gPSBzdHlsZWQoZG9tRWxlbWVudCk7XG59KTtcblxuLy8gXG5cbnZhciBHbG9iYWxTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsU3R5bGUocnVsZXMsIGNvbXBvbmVudElkKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xvYmFsU3R5bGUpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICB0aGlzLmlzU3RhdGljID0gaXNTdGF0aWNSdWxlcyhydWxlcywgRU1QVFlfQVJSQVkpO1xuXG4gICAgaWYgKCFTdHlsZVNoZWV0Lm1hc3Rlci5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIFN0eWxlU2hlZXQubWFzdGVyLmRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgR2xvYmFsU3R5bGUucHJvdG90eXBlLmNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KSB7XG4gICAgdmFyIGZsYXRDU1MgPSBmbGF0dGVuKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICAgIHZhciBjc3MgPSBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnJyk7XG5cbiAgICBzdHlsZVNoZWV0LmluamVjdCh0aGlzLmNvbXBvbmVudElkLCBjc3MpO1xuICB9O1xuXG4gIEdsb2JhbFN0eWxlLnByb3RvdHlwZS5yZW1vdmVTdHlsZXMgPSBmdW5jdGlvbiByZW1vdmVTdHlsZXMoc3R5bGVTaGVldCkge1xuICAgIHZhciBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQ7XG5cbiAgICBpZiAoc3R5bGVTaGVldC5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIHN0eWxlU2hlZXQucmVtb3ZlKGNvbXBvbmVudElkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzogb3ZlcndyaXRlIGluLXBsYWNlIGluc3RlYWQgb2YgcmVtb3ZlK2NyZWF0ZT9cblxuXG4gIEdsb2JhbFN0eWxlLnByb3RvdHlwZS5yZW5kZXJTdHlsZXMgPSBmdW5jdGlvbiByZW5kZXJTdHlsZXMoZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCkge1xuICAgIHRoaXMucmVtb3ZlU3R5bGVzKHN0eWxlU2hlZXQpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxTdHlsZTtcbn0oKTtcblxuLy8gXG5cbi8vIHBsYWNlIG91ciBjYWNoZSBpbnRvIHNoYXJlZCBjb250ZXh0IHNvIGl0J2xsIHBlcnNpc3QgYmV0d2VlbiBITVJzXG5pZiAoSVNfQlJPV1NFUikge1xuICB3aW5kb3cuc2NDR1NITVJDYWNoZSA9IHt9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHbG9iYWxTdHlsZShzdHJpbmdzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcnVsZXMgPSBjc3MuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gIHZhciBpZCA9ICdzYy1nbG9iYWwtJyArIG11cm11cmhhc2goSlNPTi5zdHJpbmdpZnkocnVsZXMpKTtcbiAgdmFyIHN0eWxlID0gbmV3IEdsb2JhbFN0eWxlKHJ1bGVzLCBpZCk7XG5cbiAgdmFyIEdsb2JhbFN0eWxlQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBpbmhlcml0cyhHbG9iYWxTdHlsZUNvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBHbG9iYWxTdHlsZUNvbXBvbmVudChwcm9wcykge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xvYmFsU3R5bGVDb21wb25lbnQpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICB2YXIgX3RoaXMkY29uc3RydWN0b3IgPSBfdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBnbG9iYWxTdHlsZSA9IF90aGlzJGNvbnN0cnVjdG9yLmdsb2JhbFN0eWxlLFxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudElkID0gX3RoaXMkY29uc3RydWN0b3Iuc3R5bGVkQ29tcG9uZW50SWQ7XG5cblxuICAgICAgaWYgKElTX0JST1dTRVIpIHtcbiAgICAgICAgd2luZG93LnNjQ0dTSE1SQ2FjaGVbc3R5bGVkQ29tcG9uZW50SWRdID0gKHdpbmRvdy5zY0NHU0hNUkNhY2hlW3N0eWxlZENvbXBvbmVudElkXSB8fCAwKSArIDE7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBmaXhlcyBITVIgY29tcGF0aWJpbGl0eS4gRG9uJ3QgYXNrIG1lIHdoeSwgYnV0IHRoaXMgY29tYmluYXRpb24gb2ZcbiAgICAgICAqIGNhY2hpbmcgdGhlIGNsb3N1cmUgdmFyaWFibGVzIHZpYSBzdGF0aWNzIGFuZCB0aGVuIHBlcnNpc3RpbmcgdGhlIHN0YXRpY3MgaW5cbiAgICAgICAqIHN0YXRlIHdvcmtzIGFjcm9zcyBITVIgd2hlcmUgbm8gb3RoZXIgY29tYmluYXRpb24gZGlkLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgICovXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgZ2xvYmFsU3R5bGU6IGdsb2JhbFN0eWxlLFxuICAgICAgICBzdHlsZWRDb21wb25lbnRJZDogc3R5bGVkQ29tcG9uZW50SWRcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgR2xvYmFsU3R5bGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAod2luZG93LnNjQ0dTSE1SQ2FjaGVbdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZF0pIHtcbiAgICAgICAgd2luZG93LnNjQ0dTSE1SQ2FjaGVbdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZF0gLT0gMTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogRGVwZW5kaW5nIG9uIHRoZSBvcmRlciBcInJlbmRlclwiIGlzIGNhbGxlZCB0aGlzIGNhbiBjYXVzZSB0aGUgc3R5bGVzIHRvIGJlIGxvc3RcbiAgICAgICAqIHVudGlsIHRoZSBuZXh0IHJlbmRlciBwYXNzIG9mIHRoZSByZW1haW5pbmcgaW5zdGFuY2UsIHdoaWNoIG1heVxuICAgICAgICogbm90IGJlIGltbWVkaWF0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHdpbmRvdy5zY0NHU0hNUkNhY2hlW3RoaXMuc3RhdGUuc3R5bGVkQ29tcG9uZW50SWRdID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZ2xvYmFsU3R5bGUucmVtb3ZlU3R5bGVzKHRoaXMuc3R5bGVTaGVldCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEdsb2JhbFN0eWxlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZ2xvYmFsIHN0eWxlIGNvbXBvbmVudCAnICsgdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZCArICcgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgU3R5bGVTaGVldENvbnN1bWVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBmdW5jdGlvbiAoc3R5bGVTaGVldCkge1xuICAgICAgICAgIF90aGlzMi5zdHlsZVNoZWV0ID0gc3R5bGVTaGVldCB8fCBTdHlsZVNoZWV0Lm1hc3RlcjtcblxuICAgICAgICAgIHZhciBnbG9iYWxTdHlsZSA9IF90aGlzMi5zdGF0ZS5nbG9iYWxTdHlsZTtcblxuXG4gICAgICAgICAgaWYgKGdsb2JhbFN0eWxlLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBnbG9iYWxTdHlsZS5yZW5kZXJTdHlsZXMoU1RBVElDX0VYRUNVVElPTl9DT05URVhULCBfdGhpczIuc3R5bGVTaGVldCk7XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgVGhlbWVDb25zdW1lcixcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSBfdGhpczIuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBfdGhpczIucHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQudGhlbWUgPSBkZXRlcm1pbmVUaGVtZShfdGhpczIucHJvcHMsIHRoZW1lLCBkZWZhdWx0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdsb2JhbFN0eWxlLnJlbmRlclN0eWxlcyhjb250ZXh0LCBfdGhpczIuc3R5bGVTaGVldCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBHbG9iYWxTdHlsZUNvbXBvbmVudDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIEdsb2JhbFN0eWxlQ29tcG9uZW50Lmdsb2JhbFN0eWxlID0gc3R5bGU7XG4gIEdsb2JhbFN0eWxlQ29tcG9uZW50LnN0eWxlZENvbXBvbmVudElkID0gaWQ7XG5cblxuICByZXR1cm4gR2xvYmFsU3R5bGVDb21wb25lbnQ7XG59XG5cbi8vIFxuXG52YXIgcmVwbGFjZVdoaXRlc3BhY2UgPSBmdW5jdGlvbiByZXBsYWNlV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHN8XFxcXG4vZywgJycpO1xufTtcblxuZnVuY3Rpb24ga2V5ZnJhbWVzKHN0cmluZ3MpIHtcbiAgLyogV2FybmluZyBpZiB5b3UndmUgdXNlZCBrZXlmcmFtZXMgb24gUmVhY3QgTmF0aXZlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oJ2BrZXlmcmFtZXNgIGNhbm5vdCBiZSB1c2VkIG9uIFJlYWN0TmF0aXZlLCBvbmx5IG9uIHRoZSB3ZWIuIFRvIGRvIGFuaW1hdGlvbiBpbiBSZWFjdE5hdGl2ZSBwbGVhc2UgdXNlIEFuaW1hdGVkLicpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBydWxlcyA9IGNzcy5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKTtcblxuICB2YXIgbmFtZSA9IGdlbmVyYXRlQWxwaGFiZXRpY05hbWUobXVybXVyaGFzaChyZXBsYWNlV2hpdGVzcGFjZShKU09OLnN0cmluZ2lmeShydWxlcykpKSk7XG5cbiAgcmV0dXJuIG5ldyBLZXlmcmFtZXMobmFtZSwgc3RyaW5naWZ5UnVsZXMocnVsZXMsIG5hbWUsICdAa2V5ZnJhbWVzJykpO1xufVxuXG4vLyBcblxudmFyIHdpdGhUaGVtZSA9IChmdW5jdGlvbiAoQ29tcG9uZW50JCQxKSB7XG4gIHZhciBXaXRoVGhlbWUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZUNvbnN1bWVyLFxuICAgICAgbnVsbCxcbiAgICAgIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSBDb21wb25lbnQkJDEuZGVmYXVsdFByb3BzO1xuXG4gICAgICAgIHZhciB0aGVtZVByb3AgPSBkZXRlcm1pbmVUaGVtZShwcm9wcywgdGhlbWUsIGRlZmF1bHRQcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhlbWVQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInICsgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQkJDEpICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQkJDEsIF9leHRlbmRzKHt9LCBwcm9wcywgeyB0aGVtZTogdGhlbWVQcm9wLCByZWY6IHJlZiB9KSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG5cbiAgaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aFRoZW1lLCBDb21wb25lbnQkJDEpO1xuXG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9ICdXaXRoVGhlbWUoJyArIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50JCQxKSArICcpJztcblxuICByZXR1cm4gV2l0aFRoZW1lO1xufSk7XG5cbi8vIFxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9fRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9IQVVOVEVEX0JZX1NQT09LWV9HSE9TVFMgPSB7XG4gIFN0eWxlU2hlZXQ6IFN0eWxlU2hlZXRcbn07XG5cbi8vIFxuXG4vKiBXYXJuaW5nIGlmIHlvdSd2ZSBpbXBvcnRlZCB0aGlzIGZpbGUgb24gUmVhY3QgTmF0aXZlICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5cIiArIFwiUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuXCIgKyAnUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZScpO1xufVxuXG4vKiBXYXJuaW5nIGlmIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiBzdHlsZWQtY29tcG9uZW50cyAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdOb2RlLmpzJykgPT09IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignanNkb20nKSA9PT0gLTEpIHtcbiAgd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddID0gd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddIHx8IDA7XG5cbiAgaWYgKHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSA9PT0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB0aGVyZSBhcmUgc2V2ZXJhbCBpbnN0YW5jZXMgb2YgJ3N0eWxlZC1jb21wb25lbnRzJyBpbml0aWFsaXplZCBpbiB0aGlzIGFwcGxpY2F0aW9uLiBcIiArICdUaGlzIG1heSBjYXVzZSBkeW5hbWljIHN0eWxlcyBub3QgcmVuZGVyaW5nIHByb3Blcmx5LCBlcnJvcnMgaGFwcGVuaW5nIGR1cmluZyByZWh5ZHJhdGlvbiBwcm9jZXNzICcgKyAnYW5kIG1ha2VzIHlvdXIgYXBwbGljYXRpb24gYmlnZ2VyIHdpdGhvdXQgYSBnb29kIHJlYXNvbi5cXG5cXG4nICsgJ1NlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uJyk7XG4gIH1cblxuICB3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gKz0gMTtcbn1cblxuLy9cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkO1xuZXhwb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIGNzcywgaXNTdHlsZWRDb21wb25lbnQsIGtleWZyYW1lcywgU2VydmVyU3R5bGVTaGVldCwgU3R5bGVTaGVldENvbnN1bWVyLCBTdHlsZVNoZWV0Q29udGV4dCwgU3R5bGVTaGVldE1hbmFnZXIsIFRoZW1lQ29uc3VtZXIsIFRoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lLCBfX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfSEFVTlRFRF9CWV9TUE9PS1lfR0hPU1RTIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZVN0eWxlRnVuY3Rpb24sIGNyZWF0ZVBhcnNlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuZXhwb3J0IHsgZ2V0LCBjcmVhdGVQYXJzZXIsIGNyZWF0ZVN0eWxlRnVuY3Rpb24sIGNvbXBvc2UsIHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuZXhwb3J0IHsgbWFyZ2luLCBwYWRkaW5nLCBzcGFjZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NwYWNlJztcbmV4cG9ydCB7IGNvbG9yIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuZXhwb3J0IHsgbGF5b3V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vbGF5b3V0JztcbmV4cG9ydCB7IHR5cG9ncmFwaHkgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90eXBvZ3JhcGh5JztcbmV4cG9ydCB7IGZsZXhib3ggfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9mbGV4Ym94JztcbmV4cG9ydCB7IGJvcmRlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JvcmRlcic7XG5leHBvcnQgeyBiYWNrZ3JvdW5kIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZCc7XG5leHBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uJztcbmV4cG9ydCB7IGdyaWQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ncmlkJztcbmV4cG9ydCB7IHNoYWRvdyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NoYWRvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJveFNoYWRvdywgZGVmYXVsdCBhcyB0ZXh0U2hhZG93IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc2hhZG93JztcbmV4cG9ydCB7IHZhcmlhbnQsIGJ1dHRvblN0eWxlLCB0ZXh0U3R5bGUsIGNvbG9yU3R5bGUgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS92YXJpYW50JzsgLy8gdjQgYXBpIHNoaW1zXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2lkdGgsIGRlZmF1bHQgYXMgaGVpZ2h0LCBkZWZhdWx0IGFzIG1pbldpZHRoLCBkZWZhdWx0IGFzIG1pbkhlaWdodCwgZGVmYXVsdCBhcyBtYXhXaWR0aCwgZGVmYXVsdCBhcyBtYXhIZWlnaHQsIGRlZmF1bHQgYXMgc2l6ZSwgZGVmYXVsdCBhcyB2ZXJ0aWNhbEFsaWduLCBkZWZhdWx0IGFzIGRpc3BsYXksIGRlZmF1bHQgYXMgb3ZlcmZsb3cgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9sYXlvdXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvcGFjaXR5IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb250U2l6ZSwgZGVmYXVsdCBhcyBmb250RmFtaWx5LCBkZWZhdWx0IGFzIGZvbnRXZWlnaHQsIGRlZmF1bHQgYXMgbGluZUhlaWdodCwgZGVmYXVsdCBhcyB0ZXh0QWxpZ24sIGRlZmF1bHQgYXMgZm9udFN0eWxlLCBkZWZhdWx0IGFzIGxldHRlclNwYWNpbmcgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90eXBvZ3JhcGh5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxpZ25JdGVtcywgZGVmYXVsdCBhcyBhbGlnbkNvbnRlbnQsIGRlZmF1bHQgYXMganVzdGlmeUl0ZW1zLCBkZWZhdWx0IGFzIGp1c3RpZnlDb250ZW50LCBkZWZhdWx0IGFzIGZsZXhXcmFwLCBkZWZhdWx0IGFzIGZsZXhEaXJlY3Rpb24sIGRlZmF1bHQgYXMgZmxleCwgZGVmYXVsdCBhcyBmbGV4R3JvdywgZGVmYXVsdCBhcyBmbGV4U2hyaW5rLCBkZWZhdWx0IGFzIGZsZXhCYXNpcywgZGVmYXVsdCBhcyBqdXN0aWZ5U2VsZiwgZGVmYXVsdCBhcyBhbGlnblNlbGYsIGRlZmF1bHQgYXMgb3JkZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9mbGV4Ym94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JpZEdhcCwgZGVmYXVsdCBhcyBncmlkQ29sdW1uR2FwLCBkZWZhdWx0IGFzIGdyaWRSb3dHYXAsIGRlZmF1bHQgYXMgZ3JpZENvbHVtbiwgZGVmYXVsdCBhcyBncmlkUm93LCBkZWZhdWx0IGFzIGdyaWRBdXRvRmxvdywgZGVmYXVsdCBhcyBncmlkQXV0b0NvbHVtbnMsIGRlZmF1bHQgYXMgZ3JpZEF1dG9Sb3dzLCBkZWZhdWx0IGFzIGdyaWRUZW1wbGF0ZUNvbHVtbnMsIGRlZmF1bHQgYXMgZ3JpZFRlbXBsYXRlUm93cywgZGVmYXVsdCBhcyBncmlkVGVtcGxhdGVBcmVhcywgZGVmYXVsdCBhcyBncmlkQXJlYSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2dyaWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3JkZXJXaWR0aCwgZGVmYXVsdCBhcyBib3JkZXJTdHlsZSwgZGVmYXVsdCBhcyBib3JkZXJDb2xvciwgZGVmYXVsdCBhcyBib3JkZXJUb3AsIGRlZmF1bHQgYXMgYm9yZGVyUmlnaHQsIGRlZmF1bHQgYXMgYm9yZGVyQm90dG9tLCBkZWZhdWx0IGFzIGJvcmRlckxlZnQsIGRlZmF1bHQgYXMgYm9yZGVyUmFkaXVzLCBkZWZhdWx0IGFzIGJvcmRlcnMgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiYWNrZ3JvdW5kSW1hZ2UsIGRlZmF1bHQgYXMgYmFja2dyb3VuZFNpemUsIGRlZmF1bHQgYXMgYmFja2dyb3VuZFBvc2l0aW9uLCBkZWZhdWx0IGFzIGJhY2tncm91bmRSZXBlYXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9iYWNrZ3JvdW5kJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgekluZGV4LCBkZWZhdWx0IGFzIHRvcCwgZGVmYXVsdCBhcyByaWdodCwgZGVmYXVsdCBhcyBib3R0b20sIGRlZmF1bHQgYXMgbGVmdCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uJzsgLy8gdjQgc3R5bGUgQVBJIHNoaW1cblxuZXhwb3J0IHZhciBzdHlsZSA9IGZ1bmN0aW9uIHN0eWxlKF9yZWYpIHtcbiAgdmFyIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICBjc3NQcm9wZXJ0eSA9IF9yZWYuY3NzUHJvcGVydHksXG4gICAgICBhbGlhcyA9IF9yZWYuYWxpYXMsXG4gICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgIHRyYW5zZm9ybVZhbHVlID0gX3JlZi50cmFuc2Zvcm1WYWx1ZSxcbiAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIHByb3BlcnRpZXMgPSBfcmVmLnByb3BlcnRpZXM7XG4gIHZhciBjb25maWcgPSB7fTtcbiAgY29uZmlnW3Byb3BdID0gY3JlYXRlU3R5bGVGdW5jdGlvbih7XG4gICAgcHJvcGVydGllczogcHJvcGVydGllcyxcbiAgICBwcm9wZXJ0eTogY3NzUHJvcGVydHkgfHwgcHJvcCxcbiAgICBzY2FsZToga2V5LFxuICAgIGRlZmF1bHRTY2FsZTogc2NhbGUsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1WYWx1ZVxuICB9KTtcbiAgaWYgKGFsaWFzKSBjb25maWdbYWxpYXNdID0gY29uZmlnW3Byb3BdO1xuICB2YXIgcGFyc2UgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlO1xufTtcbiIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyAobW9kdWxlWydleHBvcnRzJ10gPSBmYWN0b3J5KCkpIDpcblx0XHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10gPyBkZWZpbmUoZmFjdG9yeSgpKSA6XG5cdFx0XHQod2luZG93WydzdHlsaXNSdWxlU2hlZXQnXSA9IGZhY3RvcnkoKSlcbn0oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0J1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5zZXJ0UnVsZSkge1xuXHRcdHZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nXG5cdFx0dmFyIG5lZWRsZSA9IGRlbGltaXRlcisnfSdcblxuXHRcdGZ1bmN0aW9uIHRvU2hlZXQgKGJsb2NrKSB7XG5cdFx0XHRpZiAoYmxvY2spXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aW5zZXJ0UnVsZShibG9jayArICd9Jylcblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcnVsZVNoZWV0IChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG5cdFx0XHRzd2l0Y2ggKGNvbnRleHQpIHtcblx0XHRcdFx0Ly8gcHJvcGVydHlcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdC8vIEBpbXBvcnRcblx0XHRcdFx0XHRpZiAoZGVwdGggPT09IDAgJiYgY29udGVudC5jaGFyQ29kZUF0KDApID09PSA2NClcblx0XHRcdFx0XHRcdHJldHVybiBpbnNlcnRSdWxlKGNvbnRlbnQrJzsnKSwgJydcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHQvLyBzZWxlY3RvclxuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0aWYgKG5zID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXJcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHQvLyBhdC1ydWxlXG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRzd2l0Y2ggKG5zKSB7XG5cdFx0XHRcdFx0XHQvLyBAZm9udC1mYWNlLCBAcGFnZVxuXHRcdFx0XHRcdFx0Y2FzZSAxMDI6XG5cdFx0XHRcdFx0XHRjYXNlIDExMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluc2VydFJ1bGUoc2VsZWN0b3JzWzBdK2NvbnRlbnQpLCAnJ1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQgKyAoYXQgPT09IDAgPyBkZWxpbWl0ZXIgOiAnJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgLTI6XG5cdFx0XHRcdFx0Y29udGVudC5zcGxpdChuZWVkbGUpLmZvckVhY2godG9TaGVldClcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKVxuIiwiIWZ1bmN0aW9uKGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUobnVsbCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKG51bGwpKTp3aW5kb3cuc3R5bGlzPWUobnVsbCl9KGZ1bmN0aW9uIGUoYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9L15cXDArL2csYz0vW1xcMFxcclxcZl0vZyxzPS86ICovZyx0PS96b298Z3JhLyxpPS8oWyw6IF0pKHRyYW5zZm9ybSkvZyxmPS8sK1xccyooPyFbXihdKlspXSkvZyxuPS8gK1xccyooPyFbXihdKlspXSkvZyxsPS8gKltcXDBdICovZyxvPS8sXFxyKz8vZyxoPS8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLHU9LzpnbG9iYWxcXCgoKD86W15cXChcXClcXFtcXF1dKnxcXFsuKlxcXXxcXChbXlxcKFxcKV0qXFwpKSopXFwpL2csZD0vXFxXKy9nLGI9L0Aoa1xcdyspXFxzKihcXFMqKVxccyovLHA9Lzo6KHBsYWNlKS9nLGs9LzoocmVhZC1vbmx5KS9nLGc9L1xccysoPz1be1xcXTs9Oj5dKS9nLEE9LyhbW309Oj5dKVxccysvZyxDPS8oXFx7W157XSs/KTsoPz1cXH0pL2csdz0vXFxzezIsfS9nLHY9LyhbXlxcKF0pKDorKSAqL2csbT0vW3N2aF1cXHcrLVt0YmxyXXsyfS8seD0vXFwoXFxzKiguKilcXHMqXFwpL2csJD0vKFtcXHNcXFNdKj8pOy9nLHk9Ly1zZWxmfGZsZXgtL2csTz0vW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8saj0vc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLHo9LyhbXi1dKShpbWFnZS1zZXRcXCgpLyxOPVwiLXdlYmtpdC1cIixTPVwiLW1vei1cIixGPVwiLW1zLVwiLFc9NTkscT0xMjUsQj0xMjMsRD00MCxFPTQxLEc9OTEsSD05MyxJPTEwLEo9MTMsSz05LEw9NjQsTT0zMixQPTM4LFE9NDUsUj05NSxUPTQyLFU9NDQsVj01OCxYPTM5LFk9MzQsWj00NyxfPTYyLGVlPTQzLGFlPTEyNixyZT0wLGNlPTEyLHNlPTExLHRlPTEwNyxpZT0xMDksZmU9MTE1LG5lPTExMixsZT0xMTEsb2U9MTA1LGhlPTk5LHVlPTEwMCxkZT0xMTIsYmU9MSxwZT0xLGtlPTAsZ2U9MSxBZT0xLENlPTEsd2U9MCx2ZT0wLG1lPTAseGU9W10sJGU9W10seWU9MCxPZT1udWxsLGplPS0yLHplPS0xLE5lPTAsU2U9MSxGZT0yLFdlPTMscWU9MCxCZT0xLERlPVwiXCIsRWU9XCJcIixHZT1cIlwiO2Z1bmN0aW9uIEhlKGUsYSxzLHQsaSl7Zm9yKHZhciBmLG4sbz0wLGg9MCx1PTAsZD0wLGc9MCxBPTAsQz0wLHc9MCxtPTAsJD0wLHk9MCxPPTAsaj0wLHo9MCxSPTAsd2U9MCwkZT0wLE9lPTAsamU9MCx6ZT1zLmxlbmd0aCxKZT16ZS0xLFJlPVwiXCIsVGU9XCJcIixVZT1cIlwiLFZlPVwiXCIsWGU9XCJcIixZZT1cIlwiO1I8emU7KXtpZihDPXMuY2hhckNvZGVBdChSKSxSPT09SmUpaWYoaCtkK3UrbyE9PTApe2lmKDAhPT1oKUM9aD09PVo/STpaO2Q9dT1vPTAsemUrKyxKZSsrfWlmKGgrZCt1K289PT0wKXtpZihSPT09SmUpe2lmKHdlPjApVGU9VGUucmVwbGFjZShjLFwiXCIpO2lmKFRlLnRyaW0oKS5sZW5ndGg+MCl7c3dpdGNoKEMpe2Nhc2UgTTpjYXNlIEs6Y2FzZSBXOmNhc2UgSjpjYXNlIEk6YnJlYWs7ZGVmYXVsdDpUZSs9cy5jaGFyQXQoUil9Qz1XfX1pZigxPT09JGUpc3dpdGNoKEMpe2Nhc2UgQjpjYXNlIHE6Y2FzZSBXOmNhc2UgWTpjYXNlIFg6Y2FzZSBEOmNhc2UgRTpjYXNlIFU6JGU9MDtjYXNlIEs6Y2FzZSBKOmNhc2UgSTpjYXNlIE06YnJlYWs7ZGVmYXVsdDpmb3IoJGU9MCxqZT1SLGc9QyxSLS0sQz1XO2plPHplOylzd2l0Y2gocy5jaGFyQ29kZUF0KGplKyspKXtjYXNlIEk6Y2FzZSBKOmNhc2UgVzorK1IsQz1nLGplPXplO2JyZWFrO2Nhc2UgVjppZih3ZT4wKSsrUixDPWc7Y2FzZSBCOmplPXplfX1zd2l0Y2goQyl7Y2FzZSBCOmZvcihnPShUZT1UZS50cmltKCkpLmNoYXJDb2RlQXQoMCkseT0xLGplPSsrUjtSPHplOyl7c3dpdGNoKEM9cy5jaGFyQ29kZUF0KFIpKXtjYXNlIEI6eSsrO2JyZWFrO2Nhc2UgcTp5LS07YnJlYWs7Y2FzZSBaOnN3aXRjaChBPXMuY2hhckNvZGVBdChSKzEpKXtjYXNlIFQ6Y2FzZSBaOlI9UWUoQSxSLEplLHMpfWJyZWFrO2Nhc2UgRzpDKys7Y2FzZSBEOkMrKztjYXNlIFk6Y2FzZSBYOmZvcig7UisrPEplJiZzLmNoYXJDb2RlQXQoUikhPT1DOyk7fWlmKDA9PT15KWJyZWFrO1IrK31pZihVZT1zLnN1YnN0cmluZyhqZSxSKSxnPT09cmUpZz0oVGU9VGUucmVwbGFjZShyLFwiXCIpLnRyaW0oKSkuY2hhckNvZGVBdCgwKTtzd2l0Y2goZyl7Y2FzZSBMOmlmKHdlPjApVGU9VGUucmVwbGFjZShjLFwiXCIpO3N3aXRjaChBPVRlLmNoYXJDb2RlQXQoMSkpe2Nhc2UgdWU6Y2FzZSBpZTpjYXNlIGZlOmNhc2UgUTpmPWE7YnJlYWs7ZGVmYXVsdDpmPXhlfWlmKGplPShVZT1IZShhLGYsVWUsQSxpKzEpKS5sZW5ndGgsbWU+MCYmMD09PWplKWplPVRlLmxlbmd0aDtpZih5ZT4wKWlmKGY9SWUoeGUsVGUsT2UpLG49UGUoV2UsVWUsZixhLHBlLGJlLGplLEEsaSx0KSxUZT1mLmpvaW4oXCJcIiksdm9pZCAwIT09bilpZigwPT09KGplPShVZT1uLnRyaW0oKSkubGVuZ3RoKSlBPTAsVWU9XCJcIjtpZihqZT4wKXN3aXRjaChBKXtjYXNlIGZlOlRlPVRlLnJlcGxhY2UoeCxNZSk7Y2FzZSB1ZTpjYXNlIGllOmNhc2UgUTpVZT1UZStcIntcIitVZStcIn1cIjticmVhaztjYXNlIHRlOmlmKFVlPShUZT1UZS5yZXBsYWNlKGIsXCIkMSAkMlwiKyhCZT4wP0RlOlwiXCIpKSkrXCJ7XCIrVWUrXCJ9XCIsMT09PUFlfHwyPT09QWUmJkxlKFwiQFwiK1VlLDMpKVVlPVwiQFwiK04rVWUrXCJAXCIrVWU7ZWxzZSBVZT1cIkBcIitVZTticmVhaztkZWZhdWx0OmlmKFVlPVRlK1VlLHQ9PT1kZSlWZSs9VWUsVWU9XCJcIn1lbHNlIFVlPVwiXCI7YnJlYWs7ZGVmYXVsdDpVZT1IZShhLEllKGEsVGUsT2UpLFVlLHQsaSsxKX1YZSs9VWUsTz0wLCRlPTAsej0wLHdlPTAsT2U9MCxqPTAsVGU9XCJcIixVZT1cIlwiLEM9cy5jaGFyQ29kZUF0KCsrUik7YnJlYWs7Y2FzZSBxOmNhc2UgVzppZigoamU9KFRlPSh3ZT4wP1RlLnJlcGxhY2UoYyxcIlwiKTpUZSkudHJpbSgpKS5sZW5ndGgpPjEpe2lmKDA9PT16KWlmKChnPVRlLmNoYXJDb2RlQXQoMCkpPT09UXx8Zz45NiYmZzwxMjMpamU9KFRlPVRlLnJlcGxhY2UoXCIgXCIsXCI6XCIpKS5sZW5ndGg7aWYoeWU+MClpZih2b2lkIDAhPT0obj1QZShTZSxUZSxhLGUscGUsYmUsVmUubGVuZ3RoLHQsaSx0KSkpaWYoMD09PShqZT0oVGU9bi50cmltKCkpLmxlbmd0aCkpVGU9XCJcXDBcXDBcIjtzd2l0Y2goZz1UZS5jaGFyQ29kZUF0KDApLEE9VGUuY2hhckNvZGVBdCgxKSxnKXtjYXNlIHJlOmJyZWFrO2Nhc2UgTDppZihBPT09b2V8fEE9PT1oZSl7WWUrPVRlK3MuY2hhckF0KFIpO2JyZWFrfWRlZmF1bHQ6aWYoVGUuY2hhckNvZGVBdChqZS0xKT09PVYpYnJlYWs7VmUrPUtlKFRlLGcsQSxUZS5jaGFyQ29kZUF0KDIpKX19Tz0wLCRlPTAsej0wLHdlPTAsT2U9MCxUZT1cIlwiLEM9cy5jaGFyQ29kZUF0KCsrUil9fXN3aXRjaChDKXtjYXNlIEo6Y2FzZSBJOmlmKGgrZCt1K28rdmU9PT0wKXN3aXRjaCgkKXtjYXNlIEU6Y2FzZSBYOmNhc2UgWTpjYXNlIEw6Y2FzZSBhZTpjYXNlIF86Y2FzZSBUOmNhc2UgZWU6Y2FzZSBaOmNhc2UgUTpjYXNlIFY6Y2FzZSBVOmNhc2UgVzpjYXNlIEI6Y2FzZSBxOmJyZWFrO2RlZmF1bHQ6aWYoej4wKSRlPTF9aWYoaD09PVopaD0wO2Vsc2UgaWYoZ2UrTz09PTAmJnQhPT10ZSYmVGUubGVuZ3RoPjApd2U9MSxUZSs9XCJcXDBcIjtpZih5ZSpxZT4wKVBlKE5lLFRlLGEsZSxwZSxiZSxWZS5sZW5ndGgsdCxpLHQpO2JlPTEscGUrKzticmVhaztjYXNlIFc6Y2FzZSBxOmlmKGgrZCt1K289PT0wKXtiZSsrO2JyZWFrfWRlZmF1bHQ6c3dpdGNoKGJlKyssUmU9cy5jaGFyQXQoUiksQyl7Y2FzZSBLOmNhc2UgTTppZihkK28raD09PTApc3dpdGNoKHcpe2Nhc2UgVTpjYXNlIFY6Y2FzZSBLOmNhc2UgTTpSZT1cIlwiO2JyZWFrO2RlZmF1bHQ6aWYoQyE9PU0pUmU9XCIgXCJ9YnJlYWs7Y2FzZSByZTpSZT1cIlxcXFwwXCI7YnJlYWs7Y2FzZSBjZTpSZT1cIlxcXFxmXCI7YnJlYWs7Y2FzZSBzZTpSZT1cIlxcXFx2XCI7YnJlYWs7Y2FzZSBQOmlmKGQraCtvPT09MCYmZ2U+MClPZT0xLHdlPTEsUmU9XCJcXGZcIitSZTticmVhaztjYXNlIDEwODppZihkK2grbytrZT09PTAmJno+MClzd2l0Y2goUi16KXtjYXNlIDI6aWYodz09PW5lJiZzLmNoYXJDb2RlQXQoUi0zKT09PVYpa2U9dztjYXNlIDg6aWYobT09PWxlKWtlPW19YnJlYWs7Y2FzZSBWOmlmKGQraCtvPT09MCl6PVI7YnJlYWs7Y2FzZSBVOmlmKGgrdStkK289PT0wKXdlPTEsUmUrPVwiXFxyXCI7YnJlYWs7Y2FzZSBZOmNhc2UgWDppZigwPT09aClkPWQ9PT1DPzA6MD09PWQ/QzpkO2JyZWFrO2Nhc2UgRzppZihkK2grdT09PTApbysrO2JyZWFrO2Nhc2UgSDppZihkK2grdT09PTApby0tO2JyZWFrO2Nhc2UgRTppZihkK2grbz09PTApdS0tO2JyZWFrO2Nhc2UgRDppZihkK2grbz09PTApe2lmKDA9PT1PKXN3aXRjaCgyKncrMyptKXtjYXNlIDUzMzpicmVhaztkZWZhdWx0Onk9MCxPPTF9dSsrfWJyZWFrO2Nhc2UgTDppZihoK3UrZCtvK3oraj09PTApaj0xO2JyZWFrO2Nhc2UgVDpjYXNlIFo6aWYoZCtvK3U+MClicmVhaztzd2l0Y2goaCl7Y2FzZSAwOnN3aXRjaCgyKkMrMypzLmNoYXJDb2RlQXQoUisxKSl7Y2FzZSAyMzU6aD1aO2JyZWFrO2Nhc2UgMjIwOmplPVIsaD1UfWJyZWFrO2Nhc2UgVDppZihDPT09WiYmdz09PVQmJmplKzIhPT1SKXtpZigzMz09PXMuY2hhckNvZGVBdChqZSsyKSlWZSs9cy5zdWJzdHJpbmcoamUsUisxKTtSZT1cIlwiLGg9MH19fWlmKDA9PT1oKXtpZihnZStkK28raj09PTAmJnQhPT10ZSYmQyE9PVcpc3dpdGNoKEMpe2Nhc2UgVTpjYXNlIGFlOmNhc2UgXzpjYXNlIGVlOmNhc2UgRTpjYXNlIEQ6aWYoMD09PU8pe3N3aXRjaCh3KXtjYXNlIEs6Y2FzZSBNOmNhc2UgSTpjYXNlIEo6UmUrPVwiXFwwXCI7YnJlYWs7ZGVmYXVsdDpSZT1cIlxcMFwiK1JlKyhDPT09VT9cIlwiOlwiXFwwXCIpfXdlPTF9ZWxzZSBzd2l0Y2goQyl7Y2FzZSBEOmlmKHorNz09PVImJjEwOD09PXcpej0wO089Kyt5O2JyZWFrO2Nhc2UgRTppZigwPT0oTz0tLXkpKXdlPTEsUmUrPVwiXFwwXCJ9YnJlYWs7Y2FzZSBLOmNhc2UgTTpzd2l0Y2godyl7Y2FzZSByZTpjYXNlIEI6Y2FzZSBxOmNhc2UgVzpjYXNlIFU6Y2FzZSBjZTpjYXNlIEs6Y2FzZSBNOmNhc2UgSTpjYXNlIEo6YnJlYWs7ZGVmYXVsdDppZigwPT09Tyl3ZT0xLFJlKz1cIlxcMFwifX1pZihUZSs9UmUsQyE9PU0mJkMhPT1LKSQ9Q319bT13LHc9QyxSKyt9aWYoamU9VmUubGVuZ3RoLG1lPjApaWYoMD09PWplJiYwPT09WGUubGVuZ3RoJiYwPT09YVswXS5sZW5ndGg9PWZhbHNlKWlmKHQhPT1pZXx8MT09PWEubGVuZ3RoJiYoZ2U+MD9FZTpHZSk9PT1hWzBdKWplPWEuam9pbihcIixcIikubGVuZ3RoKzI7aWYoamU+MCl7aWYoZj0wPT09Z2UmJnQhPT10ZT9mdW5jdGlvbihlKXtmb3IodmFyIGEscixzPTAsdD1lLmxlbmd0aCxpPUFycmF5KHQpO3M8dDsrK3Mpe2Zvcih2YXIgZj1lW3NdLnNwbGl0KGwpLG49XCJcIixvPTAsaD0wLHU9MCxkPTAsYj1mLmxlbmd0aDtvPGI7KytvKXtpZigwPT09KGg9KHI9ZltvXSkubGVuZ3RoKSYmYj4xKWNvbnRpbnVlO2lmKHU9bi5jaGFyQ29kZUF0KG4ubGVuZ3RoLTEpLGQ9ci5jaGFyQ29kZUF0KDApLGE9XCJcIiwwIT09bylzd2l0Y2godSl7Y2FzZSBUOmNhc2UgYWU6Y2FzZSBfOmNhc2UgZWU6Y2FzZSBNOmNhc2UgRDpicmVhaztkZWZhdWx0OmE9XCIgXCJ9c3dpdGNoKGQpe2Nhc2UgUDpyPWErRWU7Y2FzZSBhZTpjYXNlIF86Y2FzZSBlZTpjYXNlIE06Y2FzZSBFOmNhc2UgRDpicmVhaztjYXNlIEc6cj1hK3IrRWU7YnJlYWs7Y2FzZSBWOnN3aXRjaCgyKnIuY2hhckNvZGVBdCgxKSszKnIuY2hhckNvZGVBdCgyKSl7Y2FzZSA1MzA6aWYoQ2U+MCl7cj1hK3Iuc3Vic3RyaW5nKDgsaC0xKTticmVha31kZWZhdWx0OmlmKG88MXx8ZltvLTFdLmxlbmd0aDwxKXI9YStFZStyfWJyZWFrO2Nhc2UgVTphPVwiXCI7ZGVmYXVsdDppZihoPjEmJnIuaW5kZXhPZihcIjpcIik+MClyPWErci5yZXBsYWNlKHYsXCIkMVwiK0VlK1wiJDJcIik7ZWxzZSByPWErcitFZX1uKz1yfWlbc109bi5yZXBsYWNlKGMsXCJcIikudHJpbSgpfXJldHVybiBpfShhKTphLHllPjApaWYodm9pZCAwIT09KG49UGUoRmUsVmUsZixlLHBlLGJlLGplLHQsaSx0KSkmJjA9PT0oVmU9bikubGVuZ3RoKXJldHVybiBZZStWZStYZTtpZihWZT1mLmpvaW4oXCIsXCIpK1wie1wiK1ZlK1wifVwiLEFlKmtlIT0wKXtpZigyPT09QWUmJiFMZShWZSwyKSlrZT0wO3N3aXRjaChrZSl7Y2FzZSBsZTpWZT1WZS5yZXBsYWNlKGssXCI6XCIrUytcIiQxXCIpK1ZlO2JyZWFrO2Nhc2UgbmU6VmU9VmUucmVwbGFjZShwLFwiOjpcIitOK1wiaW5wdXQtJDFcIikrVmUucmVwbGFjZShwLFwiOjpcIitTK1wiJDFcIikrVmUucmVwbGFjZShwLFwiOlwiK0YrXCJpbnB1dC0kMVwiKStWZX1rZT0wfX1yZXR1cm4gWWUrVmUrWGV9ZnVuY3Rpb24gSWUoZSxhLHIpe3ZhciBjPWEudHJpbSgpLnNwbGl0KG8pLHM9Yyx0PWMubGVuZ3RoLGk9ZS5sZW5ndGg7c3dpdGNoKGkpe2Nhc2UgMDpjYXNlIDE6Zm9yKHZhciBmPTAsbj0wPT09aT9cIlwiOmVbMF0rXCIgXCI7Zjx0OysrZilzW2ZdPUplKG4sc1tmXSxyLGkpLnRyaW0oKTticmVhaztkZWZhdWx0OmY9MDt2YXIgbD0wO2ZvcihzPVtdO2Y8dDsrK2YpZm9yKHZhciBoPTA7aDxpOysraClzW2wrK109SmUoZVtoXStcIiBcIixjW2ZdLHIsaSkudHJpbSgpfXJldHVybiBzfWZ1bmN0aW9uIEplKGUsYSxyLGMpe3ZhciBzPWEsdD1zLmNoYXJDb2RlQXQoMCk7aWYodDwzMyl0PShzPXMudHJpbSgpKS5jaGFyQ29kZUF0KDApO3N3aXRjaCh0KXtjYXNlIFA6c3dpdGNoKGdlK2Mpe2Nhc2UgMDpjYXNlIDE6aWYoMD09PWUudHJpbSgpLmxlbmd0aClicmVhaztkZWZhdWx0OnJldHVybiBzLnJlcGxhY2UoaCxcIiQxXCIrZS50cmltKCkpfWJyZWFrO2Nhc2UgVjpzd2l0Y2gocy5jaGFyQ29kZUF0KDEpKXtjYXNlIDEwMzppZihDZT4wJiZnZT4wKXJldHVybiBzLnJlcGxhY2UodSxcIiQxXCIpLnJlcGxhY2UoaCxcIiQxXCIrR2UpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGUudHJpbSgpK3MucmVwbGFjZShoLFwiJDFcIitlLnRyaW0oKSl9ZGVmYXVsdDppZihyKmdlPjAmJnMuaW5kZXhPZihcIlxcZlwiKT4wKXJldHVybiBzLnJlcGxhY2UoaCwoZS5jaGFyQ29kZUF0KDApPT09Vj9cIlwiOlwiJDFcIikrZS50cmltKCkpfXJldHVybiBlK3N9ZnVuY3Rpb24gS2UoZSxhLHIsYyl7dmFyIGwsbz0wLGg9ZStcIjtcIix1PTIqYSszKnIrNCpjO2lmKDk0ND09PXUpcmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBhPWUubGVuZ3RoLHI9ZS5pbmRleE9mKFwiOlwiLDkpKzEsYz1lLnN1YnN0cmluZygwLHIpLnRyaW0oKSxzPWUuc3Vic3RyaW5nKHIsYS0xKS50cmltKCk7c3dpdGNoKGUuY2hhckNvZGVBdCg5KSpCZSl7Y2FzZSAwOmJyZWFrO2Nhc2UgUTppZigxMTAhPT1lLmNoYXJDb2RlQXQoMTApKWJyZWFrO2RlZmF1bHQ6Zm9yKHZhciB0PXMuc3BsaXQoKHM9XCJcIixmKSksaT0wLHI9MCxhPXQubGVuZ3RoO2k8YTtyPTAsKytpKXtmb3IodmFyIGw9dFtpXSxvPWwuc3BsaXQobik7bD1vW3JdOyl7dmFyIGg9bC5jaGFyQ29kZUF0KDApO2lmKDE9PT1CZSYmKGg+TCYmaDw5MHx8aD45NiYmaDwxMjN8fGg9PT1SfHxoPT09USYmbC5jaGFyQ29kZUF0KDEpIT09USkpc3dpdGNoKGlzTmFOKHBhcnNlRmxvYXQobCkpKygtMSE9PWwuaW5kZXhPZihcIihcIikpKXtjYXNlIDE6c3dpdGNoKGwpe2Nhc2VcImluZmluaXRlXCI6Y2FzZVwiYWx0ZXJuYXRlXCI6Y2FzZVwiYmFja3dhcmRzXCI6Y2FzZVwicnVubmluZ1wiOmNhc2VcIm5vcm1hbFwiOmNhc2VcImZvcndhcmRzXCI6Y2FzZVwiYm90aFwiOmNhc2VcIm5vbmVcIjpjYXNlXCJsaW5lYXJcIjpjYXNlXCJlYXNlXCI6Y2FzZVwiZWFzZS1pblwiOmNhc2VcImVhc2Utb3V0XCI6Y2FzZVwiZWFzZS1pbi1vdXRcIjpjYXNlXCJwYXVzZWRcIjpjYXNlXCJyZXZlcnNlXCI6Y2FzZVwiYWx0ZXJuYXRlLXJldmVyc2VcIjpjYXNlXCJpbmhlcml0XCI6Y2FzZVwiaW5pdGlhbFwiOmNhc2VcInVuc2V0XCI6Y2FzZVwic3RlcC1zdGFydFwiOmNhc2VcInN0ZXAtZW5kXCI6YnJlYWs7ZGVmYXVsdDpsKz1EZX19b1tyKytdPWx9cys9KDA9PT1pP1wiXCI6XCIsXCIpK28uam9pbihcIiBcIil9fWlmKHM9YytzK1wiO1wiLDE9PT1BZXx8Mj09PUFlJiZMZShzLDEpKXJldHVybiBOK3MrcztyZXR1cm4gc30oaCk7ZWxzZSBpZigwPT09QWV8fDI9PT1BZSYmIUxlKGgsMSkpcmV0dXJuIGg7c3dpdGNoKHUpe2Nhc2UgMTAxNTpyZXR1cm4gOTc9PT1oLmNoYXJDb2RlQXQoMTApP04raCtoOmg7Y2FzZSA5NTE6cmV0dXJuIDExNj09PWguY2hhckNvZGVBdCgzKT9OK2graDpoO2Nhc2UgOTYzOnJldHVybiAxMTA9PT1oLmNoYXJDb2RlQXQoNSk/TitoK2g6aDtjYXNlIDEwMDk6aWYoMTAwIT09aC5jaGFyQ29kZUF0KDQpKWJyZWFrO2Nhc2UgOTY5OmNhc2UgOTQyOnJldHVybiBOK2graDtjYXNlIDk3ODpyZXR1cm4gTitoK1MraCtoO2Nhc2UgMTAxOTpjYXNlIDk4MzpyZXR1cm4gTitoK1MraCtGK2graDtjYXNlIDg4MzppZihoLmNoYXJDb2RlQXQoOCk9PT1RKXJldHVybiBOK2graDtpZihoLmluZGV4T2YoXCJpbWFnZS1zZXQoXCIsMTEpPjApcmV0dXJuIGgucmVwbGFjZSh6LFwiJDFcIitOK1wiJDJcIikraDtyZXR1cm4gaDtjYXNlIDkzMjppZihoLmNoYXJDb2RlQXQoNCk9PT1RKXN3aXRjaChoLmNoYXJDb2RlQXQoNSkpe2Nhc2UgMTAzOnJldHVybiBOK1wiYm94LVwiK2gucmVwbGFjZShcIi1ncm93XCIsXCJcIikrTitoK0YraC5yZXBsYWNlKFwiZ3Jvd1wiLFwicG9zaXRpdmVcIikraDtjYXNlIDExNTpyZXR1cm4gTitoK0YraC5yZXBsYWNlKFwic2hyaW5rXCIsXCJuZWdhdGl2ZVwiKStoO2Nhc2UgOTg6cmV0dXJuIE4raCtGK2gucmVwbGFjZShcImJhc2lzXCIsXCJwcmVmZXJyZWQtc2l6ZVwiKStofXJldHVybiBOK2grRitoK2g7Y2FzZSA5NjQ6cmV0dXJuIE4raCtGK1wiZmxleC1cIitoK2g7Y2FzZSAxMDIzOmlmKDk5IT09aC5jaGFyQ29kZUF0KDgpKWJyZWFrO3JldHVybiBsPWguc3Vic3RyaW5nKGguaW5kZXhPZihcIjpcIiwxNSkpLnJlcGxhY2UoXCJmbGV4LVwiLFwiXCIpLnJlcGxhY2UoXCJzcGFjZS1iZXR3ZWVuXCIsXCJqdXN0aWZ5XCIpLE4rXCJib3gtcGFja1wiK2wrTitoK0YrXCJmbGV4LXBhY2tcIitsK2g7Y2FzZSAxMDA1OnJldHVybiB0LnRlc3QoaCk/aC5yZXBsYWNlKHMsXCI6XCIrTikraC5yZXBsYWNlKHMsXCI6XCIrUykraDpoO2Nhc2UgMWUzOnN3aXRjaChvPShsPWguc3Vic3RyaW5nKDEzKS50cmltKCkpLmluZGV4T2YoXCItXCIpKzEsbC5jaGFyQ29kZUF0KDApK2wuY2hhckNvZGVBdChvKSl7Y2FzZSAyMjY6bD1oLnJlcGxhY2UobSxcInRiXCIpO2JyZWFrO2Nhc2UgMjMyOmw9aC5yZXBsYWNlKG0sXCJ0Yi1ybFwiKTticmVhaztjYXNlIDIyMDpsPWgucmVwbGFjZShtLFwibHJcIik7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gaH1yZXR1cm4gTitoK0YrbCtoO2Nhc2UgMTAxNzppZigtMT09PWguaW5kZXhPZihcInN0aWNreVwiLDkpKXJldHVybiBoO2Nhc2UgOTc1OnN3aXRjaChvPShoPWUpLmxlbmd0aC0xMCx1PShsPSgzMz09PWguY2hhckNvZGVBdChvKT9oLnN1YnN0cmluZygwLG8pOmgpLnN1YnN0cmluZyhlLmluZGV4T2YoXCI6XCIsNykrMSkudHJpbSgpKS5jaGFyQ29kZUF0KDApKygwfGwuY2hhckNvZGVBdCg3KSkpe2Nhc2UgMjAzOmlmKGwuY2hhckNvZGVBdCg4KTwxMTEpYnJlYWs7Y2FzZSAxMTU6aD1oLnJlcGxhY2UobCxOK2wpK1wiO1wiK2g7YnJlYWs7Y2FzZSAyMDc6Y2FzZSAxMDI6aD1oLnJlcGxhY2UobCxOKyh1PjEwMj9cImlubGluZS1cIjpcIlwiKStcImJveFwiKStcIjtcIitoLnJlcGxhY2UobCxOK2wpK1wiO1wiK2gucmVwbGFjZShsLEYrbCtcImJveFwiKStcIjtcIitofXJldHVybiBoK1wiO1wiO2Nhc2UgOTM4OmlmKGguY2hhckNvZGVBdCg1KT09PVEpc3dpdGNoKGguY2hhckNvZGVBdCg2KSl7Y2FzZSAxMDU6cmV0dXJuIGw9aC5yZXBsYWNlKFwiLWl0ZW1zXCIsXCJcIiksTitoK04rXCJib3gtXCIrbCtGK1wiZmxleC1cIitsK2g7Y2FzZSAxMTU6cmV0dXJuIE4raCtGK1wiZmxleC1pdGVtLVwiK2gucmVwbGFjZSh5LFwiXCIpK2g7ZGVmYXVsdDpyZXR1cm4gTitoK0YrXCJmbGV4LWxpbmUtcGFja1wiK2gucmVwbGFjZShcImFsaWduLWNvbnRlbnRcIixcIlwiKS5yZXBsYWNlKHksXCJcIikraH1icmVhaztjYXNlIDk3MzpjYXNlIDk4OTppZihoLmNoYXJDb2RlQXQoMykhPT1RfHwxMjI9PT1oLmNoYXJDb2RlQXQoNCkpYnJlYWs7Y2FzZSA5MzE6Y2FzZSA5NTM6aWYodHJ1ZT09PWoudGVzdChlKSlpZigxMTU9PT0obD1lLnN1YnN0cmluZyhlLmluZGV4T2YoXCI6XCIpKzEpKS5jaGFyQ29kZUF0KDApKXJldHVybiBLZShlLnJlcGxhY2UoXCJzdHJldGNoXCIsXCJmaWxsLWF2YWlsYWJsZVwiKSxhLHIsYykucmVwbGFjZShcIjpmaWxsLWF2YWlsYWJsZVwiLFwiOnN0cmV0Y2hcIik7ZWxzZSByZXR1cm4gaC5yZXBsYWNlKGwsTitsKStoLnJlcGxhY2UobCxTK2wucmVwbGFjZShcImZpbGwtXCIsXCJcIikpK2g7YnJlYWs7Y2FzZSA5NjI6aWYoaD1OK2grKDEwMj09PWguY2hhckNvZGVBdCg1KT9GK2g6XCJcIikraCxyK2M9PT0yMTEmJjEwNT09PWguY2hhckNvZGVBdCgxMykmJmguaW5kZXhPZihcInRyYW5zZm9ybVwiLDEwKT4wKXJldHVybiBoLnN1YnN0cmluZygwLGguaW5kZXhPZihcIjtcIiwyNykrMSkucmVwbGFjZShpLFwiJDFcIitOK1wiJDJcIikraH1yZXR1cm4gaH1mdW5jdGlvbiBMZShlLGEpe3ZhciByPWUuaW5kZXhPZigxPT09YT9cIjpcIjpcIntcIiksYz1lLnN1YnN0cmluZygwLDMhPT1hP3I6MTApLHM9ZS5zdWJzdHJpbmcocisxLGUubGVuZ3RoLTEpO3JldHVybiBPZSgyIT09YT9jOmMucmVwbGFjZShPLFwiJDFcIikscyxhKX1mdW5jdGlvbiBNZShlLGEpe3ZhciByPUtlKGEsYS5jaGFyQ29kZUF0KDApLGEuY2hhckNvZGVBdCgxKSxhLmNoYXJDb2RlQXQoMikpO3JldHVybiByIT09YStcIjtcIj9yLnJlcGxhY2UoJCxcIiBvciAoJDEpXCIpLnN1YnN0cmluZyg0KTpcIihcIithK1wiKVwifWZ1bmN0aW9uIFBlKGUsYSxyLGMscyx0LGksZixuLGwpe2Zvcih2YXIgbyxoPTAsdT1hO2g8eWU7KytoKXN3aXRjaChvPSRlW2hdLmNhbGwoVGUsZSx1LHIsYyxzLHQsaSxmLG4sbCkpe2Nhc2Ugdm9pZCAwOmNhc2UgZmFsc2U6Y2FzZSB0cnVlOmNhc2UgbnVsbDpicmVhaztkZWZhdWx0OnU9b31pZih1IT09YSlyZXR1cm4gdX1mdW5jdGlvbiBRZShlLGEscixjKXtmb3IodmFyIHM9YSsxO3M8cjsrK3Mpc3dpdGNoKGMuY2hhckNvZGVBdChzKSl7Y2FzZSBaOmlmKGU9PT1UKWlmKGMuY2hhckNvZGVBdChzLTEpPT09VCYmYSsyIT09cylyZXR1cm4gcysxO2JyZWFrO2Nhc2UgSTppZihlPT09WilyZXR1cm4gcysxfXJldHVybiBzfWZ1bmN0aW9uIFJlKGUpe2Zvcih2YXIgYSBpbiBlKXt2YXIgcj1lW2FdO3N3aXRjaChhKXtjYXNlXCJrZXlmcmFtZVwiOkJlPTB8cjticmVhaztjYXNlXCJnbG9iYWxcIjpDZT0wfHI7YnJlYWs7Y2FzZVwiY2FzY2FkZVwiOmdlPTB8cjticmVhaztjYXNlXCJjb21wcmVzc1wiOndlPTB8cjticmVhaztjYXNlXCJzZW1pY29sb25cIjp2ZT0wfHI7YnJlYWs7Y2FzZVwicHJlc2VydmVcIjptZT0wfHI7YnJlYWs7Y2FzZVwicHJlZml4XCI6aWYoT2U9bnVsbCwhcilBZT0wO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2YgcilBZT0xO2Vsc2UgQWU9MixPZT1yfX1yZXR1cm4gUmV9ZnVuY3Rpb24gVGUoYSxyKXtpZih2b2lkIDAhPT10aGlzJiZ0aGlzLmNvbnN0cnVjdG9yPT09VGUpcmV0dXJuIGUoYSk7dmFyIHM9YSx0PXMuY2hhckNvZGVBdCgwKTtpZih0PDMzKXQ9KHM9cy50cmltKCkpLmNoYXJDb2RlQXQoMCk7aWYoQmU+MClEZT1zLnJlcGxhY2UoZCx0PT09Rz9cIlwiOlwiLVwiKTtpZih0PTEsMT09PWdlKUdlPXM7ZWxzZSBFZT1zO3ZhciBpLGY9W0dlXTtpZih5ZT4wKWlmKHZvaWQgMCE9PShpPVBlKHplLHIsZixmLHBlLGJlLDAsMCwwLDApKSYmXCJzdHJpbmdcIj09dHlwZW9mIGkpcj1pO3ZhciBuPUhlKHhlLGYsciwwLDApO2lmKHllPjApaWYodm9pZCAwIT09KGk9UGUoamUsbixmLGYscGUsYmUsbi5sZW5ndGgsMCwwLDApKSYmXCJzdHJpbmdcIiE9dHlwZW9mKG49aSkpdD0wO3JldHVybiBEZT1cIlwiLEdlPVwiXCIsRWU9XCJcIixrZT0wLHBlPTEsYmU9MSx3ZSp0PT0wP246bi5yZXBsYWNlKGMsXCJcIikucmVwbGFjZShnLFwiXCIpLnJlcGxhY2UoQSxcIiQxXCIpLnJlcGxhY2UoQyxcIiQxXCIpLnJlcGxhY2UodyxcIiBcIil9aWYoVGUudXNlPWZ1bmN0aW9uIGUoYSl7c3dpdGNoKGEpe2Nhc2Ugdm9pZCAwOmNhc2UgbnVsbDp5ZT0kZS5sZW5ndGg9MDticmVhaztkZWZhdWx0OmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJGVbeWUrK109YTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBhKWZvcih2YXIgcj0wLGM9YS5sZW5ndGg7cjxjOysrcillKGFbcl0pO2Vsc2UgcWU9MHwhIWF9cmV0dXJuIGV9LFRlLnNldD1SZSx2b2lkIDAhPT1hKVJlKGEpO3JldHVybiBUZX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGlzLm1pbi5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBTdHlsZWQgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IHRleHQsIHR5cGUsIGlzRmx1aWQsIGlzVHJhbnNwYXJlbnQsIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgbWF4V2lkdGggPSBpc0ZsdWlkID8gJzEwMCUnIDogJ25vbmUnO1xuICBjb25zdCB3aWR0aCA9IGlzRmx1aWQgPyAnMTAwJScgOiAnbm9uZSc7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGlzVHJhbnNwYXJlbnQgPyAndHJhbnNwYXJlbnQnIDogYCR7Y29sb3JzLmJsdWV9YDtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuQnRuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAgIH19XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvU3R5bGVkLkJ0bj5cbiAgKTtcbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNGbHVpZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnYnV0dG9uJyxcbiAgaXNUcmFuc3BhcmVudDogZmFsc2UsXG4gIGlzRmx1aWQ6IGZhbHNlLFxufTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgeyBTdHlsZWQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcblxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsLFxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSxcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDp2YWxpZCB7XG4gIC8vIFRPRE86IGNvdWxkIGJlIHJlbW92ZWRcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7ICAgXG4gIH1cbiAgXG4gICR7Y29sb3J9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcbiAgY29uc3QgeyB0eXBlLCB3aWR0aCwgbGFiZWxUZXh0LCBpZCwgbmFtZSwgaXNGbHVpZCwgLi4ucmVzdFByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibHVlOiBjb2xvciwgcHJpbWFyeTogYmdDb2xvciB9ID0gY29sb3JzO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5Db250YWluZXJcbiAgICAgIHdpZHRoPXtpc0ZsdWlkID8gJzEwMCUnIDogd2lkdGh9XG4gICAgPlxuICAgICAgPFN0eWxlZExhYmVsXG4gICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgPntsYWJlbFRleHR9PC9TdHlsZWRMYWJlbD5cbiAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgYmc9e2JnQ29sb3J9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cbiAgKTtcbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpc0ZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB0eXBlOiAndGV4dCcsXG4gIHdpZHRoOiAnMzI3cHgnLFxuICBpc0ZsdWlkOiBmYWxzZSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbG9ycyc7XG5cbmNvbnN0IFN3aXRjaENvbnRhaW5lciA9IHN0eWxlZC5sYWJlbGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3dpdGNoZXJCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuYDtcblxuY29uc3QgQ2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaXNFbmFibGVkID8gY29sb3JzLmJsdWUgOiBjb2xvcnMuc2Vjb25kYXJ5M307XG4gICR7cHJvcHMgPT4gKHByb3BzLmlzRW5hYmxlZCA/ICdyaWdodCcgOiAnbGVmdCcpfTogMDtcbmA7XG5cbmNvbnN0IEhpZGRlbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gU3dpdGNoKHByb3BzKSB7XG4gIGRlYnVnZ2VyO1xuICBjb25zdCBbaXNFbmFibGVkLCBzZXRFbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBpZCwgb25DaGFuZ2UsIHN0YXRlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hDb250YWluZXI+XG4gICAgICA8U3dpdGNoZXJCYWNrZ3JvdW5kIGh0bWxGb3I9e2lkfSAvPlxuICAgICAgPENpcmNsZSBpc0VuYWJsZWQ9e2lzRW5hYmxlZH0gLz5cbiAgICAgIDxIaWRkZW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZShldmVudCk7XG4gICAgICAgICAgICBzZXRFbmFibGVkKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAvPlxuICAgICAgPC9IaWRkZW4+XG4gICAgPC9Td2l0Y2hDb250YWluZXI+XG4gICk7XG59XG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3RhdGU6IFByb3BUeXBlcy5ib29sXG59O1xuU3dpdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6ICdzd2l0Y2hlcicsXG4gIHN0YXRlOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBibGFjazogJyMwMDAwMDAnLFxuICBibHVlOiAnIzFGOEVGQScsXG4gIG9yYW5nZTogJyNGRkFCNEYnLFxuICByZWQ6ICcjRUU0MjNEJyxcbiAgZ3JlZW46ICcjMDVDOTg1JyxcbiAgcHJpbWFyeTogJyMyNDJFNDInLFxuICBncmV5OiAnIzk3OTc5NycsXG4gIHdoaXRlOiAnI0ZGRkZGRicsXG4gIHNlY29uZGFyeTogJyMyRjNCNTInLFxuICBzZWNvbmRhcnkyOiAnIzNFNEU2QycsXG4gIHNlY29uZGFyeTM6ICcjNzA4ODlFJyxcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBmb250U2l6ZTogMTIsXG59O1xuIiwiaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5cbmV4cG9ydCB7XG4gIGNvbG9ycyxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1heFdpZHRoOiAnMTQ0MHB4J1xufTtcbiIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC90ZXh0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi9zd2l0Y2gvc3dpdGNoJztcblxuZXhwb3J0IHtcbiAgVGV4dCxcbiAgU3dpdGNoLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRleHQsXG4gIFN3aXRjaCxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvY29sb3JzJztcblxuY29uc3QgU3dpdGNoQ29udGFpbmVyID0gc3R5bGVkLmxhYmVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBTd2l0Y2hlckJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBib3JkZXItcmFkaXVzOiA4cHg7XG5gO1xuXG5jb25zdCBDaXJjbGUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pc0VuYWJsZWQgPyBjb2xvcnMuYmx1ZSA6IGNvbG9ycy5zZWNvbmRhcnkzfTtcbiAgJHtwcm9wcyA9PiAocHJvcHMuaXNFbmFibGVkID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9OiAwO1xuYDtcblxuY29uc3QgSGlkZGVuID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBTd2l0Y2gocHJvcHMpIHtcbiAgY29uc3QgeyBpZCwgb25DaGFuZ2UsIHN0YXRlIH0gPSBwcm9wcztcbiAgY29uc3QgW2lzRW5hYmxlZCwgc2V0RW5hYmxlZF0gPSB1c2VTdGF0ZShzdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoQ29udGFpbmVyPlxuICAgICAgPFN3aXRjaGVyQmFja2dyb3VuZCBodG1sRm9yPXtpZH0gLz5cbiAgICAgIDxDaXJjbGUgaXNFbmFibGVkPXtpc0VuYWJsZWR9IC8+XG4gICAgICA8SGlkZGVuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICAgICAgc2V0RW5hYmxlZChldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGlkZGVuPlxuICAgIDwvU3dpdGNoQ29udGFpbmVyPlxuICApO1xufVxuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0YXRlOiBQcm9wVHlwZXMuYm9vbFxufTtcblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiAnc3dpdGNoZXInLFxuICBzdGF0ZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbG9yLCB0eXBvZ3JhcGh5IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERlZmF1bHQgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgRm9udCA9IHN0eWxlZC5kaXZgXG4gICR7Y29sb3J9O1xuICAke3R5cG9ncmFwaHl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dCh7IHRleHQsIGZvbnRTaXplLCBjb2xvciwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxGb250XG4gICAgICBmb250U2l6ZT17Zm9udFNpemV9XG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPnt0ZXh0fTwvRm9udD5cbiAgKTtcbn1cblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIGZvbnRTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvbnRTaXplOiBEZWZhdWx0LmZvbnRTaXplLFxuICBjb2xvcjogY29sb3JzLmJsdWUsXG59O1xuIiwiaW1wb3J0IFN0eWxlZCBmcm9tICcuL3N0eWxlZCc7XG5pbXBvcnQgQXRvbXMgZnJvbSAnLi9hdG9tcyc7XG5cbmV4cG9ydCB7XG4gIFN0eWxlZCxcbiAgQXRvbXMsXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgcGFkZGluZyA9IDE2O1xuZXhwb3J0IGNvbnN0IGhlaWdodCA9IDMzO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogJHtoZWlnaHR9cHg7XG4gIHBhZGRpbmctcmlnaHQ6ICR7cGFkZGluZ31weDtcbiAgcGFkZGluZy1sZWZ0OiAke3BhZGRpbmd9cHg7XG5gO1xuIiwiaW1wb3J0IHsgd2lkdGggfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuICAke3dpZHRofTtcbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcbmltcG9ydCBGbGV4IGZyb20gJy4vZmxleCc7XG5pbXBvcnQgQnRuIGZyb20gJy4vYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBDb250YWluZXIsXG4gIEZsZXgsXG4gIEJ0bixcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9