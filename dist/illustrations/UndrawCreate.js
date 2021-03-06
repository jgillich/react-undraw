function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawCreate = function UndrawCreate(_props) {
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
    viewBox: "0 0 930 796",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 476.5,
    y1: 796,
    x2: 476.5,
    y2: 356,
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
    x1: 233,
    y1: 468,
    x2: 233,
    y2: 390,
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
  }))), React.createElement("path", {
    d: "M692 362s28-104-28-211",
    fill: "none",
    stroke: "#e0e0e0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    strokeDasharray: "0 23"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M300.59 350.5h0"
  }), React.createElement("path", {
    d: "M308.1 328.14c9.88-40.36 12.83-124.5-117.66-160.22",
    fill: "none",
    stroke: "#e0e0e0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    strokeDasharray: "0 23.61"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M179 165h0"
  }), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M71 356h811v440H71z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M78 362h798v422.5H78z"
  }), React.createElement("circle", {
    cx: 233,
    cy: 429,
    r: 39,
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 233,
    cy: 429,
    r: 35,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#bdbdbd",
    d: "M313 416h197v20H313z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M232.5 545.5h492v20h-492zM232.5 501.5h492v20h-492zM232.5 589.5h492v20h-492zM232.5 633.5h492v20h-492zM232.5 677.5h492v20h-492zM232.5 721.5h492v20h-492z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M153.33 355.5h0"
  }), React.createElement("path", {
    d: "M155.59 332.75c.76-21.62-1.88-53.94-20.78-75.41",
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    strokeDasharray: "0 22.87"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M126.5 249.5h0"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M605.33 364.5h0"
  }), React.createElement("path", {
    d: "M607.59 341.75c.76-21.62-1.88-53.94-20.78-75.41",
    fill: "none",
    stroke: "#e0e0e0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    strokeDasharray: "0 22.87"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#e0e0e0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M578.5 258.5h0"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M797.67 355.5h0"
  }), React.createElement("path", {
    d: "M795.41 332.75c-.76-21.62 1.88-53.94 20.78-75.41",
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    strokeDasharray: "0 22.87"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M824.5 249.5h0"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M0 114.78h111v60.43H0zM608 73.78h111v60.43H608zM513 181.78h111v60.43H513z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M83 127.58h180.78v98.41H83zM749.22 132.58H930v98.41H749.22zM339.71 0h180.78v98.41H339.71z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M414 354.5h0"
  }), React.createElement("path", {
    d: "M422.82 332.21c6.13-21.36 10.12-55.49-9.32-90.72-24-43.51-2.42-85.9 9.85-104.36",
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    strokeDasharray: "0 24.01"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#bdbdbd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 10,
    d: "M430.5 127.5h0"
  }));
};

UndrawCreate.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCreate;