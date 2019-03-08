function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawSuccessfulPurchase = function UndrawSuccessfulPurchase(_props) {
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
    viewBox: "0 0 1074 739",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 607.35,
    y1: 789.64,
    x2: 607.35,
    y2: 80.5,
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
  }))), React.createElement("rect", {
    x: 330,
    y: 77,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 568,
    y: 50,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 524,
    y: 355,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 560,
    y: 388,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 774,
    y: 373,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 123,
    y: 397,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 499,
    y: 421,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M781.91 262.71l-36.66-106.42-13.18 2-11.8 1.51c.3-4 .82-18.36-6.5-25.89-.71-2.58-2.58-5.51-6.18-8.81-17.54-16.08-21.19 16.81-21.19 16.81s-4 6.94-9.51 16.64L674 158l-.82 7.16c-12.2 21.57-28.41 50.76-28.41 53.5 0 4.39-2.19 10.23-2.19 10.23s-12.42 20.46-16.81 30.7a49.09 49.09 0 0 1-11 16.08s-1.06.81-2.8 2a25 25 0 0 1 1-5.71c1.6-5.23 5.32-9.71 6.31-15.09a17.62 17.62 0 0 0 .26-3.91c.23-6.31-2.84-12.52-4.12-18.83-1.49-7.31-.69-15.36-4.59-21.71-3-4.85-8.32-7.87-13.85-9.26-5.08-1.27-10.08-.82-15.2-1.36-4.7-.5-9.19-2.58-13.89-3.35a17.93 17.93 0 0 0-7.62 0c-7.95 2.19-10.44 12.21-16.58 17.72-2.21 2-4.92 3.38-6.92 5.57-2.91 3.19-3.92 7.64-3.77 12a25.56 25.56 0 0 0 .26 4.37c.76 5.23 2.78 10.18 4 15.31a53 53 0 0 1 1.49 11.59c0 .88 0 1.76-.08 2.63a9.23 9.23 0 0 1-1.35 5c-1.11 1.53-2.94 2.27-4.57 3.25a35.45 35.45 0 0 1-11.52-16.34s-.27.34-.73 1v-1s-10-14.68-11.52-26.67l3.48.36 8-112.55-20.43-3c-.57-5.81-2.12-14.24-6.23-20.39 3.43-6.76 5.16-15.91-9.88-16.82-17.6-1.07-16.52 12.64-14.65 20.14a50.45 50.45 0 0 0-1 12.45l-18-2.62-.1 1.46h-4.28l-13.1 114.82 11.16-.56 40.9 4.26c3.27 29.73 8.41 66.47 14.51 75.13a7.39 7.39 0 0 0 .67.83V359s-.73 68-13.16 78.93a65 65 0 0 1 23.78-3.73c-.14.45-.28.93-.42 1.44a127.58 127.58 0 0 0-3.79 20.48q-.26 2.29-.47 4.78a257.87 257.87 0 0 0 .63 45.73c5.12 54.08 13.16 92.82 13.16 92.82l2.24 31.44s-2.19 53.35 3.65 70.89a26.47 26.47 0 0 0 7.48 4.85c.05.5.11 1 .16 1.53s.13 1.35.2 2.05c-2.62 1.19-7.51 5.91-8.57 24.45 0 0 1.46 13.89-2.19 20.46s-1.46 25.58 9.5 27.77a58.57 58.57 0 0 0 21.19 0s5.12 0 1.46-18.27l-.64-4.68c-.08-9.05.3-18.74 2.1-21.63 3.65-5.85-1.46-11.69-1.46-11.69s-.36.2-.95.47c-.94-5.05-2.17-13.25-1.73-19.51 0-.53.09-1 .15-1.55a30.78 30.78 0 0 0 6.19-4.27v-69.41s-.73-106.7 7.31-108.9c0 0 3.65 38.73 2.19 57.74s2.19 39.47 2.19 39.47l1.46 77.47s1.4.67 3.66 1.46l-.15 1.41c-.89 8.61-2.32 21.61-3.62 29.57a5.88 5.88 0 0 0-3.55 4.1c-2.19 7.31-.73 25.58-5.12 30.7-2.59 3-5.69 9.11-4.17 13.43-.95 3.79-.53 9.71 10.75 10.69 16.81 1.46 24.12-7.31 24.12-7.31s2.19-3.65 0-10.23.73-18.27.73-18.27 1.57-9.92-1-11.22c-.22-1.18-.42-1.93-.42-1.93a8.8 8.8 0 0 0-2.31-6.08c-.06-7.65.25-21.8 2.94-31.12.16-.53.32-1 .49-1.55a19.74 19.74 0 0 0 6.18-2.17s-.73-16.81 4.39-28.5 2.19-58.47 2.19-58.47-2.19-12.29.9-22.25a218.32 218.32 0 0 0 7.94-33.8l4.31-30.19s11.35-36.75-3.6-74.47c-.61-1.56-1.28-3.12-2-4.68a102.39 102.39 0 0 0-4.16-8.13c-.24-.42-.5-.85-.75-1.27 1.57-.39 2.46-.62 2.46-.62s-19.73-46-7.31-69.43c0 0 7-7 8-14.69 1.24-10.17 2.59-20.33 4.81-30.33l.39-1.76s.06-.34.16-.95c.28-.18.55-.37.82-.57 21.06-15.38 39.22-79.6 39.22-79.6l5.85-11 2.78-5.88-5.7 49.73 44.58 11 28.5-2.19-.08-6.13 21.72-1.69zm-282.6-145l-7.92-1.16c-1.39-7.15-2.33-11.84-2.33-11.84a43.44 43.44 0 0 0 4.39-6.57c3.83 5.86 5.3 13.86 5.86 19.53zm-29.58-15.35c.55 1.88 1.05 3.09 1.05 3.09l1 8.25-2.7-.39a54.19 54.19 0 0 1 .66-10.99zm249.8 57.61l-10.72 1.38c1.51-4.44 3.38-11.72 2.29-18.31a9.19 9.19 0 0 0 2.94-7.65c6.37 7.61 5.77 21.05 5.49 24.55zm-17.8-11.41a26.56 26.56 0 0 0 8.73-4.91c.92 6.47-1 13.58-2.46 17.8l-10 1.28-2.76-.53z",
    transform: "translate(-63 -80.5)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M717 184.1l-26.09 10.89L660.6 89.3l7.11-8.44 13.03-2.02L717 184.1z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.2,
    d: "M717 184.1l-26.09 10.89L660.6 89.3l7.11-8.44 13.03-2.02L717 184.1z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M667.71 80.86l-45.28 5.81 23.21 111.84 45.27-3.52-23.2-114.13z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.07,
    d: "M667.71 80.86l-45.28 5.81 23.21 111.84 45.27-3.52-23.2-114.13z"
  }), React.createElement("path", {
    d: "M655.94 83.38l-.72-.09c0-.27 3-26.67-13.57-30l.14-.71c17.28 3.47 14.21 30.53 14.15 30.8z",
    fill: "#535461"
  }), React.createElement("path", {
    fill: "#774e55",
    d: "M488.44 160.44h49.88v73.01h-49.88z"
  }), React.createElement("path", {
    opacity: 0.2,
    d: "M488.44 160.44h49.88v73.01h-49.88z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M669.51 202.72l-28.19 2.17 4.34-109.87 9.39-5.78 13.01 2.17 1.45 111.31z"
  }), React.createElement("path", {
    opacity: 0.2,
    d: "M669.51 202.72l-28.19 2.17 4.34-109.87 9.39-5.78 13.01 2.17 1.45 111.31z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M655.05 89.24l-44.81-8.68-13.01 113.49 44.09 10.84 13.73-115.65zM391.22 35.03h-6.51L371.7 148.51l28.91-1.44-9.39-112.04z"
  }), React.createElement("path", {
    opacity: 0.2,
    d: "M391.22 35.03h-6.51L371.7 148.51l28.91-1.44-9.39-112.04z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M389.05 33.58l-7.95 114.21 69.39 7.23 7.95-111.32-69.39-10.12z"
  }), React.createElement("path", {
    d: "M472.9 626.31s-8.67-.72-10.12 24.58c0 0 1.45 13.73-2.17 20.24s-1.45 25.3 9.4 27.47a57.93 57.93 0 0 0 21 0s5.06 0 1.45-18.07l-7.23-52.77z",
    fill: "#5c3d53"
  }), React.createElement("path", {
    d: "M472.9 626.31s-8.67-.72-10.12 24.58c0 0 1.45 13.73-2.17 20.24s-1.45 25.3 9.4 27.47a57.93 57.93 0 0 0 21 0s5.06 0 1.45-18.07l-7.23-52.77z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M518.35 208.9c-.62 10.76 1.53 17 1.53 17l-18.79 5.06s-31.08 4.34-18.79-8c4.25-4.25 6.34-11.54 7.25-19.24a106.62 106.62 0 0 0 .53-15.84 141.2 141.2 0 0 0-1.28-14.8s45.54-15.9 35.42 10.12a92.54 92.54 0 0 0-4.35 14.5 76.45 76.45 0 0 0-1.52 11.2z",
    fill: "#f8bdc5"
  }), React.createElement("path", {
    d: "M524.22 183.21a92.54 92.54 0 0 0-4.35 14.5 31.14 31.14 0 0 1-29.79-9.82 141.2 141.2 0 0 0-1.28-14.8s45.54-15.9 35.42 10.12z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 513.38,
    cy: 165.86,
    r: 31.08,
    fill: "#f8bdc5"
  }), React.createElement("path", {
    d: "M458.44 181.04v9.4l-15.9 41.2-4.34-4.34a7.3 7.3 0 0 1-.66-.82c-10.5-14.92-18.14-114.11-18.14-114.11L409.29 28.5s-10.84-26 13-24.58 5.06 23.85 5.06 23.85 15.9 79.51 13.73 82.4 0 11.57 0 11.57 6.51 16.63 5.78 28.91 11.58 30.39 11.58 30.39zM637.7 71.17l-37.59 79.51-5.78 10.82s-18 63.52-38.79 78.73a19 19 0 0 1-3.86 2.23l-4.34-34.7 4-10.08.3-.77a48.55 48.55 0 0 0 10.84-15.9c4.34-10.12 16.63-30.36 16.63-30.36s2.17-5.78 2.17-10.12 41.2-75.9 41.2-75.9 3.61-32.53 21-16.63-5.78 23.17-5.78 23.17zM492.41 647.99s-24.58 10.12-21.69.72c1.76-5.7 1.11-16.47.33-24-.5-4.91-1.06-8.49-1.06-8.49l21 2.17a17 17 0 0 0-1.21 5.75c-.69 9.59 2.63 23.85 2.63 23.85zM530.63 619.87c-3.79 13.16-2.8 36.08-2.8 36.08s-22.41 2.89-20.24-2.89c1.51-4 3.72-23.82 4.92-35.47.53-5.09.86-8.62.86-8.62l20.24 4.34a20.22 20.22 0 0 0-2.98 6.56z",
    fill: "#f8bdc5"
  }), React.createElement("path", {
    d: "M470 616.19l21 2.17a17 17 0 0 0-1.21 5.75 21.43 21.43 0 0 1-18.7.57c-.53-4.92-1.09-8.49-1.09-8.49zM533.62 613.3a20.22 20.22 0 0 0-3 6.57c-6.83 1.1-14-.83-18.11-2.28.53-5.09.86-8.62.86-8.62z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M556.75 444.87l-4.26 29.86a215.92 215.92 0 0 1-7.86 33.43c-3.06 9.85-.89 22-.89 22s2.89 46.26-2.17 57.83-4.34 28.19-4.34 28.19c-11.57 6.51-28.19-1.45-28.19-1.45l-1.45-76.62s-3.61-20.24-2.17-39-2.17-57.1-2.17-57.1c-8 2.17-7.23 107.7-7.23 107.7v68.67c-17.35 15.18-32.53 0-32.53 0-5.78-17.35-3.61-70.12-3.61-70.12l-2.17-31.08s-8-38.31-13-91.8a255 255 0 0 1-.62-45.23q.21-2.46.46-4.73a126.18 126.18 0 0 1 3.74-20.25 45.58 45.58 0 0 1 2.2-6.41l77.67 3.61 4.58.21 11 .51c1.2 1.81 2.33 3.65 3.38 5.49 1.52 2.67 2.89 5.36 4.11 8 .7 1.54 1.36 3.09 2 4.63 14.77 37.29 3.52 73.66 3.52 73.66z",
    fill: "#5e52ad"
  }), React.createElement("path", {
    d: "M471.45 355.97s-3.4 34-27.37 24.16q.21-2.46.46-4.73c5.64 1.53 21.25 3.64 21.84-19.44zM553.19 371.22c-16.6 5.93-22.86-9.86-25-18.87l4.58.21c2.49 14.17 12.43 15 18.48 14 .68 1.58 1.33 3.13 1.94 4.66z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M479.34 644.15c-3.69-.58-9.33-2.61-7.56-9.7 0 0-6.83-2.36-6.11 25.83 0 0-.72 13.73-2.17 16.63s0 20.24 15.18 18.79c0 0 10.84 3.61 13.73-2.17 0 0-2.17-33.25 1.45-39s-1.45-11.57-1.45-11.57-5.12 2.84-8.8 2c-1.4-.39-2.84-.58-4.27-.81zM497.47 691.36s-7.23 12.29 9.4 13.73 23.85-7.23 23.85-7.23 2.17-3.61 0-10.12.72-18.07.72-18.07 2.17-13.73-2.89-10.84-31.08 32.53-31.08 32.53z",
    fill: "#5c3d53"
  }), React.createElement("path", {
    d: "M497.47 691.36s-7.23 12.29 9.4 13.73 23.85-7.23 23.85-7.23 2.17-3.61 0-10.12.72-18.07.72-18.07 2.17-13.73-2.89-10.84-31.08 32.53-31.08 32.53z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M516.27 647.27s-8.67-3.61-10.84 3.61-.72 25.3-5.06 30.36-10.12 18.79 7.23 18.07 21-6.51 21-6.51-.72-18.07 1.45-23.13 0-13 0-13 .67-10.17-13.78-9.4z",
    fill: "#5c3d53"
  }), React.createElement("circle", {
    cx: 407.84,
    cy: 43.7,
    r: 1.45,
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 438.2,
    cy: 47.31,
    r: 1.45,
    opacity: 0.2
  }), React.createElement("path", {
    d: "M438.56 47.32h-.72c0-.31.51-30.8-17-33.61-3.45-.55-6.27.23-8.38 2.32-7.23 7.17-4.24 27.42-4.21 27.62l-.71.11c-.13-.85-3.07-20.82 4.42-28.24 2.28-2.27 5.32-3.12 9-2.53 18.12 2.9 17.61 34.02 17.6 34.33zM643.09 87.95l-.65-.31c.11-.24 11.25-24.37-3.47-32.78l.36-.63c15.29 8.74 3.88 33.47 3.76 33.72z",
    fill: "#535461"
  }), React.createElement("path", {
    d: "M519.88 225.86l-18.79 5.06s-31.08 4.34-18.79-8c4.25-4.25 6.34-11.54 7.25-19.24 4.91 7.7 10.82 5.51 10.82 5.51l17.92-.35h.07c-.63 10.82 1.52 17.02 1.52 17.02zM555.55 240.25a19 19 0 0 1-3.86 2.23l-4.34-34.7 4-10.08 1-.77c9.03 2.57 4.37 35.81 3.2 43.32zM458.44 181.04v9.4l-15.9 41.2-4.34-4.34a7.3 7.3 0 0 1-.66-.82c1.88-21.48 20.9-45.44 20.9-45.44zM547.11 358.56c-10.11 2.53-62.89 14.93-78.55 3.19-6.18-4.63-13.46-6.33-20.27-6.6a45.58 45.58 0 0 1 2.2-6.41l77.67 3.61 4.58.21 11 .51c1.2 1.82 2.32 3.65 3.37 5.49z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M411.1 10.09s10.84 18.07 18.07 0M634.09 47.31s-4.34 21.69 13 11.57",
    fill: "#f8bdc5"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M499.89 449.14c-.35-4.4-.61-7.15-.61-7.15-8 2.17-7.23 107.7-7.23 107.7v68.67c-5.08 4.44-10 6.28-14.35 6.67 5.22.46 11.44-1 18-6.67v-68.67s-.56-76.47 4.19-100.55z"
  }), React.createElement("path", {
    d: "M552.83 371.22c-.61-1.54-1.26-3.09-2-4.63a93.127 93.127 0 0 0-4.11-8c-1-1.84-2.18-3.67-3.38-5.49l-11-.51-4.58-.21-77.67-3.61-.07.16 74.13 3.45 4.58.21 11 .51c1.2 1.81 2.33 3.65 3.38 5.49 1.52 2.67 2.89 5.36 4.11 8 .7 1.54 1.36 3.09 2 4.63 14.78 37.3 3.56 73.65 3.56 73.65l-4.26 29.86a215.92 215.92 0 0 1-7.86 33.43c-3.06 9.85-.89 22-.89 22s2.89 46.26-2.17 57.83-4.34 28.19-4.34 28.19a21 21 0 0 1-9.06 2.5 23 23 0 0 0 12.67-2.5s-.72-16.63 4.34-28.19 2.17-57.83 2.17-57.83-2.17-12.16.89-22a215.92 215.92 0 0 0 7.86-33.43l4.26-29.86s11.22-36.37-3.56-73.65z"
  })), React.createElement("path", {
    d: "M518.29 210.32c10 4.71 33.4-13.38 33.4-13.38 10.12 2.89 2.89 44.82 2.89 44.82l-.39 1.74c-2.2 9.89-3.53 19.94-4.76 30-.93 7.59-7.86 14.53-7.86 14.53-12.29 23.13 7.23 68.67 7.23 68.67s-62.89 16.63-80.23 3.61-43.37-2.89-43.37-2.89c12.29-10.84 13-78.07 13-78.07v-52c1.45-21.69 21-46.26 21-46.26 8 22.41 30.23 23.89 30.23 23.89 4.93 8 11 5.75 11 5.75z",
    fill: "#eb6475"
  }), React.createElement("path", {
    d: "M505.29 122.06a17.73 17.73 0 0 0-7.53 0c-7.86 2.17-10.33 12.08-16.4 17.52-2.18 2-4.87 3.34-6.85 5.51-3.52 3.86-4.23 9.58-3.48 14.75s2.75 10.07 4 15.14a52.39 52.39 0 0 1 1.39 15.52 9.13 9.13 0 0 1-1.34 4.91c-1.45 2-4.12 2.63-6 4.23-5.74 4.94-1 15.19-5.21 21.5-1.81 2.73-5.2 4.53-5.89 7.73-.49 2.27.55 4.56 1.57 6.65 2.68 5.5 5.46 11.15 10 15.25s10.15 6.16 15.73 8.25c1.69.63 3.81 1.18 5.1-.07 1.59-1.56.39-4.2-.71-6.13-1.74-3-3.1-6.62-2.08-10s4.29-5.62 6.49-8.44c5.67-7.3 3.81-17.78 1-26.58-1.19-3.71-2.53-7.66-1.52-11.43.43-1.62 1.28-3.09 1.82-4.68 2.4-7.08-1.63-14.85-.45-22.23a31.93 31.93 0 0 1 3-8.27l6.35-13.65a13.49 13.49 0 0 1 2.81-4.42 10 10 0 0 1 7-2.18 19 19 0 0 1 13.63 6.21c6.8 7.56 6.37 19 5.55 29.08l-.59 7.28c-.43 5.24-1 10.83-4.3 14.91-2.57 3.16-6.72 5.31-7.78 9.25-.92 3.39.81 7.07-.1 10.46-1.36 5.07-7.62 6.9-10.93 11a11.25 11.25 0 0 0-.82 12.65c1.26 2 3.27 4 3 6.35-.23 1.89-1.93 3.42-1.92 5.32a4.23 4.23 0 0 0 3.07 3.67 12.4 12.4 0 0 0 5.07.24l17.93-1.62a6.31 6.31 0 0 0 3.19-.88c1.25-.9 1.66-2.56 1.83-4.09.72-6.38-1-13.35 2.19-18.93 1-1.79 2.47-3.28 3.58-5 6.12-9.6-.05-22.62 3.28-33.51 1.58-5.17 5.26-9.61 6.24-14.92 1.3-7.08-2.39-14-3.82-21-1.47-7.23-.68-15.19-4.54-21.48-2.95-4.8-8.23-7.79-13.69-9.16-5-1.26-10-.81-15-1.35-4.78-.55-9.22-2.61-13.87-3.36z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M505.29 120.61a17.73 17.73 0 0 0-7.53 0c-7.86 2.17-10.33 12.08-16.4 17.52-2.18 2-4.87 3.34-6.85 5.51-3.52 3.86-4.23 9.58-3.48 14.75s2.75 10.07 4 15.14a52.39 52.39 0 0 1 1.39 15.52 9.13 9.13 0 0 1-1.34 4.91c-1.45 2-4.12 2.63-6 4.23-5.74 4.94-1 15.19-5.21 21.5-1.81 2.73-5.2 4.53-5.89 7.73-.49 2.27.55 4.56 1.57 6.65 2.68 5.5 5.46 11.15 10 15.25s10.15 6.16 15.73 8.25c1.69.63 3.81 1.18 5.1-.07 1.59-1.56.39-4.2-.71-6.13-1.74-3-3.1-6.62-2.08-10s4.29-5.62 6.49-8.44c5.67-7.3 3.81-17.78 1-26.58-1.19-3.71-2.53-7.66-1.52-11.43.43-1.62 1.28-3.09 1.82-4.68 2.4-7.08-1.63-14.85-.45-22.23a31.93 31.93 0 0 1 3-8.27l6.35-13.65a13.49 13.49 0 0 1 2.81-4.42 10 10 0 0 1 7-2.18 19 19 0 0 1 13.63 6.21c6.8 7.56 6.37 19 5.55 29.08l-.59 7.28c-.43 5.24-1 10.83-4.3 14.91-2.57 3.16-6.72 5.31-7.78 9.25-.92 3.39.81 7.07-.1 10.46-1.36 5.07-7.62 6.9-10.93 11a11.25 11.25 0 0 0-.82 12.65c1.26 2 3.27 4 3 6.35-.23 1.89-1.93 3.42-1.92 5.32a4.23 4.23 0 0 0 3.07 3.67 12.4 12.4 0 0 0 5.07.24l17.93-1.62a6.31 6.31 0 0 0 3.19-.88c1.25-.9 1.66-2.56 1.83-4.09.72-6.38-1-13.35 2.19-18.93 1-1.79 2.47-3.28 3.58-5 6.12-9.6-.05-22.62 3.28-33.51 1.58-5.17 5.26-9.61 6.24-14.92 1.3-7.08-2.39-14-3.82-21-1.47-7.23-.68-15.19-4.54-21.48-2.95-4.8-8.23-7.79-13.69-9.16-5-1.26-10-.81-15-1.35-4.78-.54-9.22-2.6-13.87-3.36z",
    fill: "#774e55"
  }), React.createElement("path", {
    d: "M466.75 286.21s14.46 4.34 35.42-5.06H513s.72 10.12 28.91 5.78",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 537,
    cy: 690,
    rx: 537,
    ry: 49,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 252,
    y: 258,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 288,
    y: 291,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 603,
    y: 260,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 639,
    y: 293,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 227,
    y: 324,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 307,
    y: 441,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 343,
    y: 474,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 282,
    y: 507,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 629,
    y: 525,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("rect", {
    x: 568,
    y: 558,
    width: 80,
    height: 30,
    rx: 5.17,
    ry: 5.17,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M945.26 663.39s-14.48-73.36 15.34-123.64a113.3 113.3 0 0 0 15.63-69.94 190.55 190.55 0 0 0-7-34.14",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M987.85 403.87c-.8 8.75-19 32.68-19 32.68s-13.52-26.84-12.71-35.6a15.92 15.92 0 0 1 31.7 2.91zM1009.6 454.77c-5.43 6.91-33.7 17.12-33.7 17.12s3.24-29.88 8.67-36.79a15.92 15.92 0 1 1 25 19.67zM1000.84 537.5c-8.18 3.22-37.73-2.24-37.73-2.24s17.88-24.16 26.06-27.38a15.92 15.92 0 0 1 11.67 29.62zM980.11 598.65c-7.52 4.56-37.57 4.17-37.57 4.17s13.54-26.83 21.06-31.39a15.92 15.92 0 1 1 16.51 27.22zM942.46 470.5c5.72 6.68 34.39 15.68 34.39 15.68s-4.5-29.72-10.21-36.39a15.92 15.92 0 1 0-24.18 20.71zM919.12 542.32c7.45 4.66 37.51 4.67 37.51 4.67s-13.18-27-20.64-31.67a15.92 15.92 0 1 0-16.87 27zM906 615.21c6.56 5.85 36.18 10.95 36.18 10.95s-8.43-28.85-15-34.7A15.92 15.92 0 1 0 906 615.21z",
    fill: primaryColor
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M819.63 647.29s-7.77-39.39 8.23-66.39a60.84 60.84 0 0 0 8.39-37.56 102.32 102.32 0 0 0-3.74-18.33",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M842.5 507.93c-.43 4.7-10.2 17.55-10.2 17.55s-7.26-14.41-6.83-19.11a8.55 8.55 0 0 1 17 1.56zM854.17 535.26c-2.92 3.71-18.1 9.19-18.1 9.19s1.74-16 4.66-19.75a8.55 8.55 0 0 1 13.44 10.56zM849.47 579.7c-4.39 1.73-20.26-1.2-20.26-1.2s9.6-13 14-14.7a8.55 8.55 0 0 1 6.27 15.9zM838.34 612.5c-4 2.45-20.17 2.24-20.17 2.24s7.27-14.41 11.31-16.86a8.55 8.55 0 1 1 8.86 14.62zM818.12 543.72c3.07 3.59 18.47 8.42 18.47 8.42s-2.41-16-5.48-19.54a8.554 8.554 0 0 0-13 11.12zM805.59 582.27c4 2.5 20.14 2.51 20.14 2.51s-7.08-14.5-11.08-17a8.55 8.55 0 0 0-9.06 14.5zM798.56 621.41c3.52 3.14 19.43 5.88 19.43 5.88s-4.52-15.49-8-18.63a8.55 8.55 0 0 0-11.38 12.76z",
    fill: primaryColor
  })), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M186.63 653.29s-7.77-39.39 8.23-66.39a60.84 60.84 0 0 0 8.39-37.56 102.32 102.32 0 0 0-3.74-18.33",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M209.5 513.93c-.43 4.7-10.2 17.55-10.2 17.55s-7.26-14.41-6.83-19.11a8.55 8.55 0 0 1 17 1.56zM221.17 541.26c-2.92 3.71-18.1 9.19-18.1 9.19s1.74-16 4.66-19.75a8.55 8.55 0 0 1 13.44 10.56zM216.47 585.7c-4.39 1.73-20.26-1.2-20.26-1.2s9.6-13 14-14.7a8.55 8.55 0 0 1 6.27 15.9zM205.34 618.5c-4 2.45-20.17 2.24-20.17 2.24s7.27-14.41 11.31-16.86a8.55 8.55 0 1 1 8.86 14.62zM185.12 549.72c3.07 3.59 18.47 8.42 18.47 8.42s-2.41-16-5.48-19.54a8.554 8.554 0 0 0-13 11.12zM172.59 588.27c4 2.5 20.14 2.51 20.14 2.51s-7.08-14.5-11.08-17a8.55 8.55 0 0 0-9.06 14.5zM165.56 627.41c3.52 3.14 19.43 5.88 19.43 5.88s-4.52-15.49-8-18.63a8.55 8.55 0 0 0-11.38 12.76z",
    fill: primaryColor
  })));
};

UndrawSuccessfulPurchase.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSuccessfulPurchase;