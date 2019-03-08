function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawTarget = function UndrawTarget(_props) {
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
    viewBox: "0 0 1043.39 696.02",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 790.81,
    y1: 795.21,
    x2: 790.81,
    y2: 252,
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
    d: "M1016.37 647.95c-11 9.12-24.28 15.62-38.62 20.43q-3.13 1.07-6.35 2c-5.54 1.65-11.21 3.08-16.93 4.33-2.82.63-5.66 1.21-8.5 1.75-4.83.93-9.68 1.76-14.5 2.52-17.89 2.81-35.9 4.89-54 6.47q-8.37.74-16.75 1.33l-2.23.16-4 .27-2.46.16c-3.74.25-7.48.47-11.21.68-14.95.84-29.92 1.45-44.89 2-11 .38-21.89.7-32.83 1l-22.25.65-5.75.17-2.52.07q-9.88.3-19.78.57l-1.86.05-5.8.17-11 .3-3.28.09-3 .08c-69.83 1.88-139.71 3.25-209.5 2.66q-8.38-.06-16.75-.18c-51.82-.67-103.58-2.48-155.25-6-18.16-1.24-36.44-2.74-54.62-4.81q-8.4-.95-16.75-2.07c-44.66-6-88.22-16.12-127.24-35-29.39-14.25-56.52-34.52-67.9-61.49-11.49-27.22-5.41-57.79 7.71-84.47s32.86-50.59 49.88-75.66c5.85-8.63 11.38-17.62 16.39-26.86.3-.56.61-1.13.9-1.69q3.85-7.23 7.26-14.64 3.24-7.06 6-14.26.83-2.15 1.59-4.29c.06-.16.12-.32.17-.48s.13-.36.19-.54a185.14 185.14 0 0 0 7.54-27.87l.24-1.32c.11-.63.22-1.25.32-1.88s.19-1.17.28-1.76a138 138 0 0 0 1.55-26.85v-1a113.94 113.94 0 0 0-1.5-13.73c-.06-.39-.12-.77-.2-1.15a107.52 107.52 0 0 0-5.27-19.1c-.1-.27-.21-.55-.32-.83 0-.12-.09-.25-.14-.37-.75-1.91-1.55-3.8-2.43-5.69-.14-.32-.3-.65-.45-1-.29-.61-.58-1.22-.89-1.82q-2.11-4.31-4.7-8.51c-2-3.33-4.27-6.59-6.6-9.79l-.33-.45-.27-.38c-3.06-4.17-6.26-8.27-9.38-12.41-2.45-3.23-4.85-6.48-7.1-9.79l-.4-.6a99.75 99.75 0 0 1-7.28-12.53c-.42-.89-.83-1.78-1.21-2.68-.68-1.58-1.31-3.17-1.87-4.77-7.68-21.7-5.35-45.4-1.66-68 5.47-33.58 15.65-69.77 47.16-90.73 27.51-18.31 64.74-20.45 100-16 5.65.7 11.24 1.57 16.75 2.57l3 .57c44.6 8.55 86.78 23.69 128.44 39.9 9.73 3.79 19.44 7.64 29.14 11.47q11.37 4.49 22.75 8.93 13.15 5.12 26.5 10 8.34 3.06 16.75 6 13.49 4.69 27.16 8.91 9.68 3 19.46 5.65c31 8.44 62.8 14.29 95.35 15.42a291.28 291.28 0 0 0 73.81-6.84 246.59 246.59 0 0 0 16.75-4.41 218 218 0 0 0 22.6-8.19c18.61-8 35.34-18.56 48.58-32l.11-.11c19.61-19.89 48.36-30 78.48-31.69a164.14 164.14 0 0 1 16.75-.09 166.26 166.26 0 0 1 60.68 14.2c47.64 21.6 78.45 67.33 76.13 113-3.37 66.48-67.46 117.51-105.7 175.67-2.7 4.1-5.27 8.33-7.66 12.65-.88 1.58-1.72 3.17-2.54 4.77-9.42 18.4-15.08 38.27-12 57.36a61.25 61.25 0 0 0 2.44 9.91c.47 1.41 1 2.82 1.59 4.22 4.39 10.46 11.33 19.33 19.89 27.22a136 136 0 0 0 12.23 9.94c35.68 25.94 87.36 42.3 110.19 77.74 19.1 29.39 12.04 69.24-16.29 92.77z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M877.49 522.77V368.68h20.91c.82-1.6 1.66-3.19 2.54-4.77h-23.45v-162h82c-.18-1.59-.38-3.2-.58-4.77h-81.42V48.39a164.14 164.14 0 0 0-16.75.09v148.63H710.97V120.5c-5.5 1.66-11.1 3.13-16.75 4.41v72.2H480.43l-.51-.91 45.14-79.87q-9.78-2.65-19.46-5.65l-27.16 48.05v-57q-8.41-2.92-16.75-6v68.28l-49.25-87.14c-9.7-3.83-19.41-7.68-29.14-11.47l74 130.85-.52.91H251.82V24.88c-5.51-1-11.1-1.87-16.75-2.57v174.8H89.53c.56 1.6 1.19 3.19 1.87 4.77h143.67v162H129.81c-.05.16-.11.32-.17.48q-.76 2.14-1.59 4.29h107v154.12H84.39q.7 2.38 1.45 4.77h149.23v157.68q8.4 2.22 16.75 4.64V527.54H461.7V695.7q8.37.12 16.75.18V527.54h215.77v165.47l11-.3 5.8-.17v-165H860.7V686.8q8.38-.6 16.75-1.33V527.54h65.5c-.18-1.59-.35-3.18-.52-4.77zm-415.8 0H251.82V368.68H461.7zm0-158.86H251.82v-162H458.7l3 4.33zm232.53 158.86H478.44V368.68h215.78zm0-158.86H478.44v-162h215.78zM860.7 522.77H710.97V368.68H860.7zm0-158.86H710.97v-162H860.7z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M794.27 96.27a5.78 5.78 0 0 1-5.54 6h-11.18a5.92 5.92 0 0 1 4.24 5.8 5.78 5.78 0 0 1-5.54 6h-38.84a5.29 5.29 0 0 1-3.84-1.68c18.61-8 35.34-18.56 48.58-32l.11-.11h1.22a5.33 5.33 0 0 1 3.91 1.75 6.26 6.26 0 0 1 0 8.38h1.31a5.78 5.78 0 0 1 5.57 5.86zM367.84 147.11h-1.29a6.19 6.19 0 0 0 1.58-4.16 5.78 5.78 0 0 0-5.54-6h-38.84a5.78 5.78 0 0 0-5.54 6 5.78 5.78 0 0 0 5.54 6h1.3a6.19 6.19 0 0 0-1.59 4.16 5.93 5.93 0 0 0 4.24 5.8h-11.18a6 6 0 0 0 0 11.93h38.84a5.78 5.78 0 0 0 5.54-6 5.91 5.91 0 0 0-4.2-5.83h11.18a6 6 0 0 0 0-11.94zM848.3 390.26H847a6.14 6.14 0 0 0 1.58-4.16 5.78 5.78 0 0 0-5.54-6H804.2a5.79 5.79 0 0 0-5.54 6 5.79 5.79 0 0 0 5.54 6h1.3a6.18 6.18 0 0 0-1.58 4.16 5.9 5.9 0 0 0 4.24 5.79h-11.18a6 6 0 0 0 0 11.94h38.84a5.79 5.79 0 0 0 5.54-6 5.91 5.91 0 0 0-4.24-5.79h11.18a6 6 0 0 0 0-11.94z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 225.54,
    cy: 409.09,
    rx: 79.9,
    ry: 105.91,
    transform: "rotate(-8.2 -525.097 904.175)",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 227.6,
    cy: 408.24,
    rx: 79.9,
    ry: 105.91,
    transform: "rotate(-8.2 -523.07 903.269)",
    fill: "#3a3768"
  }), React.createElement("path", {
    d: "M222.95 320.18a114.05 114.05 0 0 1-5.46 28.83 85.53 85.53 0 0 1-16.48 29.63c-9 10.29-20.44 17.1-33.42 19a50.47 50.47 0 0 1-6.47.5c-35.1.48-67.88-36-74.95-85.07-7.47-52.06 16.78-98.71 54.24-104.06 11.15-1.61 22.2.61 32.43 5.91 14.73 7.6 27.76 21.58 36.88 39.64a126.76 126.76 0 0 1 12.11 39 129.4 129.4 0 0 1 1.12 26.62z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M169.88 307.41l-4.84 44.09s15.48-1.45 20-9.19l-14.27-35.64z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M169.88 307.41l-4.84 44.09s15.48-1.45 20-9.19l-14.27-35.64zM101.77 305.94l24.35-1.64s2.53 18.5 10.22 28.91l-17.29 18.8s-17.93-28.57-17.28-46.07z",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.3,
    d: "M105.996 365.241l57.438-61.595.731.682-57.438 61.595zM85.49 307.66l-.08-1 79.88-5.82.08.99-79.88 5.83z"
  }), React.createElement("path", {
    d: "M209.7 254.52l-6.91 8.38c-17.09-32.71-31.35-34.55-31.35-34.55l1.38-13.48c14.75 7.61 27.78 21.59 36.88 39.65zM134.11 264.91l31.54 33-2.21.93-36.68-14.42s2.94-11.73 7.35-19.51z",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.3,
    d: "M87.34 268.938l.366-.931 76.097 29.899-.365.93z"
  }), React.createElement("path", {
    d: "M172.49 300.65l25.72-3.64s1.81 10.64.85 13.75a2.33 2.33 0 0 1-.11.28zM113.84 244.35s10.75-15.53 24.14-19.65l11.84 28.31s-11.54 4.27-15.58 12.79z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M168.13 295.31l-.86-.11c-.19 0-.4-.06-.54-.66l-35.25-83.4.92-.39 34.11 80.72c0-4.49.54-14.49 2.41-36.78 1.65-19.68 3.57-39.58 3.59-39.78l1 .1c-2.86 29.61-6.68 74-5.92 79zM102.458 233.523l.717-.697 61.656 63.446-.717.697z",
    fill: "#fff",
    opacity: 0.3
  }), React.createElement("path", {
    d: "M191.57 274.68l10.77-12.2s10.23 25.23 9.08 32.73l-12.79 1.8s-4.6-21.65-7.06-22.33z",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.3,
    d: "M171.5 296.809l37.83-42.596.748.664-37.831 42.596z"
  }), React.createElement("path", {
    d: "M199.1 297.46l-.06-.53c0-.16 0-.31-.07-.46s0-.41-.08-.62a66.13 66.13 0 0 0-6.62-20.95c-.11-.21-.22-.42-.34-.63a2.19 2.19 0 0 0-.16-.3c-5.38-10-13.1-17.47-21.71-21-.32-.14-.64-.26-1-.38a28.24 28.24 0 0 0-14-1.59 26.65 26.65 0 0 0-5.16 1.27 2.43 2.43 0 0 0-.38.13l-.57.21a32.77 32.77 0 0 0-14.78 12.12l-.11.16-.29.43a2.2 2.2 0 0 0-.17.25c-.42.63-.83 1.27-1.22 1.94s-.74 1.28-1.09 2a53.16 53.16 0 0 0-4.9 13.74c-.08.33-.15.67-.21 1a65.62 65.62 0 0 0-.78 19.52l.06.59c0 .13 0 .27.05.4.07.55.14 1.1.22 1.65a64.41 64.41 0 0 0 10.1 26.82c.06.1.13.19.2.29s.25.37.39.55c.34.5.69 1 1.06 1.46 7 9.31 16.37 15.24 26.19 15.94.43 0 .87.05 1.31.06h1a26.2 26.2 0 0 0 3.52-.27 29.08 29.08 0 0 0 15.89-8c.26-.24.52-.49.77-.75a43.42 43.42 0 0 0 9.35-14.74c.14-.34.27-.68.4-1a59.44 59.44 0 0 0 3.34-14.88l.09-1.05a67.71 67.71 0 0 0-.24-13.38zm-3.91 28.55c-.12.35-.25.7-.38 1a42.78 42.78 0 0 1-9 14.51c-.25.26-.5.52-.76.76a28.15 28.15 0 0 1-15.62 7.94 24.31 24.31 0 0 1-3.29.26h-1c-10.27-.21-20.11-6.4-27.34-16.32l-.62-.87c-.2-.28-.39-.56-.57-.85a63.29 63.29 0 0 1-9.81-26.22c-.08-.53-.15-1.06-.21-1.58 0-.34-.08-.67-.11-1a64.63 64.63 0 0 1 .73-19.07c.06-.34.12-.67.2-1a52.07 52.07 0 0 1 4.85-13.65l.66-1.21c.47-.83 1-1.64 1.47-2.41.15-.23.3-.46.46-.68a1.63 1.63 0 0 1 .11-.17 31.91 31.91 0 0 1 14.46-11.93l.94-.35a26.55 26.55 0 0 1 10.55-1.39 28.69 28.69 0 0 1 8.11 1.82l1 .39c8.38 3.52 15.87 10.92 21.09 20.75.17.31.33.63.49.95a65.5 65.5 0 0 1 6.3 20.32l.09.61v.37c0 .12.05.41.07.62a66 66 0 0 1 .31 12.83v.32l-.06.73a57.91 57.91 0 0 1-3.12 14.52z",
    fill: "#fff",
    opacity: 0.3
  }), React.createElement("path", {
    d: "M222.95 320.18a114.05 114.05 0 0 1-5.46 28.83l-10.27-10.39c2.8-4.22 4.52-22.4 4.52-22.4l.59.41c.52 1.11 6.2 2.56 10.62 3.55z",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.3,
    d: "M172.68 304.986l.705-.709 44.494 44.262-.705.709zM222.71 321.35l-51.3-20.74 50.34-7.57.15.99-46.72 7.02 47.9 19.37-.37.93z"
  }), React.createElement("path", {
    d: "M201.01 378.68c-9 10.29-20.44 17.1-33.42 19a50.47 50.47 0 0 1-6.47.5l2.1-21s19.23.29 30.37-15.23z",
    opacity: 0.2
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.3,
    d: "M170.684 307.986l.922-.386 29.731 71.04-.922.385zM160.98 398.102l7.79-89.762.997.086-7.79 89.763z"
  }), React.createElement("path", {
    d: "M212 295.52c0-.33-.07-.66-.12-1-.09-.82-.2-1.64-.32-2.46a106.11 106.11 0 0 0-8.55-29.27v-.09l-.42-.89c-7.33-15.45-18.05-27.51-30.24-34.13-.24-.14-.49-.27-.74-.4l-.21-.11a42.84 42.84 0 0 0-26-4.75 40 40 0 0 0-7.31 1.77l-.94.34a47.36 47.36 0 0 0-20.37 15.35q-1.5 1.89-2.87 3.94c-.19.28-.38.56-.56.85a80.42 80.42 0 0 0-11.19 29c-.07.33-.13.66-.18 1a104.88 104.88 0 0 0-.71 30.82c0 .33.08.66.13 1s.12.95.19 1.43c.11.77.23 1.55.36 2.31v.07c.49 3 1.1 5.91 1.82 8.77a.29.29 0 0 0 0 .09 97 97 0 0 0 14.74 32.69c.19.28.38.55.59.83a77.44 77.44 0 0 0 6.4 7.71c1.34 1.42 2.72 2.75 4.12 4 9.07 8.13 19.2 12.75 29.47 13.48 1.2.08 2.41.11 3.61.08h.42a5.68 5.68 0 0 0 .59 0 38.53 38.53 0 0 0 4-.36c9.84-1.42 18.75-6.38 26-14.35.09-.09.17-.19.25-.28l.49-.54a64 64 0 0 0 8.87-13.22 77.16 77.16 0 0 0 4.08-9.53 5.52 5.52 0 0 0 .18-.53 5.52 5.52 0 0 0 .18-.53 91.59 91.59 0 0 0 4.44-21.45c0-.16 0-.31.05-.47s0-.38.05-.57q.31-4.08.32-8.25a109.44 109.44 0 0 0-.62-12.35zm-.69 21.22a90.45 90.45 0 0 1-4.26 21.06q-.17.52-.36 1a76.57 76.57 0 0 1-4.18 9.86 62.92 62.92 0 0 1-8.42 12.64c-.23.28-.48.56-.73.83-7.2 8-16 13-25.76 14.39q-1.89.27-3.78.36h-1c-11.39.24-22.77-4.47-32.81-13.59a71.694 71.694 0 0 1-3.75-3.67 78.67 78.67 0 0 1-6.44-7.76l-.29-.42-.3-.42c-8.49-12-14.3-27-16.65-43.33-.07-.45-.13-.9-.19-1.35 0-.17 0-.34-.07-.52s0-.31-.05-.47a104 104 0 0 1 .65-30.38l.18-1a79.39 79.39 0 0 1 11-28.64q.15-.25.33-.51c.07-.12.15-.24.23-.35.88-1.33 1.81-2.61 2.77-3.83a46.48 46.48 0 0 1 20.16-15.26l.67-.24.28-.1a38.87 38.87 0 0 1 7.06-1.7 39.55 39.55 0 0 1 8.34-.3 43.84 43.84 0 0 1 17.38 5.13l.2.1.75.41a63.73 63.73 0 0 1 18 15.27 87 87 0 0 1 11.66 18.6c.05.09.09.19.13.28l.33.7a105.64 105.64 0 0 1 8.28 28.6c.12.82.23 1.63.33 2.45 0 .2 0 .39.07.59s0 .27 0 .41a105.92 105.92 0 0 1 .39 20q-.09.63-.15 1.16z",
    fill: "#fff",
    opacity: 0.3
  }), React.createElement("ellipse", {
    cx: 246.62,
    cy: 403.54,
    rx: 5.03,
    ry: 6.92,
    transform: "rotate(-8.2 -504.015 898.605)",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 246.62,
    cy: 403.54,
    rx: 5.03,
    ry: 6.92,
    transform: "rotate(-8.2 -504.015 898.605)",
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 670.45,
    cy: 45.86,
    r: 13.54,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 47.39,
    cy: 190.8,
    r: 13.54,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 999.19,
    cy: 286.97,
    r: 13.54,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 944.41,
    cy: 368.68,
    r: 13.54,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 710.3,
    cy: 25.4,
    r: 6.24,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 6.24,
    cy: 159.36,
    r: 6.24,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 991.89,
    cy: 445.73,
    r: 6.24,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 744.28,
    cy: 4.41,
    r: 4.41,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 33.85,
    cy: 253.03,
    r: 4.41,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M1045.21 742.79s-7.48-32.17-12.46-71.28-43.59-104.1-43.59-104.1c-.17-.33-.35-.67-.53-1a177.52 177.52 0 0 0-21.48-31.85c-17-20.07-32.42-29.09-33.19-29.53-1.22-1.86-2.53-3.91-3.91-6.1-5.18-8.19-11.34-18.49-17.22-29.61 0-.26-.09-.51-.14-.77-2.62-15.84-2.72-32.5 5.16-46.18 3.89-6.75 9.5-12.31 13.78-18.81 7-10.6 10.18-23.25 12.75-35.73 1.81-8.73 3.37-17.63 2.91-26.52v-.4c0-.62-.08-1.24-.14-1.86-1.47-16.12-9.92-30.6-18.16-44.47-4.34-7.3-8.9-14.83-15.89-19.55-14.54-9.81-32.36-3.67-47.9-9.29-16.51-6-31.6-11.59-49.57-13.43-6.37-.65-13.37-.81-18.53 3-5.42 4-7.22 11.3-10.82 17.07-6.87 11-19.83 16-30.77 22.92-8.31 5.21-16.28 13.54-18 22.71v-.08a20.22 20.22 0 0 0-.32 3v.49a18.17 18.17 0 0 0 .74 5.47c.62.32 1.25.6 1.89.88-.4.65-.8 1.3-1.18 2l-.84 1.49a97.36 97.36 0 0 0 48.61 137.44c.59 1.44 1.2 2.93 1.8 4.47a226.44 226.44 0 0 1 16 81.58v3.83c-9 11.4-18.33 25.54-18 35.32.54 16.38-21.3 54.49-27.19 64.45l-1.18 2c-5.88-4.26-12.87-8.09-16.26-5.4l-2.84-1.82c-14.36-9.22-40-26.3-49.67-36.51-13.7-14.51-40.48-27.76-40.48-27.76s-21.17-25.24-19.92-34.7c.62-4.71-7.88-42.31-18.41-69.9 7.69.81 15.59 1.78 18 2.08l.59.52.83.13c29.11 25.58 35.48 14.18 35.48 14.18 2.38-1.61 3.19-6.46 3.42-8.32v-.44h.15v-.37a2.68 2.68 0 0 0 .16-.34l.07-.13.05-.1c0-.08.07-.17.11-.26a4.63 4.63 0 0 0 .39-1h-.08a37.45 37.45 0 0 0 .61-6.34 7.2 7.2 0 0 0-5.64-7.06c0-.05 0-.1-.05-.16-3.78-11.24-31.27 5.43-34.31 7.32l-.74.08c-5.51-1.1-14-3.11-21.19-4.85-9.75-23.72-20.81-37-27.9-7.81l-6.52-1.12a6 6 0 0 0-4.66 1.1 7.91 7.91 0 0 0-2.23 2.54l-28.29-4.48-6.67.23 5.65 2.73.42.2 28.29 4.61a6.13 6.13 0 0 0 5.25 5.29l6.35.92c-11.34 66.19 14 87.79 14 87.79s30.51 29.92 30.51 37c0 6 59.56 77.27 77.66 98.78 3.24 3.86 5.16 6.12 5.16 6.12 7.11 8.17 41.3 36.08 57.21 48.94 1.56 13 3 26 3.83 33.13l3-.08 14.23-.39 7.66-.23q9.9-.27 19.78-.57l2.52-.07 5.75-.18q11.13-.32 22.25-.66c10.94-.33 21.88-.65 32.83-1 15-.53 29.94-1.14 44.89-2 3.73-.21 7.47-.43 11.21-.68l2.46-.17 4-.27c24.46-1.73 48.82-4.22 73-8.06 4.82-.77 9.67-1.61 14.5-2.56 2.84-.54 5.68-1.13 8.5-1.77 5.72-1.27 11.39-2.72 16.93-4.39-2.36-16.9-4.47-29.3-4.47-29.3z",
    transform: "translate(-78.3 -101.99)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M554.46 388.58l-3.72-.13s-25.23-3.13-33.31-3.32a5.58 5.58 0 0 0-2.43.19l1.79-7.22 2.19.54c7.69 1.9 33.18 8.14 37.28 8.28 4.85.16-1.8 1.66-1.8 1.66z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M551.53 386.18s30.6-19.14 34.6-7.39-6.43 13.48-6.43 13.48z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M551.53 386.18s30.6-19.14 34.6-7.39-6.43 13.48-6.43 13.48z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M586.85 403.01s-6.45 11.42-36.15-14.56l.41-.53 1.23-1.59s38.44-17.67 39.44-.41a33.31 33.31 0 0 1-.72 6.68 3.46 3.46 0 0 1-.61 1.32l-.14.13s0 .27-.08.73c-.19 1.84-1 6.62-3.38 8.23z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M586.85 403.01s-6.45 11.42-36.15-14.56l.41-.53.69-.71 38.65 6.71-.14.13s0 .27-.08.73c-.19 1.84-1 6.62-3.38 8.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M590.47 394.37l-39.54-6.36-2-1.7 3.62-.42 38.71 6.27a2.87 2.87 0 0 1-.74 1.45s.01.3-.05.76z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M590.08 395.19l-39.54-6.33-2-1.69 3.61-.43 38.75 6.27a2.79 2.79 0 0 1-.75 1.45s-.01.28-.07.73z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M590.27 394.78l-39.57-6.33-2-1.69 3.61-.43 38.72 6.27a3 3 0 0 1-.75 1.45s.05.27-.01.73z",
    fill: "#4c4c56"
  }), React.createElement("path", {
    d: "M517.43 385.13a5.58 5.58 0 0 0-2.43.19l1.79-7.22 2.19.54a27 27 0 0 1-1.55 6.49z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M517.7 376.25l-22.21-3.76a6.05 6.05 0 0 0-4.66 1.09 6.29 6.29 0 0 0-2.87 5.5 6.08 6.08 0 0 0 5.29 5.47l22.27 3.16s4.02-9.81 2.18-11.46z",
    fill: "#d1d9ec"
  }), React.createElement("path", {
    d: "M454.03 372.09l6.68-.24 28.79 4.51a1.59 1.59 0 0 1 1.32 1.87 1.59 1.59 0 0 1-1.81 1.26l-29.31-4.71z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M453.62 371.89l6.67-.23 28.8 4.5a1.59 1.59 0 0 1 1.31 1.85 1.59 1.59 0 0 1-1.8 1.27l-29.32-4.72z",
    fill: "#dfe6f5"
  }), React.createElement("path", {
    d: "M670.49 559.29l-43.59 52.93s-1.92-2.23-5.16-6.05c-18.1-21.23-77.66-91.54-77.66-97.5 0-7-30.51-36.56-30.51-36.56s-27.4-23-12.46-94.68 50.44 68.52 49.2 77.86 19.92 34.25 19.92 34.25 26.78 13.08 40.48 27.4c9.64 10.08 35.31 26.94 49.67 36 6.06 3.88 10.11 6.35 10.11 6.35z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M670.49 559.29l-43.59 52.93s-1.92-2.23-5.16-6.05c.7-14.82 32-47.52 37.54-52.49a4 4 0 0 1 1.1-.7c6.06 3.84 10.11 6.31 10.11 6.31z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M689.17 568.01s-19.93-18.68-26.15-13.07-45.46 46.7-36.12 57.29 65.38 54.78 65.38 54.78z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M689.17 568.01s-19.93-18.68-26.15-13.07-45.46 46.7-36.12 57.29 65.38 54.78 65.38 54.78z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M864.15 419.18s-19.45 18.77-43.81 39.13l-.92.76-1.42 1.18c-38.86 32.14-88.94 66.82-94.1 37.14a41.27 41.27 0 0 1-.07-11.69c.06-.57.14-1.16.22-1.76s.16-1.16.22-1.73a196.11 196.11 0 0 0 1.61-22.55v-3.78a221 221 0 0 0-16-80.53c-.6-1.52-1.21-3-1.8-4.41-8-19.08-15.83-30.22-15.83-30.22s11.57-7 27.61-16c5.89-3.28 12.37-6.81 19.11-10.35 37-19.4 81.49-38.8 75.33-16-2.91 10.79-.21 25.11 5.15 40.1.3.83.6 1.64.91 2.46a246.42 246.42 0 0 0 12 26.49l.3.58c6.43 12.32 13.36 23.83 19.1 32.78 1.38 2.16 2.69 4.18 3.91 6 5.03 7.7 8.48 12.4 8.48 12.4z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M820.39 340.93c-.29.43-.6.86-.91 1.28-9.34 12.7-20.15 20.26-33 24.52-8.86 2.95-18.72 4.34-29.77 4.78-2.75.1-5.56.15-8.46.15a169.19 169.19 0 0 1-20-1.15c-3.49-.55-7.14 1.8-10.67 3.52-2.63 1.27-5.2 2.2-7.6 1.32-.6-1.52-1.21-3-1.8-4.41-8-19.08-15.83-30.22-15.83-30.22s11.57-7 27.61-16c5.89-3.28 12.37-6.81 19.11-10.35 37-19.4 81.49-38.8 75.33-16-2.91 10.79-.21 25.11 5.15 40.1.23.83.53 1.64.84 2.46z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M838 282.01c0 1.46 0 2.9-.1 4.34a95.37 95.37 0 0 1-75.92 89.08 96 96 0 0 1-34.48.77 91.46 91.46 0 0 1-10-2.14 93.92 93.92 0 0 1-9.4-3.09 95.46 95.46 0 0 1-48.71-135.6l.84-1.47A95.4 95.4 0 0 1 838 282.01z",
    fill: "#fdc2cc"
  }), React.createElement("path", {
    d: "M864.15 419.18s-151.32 146.33-140.11 64.76a202.11 202.11 0 0 0 1.86-28.06 246.86 246.86 0 0 1 16.71-18.64l21.26-15.37a119.06 119.06 0 0 1 75.76-22.76 55 55 0 0 1 12.12 1.67c7.13 11.17 12.4 18.4 12.4 18.4z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M971.4 670.4c-5.54 1.65-11.21 3.08-16.93 4.33-2.82.63-5.66 1.21-8.5 1.75-4.83.93-9.68 1.76-14.5 2.52-24.14 3.79-48.5 6.25-73 8l-4 .27-2.46.16c-3.74.25-7.48.47-11.21.68-14.95.84-29.92 1.45-44.89 2-11 .38-21.89.7-32.83 1l-22.25.65-5.75.17-2.52.07q-9.88.3-19.78.57l-7.66.22-14.23.39-3 .08c-.8-7.06-2.27-19.89-3.83-32.7l-.36-3c-1.72-14.13-3.5-27.7-4.53-32.84-2.49-12.45 0-64.14 0-64.14l.27-.43 1.18-2c5.89-9.83 27.73-47.45 27.19-63.62-.32-9.65 9-23.61 18-34.86 1.18-1.46 2.35-2.88 3.5-4.23 7.17-8.43 13.31-14.43 13.31-14.43l21.25-15.38a119.21 119.21 0 0 1 75.77-22.74c8 .41 14.38 1.53 16 3.94.69.39 16.19 9.29 33.19 29.15a175.34 175.34 0 0 1 21.48 31.44c.18.32.36.65.53 1 0 0 38.61 64.14 43.59 102.75s12.46 70.36 12.46 70.36 2.13 12.19 4.51 28.87z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M848.59 635.88c-3.39 5.51-.14 33.59 3.47 51.51-3.74.25-7.48.47-11.21.68-14.95.84-29.92 1.45-44.89 2-11 .38-21.89.7-32.83 1l-22.25.65-5.75.17-2.52.07c1.17-4.23 1.4-8.65-1.71-10.62-6.85-4.36-19.93-32.39-19.93-32.39s-11.2 2.5-12.45-89a132.21 132.21 0 0 1 5.57-41.45 102.12 102.12 0 0 1 4.71-12.34 96.42 96.42 0 0 1 15.46-23.89c21.4-24.22 48.34-30 48.34-30a80.32 80.32 0 0 1 14.17-1.08h.12a73.44 73.44 0 0 1 32.5 8 84.61 84.61 0 0 1 12.31 7.51 98.62 98.62 0 0 1 10.32 8.82c34.92 34 43.18 87.09 21.61 130.82-6.88 14.01-13.11 26.4-15.04 29.54z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M856.06 640.86c-3.07 5-.7 28.41 2.45 46.1l-4 .27-2.46.16c-3.74.25-7.48.47-11.21.68-14.95.84-29.92 1.45-44.89 2-11 .38-21.89.7-32.83 1l-22.25.65c0-2.28-.7-4.25-2.51-5.4a15.5 15.5 0 0 1-3.32-3.25c-.29-.35-.59-.73-.89-1.12-6.93-9.2-15.71-28-15.71-28s-11.21 2.49-12.46-89c-.4-29.82 7.32-51.64 17.91-67.51 21.94-32.86 56.19-40.22 56.19-40.22a75.79 75.79 0 0 1 37.9 3.09 77 77 0 0 1 13.72 6.39 95.07 95.07 0 0 1 16.23 12.31l1.6 1.53c34.92 34 43.17 87.09 21.6 130.82-6.91 13.97-13.14 26.36-15.07 29.5z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M851.08 635.88c-3.38 5.5-.16 33.43 3.44 51.35l-2.46.16c-3.74.25-7.48.47-11.21.68-14.95.84-29.92 1.45-44.89 2-11 .38-21.89.7-32.83 1l-22.25.65-5.75.17c.88-3.23 1.21-6.56-.08-8.82a4.83 4.83 0 0 0-.89-1.12 3.91 3.91 0 0 0-.77-.61c-6.85-4.36-19.93-32.39-19.93-32.39s-11.2 2.5-12.45-89c-.46-34.26 9.8-58 22.82-74.22 21.78-27.17 51.28-33.51 51.28-33.51a81.32 81.32 0 0 1 11.68-1.08h.12a73.62 73.62 0 0 1 33.42 7.2 90.85 90.85 0 0 1 24.21 17.22c1.16 1.13 2.3 2.28 3.39 3.45 32 34.09 39.08 85.1 18.22 127.37-6.91 13.97-13.14 26.36-15.07 29.5z",
    fill: "#5f5d7e"
  }), React.createElement("path", {
    d: "M774.05 574.4s-61.45 43.61-56.21 49.61 56.21-49.61 56.21-49.61zM860.28 590.11s-19.2-17.1-17.81-10.47 17.81 10.47 17.81 10.47zM840.85 688.07c-14.95.84-29.92 1.45-44.89 2-25.63-3-52.28-7.41-52.28-7.41 2.31-1.35 84.08-2.98 97.17 5.41zM954.47 674.73c-2.82.63-5.66 1.21-8.5 1.75-1.11-17.89-1.55-33.3-1.55-33.3a317.53 317.53 0 0 1 10.05 31.55zM712.83 692.53l-7.66.22c-6.1-16.66-11.34-36.42-13.48-44.81-.66-2.59-1-4.1-1-4.1l.95 2c3.15 6.57 13.59 28.49 21.19 46.69zM831.7 316.08a94.75 94.75 0 0 1-12.24 22.39c.3.83.6 1.64.91 2.46a246.42 246.42 0 0 0 12 26.49l.3.58c.52 4 1.24 8 2.07 11.9q-22.8 1.2-45.65 1.05c-6.62 0-13.34-.19-19.65-2.17a34 34 0 0 1-7.44-3.38 37.37 37.37 0 0 1-5.3-3.89 45 45 0 0 1-14.58-28.66c-.91-8.59.39-17.49-2.1-25.76a28.2 28.2 0 0 0-1-2.71 29.88 29.88 0 0 0-23.32-17.74 6.39 6.39 0 0 0-4.34.59 7.25 7.25 0 0 0-2.35 3.64l-10.31 26.89c-7.34 1.84-12.52-7.75-11.91-15.29s4-15.26 1.49-22.4c-.77-2.21-2.08-4.22-2.64-6.48-2.23-8.91 7.35-16.82 7.43-26 .06-7.55-6.4-13.65-13.26-16.79-6.29-2.88-13.24-4.12-19.54-6.93A95.4 95.4 0 0 1 838 282.01c0 1.46 0 2.9-.1 4.34a94.8 94.8 0 0 1-6.2 29.73z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M737.29 157.4c-6.37-.64-13.37-.8-18.53 3-5.42 4-7.22 11.16-10.82 16.85-6.87 10.88-19.83 15.85-30.77 22.62s-21.3 18.86-17.64 31.2c6.74 3.4 14.39 4.59 21.25 7.73s13.32 9.24 13.26 16.79c-.08 9.18-9.66 17.09-7.43 26 .56 2.26 1.87 4.27 2.64 6.48 2.49 7.14-.88 14.86-1.49 22.4s4.57 17.13 11.91 15.29l10.38-26.89a7.25 7.25 0 0 1 2.35-3.64 6.39 6.39 0 0 1 4.34-.59 29.77 29.77 0 0 1 24.24 20.45c2.49 8.27 1.19 17.17 2.1 25.76 1.67 15.84 12.14 31.16 27.34 35.93 6.31 2 13 2.13 19.65 2.17q22.83.17 45.65-1.05c-3.75-17.64-5.28-37.13 3.81-52.69 3.89-6.66 9.5-12.15 13.78-18.57 7-10.46 10.18-22.95 12.75-35.26 2-9.33 3.63-18.87 2.75-28.36-1.47-15.91-9.92-30.21-18.16-43.89-4.34-7.21-8.9-14.65-15.89-19.31-14.54-9.68-32.36-3.61-47.9-9.17-16.51-5.89-31.6-11.43-49.57-13.25z",
    fill: "#865a61"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M689.89 290.43a20.6 20.6 0 0 0-.65-9.53c-.7-2-1.83-3.85-2.46-5.87a12.57 12.57 0 0 0-.17 6.39c.56 2.26 1.87 4.27 2.63 6.48a15.42 15.42 0 0 1 .65 2.53zM693.57 251.92a15.27 15.27 0 0 0 .46-3.5c.06-7.54-6.39-13.65-13.25-16.79s-14.51-4.33-21.25-7.73a17.3 17.3 0 0 1-.41-1.69 18.35 18.35 0 0 0 .41 8.69c6.74 3.4 14.39 4.59 21.25 7.73 5.77 2.64 11.22 7.38 12.79 13.29zM790.06 371.78c-6.61 0-13.33-.19-19.64-2.17-15.2-4.77-25.67-20.09-27.34-35.93-.91-8.59.39-17.48-2.1-25.76a29.77 29.77 0 0 0-24.28-20.45 6.39 6.39 0 0 0-4.34.59 7.18 7.18 0 0 0-2.35 3.64l-10.31 26.89c-5.9 1.48-10.4-4.42-11.63-10.71-.11.81-.22 1.62-.28 2.42-.62 7.54 4.57 17.13 11.91 15.29l10.38-26.89a7.18 7.18 0 0 1 2.35-3.64 6.39 6.39 0 0 1 4.34-.59 29.77 29.77 0 0 1 24.24 20.45c2.49 8.28 1.19 17.17 2.1 25.76 1.67 15.84 12.14 31.16 27.34 35.93 6.31 2 13 2.13 19.64 2.17q22.85.17 45.66-1c-.48-2.29-.93-4.61-1.33-6.94q-22.17 1.09-44.36.94zM866.06 264.21c-2.58 12.31-5.77 24.8-12.75 35.26-4.28 6.42-9.89 11.91-13.78 18.57-5.56 9.51-7.14 20.49-6.68 31.62.38-8.69 2.29-17.11 6.68-24.62 3.89-6.66 9.5-12.15 13.78-18.57 7-10.46 10.17-22.95 12.75-35.26 1.82-8.69 3.4-17.56 2.9-26.41a129.17 129.17 0 0 1-2.9 19.41z"
  })));
};

UndrawTarget.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawTarget;