function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawMissionImpossible = function UndrawMissionImpossible(_props) {
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
    viewBox: "0 0 618.02 704",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 252.52,
    y1: 136,
    x2: 252.52,
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
    x1: 557.5,
    y1: 392.04,
    x2: 557.52,
    y2: 251.94,
    gradientTransform: "matrix(.99 0 0 1 5.9 -.04)",
    xlinkHref: "#prefix__a"
  }), React.createElement("clipPath", {
    id: "prefix__c",
    transform: "translate(-302.98 -117)"
  }, React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    d: "M421 120h270v135H421z"
  })), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 13.84,
    y1: 244.99,
    x2: 13.84,
    y2: 202.99,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 487.49,
    y1: 430.13,
    x2: 487.49,
    y2: 121.99,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 530.91,
    y1: 303.07,
    x2: 530.91,
    y2: 255,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 573.5,
    y1: 324.54,
    x2: 573.5,
    y2: 254,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 466.02,
    y1: 543,
    x2: 466.02,
    y2: 527,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 544.27,
    y1: 659.6,
    x2: 544.27,
    y2: 463.87,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 481.02,
    y1: 533,
    x2: 481.02,
    y2: 408,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 343.02,
    y1: 704,
    x2: 343.02,
    y2: 540,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 593.02,
    y1: 704,
    x2: 593.02,
    y2: 540,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    opacity: 0.5,
    fill: "url(#prefix__a)",
    d: "M114.02 0h277v136h-277z"
  }), React.createElement("path", {
    d: "M416.49 254.06l1 138 277-2.07-1-138zm268.74 127.8l-260.59 1.94-.11-14.31 260.59-1.95zm-.16-21.46l-260.59 1.95-.1-14.35L685 346.08zm-.16-21.46l-260.59 1.95-.11-14.31 260.59-1.95zm-.16-21.46l-260.59 1.95-.11-14.31 260.59-1.95zm-.16-21.48L424 298l-.11-14.31 260.59-1.95zm-.16-21.46l-260.59 1.95-.11-14.31 260.59-1.95z",
    transform: "translate(-302.98 -117)",
    fill: "url(#prefix__b)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M116.52 136l1 135 270-2-1-135zm261.94 125l-254 1.9-.1-14 254-1.9zm-.16-21l-254 1.9-.1-14 254-1.9zm-.16-21l-254 1.9-.1-14 254-1.9zm-.16-21l-253.96 2-.1-14 254-1.9zm-.16-21l-254 1.9-.1-14 254-1.9zm-.16-21l-254 1.9-.1-14 254-1.9z",
    fill: "#f5f5f5"
  }), React.createElement("path", {
    "data-name": "<Rectangle>",
    fill: primaryColor,
    d: "M118.02 3h270v135h-270z"
  }), React.createElement("g", {
    clipPath: "url(#prefix__c)"
  }, React.createElement("g", {
    opacity: 0.5
  }, React.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M23.21 244.99l4.47-3.25-2.42-27.33-5.25-11.42L0 210.71l23.21 34.28z"
  }), React.createElement("path", {
    d: "M630.75 125.29c-12.16-5.84-21.26-3.1-27.62 1.77-8.83 6.09-12.86 16.57-12.86 16.57l-1.73 4.67-8.23 6-2.68-5.72s-29.16-51.8-115.15 49.35l-.4-.32s-7.33 9-14 19l-.95 1.44-.42.65-.6.94-.44.7-.64 1-.57.94-.62 1-.44.76-.46.79-.44.78-.46.85-.67 1.27-.37.71-.41.82-.3.63-.39.82-.24.55q-.32.73-.61 1.44l-.22.55c-.1.26-.19.52-.28.77l-.18.53q-.2.6-.36 1.17c-.06.2-.12.41-.16.6a11.25 11.25 0 0 0-.38 3.79L323 320l5.87 12.78s82.28-32.52 138.36-68.17l-2.36 49.88-.15 3.09s-51.22 42.34-64.55 64l-22.86 13.2 24 35.4 5.59-4.06 3.51-28.12 94-75.14s17.82-32.56 18.13-59.83l3.85 14.87s8.19 23 14 23.94 5.81-17.86 1.75-23.44-2.08-42.82-2.08-42.82l1-7.58 14.71-10.69.54-.52.77 4.68 3 .26v.21H560l.14 1.36 1.89 35.52 10.41 40.17s8.2 23 14 23.94 5.81-17.86 1.76-23.44-2.08-42.82-2.08-42.82l4.29-31 .08-.6.1-.69 8.46.73s8.77-30.24-5.94-43.42l-2.68-5.72 5.48-4 1.1-.8a24.89 24.89 0 0 0 34.82-.07 17.36 17.36 0 0 0 11.61-3.1c.74-.52 1.46-1 2.14-1.54 3.08-2.21 5.63-4.24 6.14-5.22 1.42-2.78-2.15-26.91-20.97-35.95z",
    transform: "translate(-302.98 -117)",
    fill: "url(#prefix__e)"
  })), React.createElement("path", {
    d: "M253.72 88.08l2.89 54.18 10.1 39s8 22.36 13.57 23.24 5.64-17.34 1.7-22.76-2-41.57-2-41.57l6.37-46z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M250.36 97.15l1.47 8.87 40.71 3.52s8.51-29.36-5.76-42.16z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M159.55 82.87s-25 30.6-23.86 41.34L24.5 201.71l5.7 12.41s79.88-31.57 134.34-66.18l-2.43 51.43s-49.73 41.11-62.67 62.1l9.94 16 91.27-73S227.72 155 214.74 128z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M5.08 209.21l19.42-7.5 5.1 11.1 2.35 26.53-4.34 3.15-22.53-33.28zM99.44 261.46l-22.19 12.82 23.32 34.37 5.42-3.95 3.39-27.29-9.94-15.95z"
  }), React.createElement("path", {
    d: "M286.77 67.37l-15-32.11S243.35-15.26 159.44 83.8l55.3 44.2 35.81-26z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M298.608 23.186l13.381 18.411-32.518 23.635a5.4 5.4 0 0 1-7.543-1.194l-7.055-9.707a5.4 5.4 0 0 1 1.193-7.542l32.519-23.635.023.032z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M283.08 34.46a23.8 23.8 0 0 0 6.41 23.48l13.82-10-13.39-18.45z",
    opacity: 0.05
  }), React.createElement("ellipse", {
    cx: 610.44,
    cy: 156.92,
    rx: 24.15,
    ry: 24.1,
    transform: "rotate(-36.01 278.946 564.514)",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M296.29 25.7l-14 9.32 1.68-4.53s11.47-29.86 38.22-17c18.28 8.77 21.74 32.2 20.36 34.86-.55 1-3.53 3.36-7 5.77a16.8 16.8 0 0 1-22.54-2.84c-4.69-5.58-12.85-17.12-11.34-23.74-1.37-2.49-3.16-3.49-5.47-1.82z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M297.37 24.91l-14 9.32 1.68-4.53s11.47-29.86 38.22-17c18.28 8.77 21.74 32.2 20.36 34.86-.55 1-3.53 3.36-7 5.77a16.8 16.8 0 0 1-22.54-2.84c-4.69-5.58-12.85-17.12-11.34-23.74-1.37-2.49-3.16-3.49-5.47-1.82z",
    fill: "#5a2f32"
  }), React.createElement("ellipse", {
    cx: 602.07,
    cy: 143.14,
    rx: 5.37,
    ry: 2.68,
    transform: "rotate(-36.01 270.58 550.74)",
    fill: "#fda57d"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M245.87 101.24l6.39-5.47.08 8.64-1.4-3.33-5.07.16zM254.64 106.45l.14 1.33 29.36 2.29.18-1.25-29.68-2.37z"
  }), React.createElement("g", {
    opacity: 0.05
  }, React.createElement("path", {
    d: "M146.02 101.31c-4.48 6.75-8.63 14-9.91 19.22l3.48-2.43c-.47-3.83 2.43-10.19 6.43-16.79zM165.96 193.25l2.43-51.43C113.94 176.43 34.02 208 34.02 208l-3.85 6.11s79.88-31.57 134.34-66.18l-2.29 48.43c2.37-1.98 3.74-3.11 3.74-3.11z"
  })), React.createElement("path", {
    d: "M209.02 67.62l2.89 54.18 10.1 39s8 22.36 13.57 23.24 5.64-17.34 1.7-22.76-2-41.57-2-41.57l6.37-46z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M212.23 41.26s-6.73 18.13-3.87 24.34M209.15 66.68l-.02 3.37 32.25 5.42.39-2.7-32.62-6.09z",
    opacity: 0.05
  }), React.createElement("path", {
    fill: "#fff",
    d: "M216.43 39.04L209 67.62l32.62 6.08 8.62-36.06-33.81 1.4z"
  })), React.createElement("path", {
    d: "M518.29 255l6.43 24.31S533 302.14 538.87 303s5.88-17.71 1.78-23.24c-2.16-2.91-2.63-14.47-2.59-24.8z",
    transform: "translate(-302.98 -117)",
    fill: "url(#prefix__f)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M215.83 138l6.19 23.8s8 22.36 13.57 23.24 5.64-17.34 1.7-22.76c-2.07-2.85-2.52-14.17-2.48-24.29z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M584.12 254h-25.69l.35 6.44 10.69 40.14s8.42 23 14.37 23.92 6-17.85 1.8-23.42-2.14-42.78-2.14-42.78z",
    transform: "translate(-302.98 -117)",
    fill: "url(#prefix__g)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M280.56 137h-24.28l.33 6.26 10.1 39s8 22.36 13.57 23.24 5.64-17.34 1.7-22.76-2-41.57-2-41.57z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M314.02 527h304v16h-304z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M319.02 527h297v13h-297z"
  }), React.createElement("path", {
    d: "M684.76 605.25l1.21.52 38.73 16.66 49.36-58.49s7.47-8.36-1.43-14.08-14.49 9.08-14.49 9.08l-38 40.66L688 583.5l.5-3.38-29.34-17a36 36 0 0 0-1.86-3.11l-.27-1-1.47-1.29c-.28-.3-.56-.58-.84-.83l4.86-5.27A26.12 26.12 0 0 0 694 531.14a18.38 18.38 0 0 0 6.88 0A19 19 0 0 0 714.45 520a1.39 1.39 0 0 1-1 .73 17.78 17.78 0 0 0 1-2c-1 2.43-10.38-.92-11.79-1.67-4.3-2.28-6.51-5.67-8.73-9.81-4.38-8.2-12.48-11.23-21.58-11.94-7-.55-14.12-.07-20.57 2.58s-12.14 7.69-14.48 14.27a18.84 18.84 0 0 0-1 6.95 17 17 0 0 0 5.53 13.56 11.88 11.88 0 0 0 1 .77c.19.76.41 1.5.67 2.24l-1.34 1.32v.08l-8.33 9-.43-.13-87.84 13.14v.18c-2.92-1.93-16.15-8.65-49.17.48-12.47 3.45-33.25 3.08-55.55 1-15.69-19.47-25.74-79.85-25.74-79.85l-3.93-17.08-51.13 11.82s23.6 5.25 27.53 11.82c6 2 9.71 46.81 11.14 68-30.61-4.72-55.71-10.14-55.71-10.14l-18.36-6.57-13.11 46S326 569 339.08 567.65c0 0 65.56 31.53 114.07 25C472 590 490.3 598 505.59 600.49a298.75 298.75 0 0 0 40.49 3.94l.16 14.45s54-2.33 89.45-13.58c2.69 7.29 4.85 12.55 5.6 12.92l6.43-3.15 36.18 44.53 70.8-28.9s10.49-3.94 5.24-13.14-17 1.31-17 1.31l-52.44 18.39-22.13-30.68-.86-1.2 4.64-2.28s-.15-.68-.42-1.86l12.18 9.76z",
    transform: "translate(-302.98 -117)",
    fill: "url(#prefix__i)",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#fda57d",
    d: "M339 450.66l-16.21-15.02 26.83-29.09 16.21 15.02L339 450.66z"
  }), React.createElement("path", {
    d: "M348.34 407.83l-11.84 12.84a25.56 25.56 0 0 0 15.67 15.61l12.39-13.43z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M351.82 475.82l65 28 48-56.89s7.27-8.13-1.39-13.69-14.1 8.83-14.1 8.83l-36.92 39.54-47.39-23.75z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M348.41 443.46l33.16 19.16-4.46 30.03-31.25-24.91 2.55-24.28z"
  }), React.createElement("ellipse", {
    cx: 361.8,
    cy: 410.88,
    rx: 25.5,
    ry: 25.55,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M340.76 433.24l-12.74-3.84-85.44 12.78.64 58.14s103.93-4.47 115.41-31.3l-7.65-26.83z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M346.85 468.52l30.26 24.13 1.27-10.22-29.97-28.75-1.56 14.84z"
  }), React.createElement("path", {
    d: "M243.21 442.82s-11.48-10.22-48.46 0-149.2-14.05-149.2-14.05l-3.83 21.72s63.76 30.67 110.94 24.28c18.37-2.49 36.13 5.28 51 7.67a287.07 287.07 0 0 0 39.53 3.83z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M45.55 428.76l-17.85-6.39-12.76 44.73s14-15.33 26.78-16.61z"
  }), React.createElement("path", {
    d: "M88.9 372.55l26.78-6.39s12.75 76.66 31.88 83.05h-47.18s-3.83-74.11-11.48-76.66z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M115.68 366.16l-3.83-16.61L62.12 361s23 5.11 26.78 11.5z"
  }), React.createElement("path", {
    d: "M365.86 381.34c-6.76-.53-13.73-.07-20 2.51s-11.8 7.48-14.09 13.88-.81 14.26 4.36 18.67a7.62 7.62 0 0 0 4.49 2c2.71.11 5-1.88 7.08-3.61a59.53 59.53 0 0 1 12.8-8.08c3.91-1.82 8.68-3.16 12.38-.94 1.76 1.06 3 2.77 4.45 4.22a18.1 18.1 0 0 0 29.49-5.91c-1 2.37-10.09-.9-11.46-1.63-4.18-2.22-6.34-5.51-8.49-9.54-4.28-7.91-12.15-10.91-21.01-11.57z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M365.86 380.06c-6.76-.53-13.73-.07-20 2.51s-11.84 7.43-14.09 13.88-.81 14.26 4.36 18.67a7.62 7.62 0 0 0 4.49 2c2.71.11 5-1.88 7.08-3.61a59.53 59.53 0 0 1 12.8-8.08c3.91-1.82 8.68-3.16 12.38-.94 1.76 1.06 3 2.77 4.45 4.22a18.1 18.1 0 0 0 29.49-5.91c-1 2.37-10.09-.9-11.46-1.63-4.18-2.22-6.34-5.51-8.49-9.54-4.28-7.93-12.15-10.88-21.01-11.57z"
  }), React.createElement("ellipse", {
    cx: 656.49,
    cy: 525.32,
    rx: 3.83,
    ry: 1.91,
    transform: "rotate(-76.65 431 658.466)",
    fill: "#fda57d"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M341.92 496.61l.85 1.05 19.18-9.3-.84-1.16-19.19 9.41zM381.08 465.91l-3.13 20.99 1.16.66 2.46-21.41-.49-.24z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M264.89 412.15h15.3v103.49h-15.3zM236.767 122.4l14.503 4.873-32.957 98.102-14.504-4.873z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M275.09 423.65h-5.1V173.73l5.03.27.07 249.65z"
  }), React.createElement("path", {
    d: "M332.47 485l44.63 54.94 68.86-28.11s10.21-3.83 5.06-12.83-16.58 1.28-16.58 1.28l-51 17.89-31-43z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M314.02 439.63s19.13 58.77 21.68 60.05l30-14.69s-8.5-39.64-18-45.69-32.44-4.79-33.68.33z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M319.44 456.12s-1 22.48 5.38 26.31",
    opacity: 0.05
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M550.06 408l-9.29 9.09-23.7 99.15-.33-.05-74.74-1.87-34.5 13.64V533l105.83-1.12h7.28l4.53-.98 29.4-121.22-4.48-1.68z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M546.75 411l-8.85 8.65 5.87 2.13 7.24-9.18-4.26-1.6z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M537.9 419.65l5.87 2.13-25.06 107.15h-6.93l26.12-109.28z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M518.71 528.93l4.31-.93 27.99-115.4-7.24 9.18-25.06 107.15zM411.03 525.2v4.8l100.75-1.07 1.64-5.17-102.39 1.44z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M515.58 514.08l-.56-.08-71.14-1.78-32.85 12.98 102.35-1.06"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M474.02 521l2-6h39l-2 7-39-1z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M441.02 520l14-5h10l-5 5h-19z"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M334.02 540h18v164h-18z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M584.02 540h18v164h-18z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M336.02 540h15v161h-15zM586.02 540h15v161h-15z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M270.02 174L247 139.99l2.42-7.19 25.6 41.2h-5z"
  }), React.createElement("path", {
    d: "M383.613 418.002l3.332 2.214-5.578 8.396-3.332-2.214zM357.677 403.386l24.657 16.395-1.108 1.665-24.657-16.394z"
  }));
};

UndrawMissionImpossible.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMissionImpossible;