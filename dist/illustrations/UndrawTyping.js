function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawTyping = function UndrawTyping(_props) {
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
    viewBox: "0 0 885 657",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 2330.5,
    y1: 628,
    x2: 2330.5,
    y2: 120,
    gradientTransform: "matrix(-1 0 0 1 2630 -120)",
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
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
    x1: 589,
    y1: 657,
    x2: 589,
    y2: 150,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 483.99,
    y1: 408.82,
    x2: 483.99,
    y2: 324.2,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 589.48,
    y1: 408.82,
    x2: 589.48,
    y2: 324.2,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 694.96,
    y1: 408.82,
    x2: 694.96,
    y2: 324.2,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0h599v434.06H218.15L177 508l-43.23-73.94H0V0z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M7.57 8.33h581.91v419.62H211.79l-34.98 75.35-39.29-75.35H7.57V8.33z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M514.71 152.65H81.18V134.1h433.53zM514.71 193.22H81.18v-18.55h433.53zM514.71 233.79H81.18v-18.55h433.53zM514.71 274.36H81.18v-18.55h433.53z"
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M885 150H293v433.21l382-.21 36 74 41.79-73.79H885V150z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M880.43 156.7H298.52v419.62h377.69l34.98 75.35 39.29-75.35h129.95V156.7z"
  }), React.createElement("circle", {
    cx: 483.99,
    cy: 366.51,
    r: 42.31,
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 589.48,
    cy: 366.51,
    r: 42.31,
    fill: "url(#prefix__d)"
  }), React.createElement("circle", {
    cx: 694.96,
    cy: 366.51,
    r: 42.31,
    fill: "url(#prefix__e)"
  }), React.createElement("circle", {
    cx: 483.99,
    cy: 366.51,
    r: 38.25,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 589.48,
    cy: 366.51,
    r: 38.25,
    fill: primaryColor,
    opacity: 0.6
  }), React.createElement("circle", {
    cx: 694.96,
    cy: 366.51,
    r: 38.25,
    fill: primaryColor,
    opacity: 0.3
  }));
};

UndrawTyping.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawTyping;