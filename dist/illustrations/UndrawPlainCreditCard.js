function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawPlainCreditCard = function UndrawPlainCreditCard(_props) {
  var props = Object.assign({}, _props);
  var primaryColor = props.primaryColor || defaultProps.primaryColor;
  var style = Object.assign({
    height: props.height || defaultProps.height,
    width: '100%'
  }, props.style);
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return React.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: "1em",
    height: "1em",
    viewBox: "0 0 910 574.86",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 455,
    y1: 574.86,
    x2: 455,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0.01,
    stopColor: "gray",
    stopOpacity: 0.25
  }), React.createElement("stop", {
    offset: 0.54,
    stopColor: "gray",
    stopOpacity: 0.12
  }), React.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1
  })), React.createElement("linearGradient", {
    id: "prefix__b",
    x1: 187,
    y1: 491.9,
    x2: 187,
    y2: 398,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopColor: "#b3b3b3",
    stopOpacity: 0.25
  }), React.createElement("stop", {
    offset: 0.54,
    stopColor: "#b3b3b3",
    stopOpacity: 0.1
  }), React.createElement("stop", {
    offset: 1,
    stopColor: "#b3b3b3",
    stopOpacity: 0.05
  }))), React.createElement("rect", {
    width: 910,
    height: 574.86,
    rx: 16.5,
    ry: 16.5,
    fill: "url(#prefix__a)"
  }), React.createElement("rect", {
    x: 12.41,
    y: 8.56,
    width: 877.18,
    height: 543.02,
    rx: 16.5,
    ry: 16.5,
    fill: "#fff"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M12.41 121.93h877.18v119.34H12.41z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M134.74 293.49h641.48v53.7H134.74z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M315.25 403.89h356.54v26.85H315.25zM315.25 445.66h140.23v26.85H315.25zM531.56 445.66h140.23v26.85H531.56z"
  }), React.createElement("rect", {
    x: 127,
    y: 398,
    width: 120,
    height: 93.9,
    rx: 18.5,
    ry: 18.5,
    fill: "url(#prefix__b)"
  }), React.createElement("rect", {
    x: 134.74,
    y: 403.89,
    width: 104.43,
    height: 82.05,
    rx: 18.5,
    ry: 18.5,
    fill: "#64ffda"
  }));
};

UndrawPlainCreditCard.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPlainCreditCard;