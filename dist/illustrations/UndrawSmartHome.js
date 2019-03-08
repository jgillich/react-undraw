function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSmartHome = function UndrawSmartHome(_props) {
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
    viewBox: "0 0 1130 814.56",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 283.68,
    y1: 848.61,
    x2: 283.68,
    y2: 438.71,
    gradientTransform: "matrix(-1 0 0 1 1204 0)",
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
  }))), React.createElement("path", {
    d: "M656.54 124.69c-72.44-2.51-141.44-25.9-207.32-51.49S318.07 19.28 247.37 5.71c-45.48-8.72-97.49-10-134.13 14.43-35.27 23.46-46.66 64-52.78 101.55-4.61 28.28-7.32 58 5.3 84.51 8.77 18.37 24.34 33.82 35.11 51.42 37.45 61.26 11 136.79-29.62 196.59-19 28.06-41.13 54.82-55.82 84.69s-21.49 64.08-8.64 94.54c12.75 30.2 43.11 52.84 76.01 68.84 66.81 32.4 145.54 41.68 222.31 46.93 169.94 11.62 340.79 6.59 511.18 1.55 63.06-1.87 126.39-3.76 188.43-13.51 34.44-5.41 70-14 95-34.75 31.75-26.34 39.62-70.94 18.34-104-35.68-55.39-134.35-69.15-159.29-128.6-13.73-32.72.37-69.17 20.32-99.52 42.8-65.11 114.54-122.22 118.32-196.64 2.6-51.11-31.89-102.3-85.21-126.48-55.9-25.35-133.4-22.16-174.64 19.8-42.44 43.22-117.06 59.85-181.02 57.63z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 332.4,
    y: 134.07,
    width: 514,
    height: 618.97,
    rx: 19.8,
    fill: "#464353"
  }), React.createElement("path", {
    fill: "#fff",
    stroke: "#fff",
    strokeMiterlimit: 10,
    opacity: 0.1,
    d: "M376.74 192.74h425.32v494.09H376.74z"
  }), React.createElement("circle", {
    cx: 589.4,
    cy: 723.18,
    r: 18.1,
    fill: "#fff"
  }), React.createElement("path", {
    d: "M589.4 178.81a8.55 8.55 0 1 1 8.6-8.53 8.56 8.56 0 0 1-8.6 8.53z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M589.4 162.21a8.05 8.05 0 1 1-8 8 8.06 8.06 0 0 1 8-8m0-1a9.05 9.05 0 1 0 9.05 9 9.05 9.05 0 0 0-9.05-9z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M582.8 287.48v-17.6H596v17.6h13.42v-26.39H618l-28.6-26.4-28.59 26.4h8.57v26.39z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M441.43 369.28v-19a4.035 4.035 0 0 0-8.07 0v19a8.25 8.25 0 1 0 8.07 0zm-5.43-19a1.38 1.38 0 0 1 2.75 0v4.26H436z",
    fill: "#fff",
    stroke: "#fff",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M493.28 364.08h240v2.67h-240z"
  }), React.createElement("circle", {
    cx: 567.39,
    cy: 365.42,
    r: 6.33,
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M493.28 364.08h74.11v2.67h-74.11z"
  }), React.createElement("path", {
    d: "M438.79 462.12a1.44 1.44 0 0 0-1.48-1.26 1.46 1.46 0 0 0-1.45 1.08l-1.46 7.94a3.08 3.08 0 0 0-.06.61 3 3 0 0 0 6 0 3 3 0 0 0-.1-.73zm11.36 3.41a3.91 3.91 0 0 0-.49-.34l-5.92-4.08a1.2 1.2 0 0 0-1.53.08 1 1 0 0 0-.16 1.32l4.56 5.65a2.56 2.56 0 0 0 .3.37 2.47 2.47 0 0 0 3.23 0 2 2 0 0 0 0-3zm4-5.83l-5.55-.2a.65.65 0 0 0-.74.52.72.72 0 0 0 .44.76h0l5.37 1.52c.78.17 1.65-.19 1.65-1 0-1-.29-1.51-1.17-1.61zm-27.58 1.08a.72.72 0 0 0 .44-.76.66.66 0 0 0-.75-.52l-5.54.2c-.89.1-1.15.59-1.15 1.6 0 .8.85 1.17 1.62 1l5.37-1.53zm4.53.32l-5.92 4.07a3.21 3.21 0 0 0-.48.34 2 2 0 0 0 0 3 2.39 2.39 0 0 0 3.22 0 1.74 1.74 0 0 0 .31-.36l4.56-5.63a1 1 0 0 0-.16-1.32 1.21 1.21 0 0 0-1.57-.1zm6.34-26.36s2.6 3 2.6 5.53a4 4 0 0 1-3.95 4.32 4.21 4.21 0 0 1-4.2-4.32v-.59a16.41 16.41 0 0 0-3.74 10.47 9.26 9.26 0 1 0 18.52 0c0-6.24-3.08-13.55-9.27-15.41zm-.33 21.2a3.69 3.69 0 0 1-3.73-3.64 3.62 3.62 0 0 1 3.25-3.61 9 9 0 0 0 5.36-3 16.25 16.25 0 0 1 .68 4.68 5.56 5.56 0 0 1-5.56 5.56z",
    fill: "#fff",
    stroke: "#fff",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M493.28 452.65h240v2.67h-240z"
  }), React.createElement("circle", {
    cx: 623.39,
    cy: 453.99,
    r: 6.33,
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M493.28 452.65H624v2.67H493.28z"
  }), React.createElement("path", {
    d: "M431.9 556.71a1.73 1.73 0 0 0 1.72 1.72h7.56a1.73 1.73 0 0 0 1.72-1.72v-1.54h-11zm5.5-31.28c-6.85 0-12.37 5.15-12.37 11.52a11.34 11.34 0 0 0 5.28 9.5v3.73a1.71 1.71 0 0 0 1.77 1.65h10.64a1.71 1.71 0 0 0 1.77-1.65v-3.73a11.32 11.32 0 0 0 5.29-9.5c0-6.37-5.53-11.52-12.38-11.52z",
    fill: "#fff",
    stroke: "#fff",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M493.28 540.6h240v2.67h-240z"
  }), React.createElement("circle", {
    cx: 685.39,
    cy: 541.93,
    r: 6.33,
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M493.28 540.6H686v2.67H493.28z"
  }), React.createElement("path", {
    d: "M429.15 609.13v19.24h5.5v16.5l11-22h-5.5l5.5-13.74z",
    fill: "#fff",
    stroke: "#fff",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M493.28 625.67h240v2.67h-240z"
  }), React.createElement("circle", {
    cx: 567.39,
    cy: 627,
    r: 6.33,
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M493.28 625.67h74.11v2.67h-74.11z"
  }), React.createElement("ellipse", {
    cx: 344.08,
    cy: 780.54,
    rx: 59.47,
    ry: 11.44,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 343.09,
    cy: 775.68,
    rx: 6.92,
    ry: 9.06,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 343.09,
    cy: 764.6,
    rx: 6.92,
    ry: 9.06,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 343.09,
    cy: 753.53,
    rx: 6.92,
    ry: 9.06,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 343.09,
    cy: 742.45,
    rx: 6.92,
    ry: 9.06,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 343.09,
    cy: 731.37,
    rx: 6.92,
    ry: 9.06,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 343.09,
    cy: 720.29,
    rx: 6.92,
    ry: 9.06,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 343.09,
    cy: 709.21,
    rx: 6.92,
    ry: 9.06,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M369 633.41a34.28 34.28 0 0 0 2.58-3.8l-18.2-3 19.68.15a33.27 33.27 0 0 0 .63-26.28l-26.38 13.7 24.34-17.9a33.17 33.17 0 1 0-54.78 37.12 33.85 33.85 0 0 0-3.78 6l23.62 12.27-25.18-8.39a33.19 33.19 0 0 0 5.34 31.14 33.16 33.16 0 1 0 52.14 0 33.18 33.18 0 0 0 0-41z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M309.78 653.91a33 33 0 0 0 7.09 20.5 33.16 33.16 0 1 0 52.14 0c4.44-5.64-59.23-24.22-59.23-20.5z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 213.92,
    cy: 681.25,
    rx: 91.94,
    ry: 17.68,
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 215.45,
    cy: 673.74,
    rx: 10.7,
    ry: 14.01,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 215.45,
    cy: 656.61,
    rx: 10.7,
    ry: 14.01,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 215.45,
    cy: 639.48,
    rx: 10.7,
    ry: 14.01,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 215.45,
    cy: 622.35,
    rx: 10.7,
    ry: 14.01,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 215.45,
    cy: 605.23,
    rx: 10.7,
    ry: 14.01,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 215.45,
    cy: 588.1,
    rx: 10.7,
    ry: 14.01,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 215.45,
    cy: 570.97,
    rx: 10.7,
    ry: 14.01,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M175.38 453.76a52.24 52.24 0 0 1-4-5.87l28.14-4.61-30.42.23a51.41 51.41 0 0 1-1-40.63l40.82 21.17-37.62-27.68a51.28 51.28 0 1 1 84.7 57.39 50.9 50.9 0 0 1 5.84 9.35l-36.51 19 38.93-13.07a51.3 51.3 0 0 1-8.26 48.13 51.28 51.28 0 1 1-80.61 0 51.3 51.3 0 0 1 0-63.41z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M267 485.46a51.1 51.1 0 0 1-11 31.71 51.28 51.28 0 1 1-80.61 0c-6.88-8.73 91.61-37.46 91.61-31.71z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 882,
    cy: 793.56,
    rx: 99,
    ry: 21,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M880.25 838.7a5.83 5.83 0 0 0 .38 1.49 8.51 8.51 0 0 0 3.28 4.55 8.93 8.93 0 0 0 2.6 1c6.13 1.47 12.5 1 18.76 1.63s12.89 2.26 19.07.5c1.48-.42 3-1.19 3.6-2.7a1.61 1.61 0 0 0 .09-.29c4.49.58 9 1 13.3-.21 1.47-.42 3-1.19 3.6-2.7a6.1 6.1 0 0 0 .21-2.41c-.18-4.21-.38-8.48-1.66-12.47a35 35 0 0 0-1.71-4.21q-1.47-3.15-3.2-6.15l-.35-.65c.84.37 1.66.77 2.47 1.2a210 210 0 0 0 8.09-35.41 124.52 124.52 0 0 0-1.24-42.87 61.05 61.05 0 0 1-1-14.29c.41-9.53 2.62-18.85 4.82-28.11q1.68-7 3.35-14.09l4.78-20.08c1.06-4.45 2.12-9 1.79-13.58a35.5 35.5 0 0 0-1.48-7.38 85.12 85.12 0 0 0-4.2-11.34 1.9 1.9 0 0 0 1.41-.29 2.41 2.41 0 0 0 .63-1.25l2.52-9.08c1.77-6.36 3.54-12.77 4-19.37.55-7.47-.58-15-.82-22.44-.31-9.72.87-19.47.24-29.17-.14-2.1-.36-4.19-.61-6.27.11-1.1.14-2.2.17-3.3.16-5.42.1-10.83-1.89-15.83a22 22 0 0 0-6.59-9.14c.09-.45.19-.89.28-1.34l2.1-10c2.32-11.09 4.66-22.45 3.33-33.72-1.19-10-5.88-20.16-13.82-25.5l-.07-.05-.85-.54-.15-.09c-.26-.16-.53-.31-.8-.45l-.2-.11c-.32-.18-.66-.35-1-.5a31.6 31.6 0 0 0-8-2.39l-1.1-.17a30.68 30.68 0 0 0-3.31-.34h-1.11a22.89 22.89 0 0 0-3.31.2c-.41 0-.81.12-1.22.2l-1.2.25a50.63 50.63 0 0 1-7.24 1.51c-.46 0-.93.06-1.39.07-1.39 0-2.78-.09-4.18-.17-.69 0-1.39-.06-2.08-.06a16.46 16.46 0 0 0-3.43.31 14.46 14.46 0 0 0-5.4 2.49 22.56 22.56 0 0 0-3.28 2.92 33.1 33.1 0 0 0-2.28 2.74c-.33.44-.65.89-1 1.36l-.46.71c-.29.49-.57 1-.83 1.48a19 19 0 0 0-1 2.32 11.09 11.09 0 0 0-.45 6.49 12.52 12.52 0 0 0 .44 1.35 25.43 25.43 0 0 0-2.75 11.59c0 11 6.86 20.28 16.29 23.34 1.15 2.12 2.55 4.82 3.72 7.44a26.86 26.86 0 0 0-6.39 6.46c-5.86-.33-11.64 4.34-13.5 10.23a18.6 18.6 0 0 0-.71 7c-1.22 4.92-1.28 10.24-1.39 15.38-.17 8.1-.59 16.18-1 24.27s-.83 16.11-1.25 24.17c-.12 2.31-.24 4.63-.54 6.92-1.47.39-1.54 2.4-1.37 4 .46 4.27 1.21 8.59 1.69 12.88a21.27 21.27 0 0 0-.41 8.09l.85.38a32.41 32.41 0 0 1-1.2 8.17 2.93 2.93 0 0 1-.64 1.31 4.33 4.33 0 0 1 1.33-.33c-1.27 4.18-2.28 8.46-3.77 12.57-.77 2.12-1.67 4.2-2.33 6.37a59.68 59.68 0 0 0-1.4 6.26 30.48 30.48 0 0 0-.53 3.68 15.53 15.53 0 0 0 5.27 12.66c0 .82-.06 1.63-.06 2.45 0 5.85.86 11.68.65 17.52-.28 7.87-1.69 15.32-1.73 23.2-.13 21.8 5.85 43.11 12.87 63.6q4.17 12.18 8.85 24.13c1.84 4.72 3.92 10 1.94 14.63.67-.27 1.33-.52 2-.76a21 21 0 0 1-4.58 7 19.28 19.28 0 0 1-11.48 5.43c-2.09.23-4.24.11-6.23.84s-3.8 2.65-3.6 4.86zm25.56-113.12a96.87 96.87 0 0 1 12.28-31.88l.06.65c.32 3.22.91 6.44 1.55 9.65 1.34 6.76 2.91 13.51 2.67 20.3a115.64 115.64 0 0 0 1.26 21.52 34.09 34.09 0 0 0 2 8.14c.66 1.56 1.52 3 2 4.64a22.17 22.17 0 0 1 .8 5.75 206.93 206.93 0 0 1-2.92 47.89c-.69 0-1.13.11-1.14.2a21.68 21.68 0 0 1-2.73 7.66l-.12-.22c-.24-.42-.49-.9-.75-1.38l.83.13c-2.29-4.94-2.08-10.7-2.18-16.2a149.15 149.15 0 0 0-2.27-22.25A129.4 129.4 0 0 0 907 748a25.2 25.2 0 0 1-2-6.78 45.6 45.6 0 0 1 .81-15.64zm41.25-119a17 17 0 0 0-1.21-1.46c-1-1.07-2.2-2.31-1.9-3.77a3.69 3.69 0 0 1 .84-1.54 22 22 0 0 1 2.66-2.79l.32-.28q-.36 4.89-.71 9.81z",
    transform: "translate(-35 -42.72)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M926.64 491.28l1.1 8.49c.37 2.88.74 5.75.94 8.64.67 9.62-.57 19.28-.25 28.92.26 7.42 1.44 14.83.87 22.24-.51 6.54-2.37 12.9-4.23 19.2l-2.64 9a2.38 2.38 0 0 1-.66 1.24 2.33 2.33 0 0 1-1.69.27l-11.72-1c.75-3.44 1.58-7 2-10.53.32-2.76.51-5.54.71-8.32.62-8.66 1.33-17.32 2-26l1.25-15.2c.53-6.6 1.08-13.23 2.74-19.64a39.09 39.09 0 0 1 9.58-17.31z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M926.64 491.28l1.1 8.49c.37 2.88.74 5.75.94 8.64.67 9.62-.57 19.28-.25 28.92.26 7.42 1.44 14.83.87 22.24-.51 6.54-2.37 12.9-4.23 19.2l-2.64 9a2.38 2.38 0 0 1-.66 1.24 2.33 2.33 0 0 1-1.69.27l-11.72-1c.75-3.44 1.58-7 2-10.53.32-2.76.51-5.54.71-8.32.62-8.66 1.33-17.32 2-26l1.25-15.2c.53-6.6 1.08-13.23 2.74-19.64a39.09 39.09 0 0 1 9.58-17.31z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M905.76 780.33a35.81 35.81 0 0 1 1.8 4.18c1.34 3.95 1.54 8.19 1.74 12.36a6 6 0 0 1-.22 2.39c-.58 1.5-2.24 2.26-3.79 2.67-6.49 1.75-13.33.11-20-.49s-13.26-.16-19.7-1.61a10.06 10.06 0 0 1-2.73-.95 8.51 8.51 0 0 1-3.45-4.5 5.88 5.88 0 0 1-.39-1.48c-.21-2.2 1.7-4.1 3.78-4.82s4.35-.61 6.54-.83a20.6 20.6 0 0 0 18.24-17.21c.08-.48 10.84-.19 12 .43 1.32.73 2.12 2.54 2.87 3.77q1.77 2.97 3.31 6.09z",
    fill: "#a26565"
  }), React.createElement("path", {
    d: "M905.76 780.33a35.81 35.81 0 0 1 1.8 4.18c1.34 3.95 1.54 8.19 1.74 12.36a6 6 0 0 1-.22 2.39c-.58 1.5-2.24 2.26-3.79 2.67-6.49 1.75-13.33.11-20-.49s-13.26-.16-19.7-1.61a10.06 10.06 0 0 1-2.73-.95 8.51 8.51 0 0 1-3.45-4.5 5.88 5.88 0 0 1-.39-1.48c-.21-2.2 1.7-4.1 3.78-4.82s4.35-.61 6.54-.83a20.6 20.6 0 0 0 18.24-17.21c.08-.48 10.84-.19 12 .43 1.32.73 2.12 2.54 2.87 3.77q1.77 2.97 3.31 6.09z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M887.91 783.51a34 34 0 0 1 1.8 4.17c1.35 4 1.55 8.19 1.74 12.36a5.83 5.83 0 0 1-.22 2.39c-.57 1.5-2.23 2.26-3.78 2.68-6.49 1.74-13.34.1-20-.5s-13.27-.16-19.7-1.61a9.62 9.62 0 0 1-2.73-1 8.47 8.47 0 0 1-3.45-4.5 5.88 5.88 0 0 1-.39-1.48c-.21-2.19 1.7-4.1 3.78-4.82s4.35-.6 6.54-.83a20.61 20.61 0 0 0 18.24-17.2c.08-.48 10.84-.2 12 .42 1.33.73 2.13 2.54 2.88 3.77 1.14 2.03 2.26 4.07 3.29 6.15z",
    fill: "#a26565"
  }), React.createElement("path", {
    d: "M841.38 677.28c-.14 21.61 6.14 42.73 13.51 63q4.38 12.06 9.29 23.91c1.94 4.68 4.13 9.88 2.05 14.5 6-2.28 12.1-3.62 18.41-2.57-2.4-4.9-2.17-10.6-2.28-16a140.3 140.3 0 0 0-2.36-22.05 123 123 0 0 0-10.79-31.89 24.3 24.3 0 0 1-2.09-6.72c-.82-5.14-.18-10.42.89-15.51a92.47 92.47 0 0 1 12.9-31.6l.06.64a93.27 93.27 0 0 0 1.62 9.57c1.41 6.69 3.06 13.39 2.81 20.12a108.83 108.83 0 0 0 1.32 21.33 32.43 32.43 0 0 0 2.15 8.06c.69 1.55 1.59 3 2.13 4.61a21 21 0 0 1 .84 5.7c.8 16.27 0 32.79-3.32 48.74 5.57-.44 11.14 1.17 16.12 3.67a198.54 198.54 0 0 0 8.5-35.1 116.62 116.62 0 0 0-1.3-42.46 56.42 56.42 0 0 1-1.05-14.15c.43-9.45 2.75-18.69 5.06-27.87l3.52-14q2.5-10 5-19.91c1.11-4.41 2.23-8.92 1.88-13.46a33.4 33.4 0 0 0-1.56-7.32 81.69 81.69 0 0 0-11.07-22.64c-19.27 1.08-38.77-.72-58-2.2a3.89 3.89 0 0 0-2.72.46 3.85 3.85 0 0 0-1.1 2.48l-7.23 41a103 103 0 0 0-2 17.3c0 5.8.9 11.58.68 17.37-.35 7.8-1.83 15.18-1.87 22.99z",
    fill: "#454b69"
  }), React.createElement("path", {
    d: "M881 652.99a93.27 93.27 0 0 0 1.62 9.57c4.19-7.25 8.71-14.32 12.57-21.75 1-1.91 1.94-3.85 2.89-5.79l2.85-5.8c.53-1.09 1.06-2.18 1.54-3.29a23.77 23.77 0 0 0 1.79-5c-1.4-.26-4.86 3.52-5.9 4.51a80.64 80.64 0 0 0-6 6.64 72.81 72.81 0 0 0-6.36 8.2 39.88 39.88 0 0 0-5 12.71z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M864.9 454.08s10.7 17.05 8.72 20.62 33.7-3.17 33.7-3.17-19.43-17.05-17.44-24.19-24.98 6.74-24.98 6.74z",
    fill: "#ee8e9e"
  }), React.createElement("circle", {
    cx: 874.41,
    cy: 435.05,
    r: 24.19,
    fill: "#ee8e9e"
  }), React.createElement("path", {
    d: "M864.54 471.96a24.56 24.56 0 0 1 10.17-8.21 36.38 36.38 0 0 1 7.23-1.78l9.65-1.7c2.36-.42 4.89-.81 7.09.16a11.62 11.62 0 0 1 3 2.21c3.35 3.11 6.6 6.52 10.81 8.32 1.15.49 2.35.85 3.5 1.34 4.71 2 8.23 6.26 10.22 11 2.1 4.94 2.16 10.31 2 15.68a27.56 27.56 0 0 1-.55 5.52 35.57 35.57 0 0 1-1.83 5.06 92.57 92.57 0 0 0-3.32 10.72q-3.75 14.35-6.24 29a10.87 10.87 0 0 1-1.21 4 14.36 14.36 0 0 1-3.34 3.21 20.86 20.86 0 0 0-2.79 2.77 3.62 3.62 0 0 0-.89 1.52c-.31 1.44 1 2.68 2 3.73a18.06 18.06 0 0 1 4.52 7.87 3.17 3.17 0 0 1 .72 2.17 3.8 3.8 0 0 0-.23 1.72 3.88 3.88 0 0 0 .91 1.41 5.33 5.33 0 0 1 1 4.28 67.89 67.89 0 0 1-23.68 5.54c-2 .1-4 .1-6 .34-1.42.18-2.82.47-4.24.64a45.78 45.78 0 0 1-6.2.16c-10.77-.22-21.85-.49-31.74-4.76-.93-5.07 1.08-10.24 2.34-15.24 2-8 2.5-16.19 4-24.26 1-5.51 2.5-10.94 3.35-16.49s1.05-11.3-.48-16.7c-1.35-4.78-1.76-9.66-3.16-14.43s-2.38-9.94-.8-14.66c1.96-5.82 8.03-10.47 14.19-10.14z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M852.66 422.22c-1.18-4.29 1.14-8.76 3.9-12.25 3-3.75 6.82-7.13 11.51-8.07 3.81-.77 7.76.16 11.64-.15 3.43-.27 6.73-1.51 10.14-2a32.12 32.12 0 0 1 9.28.35 35.25 35.25 0 0 1 8.45 2.36c10.3 4.57 16.33 15.83 17.73 27s-1 22.43-3.49 33.42l-2.21 9.94c-2.3 10.35-4.6 20.74-5.21 31.32s.53 21.44 4.88 31.1a66.89 66.89 0 0 1-30.73-34.79c-1.56-4.09-2.72-8.34-4.46-12.36-1.49-3.46-3.4-6.74-4.72-10.27a33.36 33.36 0 0 1-2.11-12.47c.08-3.2.61-6.38.52-9.58s-.91-6.53-3.12-8.85c-2-2.05-4.75-3-7.28-4.33a30.31 30.31 0 0 1-10.19-8.5c-1.59-2.08-1.68-3-2.08-5.36s-1.83-4.24-2.45-6.51z",
    fill: "#454b69"
  }), React.createElement("path", {
    d: "M852.63 603.93c-.25 2.49.2 5-.34 7.47-.41 1.84-1.36 3.5-1.92 5.3a25.2 25.2 0 0 0-.85 6.37c-.08 1.8.06 4 1.66 4.84.7.37 1.54.37 2.27.69s1.35 1.19.93 1.87-1.14.57-1.8.7-1.37.81-1 1.36a1.14 1.14 0 0 0 .58.37 7.08 7.08 0 0 1 1.88.9 1.92 1.92 0 0 1 .77 1.83 1.13 1.13 0 0 1-1.61.74 5 5 0 0 1 .47 2c-2.56 1.1-5.43-.34-7.83-1.73a29.49 29.49 0 0 1-3-1.92 15 15 0 0 1-5.84-12.77 29.79 29.79 0 0 1 .57-3.65 54.92 54.92 0 0 1 1.47-6.21c.69-2.15 1.63-4.2 2.44-6.31 1.72-4.49 2.83-9.19 4.39-13.74a2.08 2.08 0 0 1 .75-1.19 2.11 2.11 0 0 1 1.11-.21 18.19 18.19 0 0 1 5.21.48c1 .3 2.71 1 3.18 2s-.28 1.84-.73 2.67a22.38 22.38 0 0 0-2.76 8.14z",
    fill: "#ee8e9e"
  }), React.createElement("path", {
    d: "M854.26 482.42a7.33 7.33 0 0 0-1.28 1.78c-3.44 6.25-3.48 13.72-3.64 20.85-.18 8-.62 16-1.06 24.05l-1.31 24c-.13 2.29-.25 4.58-.58 6.85-1.54.39-1.6 2.39-1.43 4 1.11 9.78 3.86 19.85 1 29.26a2.94 2.94 0 0 1-.67 1.3 7.81 7.81 0 0 1 4.47-.06c1.43.3 2.81.83 4.25 1.16 1.82.41 3.88.59 5.12 2a99.24 99.24 0 0 0 3.35-12.92c.68-4 .87-8.12 2.49-11.82.65-1.49 1.53-2.87 2.33-4.3 4.19-7.48 6.25-15.93 8.26-24.27a35.43 35.43 0 0 0 .64-12.06 41.47 41.47 0 0 1-.5-5.55 42.64 42.64 0 0 1 .77-5.84 39.15 39.15 0 0 0-1.17-16.91c-1.5-5.09-2.82-10.45-6-14.73s-9.73-6.72-15.04-6.79z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M853.07 481.62a7.39 7.39 0 0 0-1.28 1.79c-3.44 6.24-3.48 13.72-3.64 20.85-.18 8-.62 16-1.06 24l-1.31 24c-.13 2.29-.25 4.58-.58 6.85-1.54.39-1.6 2.39-1.42 4 1.1 9.78 3.85 19.84 1 29.26a2.94 2.94 0 0 1-.67 1.3 7.81 7.81 0 0 1 4.47-.06c1.43.3 2.81.83 4.25 1.15 1.82.42 3.88.59 5.12 2a98.21 98.21 0 0 0 3.35-12.93c.68-4 .87-8.11 2.49-11.81a48.28 48.28 0 0 1 2.33-4.3c4.2-7.48 6.25-15.94 8.26-24.28a35.42 35.42 0 0 0 .64-12.06 26 26 0 0 1 .27-11.39 39.1 39.1 0 0 0-1.17-16.9c-1.5-5.09-2.82-10.45-6-14.73s-9.74-6.66-15.05-6.74z",
    fill: primaryColor
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M856.56 409.97c3-3.75 6.82-7.13 11.51-8.07 3.81-.77 7.76.16 11.64-.15 3.43-.27 6.73-1.51 10.14-2a32.12 32.12 0 0 1 9.28.35 35.25 35.25 0 0 1 8.45 2.36 25.09 25.09 0 0 1 4.17 2.37 35.56 35.56 0 0 0-7.47-2 32 32 0 0 0-9.27-.35c-3.42.44-6.71 1.67-10.15 1.94-3.87.31-7.82-.61-11.64.15-4.69.94-8.53 4.33-11.5 8.08-2.77 3.48-5.08 7.95-3.91 12.25.62 2.26 2.06 4.24 2.45 6.57s.49 3.28 2.09 5.36a30.38 30.38 0 0 0 7.34 6.83c-.77-.36-1.56-.72-2.31-1.11a30.31 30.31 0 0 1-10.19-8.5c-1.59-2.08-1.68-3-2.08-5.36s-1.83-4.3-2.45-6.57c-1.18-4.19 1.14-8.66 3.9-12.15zM874.66 446.98a10 10 0 0 0-1.35-1.17c2.31 1.12 4.74 2.1 6.51 4 2.21 2.31 3 5.65 3.12 8.85s-.45 6.38-.52 9.57a33.41 33.41 0 0 0 2.11 12.48c1.32 3.53 3.23 6.8 4.72 10.27 1.73 4 2.89 8.26 4.45 12.35a67 67 0 0 0 25.41 31.62c.06.13.11.27.17.4a66.89 66.89 0 0 1-30.73-34.79c-1.56-4.09-2.72-8.34-4.46-12.36-1.49-3.46-3.4-6.74-4.72-10.27a33.36 33.36 0 0 1-2.11-12.47c.08-3.2.61-6.38.52-9.58s-.91-6.6-3.12-8.9z"
  })), React.createElement("rect", {
    x: 123,
    y: 121.78,
    width: 82,
    height: 58,
    rx: 9.15,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 205,
    y: 223.78,
    width: 82,
    height: 58,
    rx: 9.15,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 887,
    y: 131.78,
    width: 82,
    height: 58,
    rx: 9.15,
    fill: primaryColor,
    opacity: 0.1
  }));
};

UndrawSmartHome.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSmartHome;