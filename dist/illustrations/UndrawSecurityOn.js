function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSecurityOn = function UndrawSecurityOn(_props) {
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
    viewBox: "0 0 859.4 719",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 601.7,
    y1: 806.94,
    x2: 601.7,
    y2: 90.55,
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
    x1: 344.92,
    y1: 369.4,
    x2: 505.4,
    y2: 369.4,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "#b0bec5",
    d: "M145.52 524.87h71.6v7.16h-71.6zM171.52 611.87h71.6v7.16h-71.6zM228.8 653.93h36.69v8.05H228.8zM247.6 697.78h36.69v5.37H247.6z"
  }), React.createElement("path", {
    d: "M601.7 90.55l-278 171.08s0 352.85 278 545.31c278-192.46 278-545.31 278-545.31z",
    transform: "translate(-170.3 -90.5)",
    fill: "url(#prefix__a)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M431.4 10.75L161.7 176.72s0 342.31 269.7 529c269.7-186.72 269.7-529 269.7-529z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M433.01 10.75l-4.61 2.83V702.5c1.53 1.08 3.06 2.17 4.61 3.24C702.7 519.03 702.7 176.72 702.7 176.72z",
    fill: primaryColor,
    opacity: 0.04
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M366.11 347.07l50.84 46.6 63.03-90.92 25.42 21.19-88.45 112.1-72.03-80.5 21.19-8.47z",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M378.11 349.87l41.24 37.8 58.43-85.92 20.62 17.19-79.05 103.1-58.43-65.3 17.19-6.87z"
  }), React.createElement("path", {
    d: "M228 511.94s-46.3 5.38-32.3 33.38a317.85 317.85 0 0 1 21.27 56.8l24.49-5.12s-9.69-45.76-18.3-51.14l23.15-4.31z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M223.16 545.86l23.15-4.31L228 511.94s-.54.06-1.48.21l18.18 29.4-23.15 4.31c8.62 5.38 18.31 51.14 18.31 51.14l-23 4.8.09.32 24.49-5.12s-9.67-45.76-18.28-51.14z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M231.7 591.82s-14.3 10.26-36 9.44c0 0-11.54 5.25 4.79 9.43s42.68 1.23 44.75-2-.86-14.14-5.68-18.61-7.86 1.74-7.86 1.74z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M269.46 577.62s-1.08 21 6.46 36.07l5.38 72.69h17.23s0-35.54 8.08-54.38-4.31-39.84-4.31-39.84l-1.08-21.54z",
    fill: "#fda57d"
  }), React.createElement("circle", {
    cx: 280.23,
    cy: 352.57,
    r: 22.07,
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "#fda57d",
    d: "M265.15 363.88h26.92v24.23h-26.92z"
  }), React.createElement("path", {
    d: "M292.07 680.99s-16.15 7-37.15 1.62c0 0-12.38 2.69 2.69 10.23s41.46 10.23 44.15 7.53 2.16-14-1.61-19.38-8.08 0-8.08 0z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M223.43 431.99l-31.73 81.83s-24.23 6.46-11.84 18.31c0 0-2.16-11.31 15.07-8.08 0 0 4.85 8.08 4.85 10.77s5.53-9 3.3-14.72a131.36 131.36 0 0 1 26.81-45.6s13.46-23.69 12.92-39.84zM330.03 402.91s17.23 8.08 25.84 5.39c6.1-1.91 12.74-14.08 16.1-21a10.47 10.47 0 0 1 8.16-5.85c6.4-.77 15.37-.69 12.89 6.41-3.77 10.77-16.15 14-16.15 14L359.1 426.6h-31.23z",
    fill: "#fda57d"
  }), React.createElement("circle", {
    cx: 276.19,
    cy: 350.69,
    r: 22.61,
    fill: "#3d213c"
  }), React.createElement("ellipse", {
    cx: 288.03,
    cy: 330.5,
    rx: 16.69,
    ry: 9.42,
    fill: "#3d213c"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M269.55 585.78v2.71l32.36-4.14v-3.09l-32.36 4.52zM224.32 512.52l-2.17.44 10.45 31.14 1.31-.24-9.59-31.34zM338.91 406.36l2.14.65.69 19.59h-2.83v-20.24zM222.44 434.52l-.71 1.85 19.12 11.96.54-2.09-18.95-11.72zM244.56 500.15l-3.17 1.26s53.09 25.73 70.59 3.19l-.58-2s-16.09 21.56-66.84-2.45z"
  }), React.createElement("path", {
    d: "M165.29 47.96a3.69 3.69 0 0 1-2-4.44 2 2 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.58 1.58 0 0 0-.2.36 3.68 3.68 0 0 1-4.44 2.05 1.49 1.49 0 0 0-.41-.08 1.84 1.84 0 0 0-1.31 3.28 1.58 1.58 0 0 0 .36.2 3.68 3.68 0 0 1 2.05 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.58 1.58 0 0 0 .2-.36 3.68 3.68 0 0 1 4.44-2.05 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.32-.17zM19.29 372.96a3.69 3.69 0 0 1-2.05-4.44 2 2 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.58 1.58 0 0 0-.2.36 3.68 3.68 0 0 1-4.44 2.05 1.49 1.49 0 0 0-.41-.08 1.84 1.84 0 0 0-1.26 3.28 1.58 1.58 0 0 0 .36.2 3.68 3.68 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.58 1.58 0 0 0 .2-.36 3.68 3.68 0 0 1 4.44-2.05 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.27-.17z",
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 748.4,
    cy: 254,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 121.4,
    cy: 683,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 850.4,
    cy: 485,
    r: 6,
    fill: "#f55f44",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M704.29 76.96a3.69 3.69 0 0 1-2.05-4.44 2 2 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.58 1.58 0 0 0-.2.36 3.68 3.68 0 0 1-4.44 2.05 1.49 1.49 0 0 0-.41-.08 1.84 1.84 0 0 0-1.26 3.28 1.58 1.58 0 0 0 .36.2 3.68 3.68 0 0 1 2.05 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.58 1.58 0 0 0 .2-.36 3.68 3.68 0 0 1 4.44-2.05 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.32-.17zM804.29 704.96a3.69 3.69 0 0 1-2.05-4.44 2 2 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.58 1.58 0 0 0-.2.36 3.68 3.68 0 0 1-4.44 2 1.49 1.49 0 0 0-.41-.08 1.84 1.84 0 0 0-1.26 3.33 1.58 1.58 0 0 0 .36.2 3.68 3.68 0 0 1 2.05 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.58 1.58 0 0 0 .2-.36 3.68 3.68 0 0 1 4.44-2.05 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.32-.17zM12.29 182.96a3.69 3.69 0 0 1-2.05-4.44 2 2 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.58 1.58 0 0 0-.2.36 3.68 3.68 0 0 1-4.44 2.05 1.49 1.49 0 0 0-.41-.08A1.84 1.84 0 0 0 .7 182.5a1.58 1.58 0 0 0 .36.2 3.68 3.68 0 0 1 2 4.44 1.86 1.86 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.58 1.58 0 0 0 .2-.36 3.68 3.68 0 0 1 4.44-2.05 2 2 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.58 1.58 0 0 0-.27-.17z",
    fill: "#4d8af0",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 79.4,
    cy: 284,
    r: 6,
    fill: "#47e6b1",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 853.4,
    cy: 332,
    r: 6,
    fill: "#47e6b1",
    opacity: 0.5
  }), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M583.4 0h3v17h-3z"
  }), React.createElement("path", {
    d: "M593.4 7v3h-17V7z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M594.4 666h3v17h-3z"
  }), React.createElement("path", {
    d: "M604.4 673v3h-17v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M26.4 702h3v17h-3z"
  }), React.createElement("path", {
    d: "M36.4 709v3h-17v-3z"
  })), React.createElement("g", {
    opacity: 0.5,
    fill: "#47e6b1"
  }, React.createElement("path", {
    d: "M709.4 396h3v17h-3z"
  }), React.createElement("path", {
    d: "M719.4 403v3h-17v-3z"
  })), React.createElement("path", {
    fill: "#47e6b1",
    opacity: 0.5,
    d: "M795.61 123.02l6.44 5.9 9.13-13.42 3.22 2.69-12.35 16.1-9.13-10.2 2.69-1.07z"
  }), React.createElement("path", {
    d: "M218.57 504.65l15 42.76q10.78-3.51 21.82-6.22a36.41 36.41 0 0 1 11.31-1.26c-3 .55-2.53 2.52-3.36 5.5s-.58 6.13-.4 9.22a156.36 156.36 0 0 1-1.24 31.11 239.93 239.93 0 0 1 48.3-5.38 154.16 154.16 0 0 1-4.48-26.63 31.13 31.13 0 0 1 0-7.09c.48-3.18 1.84-6.16 3-9.17a73.16 73.16 0 0 0 4.62-21.62 19.58 19.58 0 0 0-.91-8.45c-1.42-3.55-4.59-6.17-8.09-7.71a38.93 38.93 0 0 0-11.11-2.58c-14.39-1.78-28.49-1.43-42.93-1.29-5.54 0-8.25 1.77-13.24 4.17-1.63.77-17.57 6.71-18.29 4.64z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M246.48 390.02c-8.73 4.73-15.66 12.12-22.43 19.39l-16.87 18.09a251 251 0 0 1 24 12.86c2.86 1.74 5.84 3.71 7.21 6.77s.87 6.53.25 9.78a155.9 155.9 0 0 1-12.11 37.3c13.58 3 27.39 6 39.5 12.8 3.06 1.72 6.14 3.72 9.64 4a20.94 20.94 0 0 0 6.23-.75l30.72-6.9a5.7 5.7 0 0 0 2.68-1.11 5.81 5.81 0 0 0 1.25-2c5.41-11.84 10.95-24.25 10.37-37.26-.28-6.13-1.91-12.35-.51-18.32s7.57-11.54 13.29-9.3l2.52-28.77c.29-3.24.35-7-2.18-9.08-1.76-1.42-4.21-1.49-6.36-2.2-3.4-1.12-6-3.84-9-5.8-8.19-5.37-18.77-4.73-28.53-3.89-8.3.71-16.53 2-24.78.8-8.93-1.24-16.74-.82-24.89 3.59z",
    fill: primaryColor
  }));
};

UndrawSecurityOn.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSecurityOn;