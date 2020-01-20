function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawImageFolder = function UndrawImageFolder(_props) {
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
    viewBox: "0 0 729.47 695.09",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 611.98,
    y1: 687.2,
    x2: 611.98,
    y2: 258.73,
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
    x1: 410.91,
    y1: 358.56,
    x2: 452.61,
    y2: 86.08,
    gradientTransform: "matrix(1.01 .13 -.13 1.02 62.29 -41.05)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 597.01,
    y1: 453.03,
    x2: 597.01,
    y2: 138.64,
    gradientTransform: "rotate(20.42 597.09 295.9)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 756.62,
    y1: 488.3,
    x2: 772.25,
    y2: 249.01,
    gradientTransform: "matrix(.26 .99 -1.02 .25 910.43 -476.82)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 310,
    y1: 695.09,
    x2: 310,
    y2: 203.86,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__b",
    x1: 545.79,
    y1: 695.81,
    x2: 545.79,
    y2: 464.64,
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
  })), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 310.8,
    y1: 580.62,
    x2: 310.8,
    y2: 375.85,
    xlinkHref: "#prefix__b"
  }), React.createElement("clipPath", {
    id: "prefix__h",
    transform: "translate(-235.26 -102.45)"
  }, React.createElement("rect", {
    x: 400.07,
    y: 483.3,
    width: 291.69,
    height: 194.01,
    rx: 8.85,
    ry: 8.85,
    fill: "#fff"
  }))), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M618.97 687.2H513.53V258.73h196.89L618.97 687.2z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M613.72 687.2H510.37V258.73h192.98L613.72 687.2z"
  }), React.createElement("path", {
    transform: "rotate(-15.62 -21.728 1049.253)",
    fill: "url(#prefix__c)",
    d: "M249.88 158.45h439.19V327.3H249.88z"
  }), React.createElement("path", {
    fill: "#f4f4f4",
    d: "M5.036 119.34L420.937 3.06l44.008 157.404L49.043 276.743z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M133.531 142.933L238.17 113.68l2.232 7.983-104.637 29.255z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M142.457 174.853l104.637-29.255 2.232 7.984-104.637 29.254zM137.988 158.89l168.152-47.013 2.232 7.984-168.152 47.012z"
  }), React.createElement("circle", {
    cx: 329.58,
    cy: 277.88,
    r: 19.34,
    transform: "rotate(-15.62 -161.6 1084.217)",
    fill: "#fff"
  }), React.createElement("path", {
    transform: "rotate(-20.42 195.057 897.759)",
    fill: "url(#prefix__d)",
    d: "M376.38 210.25h441.26v171.17H376.38z"
  }), React.createElement("path", {
    fill: "#f7f7f7",
    d: "M130.823 192.87L535.536 42.198l57.024 153.17L187.847 346.04z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M260.84 205.625l101.823-37.908 2.893 7.77-101.823 37.907z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M272.41 236.686l101.823-37.908 2.893 7.77-101.823 37.907zM268.356 221.441l164.125-61.11 2.901 7.793-164.124 61.11z"
  }), React.createElement("circle", {
    cx: 459.76,
    cy: 343.69,
    r: 19.34,
    transform: "rotate(-20.42 57.805 945.61)",
    fill: "#fff"
  }), React.createElement("path", {
    transform: "rotate(-79.9 554.185 460.16)",
    fill: "url(#prefix__e)",
    d: "M646.89 150.88h172.17v440.14H646.89z"
  }), React.createElement("path", {
    fill: "#fafafa",
    d: "M298.222 149.17l425.158 75.732-28.662 160.907-425.158-75.732z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M402.296 234.348l1.453-8.162 106.967 19.054-1.454 8.161z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M396.49 266.991l1.453-8.161 106.966 19.054-1.454 8.161zM399.386 250.67l1.454-8.162 171.894 30.619-1.454 8.161z"
  }), React.createElement("circle", {
    cx: 589.6,
    cy: 340.88,
    r: 19.34,
    transform: "rotate(-79.9 410.809 430.091)",
    fill: "#fff"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M171.78 253.69l-71.17-49.83H2.07v491.23h615.86v-441.4H171.78z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M174.44 258.73l-70.08-48.37H7.34V687.2h606.38V258.73H174.44z"
  }), React.createElement("path", {
    d: "M711.54 688.53a7.25 7.25 0 0 1-7.21 7.28H387.26a7.25 7.25 0 0 1-7.21-7.28v-216.6a7.25 7.25 0 0 1 7.21-7.28h317.07a7.25 7.25 0 0 1 7.21 7.28",
    transform: "translate(-235.26 -102.45)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M472.55 582.55a7 7 0 0 1-7 7H155.79a7 7 0 0 1-7-7V373.17a7 7 0 0 1 7-7h309.72a7 7 0 0 1 7 7",
    fill: "#fff"
  }), React.createElement("rect", {
    x: 161.12,
    y: 375.85,
    width: 299.37,
    height: 204.76,
    rx: 8.85,
    ry: 8.85,
    fill: "url(#prefix__g)",
    "data-name": "<Rectangle>"
  }), React.createElement("rect", {
    x: 164.8,
    y: 380.84,
    width: 291.69,
    height: 194.01,
    rx: 8.85,
    ry: 8.85,
    fill: "#fff"
  }), React.createElement("g", {
    clipPath: "url(#prefix__h)"
  }, React.createElement("path", {
    d: "M148.58 573.08l81.44-93.31a16.21 16.21 0 0 1 22.94-1.5l22.78 20.12a16.21 16.21 0 0 0 21.16.25l69.7-58.58a16.21 16.21 0 0 1 22.44 1.49l85.53 94.14a16.21 16.21 0 0 1 4.15 9.47l3.3 37.13a16.21 16.21 0 0 1-16.15 17.65H160.8a16.21 16.21 0 0 1-16.2-15.72 16.21 16.21 0 0 1 3.98-11.14z",
    fill: primaryColor
  })), React.createElement("circle", {
    cx: 199.93,
    cy: 411.95,
    r: 18.06,
    fill: "#ff5252"
  }));
};

UndrawImageFolder.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawImageFolder;