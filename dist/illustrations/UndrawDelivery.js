function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawDelivery = function UndrawDelivery(_props) {
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
    viewBox: "0 0 896.26 886.06",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 654.31,
    y1: 787.12,
    x2: 654.31,
    y2: 483.17,
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
    id: "prefix__c",
    x1: 310.24,
    y1: 813.28,
    x2: 310.24,
    y2: 53.35,
    xlinkHref: "#prefix__a"
  }), React.createElement("clipPath", {
    id: "prefix__d",
    transform: "translate(-103.74 -16.68)"
  }, React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    d: "M256.61 133.55h312.75v588.49H256.61z"
  })), React.createElement("linearGradient", {
    id: "prefix__b",
    x1: 413.1,
    y1: 523.43,
    x2: 413.1,
    y2: 308.51,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopOpacity: 0.12
  }), React.createElement("stop", {
    offset: 0.55,
    stopOpacity: 0.09
  }), React.createElement("stop", {
    offset: 1,
    stopOpacity: 0.02
  })), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 309.36,
    y1: 376.83,
    x2: 309.36,
    y2: 335.13,
    xlinkHref: "#prefix__b"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M412.36 483.17h483.89v303.95H412.36z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M412.36 490.73h477.81V774.4H412.36z"
  }), React.createElement("g", {
    opacity: 0.6,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M808.72 512.34h60.79v44.98h-60.79zM586.23 630.28h233.43v14.59H586.23zM586.23 666.75h170.21v9.73H586.23z"
  })), React.createElement("rect", {
    x: 96.26,
    y: 53.35,
    width: 427.96,
    height: 759.94,
    rx: 10,
    ry: 10,
    fill: "url(#prefix__c)"
  }), React.createElement("rect", {
    x: 107.25,
    y: 65.74,
    width: 403.97,
    height: 723.15,
    rx: 10,
    ry: 10,
    fill: "#fff"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    d: "M152.86 116.86h312.75v588.49H152.86z"
  }), React.createElement("g", {
    clipPath: "url(#prefix__d)",
    fill: "#2196f3",
    stroke: "#fff",
    strokeMiterlimit: 10,
    strokeWidth: 7
  }, React.createElement("path", {
    d: "M28.17 477.63l624.65-301.52M195.68 2.11l218.67 289.11M15.2 105.86l226.12 268.88M176.63 405.97L530.7 883.98M2.23 813.73l295.23-244.64M575.01 433.32L353.05 644.14"
  })), React.createElement("circle", {
    cx: 309.24,
    cy: 747.75,
    r: 24.94,
    fill: "#dbdbdb"
  }), React.createElement("circle", {
    cx: 261.86,
    cy: 89.43,
    r: 4.99,
    fill: "#dbdbdb"
  }), React.createElement("rect", {
    x: 284.3,
    y: 85.69,
    width: 77.3,
    height: 7.48,
    rx: 1.5,
    ry: 1.5,
    fill: "#dbdbdb"
  }), React.createElement("path", {
    d: "M482.07 377.47c0 38.09-69 146-69 146s-69-107.86-69-146a69 69 0 1 1 137.93 0z",
    transform: "translate(-103.74 -16.68)",
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 309.36,
    cy: 355.98,
    r: 20.85,
    fill: "url(#prefix__e)"
  }), React.createElement("path", {
    d: "M363.11 369.32c0 29.68-53.75 113.74-53.75 113.74s-53.75-84.09-53.75-113.74a53.75 53.75 0 1 1 107.49 0z",
    fill: "#ff5252"
  }), React.createElement("circle", {
    cx: 309.36,
    cy: 365.54,
    r: 16.25,
    fill: "#fff"
  }));
};

UndrawDelivery.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawDelivery;