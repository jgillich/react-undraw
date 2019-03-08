function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import defaultProps from '../default-props';
import mappings from '../illustrations/mappings';

var Undraw =
/*#__PURE__*/
function (_Component) {
  _inherits(Undraw, _Component);

  function Undraw() {
    _classCallCheck(this, Undraw);

    return _possibleConstructorReturn(this, _getPrototypeOf(Undraw).apply(this, arguments));
  }

  _createClass(Undraw, [{
    key: "render",

    /**
     * Render.
     */
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          rest = _objectWithoutProperties(_this$props, ["name"]);

      var Illustration = mappings[name];

      if (!Illustration) {
        return null;
      }

      return React.createElement(Illustration, rest);
    }
  }], [{
    key: "setDefaultProps",

    /**
     * Default props.
     */

    /**
     * Prop types.
     */

    /**
     * Override default prop values.
     *
     * @param {Object} props Properties to set as default values.
     */
    value: function setDefaultProps(props) {
      if (!props) {
        return;
      }

      Object.assign(defaultProps, props);
    }
  }]);

  return Undraw;
}(Component);

_defineProperty(Undraw, "defaultProps", {
  height: defaultProps.height,
  primaryColor: defaultProps.primaryColor
});

_defineProperty(Undraw, "propTypes", {
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  primaryColor: PropTypes.string
});

export { Undraw as default };