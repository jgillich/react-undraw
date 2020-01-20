function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawWorking = function UndrawWorking(_props) {
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
    viewBox: "0 0 1024.7 671.65",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 720.55,
    y1: 535.76,
    x2: 720.55,
    y2: 325.76,
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
    x1: 798.2,
    y1: 607.44,
    x2: 798.2,
    y2: 482.44,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 232.99,
    y1: 451.99,
    x2: 232.99,
    y2: 143.26,
    gradientTransform: "translate(-7.27 39.37)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 453.72,
    y1: 451.99,
    x2: 453.72,
    y2: 143.26,
    gradientTransform: "translate(-12.71 -9.36)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 512.72,
    y1: 536.99,
    x2: 512.72,
    y2: 228.26,
    gradientTransform: "translate(4.6 -24.48)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 922.12,
    y1: 409.21,
    x2: 1052.98,
    y2: 100.2,
    gradientTransform: "rotate(90 974.06 272.55)",
    xlinkHref: "#prefix__a"
  })), React.createElement("circle", {
    cx: 720.55,
    cy: 430.76,
    r: 105,
    fill: "url(#prefix__a)"
  }), React.createElement("circle", {
    cx: 720.55,
    cy: 430.76,
    r: 100,
    fill: "#f5f5f5"
  }), React.createElement("path", {
    d: "M811 482.47a62.52 62.52 0 0 0-64.27 55.82h-18a3.64 3.64 0 0 0-3.64 3.64v6a3.65 3.65 0 0 0 3.64 3.65h18A62.5 62.5 0 1 0 811 482.47z",
    transform: "translate(-87.65 -114.18)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M722.54 372.04a58.75 58.75 0 0 0-60.41 52.47h-17.42a2.91 2.91 0 0 0-2.91 2.91v6.67a2.91 2.91 0 0 0 2.91 2.92h17.42a58.75 58.75 0 1 0 60.41-65z",
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 720.55,
    cy: 430.76,
    r: 41.25,
    fill: "#795548"
  }), React.createElement("path", {
    d: "M741.8 410.76s11.77 18.28 8.4 32.5c0 0 13.45-22.35-8.4-32.5z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 746.8,
    cy: 453.26,
    r: 3.75,
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    transform: "rotate(-12.75 -329.027 672.219)",
    fill: "url(#prefix__c)",
    d: "M119.09 182.63h213.27v308.72H119.09z"
  }), React.createElement("path", {
    transform: "rotate(-12.75 -113.7 623.462)",
    fill: "url(#prefix__d)",
    d: "M334.38 133.91h213.27v308.72H334.38z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M3.727 98.779L206.57 52.88l66.653 294.564L70.38 393.342z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M217.639 50.373L420.48 4.475l66.653 294.563-202.842 45.898zM47.137 122.475l121.8-27.56 4.594 20.297-121.801 27.56zM37.938 176.134l162.395-36.747 1.147 5.072-162.394 36.746zM40.615 187.97l162.395-36.746 1.147 5.072-162.394 36.746zM43.302 199.807l162.395-36.746 1.147 5.071L44.45 204.88zM45.975 211.651l77.813-17.607 1.147 5.072-77.812 17.607zM48.662 223.504l89.654-20.287 1.147 5.072-89.653 20.286zM51.335 235.346L213.73 198.6l1.147 5.072-162.394 36.746zM54.022 247.183l162.395-36.746 1.147 5.072L55.17 252.255zM56.701 259.023l150.554-34.067 1.148 5.072-150.554 34.067zM59.376 270.866l162.395-36.746 1.147 5.072-162.394 36.746zM62.053 282.71l84.582-19.14 1.148 5.072L63.2 287.781z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M285.033 246.481l89.654-20.286 1.147 5.071-89.653 20.287zM287.706 258.324l162.395-36.746 1.148 5.071-162.395 36.746zM290.393 270.16l162.395-36.746 1.148 5.072-162.395 36.746zM293.072 282l150.554-34.066 1.148 5.072-150.554 34.066zM295.747 293.843l162.395-36.746 1.148 5.072-162.395 36.746zM298.425 305.686l84.581-19.138 1.148 5.071-84.582 19.14z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M127.543 289.227l98.11-22.2 15.312 67.67-98.11 22.2z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M243.693 63.775l98.11-22.2 15.312 67.669-98.11 22.2zM339.717 134.517l98.11-22.2 15.312 67.669-98.11 22.2z"
  }), React.createElement("rect", {
    x: 410.68,
    y: 203.79,
    width: 213.27,
    height: 308.72,
    rx: 13.44,
    transform: "rotate(-12.75 -37.37 693.386)",
    fill: "url(#prefix__e)"
  }), React.createElement("rect", {
    x: 412.36,
    y: 207.74,
    width: 207.97,
    height: 302.01,
    rx: 13.44,
    transform: "rotate(-12.75 -38.34 693.958)",
    fill: primaryColor
  }), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M220.35 542.11h3v17h-3z"
  }), React.createElement("path", {
    d: "M230.35 549.11v3h-17v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M726.55 32.76h3v17h-3z"
  }), React.createElement("path", {
    d: "M736.55 39.76v3h-17v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M636.55 249.76h3v17h-3z"
  }), React.createElement("path", {
    d: "M646.55 256.76v3h-17v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M894.15 288.76h3v17h-3z"
  }), React.createElement("path", {
    d: "M904.14 295.77v3h-17v-3z"
  })), React.createElement("path", {
    d: "M395.04 540.41a3.68 3.68 0 0 1-2.05-4.44 1.15 1.15 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 2.53 2.53 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.86 1.86 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.88 1.88 0 0 0 .36.21 3.67 3.67 0 0 1 2.05 4.44 1.89 1.89 0 0 0-.08.4 1.84 1.84 0 0 0 3.31 1.23 1.9 1.9 0 0 0 .2-.37 3.68 3.68 0 0 1 4.45-2 1.77 1.77 0 0 0 .4.08 1.84 1.84 0 0 0 1.22-3.31 1.62 1.62 0 0 0-.36-.2zM541.24 665.06a3.68 3.68 0 0 1-2-4.44 1.86 1.86 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.82 1.82 0 0 0-.2.36 3.66 3.66 0 0 1-4.44 2.05 2 2 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.62 1.62 0 0 0 .36.21 3.68 3.68 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.65 1.65 0 0 0 .2-.37 3.67 3.67 0 0 1 4.44-2 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.62 1.62 0 0 0-.36-.25zM760.24 234.06a3.68 3.68 0 0 1-2-4.44 1.86 1.86 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.82 1.82 0 0 0-.2.36 3.66 3.66 0 0 1-4.44 2.05 2 2 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.62 1.62 0 0 0 .36.21 3.68 3.68 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.65 1.65 0 0 0 .2-.37 3.67 3.67 0 0 1 4.44-2 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.62 1.62 0 0 0-.36-.25zM912.24 395.06a3.68 3.68 0 0 1-2-4.44 1.86 1.86 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.82 1.82 0 0 0-.2.36 3.66 3.66 0 0 1-4.44 2.05 2 2 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.62 1.62 0 0 0 .36.21 3.68 3.68 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.65 1.65 0 0 0 .2-.37 3.67 3.67 0 0 1 4.44-2 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.62 1.62 0 0 0-.36-.25z",
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 142.35,
    cy: 487.11,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 523.55,
    cy: 50.76,
    r: 6,
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 498.55,
    cy: 489.76,
    r: 6,
    fill: "#47e6b1",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 844.55,
    cy: 639.76,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M848.9 203.3h286a6.29 6.29 0 0 1 6.29 6.29v152.92a6.29 6.29 0 0 1-6.29 6.29h-286a6.28 6.28 0 0 1-6.28-6.28V209.58a6.29 6.29 0 0 1 6.28-6.28z",
    transform: "rotate(-73.39 871.413 287.783)",
    fill: "url(#prefix__f)",
    opacity: 0.5
  }), React.createElement("rect", {
    x: 911.41,
    y: 140.66,
    width: 161.02,
    height: 290.64,
    rx: 13.64,
    transform: "rotate(16.61 1339.445 -71.23)",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M982.5 51.09a13 13 0 0 1-15.5 7l-53.29-15.91a13.05 13.05 0 0 1-9.16-14.36l-28.2-8.41a6.13 6.13 0 0 0-7.61 4.11l-75.47 252.83a6.11 6.11 0 0 0 4.12 7.6l134.84 40.24a6.11 6.11 0 0 0 7.6-4.11l75.44-252.83a6.1 6.1 0 0 0-4.11-7.6z",
    fill: "#e0e0e0"
  }), React.createElement("rect", {
    x: 1010.74,
    y: 156.59,
    width: 35.88,
    height: 2.24,
    rx: 1.12,
    transform: "rotate(15.89 1394.044 -213.366)",
    fill: "#dbdbdb"
  }), React.createElement("circle", {
    cx: 965.68,
    cy: 50.32,
    r: 1.35,
    fill: "#dbdbdb"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M871.587 69.415l42.42 11.684-10.09 36.636-42.42-11.685z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M856.97 122.44l42.42 11.685-10.091 36.636-42.42-11.685z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M842.374 175.46l42.42 11.684-10.09 36.636-42.421-11.684z"
  }), React.createElement("path", {
    fill: "#3ad29f",
    opacity: 0.3,
    d: "M827.756 228.486l42.42 11.685-10.09 36.635-42.421-11.684z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M922.218 92.69l55.918 15.401-1.062 3.857-55.918-15.403zM919.03 104.257l55.918 15.402-1.062 3.856-55.918-15.402zM907.876 144.761l55.917 15.403-1.062 3.856-55.918-15.402zM904.69 156.32l55.918 15.402-1.062 3.856-55.918-15.402zM893.536 196.824l55.917 15.402-1.062 3.857-55.918-15.402zM890.348 208.392l55.917 15.402-1.062 3.856-55.918-15.402zM879.196 248.877l55.917 15.402-1.062 3.857-55.918-15.403zM876.008 260.454l55.917 15.403-1.062 3.856-55.918-15.402z"
  }));
};

UndrawWorking.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawWorking;