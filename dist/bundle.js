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
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


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

/***/ "./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/styled-components/node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
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

/***/ "./node_modules/styled-components/node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \****************************************************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vYm9yZGVyL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb2xvci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vY29yZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZmxleGJveC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZ3JpZC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vbGF5b3V0L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9wb3NpdGlvbi9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc2hhZG93L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zcGFjZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vdmFyaWFudC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtd2hhdC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21lcmdlLWFueXRoaW5nL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLXN5c3RlbS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGlzLXJ1bGUtc2hlZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zdHlsaXMubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hdG9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hdG9tcy9zd2l0Y2gvc3dpdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2F0b21zL3RleHQvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHlsZWQvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0eWxlZC9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3R5bGVkL2ZsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3R5bGVkL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiVGV4dCIsIkF0b21zIiwiQnV0dG9uIiwidGV4dCIsInR5cGUiLCJpc0ZsdWlkIiwiaXNUcmFuc3BhcmVudCIsInByb3BzIiwibWF4V2lkdGgiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImJsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIklucHV0IiwiU3R5bGVkSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsImNvbG9yIiwiU3R5bGVkTGFiZWwiLCJsYWJlbCIsIndoaXRlIiwibGFiZWxUZXh0IiwiaWQiLCJuYW1lIiwicmVzdFByb3BzIiwiYmdDb2xvciIsInByaW1hcnkiLCJvbkNoYW5nZSIsImZ1bmMiLCJTd2l0Y2hDb250YWluZXIiLCJTd2l0Y2hlckJhY2tncm91bmQiLCJkaXYiLCJDaXJjbGUiLCJpc0VuYWJsZWQiLCJzZWNvbmRhcnkzIiwiSGlkZGVuIiwiU3dpdGNoIiwidXNlU3RhdGUiLCJzZXRFbmFibGVkIiwic3RhdGUiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJibGFjayIsIm9yYW5nZSIsInJlZCIsImdyZWVuIiwiZ3JleSIsInNlY29uZGFyeSIsInNlY29uZGFyeTIiLCJmb250U2l6ZSIsIkZvbnQiLCJ0eXBvZ3JhcGh5IiwibnVtYmVyIiwiRGVmYXVsdCIsInBhZGRpbmciLCJoZWlnaHQiLCJidXR0b24iLCJDb250YWluZXIiLCJGbGV4IiwiQnRuIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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QVcsRUFBRTtBQUNiLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFlBQVksVUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5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QUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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QVUsZUFBZTs7QUFFdEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBcUM7QUFDckQ7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsS0FBcUMsSUFBSSw0Q0FBSztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsS0FBcUM7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQVM7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRDQUFLLDJDQUEyQyxVQUFVLGdFQUFnRTtBQUNySTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFLO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0RBQXNELDhEQUFLO0FBQzNEO0FBQ0EsR0FBRzs7QUFFSCxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNzQjtBQUNoQztBQUNqQjtBQUNFO0FBQ1E7QUFDTjtBQUNGO0FBQ1E7QUFDSjtBQUNSO0FBQ0k7QUFDcUM7QUFDQzs7QUFFaUs7QUFDNUw7QUFDaUo7QUFDbUk7QUFDSztBQUN6RjtBQUM1RjtBQUM1Qjs7QUFFM0g7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNI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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUVPLElBQU1pRCxPQUFPLEdBQUcsRUFBaEI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUVRekMsd0hBQU0sQ0FBQzBDLE1BQXRCLG9CQUNXcEQsaURBQU0sQ0FBQ2UsS0FEbEIsRUFLWW9DLE1BTFosRUFNbUJELE9BTm5CLEVBT2tCQSxPQVBsQixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRWV4Qyx3SEFBTSxDQUFDZ0IsR0FBdEIsb0JBQ0k1QixtREFESixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRWVZLHdIQUFNLENBQUNnQixHQUF0QixxQjs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZTtBQUNiMkIsV0FBUyxFQUFUQSxrREFEYTtBQUViQyxNQUFJLEVBQUpBLDZDQUZhO0FBR2JDLEtBQUcsRUFBSEEsK0NBQUdBO0FBSFUsQ0FBZixFOzs7Ozs7Ozs7OztBQ0pBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL3NyYy9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBDb2xvcnMgZnJvbSAnLi9zcmMvY29uc3RhbnRzL2NvbG9ycyc7XG5pbXBvcnQgU2l6ZSBmcm9tICcuL3NyYy9jb25zdGFudHMvc2l6ZSc7XG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuL3NyYy9jb25zdGFudHMvZGVmYXVsdCc7XG5pbXBvcnQgeyBBdG9tcyB9IGZyb20gJy4vc3JjL2NvcmUnO1xuXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvc3dpdGNoL3N3aXRjaCc7XG5cbmNvbnN0IFRleHQgPSBBdG9tcy5UZXh0O1xuLy8gY29uc3QgU3dpdGNoID0gQXRvbXMuU3dpdGNoO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIElucHV0LFxuICBDb2xvcnMsXG4gIFNpemUsXG4gIERlZmF1bHQsXG4gIFRleHQsXG4gIFN3aXRjaCxcbn1cbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBiYWNrZ3JvdW5kOiB0cnVlLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gIGJhY2tncm91bmRTaXplOiB0cnVlLFxuICBiYWNrZ3JvdW5kUG9zaXRpb246IHRydWUsXG4gIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbn07XG5jb25maWcuYmdJbWFnZSA9IGNvbmZpZy5iYWNrZ3JvdW5kSW1hZ2U7XG5jb25maWcuYmdTaXplID0gY29uZmlnLmJhY2tncm91bmRTaXplO1xuY29uZmlnLmJnUG9zaXRpb24gPSBjb25maWcuYmFja2dyb3VuZFBvc2l0aW9uO1xuY29uZmlnLmJnUmVwZWF0ID0gY29uZmlnLmJhY2tncm91bmRSZXBlYXQ7XG5leHBvcnQgdmFyIGJhY2tncm91bmQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGJhY2tncm91bmQ7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGJvcmRlcjoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlcldpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJXaWR0aCcsXG4gICAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG4gIH0sXG4gIGJvcmRlclN0eWxlOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJTdHlsZScsXG4gICAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG4gIH0sXG4gIGJvcmRlckNvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJDb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIGJvcmRlclJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyUmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJUb3A6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclRvcCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJSaWdodDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyUmlnaHQnLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJCb3R0b20nLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyTGVmdDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyTGVmdCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJYOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJMZWZ0JywgJ2JvcmRlclJpZ2h0J10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJZOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJUb3AnLCAnYm9yZGVyQm90dG9tJ10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9XG59O1xuZXhwb3J0IHZhciBib3JkZXIgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGJvcmRlcjtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgY29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICAgIHNjYWxlOiAnY29sb3JzJ1xuICB9LFxuICBvcGFjaXR5OiB0cnVlXG59O1xuY29uZmlnLmJnID0gY29uZmlnLmJhY2tncm91bmRDb2xvcjtcbmV4cG9ydCB2YXIgY29sb3IgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGNvbG9yO1xuIiwiaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmV4cG9ydCB2YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gIHZhciByZXN1bHQgPSBhc3NpZ24oe30sIGEsIGIpO1xuXG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgdmFyIF9hc3NpZ247XG5cbiAgICBpZiAoIWFba2V5XSB8fCB0eXBlb2YgYltrZXldICE9PSAnb2JqZWN0JykgY29udGludWU7XG4gICAgYXNzaWduKHJlc3VsdCwgKF9hc3NpZ24gPSB7fSwgX2Fzc2lnbltrZXldID0gYXNzaWduKGFba2V5XSwgYltrZXldKSwgX2Fzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07IC8vIHNvcnQgb2JqZWN0LXZhbHVlIHJlc3BvbnNpdmUgc3R5bGVzXG5cbnZhciBzb3J0ID0gZnVuY3Rpb24gc29ydChvYmopIHtcbiAgdmFyIG5leHQgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5zb3J0KCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgbmV4dFtrZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYnJlYWtwb2ludHM6IFs0MCwgNTIsIDY0XS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiArICdlbSc7XG4gIH0pXG59O1xuXG52YXIgY3JlYXRlTWVkaWFRdWVyeSA9IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnkobikge1xuICByZXR1cm4gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBcIiArIG4gKyBcIilcIjtcbn07XG5cbnZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKG4sIHNjYWxlKSB7XG4gIHJldHVybiBnZXQoc2NhbGUsIG4sIG4pO1xufTtcblxuZXhwb3J0IHZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG5leHBvcnQgdmFyIGNyZWF0ZVBhcnNlciA9IGZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihjb25maWcpIHtcbiAgdmFyIGNhY2hlID0ge307XG5cbiAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UocHJvcHMpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIHNob3VsZFNvcnQgPSBmYWxzZTtcbiAgICB2YXIgaXNDYWNoZURpc2FibGVkID0gcHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUuZGlzYWJsZVN0eWxlZFN5c3RlbUNhY2hlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoIWNvbmZpZ1trZXldKSBjb250aW51ZTtcbiAgICAgIHZhciBzeCA9IGNvbmZpZ1trZXldO1xuICAgICAgdmFyIHJhdyA9IHByb3BzW2tleV07XG4gICAgICB2YXIgc2NhbGUgPSBnZXQocHJvcHMudGhlbWUsIHN4LnNjYWxlLCBzeC5kZWZhdWx0cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmF3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjYWNoZS5icmVha3BvaW50cyA9ICFpc0NhY2hlRGlzYWJsZWQgJiYgY2FjaGUuYnJlYWtwb2ludHMgfHwgZ2V0KHByb3BzLnRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0cy5icmVha3BvaW50cyk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkge1xuICAgICAgICAgIGNhY2hlLm1lZGlhID0gIWlzQ2FjaGVEaXNhYmxlZCAmJiBjYWNoZS5tZWRpYSB8fCBbbnVsbF0uY29uY2F0KGNhY2hlLmJyZWFrcG9pbnRzLm1hcChjcmVhdGVNZWRpYVF1ZXJ5KSk7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVTdHlsZShjYWNoZS5tZWRpYSwgc3gsIHNjYWxlLCByYXcpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYXcgIT09IG51bGwpIHtcbiAgICAgICAgICBzdHlsZXMgPSBtZXJnZShzdHlsZXMsIHBhcnNlUmVzcG9uc2l2ZU9iamVjdChjYWNoZS5icmVha3BvaW50cywgc3gsIHNjYWxlLCByYXcpKTtcbiAgICAgICAgICBzaG91bGRTb3J0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhc3NpZ24oc3R5bGVzLCBzeChyYXcsIHNjYWxlKSk7XG4gICAgfSAvLyBzb3J0IG9iamVjdC1iYXNlZCByZXNwb25zaXZlIHN0eWxlc1xuXG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgc3R5bGVzID0gc29ydChzdHlsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH07XG5cbiAgcGFyc2UuY29uZmlnID0gY29uZmlnO1xuICBwYXJzZS5wcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICBwYXJzZS5jYWNoZSA9IGNhY2hlO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIGsgIT09ICdjb25maWcnO1xuICB9KTtcblxuICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBfY3JlYXRlUGFyc2VyO1xuXG4gICAgICBwYXJzZVtrZXldID0gY3JlYXRlUGFyc2VyKChfY3JlYXRlUGFyc2VyID0ge30sIF9jcmVhdGVQYXJzZXJba2V5XSA9IGNvbmZpZ1trZXldLCBfY3JlYXRlUGFyc2VyKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2U7XG59O1xuXG52YXIgcGFyc2VSZXNwb25zaXZlU3R5bGUgPSBmdW5jdGlvbiBwYXJzZVJlc3BvbnNpdmVTdHlsZShtZWRpYVF1ZXJpZXMsIHN4LCBzY2FsZSwgcmF3KSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgcmF3LnNsaWNlKDAsIG1lZGlhUXVlcmllcy5sZW5ndGgpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgdmFyIG1lZGlhID0gbWVkaWFRdWVyaWVzW2ldO1xuICAgIHZhciBzdHlsZSA9IHN4KHZhbHVlLCBzY2FsZSk7XG5cbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICBhc3NpZ24oc3R5bGVzLCBzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfYXNzaWduMjtcblxuICAgICAgYXNzaWduKHN0eWxlcywgKF9hc3NpZ24yID0ge30sIF9hc3NpZ24yW21lZGlhXSA9IGFzc2lnbih7fSwgc3R5bGVzW21lZGlhXSwgc3R5bGUpLCBfYXNzaWduMikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG52YXIgcGFyc2VSZXNwb25zaXZlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VSZXNwb25zaXZlT2JqZWN0KGJyZWFrcG9pbnRzLCBzeCwgc2NhbGUsIHJhdykge1xuICB2YXIgc3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHJhdykge1xuICAgIHZhciBicmVha3BvaW50ID0gYnJlYWtwb2ludHNba2V5XTtcbiAgICB2YXIgdmFsdWUgPSByYXdba2V5XTtcbiAgICB2YXIgc3R5bGUgPSBzeCh2YWx1ZSwgc2NhbGUpO1xuXG4gICAgaWYgKCFicmVha3BvaW50KSB7XG4gICAgICBhc3NpZ24oc3R5bGVzLCBzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfYXNzaWduMztcblxuICAgICAgdmFyIG1lZGlhID0gY3JlYXRlTWVkaWFRdWVyeShicmVha3BvaW50KTtcbiAgICAgIGFzc2lnbihzdHlsZXMsIChfYXNzaWduMyA9IHt9LCBfYXNzaWduM1ttZWRpYV0gPSBhc3NpZ24oe30sIHN0eWxlc1ttZWRpYV0sIHN0eWxlKSwgX2Fzc2lnbjMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcblxuZXhwb3J0IHZhciBjcmVhdGVTdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVGdW5jdGlvbihfcmVmKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gX3JlZi5wcm9wZXJ0aWVzLFxuICAgICAgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5LFxuICAgICAgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgX3JlZiR0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBnZXRWYWx1ZSA6IF9yZWYkdHJhbnNmb3JtLFxuICAgICAgZGVmYXVsdFNjYWxlID0gX3JlZi5kZWZhdWx0U2NhbGU7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IFtwcm9wZXJ0eV07XG5cbiAgdmFyIHN4ID0gZnVuY3Rpb24gc3godmFsdWUsIHNjYWxlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBuID0gdHJhbnNmb3JtKHZhbHVlLCBzY2FsZSk7XG4gICAgaWYgKG4gPT09IG51bGwpIHJldHVybjtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IG47XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBzeC5zY2FsZSA9IHNjYWxlO1xuICBzeC5kZWZhdWx0cyA9IGRlZmF1bHRTY2FsZTtcbiAgcmV0dXJuIHN4O1xufTsgLy8gbmV3IHY1IEFQSVxuXG5leHBvcnQgdmFyIHN5c3RlbSA9IGZ1bmN0aW9uIHN5c3RlbShhcmdzKSB7XG4gIGlmIChhcmdzID09PSB2b2lkIDApIHtcbiAgICBhcmdzID0ge307XG4gIH1cblxuICB2YXIgY29uZmlnID0ge307XG4gIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjb25mID0gYXJnc1trZXldO1xuXG4gICAgaWYgKGNvbmYgPT09IHRydWUpIHtcbiAgICAgIC8vIHNob3J0Y3V0IGRlZmluaXRpb25cbiAgICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbih7XG4gICAgICAgIHByb3BlcnR5OiBrZXksXG4gICAgICAgIHNjYWxlOiBrZXlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnW2tleV0gPSBjb25mO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbihjb25mKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG5leHBvcnQgdmFyIGNvbXBvc2UgPSBmdW5jdGlvbiBjb21wb3NlKCkge1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcnNlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyc2Vyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgaWYgKCFwYXJzZXIgfHwgIXBhcnNlci5jb25maWcpIHJldHVybjtcbiAgICBhc3NpZ24oY29uZmlnLCBwYXJzZXIuY29uZmlnKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGFsaWduSXRlbXM6IHRydWUsXG4gIGFsaWduQ29udGVudDogdHJ1ZSxcbiAganVzdGlmeUl0ZW1zOiB0cnVlLFxuICBqdXN0aWZ5Q29udGVudDogdHJ1ZSxcbiAgZmxleFdyYXA6IHRydWUsXG4gIGZsZXhEaXJlY3Rpb246IHRydWUsXG4gIC8vIGl0ZW1cbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhCYXNpczogdHJ1ZSxcbiAganVzdGlmeVNlbGY6IHRydWUsXG4gIGFsaWduU2VsZjogdHJ1ZSxcbiAgb3JkZXI6IHRydWVcbn07XG5leHBvcnQgdmFyIGZsZXhib3ggPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGZsZXhib3g7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIGdyaWRHYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRHYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZENvbHVtbkdhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZENvbHVtbkdhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkUm93R2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkUm93R2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRBdXRvRmxvdzogdHJ1ZSxcbiAgZ3JpZEF1dG9Db2x1bW5zOiB0cnVlLFxuICBncmlkQXV0b1Jvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZVJvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUFyZWFzOiB0cnVlLFxuICBncmlkQXJlYTogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgZ3JpZCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZ3JpZDtcbiIsImltcG9ydCB7IHN5c3RlbSwgZ2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obik7XG59O1xuXG52YXIgZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aChuLCBzY2FsZSkge1xuICByZXR1cm4gZ2V0KHNjYWxlLCBuLCAhaXNOdW1iZXIobikgfHwgbiA+IDEgPyBuIDogbiAqIDEwMCArICclJyk7XG59O1xuXG52YXIgY29uZmlnID0ge1xuICB3aWR0aDoge1xuICAgIHByb3BlcnR5OiAnd2lkdGgnLFxuICAgIHNjYWxlOiAnc2l6ZXMnLFxuICAgIHRyYW5zZm9ybTogZ2V0V2lkdGhcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdoZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1pbldpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdtaW5XaWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWluSGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtaW5IZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1heFdpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdtYXhXaWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWF4SGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtYXhIZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIHNpemU6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG92ZXJmbG93OiB0cnVlLFxuICBkaXNwbGF5OiB0cnVlLFxuICB2ZXJ0aWNhbEFsaWduOiB0cnVlXG59O1xuZXhwb3J0IHZhciBsYXlvdXQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIHpJbmRleDoge1xuICAgIHByb3BlcnR5OiAnekluZGV4JyxcbiAgICBzY2FsZTogJ3pJbmRpY2VzJ1xuICB9LFxuICB0b3A6IHtcbiAgICBwcm9wZXJ0eTogJ3RvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICByaWdodDoge1xuICAgIHByb3BlcnR5OiAncmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdib3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbGVmdDoge1xuICAgIHByb3BlcnR5OiAnbGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuZXhwb3J0IHZhciBwb3NpdGlvbiA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB2YXIgc2hhZG93ID0gc3lzdGVtKHtcbiAgYm94U2hhZG93OiB7XG4gICAgcHJvcGVydHk6ICdib3hTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfSxcbiAgdGV4dFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAndGV4dFNoYWRvdycsXG4gICAgc2NhbGU6ICdzaGFkb3dzJ1xuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvdztcbiIsImltcG9ydCB7IGdldCwgc3lzdGVtLCBjb21wb3NlIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl1cbn07XG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obik7XG59O1xuXG52YXIgZ2V0TWFyZ2luID0gZnVuY3Rpb24gZ2V0TWFyZ2luKG4sIHNjYWxlKSB7XG4gIGlmICghaXNOdW1iZXIobikpIHtcbiAgICByZXR1cm4gZ2V0KHNjYWxlLCBuLCBuKTtcbiAgfVxuXG4gIHZhciBpc05lZ2F0aXZlID0gbiA8IDA7XG4gIHZhciBhYnNvbHV0ZSA9IE1hdGguYWJzKG4pO1xuICB2YXIgdmFsdWUgPSBnZXQoc2NhbGUsIGFic29sdXRlLCBhYnNvbHV0ZSk7XG5cbiAgaWYgKCFpc051bWJlcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gaXNOZWdhdGl2ZSA/ICctJyArIHZhbHVlIDogdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKiAoaXNOZWdhdGl2ZSA/IC0xIDogMSk7XG59O1xuXG52YXIgY29uZmlncyA9IHt9O1xuY29uZmlncy5tYXJnaW4gPSB7XG4gIG1hcmdpbjoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblRvcDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luVG9wJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblJpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5SaWdodCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5Cb3R0b206IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbkJvdHRvbScsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5MZWZ0OiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5MZWZ0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblg6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblk6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH1cbn07XG5jb25maWdzLm1hcmdpbi5tID0gY29uZmlncy5tYXJnaW4ubWFyZ2luO1xuY29uZmlncy5tYXJnaW4ubXQgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5Ub3A7XG5jb25maWdzLm1hcmdpbi5tciA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblJpZ2h0O1xuY29uZmlncy5tYXJnaW4ubWIgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5Cb3R0b207XG5jb25maWdzLm1hcmdpbi5tbCA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbkxlZnQ7XG5jb25maWdzLm1hcmdpbi5teCA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblg7XG5jb25maWdzLm1hcmdpbi5teSA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblk7XG5jb25maWdzLnBhZGRpbmcgPSB7XG4gIHBhZGRpbmc6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmcnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1RvcDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ1RvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdSaWdodCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nQm90dG9tJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdMZWZ0OiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nTGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nWDoge1xuICAgIHByb3BlcnRpZXM6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nWToge1xuICAgIHByb3BlcnRpZXM6IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuY29uZmlncy5wYWRkaW5nLnAgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZztcbmNvbmZpZ3MucGFkZGluZy5wdCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nVG9wO1xuY29uZmlncy5wYWRkaW5nLnByID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdSaWdodDtcbmNvbmZpZ3MucGFkZGluZy5wYiA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nQm90dG9tO1xuY29uZmlncy5wYWRkaW5nLnBsID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdMZWZ0O1xuY29uZmlncy5wYWRkaW5nLnB4ID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdYO1xuY29uZmlncy5wYWRkaW5nLnB5ID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdZO1xuZXhwb3J0IHZhciBtYXJnaW4gPSBzeXN0ZW0oY29uZmlncy5tYXJnaW4pO1xuZXhwb3J0IHZhciBwYWRkaW5nID0gc3lzdGVtKGNvbmZpZ3MucGFkZGluZyk7XG5leHBvcnQgdmFyIHNwYWNlID0gY29tcG9zZShtYXJnaW4sIHBhZGRpbmcpO1xuZXhwb3J0IGRlZmF1bHQgc3BhY2U7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0LCA3Ml1cbn07XG52YXIgY29uZmlnID0ge1xuICBmb250RmFtaWx5OiB7XG4gICAgcHJvcGVydHk6ICdmb250RmFtaWx5JyxcbiAgICBzY2FsZTogJ2ZvbnRzJ1xuICB9LFxuICBmb250U2l6ZToge1xuICAgIHByb3BlcnR5OiAnZm9udFNpemUnLFxuICAgIHNjYWxlOiAnZm9udFNpemVzJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLmZvbnRTaXplc1xuICB9LFxuICBmb250V2VpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdmb250V2VpZ2h0JyxcbiAgICBzY2FsZTogJ2ZvbnRXZWlnaHRzJ1xuICB9LFxuICBsaW5lSGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdsaW5lSGVpZ2h0JyxcbiAgICBzY2FsZTogJ2xpbmVIZWlnaHRzJ1xuICB9LFxuICBsZXR0ZXJTcGFjaW5nOiB7XG4gICAgcHJvcGVydHk6ICdsZXR0ZXJTcGFjaW5nJyxcbiAgICBzY2FsZTogJ2xldHRlclNwYWNpbmdzJ1xuICB9LFxuICB0ZXh0QWxpZ246IHRydWUsXG4gIGZvbnRTdHlsZTogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgdHlwb2dyYXBoeSA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgdHlwb2dyYXBoeTtcbiIsImltcG9ydCB7IGdldCwgY3JlYXRlUGFyc2VyIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5leHBvcnQgdmFyIHZhcmlhbnQgPSBmdW5jdGlvbiB2YXJpYW50KF9yZWYpIHtcbiAgdmFyIF9jb25maWc7XG5cbiAgdmFyIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIF9yZWYkcHJvcCA9IF9yZWYucHJvcCxcbiAgICAgIHByb3AgPSBfcmVmJHByb3AgPT09IHZvaWQgMCA/ICd2YXJpYW50JyA6IF9yZWYkcHJvcCxcbiAgICAgIGtleSA9IF9yZWYua2V5O1xuXG4gIHZhciBzeCA9IGZ1bmN0aW9uIHN4KHZhbHVlLCBzY2FsZSkge1xuICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCBudWxsKTtcbiAgfTtcblxuICBzeC5zY2FsZSA9IHNjYWxlIHx8IGtleTtcbiAgdmFyIGNvbmZpZyA9IChfY29uZmlnID0ge30sIF9jb25maWdbcHJvcF0gPSBzeCwgX2NvbmZpZyk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG5leHBvcnQgZGVmYXVsdCB2YXJpYW50O1xuZXhwb3J0IHZhciBidXR0b25TdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdidXR0b25zJ1xufSk7XG5leHBvcnQgdmFyIHRleHRTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICd0ZXh0U3R5bGVzJyxcbiAgcHJvcDogJ3RleHRTdHlsZSdcbn0pO1xuZXhwb3J0IHZhciBjb2xvclN0eWxlID0gdmFyaWFudCh7XG4gIGtleTogJ2NvbG9yU3R5bGVzJyxcbiAgcHJvcDogJ2NvbG9ycydcbn0pO1xuIiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIG9iamVjdCB0eXBlIG9mIHRoZSBnaXZlbiBwYXlsb2FkXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VHlwZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBheWxvYWQpLnNsaWNlKDgsIC0xKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIHVuZGVmaW5lZFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgdW5kZWZpbmVkfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdVbmRlZmluZWQnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgbnVsbFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgbnVsbH1cclxuICovXHJcbmZ1bmN0aW9uIGlzTnVsbChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ051bGwnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdCAoZXhjbHVkaW5nIHNwZWNpYWwgY2xhc3NlcyBvciBvYmplY3RzIHdpdGggb3RoZXIgcHJvdG90eXBlcylcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHtba2V5OiBzdHJpbmddOiBhbnl9fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChwYXlsb2FkKSB7XHJcbiAgICBpZiAoZ2V0VHlwZShwYXlsb2FkKSAhPT0gJ09iamVjdCcpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIChwYXlsb2FkLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHBheWxvYWQpID09PSBPYmplY3QucHJvdG90eXBlKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3QgKGV4Y2x1ZGluZyBzcGVjaWFsIGNsYXNzZXMgb3Igb2JqZWN0cyB3aXRoIG90aGVyIHByb3RvdHlwZXMpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyB7W2tleTogc3RyaW5nXTogYW55fX1cclxuICovXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHBheWxvYWQpIHtcclxuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHBheWxvYWQpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gYW55IGtpbmQgb2Ygb2JqZWN0IChpbmNsdWRpbmcgc3BlY2lhbCBjbGFzc2VzIG9yIG9iamVjdHMgd2l0aCBkaWZmZXJlbnQgcHJvdG90eXBlcylcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHtba2V5OiBzdHJpbmddOiBhbnl9fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBbnlPYmplY3QocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdPYmplY3QnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gb2JqZWN0IGxpa2UgYSB0eXBlIHBhc3NlZCBpbiA8ID5cclxuICpcclxuICogVXNhZ2U6IGlzT2JqZWN0TGlrZTx7aWQ6IGFueX0+KHBheWxvYWQpIC8vIHdpbGwgbWFrZSBzdXJlIGl0J3MgYW4gb2JqZWN0IGFuZCBoYXMgYW4gYGlkYCBwcm9wLlxyXG4gKlxyXG4gKiBAdGVtcGxhdGUgVCB0aGlzIG11c3QgYmUgcGFzc2VkIGluIDwgPlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgVH1cclxuICovXHJcbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gaXNBbnlPYmplY3QocGF5bG9hZCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24ocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdGdW5jdGlvbic7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgdW5kZWZpbmVkfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0FycmF5JztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgc3RyaW5nXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N0cmluZyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1N0cmluZyc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHN0cmluZywgQlVUIHJldHVybnMgZmFsc2UgZm9yICcnXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Z1bGxTdHJpbmcocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHBheWxvYWQpICYmIHBheWxvYWQgIT09ICcnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgJydcclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIHN0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHBheWxvYWQgPT09ICcnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYSBudW1iZXJcclxuICpcclxuICogVGhpcyB3aWxsIHJldHVybiBmYWxzZSBmb3IgTmFOXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc051bWJlcihwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gKGdldFR5cGUocGF5bG9hZCkgPT09ICdOdW1iZXInICYmICFpc05hTihwYXlsb2FkKSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIGJvb2xlYW5cclxuICpcclxuICogQHBhcmFtIHsqfSBwYXlsb2FkXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIGJvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jvb2xlYW4ocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGdldFR5cGUocGF5bG9hZCkgPT09ICdCb29sZWFuJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGEgcmVndWxhciBleHByZXNzaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBSZWdFeHB9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1JlZ0V4cChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ1JlZ0V4cCc7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIGRhdGUsIGFuZCB0aGF0IHRoZSBkYXRlIGlzIFZhbGlkXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7cGF5bG9hZCBpcyBEYXRlfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEYXRlKHBheWxvYWQpIHtcclxuICAgIHJldHVybiAoZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0RhdGUnICYmICFpc05hTihwYXlsb2FkKSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIFN5bWJvbFxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHJldHVybnMge3BheWxvYWQgaXMgc3ltYm9sfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTeW1ib2wocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIChnZXRUeXBlKHBheWxvYWQpID09PSAnU3ltYm9sJyk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhIHByaW1pdGl2ZSB0eXBlIChlZy4gQm9vbGVhbiB8IE51bGwgfCBVbmRlZmluZWQgfCBOdW1iZXIgfCBTdHJpbmcgfCBTeW1ib2wpXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZFxyXG4gKiBAcmV0dXJucyB7KHBheWxvYWQgaXMgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQgfCBudW1iZXIgfCBzdHJpbmcgfCBzeW1ib2wpfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNQcmltaXRpdmUocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIChpc0Jvb2xlYW4ocGF5bG9hZCkgfHxcclxuICAgICAgICBpc051bGwocGF5bG9hZCkgfHxcclxuICAgICAgICBpc1VuZGVmaW5lZChwYXlsb2FkKSB8fFxyXG4gICAgICAgIGlzTnVtYmVyKHBheWxvYWQpIHx8XHJcbiAgICAgICAgaXNTdHJpbmcocGF5bG9hZCkgfHxcclxuICAgICAgICBpc1N5bWJvbChwYXlsb2FkKSk7XHJcbn1cclxuLyoqXHJcbiAqIERvZXMgYSBnZW5lcmljIGNoZWNrIHRvIGNoZWNrIHRoYXQgdGhlIGdpdmVuIHBheWxvYWQgaXMgb2YgYSBnaXZlbiB0eXBlLlxyXG4gKiBJbiBjYXNlcyBsaWtlIE51bWJlciwgaXQgd2lsbCByZXR1cm4gdHJ1ZSBmb3IgTmFOIGFzIE5hTiBpcyBhIE51bWJlciAodGhhbmtzIGphdmFzY3JpcHQhKTtcclxuICogSXQgd2lsbCwgaG93ZXZlciwgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIG9iamVjdCBhbmQgbnVsbFxyXG4gKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0geyp9IHBheWxvYWRcclxuICogQHBhcmFtIHtUfSB0eXBlXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gV2lsbCB0aHJvdyB0eXBlIGVycm9yIGlmIHR5cGUgaXMgYW4gaW52YWxpZCB0eXBlXHJcbiAqIEByZXR1cm5zIHtwYXlsb2FkIGlzIFR9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1R5cGUocGF5bG9hZCwgdHlwZSkge1xyXG4gICAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1R5cGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXR5cGUuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVHlwZSBpcyBub3QgYSBjbGFzcycpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2xhc3NlcyB1c3VhbGx5IGhhdmUgbmFtZXMgKGFzIGZ1bmN0aW9ucyB1c3VhbGx5IGhhdmUgbmFtZXMpXHJcbiAgICB2YXIgbmFtZSA9IHR5cGUubmFtZTtcclxuICAgIHJldHVybiAoZ2V0VHlwZShwYXlsb2FkKSA9PT0gbmFtZSkgfHwgQm9vbGVhbihwYXlsb2FkICYmIChwYXlsb2FkLmNvbnN0cnVjdG9yID09PSB0eXBlKSk7XHJcbn1cblxuZXhwb3J0IHsgZ2V0VHlwZSwgaXNVbmRlZmluZWQsIGlzTnVsbCwgaXNQbGFpbk9iamVjdCwgaXNPYmplY3QsIGlzQW55T2JqZWN0LCBpc09iamVjdExpa2UsIGlzRnVuY3Rpb24sIGlzQXJyYXksIGlzU3RyaW5nLCBpc0Z1bGxTdHJpbmcsIGlzRW1wdHlTdHJpbmcsIGlzTnVtYmVyLCBpc0Jvb2xlYW4sIGlzUmVnRXhwLCBpc0RhdGUsIGlzU3ltYm9sLCBpc1ByaW1pdGl2ZSwgaXNUeXBlIH07XG4iLCJmdW5jdGlvbiBhcmVJbnB1dHNFcXVhbChuZXdJbnB1dHMsIGxhc3RJbnB1dHMpIHtcbiAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobmV3SW5wdXRzW2ldICE9PSBsYXN0SW5wdXRzW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1lbW9pemVPbmUocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkge1xuICAgIGlzRXF1YWwgPSBhcmVJbnB1dHNFcXVhbDtcbiAgfVxuXG4gIHZhciBsYXN0VGhpcztcbiAgdmFyIGxhc3RBcmdzID0gW107XG4gIHZhciBsYXN0UmVzdWx0O1xuICB2YXIgY2FsbGVkT25jZSA9IGZhbHNlO1xuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbmV3QXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG5ld0FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cblxuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVPbmU7XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1BsYWluT2JqZWN0LCBpc1N5bWJvbCB9IGZyb20gJ2lzLXdoYXQnO1xuXG5mdW5jdGlvbiBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIG5ld1ZhbCwgb3JpZ2luYWxPYmplY3QpIHtcclxuICAgIHZhciBwcm9wVHlwZSA9IG9yaWdpbmFsT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSlcclxuICAgICAgICA/ICdlbnVtZXJhYmxlJ1xyXG4gICAgICAgIDogJ25vbmVudW1lcmFibGUnO1xyXG4gICAgaWYgKHByb3BUeXBlID09PSAnZW51bWVyYWJsZScpXHJcbiAgICAgICAgY2Fycnlba2V5XSA9IG5ld1ZhbDtcclxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ25vbmVudW1lcmFibGUnKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhcnJ5LCBrZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbCxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtZXJnZVJlY3Vyc2l2ZWx5KG9yaWdpbiwgbmV3Q29tZXIsIGV4dGVuc2lvbnMpIHtcclxuICAgIC8vIHdvcmsgZGlyZWN0bHkgb24gbmV3Q29tZXIgaWYgaXRzIG5vdCBhbiBvYmplY3RcclxuICAgIGlmICghaXNQbGFpbk9iamVjdChuZXdDb21lcikpIHtcclxuICAgICAgICAvLyBleHRlbmQgbWVyZ2UgcnVsZXNcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBpc0FycmF5KGV4dGVuc2lvbnMpKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0ZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDb21lciA9IGV4dGVuZChvcmlnaW4sIG5ld0NvbWVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdDb21lcjtcclxuICAgIH1cclxuICAgIC8vIGRlZmluZSBuZXdPYmplY3QgdG8gbWVyZ2UgYWxsIHZhbHVlcyB1cG9uXHJcbiAgICB2YXIgbmV3T2JqZWN0ID0ge307XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChvcmlnaW4pKSB7XHJcbiAgICAgICAgdmFyIHByb3BzXzEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvcmlnaW4pO1xyXG4gICAgICAgIHZhciBzeW1ib2xzXzEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9yaWdpbik7XHJcbiAgICAgICAgbmV3T2JqZWN0ID0gcHJvcHNfMS5jb25jYXQoc3ltYm9sc18xKS5yZWR1Y2UoZnVuY3Rpb24gKGNhcnJ5LCBrZXkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0VmFsID0gb3JpZ2luW2tleV07XHJcbiAgICAgICAgICAgIGlmICgoIWlzU3ltYm9sKGtleSkgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5ld0NvbWVyKS5pbmNsdWRlcyhrZXkpKSB8fFxyXG4gICAgICAgICAgICAgICAgKGlzU3ltYm9sKGtleSkgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobmV3Q29tZXIpLmluY2x1ZGVzKGtleSkpKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIHRhcmdldFZhbCwgb3JpZ2luKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2Fycnk7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfVxyXG4gICAgdmFyIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmV3Q29tZXIpO1xyXG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG5ld0NvbWVyKTtcclxuICAgIHZhciByZXN1bHQgPSBwcm9wcy5jb25jYXQoc3ltYm9scykucmVkdWNlKGZ1bmN0aW9uIChjYXJyeSwga2V5KSB7XHJcbiAgICAgICAgLy8gcmUtZGVmaW5lIHRoZSBvcmlnaW4gYW5kIG5ld0NvbWVyIGFzIHRhcmdldFZhbCBhbmQgbmV3VmFsXHJcbiAgICAgICAgdmFyIG5ld1ZhbCA9IG5ld0NvbWVyW2tleV07XHJcbiAgICAgICAgdmFyIHRhcmdldFZhbCA9IChpc1BsYWluT2JqZWN0KG9yaWdpbikpXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgPyBvcmlnaW5ba2V5XVxyXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBleHRlbmQgbWVyZ2UgcnVsZXNcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBpc0FycmF5KGV4dGVuc2lvbnMpKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0ZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWwgPSBleHRlbmQodGFyZ2V0VmFsLCBuZXdWYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2hlbiBuZXdWYWwgaXMgYW4gb2JqZWN0IGRvIHRoZSBtZXJnZSByZWN1cnNpdmVseVxyXG4gICAgICAgIGlmICh0YXJnZXRWYWwgIT09IHVuZGVmaW5lZCAmJiBpc1BsYWluT2JqZWN0KG5ld1ZhbCkpIHtcclxuICAgICAgICAgICAgbmV3VmFsID0gbWVyZ2VSZWN1cnNpdmVseSh0YXJnZXRWYWwsIG5ld1ZhbCwgZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzc2lnblByb3AoY2FycnksIGtleSwgbmV3VmFsLCBuZXdDb21lcik7XHJcbiAgICAgICAgcmV0dXJuIGNhcnJ5O1xyXG4gICAgfSwgbmV3T2JqZWN0KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuLyoqXHJcbiAqIE1lcmdlIGFueXRoaW5nIHJlY3Vyc2l2ZWx5LlxyXG4gKiBPYmplY3RzIGdldCBtZXJnZWQsIHNwZWNpYWwgb2JqZWN0cyAoY2xhc3NlcyBldGMuKSBhcmUgcmUtYXNzaWduZWQgXCJhcyBpc1wiLlxyXG4gKiBCYXNpYyB0eXBlcyBvdmVyd3JpdGUgb2JqZWN0cyBvciBvdGhlciBiYXNpYyB0eXBlcy5cclxuICpcclxuICogQHBhcmFtIHsoSUNvbmZpZyB8IGFueSl9IG9yaWdpblxyXG4gKiBAcGFyYW0gey4uLmFueVtdfSBuZXdDb21lcnNcclxuICogQHJldHVybnMgdGhlIHJlc3VsdFxyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2Uob3JpZ2luKSB7XHJcbiAgICB2YXIgbmV3Q29tZXJzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIG5ld0NvbWVyc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBleHRlbnNpb25zID0gbnVsbDtcclxuICAgIHZhciBiYXNlID0gb3JpZ2luO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3JpZ2luKSAmJiBvcmlnaW4uZXh0ZW5zaW9ucyAmJiBPYmplY3Qua2V5cyhvcmlnaW4pLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGJhc2UgPSB7fTtcclxuICAgICAgICBleHRlbnNpb25zID0gb3JpZ2luLmV4dGVuc2lvbnM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3Q29tZXJzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBuZXdDb21lcikge1xyXG4gICAgICAgIHJldHVybiBtZXJnZVJlY3Vyc2l2ZWx5KHJlc3VsdCwgbmV3Q29tZXIsIGV4dGVuc2lvbnMpO1xyXG4gICAgfSwgYmFzZSk7XHJcbn1cblxuZnVuY3Rpb24gY29uY2F0QXJyYXlzKG9yaWdpblZhbCwgbmV3VmFsKSB7XHJcbiAgICBpZiAoaXNBcnJheShvcmlnaW5WYWwpICYmIGlzQXJyYXkobmV3VmFsKSkge1xyXG4gICAgICAgIC8vIGNvbmNhdCBsb2dpY1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5WYWwuY29uY2F0KG5ld1ZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3VmFsOyAvLyBhbHdheXMgcmV0dXJuIG5ld1ZhbCBhcyBmYWxsYmFjayEhXHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG5leHBvcnQgeyBtZXJnZSwgY29uY2F0QXJyYXlzIH07XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcblxuLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTtcbiAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBTdHlsaXMgZnJvbSAnc3R5bGlzL3N0eWxpcy5taW4nO1xuaW1wb3J0IF9pbnNlcnRSdWxlUGx1Z2luIGZyb20gJ3N0eWxpcy1ydWxlLXNoZWV0JztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIGNyZWF0ZUNvbnRleHQsIENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzVmFsaWRFbGVtZW50VHlwZSwgRm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdmFsaWRBdHRyIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ21lcmdlLWFueXRoaW5nJztcblxuLy8gXG5cbnZhciBpbnRlcmxlYXZlID0gKGZ1bmN0aW9uIChzdHJpbmdzLCBpbnRlcnBvbGF0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gW3N0cmluZ3NbMF1dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbnRlcnBvbGF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIHJlc3VsdC5wdXNoKGludGVycG9sYXRpb25zW2ldLCBzdHJpbmdzW2kgKyAxXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuLy8gXG52YXIgaXNQbGFpbk9iamVjdCA9IChmdW5jdGlvbiAoeCkge1xuICByZXR1cm4gKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih4KSkgPT09ICdvYmplY3QnICYmIHguY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn0pO1xuXG4vLyBcbnZhciBFTVBUWV9BUlJBWSA9IE9iamVjdC5mcmVlemUoW10pO1xudmFyIEVNUFRZX09CSkVDVCA9IE9iamVjdC5mcmVlemUoe30pO1xuXG4vLyBcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbic7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHRhcmdldCkge1xuICByZXR1cm4gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiB0YXJnZXQgOiBmYWxzZSkgfHwgdGFyZ2V0LmRpc3BsYXlOYW1lIHx8IHRhcmdldC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGlzU3RhdGVsZXNzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgISh0ZXN0LnByb3RvdHlwZSAmJiB0ZXN0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkID09PSAnc3RyaW5nJztcbn1cblxuLy8gXG5cbnZhciBTQ19BVFRSID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIChwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUiB8fCBwcm9jZXNzLmVudi5TQ19BVFRSKSB8fCAnZGF0YS1zdHlsZWQnO1xuXG52YXIgU0NfVkVSU0lPTl9BVFRSID0gJ2RhdGEtc3R5bGVkLXZlcnNpb24nO1xuXG52YXIgU0NfU1RSRUFNX0FUVFIgPSAnZGF0YS1zdHlsZWQtc3RyZWFtZWQnO1xuXG52YXIgSVNfQlJPV1NFUiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdIVE1MRWxlbWVudCcgaW4gd2luZG93O1xuXG52YXIgRElTQUJMRV9TUEVFRFkgPSB0eXBlb2YgU0NfRElTQUJMRV9TUEVFRFkgPT09ICdib29sZWFuJyAmJiBTQ19ESVNBQkxFX1NQRUVEWSB8fCB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSB8fCBwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSkgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuLy8gU2hhcmVkIGVtcHR5IGV4ZWN1dGlvbiBjb250ZXh0IHdoZW4gZ2VuZXJhdGluZyBzdGF0aWMgc3R5bGVzXG52YXIgU1RBVElDX0VYRUNVVElPTl9DT05URVhUID0ge307XG5cbi8vIFxuXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKi9cbnZhciBFUlJPUlMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8ge1xuICBcIjFcIjogXCJDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJXMuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNvbnN1bWVkIGEgYFNlcnZlclN0eWxlU2hlZXRgJ3Mgc3R5bGVzISBgU2VydmVyU3R5bGVTaGVldGAgaXMgYSBvbmUgb2ZmIGluc3RhbmNlIGZvciBlYWNoIHNlcnZlci1zaWRlIHJlbmRlciBjeWNsZS5cXG5cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJldXNlIGl0IGFjcm9zcyByZW5kZXJzP1xcbi0gQXJlIHlvdSBhY2NpZGVudGFsbHkgY2FsbGluZyBjb2xsZWN0U3R5bGVzIHR3aWNlP1xcblxcblwiLFxuICBcIjNcIjogXCJTdHJlYW1pbmcgU1NSIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudDsgUGxlYXNlIGRvIG5vdCB0cnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgYnJvd3Nlci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiVGhlIGBTdHlsZVNoZWV0TWFuYWdlcmAgZXhwZWN0cyBhIHZhbGlkIHRhcmdldCBvciBzaGVldCBwcm9wIVxcblxcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBjbGllbnQgYW5kIGlzIHlvdXIgdGFyZ2V0IGZhbHN5P1xcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBzZXJ2ZXIgYW5kIGlzIHRoZSBzaGVldCBmYWxzeT9cXG5cXG5cIixcbiAgXCI1XCI6IFwiVGhlIGNsb25lIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgY2xpZW50IVxcblxcbi0gQXJlIHlvdSBydW5uaW5nIGluIGEgY2xpZW50LWxpa2UgZW52aXJvbm1lbnQgb24gdGhlIHNlcnZlcj9cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJ1biBTU1Igb24gdGhlIGNsaWVudD9cXG5cXG5cIixcbiAgXCI2XCI6IFwiVHJ5aW5nIHRvIGluc2VydCBhIG5ldyBzdHlsZSB0YWcsIGJ1dCB0aGUgZ2l2ZW4gTm9kZSBpcyB1bm1vdW50ZWQhXFxuXFxuLSBBcmUgeW91IHVzaW5nIGEgY3VzdG9tIHRhcmdldCB0aGF0IGlzbid0IG1vdW50ZWQ/XFxuLSBEb2VzIHlvdXIgZG9jdW1lbnQgbm90IGhhdmUgYSB2YWxpZCBoZWFkIGVsZW1lbnQ/XFxuLSBIYXZlIHlvdSBhY2NpZGVudGFsbHkgcmVtb3ZlZCBhIHN0eWxlIHRhZyBtYW51YWxseT9cXG5cXG5cIixcbiAgXCI3XCI6IFwiVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFxcXCJ0aGVtZVxcXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXFxcInRoZW1lXFxcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiTWlzc2luZyBkb2N1bWVudCBgPGhlYWQ+YFxcblxcblwiLFxuICBcIjEwXCI6IFwiQ2Fubm90IGZpbmQgYSBTdHlsZVNoZWV0IGluc3RhbmNlLiBVc3VhbGx5IHRoaXMgaGFwcGVucyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29waWVzIG9mIHN0eWxlZC1jb21wb25lbnRzIGxvYWRlZCBhdCBvbmNlLiBDaGVjayBvdXQgdGhpcyBpc3N1ZSBmb3IgaG93IHRvIHRyb3VibGVzaG9vdCBhbmQgZml4IHRoZSBjb21tb24gY2FzZXMgd2hlcmUgdGhpcyBzaXR1YXRpb24gY2FuIGhhcHBlbjogaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2lzc3Vlcy8xOTQxI2lzc3VlY29tbWVudC00MTc4NjIwMjFcXG5cXG5cIixcbiAgXCIxMVwiOiBcIl9UaGlzIGVycm9yIHdhcyByZXBsYWNlZCB3aXRoIGEgZGV2LXRpbWUgd2FybmluZywgaXQgd2lsbCBiZSBkZWxldGVkIGZvciB2NCBmaW5hbC5fIFtjcmVhdGVHbG9iYWxTdHlsZV0gcmVjZWl2ZWQgY2hpbGRyZW4gd2hpY2ggd2lsbCBub3QgYmUgcmVuZGVyZWQuIFBsZWFzZSB1c2UgdGhlIGNvbXBvbmVudCB3aXRob3V0IHBhc3NpbmcgY2hpbGRyZW4gZWxlbWVudHMuXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJJdCBzZWVtcyB5b3UgYXJlIGludGVycG9sYXRpbmcgYSBrZXlmcmFtZSBkZWNsYXJhdGlvbiAoJXMpIGludG8gYW4gdW50YWdnZWQgc3RyaW5nLiBUaGlzIHdhcyBzdXBwb3J0ZWQgaW4gc3R5bGVkLWNvbXBvbmVudHMgdjMsIGJ1dCBpcyBub3QgbG9uZ2VyIHN1cHBvcnRlZCBpbiB2NCBhcyBrZXlmcmFtZXMgYXJlIG5vdyBpbmplY3RlZCBvbi1kZW1hbmQuIFBsZWFzZSB3cmFwIHlvdXIgc3RyaW5nIGluIHRoZSBjc3NcXFxcYFxcXFxgIGhlbHBlciAoc2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjc3MpLCB3aGljaCBlbnN1cmVzIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGNvcnJlY3RseS5cXG5cXG5cIixcbiAgXCIxM1wiOiBcIiVzIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cXG5cIlxufSA6IHt9O1xuXG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICovXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIHZhciBhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYiA9IFtdO1xuXG4gIGZvciAodmFyIGMgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBjIDwgbGVuOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYXJndW1lbnRzLmxlbmd0aCA8PSBjID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcblxuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKi9cblxudmFyIFN0eWxlZENvbXBvbmVudHNFcnJvciA9IGZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgaW5oZXJpdHMoU3R5bGVkQ29tcG9uZW50c0Vycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudHNFcnJvcihjb2RlKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVkQ29tcG9uZW50c0Vycm9yKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXJyb3IuY2FsbCh0aGlzLCAnQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvcGFja2FnZXMvc3R5bGVkLWNvbXBvbmVudHMvc3JjL3V0aWxzL2Vycm9ycy5tZCMnICsgY29kZSArICcgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyArIChpbnRlcnBvbGF0aW9ucy5sZW5ndGggPiAwID8gJyBBZGRpdGlvbmFsIGFyZ3VtZW50czogJyArIGludGVycG9sYXRpb25zLmpvaW4oJywgJykgOiAnJykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXJyb3IuY2FsbCh0aGlzLCBmb3JtYXQuYXBwbHkodW5kZWZpbmVkLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKS50cmltKCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFN0eWxlZENvbXBvbmVudHNFcnJvcjtcbn0oRXJyb3IpO1xuXG4vLyBcbnZhciBTQ19DT01QT05FTlRfSUQgPSAvXlteXFxTXFxuXSo/XFwvXFwqIHNjLWNvbXBvbmVudC1pZDpcXHMqKFxcUyspXFxzK1xcKlxcLy9nbTtcblxudmFyIGV4dHJhY3RDb21wcyA9IChmdW5jdGlvbiAobWF5YmVDU1MpIHtcbiAgdmFyIGNzcyA9ICcnICsgKG1heWJlQ1NTIHx8ICcnKTsgLy8gRGVmaW5pdGVseSBhIHN0cmluZywgYW5kIGEgY2xvbmVcbiAgdmFyIGV4aXN0aW5nQ29tcG9uZW50cyA9IFtdO1xuICBjc3MucmVwbGFjZShTQ19DT01QT05FTlRfSUQsIGZ1bmN0aW9uIChtYXRjaCwgY29tcG9uZW50SWQsIG1hdGNoSW5kZXgpIHtcbiAgICBleGlzdGluZ0NvbXBvbmVudHMucHVzaCh7IGNvbXBvbmVudElkOiBjb21wb25lbnRJZCwgbWF0Y2hJbmRleDogbWF0Y2hJbmRleCB9KTtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuICByZXR1cm4gZXhpc3RpbmdDb21wb25lbnRzLm1hcChmdW5jdGlvbiAoX3JlZiwgaSkge1xuICAgIHZhciBjb21wb25lbnRJZCA9IF9yZWYuY29tcG9uZW50SWQsXG4gICAgICAgIG1hdGNoSW5kZXggPSBfcmVmLm1hdGNoSW5kZXg7XG5cbiAgICB2YXIgbmV4dENvbXAgPSBleGlzdGluZ0NvbXBvbmVudHNbaSArIDFdO1xuICAgIHZhciBjc3NGcm9tRE9NID0gbmV4dENvbXAgPyBjc3Muc2xpY2UobWF0Y2hJbmRleCwgbmV4dENvbXAubWF0Y2hJbmRleCkgOiBjc3Muc2xpY2UobWF0Y2hJbmRleCk7XG4gICAgcmV0dXJuIHsgY29tcG9uZW50SWQ6IGNvbXBvbmVudElkLCBjc3NGcm9tRE9NOiBjc3NGcm9tRE9NIH07XG4gIH0pO1xufSk7XG5cbi8vIFxuXG52YXIgQ09NTUVOVF9SRUdFWCA9IC9eXFxzKlxcL1xcLy4qJC9nbTtcblxuLy8gTk9URTogVGhpcyBzdHlsaXMgaW5zdGFuY2UgaXMgb25seSB1c2VkIHRvIHNwbGl0IHJ1bGVzIGZyb20gU1NSJ2Qgc3R5bGUgdGFnc1xudmFyIHN0eWxpc1NwbGl0dGVyID0gbmV3IFN0eWxpcyh7XG4gIGdsb2JhbDogZmFsc2UsXG4gIGNhc2NhZGU6IHRydWUsXG4gIGtleWZyYW1lOiBmYWxzZSxcbiAgcHJlZml4OiBmYWxzZSxcbiAgY29tcHJlc3M6IGZhbHNlLFxuICBzZW1pY29sb246IHRydWVcbn0pO1xuXG52YXIgc3R5bGlzID0gbmV3IFN0eWxpcyh7XG4gIGdsb2JhbDogZmFsc2UsXG4gIGNhc2NhZGU6IHRydWUsXG4gIGtleWZyYW1lOiBmYWxzZSxcbiAgcHJlZml4OiB0cnVlLFxuICBjb21wcmVzczogZmFsc2UsXG4gIHNlbWljb2xvbjogZmFsc2UgLy8gTk9URTogVGhpcyBtZWFucyBcImF1dG9jb21wbGV0ZSBtaXNzaW5nIHNlbWljb2xvbnNcIlxufSk7XG5cbi8vIFdyYXAgYGluc2VydFJ1bGVQbHVnaW4gdG8gYnVpbGQgYSBsaXN0IG9mIHJ1bGVzLFxuLy8gYW5kIHRoZW4gbWFrZSBvdXIgb3duIHBsdWdpbiB0byByZXR1cm4gdGhlIHJ1bGVzLiBUaGlzXG4vLyBtYWtlcyBpdCBlYXNpZXIgdG8gaG9vayBpbnRvIHRoZSBleGlzdGluZyBTU1IgYXJjaGl0ZWN0dXJlXG5cbnZhciBwYXJzaW5nUnVsZXMgPSBbXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG52YXIgcmV0dXJuUnVsZXNQbHVnaW4gPSBmdW5jdGlvbiByZXR1cm5SdWxlc1BsdWdpbihjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSAtMikge1xuICAgIHZhciBwYXJzZWRSdWxlcyA9IHBhcnNpbmdSdWxlcztcbiAgICBwYXJzaW5nUnVsZXMgPSBbXTtcbiAgICByZXR1cm4gcGFyc2VkUnVsZXM7XG4gIH1cbn07XG5cbnZhciBwYXJzZVJ1bGVzUGx1Z2luID0gX2luc2VydFJ1bGVQbHVnaW4oZnVuY3Rpb24gKHJ1bGUpIHtcbiAgcGFyc2luZ1J1bGVzLnB1c2gocnVsZSk7XG59KTtcblxudmFyIF9jb21wb25lbnRJZCA9IHZvaWQgMDtcbnZhciBfc2VsZWN0b3IgPSB2b2lkIDA7XG52YXIgX3NlbGVjdG9yUmVnZXhwID0gdm9pZCAwO1xuXG52YXIgc2VsZlJlZmVyZW5jZVJlcGxhY2VyID0gZnVuY3Rpb24gc2VsZlJlZmVyZW5jZVJlcGxhY2VyKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICBpZiAoXG4gIC8vIHRoZSBmaXJzdCBzZWxmLXJlZiBpcyBhbHdheXMgdW50b3VjaGVkXG4gIG9mZnNldCA+IDAgJiZcbiAgLy8gdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IHR3byBzZWxmLXJlZnMgdG8gZG8gYSByZXBsYWNlbWVudCAoLmIgPiAuYilcbiAgc3RyaW5nLnNsaWNlKDAsIG9mZnNldCkuaW5kZXhPZihfc2VsZWN0b3IpICE9PSAtMSAmJlxuICAvLyBubyBjb25zZWN1dGl2ZSBzZWxmIHJlZnMgKC5iLmIpOyB0aGF0IGlzIGEgcHJlY2VkZW5jZSBib29zdCBhbmQgdHJlYXRlZCBkaWZmZXJlbnRseVxuICBzdHJpbmcuc2xpY2Uob2Zmc2V0IC0gX3NlbGVjdG9yLmxlbmd0aCwgb2Zmc2V0KSAhPT0gX3NlbGVjdG9yKSB7XG4gICAgcmV0dXJuICcuJyArIF9jb21wb25lbnRJZDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaDtcbn07XG5cbi8qKlxuICogV2hlbiB3cml0aW5nIGEgc3R5bGUgbGlrZVxuICpcbiAqICYgKyAmIHtcbiAqICAgY29sb3I6IHJlZDtcbiAqIH1cbiAqXG4gKiBUaGUgc2Vjb25kIGFtcGVyc2FuZCBzaG91bGQgYmUgYSByZWZlcmVuY2UgdG8gdGhlIHN0YXRpYyBjb21wb25lbnQgY2xhc3MuIHN0eWxpc1xuICogaGFzIG5vIGtub3dsZWRnZSBvZiBzdGF0aWMgY2xhc3Mgc28gd2UgaGF2ZSB0byBpbnRlbGxpZ2VudGx5IHJlcGxhY2UgdGhlIGJhc2Ugc2VsZWN0b3IuXG4gKi9cbnZhciBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4gPSBmdW5jdGlvbiBzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4oY29udGV4dCwgXywgc2VsZWN0b3JzKSB7XG4gIGlmIChjb250ZXh0ID09PSAyICYmIHNlbGVjdG9ycy5sZW5ndGggJiYgc2VsZWN0b3JzWzBdLmxhc3RJbmRleE9mKF9zZWxlY3RvcikgPiAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgc2VsZWN0b3JzWzBdID0gc2VsZWN0b3JzWzBdLnJlcGxhY2UoX3NlbGVjdG9yUmVnZXhwLCBzZWxmUmVmZXJlbmNlUmVwbGFjZXIpO1xuICB9XG59O1xuXG5zdHlsaXMudXNlKFtzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4sIHBhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSk7XG5zdHlsaXNTcGxpdHRlci51c2UoW3BhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSk7XG5cbnZhciBzcGxpdEJ5UnVsZXMgPSBmdW5jdGlvbiBzcGxpdEJ5UnVsZXMoY3NzKSB7XG4gIHJldHVybiBzdHlsaXNTcGxpdHRlcignJywgY3NzKTtcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVJ1bGVzKHJ1bGVzLCBzZWxlY3RvciwgcHJlZml4KSB7XG4gIHZhciBjb21wb25lbnRJZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJyYnO1xuXG4gIHZhciBmbGF0Q1NTID0gcnVsZXMuam9pbignJykucmVwbGFjZShDT01NRU5UX1JFR0VYLCAnJyk7IC8vIHJlcGxhY2UgSlMgY29tbWVudHNcblxuICB2YXIgY3NzU3RyID0gc2VsZWN0b3IgJiYgcHJlZml4ID8gcHJlZml4ICsgJyAnICsgc2VsZWN0b3IgKyAnIHsgJyArIGZsYXRDU1MgKyAnIH0nIDogZmxhdENTUztcblxuICAvLyBzdHlsaXMgaGFzIG5vIGNvbmNlcHQgb2Ygc3RhdGUgdG8gYmUgcGFzc2VkIHRvIHBsdWdpbnNcbiAgLy8gYnV0IHNpbmNlIEpTIGlzIHNpbmdsZT10aHJlYWRlZCwgd2UgY2FuIHJlbHkgb24gdGhhdCB0byBlbnN1cmVcbiAgLy8gdGhlc2UgcHJvcGVydGllcyBzdGF5IGluIHN5bmMgd2l0aCB0aGUgY3VycmVudCBzdHlsaXMgcnVuXG4gIF9jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICBfc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgX3NlbGVjdG9yUmVnZXhwID0gbmV3IFJlZ0V4cCgnXFxcXCcgKyBfc2VsZWN0b3IgKyAnXFxcXGInLCAnZycpO1xuXG4gIHJldHVybiBzdHlsaXMocHJlZml4IHx8ICFzZWxlY3RvciA/ICcnIDogc2VsZWN0b3IsIGNzc1N0cik7XG59XG5cbi8vIFxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby11bmRlZiAqL1xuXG52YXIgZ2V0Tm9uY2UgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbn0pO1xuXG4vLyBcbi8qIFRoZXNlIGFyZSBoZWxwZXJzIGZvciB0aGUgU3R5bGVUYWdzIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGluamVjdGVkXG4gKiBydWxlIG5hbWVzIGZvciBlYWNoIChjb21wb25lbnQpIElEIHRoYXQgdGhleSdyZSBrZWVwaW5nIHRyYWNrIG9mLlxuICogVGhleSdyZSBjcnVjaWFsIGZvciBkZXRlY3Rpbmcgd2hldGhlciBhIG5hbWUgaGFzIGFscmVhZHkgYmVlblxuICogaW5qZWN0ZWQuXG4gKiAoVGhpcyBleGNsdWRlcyByZWh5ZHJhdGVkIG5hbWVzKSAqL1xuXG4vKiBhZGRzIGEgbmV3IElEOm5hbWUgcGFpcmluZyB0byBhIG5hbWVzIGRpY3Rpb25hcnkgKi9cbnZhciBhZGROYW1lRm9ySWQgPSBmdW5jdGlvbiBhZGROYW1lRm9ySWQobmFtZXMsIGlkLCBuYW1lKSB7XG4gIGlmIChuYW1lKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdmFyIG5hbWVzRm9ySWQgPSBuYW1lc1tpZF0gfHwgKG5hbWVzW2lkXSA9IE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgIG5hbWVzRm9ySWRbbmFtZV0gPSB0cnVlO1xuICB9XG59O1xuXG4vKiByZXNldHMgYW4gSUQgZW50aXJlbHkgYnkgb3ZlcndyaXRpbmcgaXQgaW4gdGhlIGRpY3Rpb25hcnkgKi9cbnZhciByZXNldElkTmFtZXMgPSBmdW5jdGlvbiByZXNldElkTmFtZXMobmFtZXMsIGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBuYW1lc1tpZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xufTtcblxuLyogZmFjdG9yeSBmb3IgYSBuYW1lcyBkaWN0aW9uYXJ5IGNoZWNraW5nIHRoZSBleGlzdGFuY2Ugb2YgYW4gSUQ6bmFtZSBwYWlyaW5nICovXG52YXIgaGFzTmFtZUZvcklkID0gZnVuY3Rpb24gaGFzTmFtZUZvcklkKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZXNbaWRdICE9PSB1bmRlZmluZWQgJiYgbmFtZXNbaWRdW25hbWVdO1xuICB9O1xufTtcblxuLyogc3RyaW5naWZpZXMgbmFtZXMgZm9yIHRoZSBodG1sL2VsZW1lbnQgb3V0cHV0ICovXG52YXIgc3RyaW5naWZ5TmFtZXMgPSBmdW5jdGlvbiBzdHJpbmdpZnlOYW1lcyhuYW1lcykge1xuICB2YXIgc3RyID0gJyc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgZm9yICh2YXIgaWQgaW4gbmFtZXMpIHtcbiAgICBzdHIgKz0gT2JqZWN0LmtleXMobmFtZXNbaWRdKS5qb2luKCcgJykgKyAnICc7XG4gIH1cbiAgcmV0dXJuIHN0ci50cmltKCk7XG59O1xuXG4vKiBjbG9uZXMgdGhlIG5lc3RlZCBuYW1lcyBkaWN0aW9uYXJ5ICovXG52YXIgY2xvbmVOYW1lcyA9IGZ1bmN0aW9uIGNsb25lTmFtZXMobmFtZXMpIHtcbiAgdmFyIGNsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICBmb3IgKHZhciBpZCBpbiBuYW1lcykge1xuICAgIGNsb25lW2lkXSA9IF9leHRlbmRzKHt9LCBuYW1lc1tpZF0pO1xuICB9XG4gIHJldHVybiBjbG9uZTtcbn07XG5cbi8vIFxuXG4vKiBUaGVzZSBhcmUgaGVscGVycyB0aGF0IGRlYWwgd2l0aCB0aGUgaW5zZXJ0UnVsZSAoYWthIHNwZWVkeSkgQVBJXG4gKiBUaGV5IGFyZSB1c2VkIGluIHRoZSBTdHlsZVRhZ3MgYW5kIHNwZWNpZmljYWxseSB0aGUgc3BlZWR5IHRhZ1xuICovXG5cbi8qIHJldHJpZXZlIGEgc2hlZXQgZm9yIGEgZ2l2ZW4gc3R5bGUgdGFnICovXG52YXIgc2hlZXRGb3JUYWcgPSBmdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICBpZiAodGFnLnNoZWV0KSByZXR1cm4gdGFnLnNoZWV0O1xuXG4gIC8qIEZpcmVmb3ggcXVpcmsgcmVxdWlyZXMgdXMgdG8gc3RlcCB0aHJvdWdoIGFsbCBzdHlsZXNoZWV0cyB0byBmaW5kIG9uZSBvd25lZCBieSB0aGUgZ2l2ZW4gdGFnICovXG4gIHZhciBzaXplID0gZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIHZhciBzaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoc2hlZXQub3duZXJOb2RlID09PSB0YWcpIHJldHVybiBzaGVldDtcbiAgfVxuXG4gIC8qIHdlIHNob3VsZCBhbHdheXMgYmUgYWJsZSB0byBmaW5kIGEgdGFnICovXG4gIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMTApO1xufTtcblxuLyogaW5zZXJ0IGEgcnVsZSBzYWZlbHkgYW5kIHJldHVybiB3aGV0aGVyIGl0IHdhcyBhY3R1YWxseSBpbmplY3RlZCAqL1xudmFyIHNhZmVJbnNlcnRSdWxlID0gZnVuY3Rpb24gc2FmZUluc2VydFJ1bGUoc2hlZXQsIGNzc1J1bGUsIGluZGV4KSB7XG4gIC8qIGFib3J0IGVhcmx5IGlmIGNzc1J1bGUgc3RyaW5nIGlzIGZhbHN5ICovXG4gIGlmICghY3NzUnVsZSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXhJbmRleCA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcblxuICB0cnkge1xuICAgIC8qIHVzZSBpbnNlcnRSdWxlIGFuZCBjYXAgcGFzc2VkIGluZGV4IHdpdGggbWF4SW5kZXggKG5vIG9mIGNzc1J1bGVzKSAqL1xuICAgIHNoZWV0Lmluc2VydFJ1bGUoY3NzUnVsZSwgaW5kZXggPD0gbWF4SW5kZXggPyBpbmRleCA6IG1heEluZGV4KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLyogYW55IGVycm9yIGluZGljYXRlcyBhbiBpbnZhbGlkIHJ1bGUgKi9cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qIGRlbGV0ZXMgYHNpemVgIHJ1bGVzIHN0YXJ0aW5nIGZyb20gYHJlbW92YWxJbmRleGAgKi9cbnZhciBkZWxldGVSdWxlcyA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGVzKHNoZWV0LCByZW1vdmFsSW5kZXgsIHNpemUpIHtcbiAgdmFyIGxvd2VyQm91bmQgPSByZW1vdmFsSW5kZXggLSBzaXplO1xuICBmb3IgKHZhciBpID0gcmVtb3ZhbEluZGV4OyBpID4gbG93ZXJCb3VuZDsgaSAtPSAxKSB7XG4gICAgc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgfVxufTtcblxuLy8gXG5cbi8qIHRoaXMgbWFya2VyIHNlcGFyYXRlcyBjb21wb25lbnQgc3R5bGVzIGFuZCBpcyBpbXBvcnRhbnQgZm9yIHJlaHlkcmF0aW9uICovXG52YXIgbWFrZVRleHRNYXJrZXIgPSBmdW5jdGlvbiBtYWtlVGV4dE1hcmtlcihpZCkge1xuICByZXR1cm4gJ1xcbi8qIHNjLWNvbXBvbmVudC1pZDogJyArIGlkICsgJyAqL1xcbic7XG59O1xuXG4vKiBhZGQgdXAgYWxsIG51bWJlcnMgaW4gYXJyYXkgdXAgdW50aWwgYW5kIGluY2x1ZGluZyB0aGUgaW5kZXggKi9cbnZhciBhZGRVcFVudGlsSW5kZXggPSBmdW5jdGlvbiBhZGRVcFVudGlsSW5kZXgoc2l6ZXMsIGluZGV4KSB7XG4gIHZhciB0b3RhbFVwVG9JbmRleCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IGluZGV4OyBpICs9IDEpIHtcbiAgICB0b3RhbFVwVG9JbmRleCArPSBzaXplc1tpXTtcbiAgfVxuXG4gIHJldHVybiB0b3RhbFVwVG9JbmRleDtcbn07XG5cbi8qIGNyZWF0ZSBhIG5ldyBzdHlsZSB0YWcgYWZ0ZXIgbGFzdEVsICovXG52YXIgbWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKHRhcmdldCwgdGFnRWwsIGluc2VydEJlZm9yZSkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBlbC5zZXRBdHRyaWJ1dGUoU0NfQVRUUiwgJycpO1xuICBlbC5zZXRBdHRyaWJ1dGUoU0NfVkVSU0lPTl9BVFRSLCBcIjQuMy4yXCIpO1xuXG4gIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gIGlmIChub25jZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gIH1cblxuICAvKiBXb3JrIGFyb3VuZCBpbnNlcnRSdWxlIHF1aXJrIGluIEVkZ2VIVE1MICovXG4gIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG5cbiAgaWYgKHRhcmdldCAmJiAhdGFnRWwpIHtcbiAgICAvKiBBcHBlbmQgdG8gdGFyZ2V0IHdoZW4gbm8gcHJldmlvdXMgZWxlbWVudCB3YXMgcGFzc2VkICovXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXRhZ0VsIHx8ICF0YXJnZXQgfHwgIXRhZ0VsLnBhcmVudE5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNik7XG4gICAgfVxuXG4gICAgLyogSW5zZXJ0IG5ldyBzdHlsZSB0YWcgYWZ0ZXIgdGhlIHByZXZpb3VzIG9uZSAqL1xuICAgIHRhZ0VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBpbnNlcnRCZWZvcmUgPyB0YWdFbCA6IHRhZ0VsLm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIHJldHVybiBlbDtcbn07XG5cbi8qIHRha2VzIGEgY3NzIGZhY3RvcnkgZnVuY3Rpb24gYW5kIG91dHB1dHMgYW4gaHRtbCBzdHlsZWQgdGFnIGZhY3RvcnkgKi9cbnZhciB3cmFwQXNIdG1sVGFnID0gZnVuY3Rpb24gd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWRkaXRpb25hbEF0dHJzKSB7XG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICB2YXIgYXR0cnMgPSBbbm9uY2UgJiYgJ25vbmNlPVwiJyArIG5vbmNlICsgJ1wiJywgU0NfQVRUUiArICc9XCInICsgc3RyaW5naWZ5TmFtZXMobmFtZXMpICsgJ1wiJywgU0NfVkVSU0lPTl9BVFRSICsgJz1cIicgKyBcIjQuMy4yXCIgKyAnXCInLCBhZGRpdGlvbmFsQXR0cnNdO1xuXG4gICAgdmFyIGh0bWxBdHRyID0gYXR0cnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICByZXR1cm4gJzxzdHlsZSAnICsgaHRtbEF0dHIgKyAnPicgKyBjc3MoKSArICc8L3N0eWxlPic7XG4gIH07XG59O1xuXG4vKiB0YWtlcyBhIGNzcyBmYWN0b3J5IGZ1bmN0aW9uIGFuZCBvdXRwdXRzIGFuIGVsZW1lbnQgZmFjdG9yeSAqL1xudmFyIHdyYXBBc0VsZW1lbnQgPSBmdW5jdGlvbiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzO1xuXG4gICAgdmFyIHByb3BzID0gKF9wcm9wcyA9IHt9LCBfcHJvcHNbU0NfQVRUUl0gPSBzdHJpbmdpZnlOYW1lcyhuYW1lcyksIF9wcm9wc1tTQ19WRVJTSU9OX0FUVFJdID0gXCI0LjMuMlwiLCBfcHJvcHMpO1xuXG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHByb3BzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGNzcygpIH0gfSkpO1xuICB9O1xufTtcblxudmFyIGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeSA9IGZ1bmN0aW9uIGdldElkc0Zyb21NYXJrZXJzRmFjdG9yeShtYXJrZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcmtlcnMpO1xuICB9O1xufTtcblxuLyogc3BlZWR5IHRhZ3MgdXRpbGlzZSBpbnNlcnRSdWxlICovXG52YXIgbWFrZVNwZWVkeVRhZyA9IGZ1bmN0aW9uIG1ha2VTcGVlZHlUYWcoZWwsIGdldEltcG9ydFJ1bGVUYWcpIHtcbiAgdmFyIG5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIG1hcmtlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc2l6ZXMgPSBbXTtcblxuICB2YXIgZXh0cmFjdEltcG9ydCA9IGdldEltcG9ydFJ1bGVUYWcgIT09IHVuZGVmaW5lZDtcbiAgLyogaW5kaWNhdGVzIHdoZXRoZXIgZ2V0SW1wb3J0UnVsZVRhZyB3YXMgY2FsbGVkICovXG4gIHZhciB1c2VkSW1wb3J0UnVsZVRhZyA9IGZhbHNlO1xuXG4gIHZhciBpbnNlcnRNYXJrZXIgPSBmdW5jdGlvbiBpbnNlcnRNYXJrZXIoaWQpIHtcbiAgICB2YXIgcHJldiA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChwcmV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIG1hcmtlcnNbaWRdID0gc2l6ZXMubGVuZ3RoO1xuICAgIHNpemVzLnB1c2goMCk7XG4gICAgcmVzZXRJZE5hbWVzKG5hbWVzLCBpZCk7XG5cbiAgICByZXR1cm4gbWFya2Vyc1tpZF07XG4gIH07XG5cbiAgdmFyIGluc2VydFJ1bGVzID0gZnVuY3Rpb24gaW5zZXJ0UnVsZXMoaWQsIGNzc1J1bGVzLCBuYW1lKSB7XG4gICAgdmFyIG1hcmtlciA9IGluc2VydE1hcmtlcihpZCk7XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcoZWwpO1xuICAgIHZhciBpbnNlcnRJbmRleCA9IGFkZFVwVW50aWxJbmRleChzaXplcywgbWFya2VyKTtcblxuICAgIHZhciBpbmplY3RlZFJ1bGVzID0gMDtcbiAgICB2YXIgaW1wb3J0UnVsZXMgPSBbXTtcbiAgICB2YXIgY3NzUnVsZXNTaXplID0gY3NzUnVsZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3NSdWxlc1NpemU7IGkgKz0gMSkge1xuICAgICAgdmFyIGNzc1J1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgIHZhciBtYXlIYXZlSW1wb3J0ID0gZXh0cmFjdEltcG9ydDsgLyogQGltcG9ydCBydWxlcyBhcmUgcmVvcmRlcmVkIHRvIGFwcGVhciBmaXJzdCAqL1xuICAgICAgaWYgKG1heUhhdmVJbXBvcnQgJiYgY3NzUnVsZS5pbmRleE9mKCdAaW1wb3J0JykgIT09IC0xKSB7XG4gICAgICAgIGltcG9ydFJ1bGVzLnB1c2goY3NzUnVsZSk7XG4gICAgICB9IGVsc2UgaWYgKHNhZmVJbnNlcnRSdWxlKHNoZWV0LCBjc3NSdWxlLCBpbnNlcnRJbmRleCArIGluamVjdGVkUnVsZXMpKSB7XG4gICAgICAgIG1heUhhdmVJbXBvcnQgPSBmYWxzZTtcbiAgICAgICAgaW5qZWN0ZWRSdWxlcyArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleHRyYWN0SW1wb3J0ICYmIGltcG9ydFJ1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHVzZWRJbXBvcnRSdWxlVGFnID0gdHJ1ZTtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGdldEltcG9ydFJ1bGVUYWcoKS5pbnNlcnRSdWxlcyhpZCArICctaW1wb3J0JywgaW1wb3J0UnVsZXMpO1xuICAgIH1cblxuICAgIHNpemVzW21hcmtlcl0gKz0gaW5qZWN0ZWRSdWxlczsgLyogYWRkIHVwIG5vIG9mIGluamVjdGVkIHJ1bGVzICovXG4gICAgYWRkTmFtZUZvcklkKG5hbWVzLCBpZCwgbmFtZSk7XG4gIH07XG5cbiAgdmFyIHJlbW92ZVJ1bGVzID0gZnVuY3Rpb24gcmVtb3ZlUnVsZXMoaWQpIHtcbiAgICB2YXIgbWFya2VyID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKG1hcmtlciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICB2YXIgc2l6ZSA9IHNpemVzW21hcmtlcl07XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcoZWwpO1xuICAgIHZhciByZW1vdmFsSW5kZXggPSBhZGRVcFVudGlsSW5kZXgoc2l6ZXMsIG1hcmtlcikgLSAxO1xuICAgIGRlbGV0ZVJ1bGVzKHNoZWV0LCByZW1vdmFsSW5kZXgsIHNpemUpO1xuICAgIHNpemVzW21hcmtlcl0gPSAwO1xuICAgIHJlc2V0SWROYW1lcyhuYW1lcywgaWQpO1xuXG4gICAgaWYgKGV4dHJhY3RJbXBvcnQgJiYgdXNlZEltcG9ydFJ1bGVUYWcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGdldEltcG9ydFJ1bGVUYWcoKS5yZW1vdmVSdWxlcyhpZCArICctaW1wb3J0Jyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIF9zaGVldEZvclRhZyA9IHNoZWV0Rm9yVGFnKGVsKSxcbiAgICAgICAgY3NzUnVsZXMgPSBfc2hlZXRGb3JUYWcuY3NzUnVsZXM7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgZm9yICh2YXIgaWQgaW4gbWFya2Vycykge1xuICAgICAgc3RyICs9IG1ha2VUZXh0TWFya2VyKGlkKTtcbiAgICAgIHZhciBtYXJrZXIgPSBtYXJrZXJzW2lkXTtcbiAgICAgIHZhciBlbmQgPSBhZGRVcFVudGlsSW5kZXgoc2l6ZXMsIG1hcmtlcik7XG4gICAgICB2YXIgc2l6ZSA9IHNpemVzW21hcmtlcl07XG4gICAgICBmb3IgKHZhciBpID0gZW5kIC0gc2l6ZTsgaSA8IGVuZDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBydWxlID0gY3NzUnVsZXNbaV07XG4gICAgICAgIGlmIChydWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHIgKz0gcnVsZS5jc3NUZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNSk7XG4gICAgfSxcblxuICAgIGNzczogY3NzLFxuICAgIGdldElkczogZ2V0SWRzRnJvbU1hcmtlcnNGYWN0b3J5KG1hcmtlcnMpLFxuICAgIGhhc05hbWVGb3JJZDogaGFzTmFtZUZvcklkKG5hbWVzKSxcbiAgICBpbnNlcnRNYXJrZXI6IGluc2VydE1hcmtlcixcbiAgICBpbnNlcnRSdWxlczogaW5zZXJ0UnVsZXMsXG4gICAgcmVtb3ZlUnVsZXM6IHJlbW92ZVJ1bGVzLFxuICAgIHNlYWxlZDogZmFsc2UsXG4gICAgc3R5bGVUYWc6IGVsLFxuICAgIHRvRWxlbWVudDogd3JhcEFzRWxlbWVudChjc3MsIG5hbWVzKSxcbiAgICB0b0hUTUw6IHdyYXBBc0h0bWxUYWcoY3NzLCBuYW1lcylcbiAgfTtcbn07XG5cbnZhciBtYWtlVGV4dE5vZGUgPSBmdW5jdGlvbiBtYWtlVGV4dE5vZGUoaWQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1ha2VUZXh0TWFya2VyKGlkKSk7XG59O1xuXG52YXIgbWFrZUJyb3dzZXJUYWcgPSBmdW5jdGlvbiBtYWtlQnJvd3NlclRhZyhlbCwgZ2V0SW1wb3J0UnVsZVRhZykge1xuICB2YXIgbmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbWFya2VycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgdmFyIGV4dHJhY3RJbXBvcnQgPSBnZXRJbXBvcnRSdWxlVGFnICE9PSB1bmRlZmluZWQ7XG5cbiAgLyogaW5kaWNhdGVzIHdoZXRoZXIgZ2V0SW1wb3J0UnVsZVRhZyB3YXMgY2FsbGVkICovXG4gIHZhciB1c2VkSW1wb3J0UnVsZVRhZyA9IGZhbHNlO1xuXG4gIHZhciBpbnNlcnRNYXJrZXIgPSBmdW5jdGlvbiBpbnNlcnRNYXJrZXIoaWQpIHtcbiAgICB2YXIgcHJldiA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChwcmV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIG1hcmtlcnNbaWRdID0gbWFrZVRleHROb2RlKGlkKTtcbiAgICBlbC5hcHBlbmRDaGlsZChtYXJrZXJzW2lkXSk7XG4gICAgbmFtZXNbaWRdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHJldHVybiBtYXJrZXJzW2lkXTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgbWFya2VyID0gaW5zZXJ0TWFya2VyKGlkKTtcbiAgICB2YXIgaW1wb3J0UnVsZXMgPSBbXTtcbiAgICB2YXIgY3NzUnVsZXNTaXplID0gY3NzUnVsZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3NSdWxlc1NpemU7IGkgKz0gMSkge1xuICAgICAgdmFyIHJ1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgIHZhciBtYXlIYXZlSW1wb3J0ID0gZXh0cmFjdEltcG9ydDtcbiAgICAgIGlmIChtYXlIYXZlSW1wb3J0ICYmIHJ1bGUuaW5kZXhPZignQGltcG9ydCcpICE9PSAtMSkge1xuICAgICAgICBpbXBvcnRSdWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF5SGF2ZUltcG9ydCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2VwYXJhdG9yID0gaSA9PT0gY3NzUnVsZXNTaXplIC0gMSA/ICcnIDogJyAnO1xuICAgICAgICBtYXJrZXIuYXBwZW5kRGF0YSgnJyArIHJ1bGUgKyBzZXBhcmF0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFkZE5hbWVGb3JJZChuYW1lcywgaWQsIG5hbWUpO1xuXG4gICAgaWYgKGV4dHJhY3RJbXBvcnQgJiYgaW1wb3J0UnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdXNlZEltcG9ydFJ1bGVUYWcgPSB0cnVlO1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgZ2V0SW1wb3J0UnVsZVRhZygpLmluc2VydFJ1bGVzKGlkICsgJy1pbXBvcnQnLCBpbXBvcnRSdWxlcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZW1vdmVSdWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVJ1bGVzKGlkKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChtYXJrZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgLyogY3JlYXRlIG5ldyBlbXB0eSB0ZXh0IG5vZGUgYW5kIHJlcGxhY2UgdGhlIGN1cnJlbnQgb25lICovXG4gICAgdmFyIG5ld01hcmtlciA9IG1ha2VUZXh0Tm9kZShpZCk7XG4gICAgZWwucmVwbGFjZUNoaWxkKG5ld01hcmtlciwgbWFya2VyKTtcbiAgICBtYXJrZXJzW2lkXSA9IG5ld01hcmtlcjtcbiAgICByZXNldElkTmFtZXMobmFtZXMsIGlkKTtcblxuICAgIGlmIChleHRyYWN0SW1wb3J0ICYmIHVzZWRJbXBvcnRSdWxlVGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBnZXRJbXBvcnRSdWxlVGFnKCkucmVtb3ZlUnVsZXMoaWQgKyAnLWltcG9ydCcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICBzdHIgKz0gbWFya2Vyc1tpZF0uZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig1KTtcbiAgICB9LFxuXG4gICAgY3NzOiBjc3MsXG4gICAgZ2V0SWRzOiBnZXRJZHNGcm9tTWFya2Vyc0ZhY3RvcnkobWFya2VycyksXG4gICAgaGFzTmFtZUZvcklkOiBoYXNOYW1lRm9ySWQobmFtZXMpLFxuICAgIGluc2VydE1hcmtlcjogaW5zZXJ0TWFya2VyLFxuICAgIGluc2VydFJ1bGVzOiBpbnNlcnRSdWxlcyxcbiAgICByZW1vdmVSdWxlczogcmVtb3ZlUnVsZXMsXG4gICAgc2VhbGVkOiBmYWxzZSxcbiAgICBzdHlsZVRhZzogZWwsXG4gICAgdG9FbGVtZW50OiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpLFxuICAgIHRvSFRNTDogd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKVxuICB9O1xufTtcblxudmFyIG1ha2VTZXJ2ZXJUYWcgPSBmdW5jdGlvbiBtYWtlU2VydmVyVGFnKG5hbWVzQXJnLCBtYXJrZXJzQXJnKSB7XG4gIHZhciBuYW1lcyA9IG5hbWVzQXJnID09PSB1bmRlZmluZWQgPyBPYmplY3QuY3JlYXRlKG51bGwpIDogbmFtZXNBcmc7XG4gIHZhciBtYXJrZXJzID0gbWFya2Vyc0FyZyA9PT0gdW5kZWZpbmVkID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IG1hcmtlcnNBcmc7XG5cbiAgdmFyIGluc2VydE1hcmtlciA9IGZ1bmN0aW9uIGluc2VydE1hcmtlcihpZCkge1xuICAgIHZhciBwcmV2ID0gbWFya2Vyc1tpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtlcnNbaWRdID0gWycnXTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgbWFya2VyID0gaW5zZXJ0TWFya2VyKGlkKTtcbiAgICBtYXJrZXJbMF0gKz0gY3NzUnVsZXMuam9pbignICcpO1xuICAgIGFkZE5hbWVGb3JJZChuYW1lcywgaWQsIG5hbWUpO1xuICB9O1xuXG4gIHZhciByZW1vdmVSdWxlcyA9IGZ1bmN0aW9uIHJlbW92ZVJ1bGVzKGlkKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbaWRdO1xuICAgIGlmIChtYXJrZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIG1hcmtlclswXSA9ICcnO1xuICAgIHJlc2V0SWROYW1lcyhuYW1lcywgaWQpO1xuICB9O1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICB2YXIgY3NzRm9ySWQgPSBtYXJrZXJzW2lkXVswXTtcbiAgICAgIGlmIChjc3NGb3JJZCkge1xuICAgICAgICBzdHIgKz0gbWFrZVRleHRNYXJrZXIoaWQpICsgY3NzRm9ySWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgdmFyIGNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgdmFyIG5hbWVzQ2xvbmUgPSBjbG9uZU5hbWVzKG5hbWVzKTtcbiAgICB2YXIgbWFya2Vyc0Nsb25lID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKHZhciBpZCBpbiBtYXJrZXJzKSB7XG4gICAgICBtYXJrZXJzQ2xvbmVbaWRdID0gW21hcmtlcnNbaWRdWzBdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZVNlcnZlclRhZyhuYW1lc0Nsb25lLCBtYXJrZXJzQ2xvbmUpO1xuICB9O1xuXG4gIHZhciB0YWcgPSB7XG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGNzczogY3NzLFxuICAgIGdldElkczogZ2V0SWRzRnJvbU1hcmtlcnNGYWN0b3J5KG1hcmtlcnMpLFxuICAgIGhhc05hbWVGb3JJZDogaGFzTmFtZUZvcklkKG5hbWVzKSxcbiAgICBpbnNlcnRNYXJrZXI6IGluc2VydE1hcmtlcixcbiAgICBpbnNlcnRSdWxlczogaW5zZXJ0UnVsZXMsXG4gICAgcmVtb3ZlUnVsZXM6IHJlbW92ZVJ1bGVzLFxuICAgIHNlYWxlZDogZmFsc2UsXG4gICAgc3R5bGVUYWc6IG51bGwsXG4gICAgdG9FbGVtZW50OiB3cmFwQXNFbGVtZW50KGNzcywgbmFtZXMpLFxuICAgIHRvSFRNTDogd3JhcEFzSHRtbFRhZyhjc3MsIG5hbWVzKVxuICB9O1xuXG4gIHJldHVybiB0YWc7XG59O1xuXG52YXIgbWFrZVRhZyA9IGZ1bmN0aW9uIG1ha2VUYWcodGFyZ2V0LCB0YWdFbCwgZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSwgZ2V0SW1wb3J0UnVsZVRhZykge1xuICBpZiAoSVNfQlJPV1NFUiAmJiAhZm9yY2VTZXJ2ZXIpIHtcbiAgICB2YXIgZWwgPSBtYWtlU3R5bGVUYWcodGFyZ2V0LCB0YWdFbCwgaW5zZXJ0QmVmb3JlKTtcblxuICAgIGlmIChESVNBQkxFX1NQRUVEWSkge1xuICAgICAgcmV0dXJuIG1ha2VCcm93c2VyVGFnKGVsLCBnZXRJbXBvcnRSdWxlVGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1ha2VTcGVlZHlUYWcoZWwsIGdldEltcG9ydFJ1bGVUYWcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlU2VydmVyVGFnKCk7XG59O1xuXG52YXIgcmVoeWRyYXRlID0gZnVuY3Rpb24gcmVoeWRyYXRlKHRhZywgZWxzLCBleHRyYWN0ZWQpIHtcbiAgLyogYWRkIGFsbCBleHRyYWN0ZWQgY29tcG9uZW50cyB0byB0aGUgbmV3IHRhZyAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXh0cmFjdGVkLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgdmFyIF9leHRyYWN0ZWQkaSA9IGV4dHJhY3RlZFtpXSxcbiAgICAgICAgY29tcG9uZW50SWQgPSBfZXh0cmFjdGVkJGkuY29tcG9uZW50SWQsXG4gICAgICAgIGNzc0Zyb21ET00gPSBfZXh0cmFjdGVkJGkuY3NzRnJvbURPTTtcblxuICAgIHZhciBjc3NSdWxlcyA9IHNwbGl0QnlSdWxlcyhjc3NGcm9tRE9NKTtcbiAgICB0YWcuaW5zZXJ0UnVsZXMoY29tcG9uZW50SWQsIGNzc1J1bGVzKTtcbiAgfVxuXG4gIC8qIHJlbW92ZSBvbGQgSFRNTFN0eWxlRWxlbWVudHMsIHNpbmNlIHRoZXkgaGF2ZSBiZWVuIHJlaHlkcmF0ZWQgKi9cbiAgZm9yICh2YXIgX2kgPSAwLCBfbGVuID0gZWxzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSArPSAxKSB7XG4gICAgdmFyIGVsID0gZWxzW19pXTtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBcblxudmFyIFNQTElUX1JFR0VYID0gL1xccysvO1xuXG4vKiBkZXRlcm1pbmUgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNvbXBvbmVudHMgYmVmb3JlIHRhZ3MgYXJlIHNoYXJkZWQgKi9cbnZhciBNQVhfU0laRSA9IHZvaWQgMDtcbmlmIChJU19CUk9XU0VSKSB7XG4gIC8qIGluIHNwZWVkeSBtb2RlIHdlIGNhbiBrZWVwIGEgbG90IG1vcmUgcnVsZXMgaW4gYSBzaGVldCBiZWZvcmUgYSBzbG93ZG93biBjYW4gYmUgZXhwZWN0ZWQgKi9cbiAgTUFYX1NJWkUgPSBESVNBQkxFX1NQRUVEWSA/IDQwIDogMTAwMDtcbn0gZWxzZSB7XG4gIC8qIGZvciBzZXJ2ZXJzIHdlIGRvIG5vdCBuZWVkIHRvIHNoYXJkIGF0IGFsbCAqL1xuICBNQVhfU0laRSA9IC0xO1xufVxuXG52YXIgc2hlZXRSdW5uaW5nSWQgPSAwO1xudmFyIG1hc3RlciA9IHZvaWQgMDtcblxudmFyIFN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgLyogYSBtYXAgZnJvbSBpZHMgdG8gdGFncyAqL1xuXG4gIC8qIGRlZmVycmVkIHJ1bGVzIGZvciBhIGdpdmVuIGlkICovXG5cbiAgLyogdGhpcyBpcyB1c2VkIGZvciBub3QgcmVpbmplY3RpbmcgcnVsZXMgdmlhIGhhc05hbWVGb3JJZCgpICovXG5cbiAgLyogd2hlbiBydWxlcyBmb3IgYW4gaWQgYXJlIHJlbW92ZWQgdXNpbmcgcmVtb3ZlKCkgd2UgaGF2ZSB0byBpZ25vcmUgcmVoeWRyYXRlZE5hbWVzIGZvciBpdCAqL1xuXG4gIC8qIGEgbGlzdCBvZiB0YWdzIGJlbG9uZ2luZyB0byB0aGlzIFN0eWxlU2hlZXQgKi9cblxuICAvKiBhIHRhZyBmb3IgaW1wb3J0IHJ1bGVzICovXG5cbiAgLyogY3VycmVudCBjYXBhY2l0eSB1bnRpbCBhIG5ldyB0YWcgbXVzdCBiZSBjcmVhdGVkICovXG5cbiAgLyogY2hpbGRyZW4gKGFrYSBjbG9uZXMpIG9mIHRoaXMgU3R5bGVTaGVldCBpbmhlcml0aW5nIGFsbCBhbmQgZnV0dXJlIGluamVjdGlvbnMgKi9cblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBJU19CUk9XU0VSID8gZG9jdW1lbnQuaGVhZCA6IG51bGw7XG4gICAgdmFyIGZvcmNlU2VydmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIHRoaXMuZ2V0SW1wb3J0UnVsZVRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbXBvcnRSdWxlVGFnID0gX3RoaXMuaW1wb3J0UnVsZVRhZztcblxuICAgICAgaWYgKGltcG9ydFJ1bGVUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaW1wb3J0UnVsZVRhZztcbiAgICAgIH1cblxuICAgICAgdmFyIGZpcnN0VGFnID0gX3RoaXMudGFnc1swXTtcbiAgICAgIHZhciBpbnNlcnRCZWZvcmUgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gX3RoaXMuaW1wb3J0UnVsZVRhZyA9IG1ha2VUYWcoX3RoaXMudGFyZ2V0LCBmaXJzdFRhZyA/IGZpcnN0VGFnLnN0eWxlVGFnIDogbnVsbCwgX3RoaXMuZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSk7XG4gICAgfTtcblxuICAgIHNoZWV0UnVubmluZ0lkICs9IDE7XG4gICAgdGhpcy5pZCA9IHNoZWV0UnVubmluZ0lkO1xuICAgIHRoaXMuZm9yY2VTZXJ2ZXIgPSBmb3JjZVNlcnZlcjtcbiAgICB0aGlzLnRhcmdldCA9IGZvcmNlU2VydmVyID8gbnVsbCA6IHRhcmdldDtcbiAgICB0aGlzLnRhZ01hcCA9IHt9O1xuICAgIHRoaXMuZGVmZXJyZWQgPSB7fTtcbiAgICB0aGlzLnJlaHlkcmF0ZWROYW1lcyA9IHt9O1xuICAgIHRoaXMuaWdub3JlUmVoeWRyYXRlZE5hbWVzID0ge307XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jYXBhY2l0eSA9IDE7XG4gICAgdGhpcy5jbG9uZXMgPSBbXTtcbiAgfVxuXG4gIC8qIHJlaHlkcmF0ZSBhbGwgU1NSJ2Qgc3R5bGUgdGFncyAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUucmVoeWRyYXRlID0gZnVuY3Rpb24gcmVoeWRyYXRlJCQxKCkge1xuICAgIGlmICghSVNfQlJPV1NFUiB8fCB0aGlzLmZvcmNlU2VydmVyKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBlbHMgPSBbXTtcbiAgICB2YXIgZXh0cmFjdGVkID0gW107XG4gICAgdmFyIGlzU3RyZWFtZWQgPSBmYWxzZTtcblxuICAgIC8qIHJldHJpZXZlIGFsbCBvZiBvdXIgU1NSIHN0eWxlIGVsZW1lbnRzIGZyb20gdGhlIERPTSAqL1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlWycgKyBTQ19BVFRSICsgJ11bJyArIFNDX1ZFUlNJT05fQVRUUiArICc9XCInICsgXCI0LjMuMlwiICsgJ1wiXScpO1xuXG4gICAgdmFyIG5vZGVzU2l6ZSA9IG5vZGVzLmxlbmd0aDtcblxuICAgIC8qIGFib3J0IHJlaHlkcmF0aW9uIGlmIG5vIHByZXZpb3VzIHN0eWxlIHRhZ3Mgd2VyZSBmb3VuZCAqL1xuICAgIGlmICghbm9kZXNTaXplKSByZXR1cm4gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXNTaXplOyBpICs9IDEpIHtcbiAgICAgIHZhciBlbCA9IG5vZGVzW2ldO1xuXG4gICAgICAvKiBjaGVjayBpZiBzdHlsZSB0YWcgaXMgYSBzdHJlYW1lZCB0YWcgKi9cbiAgICAgIGlmICghaXNTdHJlYW1lZCkgaXNTdHJlYW1lZCA9ICEhZWwuZ2V0QXR0cmlidXRlKFNDX1NUUkVBTV9BVFRSKTtcblxuICAgICAgLyogcmV0cmlldmUgYWxsIGNvbXBvbmVudCBuYW1lcyAqL1xuICAgICAgdmFyIGVsTmFtZXMgPSAoZWwuZ2V0QXR0cmlidXRlKFNDX0FUVFIpIHx8ICcnKS50cmltKCkuc3BsaXQoU1BMSVRfUkVHRVgpO1xuICAgICAgdmFyIGVsTmFtZXNTaXplID0gZWxOYW1lcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBqID0gMCwgbmFtZTsgaiA8IGVsTmFtZXNTaXplOyBqICs9IDEpIHtcbiAgICAgICAgbmFtZSA9IGVsTmFtZXNbal07XG4gICAgICAgIC8qIGFkZCByZWh5ZHJhdGVkIG5hbWUgdG8gc2hlZXQgdG8gYXZvaWQgcmUtYWRkaW5nIHN0eWxlcyAqL1xuICAgICAgICB0aGlzLnJlaHlkcmF0ZWROYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIGV4dHJhY3QgYWxsIGNvbXBvbmVudHMgYW5kIHRoZWlyIENTUyAqL1xuICAgICAgZXh0cmFjdGVkLnB1c2guYXBwbHkoZXh0cmFjdGVkLCBleHRyYWN0Q29tcHMoZWwudGV4dENvbnRlbnQpKTtcblxuICAgICAgLyogc3RvcmUgb3JpZ2luYWwgSFRNTFN0eWxlRWxlbWVudCAqL1xuICAgICAgZWxzLnB1c2goZWwpO1xuICAgIH1cblxuICAgIC8qIGFib3J0IHJlaHlkcmF0aW9uIGlmIG5vdGhpbmcgd2FzIGV4dHJhY3RlZCAqL1xuICAgIHZhciBleHRyYWN0ZWRTaXplID0gZXh0cmFjdGVkLmxlbmd0aDtcbiAgICBpZiAoIWV4dHJhY3RlZFNpemUpIHJldHVybiB0aGlzO1xuXG4gICAgLyogY3JlYXRlIGEgdGFnIHRvIGJlIHVzZWQgZm9yIHJlaHlkcmF0aW9uICovXG4gICAgdmFyIHRhZyA9IHRoaXMubWFrZVRhZyhudWxsKTtcblxuICAgIHJlaHlkcmF0ZSh0YWcsIGVscywgZXh0cmFjdGVkKTtcblxuICAgIC8qIHJlc2V0IGNhcGFjaXR5IGFuZCBhZGp1c3QgTUFYX1NJWkUgYnkgdGhlIGluaXRpYWwgc2l6ZSBvZiB0aGUgcmVoeWRyYXRpb24gKi9cbiAgICB0aGlzLmNhcGFjaXR5ID0gTWF0aC5tYXgoMSwgTUFYX1NJWkUgLSBleHRyYWN0ZWRTaXplKTtcbiAgICB0aGlzLnRhZ3MucHVzaCh0YWcpO1xuXG4gICAgLyogcmV0cmlldmUgYWxsIGNvbXBvbmVudCBpZHMgKi9cbiAgICBmb3IgKHZhciBfaiA9IDA7IF9qIDwgZXh0cmFjdGVkU2l6ZTsgX2ogKz0gMSkge1xuICAgICAgdGhpcy50YWdNYXBbZXh0cmFjdGVkW19qXS5jb21wb25lbnRJZF0gPSB0YWc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyogcmV0cmlldmUgYSBcIm1hc3RlclwiIGluc3RhbmNlIG9mIFN0eWxlU2hlZXQgd2hpY2ggaXMgdHlwaWNhbGx5IHVzZWQgd2hlbiBubyBvdGhlciBpcyBhdmFpbGFibGVcbiAgICogVGhlIG1hc3RlciBTdHlsZVNoZWV0IGlzIHRhcmdldGVkIGJ5IGNyZWF0ZUdsb2JhbFN0eWxlLCBrZXlmcmFtZXMsIGFuZCBjb21wb25lbnRzIG91dHNpZGUgb2YgYW55XG4gICAgKiBTdHlsZVNoZWV0TWFuYWdlcidzIGNvbnRleHQgKi9cblxuXG4gIC8qIHJlc2V0IHRoZSBpbnRlcm5hbCBcIm1hc3RlclwiIGluc3RhbmNlICovXG4gIFN0eWxlU2hlZXQucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB2YXIgZm9yY2VTZXJ2ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgbWFzdGVyID0gbmV3IFN0eWxlU2hlZXQodW5kZWZpbmVkLCBmb3JjZVNlcnZlcikucmVoeWRyYXRlKCk7XG4gIH07XG5cbiAgLyogYWRkcyBcImNoaWxkcmVuXCIgdG8gdGhlIFN0eWxlU2hlZXQgdGhhdCBpbmhlcml0IGFsbCBvZiB0aGUgcGFyZW50cycgcnVsZXNcbiAgICogd2hpbGUgdGhlaXIgb3duIHJ1bGVzIGRvIG5vdCBhZmZlY3QgdGhlIHBhcmVudCAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh0aGlzLnRhcmdldCwgdGhpcy5mb3JjZVNlcnZlcik7XG5cbiAgICAvKiBhZGQgdG8gY2xvbmUgYXJyYXkgKi9cbiAgICB0aGlzLmNsb25lcy5wdXNoKHNoZWV0KTtcblxuICAgIC8qIGNsb25lIGFsbCB0YWdzICovXG4gICAgc2hlZXQudGFncyA9IHRoaXMudGFncy5tYXAoZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGlkcyA9IHRhZy5nZXRJZHMoKTtcbiAgICAgIHZhciBuZXdUYWcgPSB0YWcuY2xvbmUoKTtcblxuICAgICAgLyogcmVjb25zdHJ1Y3QgdGFnTWFwICovXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzaGVldC50YWdNYXBbaWRzW2ldXSA9IG5ld1RhZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1RhZztcbiAgICB9KTtcblxuICAgIC8qIGNsb25lIG90aGVyIG1hcHMgKi9cbiAgICBzaGVldC5yZWh5ZHJhdGVkTmFtZXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5yZWh5ZHJhdGVkTmFtZXMpO1xuICAgIHNoZWV0LmRlZmVycmVkID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmZXJyZWQpO1xuXG4gICAgcmV0dXJuIHNoZWV0O1xuICB9O1xuXG4gIC8qIGZvcmNlIFN0eWxlU2hlZXQgdG8gY3JlYXRlIGEgbmV3IHRhZyBvbiB0aGUgbmV4dCBpbmplY3Rpb24gKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnNlYWxBbGxUYWdzID0gZnVuY3Rpb24gc2VhbEFsbFRhZ3MoKSB7XG4gICAgdGhpcy5jYXBhY2l0eSA9IDE7XG5cbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHRhZy5zZWFsZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLm1ha2VUYWcgPSBmdW5jdGlvbiBtYWtlVGFnJCQxKHRhZykge1xuICAgIHZhciBsYXN0RWwgPSB0YWcgPyB0YWcuc3R5bGVUYWcgOiBudWxsO1xuICAgIHZhciBpbnNlcnRCZWZvcmUgPSBmYWxzZTtcblxuICAgIHJldHVybiBtYWtlVGFnKHRoaXMudGFyZ2V0LCBsYXN0RWwsIHRoaXMuZm9yY2VTZXJ2ZXIsIGluc2VydEJlZm9yZSwgdGhpcy5nZXRJbXBvcnRSdWxlVGFnKTtcbiAgfTtcblxuICAvKiBnZXQgYSB0YWcgZm9yIGEgZ2l2ZW4gY29tcG9uZW50SWQsIGFzc2lnbiB0aGUgY29tcG9uZW50SWQgdG8gb25lLCBvciBzaGFyZCAqL1xuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXRUYWdGb3JJZCA9IGZ1bmN0aW9uIGdldFRhZ0ZvcklkKGlkKSB7XG4gICAgLyogc2ltcGx5IHJldHVybiBhIHRhZywgd2hlbiB0aGUgY29tcG9uZW50SWQgd2FzIGFscmVhZHkgYXNzaWduZWQgb25lICovXG4gICAgdmFyIHByZXYgPSB0aGlzLnRhZ01hcFtpZF07XG4gICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCAmJiAhcHJldi5zZWFsZWQpIHtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgLyogc2hhcmQgKGNyZWF0ZSBhIG5ldyB0YWcpIGlmIHRoZSB0YWcgaXMgZXhoYXVzdGVkIChTZWUgTUFYX1NJWkUpICovXG4gICAgdGhpcy5jYXBhY2l0eSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuY2FwYWNpdHkgPT09IDApIHtcbiAgICAgIHRoaXMuY2FwYWNpdHkgPSBNQVhfU0laRTtcbiAgICAgIHRhZyA9IHRoaXMubWFrZVRhZyh0YWcpO1xuICAgICAgdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWdNYXBbaWRdID0gdGFnO1xuICB9O1xuXG4gIC8qIG1haW5seSBmb3IgY3JlYXRlR2xvYmFsU3R5bGUgdG8gY2hlY2sgZm9yIGl0cyBpZCAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuaGFzSWQgPSBmdW5jdGlvbiBoYXNJZChpZCkge1xuICAgIHJldHVybiB0aGlzLnRhZ01hcFtpZF0gIT09IHVuZGVmaW5lZDtcbiAgfTtcblxuICAvKiBjYWNoaW5nIGxheWVyIGNoZWNraW5nIGlkK25hbWUgdG8gYWxyZWFkeSBoYXZlIGEgY29ycmVzcG9uZGluZyB0YWcgYW5kIGluamVjdGVkIHJ1bGVzICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5oYXNOYW1lRm9ySWQgPSBmdW5jdGlvbiBoYXNOYW1lRm9ySWQoaWQsIG5hbWUpIHtcbiAgICAvKiBleGNlcHRpb24gZm9yIHJlaHlkcmF0ZWQgbmFtZXMgd2hpY2ggYXJlIGNoZWNrZWQgc2VwYXJhdGVseSAqL1xuICAgIGlmICh0aGlzLmlnbm9yZVJlaHlkcmF0ZWROYW1lc1tpZF0gPT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlaHlkcmF0ZWROYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnTWFwW2lkXTtcbiAgICByZXR1cm4gdGFnICE9PSB1bmRlZmluZWQgJiYgdGFnLmhhc05hbWVGb3JJZChpZCwgbmFtZSk7XG4gIH07XG5cbiAgLyogcmVnaXN0ZXJzIGEgY29tcG9uZW50SWQgYW5kIHJlZ2lzdGVycyBpdCBvbiBpdHMgdGFnICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWZlcnJlZEluamVjdCA9IGZ1bmN0aW9uIGRlZmVycmVkSW5qZWN0KGlkLCBjc3NSdWxlcykge1xuICAgIC8qIGRvbid0IGluamVjdCB3aGVuIHRoZSBpZCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgKi9cbiAgICBpZiAodGhpcy50YWdNYXBbaWRdICE9PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHZhciBjbG9uZXMgPSB0aGlzLmNsb25lcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjbG9uZXNbaV0uZGVmZXJyZWRJbmplY3QoaWQsIGNzc1J1bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmdldFRhZ0ZvcklkKGlkKS5pbnNlcnRNYXJrZXIoaWQpO1xuICAgIHRoaXMuZGVmZXJyZWRbaWRdID0gY3NzUnVsZXM7XG4gIH07XG5cbiAgLyogaW5qZWN0cyBydWxlcyBmb3IgYSBnaXZlbiBpZCB3aXRoIGEgbmFtZSB0aGF0IHdpbGwgbmVlZCB0byBiZSBjYWNoZWQgKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmluamVjdCA9IGZ1bmN0aW9uIGluamVjdChpZCwgY3NzUnVsZXMsIG5hbWUpIHtcbiAgICB2YXIgY2xvbmVzID0gdGhpcy5jbG9uZXM7XG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjbG9uZXNbaV0uaW5qZWN0KGlkLCBjc3NSdWxlcywgbmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMuZ2V0VGFnRm9ySWQoaWQpO1xuXG4gICAgLyogYWRkIGRlZmVycmVkIHJ1bGVzIGZvciBjb21wb25lbnQgKi9cbiAgICBpZiAodGhpcy5kZWZlcnJlZFtpZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQ29tYmluZSBwYXNzZWQgY3NzUnVsZXMgd2l0aCBwcmV2aW91c2x5IGRlZmVycmVkIENTUyBydWxlc1xuICAgICAgLy8gTk9URTogV2UgY2Fubm90IG11dGF0ZSB0aGUgZGVmZXJyZWQgYXJyYXkgaXRzZWxmIGFzIGFsbCBjbG9uZXNcbiAgICAgIC8vIGRvIHRoZSBzYW1lIChzZWUgY2xvbmVzW2ldLmluamVjdClcbiAgICAgIHZhciBydWxlcyA9IHRoaXMuZGVmZXJyZWRbaWRdLmNvbmNhdChjc3NSdWxlcyk7XG4gICAgICB0YWcuaW5zZXJ0UnVsZXMoaWQsIHJ1bGVzLCBuYW1lKTtcblxuICAgICAgdGhpcy5kZWZlcnJlZFtpZF0gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5pbnNlcnRSdWxlcyhpZCwgY3NzUnVsZXMsIG5hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvKiByZW1vdmVzIGFsbCBydWxlcyBmb3IgYSBnaXZlbiBpZCwgd2hpY2ggZG9lc24ndCByZW1vdmUgaXRzIG1hcmtlciBidXQgcmVzZXRzIGl0ICovXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgICB2YXIgdGFnID0gdGhpcy50YWdNYXBbaWRdO1xuICAgIGlmICh0YWcgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdmFyIGNsb25lcyA9IHRoaXMuY2xvbmVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNsb25lc1tpXS5yZW1vdmUoaWQpO1xuICAgIH1cblxuICAgIC8qIHJlbW92ZSBhbGwgcnVsZXMgZnJvbSB0aGUgdGFnICovXG4gICAgdGFnLnJlbW92ZVJ1bGVzKGlkKTtcblxuICAgIC8qIGlnbm9yZSBwb3NzaWJsZSByZWh5ZHJhdGVkIG5hbWVzICovXG4gICAgdGhpcy5pZ25vcmVSZWh5ZHJhdGVkTmFtZXNbaWRdID0gdHJ1ZTtcblxuICAgIC8qIGRlbGV0ZSBwb3NzaWJsZSBkZWZlcnJlZCBydWxlcyAqL1xuICAgIHRoaXMuZGVmZXJyZWRbaWRdID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnRvSFRNTCgpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvUmVhY3RFbGVtZW50cyA9IGZ1bmN0aW9uIHRvUmVhY3RFbGVtZW50cygpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG5cbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7XG4gICAgICB2YXIga2V5ID0gJ3NjLScgKyBpZCArICctJyArIGk7XG4gICAgICByZXR1cm4gY2xvbmVFbGVtZW50KHRhZy50b0VsZW1lbnQoKSwgeyBrZXk6IGtleSB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBudWxsLCBbe1xuICAgIGtleTogJ21hc3RlcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gbWFzdGVyIHx8IChtYXN0ZXIgPSBuZXcgU3R5bGVTaGVldCgpLnJlaHlkcmF0ZSgpKTtcbiAgICB9XG5cbiAgICAvKiBOT1RFOiBUaGlzIGlzIGp1c3QgZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IHdpdGggamVzdC1zdHlsZWQtY29tcG9uZW50cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnN0YW5jZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gU3R5bGVTaGVldC5tYXN0ZXI7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxudmFyIEtleWZyYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gS2V5ZnJhbWVzKG5hbWUsIHJ1bGVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWZyYW1lcyk7XG5cbiAgICB0aGlzLmluamVjdCA9IGZ1bmN0aW9uIChzdHlsZVNoZWV0KSB7XG4gICAgICBpZiAoIXN0eWxlU2hlZXQuaGFzTmFtZUZvcklkKF90aGlzLmlkLCBfdGhpcy5uYW1lKSkge1xuICAgICAgICBzdHlsZVNoZWV0LmluamVjdChfdGhpcy5pZCwgX3RoaXMucnVsZXMsIF90aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcigxMiwgU3RyaW5nKF90aGlzLm5hbWUpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG5cbiAgICB0aGlzLmlkID0gJ3NjLWtleWZyYW1lcy0nICsgbmFtZTtcbiAgfVxuXG4gIEtleWZyYW1lcy5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVzO1xufSgpO1xuXG4vLyBcblxuLyoqXG4gKiBpbmxpbmVkIHZlcnNpb24gb2ZcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxuLy8gXG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjg3YWFiZGZlMWI3NDYxZTczMzFhYmIzNjAxZDllNmJiMjc1NDRiYy9wYWNrYWdlcy9yZWFjdC1kb20vc3JjL3NoYXJlZC9kYW5nZXJvdXNTdHlsZVZhbHVlLmpzXG5mdW5jdGlvbiBhZGRVbml0SWZOZWVkZWQobmFtZSwgdmFsdWUpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FtaWxhamFjay9lc2xpbnQtcGx1Z2luLWZsb3d0eXBlLWVycm9ycy9pc3N1ZXMvMTMzXG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShuYW1lIGluIHVuaXRsZXNzKSkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS50cmltKCk7XG59XG5cbi8vIFxuXG4vKipcbiAqIEl0J3MgZmFsc2lzaCBub3QgZmFsc3kgYmVjYXVzZSAwIGlzIGFsbG93ZWQuXG4gKi9cbnZhciBpc0ZhbHNpc2ggPSBmdW5jdGlvbiBpc0ZhbHNpc2goY2h1bmspIHtcbiAgcmV0dXJuIGNodW5rID09PSB1bmRlZmluZWQgfHwgY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IGZhbHNlIHx8IGNodW5rID09PSAnJztcbn07XG5cbnZhciBvYmpUb0Nzc0FycmF5ID0gZnVuY3Rpb24gb2JqVG9Dc3NBcnJheShvYmosIHByZXZLZXkpIHtcbiAgdmFyIHJ1bGVzID0gW107XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaXNGYWxzaXNoKG9ialtrZXldKSkge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICAgIHJ1bGVzLnB1c2guYXBwbHkocnVsZXMsIG9ialRvQ3NzQXJyYXkob2JqW2tleV0sIGtleSkpO1xuXG4gICAgICAgIHJldHVybiBydWxlcztcbiAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihvYmpba2V5XSkpIHtcbiAgICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArICc6Jywgb2JqW2tleV0sICc7Jyk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgfVxuICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArICc6ICcgKyBhZGRVbml0SWZOZWVkZWQoa2V5LCBvYmpba2V5XSkgKyAnOycpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH0pO1xuXG4gIHJldHVybiBwcmV2S2V5ID8gW3ByZXZLZXkgKyAnIHsnXS5jb25jYXQocnVsZXMsIFsnfSddKSA6IHJ1bGVzO1xufTtcblxuZnVuY3Rpb24gZmxhdHRlbihjaHVuaywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaHVuaykpIHtcbiAgICB2YXIgcnVsZVNldCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNodW5rLmxlbmd0aCwgcmVzdWx0OyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHJlc3VsdCA9IGZsYXR0ZW4oY2h1bmtbaV0sIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBjb250aW51ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHJ1bGVTZXQucHVzaC5hcHBseShydWxlU2V0LCByZXN1bHQpO2Vsc2UgcnVsZVNldC5wdXNoKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBpZiAoaXNGYWxzaXNoKGNodW5rKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyogSGFuZGxlIG90aGVyIGNvbXBvbmVudHMgKi9cbiAgaWYgKGlzU3R5bGVkQ29tcG9uZW50KGNodW5rKSkge1xuICAgIHJldHVybiAnLicgKyBjaHVuay5zdHlsZWRDb21wb25lbnRJZDtcbiAgfVxuXG4gIC8qIEVpdGhlciBleGVjdXRlIG9yIGRlZmVyIHRoZSBmdW5jdGlvbiAqL1xuICBpZiAoaXNGdW5jdGlvbihjaHVuaykpIHtcbiAgICBpZiAoaXNTdGF0ZWxlc3NGdW5jdGlvbihjaHVuaykgJiYgZXhlY3V0aW9uQ29udGV4dCkge1xuICAgICAgdmFyIF9yZXN1bHQgPSBjaHVuayhleGVjdXRpb25Db250ZXh0KTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNFbGVtZW50KF9yZXN1bHQpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihnZXRDb21wb25lbnROYW1lKGNodW5rKSArICcgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxhdHRlbihfcmVzdWx0LCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICB9IGVsc2UgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgaWYgKGNodW5rIGluc3RhbmNlb2YgS2V5ZnJhbWVzKSB7XG4gICAgaWYgKHN0eWxlU2hlZXQpIHtcbiAgICAgIGNodW5rLmluamVjdChzdHlsZVNoZWV0KTtcbiAgICAgIHJldHVybiBjaHVuay5nZXROYW1lKCk7XG4gICAgfSBlbHNlIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIC8qIEhhbmRsZSBvYmplY3RzICovXG4gIHJldHVybiBpc1BsYWluT2JqZWN0KGNodW5rKSA/IG9ialRvQ3NzQXJyYXkoY2h1bmspIDogY2h1bmsudG9TdHJpbmcoKTtcbn1cblxuLy8gXG5cbmZ1bmN0aW9uIGNzcyhzdHlsZXMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKHN0eWxlcykgfHwgaXNQbGFpbk9iamVjdChzdHlsZXMpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBmbGF0dGVuKGludGVybGVhdmUoRU1QVFlfQVJSQVksIFtzdHlsZXNdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIGZsYXR0ZW4oaW50ZXJsZWF2ZShzdHlsZXMsIGludGVycG9sYXRpb25zKSk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBFTVBUWV9PQkpFQ1Q7XG5cbiAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodGFnKSkge1xuICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMSwgU3RyaW5nKHRhZykpO1xuICB9XG5cbiAgLyogVGhpcyBpcyBjYWxsYWJsZSBkaXJlY3RseSBhcyBhIHRlbXBsYXRlIGZ1bmN0aW9uICovXG4gIC8vICRGbG93Rml4TWU6IE5vdCB0eXBlZCB0byBhdm9pZCBkZXN0cnVjdHVyaW5nIGFyZ3VtZW50c1xuICB2YXIgdGVtcGxhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uIHRlbXBsYXRlRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudENvbnN0cnVjdG9yKHRhZywgb3B0aW9ucywgY3NzLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgLyogSWYgY29uZmlnIG1ldGhvZHMgYXJlIGNhbGxlZCwgd3JhcCB1cCBhIG5ldyB0ZW1wbGF0ZSBmdW5jdGlvbiBhbmQgbWVyZ2Ugb3B0aW9ucyAqL1xuICB0ZW1wbGF0ZUZ1bmN0aW9uLndpdGhDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCBjb25maWcpKTtcbiAgfTtcblxuICAvKiBNb2RpZnkvaW5qZWN0IG5ldyBwcm9wcyBhdCBydW50aW1lICovXG4gIHRlbXBsYXRlRnVuY3Rpb24uYXR0cnMgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGF0dHJzOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KG9wdGlvbnMuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbilcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIHRlbXBsYXRlRnVuY3Rpb247XG59XG5cbi8vIFxuLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanMvYmxvYi9tYXN0ZXIvbXVybXVyaGFzaDJfZ2MuanNcbmZ1bmN0aW9uIG11cm11cmhhc2goYykge1xuICBmb3IgKHZhciBlID0gYy5sZW5ndGggfCAwLCBhID0gZSB8IDAsIGQgPSAwLCBiOyBlID49IDQ7KSB7XG4gICAgYiA9IGMuY2hhckNvZGVBdChkKSAmIDI1NSB8IChjLmNoYXJDb2RlQXQoKytkKSAmIDI1NSkgPDwgOCB8IChjLmNoYXJDb2RlQXQoKytkKSAmIDI1NSkgPDwgMTYgfCAoYy5jaGFyQ29kZUF0KCsrZCkgJiAyNTUpIDw8IDI0LCBiID0gMTU0MDQ4MzQ3NyAqIChiICYgNjU1MzUpICsgKCgxNTQwNDgzNDc3ICogKGIgPj4+IDE2KSAmIDY1NTM1KSA8PCAxNiksIGIgXj0gYiA+Pj4gMjQsIGIgPSAxNTQwNDgzNDc3ICogKGIgJiA2NTUzNSkgKyAoKDE1NDA0ODM0NzcgKiAoYiA+Pj4gMTYpICYgNjU1MzUpIDw8IDE2KSwgYSA9IDE1NDA0ODM0NzcgKiAoYSAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChhID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpIF4gYiwgZSAtPSA0LCArK2Q7XG4gIH1cbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSAzOlxuICAgICAgYSBePSAoYy5jaGFyQ29kZUF0KGQgKyAyKSAmIDI1NSkgPDwgMTY7XG4gICAgY2FzZSAyOlxuICAgICAgYSBePSAoYy5jaGFyQ29kZUF0KGQgKyAxKSAmIDI1NSkgPDwgODtcbiAgICBjYXNlIDE6XG4gICAgICBhIF49IGMuY2hhckNvZGVBdChkKSAmIDI1NSwgYSA9IDE1NDA0ODM0NzcgKiAoYSAmIDY1NTM1KSArICgoMTU0MDQ4MzQ3NyAqIChhID4+PiAxNikgJiA2NTUzNSkgPDwgMTYpO1xuICB9XG4gIGEgXj0gYSA+Pj4gMTM7XG4gIGEgPSAxNTQwNDgzNDc3ICogKGEgJiA2NTUzNSkgKyAoKDE1NDA0ODM0NzcgKiAoYSA+Pj4gMTYpICYgNjU1MzUpIDw8IDE2KTtcbiAgcmV0dXJuIChhIF4gYSA+Pj4gMTUpID4+PiAwO1xufVxuXG4vLyBcbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxuLyogVGhpcyBpcyB0aGUgXCJjYXBhY2l0eVwiIG9mIG91ciBhbHBoYWJldCBpLmUuIDJ4MjYgZm9yIGFsbCBsZXR0ZXJzIHBsdXMgdGhlaXIgY2FwaXRhbGlzZWRcbiAqIGNvdW50ZXJwYXJ0cyAqL1xudmFyIGNoYXJzTGVuZ3RoID0gNTI7XG5cbi8qIHN0YXJ0IGF0IDc1IGZvciAnYScgdW50aWwgJ3onICgyNSkgYW5kIHRoZW4gc3RhcnQgYXQgNjUgZm9yIGNhcGl0YWxpc2VkIGxldHRlcnMgKi9cbnZhciBnZXRBbHBoYWJldGljQ2hhciA9IGZ1bmN0aW9uIGdldEFscGhhYmV0aWNDaGFyKGNvZGUpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIChjb2RlID4gMjUgPyAzOSA6IDk3KSk7XG59O1xuXG4vKiBpbnB1dCBhIG51bWJlciwgdXN1YWxseSBhIGhhc2ggYW5kIGNvbnZlcnQgaXQgdG8gYmFzZS01MiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShjb2RlKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIHZhciB4ID0gdm9pZCAwO1xuXG4gIC8qIGdldCBhIGNoYXIgYW5kIGRpdmlkZSBieSBhbHBoYWJldC1sZW5ndGggKi9cbiAgZm9yICh4ID0gY29kZTsgeCA+IGNoYXJzTGVuZ3RoOyB4ID0gTWF0aC5mbG9vcih4IC8gY2hhcnNMZW5ndGgpKSB7XG4gICAgbmFtZSA9IGdldEFscGhhYmV0aWNDaGFyKHggJSBjaGFyc0xlbmd0aCkgKyBuYW1lO1xuICB9XG5cbiAgcmV0dXJuIGdldEFscGhhYmV0aWNDaGFyKHggJSBjaGFyc0xlbmd0aCkgKyBuYW1lO1xufVxuXG4vLyBcblxuZnVuY3Rpb24gaGFzRnVuY3Rpb25PYmplY3RLZXkob2JqKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW4sIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaXNGdW5jdGlvbihvYmpba2V5XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTdGF0aWNSdWxlcyhydWxlcywgYXR0cnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBydWxlID0gcnVsZXNbaV07XG5cbiAgICAvLyByZWN1cnNpdmUgY2FzZVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGUpICYmICFpc1N0YXRpY1J1bGVzKHJ1bGUsIGF0dHJzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihydWxlKSAmJiAhaXNTdHlsZWRDb21wb25lbnQocnVsZSkpIHtcbiAgICAgIC8vIGZ1bmN0aW9ucyBhcmUgYWxsb3dlZCB0byBiZSBzdGF0aWMgaWYgdGhleSdyZSBqdXN0IGJlaW5nXG4gICAgICAvLyB1c2VkIHRvIGdldCB0aGUgY2xhc3NuYW1lIG9mIGEgbmVzdGVkIHN0eWxlZCBjb21wb25lbnRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXR0cnMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHgpIHx8IGhhc0Z1bmN0aW9uT2JqZWN0S2V5KHgpO1xuICB9KSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBcblxudmFyIGlzSE1SRW5hYmxlZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmhvdDtcblxuLyogY29tYmluZXMgaGFzaFN0ciAobXVybXVyaGFzaCkgYW5kIG5hbWVHZW5lcmF0b3IgZm9yIGNvbnZlbmllbmNlICovXG52YXIgaGFzaGVyID0gZnVuY3Rpb24gaGFzaGVyKHN0cikge1xuICByZXR1cm4gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShtdXJtdXJoYXNoKHN0cikpO1xufTtcblxuLypcbiBDb21wb25lbnRTdHlsZSBpcyBhbGwgdGhlIENTUy1zcGVjaWZpYyBzdHVmZiwgbm90XG4gdGhlIFJlYWN0LXNwZWNpZmljIHN0dWZmLlxuICovXG5cbnZhciBDb21wb25lbnRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50U3R5bGUocnVsZXMsIGF0dHJzLCBjb21wb25lbnRJZCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudFN0eWxlKTtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmlzU3RhdGljID0gIWlzSE1SRW5hYmxlZCAmJiBpc1N0YXRpY1J1bGVzKHJ1bGVzLCBhdHRycyk7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuXG4gICAgaWYgKCFTdHlsZVNoZWV0Lm1hc3Rlci5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIFN0eWxlU2hlZXQubWFzdGVyLmRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICAgKiBGbGF0dGVucyBhIHJ1bGUgc2V0IGludG8gdmFsaWQgQ1NTXG4gICAgICogSGFzaGVzIGl0LCB3cmFwcyB0aGUgd2hvbGUgY2h1bmsgaW4gYSAuaGFzaDEyMzQge31cbiAgICAgKiBSZXR1cm5zIHRoZSBoYXNoIHRvIGJlIGluamVjdGVkIG9uIHJlbmRlcigpXG4gICAgICogKi9cblxuXG4gIENvbXBvbmVudFN0eWxlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgICB2YXIgaXNTdGF0aWMgPSB0aGlzLmlzU3RhdGljLFxuICAgICAgICBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQsXG4gICAgICAgIGxhc3RDbGFzc05hbWUgPSB0aGlzLmxhc3RDbGFzc05hbWU7XG5cbiAgICBpZiAoSVNfQlJPV1NFUiAmJiBpc1N0YXRpYyAmJiB0eXBlb2YgbGFzdENsYXNzTmFtZSA9PT0gJ3N0cmluZycgJiYgc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIGxhc3RDbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gbGFzdENsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgZmxhdENTUyA9IGZsYXR0ZW4odGhpcy5ydWxlcywgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCk7XG4gICAgdmFyIG5hbWUgPSBoYXNoZXIodGhpcy5jb21wb25lbnRJZCArIGZsYXRDU1Muam9pbignJykpO1xuICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIG5hbWUpKSB7XG4gICAgICBzdHlsZVNoZWV0LmluamVjdCh0aGlzLmNvbXBvbmVudElkLCBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnLicgKyBuYW1lLCB1bmRlZmluZWQsIGNvbXBvbmVudElkKSwgbmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0Q2xhc3NOYW1lID0gbmFtZTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBDb21wb25lbnRTdHlsZS5nZW5lcmF0ZU5hbWUgPSBmdW5jdGlvbiBnZW5lcmF0ZU5hbWUoc3RyKSB7XG4gICAgcmV0dXJuIGhhc2hlcihzdHIpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRTdHlsZTtcbn0oKTtcblxuLy8gXG5cbnZhciBMSU1JVCA9IDIwMDtcblxudmFyIGNyZWF0ZVdhcm5Ub29NYW55Q2xhc3NlcyA9IChmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgdmFyIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgdmFyIHdhcm5pbmdTZWVuID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAoIXdhcm5pbmdTZWVuKSB7XG4gICAgICBnZW5lcmF0ZWRDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGdlbmVyYXRlZENsYXNzZXMpLmxlbmd0aCA+PSBMSU1JVCkge1xuICAgICAgICAvLyBVbmFibGUgdG8gZmluZCBsYXRlc3RSdWxlIGluIHRlc3QgZW52aXJvbm1lbnQuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIHByZWZlci10ZW1wbGF0ZSAqL1xuICAgICAgICBjb25zb2xlLndhcm4oJ092ZXIgJyArIExJTUlUICsgJyBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgJyArIGRpc3BsYXlOYW1lICsgJy4gXFxuJyArICdDb25zaWRlciB1c2luZyB0aGUgYXR0cnMgbWV0aG9kLCB0b2dldGhlciB3aXRoIGEgc3R5bGUgb2JqZWN0IGZvciBmcmVxdWVudGx5IGNoYW5nZWQgc3R5bGVzLlxcbicgKyAnRXhhbXBsZTpcXG4nICsgJyAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyh7XFxuJyArICcgICAgc3R5bGU6ICh7IGJhY2tncm91bmQgfSkgPT4gKHtcXG4nICsgJyAgICAgIGJhY2tncm91bmQsXFxuJyArICcgICAgfSksXFxuJyArICcgIH0pYHdpZHRoOiAxMDAlO2BcXG5cXG4nICsgJyAgPENvbXBvbmVudCAvPicpO1xuICAgICAgICB3YXJuaW5nU2VlbiA9IHRydWU7XG4gICAgICAgIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuLy8gXG5cbnZhciBkZXRlcm1pbmVUaGVtZSA9IChmdW5jdGlvbiAocHJvcHMsIGZhbGxiYWNrVGhlbWUpIHtcbiAgdmFyIGRlZmF1bHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogRU1QVFlfT0JKRUNUO1xuXG4gIC8vIFByb3BzIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBUaGVtZVByb3ZpZGVyLCB3aGljaCBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXJcbiAgLy8gZGVmYXVsdFByb3BzLCBidXQgUmVhY3QgYXV0b21hdGljYWxseSBwdXRzIGRlZmF1bHRQcm9wcyBvbiBwcm9wcy5cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzLCBmbG93dHlwZS1lcnJvcnMvc2hvdy1lcnJvcnMgKi9cbiAgdmFyIGlzRGVmYXVsdFRoZW1lID0gZGVmYXVsdFByb3BzID8gcHJvcHMudGhlbWUgPT09IGRlZmF1bHRQcm9wcy50aGVtZSA6IGZhbHNlO1xuICB2YXIgdGhlbWUgPSBwcm9wcy50aGVtZSAmJiAhaXNEZWZhdWx0VGhlbWUgPyBwcm9wcy50aGVtZSA6IGZhbGxiYWNrVGhlbWUgfHwgZGVmYXVsdFByb3BzLnRoZW1lO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgcmV0dXJuIHRoZW1lO1xufSk7XG5cbi8vIFxudmFyIGVzY2FwZVJlZ2V4ID0gL1tbXFxdLiMqJD48K349fF46KCksXCInYC1dKy9nO1xudmFyIGRhc2hlc0F0RW5kcyA9IC8oXi18LSQpL2c7XG5cbi8qKlxuICogVE9ETzogRXhwbG9yZSB1c2luZyBDU1MuZXNjYXBlIHdoZW4gaXQgYmVjb21lcyBtb3JlIGF2YWlsYWJsZVxuICogaW4gZXZlcmdyZWVuIGJyb3dzZXJzLlxuICovXG5mdW5jdGlvbiBlc2NhcGUoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgLy8gUmVwbGFjZSBhbGwgcG9zc2libGUgQ1NTIHNlbGVjdG9yc1xuICAucmVwbGFjZShlc2NhcGVSZWdleCwgJy0nKVxuXG4gIC8vIFJlbW92ZSBleHRyYW5lb3VzIGh5cGhlbnMgYXQgdGhlIHN0YXJ0IGFuZCBlbmRcbiAgLnJlcGxhY2UoZGFzaGVzQXRFbmRzLCAnJyk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBpc1RhZyh0YXJnZXQpIHtcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gdGFyZ2V0LmNoYXJBdCgwKSA9PT0gdGFyZ2V0LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpIDogdHJ1ZSk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXlOYW1lKHRhcmdldCkge1xuICAvLyAkRmxvd0ZpeE1lXG4gIHJldHVybiBpc1RhZyh0YXJnZXQpID8gJ3N0eWxlZC4nICsgdGFyZ2V0IDogJ1N0eWxlZCgnICsgZ2V0Q29tcG9uZW50TmFtZSh0YXJnZXQpICsgJyknO1xufVxuXG52YXIgX1RZUEVfU1RBVElDUztcblxudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgVFlQRV9TVEFUSUNTID0gKF9UWVBFX1NUQVRJQ1MgPSB7fSwgX1RZUEVfU1RBVElDU1tGb3J3YXJkUmVmXSA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZVxufSwgX1RZUEVfU1RBVElDUyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSQxID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICBfT2JqZWN0JGdldE93blByb3BlcnQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIGdldE93blByb3BlcnR5U3ltYm9scyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW107XG59IDogX09iamVjdCRnZXRPd25Qcm9wZXJ0LFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBhcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gYXJyYXlQcm90b3R5cGUuY29uY2F0KGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KSxcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBUWVBFX1NUQVRJQ1NbdGFyZ2V0Q29tcG9uZW50LiQkdHlwZW9mXSB8fCBSRUFDVF9TVEFUSUNTO1xuXG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBUWVBFX1NUQVRJQ1Nbc291cmNlQ29tcG9uZW50LiQkdHlwZW9mXSB8fCBSRUFDVF9TVEFUSUNTO1xuXG4gICAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHZvaWQgMDtcbiAgICB2YXIga2V5ID0gdm9pZCAwO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKFxuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiZcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5JDEodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qIGZhaWwgc2lsZW50bHkgKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc0Rlcml2ZWRSZWFjdENvbXBvbmVudChmbikge1xuICByZXR1cm4gISEoZm4gJiYgZm4ucHJvdG90eXBlICYmIGZuLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuLy8gXG4vLyBIZWxwZXIgdG8gY2FsbCBhIGdpdmVuIGZ1bmN0aW9uLCBvbmx5IG9uY2VcbnZhciBvbmNlID0gKGZ1bmN0aW9uIChjYikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGNiLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59KTtcblxuLy8gXG5cbnZhciBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbnZhciBUaGVtZUNvbnN1bWVyID0gVGhlbWVDb250ZXh0LkNvbnN1bWVyO1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0aGVtZSB0byBhbiBlbnRpcmUgcmVhY3QgY29tcG9uZW50IHRyZWUgdmlhIGNvbnRleHRcbiAqL1xuXG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFRoZW1lUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZVByb3ZpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5nZXRDb250ZXh0ID0gbWVtb2l6ZShfdGhpcy5nZXRDb250ZXh0LmJpbmQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW5kZXJJbm5lciA9IF90aGlzLnJlbmRlcklubmVyLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZUNvbnRleHQuQ29uc3VtZXIsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5yZW5kZXJJbm5lclxuICAgICk7XG4gIH07XG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUucmVuZGVySW5uZXIgPSBmdW5jdGlvbiByZW5kZXJJbm5lcihvdXRlclRoZW1lKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQodGhpcy5wcm9wcy50aGVtZSwgb3V0ZXJUaGVtZSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRoZW1lQ29udGV4dC5Qcm92aWRlcixcbiAgICAgIHsgdmFsdWU6IGNvbnRleHQgfSxcbiAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRoZW1lIGZyb20gdGhlIHByb3BzLCBzdXBwb3J0aW5nIGJvdGggKG91dGVyVGhlbWUpID0+IHt9XG4gICAqIGFzIHdlbGwgYXMgb2JqZWN0IG5vdGF0aW9uXG4gICAqL1xuXG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuZ2V0VGhlbWUgPSBmdW5jdGlvbiBnZXRUaGVtZSh0aGVtZSwgb3V0ZXJUaGVtZSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoZW1lKSkge1xuICAgICAgdmFyIG1lcmdlZFRoZW1lID0gdGhlbWUob3V0ZXJUaGVtZSk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KG1lcmdlZFRoZW1lKSB8fCAodHlwZW9mIG1lcmdlZFRoZW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtZXJnZWRUaGVtZSkpICE9PSAnb2JqZWN0JykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig3KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICAgIH1cblxuICAgIGlmICh0aGVtZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHRoZW1lKSB8fCAodHlwZW9mIHRoZW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGVtZSkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFN0eWxlZENvbXBvbmVudHNFcnJvcig4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbiAgfTtcblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q29udGV4dCh0aGVtZSwgb3V0ZXJUaGVtZSkge1xuICAgIHJldHVybiB0aGlzLmdldFRoZW1lKHRoZW1lLCBvdXRlclRoZW1lKTtcbiAgfTtcblxuICByZXR1cm4gVGhlbWVQcm92aWRlcjtcbn0oQ29tcG9uZW50KTtcblxuLy8gXG5cbnZhciBDTE9TSU5HX1RBR19SID0gL15cXHMqPFxcL1thLXpdL2k7XG5cbnZhciBTZXJ2ZXJTdHlsZVNoZWV0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJTdHlsZVNoZWV0KCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlclN0eWxlU2hlZXQpO1xuXG4gICAgLyogVGhlIG1hc3RlciBzaGVldCBtaWdodCBiZSByZXNldCwgc28ga2VlcCBhIHJlZmVyZW5jZSBoZXJlICovXG4gICAgdGhpcy5tYXN0ZXJTaGVldCA9IFN0eWxlU2hlZXQubWFzdGVyO1xuICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLm1hc3RlclNoZWV0LmNsb25lKCk7XG4gICAgdGhpcy5zZWFsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIHRoZSBTZXJ2ZXJTdHlsZVNoZWV0IGFzIGJlaW5nIGZ1bGx5IGVtaXR0ZWQgYW5kIG1hbnVhbGx5IEdDIGl0IGZyb20gdGhlXG4gICAqIFN0eWxlU2hlZXQgc2luZ2xldG9uLlxuICAgKi9cblxuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLnNlYWwgPSBmdW5jdGlvbiBzZWFsKCkge1xuICAgIGlmICghdGhpcy5zZWFsZWQpIHtcbiAgICAgIC8qIFJlbW92ZSBzZWFsZWQgU3R5bGVTaGVldHMgZnJvbSB0aGUgbWFzdGVyIHNoZWV0ICovXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLm1hc3RlclNoZWV0LmNsb25lcy5pbmRleE9mKHRoaXMuaW5zdGFuY2UpO1xuICAgICAgdGhpcy5tYXN0ZXJTaGVldC5jbG9uZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2VhbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuY29sbGVjdFN0eWxlcyA9IGZ1bmN0aW9uIGNvbGxlY3RTdHlsZXMoY2hpbGRyZW4pIHtcbiAgICBpZiAodGhpcy5zZWFsZWQpIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBTdHlsZVNoZWV0TWFuYWdlcixcbiAgICAgIHsgc2hlZXQ6IHRoaXMuaW5zdGFuY2UgfSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5nZXRTdHlsZVRhZ3MgPSBmdW5jdGlvbiBnZXRTdHlsZVRhZ3MoKSB7XG4gICAgdGhpcy5zZWFsKCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UudG9IVE1MKCk7XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuZ2V0U3R5bGVFbGVtZW50ID0gZnVuY3Rpb24gZ2V0U3R5bGVFbGVtZW50KCkge1xuICAgIHRoaXMuc2VhbCgpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnRvUmVhY3RFbGVtZW50cygpO1xuICB9O1xuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLmludGVybGVhdmVXaXRoTm9kZVN0cmVhbSA9IGZ1bmN0aW9uIGludGVybGVhdmVXaXRoTm9kZVN0cmVhbShyZWFkYWJsZVN0cmVhbSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB7XG4gICAgICB0aHJvdyBuZXcgU3R5bGVkQ29tcG9uZW50c0Vycm9yKDMpO1xuICAgIH1cblxuICAgIC8qIHRoZSB0YWcgaW5kZXgga2VlcHMgdHJhY2sgb2Ygd2hpY2ggdGFncyBoYXZlIGFscmVhZHkgYmVlbiBlbWl0dGVkICovXG4gICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZTtcblxuICAgIHZhciBpbnN0YW5jZVRhZ0luZGV4ID0gMDtcblxuICAgIHZhciBzdHJlYW1BdHRyID0gU0NfU1RSRUFNX0FUVFIgKyAnPVwidHJ1ZVwiJztcblxuICAgIHZhciB0cmFuc2Zvcm1lciA9IG5ldyBzdHJlYW0uVHJhbnNmb3JtKHtcbiAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gYXBwZW5kU3R5bGVDaHVua3MoY2h1bmssIC8qIGVuY29kaW5nICovXywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHRhZ3MgPSBpbnN0YW5jZS50YWdzO1xuXG4gICAgICAgIHZhciBodG1sID0gJyc7XG5cbiAgICAgICAgLyogcmV0cmlldmUgaHRtbCBmb3IgZWFjaCBuZXcgc3R5bGUgdGFnICovXG4gICAgICAgIGZvciAoOyBpbnN0YW5jZVRhZ0luZGV4IDwgdGFncy5sZW5ndGg7IGluc3RhbmNlVGFnSW5kZXggKz0gMSkge1xuICAgICAgICAgIHZhciB0YWcgPSB0YWdzW2luc3RhbmNlVGFnSW5kZXhdO1xuICAgICAgICAgIGh0bWwgKz0gdGFnLnRvSFRNTChzdHJlYW1BdHRyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGZvcmNlIG91ciBTdHlsZVNoZWV0cyB0byBlbWl0IGVudGlyZWx5IG5ldyB0YWdzICovXG4gICAgICAgIGluc3RhbmNlLnNlYWxBbGxUYWdzKCk7XG5cbiAgICAgICAgdmFyIHJlbmRlcmVkSHRtbCA9IGNodW5rLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgLyogcHJlcGVuZCBzdHlsZSBodG1sIHRvIGNodW5rLCB1bmxlc3MgdGhlIHN0YXJ0IG9mIHRoZSBjaHVuayBpcyBhIGNsb3NpbmcgdGFnIGluIHdoaWNoIGNhc2UgYXBwZW5kIHJpZ2h0IGFmdGVyIHRoYXQgKi9cbiAgICAgICAgaWYgKENMT1NJTkdfVEFHX1IudGVzdChyZW5kZXJlZEh0bWwpKSB7XG4gICAgICAgICAgdmFyIGVuZE9mQ2xvc2luZ1RhZyA9IHJlbmRlcmVkSHRtbC5pbmRleE9mKCc+Jyk7XG5cbiAgICAgICAgICB0aGlzLnB1c2gocmVuZGVyZWRIdG1sLnNsaWNlKDAsIGVuZE9mQ2xvc2luZ1RhZyArIDEpICsgaHRtbCArIHJlbmRlcmVkSHRtbC5zbGljZShlbmRPZkNsb3NpbmdUYWcgKyAxKSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLnB1c2goaHRtbCArIHJlbmRlcmVkSHRtbCk7XG5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlYWRhYmxlU3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc2VhbCgpO1xuICAgIH0pO1xuXG4gICAgcmVhZGFibGVTdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgX3RoaXMuc2VhbCgpO1xuXG4gICAgICAvLyBmb3J3YXJkIHRoZSBlcnJvciB0byB0aGUgdHJhbnNmb3JtIHN0cmVhbVxuICAgICAgdHJhbnNmb3JtZXIuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlYWRhYmxlU3RyZWFtLnBpcGUodHJhbnNmb3JtZXIpO1xuICB9O1xuXG4gIHJldHVybiBTZXJ2ZXJTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxudmFyIFN0eWxlU2hlZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xudmFyIFN0eWxlU2hlZXRDb25zdW1lciA9IFN0eWxlU2hlZXRDb250ZXh0LkNvbnN1bWVyO1xuXG52YXIgU3R5bGVTaGVldE1hbmFnZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhTdHlsZVNoZWV0TWFuYWdlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3R5bGVTaGVldE1hbmFnZXIocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0TWFuYWdlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuZ2V0Q29udGV4dCA9IG1lbW9pemUoX3RoaXMuZ2V0Q29udGV4dCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3R5bGVTaGVldE1hbmFnZXIucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiBnZXRDb250ZXh0KHNoZWV0LCB0YXJnZXQpIHtcbiAgICBpZiAoc2hlZXQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCkge1xuICAgICAgcmV0dXJuIG5ldyBTdHlsZVNoZWV0KHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTdHlsZWRDb21wb25lbnRzRXJyb3IoNCk7XG4gICAgfVxuICB9O1xuXG4gIFN0eWxlU2hlZXRNYW5hZ2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBzaGVldCA9IF9wcm9wcy5zaGVldCxcbiAgICAgICAgdGFyZ2V0ID0gX3Byb3BzLnRhcmdldDtcblxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBTdHlsZVNoZWV0Q29udGV4dC5Qcm92aWRlcixcbiAgICAgIHsgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dChzaGVldCwgdGFyZ2V0KSB9LFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pIDogY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0TWFuYWdlcjtcbn0oQ29tcG9uZW50KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFN0eWxlU2hlZXRNYW5hZ2VyLnByb3BUeXBlcyA9IHtcbiAgc2hlZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5pbnN0YW5jZU9mKFN0eWxlU2hlZXQpLCBQcm9wVHlwZXMuaW5zdGFuY2VPZihTZXJ2ZXJTdHlsZVNoZWV0KV0pLFxuXG4gIHRhcmdldDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlbmRDaGlsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9KVxufSA6IHZvaWQgMDtcblxuLy8gXG5cbnZhciBpZGVudGlmaWVycyA9IHt9O1xuXG4vKiBXZSBkZXBlbmQgb24gY29tcG9uZW50cyBoYXZpbmcgdW5pcXVlIElEcyAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVJZChfQ29tcG9uZW50U3R5bGUsIF9kaXNwbGF5TmFtZSwgcGFyZW50Q29tcG9uZW50SWQpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIF9kaXNwbGF5TmFtZSAhPT0gJ3N0cmluZycgPyAnc2MnIDogZXNjYXBlKF9kaXNwbGF5TmFtZSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZW5zdXJlcyB1bmlxdWVuZXNzIGlmIHR3byBjb21wb25lbnRzIGhhcHBlbiB0byBzaGFyZVxuICAgKiB0aGUgc2FtZSBkaXNwbGF5TmFtZS5cbiAgICovXG4gIHZhciBuciA9IChpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gfHwgMCkgKyAxO1xuICBpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gPSBucjtcblxuICB2YXIgY29tcG9uZW50SWQgPSBkaXNwbGF5TmFtZSArICctJyArIF9Db21wb25lbnRTdHlsZS5nZW5lcmF0ZU5hbWUoZGlzcGxheU5hbWUgKyBucik7XG5cbiAgcmV0dXJuIHBhcmVudENvbXBvbmVudElkID8gcGFyZW50Q29tcG9uZW50SWQgKyAnLScgKyBjb21wb25lbnRJZCA6IGNvbXBvbmVudElkO1xufVxuXG4vLyAkRmxvd0ZpeE1lXG5cbnZhciBTdHlsZWRDb21wb25lbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhTdHlsZWRDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZWRDb21wb25lbnQpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuYXR0cnMgPSB7fTtcblxuICAgIF90aGlzLnJlbmRlck91dGVyID0gX3RoaXMucmVuZGVyT3V0ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMucmVuZGVySW5uZXIgPSBfdGhpcy5yZW5kZXJJbm5lci5iaW5kKF90aGlzKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfdGhpcy53YXJuSW5uZXJSZWYgPSBvbmNlKGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgXCJpbm5lclJlZlwiIEFQSSBoYXMgYmVlbiByZW1vdmVkIGluIHN0eWxlZC1jb21wb25lbnRzIHY0IGluIGZhdm9yIG9mIFJlYWN0IDE2IHJlZiBmb3J3YXJkaW5nLCB1c2UgXCJyZWZcIiBpbnN0ZWFkIGxpa2UgYSB0eXBpY2FsIGNvbXBvbmVudC4gXCJpbm5lclJlZlwiIHdhcyBkZXRlY3RlZCBvbiBjb21wb25lbnQgXCInICsgZGlzcGxheU5hbWUgKyAnXCIuJylcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy53YXJuQXR0cnNGbk9iamVjdEtleURlcHJlY2F0ZWQgPSBvbmNlKGZ1bmN0aW9uIChrZXksIGRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Z1bmN0aW9ucyBhcyBvYmplY3QtZm9ybSBhdHRycyh7fSkga2V5cyBhcmUgbm93IGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIHN0eWxlZC1jb21wb25lbnRzLiBTd2l0Y2ggdG8gdGhlIG5ldyBhdHRycyhwcm9wcyA9PiAoe30pKSBzeW50YXggaW5zdGVhZCBmb3IgZWFzaWVyIGFuZCBtb3JlIHBvd2VyZnVsIGNvbXBvc2l0aW9uLiBUaGUgYXR0cnMga2V5IGluIHF1ZXN0aW9uIGlzIFwiJyArIGtleSArICdcIiBvbiBjb21wb25lbnQgXCInICsgZGlzcGxheU5hbWUgKyAnXCIuJywgJ1xcbiAnICsgbmV3IEVycm9yKCkuc3RhY2spXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMud2Fybk5vblN0eWxlZENvbXBvbmVudEF0dHJzT2JqZWN0S2V5ID0gb25jZShmdW5jdGlvbiAoa2V5LCBkaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdJdCBsb29rcyBsaWtlIHlvdVxcJ3ZlIHVzZWQgYSBub24gc3R5bGVkLWNvbXBvbmVudCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBcIicgKyBrZXkgKyAnXCIgcHJvcCBpbiBhbiBvYmplY3QtZm9ybSBhdHRycyBjb25zdHJ1Y3RvciBvZiBcIicgKyBkaXNwbGF5TmFtZSArICdcIi5cXG4nICsgJ1lvdSBzaG91bGQgdXNlIHRoZSBuZXcgZnVuY3Rpb24tZm9ybSBhdHRycyBjb25zdHJ1Y3RvciB3aGljaCBhdm9pZHMgdGhpcyBpc3N1ZTogYXR0cnMocHJvcHMgPT4gKHsgeW91clN0dWZmIH0pKVxcbicgKyBcIlRvIGNvbnRpbnVlIHVzaW5nIHRoZSBkZXByZWNhdGVkIG9iamVjdCBzeW50YXgsIHlvdSdsbCBuZWVkIHRvIHdyYXAgeW91ciBjb21wb25lbnQgcHJvcCBpbiBhIGZ1bmN0aW9uIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGluc2lkZSB0aGUgc3R5bGVkIGNvbXBvbmVudCAoeW91J2xsIHN0aWxsIGdldCB0aGUgZGVwcmVjYXRpb24gd2FybmluZyB0aG91Z2guKVxcblwiICsgKCdGb3IgZXhhbXBsZSwgeyAnICsga2V5ICsgJzogKCkgPT4gSW5uZXJDb21wb25lbnQgfSBpbnN0ZWFkIG9mIHsgJyArIGtleSArICc6IElubmVyQ29tcG9uZW50IH0nKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFN0eWxlU2hlZXRDb25zdW1lcixcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLnJlbmRlck91dGVyXG4gICAgKTtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlck91dGVyID0gZnVuY3Rpb24gcmVuZGVyT3V0ZXIoKSB7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFN0eWxlU2hlZXQubWFzdGVyO1xuXG4gICAgdGhpcy5zdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcblxuICAgIC8vIE5vIG5lZWQgdG8gc3Vic2NyaWJlIGEgc3RhdGljIGNvbXBvbmVudCB0byB0aGVtZSBjaGFuZ2VzLCBpdCB3b24ndCBjaGFuZ2UgYW55dGhpbmdcbiAgICBpZiAodGhpcy5wcm9wcy5mb3J3YXJkZWRDb21wb25lbnQuY29tcG9uZW50U3R5bGUuaXNTdGF0aWMpIHJldHVybiB0aGlzLnJlbmRlcklubmVyKCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRoZW1lQ29uc3VtZXIsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5yZW5kZXJJbm5lclxuICAgICk7XG4gIH07XG5cbiAgU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJJbm5lciA9IGZ1bmN0aW9uIHJlbmRlcklubmVyKHRoZW1lKSB7XG4gICAgdmFyIF9wcm9wcyRmb3J3YXJkZWRDb21wbyA9IHRoaXMucHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LFxuICAgICAgICBjb21wb25lbnRTdHlsZSA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5jb21wb25lbnRTdHlsZSxcbiAgICAgICAgZGVmYXVsdFByb3BzID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgZGlzcGxheU5hbWUgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8uZGlzcGxheU5hbWUsXG4gICAgICAgIGZvbGRlZENvbXBvbmVudElkcyA9IF9wcm9wcyRmb3J3YXJkZWRDb21wby5mb2xkZWRDb21wb25lbnRJZHMsXG4gICAgICAgIHN0eWxlZENvbXBvbmVudElkID0gX3Byb3BzJGZvcndhcmRlZENvbXBvLnN0eWxlZENvbXBvbmVudElkLFxuICAgICAgICB0YXJnZXQgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8udGFyZ2V0O1xuXG5cbiAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdm9pZCAwO1xuICAgIGlmIChjb21wb25lbnRTdHlsZS5pc1N0YXRpYykge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFTVBUWV9PQkpFQ1QsIHRoaXMucHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5lcmF0ZWRDbGFzc05hbWUgPSB0aGlzLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGRldGVybWluZVRoZW1lKHRoaXMucHJvcHMsIHRoZW1lLCBkZWZhdWx0UHJvcHMpIHx8IEVNUFRZX09CSkVDVCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRUb0JlQ3JlYXRlZCA9IHRoaXMucHJvcHMuYXMgfHwgdGhpcy5hdHRycy5hcyB8fCB0YXJnZXQ7XG4gICAgdmFyIGlzVGFyZ2V0VGFnID0gaXNUYWcoZWxlbWVudFRvQmVDcmVhdGVkKTtcblxuICAgIHZhciBwcm9wc0ZvckVsZW1lbnQgPSB7fTtcbiAgICB2YXIgY29tcHV0ZWRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmF0dHJzLCB0aGlzLnByb3BzKTtcblxuICAgIHZhciBrZXkgPSB2b2lkIDA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoa2V5IGluIGNvbXB1dGVkUHJvcHMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSA9PT0gJ2lubmVyUmVmJyAmJiBpc1RhcmdldFRhZykge1xuICAgICAgICB0aGlzLndhcm5Jbm5lclJlZihkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdmb3J3YXJkZWRDb21wb25lbnQnIHx8IGtleSA9PT0gJ2FzJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZm9yd2FyZGVkUmVmJykgcHJvcHNGb3JFbGVtZW50LnJlZiA9IGNvbXB1dGVkUHJvcHNba2V5XTtlbHNlIGlmIChrZXkgPT09ICdmb3J3YXJkZWRBcycpIHByb3BzRm9yRWxlbWVudC5hcyA9IGNvbXB1dGVkUHJvcHNba2V5XTtlbHNlIGlmICghaXNUYXJnZXRUYWcgfHwgdmFsaWRBdHRyKGtleSkpIHtcbiAgICAgICAgLy8gRG9uJ3QgcGFzcyB0aHJvdWdoIG5vbiBIVE1MIHRhZ3MgdGhyb3VnaCB0byBIVE1MIGVsZW1lbnRzXG4gICAgICAgIHByb3BzRm9yRWxlbWVudFtrZXldID0gY29tcHV0ZWRQcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnN0eWxlICYmIHRoaXMuYXR0cnMuc3R5bGUpIHtcbiAgICAgIHByb3BzRm9yRWxlbWVudC5zdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLmF0dHJzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKTtcbiAgICB9XG5cbiAgICBwcm9wc0ZvckVsZW1lbnQuY2xhc3NOYW1lID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChmb2xkZWRDb21wb25lbnRJZHMsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCBzdHlsZWRDb21wb25lbnRJZCwgdGhpcy5hdHRycy5jbGFzc05hbWUsIGdlbmVyYXRlZENsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUb0JlQ3JlYXRlZCwgcHJvcHNGb3JFbGVtZW50KTtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCA9IGZ1bmN0aW9uIGJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMsIGF0dHJzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBwcm9wcywgeyB0aGVtZTogdGhlbWUgfSk7XG5cbiAgICBpZiAoIWF0dHJzLmxlbmd0aCkgcmV0dXJuIGNvbnRleHQ7XG5cbiAgICB0aGlzLmF0dHJzID0ge307XG5cbiAgICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyRGVmKSB7XG4gICAgICB2YXIgcmVzb2x2ZWRBdHRyRGVmID0gYXR0ckRlZjtcbiAgICAgIHZhciBhdHRyRGVmV2FzRm4gPSBmYWxzZTtcbiAgICAgIHZhciBhdHRyID0gdm9pZCAwO1xuICAgICAgdmFyIGtleSA9IHZvaWQgMDtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24ocmVzb2x2ZWRBdHRyRGVmKSkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHJlc29sdmVkQXR0ckRlZiA9IHJlc29sdmVkQXR0ckRlZihjb250ZXh0KTtcbiAgICAgICAgYXR0ckRlZldhc0ZuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBmb3IgKGtleSBpbiByZXNvbHZlZEF0dHJEZWYpIHtcbiAgICAgICAgYXR0ciA9IHJlc29sdmVkQXR0ckRlZltrZXldO1xuXG4gICAgICAgIGlmICghYXR0ckRlZldhc0ZuKSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24oYXR0cikgJiYgIWlzRGVyaXZlZFJlYWN0Q29tcG9uZW50KGF0dHIpICYmICFpc1N0eWxlZENvbXBvbmVudChhdHRyKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLndhcm5BdHRyc0ZuT2JqZWN0S2V5RGVwcmVjYXRlZChrZXksIHByb3BzLmZvcndhcmRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHIgPSBhdHRyKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChhdHRyKSkge1xuICAgICAgICAgICAgICBfdGhpczIud2Fybk5vblN0eWxlZENvbXBvbmVudEF0dHJzT2JqZWN0S2V5KGtleSwgcHJvcHMuZm9yd2FyZGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuYXR0cnNba2V5XSA9IGF0dHI7XG4gICAgICAgIGNvbnRleHRba2V5XSA9IGF0dHI7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfTtcblxuICBTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzID0gZnVuY3Rpb24gZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModGhlbWUsIHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRmb3J3YXJkZWRDb21wbzIgPSBwcm9wcy5mb3J3YXJkZWRDb21wb25lbnQsXG4gICAgICAgIGF0dHJzID0gX3Byb3BzJGZvcndhcmRlZENvbXBvMi5hdHRycyxcbiAgICAgICAgY29tcG9uZW50U3R5bGUgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8yLmNvbXBvbmVudFN0eWxlLFxuICAgICAgICB3YXJuVG9vTWFueUNsYXNzZXMgPSBfcHJvcHMkZm9yd2FyZGVkQ29tcG8yLndhcm5Ub29NYW55Q2xhc3NlcztcblxuICAgIC8vIHN0YXRpY2FsbHkgc3R5bGVkLWNvbXBvbmVudHMgZG9uJ3QgbmVlZCB0byBidWlsZCBhbiBleGVjdXRpb24gY29udGV4dCBvYmplY3QsXG4gICAgLy8gYW5kIHNob3VsZG4ndCBiZSBpbmNyZWFzaW5nIHRoZSBudW1iZXIgb2YgY2xhc3MgbmFtZXNcblxuICAgIGlmIChjb21wb25lbnRTdHlsZS5pc1N0YXRpYyAmJiAhYXR0cnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50U3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRU1QVFlfT0JKRUNULCB0aGlzLnN0eWxlU2hlZXQpO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWUgPSBjb21wb25lbnRTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGlzLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMsIGF0dHJzKSwgdGhpcy5zdHlsZVNoZWV0KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5Ub29NYW55Q2xhc3Nlcykgd2FyblRvb01hbnlDbGFzc2VzKGNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZWRDb21wb25lbnQ7XG59KENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YXJnZXQsIG9wdGlvbnMsIHJ1bGVzKSB7XG4gIHZhciBpc1RhcmdldFN0eWxlZENvbXAgPSBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpO1xuICB2YXIgaXNDbGFzcyA9ICFpc1RhZyh0YXJnZXQpO1xuXG4gIHZhciBfb3B0aW9ucyRkaXNwbGF5TmFtZSA9IG9wdGlvbnMuZGlzcGxheU5hbWUsXG4gICAgICBkaXNwbGF5TmFtZSA9IF9vcHRpb25zJGRpc3BsYXlOYW1lID09PSB1bmRlZmluZWQgPyBnZW5lcmF0ZURpc3BsYXlOYW1lKHRhcmdldCkgOiBfb3B0aW9ucyRkaXNwbGF5TmFtZSxcbiAgICAgIF9vcHRpb25zJGNvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgIGNvbXBvbmVudElkID0gX29wdGlvbnMkY29tcG9uZW50SWQgPT09IHVuZGVmaW5lZCA/IGdlbmVyYXRlSWQoQ29tcG9uZW50U3R5bGUsIG9wdGlvbnMuZGlzcGxheU5hbWUsIG9wdGlvbnMucGFyZW50Q29tcG9uZW50SWQpIDogX29wdGlvbnMkY29tcG9uZW50SWQsXG4gICAgICBfb3B0aW9ucyRQYXJlbnRDb21wb24gPSBvcHRpb25zLlBhcmVudENvbXBvbmVudCxcbiAgICAgIFBhcmVudENvbXBvbmVudCA9IF9vcHRpb25zJFBhcmVudENvbXBvbiA9PT0gdW5kZWZpbmVkID8gU3R5bGVkQ29tcG9uZW50IDogX29wdGlvbnMkUGFyZW50Q29tcG9uLFxuICAgICAgX29wdGlvbnMkYXR0cnMgPSBvcHRpb25zLmF0dHJzLFxuICAgICAgYXR0cnMgPSBfb3B0aW9ucyRhdHRycyA9PT0gdW5kZWZpbmVkID8gRU1QVFlfQVJSQVkgOiBfb3B0aW9ucyRhdHRycztcblxuXG4gIHZhciBzdHlsZWRDb21wb25lbnRJZCA9IG9wdGlvbnMuZGlzcGxheU5hbWUgJiYgb3B0aW9ucy5jb21wb25lbnRJZCA/IGVzY2FwZShvcHRpb25zLmRpc3BsYXlOYW1lKSArICctJyArIG9wdGlvbnMuY29tcG9uZW50SWQgOiBvcHRpb25zLmNvbXBvbmVudElkIHx8IGNvbXBvbmVudElkO1xuXG4gIC8vIGZvbGQgdGhlIHVuZGVybHlpbmcgU3R5bGVkQ29tcG9uZW50IGF0dHJzIHVwIChpbXBsaWNpdCBleHRlbmQpXG4gIHZhciBmaW5hbEF0dHJzID1cbiAgLy8gJEZsb3dGaXhNZVxuICBpc1RhcmdldFN0eWxlZENvbXAgJiYgdGFyZ2V0LmF0dHJzID8gQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbikgOiBhdHRycztcblxuICB2YXIgY29tcG9uZW50U3R5bGUgPSBuZXcgQ29tcG9uZW50U3R5bGUoaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgcnVsZXMgdXAgKGltcGxpY2l0IGV4dGVuZClcbiAgLy8gJEZsb3dGaXhNZVxuICB0YXJnZXQuY29tcG9uZW50U3R5bGUucnVsZXMuY29uY2F0KHJ1bGVzKSA6IHJ1bGVzLCBmaW5hbEF0dHJzLCBzdHlsZWRDb21wb25lbnRJZCk7XG5cbiAgLyoqXG4gICAqIGZvcndhcmRSZWYgY3JlYXRlcyBhIG5ldyBpbnRlcmltIGNvbXBvbmVudCwgd2hpY2ggd2UnbGwgdGFrZSBhZHZhbnRhZ2Ugb2ZcbiAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcgUGFyZW50Q29tcG9uZW50IHRvIGNyZWF0ZSBfYW5vdGhlcl8gaW50ZXJpbSBjbGFzc1xuICAgKi9cbiAgdmFyIFdyYXBwZWRTdHlsZWRDb21wb25lbnQgPSB2b2lkIDA7XG4gIHZhciBmb3J3YXJkUmVmID0gZnVuY3Rpb24gZm9yd2FyZFJlZihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFyZW50Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgZm9yd2FyZGVkQ29tcG9uZW50OiBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCBmb3J3YXJkZWRSZWY6IHJlZiB9KSk7XG4gIH07XG4gIGZvcndhcmRSZWYuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoZm9yd2FyZFJlZik7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuYXR0cnMgPSBmaW5hbEF0dHJzO1xuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuY29tcG9uZW50U3R5bGUgPSBjb21wb25lbnRTdHlsZTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZm9sZGVkQ29tcG9uZW50SWRzID0gaXNUYXJnZXRTdHlsZWRDb21wID8gLy8gJEZsb3dGaXhNZVxuICBBcnJheS5wcm90b3R5cGUuY29uY2F0KHRhcmdldC5mb2xkZWRDb21wb25lbnRJZHMsIHRhcmdldC5zdHlsZWRDb21wb25lbnRJZCkgOiBFTVBUWV9BUlJBWTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQgPSBzdHlsZWRDb21wb25lbnRJZDtcblxuICAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCB0YXJnZXQgdXAgc2luY2Ugd2UgZm9sZGVkIHRoZSBzdHlsZXNcbiAgLy8gJEZsb3dGaXhNZVxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnRhcmdldCA9IGlzVGFyZ2V0U3R5bGVkQ29tcCA/IHRhcmdldC50YXJnZXQgOiB0YXJnZXQ7XG5cbiAgLy8gJEZsb3dGaXhNZVxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LndpdGhDb21wb25lbnQgPSBmdW5jdGlvbiB3aXRoQ29tcG9uZW50KHRhZykge1xuICAgIHZhciBwcmV2aW91c0NvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgb3B0aW9uc1RvQ29weSA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFsnY29tcG9uZW50SWQnXSk7XG5cblxuICAgIHZhciBuZXdDb21wb25lbnRJZCA9IHByZXZpb3VzQ29tcG9uZW50SWQgJiYgcHJldmlvdXNDb21wb25lbnRJZCArICctJyArIChpc1RhZyh0YWcpID8gdGFnIDogZXNjYXBlKGdldENvbXBvbmVudE5hbWUodGFnKSkpO1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9uc1RvQ29weSwge1xuICAgICAgYXR0cnM6IGZpbmFsQXR0cnMsXG4gICAgICBjb21wb25lbnRJZDogbmV3Q29tcG9uZW50SWQsXG4gICAgICBQYXJlbnRDb21wb25lbnQ6IFBhcmVudENvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YWcsIG5ld09wdGlvbnMsIHJ1bGVzKTtcbiAgfTtcblxuICAvLyAkRmxvd0ZpeE1lXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCAnZGVmYXVsdFByb3BzJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKG9iaikge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzID0gaXNUYXJnZXRTdHlsZWRDb21wID8gbWVyZ2UodGFyZ2V0LmRlZmF1bHRQcm9wcywgb2JqKSA6IG9iajtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIFdyYXBwZWRTdHlsZWRDb21wb25lbnQud2FyblRvb01hbnlDbGFzc2VzID0gY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzKGRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy4nICsgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZDtcbiAgfTtcblxuICBpZiAoaXNDbGFzcykge1xuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdyYXBwZWRTdHlsZWRDb21wb25lbnQsIHRhcmdldCwge1xuICAgICAgLy8gYWxsIFNDLXNwZWNpZmljIHRoaW5ncyBzaG91bGQgbm90IGJlIGhvaXN0ZWRcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50U3R5bGU6IHRydWUsXG4gICAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICAgIGZvbGRlZENvbXBvbmVudElkczogdHJ1ZSxcbiAgICAgIHN0eWxlZENvbXBvbmVudElkOiB0cnVlLFxuICAgICAgdGFyZ2V0OiB0cnVlLFxuICAgICAgd2l0aENvbXBvbmVudDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFdyYXBwZWRTdHlsZWRDb21wb25lbnQ7XG59XG5cbi8vIFxuLy8gVGhhbmtzIHRvIFJlYWN0RE9NRmFjdG9yaWVzIGZvciB0aGlzIGhhbmR5IGxpc3QhXG5cbnZhciBkb21FbGVtZW50cyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJyxcblxuLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcblxuLy8gXG5cbnZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQodGFnKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjcmVhdGVTdHlsZWRDb21wb25lbnQsIHRhZyk7XG59O1xuXG4vLyBTaG9ydGhhbmRzIGZvciBhbGwgdmFsaWQgSFRNTCBFbGVtZW50c1xuZG9tRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZG9tRWxlbWVudCkge1xuICBzdHlsZWRbZG9tRWxlbWVudF0gPSBzdHlsZWQoZG9tRWxlbWVudCk7XG59KTtcblxuLy8gXG5cbnZhciBHbG9iYWxTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsU3R5bGUocnVsZXMsIGNvbXBvbmVudElkKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xvYmFsU3R5bGUpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICB0aGlzLmlzU3RhdGljID0gaXNTdGF0aWNSdWxlcyhydWxlcywgRU1QVFlfQVJSQVkpO1xuXG4gICAgaWYgKCFTdHlsZVNoZWV0Lm1hc3Rlci5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIFN0eWxlU2hlZXQubWFzdGVyLmRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgR2xvYmFsU3R5bGUucHJvdG90eXBlLmNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KSB7XG4gICAgdmFyIGZsYXRDU1MgPSBmbGF0dGVuKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICAgIHZhciBjc3MgPSBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnJyk7XG5cbiAgICBzdHlsZVNoZWV0LmluamVjdCh0aGlzLmNvbXBvbmVudElkLCBjc3MpO1xuICB9O1xuXG4gIEdsb2JhbFN0eWxlLnByb3RvdHlwZS5yZW1vdmVTdHlsZXMgPSBmdW5jdGlvbiByZW1vdmVTdHlsZXMoc3R5bGVTaGVldCkge1xuICAgIHZhciBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQ7XG5cbiAgICBpZiAoc3R5bGVTaGVldC5oYXNJZChjb21wb25lbnRJZCkpIHtcbiAgICAgIHN0eWxlU2hlZXQucmVtb3ZlKGNvbXBvbmVudElkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzogb3ZlcndyaXRlIGluLXBsYWNlIGluc3RlYWQgb2YgcmVtb3ZlK2NyZWF0ZT9cblxuXG4gIEdsb2JhbFN0eWxlLnByb3RvdHlwZS5yZW5kZXJTdHlsZXMgPSBmdW5jdGlvbiByZW5kZXJTdHlsZXMoZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCkge1xuICAgIHRoaXMucmVtb3ZlU3R5bGVzKHN0eWxlU2hlZXQpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxTdHlsZTtcbn0oKTtcblxuLy8gXG5cbi8vIHBsYWNlIG91ciBjYWNoZSBpbnRvIHNoYXJlZCBjb250ZXh0IHNvIGl0J2xsIHBlcnNpc3QgYmV0d2VlbiBITVJzXG5pZiAoSVNfQlJPV1NFUikge1xuICB3aW5kb3cuc2NDR1NITVJDYWNoZSA9IHt9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHbG9iYWxTdHlsZShzdHJpbmdzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcnVsZXMgPSBjc3MuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gIHZhciBpZCA9ICdzYy1nbG9iYWwtJyArIG11cm11cmhhc2goSlNPTi5zdHJpbmdpZnkocnVsZXMpKTtcbiAgdmFyIHN0eWxlID0gbmV3IEdsb2JhbFN0eWxlKHJ1bGVzLCBpZCk7XG5cbiAgdmFyIEdsb2JhbFN0eWxlQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBpbmhlcml0cyhHbG9iYWxTdHlsZUNvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBHbG9iYWxTdHlsZUNvbXBvbmVudChwcm9wcykge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xvYmFsU3R5bGVDb21wb25lbnQpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICB2YXIgX3RoaXMkY29uc3RydWN0b3IgPSBfdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBnbG9iYWxTdHlsZSA9IF90aGlzJGNvbnN0cnVjdG9yLmdsb2JhbFN0eWxlLFxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudElkID0gX3RoaXMkY29uc3RydWN0b3Iuc3R5bGVkQ29tcG9uZW50SWQ7XG5cblxuICAgICAgaWYgKElTX0JST1dTRVIpIHtcbiAgICAgICAgd2luZG93LnNjQ0dTSE1SQ2FjaGVbc3R5bGVkQ29tcG9uZW50SWRdID0gKHdpbmRvdy5zY0NHU0hNUkNhY2hlW3N0eWxlZENvbXBvbmVudElkXSB8fCAwKSArIDE7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBmaXhlcyBITVIgY29tcGF0aWJpbGl0eS4gRG9uJ3QgYXNrIG1lIHdoeSwgYnV0IHRoaXMgY29tYmluYXRpb24gb2ZcbiAgICAgICAqIGNhY2hpbmcgdGhlIGNsb3N1cmUgdmFyaWFibGVzIHZpYSBzdGF0aWNzIGFuZCB0aGVuIHBlcnNpc3RpbmcgdGhlIHN0YXRpY3MgaW5cbiAgICAgICAqIHN0YXRlIHdvcmtzIGFjcm9zcyBITVIgd2hlcmUgbm8gb3RoZXIgY29tYmluYXRpb24gZGlkLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgICovXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgZ2xvYmFsU3R5bGU6IGdsb2JhbFN0eWxlLFxuICAgICAgICBzdHlsZWRDb21wb25lbnRJZDogc3R5bGVkQ29tcG9uZW50SWRcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgR2xvYmFsU3R5bGVDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAod2luZG93LnNjQ0dTSE1SQ2FjaGVbdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZF0pIHtcbiAgICAgICAgd2luZG93LnNjQ0dTSE1SQ2FjaGVbdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZF0gLT0gMTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogRGVwZW5kaW5nIG9uIHRoZSBvcmRlciBcInJlbmRlclwiIGlzIGNhbGxlZCB0aGlzIGNhbiBjYXVzZSB0aGUgc3R5bGVzIHRvIGJlIGxvc3RcbiAgICAgICAqIHVudGlsIHRoZSBuZXh0IHJlbmRlciBwYXNzIG9mIHRoZSByZW1haW5pbmcgaW5zdGFuY2UsIHdoaWNoIG1heVxuICAgICAgICogbm90IGJlIGltbWVkaWF0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHdpbmRvdy5zY0NHU0hNUkNhY2hlW3RoaXMuc3RhdGUuc3R5bGVkQ29tcG9uZW50SWRdID09PSAwKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZ2xvYmFsU3R5bGUucmVtb3ZlU3R5bGVzKHRoaXMuc3R5bGVTaGVldCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEdsb2JhbFN0eWxlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZ2xvYmFsIHN0eWxlIGNvbXBvbmVudCAnICsgdGhpcy5zdGF0ZS5zdHlsZWRDb21wb25lbnRJZCArICcgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgU3R5bGVTaGVldENvbnN1bWVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBmdW5jdGlvbiAoc3R5bGVTaGVldCkge1xuICAgICAgICAgIF90aGlzMi5zdHlsZVNoZWV0ID0gc3R5bGVTaGVldCB8fCBTdHlsZVNoZWV0Lm1hc3RlcjtcblxuICAgICAgICAgIHZhciBnbG9iYWxTdHlsZSA9IF90aGlzMi5zdGF0ZS5nbG9iYWxTdHlsZTtcblxuXG4gICAgICAgICAgaWYgKGdsb2JhbFN0eWxlLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBnbG9iYWxTdHlsZS5yZW5kZXJTdHlsZXMoU1RBVElDX0VYRUNVVElPTl9DT05URVhULCBfdGhpczIuc3R5bGVTaGVldCk7XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgVGhlbWVDb25zdW1lcixcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSBfdGhpczIuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBfdGhpczIucHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGVtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQudGhlbWUgPSBkZXRlcm1pbmVUaGVtZShfdGhpczIucHJvcHMsIHRoZW1lLCBkZWZhdWx0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdsb2JhbFN0eWxlLnJlbmRlclN0eWxlcyhjb250ZXh0LCBfdGhpczIuc3R5bGVTaGVldCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBHbG9iYWxTdHlsZUNvbXBvbmVudDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIEdsb2JhbFN0eWxlQ29tcG9uZW50Lmdsb2JhbFN0eWxlID0gc3R5bGU7XG4gIEdsb2JhbFN0eWxlQ29tcG9uZW50LnN0eWxlZENvbXBvbmVudElkID0gaWQ7XG5cblxuICByZXR1cm4gR2xvYmFsU3R5bGVDb21wb25lbnQ7XG59XG5cbi8vIFxuXG52YXIgcmVwbGFjZVdoaXRlc3BhY2UgPSBmdW5jdGlvbiByZXBsYWNlV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHN8XFxcXG4vZywgJycpO1xufTtcblxuZnVuY3Rpb24ga2V5ZnJhbWVzKHN0cmluZ3MpIHtcbiAgLyogV2FybmluZyBpZiB5b3UndmUgdXNlZCBrZXlmcmFtZXMgb24gUmVhY3QgTmF0aXZlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oJ2BrZXlmcmFtZXNgIGNhbm5vdCBiZSB1c2VkIG9uIFJlYWN0TmF0aXZlLCBvbmx5IG9uIHRoZSB3ZWIuIFRvIGRvIGFuaW1hdGlvbiBpbiBSZWFjdE5hdGl2ZSBwbGVhc2UgdXNlIEFuaW1hdGVkLicpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBydWxlcyA9IGNzcy5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKTtcblxuICB2YXIgbmFtZSA9IGdlbmVyYXRlQWxwaGFiZXRpY05hbWUobXVybXVyaGFzaChyZXBsYWNlV2hpdGVzcGFjZShKU09OLnN0cmluZ2lmeShydWxlcykpKSk7XG5cbiAgcmV0dXJuIG5ldyBLZXlmcmFtZXMobmFtZSwgc3RyaW5naWZ5UnVsZXMocnVsZXMsIG5hbWUsICdAa2V5ZnJhbWVzJykpO1xufVxuXG4vLyBcblxudmFyIHdpdGhUaGVtZSA9IChmdW5jdGlvbiAoQ29tcG9uZW50JCQxKSB7XG4gIHZhciBXaXRoVGhlbWUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUaGVtZUNvbnN1bWVyLFxuICAgICAgbnVsbCxcbiAgICAgIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSBDb21wb25lbnQkJDEuZGVmYXVsdFByb3BzO1xuXG4gICAgICAgIHZhciB0aGVtZVByb3AgPSBkZXRlcm1pbmVUaGVtZShwcm9wcywgdGhlbWUsIGRlZmF1bHRQcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhlbWVQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInICsgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQkJDEpICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQkJDEsIF9leHRlbmRzKHt9LCBwcm9wcywgeyB0aGVtZTogdGhlbWVQcm9wLCByZWY6IHJlZiB9KSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG5cbiAgaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aFRoZW1lLCBDb21wb25lbnQkJDEpO1xuXG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9ICdXaXRoVGhlbWUoJyArIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50JCQxKSArICcpJztcblxuICByZXR1cm4gV2l0aFRoZW1lO1xufSk7XG5cbi8vIFxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9fRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9IQVVOVEVEX0JZX1NQT09LWV9HSE9TVFMgPSB7XG4gIFN0eWxlU2hlZXQ6IFN0eWxlU2hlZXRcbn07XG5cbi8vIFxuXG4vKiBXYXJuaW5nIGlmIHlvdSd2ZSBpbXBvcnRlZCB0aGlzIGZpbGUgb24gUmVhY3QgTmF0aXZlICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5cIiArIFwiUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuXCIgKyAnUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZScpO1xufVxuXG4vKiBXYXJuaW5nIGlmIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiBzdHlsZWQtY29tcG9uZW50cyAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdOb2RlLmpzJykgPT09IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignanNkb20nKSA9PT0gLTEpIHtcbiAgd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddID0gd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddIHx8IDA7XG5cbiAgaWYgKHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSA9PT0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB0aGVyZSBhcmUgc2V2ZXJhbCBpbnN0YW5jZXMgb2YgJ3N0eWxlZC1jb21wb25lbnRzJyBpbml0aWFsaXplZCBpbiB0aGlzIGFwcGxpY2F0aW9uLiBcIiArICdUaGlzIG1heSBjYXVzZSBkeW5hbWljIHN0eWxlcyBub3QgcmVuZGVyaW5nIHByb3Blcmx5LCBlcnJvcnMgaGFwcGVuaW5nIGR1cmluZyByZWh5ZHJhdGlvbiBwcm9jZXNzICcgKyAnYW5kIG1ha2VzIHlvdXIgYXBwbGljYXRpb24gYmlnZ2VyIHdpdGhvdXQgYSBnb29kIHJlYXNvbi5cXG5cXG4nICsgJ1NlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uJyk7XG4gIH1cblxuICB3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gKz0gMTtcbn1cblxuLy9cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkO1xuZXhwb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIGNzcywgaXNTdHlsZWRDb21wb25lbnQsIGtleWZyYW1lcywgU2VydmVyU3R5bGVTaGVldCwgU3R5bGVTaGVldENvbnN1bWVyLCBTdHlsZVNoZWV0Q29udGV4dCwgU3R5bGVTaGVldE1hbmFnZXIsIFRoZW1lQ29uc3VtZXIsIFRoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lLCBfX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfSEFVTlRFRF9CWV9TUE9PS1lfR0hPU1RTIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZUZ1bmN0aW9uLCBjcmVhdGVQYXJzZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB7IGdldCwgY3JlYXRlUGFyc2VyLCBjcmVhdGVTdHlsZUZ1bmN0aW9uLCBjb21wb3NlLCBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB7IG1hcmdpbiwgcGFkZGluZywgc3BhY2UgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zcGFjZSc7XG5leHBvcnQgeyBjb2xvciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmV4cG9ydCB7IGxheW91dCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2xheW91dCc7XG5leHBvcnQgeyB0eXBvZ3JhcGh5IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeSc7XG5leHBvcnQgeyBmbGV4Ym94IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZmxleGJveCc7XG5leHBvcnQgeyBib3JkZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuZXhwb3J0IHsgYmFja2dyb3VuZCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JhY2tncm91bmQnO1xuZXhwb3J0IHsgcG9zaXRpb24gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9wb3NpdGlvbic7XG5leHBvcnQgeyBncmlkIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZ3JpZCc7XG5leHBvcnQgeyBzaGFkb3cgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zaGFkb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3hTaGFkb3csIGRlZmF1bHQgYXMgdGV4dFNoYWRvdyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NoYWRvdyc7XG5leHBvcnQgeyB2YXJpYW50LCBidXR0b25TdHlsZSwgdGV4dFN0eWxlLCBjb2xvclN0eWxlIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdmFyaWFudCc7IC8vIHY0IGFwaSBzaGltc1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpZHRoLCBkZWZhdWx0IGFzIGhlaWdodCwgZGVmYXVsdCBhcyBtaW5XaWR0aCwgZGVmYXVsdCBhcyBtaW5IZWlnaHQsIGRlZmF1bHQgYXMgbWF4V2lkdGgsIGRlZmF1bHQgYXMgbWF4SGVpZ2h0LCBkZWZhdWx0IGFzIHNpemUsIGRlZmF1bHQgYXMgdmVydGljYWxBbGlnbiwgZGVmYXVsdCBhcyBkaXNwbGF5LCBkZWZhdWx0IGFzIG92ZXJmbG93IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vbGF5b3V0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3BhY2l0eSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9udFNpemUsIGRlZmF1bHQgYXMgZm9udEZhbWlseSwgZGVmYXVsdCBhcyBmb250V2VpZ2h0LCBkZWZhdWx0IGFzIGxpbmVIZWlnaHQsIGRlZmF1bHQgYXMgdGV4dEFsaWduLCBkZWZhdWx0IGFzIGZvbnRTdHlsZSwgZGVmYXVsdCBhcyBsZXR0ZXJTcGFjaW5nIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsaWduSXRlbXMsIGRlZmF1bHQgYXMgYWxpZ25Db250ZW50LCBkZWZhdWx0IGFzIGp1c3RpZnlJdGVtcywgZGVmYXVsdCBhcyBqdXN0aWZ5Q29udGVudCwgZGVmYXVsdCBhcyBmbGV4V3JhcCwgZGVmYXVsdCBhcyBmbGV4RGlyZWN0aW9uLCBkZWZhdWx0IGFzIGZsZXgsIGRlZmF1bHQgYXMgZmxleEdyb3csIGRlZmF1bHQgYXMgZmxleFNocmluaywgZGVmYXVsdCBhcyBmbGV4QmFzaXMsIGRlZmF1bHQgYXMganVzdGlmeVNlbGYsIGRlZmF1bHQgYXMgYWxpZ25TZWxmLCBkZWZhdWx0IGFzIG9yZGVyIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZmxleGJveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyaWRHYXAsIGRlZmF1bHQgYXMgZ3JpZENvbHVtbkdhcCwgZGVmYXVsdCBhcyBncmlkUm93R2FwLCBkZWZhdWx0IGFzIGdyaWRDb2x1bW4sIGRlZmF1bHQgYXMgZ3JpZFJvdywgZGVmYXVsdCBhcyBncmlkQXV0b0Zsb3csIGRlZmF1bHQgYXMgZ3JpZEF1dG9Db2x1bW5zLCBkZWZhdWx0IGFzIGdyaWRBdXRvUm93cywgZGVmYXVsdCBhcyBncmlkVGVtcGxhdGVDb2x1bW5zLCBkZWZhdWx0IGFzIGdyaWRUZW1wbGF0ZVJvd3MsIGRlZmF1bHQgYXMgZ3JpZFRlbXBsYXRlQXJlYXMsIGRlZmF1bHQgYXMgZ3JpZEFyZWEgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ncmlkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm9yZGVyV2lkdGgsIGRlZmF1bHQgYXMgYm9yZGVyU3R5bGUsIGRlZmF1bHQgYXMgYm9yZGVyQ29sb3IsIGRlZmF1bHQgYXMgYm9yZGVyVG9wLCBkZWZhdWx0IGFzIGJvcmRlclJpZ2h0LCBkZWZhdWx0IGFzIGJvcmRlckJvdHRvbSwgZGVmYXVsdCBhcyBib3JkZXJMZWZ0LCBkZWZhdWx0IGFzIGJvcmRlclJhZGl1cywgZGVmYXVsdCBhcyBib3JkZXJzIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYm9yZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmFja2dyb3VuZEltYWdlLCBkZWZhdWx0IGFzIGJhY2tncm91bmRTaXplLCBkZWZhdWx0IGFzIGJhY2tncm91bmRQb3NpdGlvbiwgZGVmYXVsdCBhcyBiYWNrZ3JvdW5kUmVwZWF0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHpJbmRleCwgZGVmYXVsdCBhcyB0b3AsIGRlZmF1bHQgYXMgcmlnaHQsIGRlZmF1bHQgYXMgYm90dG9tLCBkZWZhdWx0IGFzIGxlZnQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9wb3NpdGlvbic7IC8vIHY0IHN0eWxlIEFQSSBzaGltXG5cbmV4cG9ydCB2YXIgc3R5bGUgPSBmdW5jdGlvbiBzdHlsZShfcmVmKSB7XG4gIHZhciBwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgY3NzUHJvcGVydHkgPSBfcmVmLmNzc1Byb3BlcnR5LFxuICAgICAgYWxpYXMgPSBfcmVmLmFsaWFzLFxuICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICB0cmFuc2Zvcm1WYWx1ZSA9IF9yZWYudHJhbnNmb3JtVmFsdWUsXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBwcm9wZXJ0aWVzID0gX3JlZi5wcm9wZXJ0aWVzO1xuICB2YXIgY29uZmlnID0ge307XG4gIGNvbmZpZ1twcm9wXSA9IGNyZWF0ZVN0eWxlRnVuY3Rpb24oe1xuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG4gICAgcHJvcGVydHk6IGNzc1Byb3BlcnR5IHx8IHByb3AsXG4gICAgc2NhbGU6IGtleSxcbiAgICBkZWZhdWx0U2NhbGU6IHNjYWxlLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtVmFsdWVcbiAgfSk7XG4gIGlmIChhbGlhcykgY29uZmlnW2FsaWFzXSA9IGNvbmZpZ1twcm9wXTtcbiAgdmFyIHBhcnNlID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZTtcbn07XG4iLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gKG1vZHVsZVsnZXhwb3J0cyddID0gZmFjdG9yeSgpKSA6XG5cdFx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddID8gZGVmaW5lKGZhY3RvcnkoKSkgOlxuXHRcdFx0KHdpbmRvd1snc3R5bGlzUnVsZVNoZWV0J10gPSBmYWN0b3J5KCkpXG59KGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCdcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluc2VydFJ1bGUpIHtcblx0XHR2YXIgZGVsaW1pdGVyID0gJy8qfCovJ1xuXHRcdHZhciBuZWVkbGUgPSBkZWxpbWl0ZXIrJ30nXG5cblx0XHRmdW5jdGlvbiB0b1NoZWV0IChibG9jaykge1xuXHRcdFx0aWYgKGJsb2NrKVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGluc2VydFJ1bGUoYmxvY2sgKyAnfScpXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHJ1bGVTaGVldCAoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzLCBwYXJlbnRzLCBsaW5lLCBjb2x1bW4sIGxlbmd0aCwgbnMsIGRlcHRoLCBhdCkge1xuXHRcdFx0c3dpdGNoIChjb250ZXh0KSB7XG5cdFx0XHRcdC8vIHByb3BlcnR5XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHQvLyBAaW1wb3J0XG5cdFx0XHRcdFx0aWYgKGRlcHRoID09PSAwICYmIGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gNjQpXG5cdFx0XHRcdFx0XHRyZXR1cm4gaW5zZXJ0UnVsZShjb250ZW50Kyc7JyksICcnXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0Ly8gc2VsZWN0b3Jcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdGlmIChucyA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybiBjb250ZW50ICsgZGVsaW1pdGVyXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0Ly8gYXQtcnVsZVxuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0c3dpdGNoIChucykge1xuXHRcdFx0XHRcdFx0Ly8gQGZvbnQtZmFjZSwgQHBhZ2Vcblx0XHRcdFx0XHRcdGNhc2UgMTAyOlxuXHRcdFx0XHRcdFx0Y2FzZSAxMTI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnNlcnRSdWxlKHNlbGVjdG9yc1swXStjb250ZW50KSwgJydcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjb250ZW50ICsgKGF0ID09PSAwID8gZGVsaW1pdGVyIDogJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIC0yOlxuXHRcdFx0XHRcdGNvbnRlbnQuc3BsaXQobmVlZGxlKS5mb3JFYWNoKHRvU2hlZXQpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KSlcbiIsIiFmdW5jdGlvbihlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKG51bGwpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZShudWxsKSk6d2luZG93LnN0eWxpcz1lKG51bGwpfShmdW5jdGlvbiBlKGEpe1widXNlIHN0cmljdFwiO3ZhciByPS9eXFwwKy9nLGM9L1tcXDBcXHJcXGZdL2cscz0vOiAqL2csdD0vem9vfGdyYS8saT0vKFssOiBdKSh0cmFuc2Zvcm0pL2csZj0vLCtcXHMqKD8hW14oXSpbKV0pL2csbj0vICtcXHMqKD8hW14oXSpbKV0pL2csbD0vICpbXFwwXSAqL2csbz0vLFxccis/L2csaD0vKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyx1PS86Z2xvYmFsXFwoKCg/OlteXFwoXFwpXFxbXFxdXSp8XFxbLipcXF18XFwoW15cXChcXCldKlxcKSkqKVxcKS9nLGQ9L1xcVysvZyxiPS9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxwPS86OihwbGFjZSkvZyxrPS86KHJlYWQtb25seSkvZyxnPS9cXHMrKD89W3tcXF07PTo+XSkvZyxBPS8oW1t9PTo+XSlcXHMrL2csQz0vKFxce1tee10rPyk7KD89XFx9KS9nLHc9L1xcc3syLH0vZyx2PS8oW15cXChdKSg6KykgKi9nLG09L1tzdmhdXFx3Ky1bdGJscl17Mn0vLHg9L1xcKFxccyooLiopXFxzKlxcKS9nLCQ9LyhbXFxzXFxTXSo/KTsvZyx5PS8tc2VsZnxmbGV4LS9nLE89L1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLGo9L3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyx6PS8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sTj1cIi13ZWJraXQtXCIsUz1cIi1tb3otXCIsRj1cIi1tcy1cIixXPTU5LHE9MTI1LEI9MTIzLEQ9NDAsRT00MSxHPTkxLEg9OTMsST0xMCxKPTEzLEs9OSxMPTY0LE09MzIsUD0zOCxRPTQ1LFI9OTUsVD00MixVPTQ0LFY9NTgsWD0zOSxZPTM0LFo9NDcsXz02MixlZT00MyxhZT0xMjYscmU9MCxjZT0xMixzZT0xMSx0ZT0xMDcsaWU9MTA5LGZlPTExNSxuZT0xMTIsbGU9MTExLG9lPTEwNSxoZT05OSx1ZT0xMDAsZGU9MTEyLGJlPTEscGU9MSxrZT0wLGdlPTEsQWU9MSxDZT0xLHdlPTAsdmU9MCxtZT0wLHhlPVtdLCRlPVtdLHllPTAsT2U9bnVsbCxqZT0tMix6ZT0tMSxOZT0wLFNlPTEsRmU9MixXZT0zLHFlPTAsQmU9MSxEZT1cIlwiLEVlPVwiXCIsR2U9XCJcIjtmdW5jdGlvbiBIZShlLGEscyx0LGkpe2Zvcih2YXIgZixuLG89MCxoPTAsdT0wLGQ9MCxnPTAsQT0wLEM9MCx3PTAsbT0wLCQ9MCx5PTAsTz0wLGo9MCx6PTAsUj0wLHdlPTAsJGU9MCxPZT0wLGplPTAsemU9cy5sZW5ndGgsSmU9emUtMSxSZT1cIlwiLFRlPVwiXCIsVWU9XCJcIixWZT1cIlwiLFhlPVwiXCIsWWU9XCJcIjtSPHplOyl7aWYoQz1zLmNoYXJDb2RlQXQoUiksUj09PUplKWlmKGgrZCt1K28hPT0wKXtpZigwIT09aClDPWg9PT1aP0k6WjtkPXU9bz0wLHplKyssSmUrK31pZihoK2QrdStvPT09MCl7aWYoUj09PUplKXtpZih3ZT4wKVRlPVRlLnJlcGxhY2UoYyxcIlwiKTtpZihUZS50cmltKCkubGVuZ3RoPjApe3N3aXRjaChDKXtjYXNlIE06Y2FzZSBLOmNhc2UgVzpjYXNlIEo6Y2FzZSBJOmJyZWFrO2RlZmF1bHQ6VGUrPXMuY2hhckF0KFIpfUM9V319aWYoMT09PSRlKXN3aXRjaChDKXtjYXNlIEI6Y2FzZSBxOmNhc2UgVzpjYXNlIFk6Y2FzZSBYOmNhc2UgRDpjYXNlIEU6Y2FzZSBVOiRlPTA7Y2FzZSBLOmNhc2UgSjpjYXNlIEk6Y2FzZSBNOmJyZWFrO2RlZmF1bHQ6Zm9yKCRlPTAsamU9UixnPUMsUi0tLEM9VztqZTx6ZTspc3dpdGNoKHMuY2hhckNvZGVBdChqZSsrKSl7Y2FzZSBJOmNhc2UgSjpjYXNlIFc6KytSLEM9ZyxqZT16ZTticmVhaztjYXNlIFY6aWYod2U+MCkrK1IsQz1nO2Nhc2UgQjpqZT16ZX19c3dpdGNoKEMpe2Nhc2UgQjpmb3IoZz0oVGU9VGUudHJpbSgpKS5jaGFyQ29kZUF0KDApLHk9MSxqZT0rK1I7Ujx6ZTspe3N3aXRjaChDPXMuY2hhckNvZGVBdChSKSl7Y2FzZSBCOnkrKzticmVhaztjYXNlIHE6eS0tO2JyZWFrO2Nhc2UgWjpzd2l0Y2goQT1zLmNoYXJDb2RlQXQoUisxKSl7Y2FzZSBUOmNhc2UgWjpSPVFlKEEsUixKZSxzKX1icmVhaztjYXNlIEc6QysrO2Nhc2UgRDpDKys7Y2FzZSBZOmNhc2UgWDpmb3IoO1IrKzxKZSYmcy5jaGFyQ29kZUF0KFIpIT09QzspO31pZigwPT09eSlicmVhaztSKyt9aWYoVWU9cy5zdWJzdHJpbmcoamUsUiksZz09PXJlKWc9KFRlPVRlLnJlcGxhY2UocixcIlwiKS50cmltKCkpLmNoYXJDb2RlQXQoMCk7c3dpdGNoKGcpe2Nhc2UgTDppZih3ZT4wKVRlPVRlLnJlcGxhY2UoYyxcIlwiKTtzd2l0Y2goQT1UZS5jaGFyQ29kZUF0KDEpKXtjYXNlIHVlOmNhc2UgaWU6Y2FzZSBmZTpjYXNlIFE6Zj1hO2JyZWFrO2RlZmF1bHQ6Zj14ZX1pZihqZT0oVWU9SGUoYSxmLFVlLEEsaSsxKSkubGVuZ3RoLG1lPjAmJjA9PT1qZSlqZT1UZS5sZW5ndGg7aWYoeWU+MClpZihmPUllKHhlLFRlLE9lKSxuPVBlKFdlLFVlLGYsYSxwZSxiZSxqZSxBLGksdCksVGU9Zi5qb2luKFwiXCIpLHZvaWQgMCE9PW4paWYoMD09PShqZT0oVWU9bi50cmltKCkpLmxlbmd0aCkpQT0wLFVlPVwiXCI7aWYoamU+MClzd2l0Y2goQSl7Y2FzZSBmZTpUZT1UZS5yZXBsYWNlKHgsTWUpO2Nhc2UgdWU6Y2FzZSBpZTpjYXNlIFE6VWU9VGUrXCJ7XCIrVWUrXCJ9XCI7YnJlYWs7Y2FzZSB0ZTppZihVZT0oVGU9VGUucmVwbGFjZShiLFwiJDEgJDJcIisoQmU+MD9EZTpcIlwiKSkpK1wie1wiK1VlK1wifVwiLDE9PT1BZXx8Mj09PUFlJiZMZShcIkBcIitVZSwzKSlVZT1cIkBcIitOK1VlK1wiQFwiK1VlO2Vsc2UgVWU9XCJAXCIrVWU7YnJlYWs7ZGVmYXVsdDppZihVZT1UZStVZSx0PT09ZGUpVmUrPVVlLFVlPVwiXCJ9ZWxzZSBVZT1cIlwiO2JyZWFrO2RlZmF1bHQ6VWU9SGUoYSxJZShhLFRlLE9lKSxVZSx0LGkrMSl9WGUrPVVlLE89MCwkZT0wLHo9MCx3ZT0wLE9lPTAsaj0wLFRlPVwiXCIsVWU9XCJcIixDPXMuY2hhckNvZGVBdCgrK1IpO2JyZWFrO2Nhc2UgcTpjYXNlIFc6aWYoKGplPShUZT0od2U+MD9UZS5yZXBsYWNlKGMsXCJcIik6VGUpLnRyaW0oKSkubGVuZ3RoKT4xKXtpZigwPT09eilpZigoZz1UZS5jaGFyQ29kZUF0KDApKT09PVF8fGc+OTYmJmc8MTIzKWplPShUZT1UZS5yZXBsYWNlKFwiIFwiLFwiOlwiKSkubGVuZ3RoO2lmKHllPjApaWYodm9pZCAwIT09KG49UGUoU2UsVGUsYSxlLHBlLGJlLFZlLmxlbmd0aCx0LGksdCkpKWlmKDA9PT0oamU9KFRlPW4udHJpbSgpKS5sZW5ndGgpKVRlPVwiXFwwXFwwXCI7c3dpdGNoKGc9VGUuY2hhckNvZGVBdCgwKSxBPVRlLmNoYXJDb2RlQXQoMSksZyl7Y2FzZSByZTpicmVhaztjYXNlIEw6aWYoQT09PW9lfHxBPT09aGUpe1llKz1UZStzLmNoYXJBdChSKTticmVha31kZWZhdWx0OmlmKFRlLmNoYXJDb2RlQXQoamUtMSk9PT1WKWJyZWFrO1ZlKz1LZShUZSxnLEEsVGUuY2hhckNvZGVBdCgyKSl9fU89MCwkZT0wLHo9MCx3ZT0wLE9lPTAsVGU9XCJcIixDPXMuY2hhckNvZGVBdCgrK1IpfX1zd2l0Y2goQyl7Y2FzZSBKOmNhc2UgSTppZihoK2QrdStvK3ZlPT09MClzd2l0Y2goJCl7Y2FzZSBFOmNhc2UgWDpjYXNlIFk6Y2FzZSBMOmNhc2UgYWU6Y2FzZSBfOmNhc2UgVDpjYXNlIGVlOmNhc2UgWjpjYXNlIFE6Y2FzZSBWOmNhc2UgVTpjYXNlIFc6Y2FzZSBCOmNhc2UgcTpicmVhaztkZWZhdWx0OmlmKHo+MCkkZT0xfWlmKGg9PT1aKWg9MDtlbHNlIGlmKGdlK089PT0wJiZ0IT09dGUmJlRlLmxlbmd0aD4wKXdlPTEsVGUrPVwiXFwwXCI7aWYoeWUqcWU+MClQZShOZSxUZSxhLGUscGUsYmUsVmUubGVuZ3RoLHQsaSx0KTtiZT0xLHBlKys7YnJlYWs7Y2FzZSBXOmNhc2UgcTppZihoK2QrdStvPT09MCl7YmUrKzticmVha31kZWZhdWx0OnN3aXRjaChiZSsrLFJlPXMuY2hhckF0KFIpLEMpe2Nhc2UgSzpjYXNlIE06aWYoZCtvK2g9PT0wKXN3aXRjaCh3KXtjYXNlIFU6Y2FzZSBWOmNhc2UgSzpjYXNlIE06UmU9XCJcIjticmVhaztkZWZhdWx0OmlmKEMhPT1NKVJlPVwiIFwifWJyZWFrO2Nhc2UgcmU6UmU9XCJcXFxcMFwiO2JyZWFrO2Nhc2UgY2U6UmU9XCJcXFxcZlwiO2JyZWFrO2Nhc2Ugc2U6UmU9XCJcXFxcdlwiO2JyZWFrO2Nhc2UgUDppZihkK2grbz09PTAmJmdlPjApT2U9MSx3ZT0xLFJlPVwiXFxmXCIrUmU7YnJlYWs7Y2FzZSAxMDg6aWYoZCtoK28ra2U9PT0wJiZ6PjApc3dpdGNoKFIteil7Y2FzZSAyOmlmKHc9PT1uZSYmcy5jaGFyQ29kZUF0KFItMyk9PT1WKWtlPXc7Y2FzZSA4OmlmKG09PT1sZSlrZT1tfWJyZWFrO2Nhc2UgVjppZihkK2grbz09PTApej1SO2JyZWFrO2Nhc2UgVTppZihoK3UrZCtvPT09MCl3ZT0xLFJlKz1cIlxcclwiO2JyZWFrO2Nhc2UgWTpjYXNlIFg6aWYoMD09PWgpZD1kPT09Qz8wOjA9PT1kP0M6ZDticmVhaztjYXNlIEc6aWYoZCtoK3U9PT0wKW8rKzticmVhaztjYXNlIEg6aWYoZCtoK3U9PT0wKW8tLTticmVhaztjYXNlIEU6aWYoZCtoK289PT0wKXUtLTticmVhaztjYXNlIEQ6aWYoZCtoK289PT0wKXtpZigwPT09Tylzd2l0Y2goMip3KzMqbSl7Y2FzZSA1MzM6YnJlYWs7ZGVmYXVsdDp5PTAsTz0xfXUrK31icmVhaztjYXNlIEw6aWYoaCt1K2Qrbyt6K2o9PT0wKWo9MTticmVhaztjYXNlIFQ6Y2FzZSBaOmlmKGQrbyt1PjApYnJlYWs7c3dpdGNoKGgpe2Nhc2UgMDpzd2l0Y2goMipDKzMqcy5jaGFyQ29kZUF0KFIrMSkpe2Nhc2UgMjM1Omg9WjticmVhaztjYXNlIDIyMDpqZT1SLGg9VH1icmVhaztjYXNlIFQ6aWYoQz09PVomJnc9PT1UJiZqZSsyIT09Uil7aWYoMzM9PT1zLmNoYXJDb2RlQXQoamUrMikpVmUrPXMuc3Vic3RyaW5nKGplLFIrMSk7UmU9XCJcIixoPTB9fX1pZigwPT09aCl7aWYoZ2UrZCtvK2o9PT0wJiZ0IT09dGUmJkMhPT1XKXN3aXRjaChDKXtjYXNlIFU6Y2FzZSBhZTpjYXNlIF86Y2FzZSBlZTpjYXNlIEU6Y2FzZSBEOmlmKDA9PT1PKXtzd2l0Y2godyl7Y2FzZSBLOmNhc2UgTTpjYXNlIEk6Y2FzZSBKOlJlKz1cIlxcMFwiO2JyZWFrO2RlZmF1bHQ6UmU9XCJcXDBcIitSZSsoQz09PVU/XCJcIjpcIlxcMFwiKX13ZT0xfWVsc2Ugc3dpdGNoKEMpe2Nhc2UgRDppZih6Kzc9PT1SJiYxMDg9PT13KXo9MDtPPSsreTticmVhaztjYXNlIEU6aWYoMD09KE89LS15KSl3ZT0xLFJlKz1cIlxcMFwifWJyZWFrO2Nhc2UgSzpjYXNlIE06c3dpdGNoKHcpe2Nhc2UgcmU6Y2FzZSBCOmNhc2UgcTpjYXNlIFc6Y2FzZSBVOmNhc2UgY2U6Y2FzZSBLOmNhc2UgTTpjYXNlIEk6Y2FzZSBKOmJyZWFrO2RlZmF1bHQ6aWYoMD09PU8pd2U9MSxSZSs9XCJcXDBcIn19aWYoVGUrPVJlLEMhPT1NJiZDIT09SykkPUN9fW09dyx3PUMsUisrfWlmKGplPVZlLmxlbmd0aCxtZT4wKWlmKDA9PT1qZSYmMD09PVhlLmxlbmd0aCYmMD09PWFbMF0ubGVuZ3RoPT1mYWxzZSlpZih0IT09aWV8fDE9PT1hLmxlbmd0aCYmKGdlPjA/RWU6R2UpPT09YVswXSlqZT1hLmpvaW4oXCIsXCIpLmxlbmd0aCsyO2lmKGplPjApe2lmKGY9MD09PWdlJiZ0IT09dGU/ZnVuY3Rpb24oZSl7Zm9yKHZhciBhLHIscz0wLHQ9ZS5sZW5ndGgsaT1BcnJheSh0KTtzPHQ7KytzKXtmb3IodmFyIGY9ZVtzXS5zcGxpdChsKSxuPVwiXCIsbz0wLGg9MCx1PTAsZD0wLGI9Zi5sZW5ndGg7bzxiOysrbyl7aWYoMD09PShoPShyPWZbb10pLmxlbmd0aCkmJmI+MSljb250aW51ZTtpZih1PW4uY2hhckNvZGVBdChuLmxlbmd0aC0xKSxkPXIuY2hhckNvZGVBdCgwKSxhPVwiXCIsMCE9PW8pc3dpdGNoKHUpe2Nhc2UgVDpjYXNlIGFlOmNhc2UgXzpjYXNlIGVlOmNhc2UgTTpjYXNlIEQ6YnJlYWs7ZGVmYXVsdDphPVwiIFwifXN3aXRjaChkKXtjYXNlIFA6cj1hK0VlO2Nhc2UgYWU6Y2FzZSBfOmNhc2UgZWU6Y2FzZSBNOmNhc2UgRTpjYXNlIEQ6YnJlYWs7Y2FzZSBHOnI9YStyK0VlO2JyZWFrO2Nhc2UgVjpzd2l0Y2goMipyLmNoYXJDb2RlQXQoMSkrMypyLmNoYXJDb2RlQXQoMikpe2Nhc2UgNTMwOmlmKENlPjApe3I9YStyLnN1YnN0cmluZyg4LGgtMSk7YnJlYWt9ZGVmYXVsdDppZihvPDF8fGZbby0xXS5sZW5ndGg8MSlyPWErRWUrcn1icmVhaztjYXNlIFU6YT1cIlwiO2RlZmF1bHQ6aWYoaD4xJiZyLmluZGV4T2YoXCI6XCIpPjApcj1hK3IucmVwbGFjZSh2LFwiJDFcIitFZStcIiQyXCIpO2Vsc2Ugcj1hK3IrRWV9bis9cn1pW3NdPW4ucmVwbGFjZShjLFwiXCIpLnRyaW0oKX1yZXR1cm4gaX0oYSk6YSx5ZT4wKWlmKHZvaWQgMCE9PShuPVBlKEZlLFZlLGYsZSxwZSxiZSxqZSx0LGksdCkpJiYwPT09KFZlPW4pLmxlbmd0aClyZXR1cm4gWWUrVmUrWGU7aWYoVmU9Zi5qb2luKFwiLFwiKStcIntcIitWZStcIn1cIixBZSprZSE9MCl7aWYoMj09PUFlJiYhTGUoVmUsMikpa2U9MDtzd2l0Y2goa2Upe2Nhc2UgbGU6VmU9VmUucmVwbGFjZShrLFwiOlwiK1MrXCIkMVwiKStWZTticmVhaztjYXNlIG5lOlZlPVZlLnJlcGxhY2UocCxcIjo6XCIrTitcImlucHV0LSQxXCIpK1ZlLnJlcGxhY2UocCxcIjo6XCIrUytcIiQxXCIpK1ZlLnJlcGxhY2UocCxcIjpcIitGK1wiaW5wdXQtJDFcIikrVmV9a2U9MH19cmV0dXJuIFllK1ZlK1hlfWZ1bmN0aW9uIEllKGUsYSxyKXt2YXIgYz1hLnRyaW0oKS5zcGxpdChvKSxzPWMsdD1jLmxlbmd0aCxpPWUubGVuZ3RoO3N3aXRjaChpKXtjYXNlIDA6Y2FzZSAxOmZvcih2YXIgZj0wLG49MD09PWk/XCJcIjplWzBdK1wiIFwiO2Y8dDsrK2Ypc1tmXT1KZShuLHNbZl0scixpKS50cmltKCk7YnJlYWs7ZGVmYXVsdDpmPTA7dmFyIGw9MDtmb3Iocz1bXTtmPHQ7KytmKWZvcih2YXIgaD0wO2g8aTsrK2gpc1tsKytdPUplKGVbaF0rXCIgXCIsY1tmXSxyLGkpLnRyaW0oKX1yZXR1cm4gc31mdW5jdGlvbiBKZShlLGEscixjKXt2YXIgcz1hLHQ9cy5jaGFyQ29kZUF0KDApO2lmKHQ8MzMpdD0ocz1zLnRyaW0oKSkuY2hhckNvZGVBdCgwKTtzd2l0Y2godCl7Y2FzZSBQOnN3aXRjaChnZStjKXtjYXNlIDA6Y2FzZSAxOmlmKDA9PT1lLnRyaW0oKS5sZW5ndGgpYnJlYWs7ZGVmYXVsdDpyZXR1cm4gcy5yZXBsYWNlKGgsXCIkMVwiK2UudHJpbSgpKX1icmVhaztjYXNlIFY6c3dpdGNoKHMuY2hhckNvZGVBdCgxKSl7Y2FzZSAxMDM6aWYoQ2U+MCYmZ2U+MClyZXR1cm4gcy5yZXBsYWNlKHUsXCIkMVwiKS5yZXBsYWNlKGgsXCIkMVwiK0dlKTticmVhaztkZWZhdWx0OnJldHVybiBlLnRyaW0oKStzLnJlcGxhY2UoaCxcIiQxXCIrZS50cmltKCkpfWRlZmF1bHQ6aWYocipnZT4wJiZzLmluZGV4T2YoXCJcXGZcIik+MClyZXR1cm4gcy5yZXBsYWNlKGgsKGUuY2hhckNvZGVBdCgwKT09PVY/XCJcIjpcIiQxXCIpK2UudHJpbSgpKX1yZXR1cm4gZStzfWZ1bmN0aW9uIEtlKGUsYSxyLGMpe3ZhciBsLG89MCxoPWUrXCI7XCIsdT0yKmErMypyKzQqYztpZig5NDQ9PT11KXJldHVybiBmdW5jdGlvbihlKXt2YXIgYT1lLmxlbmd0aCxyPWUuaW5kZXhPZihcIjpcIiw5KSsxLGM9ZS5zdWJzdHJpbmcoMCxyKS50cmltKCkscz1lLnN1YnN0cmluZyhyLGEtMSkudHJpbSgpO3N3aXRjaChlLmNoYXJDb2RlQXQoOSkqQmUpe2Nhc2UgMDpicmVhaztjYXNlIFE6aWYoMTEwIT09ZS5jaGFyQ29kZUF0KDEwKSlicmVhaztkZWZhdWx0OmZvcih2YXIgdD1zLnNwbGl0KChzPVwiXCIsZikpLGk9MCxyPTAsYT10Lmxlbmd0aDtpPGE7cj0wLCsraSl7Zm9yKHZhciBsPXRbaV0sbz1sLnNwbGl0KG4pO2w9b1tyXTspe3ZhciBoPWwuY2hhckNvZGVBdCgwKTtpZigxPT09QmUmJihoPkwmJmg8OTB8fGg+OTYmJmg8MTIzfHxoPT09Unx8aD09PVEmJmwuY2hhckNvZGVBdCgxKSE9PVEpKXN3aXRjaChpc05hTihwYXJzZUZsb2F0KGwpKSsoLTEhPT1sLmluZGV4T2YoXCIoXCIpKSl7Y2FzZSAxOnN3aXRjaChsKXtjYXNlXCJpbmZpbml0ZVwiOmNhc2VcImFsdGVybmF0ZVwiOmNhc2VcImJhY2t3YXJkc1wiOmNhc2VcInJ1bm5pbmdcIjpjYXNlXCJub3JtYWxcIjpjYXNlXCJmb3J3YXJkc1wiOmNhc2VcImJvdGhcIjpjYXNlXCJub25lXCI6Y2FzZVwibGluZWFyXCI6Y2FzZVwiZWFzZVwiOmNhc2VcImVhc2UtaW5cIjpjYXNlXCJlYXNlLW91dFwiOmNhc2VcImVhc2UtaW4tb3V0XCI6Y2FzZVwicGF1c2VkXCI6Y2FzZVwicmV2ZXJzZVwiOmNhc2VcImFsdGVybmF0ZS1yZXZlcnNlXCI6Y2FzZVwiaW5oZXJpdFwiOmNhc2VcImluaXRpYWxcIjpjYXNlXCJ1bnNldFwiOmNhc2VcInN0ZXAtc3RhcnRcIjpjYXNlXCJzdGVwLWVuZFwiOmJyZWFrO2RlZmF1bHQ6bCs9RGV9fW9bcisrXT1sfXMrPSgwPT09aT9cIlwiOlwiLFwiKStvLmpvaW4oXCIgXCIpfX1pZihzPWMrcytcIjtcIiwxPT09QWV8fDI9PT1BZSYmTGUocywxKSlyZXR1cm4gTitzK3M7cmV0dXJuIHN9KGgpO2Vsc2UgaWYoMD09PUFlfHwyPT09QWUmJiFMZShoLDEpKXJldHVybiBoO3N3aXRjaCh1KXtjYXNlIDEwMTU6cmV0dXJuIDk3PT09aC5jaGFyQ29kZUF0KDEwKT9OK2graDpoO2Nhc2UgOTUxOnJldHVybiAxMTY9PT1oLmNoYXJDb2RlQXQoMyk/TitoK2g6aDtjYXNlIDk2MzpyZXR1cm4gMTEwPT09aC5jaGFyQ29kZUF0KDUpP04raCtoOmg7Y2FzZSAxMDA5OmlmKDEwMCE9PWguY2hhckNvZGVBdCg0KSlicmVhaztjYXNlIDk2OTpjYXNlIDk0MjpyZXR1cm4gTitoK2g7Y2FzZSA5Nzg6cmV0dXJuIE4raCtTK2graDtjYXNlIDEwMTk6Y2FzZSA5ODM6cmV0dXJuIE4raCtTK2grRitoK2g7Y2FzZSA4ODM6aWYoaC5jaGFyQ29kZUF0KDgpPT09USlyZXR1cm4gTitoK2g7aWYoaC5pbmRleE9mKFwiaW1hZ2Utc2V0KFwiLDExKT4wKXJldHVybiBoLnJlcGxhY2UoeixcIiQxXCIrTitcIiQyXCIpK2g7cmV0dXJuIGg7Y2FzZSA5MzI6aWYoaC5jaGFyQ29kZUF0KDQpPT09USlzd2l0Y2goaC5jaGFyQ29kZUF0KDUpKXtjYXNlIDEwMzpyZXR1cm4gTitcImJveC1cIitoLnJlcGxhY2UoXCItZ3Jvd1wiLFwiXCIpK04raCtGK2gucmVwbGFjZShcImdyb3dcIixcInBvc2l0aXZlXCIpK2g7Y2FzZSAxMTU6cmV0dXJuIE4raCtGK2gucmVwbGFjZShcInNocmlua1wiLFwibmVnYXRpdmVcIikraDtjYXNlIDk4OnJldHVybiBOK2grRitoLnJlcGxhY2UoXCJiYXNpc1wiLFwicHJlZmVycmVkLXNpemVcIikraH1yZXR1cm4gTitoK0YraCtoO2Nhc2UgOTY0OnJldHVybiBOK2grRitcImZsZXgtXCIraCtoO2Nhc2UgMTAyMzppZig5OSE9PWguY2hhckNvZGVBdCg4KSlicmVhaztyZXR1cm4gbD1oLnN1YnN0cmluZyhoLmluZGV4T2YoXCI6XCIsMTUpKS5yZXBsYWNlKFwiZmxleC1cIixcIlwiKS5yZXBsYWNlKFwic3BhY2UtYmV0d2VlblwiLFwianVzdGlmeVwiKSxOK1wiYm94LXBhY2tcIitsK04raCtGK1wiZmxleC1wYWNrXCIrbCtoO2Nhc2UgMTAwNTpyZXR1cm4gdC50ZXN0KGgpP2gucmVwbGFjZShzLFwiOlwiK04pK2gucmVwbGFjZShzLFwiOlwiK1MpK2g6aDtjYXNlIDFlMzpzd2l0Y2gobz0obD1oLnN1YnN0cmluZygxMykudHJpbSgpKS5pbmRleE9mKFwiLVwiKSsxLGwuY2hhckNvZGVBdCgwKStsLmNoYXJDb2RlQXQobykpe2Nhc2UgMjI2Omw9aC5yZXBsYWNlKG0sXCJ0YlwiKTticmVhaztjYXNlIDIzMjpsPWgucmVwbGFjZShtLFwidGItcmxcIik7YnJlYWs7Y2FzZSAyMjA6bD1oLnJlcGxhY2UobSxcImxyXCIpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGh9cmV0dXJuIE4raCtGK2wraDtjYXNlIDEwMTc6aWYoLTE9PT1oLmluZGV4T2YoXCJzdGlja3lcIiw5KSlyZXR1cm4gaDtjYXNlIDk3NTpzd2l0Y2gobz0oaD1lKS5sZW5ndGgtMTAsdT0obD0oMzM9PT1oLmNoYXJDb2RlQXQobyk/aC5zdWJzdHJpbmcoMCxvKTpoKS5zdWJzdHJpbmcoZS5pbmRleE9mKFwiOlwiLDcpKzEpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSsoMHxsLmNoYXJDb2RlQXQoNykpKXtjYXNlIDIwMzppZihsLmNoYXJDb2RlQXQoOCk8MTExKWJyZWFrO2Nhc2UgMTE1Omg9aC5yZXBsYWNlKGwsTitsKStcIjtcIitoO2JyZWFrO2Nhc2UgMjA3OmNhc2UgMTAyOmg9aC5yZXBsYWNlKGwsTisodT4xMDI/XCJpbmxpbmUtXCI6XCJcIikrXCJib3hcIikrXCI7XCIraC5yZXBsYWNlKGwsTitsKStcIjtcIitoLnJlcGxhY2UobCxGK2wrXCJib3hcIikrXCI7XCIraH1yZXR1cm4gaCtcIjtcIjtjYXNlIDkzODppZihoLmNoYXJDb2RlQXQoNSk9PT1RKXN3aXRjaChoLmNoYXJDb2RlQXQoNikpe2Nhc2UgMTA1OnJldHVybiBsPWgucmVwbGFjZShcIi1pdGVtc1wiLFwiXCIpLE4raCtOK1wiYm94LVwiK2wrRitcImZsZXgtXCIrbCtoO2Nhc2UgMTE1OnJldHVybiBOK2grRitcImZsZXgtaXRlbS1cIitoLnJlcGxhY2UoeSxcIlwiKStoO2RlZmF1bHQ6cmV0dXJuIE4raCtGK1wiZmxleC1saW5lLXBhY2tcIitoLnJlcGxhY2UoXCJhbGlnbi1jb250ZW50XCIsXCJcIikucmVwbGFjZSh5LFwiXCIpK2h9YnJlYWs7Y2FzZSA5NzM6Y2FzZSA5ODk6aWYoaC5jaGFyQ29kZUF0KDMpIT09UXx8MTIyPT09aC5jaGFyQ29kZUF0KDQpKWJyZWFrO2Nhc2UgOTMxOmNhc2UgOTUzOmlmKHRydWU9PT1qLnRlc3QoZSkpaWYoMTE1PT09KGw9ZS5zdWJzdHJpbmcoZS5pbmRleE9mKFwiOlwiKSsxKSkuY2hhckNvZGVBdCgwKSlyZXR1cm4gS2UoZS5yZXBsYWNlKFwic3RyZXRjaFwiLFwiZmlsbC1hdmFpbGFibGVcIiksYSxyLGMpLnJlcGxhY2UoXCI6ZmlsbC1hdmFpbGFibGVcIixcIjpzdHJldGNoXCIpO2Vsc2UgcmV0dXJuIGgucmVwbGFjZShsLE4rbCkraC5yZXBsYWNlKGwsUytsLnJlcGxhY2UoXCJmaWxsLVwiLFwiXCIpKStoO2JyZWFrO2Nhc2UgOTYyOmlmKGg9TitoKygxMDI9PT1oLmNoYXJDb2RlQXQoNSk/RitoOlwiXCIpK2gscitjPT09MjExJiYxMDU9PT1oLmNoYXJDb2RlQXQoMTMpJiZoLmluZGV4T2YoXCJ0cmFuc2Zvcm1cIiwxMCk+MClyZXR1cm4gaC5zdWJzdHJpbmcoMCxoLmluZGV4T2YoXCI7XCIsMjcpKzEpLnJlcGxhY2UoaSxcIiQxXCIrTitcIiQyXCIpK2h9cmV0dXJuIGh9ZnVuY3Rpb24gTGUoZSxhKXt2YXIgcj1lLmluZGV4T2YoMT09PWE/XCI6XCI6XCJ7XCIpLGM9ZS5zdWJzdHJpbmcoMCwzIT09YT9yOjEwKSxzPWUuc3Vic3RyaW5nKHIrMSxlLmxlbmd0aC0xKTtyZXR1cm4gT2UoMiE9PWE/YzpjLnJlcGxhY2UoTyxcIiQxXCIpLHMsYSl9ZnVuY3Rpb24gTWUoZSxhKXt2YXIgcj1LZShhLGEuY2hhckNvZGVBdCgwKSxhLmNoYXJDb2RlQXQoMSksYS5jaGFyQ29kZUF0KDIpKTtyZXR1cm4gciE9PWErXCI7XCI/ci5yZXBsYWNlKCQsXCIgb3IgKCQxKVwiKS5zdWJzdHJpbmcoNCk6XCIoXCIrYStcIilcIn1mdW5jdGlvbiBQZShlLGEscixjLHMsdCxpLGYsbixsKXtmb3IodmFyIG8saD0wLHU9YTtoPHllOysraClzd2l0Y2gobz0kZVtoXS5jYWxsKFRlLGUsdSxyLGMscyx0LGksZixuLGwpKXtjYXNlIHZvaWQgMDpjYXNlIGZhbHNlOmNhc2UgdHJ1ZTpjYXNlIG51bGw6YnJlYWs7ZGVmYXVsdDp1PW99aWYodSE9PWEpcmV0dXJuIHV9ZnVuY3Rpb24gUWUoZSxhLHIsYyl7Zm9yKHZhciBzPWErMTtzPHI7KytzKXN3aXRjaChjLmNoYXJDb2RlQXQocykpe2Nhc2UgWjppZihlPT09VClpZihjLmNoYXJDb2RlQXQocy0xKT09PVQmJmErMiE9PXMpcmV0dXJuIHMrMTticmVhaztjYXNlIEk6aWYoZT09PVopcmV0dXJuIHMrMX1yZXR1cm4gc31mdW5jdGlvbiBSZShlKXtmb3IodmFyIGEgaW4gZSl7dmFyIHI9ZVthXTtzd2l0Y2goYSl7Y2FzZVwia2V5ZnJhbWVcIjpCZT0wfHI7YnJlYWs7Y2FzZVwiZ2xvYmFsXCI6Q2U9MHxyO2JyZWFrO2Nhc2VcImNhc2NhZGVcIjpnZT0wfHI7YnJlYWs7Y2FzZVwiY29tcHJlc3NcIjp3ZT0wfHI7YnJlYWs7Y2FzZVwic2VtaWNvbG9uXCI6dmU9MHxyO2JyZWFrO2Nhc2VcInByZXNlcnZlXCI6bWU9MHxyO2JyZWFrO2Nhc2VcInByZWZpeFwiOmlmKE9lPW51bGwsIXIpQWU9MDtlbHNlIGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHIpQWU9MTtlbHNlIEFlPTIsT2U9cn19cmV0dXJuIFJlfWZ1bmN0aW9uIFRlKGEscil7aWYodm9pZCAwIT09dGhpcyYmdGhpcy5jb25zdHJ1Y3Rvcj09PVRlKXJldHVybiBlKGEpO3ZhciBzPWEsdD1zLmNoYXJDb2RlQXQoMCk7aWYodDwzMyl0PShzPXMudHJpbSgpKS5jaGFyQ29kZUF0KDApO2lmKEJlPjApRGU9cy5yZXBsYWNlKGQsdD09PUc/XCJcIjpcIi1cIik7aWYodD0xLDE9PT1nZSlHZT1zO2Vsc2UgRWU9czt2YXIgaSxmPVtHZV07aWYoeWU+MClpZih2b2lkIDAhPT0oaT1QZSh6ZSxyLGYsZixwZSxiZSwwLDAsMCwwKSkmJlwic3RyaW5nXCI9PXR5cGVvZiBpKXI9aTt2YXIgbj1IZSh4ZSxmLHIsMCwwKTtpZih5ZT4wKWlmKHZvaWQgMCE9PShpPVBlKGplLG4sZixmLHBlLGJlLG4ubGVuZ3RoLDAsMCwwKSkmJlwic3RyaW5nXCIhPXR5cGVvZihuPWkpKXQ9MDtyZXR1cm4gRGU9XCJcIixHZT1cIlwiLEVlPVwiXCIsa2U9MCxwZT0xLGJlPTEsd2UqdD09MD9uOm4ucmVwbGFjZShjLFwiXCIpLnJlcGxhY2UoZyxcIlwiKS5yZXBsYWNlKEEsXCIkMVwiKS5yZXBsYWNlKEMsXCIkMVwiKS5yZXBsYWNlKHcsXCIgXCIpfWlmKFRlLnVzZT1mdW5jdGlvbiBlKGEpe3N3aXRjaChhKXtjYXNlIHZvaWQgMDpjYXNlIG51bGw6eWU9JGUubGVuZ3RoPTA7YnJlYWs7ZGVmYXVsdDppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSRlW3llKytdPWE7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgYSlmb3IodmFyIHI9MCxjPWEubGVuZ3RoO3I8YzsrK3IpZShhW3JdKTtlbHNlIHFlPTB8ISFhfXJldHVybiBlfSxUZS5zZXQ9UmUsdm9pZCAwIT09YSlSZShhKTtyZXR1cm4gVGV9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxpcy5taW4uanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgU3R5bGVkIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyB0ZXh0LCB0eXBlLCBpc0ZsdWlkLCBpc1RyYW5zcGFyZW50LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IG1heFdpZHRoID0gaXNGbHVpZCA/ICcxMDAlJyA6ICdub25lJztcbiAgY29uc3Qgd2lkdGggPSBpc0ZsdWlkID8gJzEwMCUnIDogJ25vbmUnO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBpc1RyYW5zcGFyZW50ID8gJ3RyYW5zcGFyZW50JyA6IGAke2NvbG9ycy5ibHVlfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLkJ0blxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICB9fVxuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L1N0eWxlZC5CdG4+XG4gICk7XG59XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRmx1aWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ2J1dHRvbicsXG4gIGlzVHJhbnNwYXJlbnQ6IGZhbHNlLFxuICBpc0ZsdWlkOiBmYWxzZSxcbn07XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHsgU3R5bGVkIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG5cbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUsXG4gIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6dmFsaWQge1xuICAvLyBUT0RPOiBjb3VsZCBiZSByZW1vdmVkXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHJlZCAhaW1wb3J0YW50OyAgIFxuICB9XG4gIFxuICAke2NvbG9yfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogJHtjb2xvcnMud2hpdGV9O1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIGNvbnN0IHsgdHlwZSwgd2lkdGgsIGxhYmVsVGV4dCwgaWQsIG5hbWUsIGlzRmx1aWQsIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmx1ZTogY29sb3IsIHByaW1hcnk6IGJnQ29sb3IgfSA9IGNvbG9ycztcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuQ29udGFpbmVyXG4gICAgICB3aWR0aD17aXNGbHVpZCA/ICcxMDAlJyA6IHdpZHRofVxuICAgID5cbiAgICAgIDxTdHlsZWRMYWJlbFxuICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgID57bGFiZWxUZXh0fTwvU3R5bGVkTGFiZWw+XG4gICAgICA8U3R5bGVkSW5wdXRcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIGJnPXtiZ0NvbG9yfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgLz5cbiAgICA8L1N0eWxlZC5Db250YWluZXI+XG4gICk7XG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYWJlbFRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNGbHVpZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgdHlwZTogJ3RleHQnLFxuICB3aWR0aDogJzMyN3B4JyxcbiAgaXNGbHVpZDogZmFsc2UsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb2xvcnMnO1xuXG5jb25zdCBTd2l0Y2hDb250YWluZXIgPSBzdHlsZWQubGFiZWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFN3aXRjaGVyQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbmA7XG5cbmNvbnN0IENpcmNsZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTNweDtcbiAgd2lkdGg6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmlzRW5hYmxlZCA/IGNvbG9ycy5ibHVlIDogY29sb3JzLnNlY29uZGFyeTN9O1xuICAke3Byb3BzID0+IChwcm9wcy5pc0VuYWJsZWQgPyAncmlnaHQnIDogJ2xlZnQnKX06IDA7XG5gO1xuXG5jb25zdCBIaWRkZW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIFN3aXRjaChwcm9wcykge1xuICBkZWJ1Z2dlcjtcbiAgY29uc3QgW2lzRW5hYmxlZCwgc2V0RW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgaWQsIG9uQ2hhbmdlLCBzdGF0ZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoQ29udGFpbmVyPlxuICAgICAgPFN3aXRjaGVyQmFja2dyb3VuZCBodG1sRm9yPXtpZH0gLz5cbiAgICAgIDxDaXJjbGUgaXNFbmFibGVkPXtpc0VuYWJsZWR9IC8+XG4gICAgICA8SGlkZGVuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICAgICAgc2V0RW5hYmxlZChldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGlkZGVuPlxuICAgIDwvU3dpdGNoQ29udGFpbmVyPlxuICApO1xufVxuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0YXRlOiBQcm9wVHlwZXMuYm9vbFxufTtcblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiAnc3dpdGNoZXInLFxuICBzdGF0ZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgYmx1ZTogJyMxRjhFRkEnLFxuICBvcmFuZ2U6ICcjRkZBQjRGJyxcbiAgcmVkOiAnI0VFNDIzRCcsXG4gIGdyZWVuOiAnIzA1Qzk4NScsXG4gIHByaW1hcnk6ICcjMjQyRTQyJyxcbiAgZ3JleTogJyM5Nzk3OTcnLFxuICB3aGl0ZTogJyNGRkZGRkYnLFxuICBzZWNvbmRhcnk6ICcjMkYzQjUyJyxcbiAgc2Vjb25kYXJ5MjogJyMzRTRFNkMnLFxuICBzZWNvbmRhcnkzOiAnIzcwODg5RScsXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9udFNpemU6IDEyLFxufTtcbiIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5leHBvcnQge1xuICBjb2xvcnMsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBtYXhXaWR0aDogJzE0NDBweCdcbn07XG4iLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQvdGV4dCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vc3dpdGNoL3N3aXRjaCc7XG5cbmV4cG9ydCB7XG4gIFRleHQsXG4gIFN3aXRjaCxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBUZXh0LFxuICBTd2l0Y2gsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2NvbG9ycyc7XG5cbmNvbnN0IFN3aXRjaENvbnRhaW5lciA9IHN0eWxlZC5sYWJlbGBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3dpdGNoZXJCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuYDtcblxuY29uc3QgQ2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaXNFbmFibGVkID8gY29sb3JzLmJsdWUgOiBjb2xvcnMuc2Vjb25kYXJ5M307XG4gICR7cHJvcHMgPT4gKHByb3BzLmlzRW5hYmxlZCA/ICdyaWdodCcgOiAnbGVmdCcpfTogMDtcbmA7XG5cbmNvbnN0IEhpZGRlbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gU3dpdGNoKHByb3BzKSB7XG4gIGNvbnN0IHsgaWQsIG9uQ2hhbmdlLCBzdGF0ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtpc0VuYWJsZWQsIHNldEVuYWJsZWRdID0gdXNlU3RhdGUoc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPFN3aXRjaENvbnRhaW5lcj5cbiAgICAgIDxTd2l0Y2hlckJhY2tncm91bmQgaHRtbEZvcj17aWR9IC8+XG4gICAgICA8Q2lyY2xlIGlzRW5hYmxlZD17aXNFbmFibGVkfSAvPlxuICAgICAgPEhpZGRlbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgICAgIHNldEVuYWJsZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hpZGRlbj5cbiAgICA8L1N3aXRjaENvbnRhaW5lcj5cbiAgKTtcbn1cblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdGF0ZTogUHJvcFR5cGVzLmJvb2xcbn07XG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICBpZDogJ3N3aXRjaGVyJyxcbiAgc3RhdGU6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjb2xvciwgdHlwb2dyYXBoeSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEZWZhdWx0IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9kZWZhdWx0JztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEZvbnQgPSBzdHlsZWQuZGl2YFxuICAke2NvbG9yfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHQoeyB0ZXh0LCBmb250U2l6ZSwgY29sb3IsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9udFxuICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgey4uLnByb3BzfVxuICAgID57dGV4dH08L0ZvbnQ+XG4gICk7XG59XG5cblRleHQucHJvcFR5cGVzID0ge1xuICBmb250U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBmb250U2l6ZTogRGVmYXVsdC5mb250U2l6ZSxcbiAgY29sb3I6IGNvbG9ycy5ibHVlLFxufTtcbiIsImltcG9ydCBTdHlsZWQgZnJvbSAnLi9zdHlsZWQnO1xuaW1wb3J0IEF0b21zIGZyb20gJy4vYXRvbXMnO1xuXG5leHBvcnQge1xuICBTdHlsZWQsXG4gIEF0b21zLFxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IHBhZGRpbmcgPSAxNjtcbmV4cG9ydCBjb25zdCBoZWlnaHQgPSAzMztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3BhZGRpbmd9cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwYWRkaW5nfXB4O1xuYDtcbiIsImltcG9ydCB7IHdpZHRoIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgJHt3aWR0aH07XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5pbXBvcnQgRmxleCBmcm9tICcuL2ZsZXgnO1xuaW1wb3J0IEJ0biBmcm9tICcuL2J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQ29udGFpbmVyLFxuICBGbGV4LFxuICBCdG4sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=bundle.js.map