function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawPairProgramming = function UndrawPairProgramming(_props) {
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
    viewBox: "0 0 1130.08 738.14",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 421.41,
    y1: 548.67,
    x2: 423.73,
    y2: 548.67,
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
    d: "M584.48 132.75c-71.37 12.06-142.64 6.89-211.2-.63s-136.95-17.34-208.35-14.38c-45.93 1.9-97.08 11-129.15 37.45C4.91 180.63.1 214.96.04 245.95c-.08 23.31 1.94 47.43 18.46 66 11.48 12.88 29.15 22.11 42.46 34 46.31 41.3 32.23 106.33 1.84 161.62-14.26 25.94-31.7 51.45-41.41 78s-11 55 6.38 76.65c17.22 21.47 50.53 33.57 85.26 39.84 70.54 12.74 149.13 4.83 225.17-5.89 168.29-23.81 334.84-60.93 501.03-97.96 61.49-13.71 123.25-27.48 182.49-47.24 32.9-11 66.4-24.69 87.65-46 27-27 27.68-63.93 1.66-86-43.66-37-142.48-28.79-176.25-71.09-18.58-23.29-10.49-54.92 4.3-82.86 31.71-59.92 93-119.12 85.06-178.86-5.48-41-47.29-74.93-103.33-83.77-58.74-9.26-134.18 8.3-168 49.56-34.77 42.51-105.31 70.12-168.33 80.8z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#565661",
    d: "M360 359.24h283.43v65.63H360z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M360 359.24h283.43v65.63H360z"
  }), React.createElement("path", {
    fill: "#bcbec9",
    d: "M393.91 427.03l1.99 175.21-27.26 68.82-2.11-244.03h27.38z"
  }), React.createElement("path", {
    fill: "#565661",
    d: "M362.99 371.84l275.95 1.66v48.88H362.99v-50.54z"
  }), React.createElement("path", {
    fill: "#bcbec9",
    d: "M615.33 427.03l23.61 3.33V668.4l-23.61-72.81V427.03z"
  }), React.createElement("path", {
    fill: "#efeff0",
    d: "M647.91 361.87H780.9v282.6H647.91z"
  }), React.createElement("path", {
    fill: "#565661",
    d: "M658.55 369.72h111.71v217.23H658.55z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M658.55 369.72h111.71v217.23H658.55z"
  }), React.createElement("path", {
    fill: "#565661",
    d: "M658.55 374.17h111.71v48.21H658.55zM658.55 427.03h111.71v102.4H658.55zM658.55 535.75h111.71v102.4H658.55z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M658.55 535.75h111.71v102.4H658.55z"
  }), React.createElement("ellipse", {
    cx: 663.21,
    cy: 653.67,
    rx: 7.2,
    ry: 9.2,
    fill: "#565661"
  }), React.createElement("ellipse", {
    cx: 763.06,
    cy: 654.11,
    rx: 7.2,
    ry: 9.2,
    fill: "#565661"
  }), React.createElement("path", {
    fill: "#efeff0",
    d: "M359 671.06h9.64l-2.65-306.74h-14.64L359 671.06zM638.94 361.87V668.4h8.97V364.32l-8.97-2.45z"
  }), React.createElement("path", {
    fill: "#efeff0",
    d: "M366.46 419.38v10.98h272.48v-7.98l-272.48-3z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M384.93 341.26h345.44l50.2 16.62v9.64l-430.88-3.32v-9.81l35.24-13.13z"
  }), React.createElement("path", {
    fill: "#bcbec9",
    d: "M349.69 354.39l430.88 3.49v9.64l-430.88-3.32v-9.81z"
  }), React.createElement("path", {
    d: "M423.68 549.64l-2-.3v-.25c-.06-.47-.13-.93-.2-1.4.82.65 1.6 1.3 2.32 1.95z",
    transform: "translate(-34.96 -80.93)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M345.26 623.12c1.3-.3 2.62-.55 3.94-.73a47.42 47.42 0 0 1 26.62 3.92c-.84 6.18-1.67 12.57.11 18.54 1.24 4.2 3.73 8 4.26 12.38a7.3 7.3 0 0 1 5.75 5.08 11.05 11.05 0 0 1 .57 3.56 19 19 0 0 1-.56 4.44 4.48 4.48 0 0 1-4.8 4c-7.74.88-15.33-2.17-22.53-5.16l-14-5.82c-1.64-.68-3.29-1.37-4.86-2.21a26.63 26.63 0 0 1-7.79-6.37 3.55 3.55 0 0 1-.93-1.68c-.26-1.76 1.8-2.81 3.11-4a6.23 6.23 0 0 0 1-1.22c1.55-2.34 1.7-5.57 2.63-8.33 2.2-6.55 9-10.77 11.4-17.16.13-.35.25-.7.35-1.06",
    fill: "#a26565"
  }), React.createElement("path", {
    d: "M386.51 665.87a19 19 0 0 1-.56 4.44 4.48 4.48 0 0 1-4.8 4c-7.74.88-15.33-2.17-22.53-5.16l-14-5.82c-1.64-.68-3.29-1.37-4.86-2.21a26.63 26.63 0 0 1-7.79-6.37 3.55 3.55 0 0 1-.93-1.68c-.26-1.76 1.8-2.81 3.11-4a6.23 6.23 0 0 0 1-1.22c3.86.83 8.65 3.26 11.6 4.2a35.22 35.22 0 0 1 8.44 3.53c3.68 2.36 6.33 6 9.45 9s7.15 5.73 11.5 5.36a19 19 0 0 0 6.54-2.26z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M370.12 523.76a4.63 4.63 0 0 1-1.7 5c-1.31.81-3 .7-4.3 1.58-1.61 1.13-1.84 3.37-2.12 5.31-1 6.67-4.31 12.72-7.14 18.85s-5.22 12.82-4.18 19.48c.71 4.52 2.93 9.34.85 13.41-.51 1-1.27 1.89-1.85 2.86-2.85 4.76-1.23 10.79-1.34 16.33a3.23 3.23 0 0 1-.39 1.77 4.89 4.89 0 0 1-1.58 1.22 8.38 8.38 0 0 0-3.41 6.43 24.57 24.57 0 0 0 .9 7.46 4.44 4.44 0 0 0 1.23 2.6 4.6 4.6 0 0 0 2.69.76 59.84 59.84 0 0 1 18.26 4.44c3.79 1.58 7.47 3.56 11.5 4.32a3 3 0 0 0 2.36-.25 3.25 3.25 0 0 0 1-1.73c1.55-5.1 3.12-10.36 2.59-15.66-.23-2.28-.84-4.51-1-6.79-.7-9 5.39-17.12 7.32-26 .87-4 .87-8.14 1.49-12.18 1.68-11.07 7.78-21 10.13-31.95a34.73 34.73 0 0 1 1.52-6c1.75-4.24 5.8-7.68 5.89-12.27a4.78 4.78 0 0 0-.76-2.86 6.48 6.48 0 0 0-3.57-2 121.87 121.87 0 0 0-16.55-3.34 31.35 31.35 0 0 0-7.78-.54 22.9 22.9 0 0 0-9.52 3.36c-3.86 2.38-1.38 2.95-.54 6.39z",
    fill: "#454b69"
  }), React.createElement("path", {
    d: "M370.12 523.76a4.63 4.63 0 0 1-1.7 5c-1.31.81-3 .7-4.3 1.58-1.61 1.13-1.84 3.37-2.12 5.31-1 6.67-4.31 12.72-7.14 18.85s-5.22 12.82-4.18 19.48c.71 4.52 2.93 9.34.85 13.41-.51 1-1.27 1.89-1.85 2.86-2.85 4.76-1.23 10.79-1.34 16.33a3.23 3.23 0 0 1-.39 1.77 4.89 4.89 0 0 1-1.58 1.22 8.38 8.38 0 0 0-3.41 6.43 24.57 24.57 0 0 0 .9 7.46 4.44 4.44 0 0 0 1.23 2.6 4.6 4.6 0 0 0 2.69.76 59.84 59.84 0 0 1 18.26 4.44c3.79 1.58 7.47 3.56 11.5 4.32a3 3 0 0 0 2.36-.25 3.25 3.25 0 0 0 1-1.73c1.55-5.1 3.12-10.36 2.59-15.66-.23-2.28-.84-4.51-1-6.79-.7-9 5.39-17.12 7.32-26 .87-4 .87-8.14 1.49-12.18 1.68-11.07 7.78-21 10.13-31.95a34.73 34.73 0 0 1 1.52-6c1.75-4.24 5.8-7.68 5.89-12.27a4.78 4.78 0 0 0-.76-2.86 6.48 6.48 0 0 0-3.57-2 121.87 121.87 0 0 0-16.55-3.34 31.35 31.35 0 0 0-7.78-.54 22.9 22.9 0 0 0-9.52 3.36c-3.86 2.38-1.38 2.95-.54 6.39z",
    opacity: 0.05
  }), React.createElement("path", {
    fill: "#565661",
    d: "M350.55 674.47h-8.53l-5.58-114.64-.39-6.52 7.25-2.55.49 6.93 6.76 116.78z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M343.79 557.69l-7.35 2.14-.39-6.52 7.25-2.55.49 6.93z"
  }), React.createElement("path", {
    fill: "#565661",
    d: "M457.58 698.72l-14.07 1.7-64.82-147.11-17.48-1.28-30.7 8.96-5.97 175.15h-14.07l5.54-181.55-33.69.86-60.12 149.66h-12.79l63.23-174.91 2.44-6.74 94.23-3.23 23.49 13.17.3.76 64.48 164.56z"
  }), React.createElement("path", {
    d: "M393.1 534.16c-20.25 6.1-41.27 12.76-41.27 12.76s-19.17 6.69-27.29 0a12.27 12.27 0 0 0-3.39-1.87 16.7 16.7 0 0 0 3.39 1.87l-51.9-16.73 2.43-6.73 94.24-3.23 23.49 13.17z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M297.25 505.13l38.37-8.53s91.68 17.06 98.5 23.88c0 0-73.34 14.92-81.44 20s-56.29 10.7-55.43-35.35z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M280.75 409.24c-3 9.51-11.19 18.08-21.16 18.49a3.69 3.69 0 0 1-2.11-.38c-1.25-.78-1.28-2.61-.77-4s1.4-2.64 1.54-4.1a2.68 2.68 0 0 0-.06-.89c-.26-1.19-1.23-2.25-2.37-2a4 4 0 0 0 .85-5.31 12 12 0 0 1-1.22-1.64c-.83-1.7.46-3.61 1-5.43 1.11-4-1.71-8-1.94-12.17-.2-3.73 1.69-7.24 2.16-10.94.75-6-2.23-11.75-2.58-17.74-.24-4.18.79-8.32 1.94-12.35 1-3.6 2.13-7.24 2.2-11 0-2.73-.47-5.43-.6-8.15a14.19 14.19 0 0 1 1.31-7.24 5.79 5.79 0 0 1 3.29-2.81c3.28-1.1 5.43.61 5.91 3.72.8 5.29.34 10.69 1.39 16a75 75 0 0 0 4.39 14.49c1.77 4.22 3.92 8.3 5.28 12.67a69.8 69.8 0 0 1 2.19 11c1.34 9.99 2.39 20.27-.64 29.78z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M508.51 651.28a15.51 15.51 0 0 1-10.93 6.44c-4.34.54-8.85-.55-13.06.64a4 4 0 0 0-3 2.31 24.54 24.54 0 0 0-.19 2.45c-.49 2.67-4 3.27-6.73 3.25l-11.26-.07c-2.34 0-4.93-.13-6.61-1.75a4.92 4.92 0 0 1-.1-6.48 4.07 4.07 0 0 1 1.26-1 4 4 0 0 1-2.7-3.21 11.94 11.94 0 0 1 .21-4.41c0-4.18 1-11.18 3.94-14.45 3.61-4.07 9.87-9.33 15.32-10.42a12 12 0 0 1 10.38 2.95c2.58 2.4 4.46 6.16 8 6.58 1.93.24 3.79-.67 5.7-1a10.61 10.61 0 0 1 10.81 5.71 11.26 11.26 0 0 1 1 3.13 13 13 0 0 1-2.04 9.33z",
    fill: "#a26565"
  }), React.createElement("path", {
    d: "M508.51 651.28a15.51 15.51 0 0 1-10.93 6.44c-4.34.54-8.85-.55-13.06.64a4 4 0 0 0-3 2.31 24.54 24.54 0 0 0-.19 2.45c-.49 2.67-4 3.27-6.73 3.25l-11.26-.07c-2.34 0-4.93-.13-6.61-1.75a4.92 4.92 0 0 1-.1-6.48c6.5-.27 12.89 0 19.37-1.34 2.63-.53 5.22-1.23 7.88-1.6 5.76-.82 11.89-.12 17.18-2.56 4.41-2 7.57-6.07 9.44-10.61a13 13 0 0 1-1.99 9.32z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M478.8 635.47c-4 3.1-8.69 5.52-13.73 5.78s-10.39-2-12.86-6.38c-3.61-6.43-.41-15.37-4.83-21.27-1.38-1.85-3.37-3.16-4.83-4.95s-2.3-4.48-1-6.38c-1.57.6-3.23-.92-3.69-2.54s-.17-3.36-.45-5c-.73-4.35-5-7.14-7.05-11s-1.77-8.87-2-13.44a51 51 0 0 0-11.8-30.35c-1.36-1.62-3.1-3.27-5.22-3.19.37-3.66-2.07-7.16-5.23-9s-6.92-2.46-10.58-2.82c-36.93-3.64-75.41 10.09-110.67-1.46-9.81-3.21-19.27-8.58-25.27-17a29.72 29.72 0 0 1-5.29-22.48v-.14c1.39-7.1 5.14-8.85 11.35-12.09a136.24 136.24 0 0 1 22.39-9.39c15-4.69 31.15-6.38 46.63-2.94 7.23 1.62 14.2 4.3 21.44 5.87 2.85.62 5.72 1.06 8.61 1.43 4.49.56 9 .93 13.52 1.45a204.53 204.53 0 0 1 42.46 9.55c5.13 1.74 10.26 3.73 14.67 6.88a32.5 32.5 0 0 1 13.04 21.46c.42 2.94.43 6 1.07 8.85a45 45 0 0 0 2.4 7 465.63 465.63 0 0 1 20.89 65 15.79 15.79 0 0 0 1.67 4.7c1.28 2.07 3.48 3.46 4.77 5.53 3 4.88.11 11.69 2.77 16.77.92 1.76 2.45 3.15 3.37 4.91 3 5.77-1.43 12.67-6.55 16.64z",
    fill: "#454b69"
  }), React.createElement("path", {
    d: "M427.7 520.57a16.5 16.5 0 0 0 3.63-4 7.46 7.46 0 0 0 1.1-5.17 14.79 14.79 0 0 1-3.89 12.72c-2.51 2.57-7.22 5.09-10.89 4.21.52-2.94 7.72-5.78 10.05-7.76zM365.22 470.73a6.71 6.71 0 0 1-4.44 4.58 18.5 18.5 0 0 1-6.59.77h-2c-26.24-.58-52.76-6.4-78.39-.85a56.76 56.76 0 0 0-9.06 2.67 40.9 40.9 0 0 0-10.41 6v-.14c1.39-7.1 5.14-8.85 11.35-12.09a136.24 136.24 0 0 1 22.36-9.3c15-4.69 31.15-6.38 46.63-2.94 7.23 1.62 14.2 4.3 21.44 5.87 2.85.62 5.72 1.06 8.61 1.43a6.91 6.91 0 0 1 .5 4z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M365.22 469.3a6.7 6.7 0 0 1-4.44 4.59 18.27 18.27 0 0 1-6.59.76h-2c-26.24-.58-52.76-6.4-78.39-.85a57.78 57.78 0 0 0-9.06 2.66 41.2 41.2 0 0 0-10.85 6.4q-1.15-3.16-2.29-6.33c-.92-2.52 2-3.08 2.56-5.34.37-1.53-.26-3.27-.58-4.9a8.55 8.55 0 0 1-.16-1.21c-.18-3.61 1.11-5.69 4.07-7.64 8.78-5.8 19.49-9.78 29.51-12.77a73 73 0 0 1 16.4-3.18c7.88-.46 15.75 1 23.42 2.85 9.43 2.33 18.76 5.41 27.12 10.34 4.1 2.39 8.1 5.39 10.31 9.65a7.6 7.6 0 0 1 .97 4.97z",
    fill: "#a26565"
  }), React.createElement("path", {
    d: "M280.75 409.24c-3 9.51-11.19 18.08-21.16 18.49a3.69 3.69 0 0 1-2.11-.38c-1.25-.78-1.28-2.61-.77-4s1.4-2.64 1.54-4.1a2.68 2.68 0 0 0-.06-.89c5.29-7.46 10.42-15 12.45-23.83a12.74 12.74 0 0 0 .37-4.67c-.27-1.8-1.18-3.43-1.68-5.17-.88-3.08-.47-6.34-.22-9.53a88 88 0 0 0-6.84-41.09c-1.35-3.12-2.89-6.28-3.36-9.61a5.79 5.79 0 0 1 3.29-2.81c3.28-1.1 5.43.61 5.91 3.72.8 5.29.34 10.69 1.39 16a75 75 0 0 0 4.39 14.49c1.77 4.22 3.92 8.3 5.28 12.67a69.8 69.8 0 0 1 2.19 11c1.37 9.92 2.42 20.2-.61 29.71zM365.22 469.3a6.7 6.7 0 0 1-4.44 4.59 18.27 18.27 0 0 1-6.59.76h-2a43.57 43.57 0 0 0-29-7c-3.26.39-6.52 1.15-9.78.85-6.59-.6-11.93-5.34-17.8-8.37a37.38 37.38 0 0 0-41.43 5.62l-.57.5a8.55 8.55 0 0 1-.16-1.21c-.18-3.61 1.11-5.69 4.07-7.64 8.78-5.8 19.49-9.78 29.51-12.77a73 73 0 0 1 16.4-3.18c7.88-.46 15.75 1 23.42 2.85 9.43 2.33 18.76 5.41 27.12 10.34 4.07 2.43 8.07 5.43 10.28 9.69a7.6 7.6 0 0 1 .97 4.97z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M387.65 359.76l-.14.36c-2.24 5.81-6.36 10.72-9 16.38-3.33 7.17-4.15 15.21-4.89 23.09-.64 6.75-1.27 13.54-.76 20.31 1.28 16.68 9.43 32.5 11.61 48.86a54.31 54.31 0 0 1 .41 11.41c-.18 2.41-.62 5-2.22 6.78s-4.71 2.48-6.43.77c.77-1.47 1.55-2.93 2.33-4.4-4.57-3.55-11.45-1-16.79-3.22-2.35-1-4.23-2.8-6.2-4.41a43.48 43.48 0 0 0-32.39-9.46c-3.26.4-6.52 1.16-9.78.86-6.59-.61-11.93-5.34-17.8-8.37a37.4 37.4 0 0 0-41.43 5.61c-1.4 1.3-3.28 2.82-5 2a4.16 4.16 0 0 1-1.55-1.69c-6.55-11.19-1.73-25.62 5.27-36.52s16.27-20.95 19.15-33.58a12.53 12.53 0 0 0 .37-4.67c-.27-1.8-1.18-3.43-1.68-5.17-.88-3.08-.47-6.34-.22-9.53a88 88 0 0 0-6.82-41.1c-1.6-3.73-3.5-7.51-3.5-11.56 0-6.38 4.57-11.67 8.35-16.8 4.35-5.9 8-12.43 13.51-17.28 5.22-4.61 12.78-7.43 19.24-5.09a119.94 119.94 0 0 1 33.56-3.27c3.9.18 7.93.59 11.35 2.48 3.66 2 6.29 5.56 9.89 7.69 2.63 1.57 5.66 2.31 8.52 3.41a35.21 35.21 0 0 1 18.36 16.42c4 7.75 5 16.66 5.88 25.34.84 8.17 1.64 16.66-1.2 24.35z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M372.86 419.9c1.28 16.68 9.43 32.5 11.61 48.86-4.36-3.69-10.43-7.4-11.24-11.69-.9-4.64-3.78-10.72-4.26-15.41s2.81-10.42-.64-13.64c-1.68-1.57 2.79-1.13 1.15-2.74-3.69-3.59-4.6-9.12-4.83-14.25-.39-9.08.76-18.26-.91-27.19-1-5.51-3.09-10.76-4.76-16.11-1.94-6.23-3.34-12.61-4.74-19a133.12 133.12 0 0 1-3-17.26c-.43-5-.23-10.3 2-14.86s6.74-8.26 11.8-8.19c16.92.22 14 23.16 17.72 33.76 1.49 4.22 3.5 8.3 4.31 12.7a33.66 33.66 0 0 1 .48 5.22c-2.24 5.81-6.36 10.72-9 16.38-3.33 7.17-4.15 15.21-4.89 23.09-.68 6.77-1.31 13.56-.8 20.33z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M383.86 341.92c1.49 4.22 3.5 8.3 4.31 12.7 1.35 7.37-.74 15.2 1.53 22.34a38.92 38.92 0 0 1 1.48 4.67c.39 2.27-.06 4.59-.06 6.9 0 3.72 1.17 7.32 2.21 10.89a194.63 194.63 0 0 1 6.95 37.16 46.59 46.59 0 0 0 1.59 10 33.21 33.21 0 0 1 1.08 3.38 17.48 17.48 0 0 1 .19 4.63c-.27 4.9-.82 9.82-.27 14.7s2.33 9.83 6 13.1c-3.28.71-6.75 1.42-9.95.37-4.5-1.47-7.2-6-9.49-10.12-2.9-5.26-13.92-10-15.06-15.91-.89-4.63-3.77-10.71-4.25-15.41s2.8-10.41-.65-13.63c-1.67-1.57 2.8-1.14 1.15-2.74-3.68-3.59-4.59-9.12-4.82-14.26-.39-9.07.75-18.25-.91-27.18-1-5.51-3.09-10.76-4.76-16.12-1.94-6.22-3.34-12.6-4.74-19a131.73 131.73 0 0 1-3-17.26c-.43-5-.24-10.31 2-14.87s6.75-8.25 11.8-8.19c16.85.3 13.95 23.25 17.67 33.85z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M335.64 345.83c1.58 1.85 3.61 3.88 6 3.52a1.3 1.3 0 0 1-1.77.42 3.8 3.8 0 0 1-1.33-1.53l-3.42-5.77c-.45-.75-3.55-5.12-4.31-2.6-.3 1.07 4.06 5.06 4.83 5.96zM333.8 360.22a7.62 7.62 0 0 0-2.23-5 12.5 12.5 0 0 0-4.13-2.49c-3.75-1.54-8.19-2.78-12.26-2.58 1.48 2.16 6.23 3.45 8.61 4.67q5.06 2.61 10.01 5.4zM344.45 401.18c-.69 5.12-4.88 9-9.12 12s-9 5.58-11.77 9.92c-1.92 3-2.78 6.48-4.41 9.61-1.8 3.45-4.49 6.35-6.64 9.59s-3.83 7.11-3.17 10.95a1.29 1.29 0 0 0 .46.92 1.31 1.31 0 0 0 1.27-.14c4.36-2.28 6.08-7.49 7.91-12a138.65 138.65 0 0 1 6.48-13.32c1.08-2 2.27-4.18 4.28-5.29a37.55 37.55 0 0 1 4.22-1.47 14.19 14.19 0 0 0 5.21-4.09 34.34 34.34 0 0 0 8-23.31c-.06-1.79-.16-10.41-2.85-7.75s.59 10.9.13 14.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M351.04 204.81c8.6 3.75 16 12 15.73 21.35-.23 9.82-8.45 19.07-5.62 28.48 1.64 5.46 6.58 9.12 10.49 13.27 14.89 15.76 14.86 43.27-.08 59-5.72 6-13.07 10.27-19.12 16-21.33 20.1-22.24 54.87-10.82 81.86a133.14 133.14 0 0 1-26.62 3c-4.19 0-9.32-.71-10.84-4.62-1.4-3.61 1-8.49-1.76-11.16-1.3-1.25-3.25-1.42-5-1.71-11.26-1.82-20.5-10.81-24.72-21.4s-4-22.51-1.58-33.65c1.72-8.05 4.41-16.91.42-24.11-5-9.06-19.38-12.88-19.16-23.24.18-8.49 10.19-12.62 15.87-18.93 10.48-11.62 5.49-29.65 5.47-45.31 0-13.78 4.82-28 15.08-37.18 15.26-13.77 44.65-9.3 62.26-1.65z",
    fill: "#a26565"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M273.16 320.85c-4.39-7.92-15.92-11.84-18.6-19.63a11.09 11.09 0 0 0-2.16 6.26c-.22 10.36 14.14 14.18 19.16 23.25a18.89 18.89 0 0 1 2 10.42c1.58-6.96 2.97-14.22-.4-20.3zM362.3 241.82c1.8-5.25 4.41-10.55 4.54-16a15 15 0 0 0-.05-1.77c-2.01 6.02-5.09 11.86-4.49 17.77zM274.88 269.79c3.44-10.87.47-24.35.46-36.41 0-1.46.06-2.93.17-4.39a57.74 57.74 0 0 0-1.78 14.26c.02 8.61 1.53 17.95 1.15 26.54zM373.23 316.68c-5.72 6-13.07 10.27-19.12 16-10.8 10.17-16.35 24.1-17.74 38.87 2.58-11 7.79-21.13 16.14-29 6-5.7 13.4-9.95 19.12-16a42.49 42.49 0 0 0 11.15-27.06 40.61 40.61 0 0 1-9.55 17.19zM316.67 417.51c-4.19 0-9.32-.72-10.84-4.63-1.4-3.6 1-8.48-1.76-11.16-1.3-1.25-3.26-1.42-5-1.71-11.25-1.81-20.49-10.81-24.71-21.39-3.11-7.82-3.78-16.35-3-24.77-.08.33-.15.66-.22 1-2.38 11.14-2.63 23.07 1.58 33.66s13.46 19.58 24.71 21.39c1.78.29 3.74.47 5 1.71 2.79 2.68.36 7.56 1.76 11.16 1.52 3.91 6.65 4.68 10.84 4.63a133.23 133.23 0 0 0 26.62-3 89.38 89.38 0 0 1-3.23-8.93 132.74 132.74 0 0 1-21.75 2.04z"
  })), React.createElement("path", {
    d: "M349.42 373.9c2.47 1.86 5.15-5.23 3.62-7-.41.46-4 6.74-3.62 7zM359.95 502.24c2.91-1 6-2 7.9-4.4 1.57-1.93 2.86-9.59-.46-5.92-2.82 3.15-4.15 7.3-7.44 10.32zM389.58 494.21c-.35 2.36-1 4.81-2.67 6.51-.31.32-1 .52-1.09.09a25.29 25.29 0 0 0 5.16-3.64c3.38-3.35 3.84-11.6-1.31-13.79-.05 3.62.46 7.15-.09 10.83z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M425.15 479.34s-28.38-11.15-38.64-10 11.62 17.32 11.62 17.32l13.08 8.82s8-3 8.53-3.23 5.41-12.91 5.41-12.91z",
    fill: "#454b69"
  }), React.createElement("path", {
    d: "M229.88 359.72s21.32-12.36 49.46 3 32.83 105.75 32.83 105.75-11.51 92.09 32.87 71.6c0 0 81-25.15 89.11-19.61 0 0 7.68 0-7.67 3.41s-74.65 22.2-74.65 22.2-19.17 6.7-27.29 0-31.13.86-34.12-45.2a801 801 0 0 0-10.66-86.56l-7.91-23.45z",
    fill: "#565661"
  }), React.createElement("path", {
    d: "M227.32 502.14s9.38-93.38-6-127.07c-13.38-29.36 38.36-15.63 51.86-11.63a9.83 9.83 0 0 1 5.18 3.7c8 11.25 36.7 56.34 28.24 116.67 0 0-3.41 53.73 17.91 62.25l-65.69-21.16c-5.33-1.72-10.74-3.15-16.2-4.39-6.96-1.58-18.3-6.07-15.3-18.37z",
    fill: "#fff"
  }), React.createElement("path", {
    fill: "#565661",
    d: "M694.53 676.47h8.53l5.59-114.64.38-6.52-7.25-2.55-.48 6.93-6.77 116.78z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M701.3 559.69l7.35 2.14.38-6.52-7.25-2.55-.48 6.93z"
  }), React.createElement("path", {
    d: "M623.31 632.2a19.23 19.23 0 0 1-1.2 4.58 8.09 8.09 0 0 1-3.65 4.56 9.64 9.64 0 0 1-3.69.73c-4.71.28-9.69.21-13.74-2.19a25 25 0 0 1-4.71-3.93 214.9 214.9 0 0 1-24.72-29.4c-1.23-1.77-2.5-3.86-1.95-6a93.21 93.21 0 0 0 26.77-12.25 12.92 12.92 0 0 1 3.76-2 20.43 20.43 0 0 1 7.06-.26c2.27.37 2.37.44 3.24 3 1.44 4.33 1.2 9 2.82 13.33a41.3 41.3 0 0 0 3.74 6.84c4.18 6.99 7.39 15.24 6.27 22.99z",
    fill: "#a26565"
  }), React.createElement("path", {
    d: "M623.31 632.2a19.23 19.23 0 0 1-1.2 4.58 8.09 8.09 0 0 1-3.65 4.56 9.64 9.64 0 0 1-3.69.73c-4.71.28-9.69.21-13.74-2.19a25 25 0 0 1-4.71-3.93 214.9 214.9 0 0 1-24.72-29.4c-1.23-1.77-2.5-3.86-1.95-6a92.81 92.81 0 0 0 9.16-3.06l.15.11c3.07 2.19 5.3 5.33 7.47 8.41l7 9.85a29 29 0 0 0 4.39 5.3 29.38 29.38 0 0 0 6.79 4.08c3.29 1.59 6.58 3.18 10 4.46 2.21.89 5.95 1.24 8.7 2.5z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M629.77 525.41a30.1 30.1 0 0 1-2.5 4.77 204.16 204.16 0 0 0-21.32 49.89c-1.38-.31-2.16 1.57-2.15 3s0 3.23-1.32 3.75c-.39.15-.83.15-1.21.32-.84.38-1.08 1.45-1.2 2.37l-1.18 8.66c-.41 3-.77 6.25.7 8.9a14.23 14.23 0 0 0 3.87 4l19.52 15.4c.8.63 1.79 1.3 2.75.95 2.19-.8.25-4.72 2-6.31 1.16-1.09 3-.27 4.61-.4 2.1-.16 3.69-2.09 4.22-4.12a19.59 19.59 0 0 0 .11-6.26 5.68 5.68 0 0 1 .32-2.81 6.82 6.82 0 0 1 2.39-2.29 25.66 25.66 0 0 0 10.51-21.64 12 12 0 0 1 .14-3.83 10.09 10.09 0 0 1 1.81-3.16c7.09-9.59 13-20 18.87-30.39 3.38-6 6.82-12.09 8-18.85a1.75 1.75 0 0 0-1.44-2.4 68 68 0 0 0-8.94-2.14c-9.19-1.86-18.06-4.73-27-7.49s-8.87 2.86-11.56 10.08z",
    fill: "#454b69"
  }), React.createElement("path", {
    fill: "#565661",
    d: "M587.5 700.72l14.08 1.7 64.81-147.11 17.48-1.28 30.71 8.96 5.96 175.15h14.07l-5.54-181.55 33.69.86 60.12 149.66h12.79L772.44 532.2l-2.43-6.74-94.24-3.23-23.49 13.17-.3.76-64.48 164.56z"
  }), React.createElement("path", {
    d: "M651.98 536.16c20.25 6.1 41.27 12.76 41.27 12.76s19.17 6.69 27.29 0a12.27 12.27 0 0 1 3.39-1.87 16.7 16.7 0 0 1-3.39 1.87l51.9-16.73-2.4-6.73-94.24-3.23-23.49 13.17z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M747.83 507.13l-38.37-8.53s-91.68 17.06-98.5 23.88c0 0 73.34 14.92 81.44 20s56.29 10.7 55.43-35.35z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M605.45 644.21c-2.31 4.4-8 5.64-13 5.71a54.89 54.89 0 0 1-20.32-3.63c-3.7-1.42-7.25-3.25-11.07-4.29-5.69-1.56-12-1.43-17-4.56a20 20 0 0 1-6.39-6.93c-.29-.49-.57-1-.83-1.52-2.39-4.65-3.5-10.06-2.17-15.08s6.16-10.55 11.76-10.47c6.65.1 14.58 3.25 21 4.88 8 2 16 4.31 23.07 8.54 5.92 3.56 11.15 8.67 13.94 14.91a25.27 25.27 0 0 1 1.32 3.72c.87 2.88 1.07 6.09-.31 8.72z",
    fill: "#a26565"
  }), React.createElement("path", {
    d: "M605.45 644.21c-2.31 4.4-8 5.64-13 5.71a54.89 54.89 0 0 1-20.32-3.63c-3.7-1.42-7.25-3.25-11.07-4.29-5.69-1.56-12-1.43-17-4.56a20 20 0 0 1-6.39-6.93c-.29-.49-.57-1-.83-1.52 1 .08 1.92.18 2.42.23 6.14.59 12 2.83 17.86 4.52a100.32 100.32 0 0 0 25 3.9c6 .17 12.26-.27 17.5-3.2a45.91 45.91 0 0 1 4.86-2.67 25.27 25.27 0 0 1 1.32 3.72c.83 2.88 1.03 6.09-.35 8.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M648.42 454.07c-13-2.13-26.24-2.65-39.42-3.17l-16.12-.64a7.31 7.31 0 0 0-3.39.41 22.09 22.09 0 0 0-2.65 2c-1.62 1.1-3.69 1.22-5.64 1.33a280.77 280.77 0 0 0-41.16 5.34c-7 1.43-14.27 3.3-19.53 8.13-5.56 5.11-8 12.9-8.19 20.44s1.79 14.95 3.88 22.19a101.09 101.09 0 0 1 4.37 26.86 50.25 50.25 0 0 0 .29 7.57 36.22 36.22 0 0 0 2.11 7l7.36 19.65c.65 1.72 1.29 3.43 2 5.11s1.39 3 2 4.58c.9 2.16 1.61 4.4 2.32 6.63l4.9 15.39.64 2c1.77 5.54 3.58 11.18 6.92 15.94s8.51 8.6 14.32 8.89a43.86 43.86 0 0 1 5.62.15 22.72 22.72 0 0 1 4.61 1.67 35.17 35.17 0 0 0 13.77 2.69c4.35 0 9.18-1.21 11.54-4.87 1.3-2 1.64-4.46 2-6.82.63-4.74 1.24-9.69-.37-14.19-1-2.69-2.68-5-3.84-7.65-1.62-3.61-2.15-7.6-3.2-11.41a43.58 43.58 0 0 0-13.3-21.16 208.58 208.58 0 0 1-5-27.38 24.09 24.09 0 0 0-1.21-6c-1.17-3-3.54-5.43-4.53-8.49-.93-2.84-.65-6.12-2.34-8.57 14.07 3.87 28 3 42.61 2.77a116.42 116.42 0 0 0 14-.8 44 44 0 0 1 6.56-.7c4.52 0 8.76 2 12.91 3.76 11.73 5 24.09 8.93 36.83 9.47 13.15.55 26.15-2.54 39-5.6 5.65-1.35 11.52-2.81 16-6.52s7-10.4 4.24-15.49c-2.1-3.83-6.45-5.71-10.51-7.31-11.24-4.44-22.54-8.77-33.37-14.14-16.54-8.06-28.91-26.06-47.03-29.06z",
    fill: "#454b69"
  }), React.createElement("path", {
    d: "M625.24 408.83c-1.57 3.4-4.21 6.18-6.16 9.38a23.77 23.77 0 0 0-3 17.65 20.08 20.08 0 0 0 11.25 13.69 28.23 28.23 0 0 0 7.8 1.88c3.52.43 7.27.52 10.38-1.18a15.16 15.16 0 0 0 5.53-5.78c2.69-4.5 4.22-9.57 5.62-14.62 2.59-9.32 4.8-18.88 4.48-28.55-.11-3.33-.77-7.08-3.53-9a11.87 11.87 0 0 0-4.64-1.52l-13.19-2.36c-2.55-.46-7-2.33-9.21-.49s-2.38 7.28-2.76 9.83c-.6 3.77-.97 7.6-2.57 11.07zM785.57 370.15l-3.45 28.92a133 133 0 0 0-1.23 15.56c0 2.9.09 6.12-1.83 8.29a7.56 7.56 0 0 1-3.44 2.07c-4.19 1.3-8.76.14-12.76-1.65-2.34-1-4.73-2.45-5.79-4.78a11.88 11.88 0 0 1-.75-5.07c0-17.25 1.63-35.24 10.64-49.94a10.89 10.89 0 0 1 3.17-3.66c2.5-1.6 5.77-1.15 8.6-.28 1.74.53 6.44 1.12 7.55 2.67s-.47 5.88-.71 7.87z",
    fill: "#a1616a"
  }), React.createElement("circle", {
    cx: 694.04,
    cy: 229.57,
    r: 36,
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M684.41 283.22a18.57 18.57 0 0 1-2.23 8q27.57-4.2 55-9.36a25.83 25.83 0 0 1-12.76-15 42.36 42.36 0 0 1-1.62-10.69 123.57 123.57 0 0 1 .33-17.21c-6.4.67-12.46 3.07-18.56 5.13a183 183 0 0 1-18.69 5.23c-3.05.68-6.12 1.26-9.2 1.8-3.6.64-5.33.63-2.83 3.79 6.71 8.44 11.5 17.02 10.56 28.31z",
    fill: "#a1616a"
  }), React.createElement("path", {
    d: "M695.47 278.41c-4.75.71-9.73 1.51-13.52 4.45a51 51 0 0 0-4.11 3.95c-7.53 7.31-18.16 10.25-27.3 15.41a12 12 0 0 0-3.88 3.05c-1 1.39-1.51 3.16-2.56 4.54-1.22 1.6-3.15 2.6-4.1 4.37s-.74 3.65-.84 5.53c-.23 4.13-1.79 8.05-3 12-5.55 18.91-2.51 40-10.91 57.86a8.13 8.13 0 0 0 4.42 4.62 25.1 25.1 0 0 0 6.56 1.41l18.61 2.31c2.66.33 5.48.64 7.91-.47a92.94 92.94 0 0 0-4.69 18.93 94.28 94.28 0 0 1-2.1 11.72c-2.56 8.8-9 16.13-16.63 21.14a6.15 6.15 0 0 0-2.35 2.17c-1 2 .48 4.24 1.53 6.2 3.05 5.68 2.63 12.5 2.59 18.94s.61 13.51 5.11 18.13c2.66 2.73 6.3 4.21 9.84 5.62l29.11 11.63a101.45 101.45 0 0 0 14.82 5c7.67 1.75 15.64 1.68 23.51 1.34q7.8-.33 15.58-1a12.12 12.12 0 0 0 5.89-1.55 11 11 0 0 0 3.45-4.68c4.05-8.81 5.41-19.09 11.69-26.47 4.31-5.07 11-9.12 11.49-15.75.23-3.3-1.24-6.51-1.26-9.82 0-4.07 2.13-7.94 2-12-.27-6.61-6.5-11.65-7.49-18.19-2.52-16.58 5.9-33.14 11.07-49.09.93-2.85 2.13-6 4.87-7.22s6.6-.58 7.58-3.28c2.47-6.78 3.06-14.73 2.74-21.94-.18-4.17-1.66-8.25-1.49-12.43.12-2.94 1.06-5.8 1.31-8.73.38-4.43-.79-8.83-2-13.11a20.54 20.54 0 0 0-1.56-4.42 21 21 0 0 0-2.6-3.57l-4.87-5.79c-2.28-2.71-4.69-5.52-8-6.89-1.07-2.65-4.49-4.48-6.94-5.94a71.12 71.12 0 0 0-7.64-3.75l-27.54-12.16a11.28 11.28 0 0 0-3.27-1.06 10.59 10.59 0 0 0-4.86 1c-8.4 3.33-17.17 6.65-26.17 7.99z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M666.3 235.83c-1.06-3.73-3.77-6.95-4.18-10.81-.37-3.43 1.14-6.75 2-10.09s.83-7.42-1.82-9.64c-.44-.38-1-.72-1.16-1.28-.32-1 .69-1.91 1-2.92.57-2-1.9-4.21-1-6.13.51-1.05 1.79-1.42 2.91-1.75 4.28-1.27 8.62-4.09 9.55-8.46 3.35 1.4 6.92-1.23 9.49-3.78s5.73-5.46 9.27-4.69l-.79 1.61a25.6 25.6 0 0 1 16.93-.19h-1.68a23.22 23.22 0 0 1 13.39 4.53c-.43 0-.47.64-.3 1 1.4 3.27 5 5 8.47 5.81 2.09.5 4.36.86 5.89 2.36s1.56 4.63-.46 5.35a52.6 52.6 0 0 1 11.61 6.3c1 .73 2.13 1.72 2 3a9.76 9.76 0 0 1-.62 1.87 6.47 6.47 0 0 0 .21 3.2l1.11 4.58c1.22 5.09 2.18 11.22-1.53 14.91a13.69 13.69 0 0 1-2.41 16.16 6.66 6.66 0 0 1-5 8.61c1.23 1.92.1 4.66-1.84 5.86s-4.38 1.21-6.64 1-4.55-.72-6.81-.38c-3.29.51-6.51 2.75-9.68 1.75a21.73 21.73 0 0 1-3.39-1.82c-2.22-1.19-4.8-1.46-7.26-2a33.54 33.54 0 0 1-11.73-5 13.75 13.75 0 0 1-5.39-6c-2.2-5.56 1.5-12.85-2.39-17.38-2.28-2.64-6.8-2.68-9.35-.42-1.27 1.13-1.44 3.51-2.76 4.36a17.45 17.45 0 0 1-5.64.48z",
    fill: "#464353"
  }), React.createElement("path", {
    d: "M617.38 522.57a16.5 16.5 0 0 1-3.63-4 7.46 7.46 0 0 1-1.1-5.17 14.79 14.79 0 0 0 3.89 12.72c2.51 2.57 7.22 5.09 10.89 4.21-.52-2.94-7.72-5.78-10.05-7.76z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M815.2 361.72s-21.32-12.36-49.46 3-32.83 105.75-32.83 105.75 11.51 92.09-32.87 71.6c0 0-81-25.15-89.11-19.61 0 0-7.68 0 7.67 3.41s74.65 22.2 74.65 22.2 19.17 6.7 27.29 0 31.13.86 34.12-45.2a801 801 0 0 1 10.66-86.56l7.91-23.45z",
    fill: "#565661"
  }), React.createElement("path", {
    d: "M817.76 504.14s-9.38-93.38 6-127.07c13.38-29.36-38.36-15.63-51.86-11.63a9.83 9.83 0 0 0-5.18 3.7c-8 11.25-36.7 56.34-28.24 116.67 0 0 3.41 53.73-17.91 62.25l65.69-21.16c5.33-1.72 10.74-3.15 16.2-4.39 6.96-1.58 18.3-6.07 15.3-18.37z",
    fill: "#fff"
  }), React.createElement("ellipse", {
    cx: 989.97,
    cy: 670.07,
    rx: 97.44,
    ry: 15.65,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#535461",
    d: "M986.83 370.26h6.27v141.17h-6.27z"
  }), React.createElement("path", {
    d: "M1032.51 511l-.39 6.36-.56 9-.23 3.74-.55 9-.24 3.74-.56 9-6.32 102.07a17.3 17.3 0 0 1-17.26 16.16h-32.87a17.28 17.28 0 0 1-17.24-16.22l-6.34-102.08-.55-9-.23-3.74-.57-9-.23-3.74-.55-9-.4-6.36a9 9 0 0 1 8.94-9.51h67.22a9 9 0 0 1 8.93 9.58z",
    fill: "#565661"
  }), React.createElement("path", {
    fill: "#9d9cb5",
    d: "M1032.12 517.36l-.56 8.97h-83.18l-.56-8.97h84.3zM1031.33 530.08l-.55 8.98h-81.61l-.56-8.98h82.72zM1030.54 542.8l-.56 8.97h-80.02l-.56-8.97h81.14z"
  }), React.createElement("path", {
    d: "M938.24 423.17c36.52 26.42 51.73 67.74 51.73 67.74s-44-1.51-80.53-27.93-51.72-67.73-51.72-67.73 44.01 1.51 80.52 27.92z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M857.72 395.25s45.67 25.35 60.33 46.34 71.92 49.32 71.92 49.32",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M961.81 369.95c19.88 14.37 28.16 36.87 28.16 36.87s-24-.83-43.83-15.2-28.1-36.87-28.1-36.87 23.9.82 43.77 15.2z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M918.04 354.75s24.86 13.8 32.83 25.22 39.15 26.85 39.15 26.85",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M1018.85 405.67c-22.83 25.09-27.66 57.88-27.66 57.88s32.19-7.9 55-33 27.66-57.88 27.66-57.88-32.17 7.91-55 33z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M1073.87 372.68s-29.74 25.72-37.3 43.44-45.38 47.43-45.38 47.43",
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M556.98 345.27v2.28h-67.61v-1.85a22.72 22.72 0 0 0 5.22-2.78 22.21 22.21 0 0 0 9.28-18.06 21.92 21.92 0 0 0-.69-5.47 22.23 22.23 0 0 0-12.28-14.73h65.62a22.23 22.23 0 0 0-12.28 14.73 21.92 21.92 0 0 0-.68 5.47 22.2 22.2 0 0 0 9.27 18.06 22.87 22.87 0 0 0 4.15 2.35z",
    fill: "#dfe6f5"
  }), React.createElement("path", {
    d: "M556.52 304.66a22.23 22.23 0 0 0-12.28 14.73h-41.06a22.23 22.23 0 0 0-12.28-14.73z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M411.96 293.01v12.84c0 7.08 5.18 12.83 11.58 12.83h198.91c6.4 0 11.59-5.75 11.59-12.83v-12.84z",
    fill: "#dfe6f5"
  }), React.createElement("path", {
    d: "M556.98 345.27v2.28h-67.61v-1.85a22.72 22.72 0 0 0 5.22-2.78h58.24a22.87 22.87 0 0 0 4.15 2.35z",
    opacity: 0.1
  }), React.createElement("rect", {
    x: 467.03,
    y: 343.63,
    width: 112.29,
    height: 6.77,
    rx: 3.39,
    fill: "#dfe6f5"
  }), React.createElement("path", {
    d: "M634.04 152.38a11.58 11.58 0 0 0-11.59-11.58H423.54a11.57 11.57 0 0 0-11.58 11.58v143.13h222.08z",
    fill: "#474157"
  }), React.createElement("path", {
    d: "M627.98 157.55v123a5.7 5.7 0 0 1-5.7 5.71H423.72a5.7 5.7 0 0 1-5.7-5.71v-123a5.62 5.62 0 0 1 .76-2.85 5.7 5.7 0 0 1 4.94-2.85h198.56a5.7 5.7 0 0 1 5.7 5.7z",
    fill: "#4c4c78"
  }), React.createElement("circle", {
    cx: 523,
    cy: 146.32,
    r: 2.67,
    fill: "#fff"
  }), React.createElement("circle", {
    cx: 523,
    cy: 306.38,
    r: 6.59,
    fill: "#fff"
  }), React.createElement("path", {
    d: "M627.98 157.55H418.04a5.7 5.7 0 0 1 5.7-5.7h198.54a5.7 5.7 0 0 1 5.7 5.7z",
    fill: "#c8cad7"
  }), React.createElement("circle", {
    cx: 423.72,
    cy: 154.7,
    r: 1.43,
    fill: "#ededf4"
  }), React.createElement("circle", {
    cx: 428,
    cy: 154.7,
    r: 1.43,
    fill: "#ededf4"
  }), React.createElement("circle", {
    cx: 432.28,
    cy: 154.7,
    r: 1.43,
    fill: "#ededf4"
  }));
};

UndrawPairProgramming.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPairProgramming;