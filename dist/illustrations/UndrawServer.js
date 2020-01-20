function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawServer = function UndrawServer(_props) {
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
    viewBox: "0 0 904 754.77",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 205.5,
    y1: 458.72,
    x2: 205.5,
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
    x1: 347.94,
    y1: 120.14,
    x2: 347.94,
    y2: 40.02,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 347.94,
    y1: 269.14,
    x2: 347.94,
    y2: 189.02,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 347.94,
    y1: 417.14,
    x2: 347.94,
    y2: 337.02,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 660.91,
    y1: 754.77,
    x2: 660.91,
    y2: 737.77,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 810,
    y1: 732,
    x2: 810,
    y2: 417,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0h411v458.72H0z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M6.79 306.27H404.2v142.46H6.79z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M39.41 340.06h15.4v73h-15.4z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M69.81 340.06h15.4v73h-15.4z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M100.22 340.06h15.4v73h-15.4z",
    opacity: 0.6
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M130.62 340.06h15.4v73h-15.4zM161.02 340.06h15.4v73h-15.4z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M191.42 340.06h15.4v73h-15.4z",
    opacity: 0.4
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M221.83 340.06h15.4v73h-15.4z",
    opacity: 0.3
  }), React.createElement("circle", {
    cx: 347.94,
    cy: 376.09,
    r: 37.16,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#fff",
    d: "M6.79 158.26H404.2v142.46H6.79z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M39.41 192.05h15.4v73h-15.4z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M69.81 192.05h15.4v73h-15.4z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M100.22 192.05h15.4v73h-15.4z",
    opacity: 0.6
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M130.62 192.05h15.4v73h-15.4zM161.02 192.05h15.4v73h-15.4z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M191.42 192.05h15.4v73h-15.4z",
    opacity: 0.4
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M221.83 192.05h15.4v73h-15.4z",
    opacity: 0.3
  }), React.createElement("circle", {
    cx: 347.94,
    cy: 228.09,
    r: 37.16,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#fff",
    d: "M6.79 10.25H404.2v142.46H6.79z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M39.41 44.05h15.4v73h-15.4z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M69.81 44.05h15.4v73h-15.4z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M100.22 44.05h15.4v73h-15.4z",
    opacity: 0.6
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M130.62 44.05h15.4v73h-15.4zM161.02 44.05h15.4v73h-15.4z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M191.42 44.05h15.4v73h-15.4z",
    opacity: 0.4
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M221.83 44.05h15.4v73h-15.4z",
    opacity: 0.3
  }), React.createElement("circle", {
    cx: 347.94,
    cy: 80.08,
    r: 40.06,
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 347.94,
    cy: 229.08,
    r: 40.06,
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 347.94,
    cy: 377.08,
    r: 40.06,
    fill: "url(#prefix__d)"
  }), React.createElement("circle", {
    cx: 347.94,
    cy: 80.08,
    r: 37.16,
    fill: primaryColor
  }), React.createElement("g", {
    opacity: 0.7,
    fill: "none",
    stroke: primaryColor,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 4
  }, React.createElement("path", {
    d: "M461 158.67h6"
  }), React.createElement("path", {
    strokeDasharray: "12.52 33.38",
    d: "M500.38 158.67h166.93"
  }), React.createElement("path", {
    d: "M684 158.67h6v6"
  }), React.createElement("path", {
    strokeDasharray: "11.93 31.8",
    d: "M690 196.48v115.29"
  }), React.createElement("path", {
    d: "M690 327.67v6"
  })), React.createElement("g", {
    opacity: 0.7,
    fill: "none",
    stroke: primaryColor,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 4
  }, React.createElement("path", {
    d: "M367.58 611.67l-6-.03"
  }), React.createElement("path", {
    strokeDasharray: "12.52 33.38",
    d: "M328.2 611.48l-166.92-.8"
  }), React.createElement("path", {
    d: "M144.58 610.61l-6-.03.04-6"
  }), React.createElement("path", {
    strokeDasharray: "11.55 30.79",
    d: "M138.82 573.79l.46-69.27"
  }), React.createElement("path", {
    d: "M139.38 489.12l.04-6"
  })), React.createElement("path", {
    d: "M721.21 630.46s11.92 80.48 82.27 107.31h-285c70.35-26.83 82.27-107.31 82.27-107.31z",
    fill: "#e0e0e0"
  }), React.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M517.09 737.77h287.65v17H517.09z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M518.52 737.77h284.96v13.12H518.52z"
  }), React.createElement("path", {
    d: "M1041.25 417h-462.5A10.75 10.75 0 0 0 568 427.75v291.39A12.86 12.86 0 0 0 580.86 732h458.28a12.86 12.86 0 0 0 12.86-12.86V427.75a10.75 10.75 0 0 0-10.75-10.75z",
    transform: "translate(-148 -72.62)",
    fill: "url(#prefix__f)"
  }), React.createElement("path", {
    d: "M436.57 348.78h448.86a10.75 10.75 0 0 1 10.75 10.75V609H425.82V359.54a10.75 10.75 0 0 1 10.75-10.76z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M883.32 651.92H438.68a12.86 12.86 0 0 1-12.86-12.86V609h470.36v30.06a12.86 12.86 0 0 1-12.86 12.86z",
    fill: "#f5f5f5"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M449.07 369.86h425.65v210.06H449.07z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.2,
    d: "M465.91 383.8h409.08v-14.01H449.34v210.06h16.57V383.8z"
  }));
};

UndrawServer.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawServer;