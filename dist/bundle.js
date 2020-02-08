'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styledSystem = require('styled-system');
var styled = _interopDefault(require('styled-components'));

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var colors = {
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
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject(), styledSystem.width);

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Flex = styled.div(_templateObject$1(), styledSystem.flex);

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  border: none;\n  text-transform: uppercase;\n  font-family: Roboto, sans-serif;\n  height: ", "px;\n  padding-right: ", "px;\n  padding-left: ", "px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var padding = 16;
var height = 33;
var Btn = styled.button(_templateObject$2(), colors.white, height, padding, padding);

var Styled = {
  Container: Container,
  Flex: Flex,
  Btn: Btn
};

var Default = {
  fontSize: 12
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Font = styled.div(_templateObject$3(), styledSystem.color, styledSystem.typography);
function Text(_ref) {
  var text = _ref.text,
      fontSize = _ref.fontSize,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["text", "fontSize", "color"]);

  return React__default.createElement(Font, _extends({
    fontSize: fontSize,
    color: color
  }, props), text);
}
Text.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string.isRequired
};
Text.defaultProps = {
  fontSize: Default.fontSize,
  color: colors.blue
};

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

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 26px;\n  height: 13px;\n  position: relative;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var SwitchContainer = styled.label(_templateObject$4());
var SwitcherBackground = styled.div(_templateObject2(), colors.primary);
var Circle = styled.div(_templateObject3(), function (props) {
  return props.isEnabled ? colors.blue : colors.secondary3;
}, function (props) {
  return props.isEnabled ? 'right' : 'left';
});
var Hidden = styled.div(_templateObject4());
function Switch(props) {
  var id = props.id,
      _onChange = props.onChange,
      state = props.state;

  var _useState = React.useState(state),
      _useState2 = _slicedToArray(_useState, 2),
      isEnabled = _useState2[0],
      setEnabled = _useState2[1];

  return React__default.createElement(SwitchContainer, null, React__default.createElement(SwitcherBackground, {
    htmlFor: id
  }), React__default.createElement(Circle, {
    isEnabled: isEnabled
  }), React__default.createElement(Hidden, null, React__default.createElement("input", {
    onChange: function onChange(event) {
      _onChange(event);

      setEnabled(event.target.checked);
    },
    id: id,
    type: "checkbox"
  })));
}
Switch.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.bool
};
Switch.defaultProps = {
  id: 'switcher',
  state: false
};

var Atoms = {
  Text: Text,
  Switch: Switch
};

function Button(_ref) {
  var text = _ref.text,
      type = _ref.type,
      isFluid = _ref.isFluid,
      isTransparent = _ref.isTransparent,
      props = _objectWithoutProperties(_ref, ["text", "type", "isFluid", "isTransparent"]);

  var maxWidth = isFluid ? '100%' : 'none';
  var width = isFluid ? '100%' : 'none';
  var backgroundColor = isTransparent ? 'transparent' : "".concat(colors.blue);
  return React__default.createElement(Styled.Btn, _extends({
    style: {
      maxWidth: maxWidth,
      width: width,
      backgroundColor: backgroundColor
    },
    type: type
  }, props), text);
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  isTransparent: PropTypes.bool,
  isFluid: PropTypes.bool
};
Button.defaultProps = {
  type: 'button',
  isTransparent: false,
  isFluid: false
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  font-size: 23px;\n  font-weight: 300;\n  font-family: Roboto, sans-serif;\n  color: ", ";\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 32px;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-radius: 6px;\n  border-style: solid;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active,\n  input:-webkit-autofill:valid {\n  // TODO: could be removed\n    -webkit-text-fill-color: red !important;   \n  }\n  \n  ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled.input(_templateObject$5(), styledSystem.color);
var StyledLabel = styled.label(_templateObject2$1(), colors.white);
function Input(props) {
  var type = props.type,
      width = props.width,
      labelText = props.labelText,
      id = props.id,
      name = props.name,
      isFluid = props.isFluid,
      restProps = _objectWithoutProperties(props, ["type", "width", "labelText", "id", "name", "isFluid"]);

  var color = colors.blue,
      bgColor = colors.primary;
  return React__default.createElement(Styled.Container, {
    className: name,
    width: isFluid ? '100%' : width
  }, React__default.createElement(StyledLabel, {
    htmlFor: id
  }, labelText), React__default.createElement(StyledInput, _extends({
    id: id,
    name: name,
    color: color,
    bg: bgColor,
    type: type
  }, restProps)));
}
Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  isFluid: PropTypes.bool
};
Input.defaultProps = {
  onChange: function onChange() {},
  type: 'text',
  width: '327px',
  isFluid: false
};

var size = {
  maxWidth: '1440px'
};

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  height: 13px;\n  width: 13px;\n  position: absolute;\n  border-radius: 50%;\n\n  top: 0;\n  background-color: ", ";\n  ", ": 0;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 10px;\n  width: 100%;\n\n  border-radius: 8px;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 26px;\n  height: 13px;\n  position: relative;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var SwitchContainer$1 = styled.label(_templateObject$6());
var SwitcherBackground$1 = styled.div(_templateObject2$2(), colors.primary);
var Circle$1 = styled.div(_templateObject3$1(), function (props) {
  return props.isEnabled ? colors.blue : colors.secondary3;
}, function (props) {
  return props.isEnabled ? 'right' : 'left';
});
var Hidden$1 = styled.div(_templateObject4$1());
function Switch$1(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEnabled = _useState2[0],
      setEnabled = _useState2[1];

  var id = props.id,
      _onChange = props.onChange,
      state = props.state;
  return React__default.createElement(SwitchContainer$1, null, React__default.createElement(SwitcherBackground$1, {
    htmlFor: id
  }), React__default.createElement(Circle$1, {
    isEnabled: isEnabled
  }), React__default.createElement(Hidden$1, null, React__default.createElement("input", {
    onChange: function onChange(event) {
      _onChange(event);

      setEnabled(event.target.checked);
    },
    id: id,
    type: "checkbox"
  })));
}
Switch$1.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.bool
};
Switch$1.defaultProps = {
  id: 'switcher',
  state: false
};

var Text$1 = Atoms.Text; // const Switch = Atoms.Switch;

exports.Button = Button;
exports.Colors = colors;
exports.Default = Default;
exports.Input = Input;
exports.Size = size;
exports.Switch = Switch$1;
exports.Text = Text$1;
//# sourceMappingURL=bundle.js.map
