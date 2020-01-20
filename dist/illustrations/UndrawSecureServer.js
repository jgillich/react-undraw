function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSecureServer = function UndrawSecureServer(_props) {
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
    viewBox: "0 0 866 720.37",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 660.5,
    y1: 458.72,
    x2: 660.5,
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
    x1: 802.94,
    y1: 120.14,
    x2: 802.94,
    y2: 40.02,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 802.94,
    y1: 269.14,
    x2: 802.94,
    y2: 189.02,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 802.94,
    y1: 417.14,
    x2: 802.94,
    y2: 337.02,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 475.1,
    y1: 785.18,
    x2: 475.1,
    y2: 418.21,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 475.5,
    y1: 810.19,
    x2: 475.5,
    y2: 750.5,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 459.55,
    y1: 723.31,
    x2: 459.55,
    y2: 473.18,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M455 0h411v458.72H455z",
    opacity: 0.8
  }), React.createElement("path", {
    fill: "#fff",
    d: "M461.79 306.27H859.2v142.46H461.79z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M494.41 340.06h15.4v73h-15.4z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M524.81 340.06h15.4v73h-15.4z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M555.22 340.06h15.4v73h-15.4z",
    opacity: 0.6
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M585.62 340.06h15.4v73h-15.4zM616.02 340.06h15.4v73h-15.4z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M646.42 340.06h15.4v73h-15.4z",
    opacity: 0.4
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M676.83 340.06h15.4v73h-15.4z",
    opacity: 0.3
  }), React.createElement("circle", {
    cx: 802.94,
    cy: 376.09,
    r: 37.16,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#fff",
    d: "M461.79 158.26H859.2v142.46H461.79z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M494.41 192.05h15.4v73h-15.4z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M524.81 192.05h15.4v73h-15.4z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M555.22 192.05h15.4v73h-15.4z",
    opacity: 0.6
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M585.62 192.05h15.4v73h-15.4zM616.02 192.05h15.4v73h-15.4z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M646.42 192.05h15.4v73h-15.4z",
    opacity: 0.4
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M676.83 192.05h15.4v73h-15.4z",
    opacity: 0.3
  }), React.createElement("circle", {
    cx: 802.94,
    cy: 228.09,
    r: 37.16,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#fff",
    d: "M461.79 10.25H859.2v142.46H461.79z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M494.41 44.05h15.4v73h-15.4z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M524.81 44.05h15.4v73h-15.4z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M555.22 44.05h15.4v73h-15.4z",
    opacity: 0.6
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M585.62 44.05h15.4v73h-15.4zM616.02 44.05h15.4v73h-15.4z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M646.42 44.05h15.4v73h-15.4z",
    opacity: 0.4
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M676.83 44.05h15.4v73h-15.4z",
    opacity: 0.3
  }), React.createElement("circle", {
    cx: 802.94,
    cy: 80.08,
    r: 40.06,
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 802.94,
    cy: 229.08,
    r: 40.06,
    fill: "url(#prefix__c)"
  }), React.createElement("circle", {
    cx: 802.94,
    cy: 377.08,
    r: 40.06,
    fill: "url(#prefix__d)"
  }), React.createElement("circle", {
    cx: 802.94,
    cy: 80.08,
    r: 37.16,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M750.13 785.18H200.07V434a15.8 15.8 0 0 1 15.8-15.8h518.45a15.8 15.8 0 0 1 15.8 15.8z",
    transform: "translate(-167 -89.81)",
    fill: "url(#prefix__e)",
    opacity: 0.8
  }), React.createElement("path", {
    d: "M56.45 334.85h503.3a15.8 15.8 0 0 1 15.8 15.8v344.72H40.65V350.65a15.8 15.8 0 0 1 15.8-15.8z",
    fill: "#fff"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M57.87 355.82h500.46v328.25H57.87z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    opacity: 0.8,
    d: "M59.79 371.76h498.34v295.32H59.79z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M59.79 356.07h498.34v15.69H59.79z"
  }), React.createElement("circle", {
    cx: 70.47,
    cy: 363.67,
    r: 3.8,
    fill: "#ff5252"
  }), React.createElement("circle", {
    cx: 80.93,
    cy: 363.67,
    r: 3.8,
    fill: "#ff0"
  }), React.createElement("circle", {
    cx: 91.4,
    cy: 363.67,
    r: 3.8,
    fill: "#69f0ae"
  }), React.createElement("path", {
    d: "M765.52 808.77c-30.62 2.32-556.46 1.39-574.84 0-24.09-11.61-23.68-56.65-23.68-56.65l241.15-1.61.81 13.71H512.2l4-12.1h267.28s5.31 41.33-17.96 56.65z",
    transform: "translate(-167 -89.81)",
    fill: "url(#prefix__f)",
    opacity: 0.8
  }), React.createElement("path", {
    d: "M612.56 665.94H350.5a8 8 0 0 1-6.11 13.31h-100a8 8 0 0 1-6.11-13.31H3.63s-.4 39.12 23.39 49.2c18.15 1.21 537.56 2 567.8 0 22.99-13.31 17.74-49.2 17.74-49.2z",
    fill: "#f5f5f5"
  }), React.createElement("circle", {
    cx: 58.07,
    cy: 674.4,
    r: 3.23,
    fill: "#e0e0e0"
  }), React.createElement("circle", {
    cx: 67.75,
    cy: 674.4,
    r: 3.23,
    fill: "#e0e0e0"
  }), React.createElement("circle", {
    cx: 77.43,
    cy: 674.4,
    r: 3.23,
    fill: "#e0e0e0"
  }), React.createElement("path", {
    d: "M459.55 473.18l-97.06 59.73s0 123.2 97.06 190.39c97.06-67.2 97.06-190.39 97.06-190.39z",
    transform: "translate(-167 -89.81)",
    fill: "url(#prefix__g)",
    opacity: 0.7
  }), React.createElement("path", {
    d: "M292.55 390.42L201 446.79s0 116.26 91.6 179.67c91.6-63.41 91.6-179.67 91.6-179.67z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M294.11 390.42l-1.57 1v234l1.57 1.1c91.6-63.41 91.6-179.67 91.6-179.67z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M292.55 404.04l-81 49.86s0 102.84 81 158.94c81-56.1 81-158.94 81-158.94z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M292.55 404.43v208.76c81-56.1 81-158.94 81-158.94z",
    opacity: 0.08
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    strokeDasharray: "12",
    d: "M239 306.38v-207h171"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    strokeDasharray: "12",
    d: "M186 243.38v-207h171M716 477.38v162h-90"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3ad29f",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    strokeDasharray: "12",
    d: "M770 513.38v162h-90"
  }));
};

UndrawSecureServer.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSecureServer;