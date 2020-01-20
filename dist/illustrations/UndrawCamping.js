function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawCamping = function UndrawCamping(_props) {
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
    viewBox: "0 0 1070.95 699.99",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 330.01,
    y1: 508.56,
    x2: 330.01,
    y2: 378.95,
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
    x1: 331.18,
    y1: 435.61,
    x2: 331.18,
    y2: 275.03,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 330.79,
    y1: 364.98,
    x2: 330.79,
    y2: 214.89,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 330.01,
    y1: 294.36,
    x2: 330.01,
    y2: 160.36,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 330.01,
    y1: 229.17,
    x2: 330.01,
    y2: 112,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 330.79,
    y1: 166.31,
    x2: 330.79,
    y2: 61.54,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 810.81,
    y1: 508.56,
    x2: 810.81,
    y2: 378.95,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 811.97,
    y1: 435.61,
    x2: 811.97,
    y2: 275.03,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 811.58,
    y1: 364.98,
    x2: 811.58,
    y2: 214.89,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 810.81,
    y1: 294.36,
    x2: 810.81,
    y2: 160.36,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 810.81,
    y1: 229.17,
    x2: 810.81,
    y2: 112,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 811.58,
    y1: 166.31,
    x2: 811.58,
    y2: 61.54,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 716.62,
    y1: 473.23,
    x2: 722.45,
    y2: 473.23,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 666.57,
    y1: 452.78,
    x2: 666.57,
    y2: 323.18,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 667.73,
    y1: 379.83,
    x2: 667.73,
    y2: 219.26,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 667.34,
    y1: 309.21,
    x2: 667.34,
    y2: 159.12,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 666.57,
    y1: 238.59,
    x2: 666.57,
    y2: 104.59,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 666.57,
    y1: 173.4,
    x2: 666.57,
    y2: 56.23,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 667.34,
    y1: 110.54,
    x2: 667.34,
    y2: 5.77,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 572.39,
    y1: 417.45,
    x2: 578.22,
    y2: 417.45,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__u",
    x1: 512.71,
    y1: 447.02,
    x2: 512.71,
    y2: 317.41,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__v",
    x1: 513.88,
    y1: 374.06,
    x2: 513.88,
    y2: 213.49,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__w",
    x1: 513.49,
    y1: 303.44,
    x2: 513.49,
    y2: 153.35,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__x",
    x1: 512.71,
    y1: 232.82,
    x2: 512.71,
    y2: 98.82,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__y",
    x1: 512.71,
    y1: 167.63,
    x2: 512.71,
    y2: 50.46,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__z",
    x1: 513.49,
    y1: 104.77,
    x2: 513.49,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__A",
    x1: 418.53,
    y1: 411.68,
    x2: 424.36,
    y2: 411.68,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__B",
    x1: 433.73,
    y1: 558.36,
    x2: 718.73,
    y2: 558.36,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__C",
    x1: 213.13,
    y1: 601.39,
    x2: 213.13,
    y2: 589.5,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__D",
    x1: 277.65,
    y1: 693.91,
    x2: 277.65,
    y2: 675.81,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__E",
    x1: 247.54,
    y1: 609.81,
    x2: 247.54,
    y2: 600.99,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__F",
    x1: 312.07,
    y1: 704.43,
    x2: 312.07,
    y2: 691.01,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__G",
    x1: 213.44,
    y1: 637.18,
    x2: 213.44,
    y2: 630.72,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__H",
    x1: 277.97,
    y1: 733.9,
    x2: 277.97,
    y2: 724.07,
    xlinkHref: "#prefix__a"
  })), React.createElement("g", {
    opacity: 0.5
  }, React.createElement("path", {
    d: "M270.35 155.44c-12 16.85-21.23 65.92-23.8 80.71l-21.48-.43c1.11-12.71 26.1-64.39 33-78.57 3.91-.61 8.03-1.16 12.28-1.71z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#dce0ed",
    d: "M529.311 144.038l9.52-.19.269 13.41-9.52.19z"
  }), React.createElement("path", {
    d: "M538.48 144.47l.08 4.36a6.77 6.77 0 0 1-2.06.32l-7.45.08-.09-4.58z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M524.27 110.58l9-.17a10.79 10.79 0 0 1 10.1 6.58c2.75 6.43 5.17 16.68-.49 27.06a7.4 7.4 0 0 1-6.44 3.87l-11.46.07z",
    fill: "#dce0ed"
  }), React.createElement("ellipse", {
    cx: 589.14,
    cy: 229.3,
    rx: 9.62,
    ry: 18.72,
    transform: "rotate(-1.08 -4747.344 3602.773)",
    fill: "#f0f0f4"
  }), React.createElement("path", {
    fill: "#dce0ed",
    d: "M444.402 146.422l9.519-.18.22 11.738-9.517.18z"
  }), React.createElement("path", {
    d: "M453.93 146.23l.07 3.73a7.09 7.09 0 0 1-2.06.31l-7.45.08-.08-3.94z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M439.75 112.33l9-.17a10.8 10.8 0 0 1 10.12 6.54c2.75 6.43 5.17 16.69-.48 27.07a7.45 7.45 0 0 1-6.45 3.87l-11.46.12z",
    fill: "#dce0ed"
  }), React.createElement("ellipse", {
    cx: 504.62,
    cy: 231.06,
    rx: 9.62,
    ry: 18.72,
    transform: "rotate(-1.08 -4832.249 3604.625)",
    fill: "#f0f0f4"
  }), React.createElement("path", {
    d: "M442.28 119.13s-3.54.63-1.6 5.28a32.47 32.47 0 0 1 2.26 7.06s3.58 1.78 3.33-4.32-3.99-8.02-3.99-8.02z",
    fill: "#dce0ed"
  }), React.createElement("ellipse", {
    cx: 151.28,
    cy: 493.34,
    rx: 56.15,
    ry: 61.54,
    transform: "rotate(-1.08 -5185.945 3867.096)",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M106.7 335.24c-29.34 2.54-52.1 29.71-51.49 62.41.5 26.35 16 48.55 37.46 56.91 29.34-2.53 52.11-29.71 51.49-62.4-.5-26.36-16.04-48.55-37.46-56.92z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 588.1,
    cy: 350.57,
    rx: 45.57,
    ry: 59.42,
    transform: "rotate(-1.08 -4748.489 3724.257)",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M509.77 193.88c-18.76 7.59-32.13 30.63-31.62 57.62.55 28.84 16.76 52.58 37.76 57.58 18.76-7.6 32.13-30.64 31.62-57.62-.55-28.84-16.76-52.58-37.76-57.58z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M352.18 241.11l.44-21.59s-4.4-9.22-8.65-10-14-1.11-14-1.11-7 31.12-1.77 40.33 23.98-7.63 23.98-7.63z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M352.18 241.11l.44-21.59s-4.4-9.22-8.65-10-14-1.11-14-1.11-7 31.12-1.77 40.33 23.98-7.63 23.98-7.63z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M274.12 240.25s-3.19-29.85 13.24-30.7c2.11-.11 4.23-.2 6.33-.44 11.37-1.32 42.39-4.3 38.8 2.86 0 0-6.91 26.15-1.71 32.61zM508.07 291.3l22 .22s3-40.66 4.25-43.86 1.55-18.43-2.61-20.57-18-4.58-18-4.58l-9.72 23.34-.39 20.95z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M508.07 291.3l22 .22s3-40.66 4.25-43.86 1.55-18.43-2.61-20.57-18-4.58-18-4.58l-9.72 23.34-.39 20.95z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M453.48 224.92l-.18-4.52a2.61 2.61 0 0 1 2.66-2.72c10.94.26 50.73 1.41 57.76 4.83 0 0-6.55 56.76 2.11 70.08l-2 45.4-97.5-5.45z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M444.55 153.57c2.7-.32 5.91-.67 9.5-1l.1 5.41-9.52.18zM538.69 157.19v.68l-9.52.18-.07-4.11a40.25 40.25 0 0 1 9.59 3.25z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#dce0ed",
    d: "M588.96 291.21l-14.37.48-30.73-53.43-5.13-8.92 3.37-22.91 3.03 5.48 43.83 79.3zM457.68 227.27l-5.75 8.99-18.15-23.59-8.31-10.81 4.74-6.64 3.81 4.44 23.66 27.61z"
  }), React.createElement("path", {
    d: "M434.02 199.66c0 .46.07.93.11 1.4l-.35 11.61-8.3-10.81 4.74-6.64zM545.13 211.91l-1.27 26.35-5.13-8.92 3.37-22.91 3.03 5.48z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M417.48 216.82s-8.1-52.9 17.59-61.32a5.87 5.87 0 0 1 1-.22c5.94-.83 61.26-8.27 90.2-1.22 0 0 19.72 2.59 19.7 13.16l-6.22 129.36-14.17.26 3-85.51s6.14-37.34-5.1-39.66-62.29-5.59-80.17-.18c0 0-13.16-2.71-10.44 29.6l-.52 17.35z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M460.94 231.76a8.2 8.2 0 0 0-3.47-7.24c-4-2.93-16.36-9.21-16.36-9.21l-3.95.4-11.34 29.72 2 62.62 21.9 26.08z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M460.94 231.76a8.2 8.2 0 0 0-3.47-7.24c-4-2.93-16.36-9.21-16.36-9.21l-3.95.4-11.34 29.72 2 62.62 21.9 26.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M376.76 298.99l-.8-64.28s-2.37-24.92 12.53-25.62c0 0 35.16-.41 50.52 4.26a3.41 3.41 0 0 1 2 4.89c-2.94 5.35-7.8 19.46-9.6 55.45l.73 38.53z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M451.69 338.69l-63.99-.28h-.07l-31.45-.13 2.86-42.1 17.45.31 55.74 11.32 17.47 26.32 1.99 4.56z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M451.69 338.69l-63.99-.28h-.07l-31.45-.13 2.86-42.1 17.45.31 55.74 11.32 17.47 26.32 1.99 4.56z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M451.69 338.69l-63.99-.28-1.59-28.14 46.12-2.46 17.47 26.32 1.99 4.56z"
  }), React.createElement("path", {
    d: "M387.64 338.41l-31.45-.14 2.85-42.09s10.13 15.52 27.08 14.08z",
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M613.9 368.15c-1 12.07-9.64 10.33-9.64 10.33l-1.6-.11-15.88-1.14.28-18.73a69.12 69.12 0 0 1 16.1.66c5.96 1.12 11.2 3.62 10.74 8.99z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M613.9 368.15c-1 12.07-9.64 10.33-9.64 10.33l-1.6-.11a16.22 16.22 0 0 1-2.7-9c-.08-4.19 1.19-7.93 3.2-10.2 5.96 1.11 11.2 3.61 10.74 8.98z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M365.86 214.83c-14.48.28-25.92 16.35-25.55 35.91s12.41 35.2 26.89 34.92 25.92-16.35 25.55-35.91-12.41-35.19-26.89-34.92zm-2.5 63.5c-11 .21-20.2-11.12-20.47-25.31s8.46-25.86 19.5-26.07 20.19 11.13 20.46 25.32-8.46 25.85-19.49 26.06z",
    fill: "#636780"
  }), React.createElement("path", {
    fill: "#636780",
    d: "M368 261.12l12.49 11.82 4.24-10.87-17.96-10.03 1.23 9.08z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M383.82 141.49l10.71 1.1 4.04 4.63-5.49 27.14-11.94 43.77-7.8 30.05-5.55 18.26-3.3 24.09-3.44 16.59L350 318.59 326.6 292l-3.93-8.94-9.35-18.22 23.06-11.32 25.48-2.74 11.43-31 9.08-35.84 1.45-42.45z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M170.27 274.37l-11.74 117.4 175.57-10.72-21.39-57.13-34.24-21.35 77.41-.19-.19-32.15-31.42-6.17-63.1-3.89-47.4-1.22-44.97 15.66"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M170.27 274.37l-11.74 117.4 175.57-10.72-21.39-57.13-34.24-21.35 77.41-.19-.19-32.15-31.42-6.17-63.1-3.89-47.4-1.22-44.97 15.66"
  }), React.createElement("path", {
    d: "M412.53 386.57c.55 29.11-8.62 55.79-35.51 53.39-33.86-.08-37-22.9-37.5-52s15.38-51.08 35.54-51.46 36.92 20.96 37.47 50.07z",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M412.74 386.62c-.42-22.54-10.56-40.42-24.48-47.18-17.63 3.7-30.85 24.32-30.35 50.87.45 23.86 2.61 43.48 22 49.84 24.82.42 33.36-25.42 32.83-53.53z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M446.15 340.24l-10.1 12.01 18.52-3.54 13.64-13.02 11.92-25 17.25-11.03 42.89 5.01 39.63.75 14.37-13.25-16.35-1.91-16.52-.07-41.49-.15-49.38-.38-9.62 27.21-7.34 18.72-7.42 4.65z"
  }), React.createElement("path", {
    d: "M589.06 385.75c-.82 1.28-28.44 6-28.44 6l-76.27 15.4-131.49 4.38-15.68-12.78-8.08 1.6-.32.06-107.92 21.27-1.77-.22-29.61-3.65-154.55-19.06 1.31-22.41.77-13.22 1.59-27.47 1.35-7.22 13.7-1.51 6.41-.71 99.87-11.07 13.06-1.45 7.32-.81 71.28-11.07 104.29.57-.18-32.15 38.83-127.64c9.12 1.3 9 7.44 9 7.44l-32.82 120.12 1 73.38c73.14 6 75.19-10 86.84-4.81l13.12-44.87 122.64-1.69c4.94 5.83-5.25 93.59-5.25 93.59z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M283.54 324.89l40.48 82.79 13.19 3.98 2.92-13.59-15.47-46.03-15.52-26.57-25.6-.58z"
  }), React.createElement("path", {
    opacity: 0.15,
    d: "M283.54 324.89l40.48 82.79 13.19 3.98 2.92-13.59-15.47-46.03-15.52-26.57-25.6-.58z"
  }), React.createElement("ellipse", {
    cx: 324.48,
    cy: 517.36,
    rx: 70.47,
    ry: 79.94,
    transform: "translate(-74.24 -93.79)",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M283.68 341.93c-36.83 3.27-65.38 38.55-64.57 81 .64 34.23 20.17 63.07 47.06 74 36.82-3.27 65.37-38.55 64.57-81-.65-34.27-20.18-63.11-47.06-74z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M68.48 281.16l-3.18 16.5-9.73 50.57-46-3.57s-2.9-8.4 4.23-11.71c0 0 1.81-28.67 10.12-37.84a8.67 8.67 0 0 1 3.29-2.39z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M65.28 297.66l-9.73 50.57-46-3.57s-2.9-8.4 4.23-11.71c0 0 1.81-28.67 10.12-37.84z",
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M171.93 283.64c6.11 9.82-6.54 101.65-6.54 101.65l-113-16.48 2.5-80.21c2-14.42 10.48-16.27 10.48-16.27C104.74 251.49 196 245.54 196 245.54c83.36 1.59 159.74 24.69 159.74 24.69-95.04-12.8-183.81 13.41-183.81 13.41z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M165.39 385.29l-113-16.48 2.5-80.21c2-14.42 10.48-16.27 10.48-16.27s82.11-9.34 106.56 11.31c6.11 9.82-6.54 101.65-6.54 101.65z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M153.38 380.23l-94.53-14.1 2.07-68.43c1.71-12.31 8.75-13.88 8.75-13.88s68.65-8 89.15 9.69c5.1 8.38-5.44 86.72-5.44 86.72z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 209.09,
    cy: 424.14,
    rx: 12.9,
    ry: 23.47,
    transform: "rotate(-1.08 -5127.996 3798.14)",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 209.07,
    cy: 423.51,
    rx: 12.9,
    ry: 23.47,
    transform: "translate(-72.48 -95.98)",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M145.92 306.13s-5.27.94-2.39 7.87 3.37 10.51 3.37 10.51 5.34 2.65 5-6.44-5.98-11.94-5.98-11.94z",
    fill: "#f0f0f4"
  }), React.createElement("ellipse", {
    cx: 139.77,
    cy: 416.15,
    rx: 12.05,
    ry: 21.93,
    transform: "rotate(-1.08 -5197.422 3790.059)",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 139.76,
    cy: 415.51,
    rx: 12.05,
    ry: 21.93,
    transform: "rotate(-1.08 -5197.412 3788.998)",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M76.6 298.13s-5.27.95-2.39 7.87 3.38 10.51 3.38 10.51 5.33 2.65 4.95-6.43-5.94-11.95-5.94-11.95z",
    fill: "#f0f0f4"
  }), React.createElement("path", {
    d: "M129.39 304.54c-.68 8.68-3.7 73-3.7 73l-7.21-1.03-4-.58-5.33-.79-.64-.09-21.03-3.06 2.85-68.26a8.56 8.56 0 0 1 6.12-7.84 8.36 8.36 0 0 1 2.36-.34h.64c1.45.09 3 .22 4.64.36l2.09.21c2 .2 4.09.45 6.14.75 1 .16 2.06.32 3.08.5 1.71.31 3.37.65 4.9 1.05 1 .27 2 .56 2.93.88 3.84 1.28 6.34 2.99 6.16 5.24z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M98.84 295.51l-2.65 76.7-2.33-.16 2.62-76.2a8.36 8.36 0 0 1 2.36-.34zM106.21 296.1l-2.38 77.45-3.59.07 3.88-77.73zM115.48 297.35l-4.59 77.76h-2.33v-.1l3.83-78.2c1 .18 2.02.36 3.09.54zM123.26 299.28l-4.78 77.23v.15l-4-.35v-.38l5.84-77.53c1.05.27 2.03.59 2.94.88z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M38.39 360.62s-8.53-40 9.19-42.38 76.16.79 74.73 17.31-2.83 41.62-2.83 41.62l-12.11-2.47s8.33-37.91-5.81-39.07-48.79-4.47-48.79-4.47-9.38-1.41-3.36 31.63z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M38.48 364.42s-8.57-42.51 9.15-44.91 76.16.79 74.72 17.31-2.87 41.62-2.87 41.62l-12.11-2.45s8.32-37.91-5.82-39.07-48.78-4.48-48.78-4.48-9.29 1.11-3.29 34.15z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M352.86 411.57l-15.64.08c-12.37-50.1-31.78-81-31.78-81-6.41-3.27-75.75-1.54-75.75-1.54-7.17 1.41-8.64 24.28-8.64 24.28s6.23 5.17.38 8.67c-2.62 1.55-11.31 2-21.35 1.68-12.47-.41-27-2-34.54-4.23-13.61-4-3-12-3-12s1.86-2.57 2.86-16.55a56.46 56.46 0 0 1 7.29-23.18c.56-1 .92-1.51.92-1.51a7.52 7.52 0 0 1 2.44-1.6c17.79-7.82 105.78-2.35 105.78-2.35l32.76 9.75c.9.35 2.34 2.61 4.12 6.25 10.77 21.84 34.15 93.25 34.15 93.25z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M352.86 411.57l-15.64.08c-12.37-50.1-31.78-81-31.78-81-6.41-3.27-75.75-1.54-75.75-1.54-7.17 1.41-8.64 24.28-8.64 24.28s6.23 5.17.38 8.67c-2.62 1.55-11.31 2-21.35 1.68-12.47-.41-27-2-34.54-4.23-13.61-4-3-12-3-12s1.86-2.57 2.86-16.55a56.46 56.46 0 0 1 7.29-23.18c.56-1 .92-1.51.92-1.51a7.52 7.52 0 0 1 2.44-1.6c17.79-7.82 105.78-2.35 105.78-2.35l32.76 9.75c.9.35 2.34 2.61 4.12 6.25 10.77 21.84 34.15 93.25 34.15 93.25z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M318.73 318.29c-30.28-11.11-113-3.35-113-3.35-8.94-7.36-25.5-7.54-33-7.19.56-1 .92-1.51.92-1.51a7.52 7.52 0 0 1 2.44-1.6c17.79-7.82 105.78-2.35 105.78-2.35l32.76 9.75c.85.35 2.32 2.61 4.1 6.25z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M210.65 317.99c-1.77 6.59-9.1 33-9.1 33a110.16 110.16 0 0 0-1.47 12.73c-12.47-.41-27-2-34.54-4.23-13.61-4-3-12-3-12s1.86-2.57 2.86-16.55a56.22 56.22 0 0 1 8.21-24.69 7.52 7.52 0 0 1 2.44-1.6c11.83 2.54 35.95 8.34 34.6 13.34z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M210.65 317.99c-1.77 6.59-9.1 33-9.1 33a110.16 110.16 0 0 0-1.47 12.73c-12.47-.41-27-2-34.54-4.23-13.61-4-3-12-3-12s1.86-2.57 2.86-16.55a56.22 56.22 0 0 1 8.21-24.69 7.52 7.52 0 0 1 2.44-1.6c11.83 2.54 35.95 8.34 34.6 13.34z",
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M226.86 151.15c-8.38 1.43-11.7 18.94-11.7 18.94l-21.4 76.71 161.94 23.43 38.83-127.64c-38.22-16.41-167.67 8.56-167.67 8.56zm131.41 79s-.81 7.32-7 8.07l-104.73-2.12-21.48-.43-7.21-.15h-.51s-7.91 1.58-6.76-5.1c0 0 7.52-63.6 22.81-68.65 0 0 1.6-.36 4.39-.94 4.38-.92 11.7-2.36 20.32-3.72 3.87-.61 8-1.2 12.24-1.71 11.62-1.41 24.14-2.24 34.46-1.41 0 0 76.93-8.59 71.71 8.64-.03-.03-15.03 62.28-18.24 67.57z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M217.86 235.57h-.51s-7.91 1.58-6.76-5.1c0 0 7.52-63.6 22.81-68.65 0 0 1.6-.36 4.39-.94-5.38 10.99-22.6 48.64-19.93 74.69z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M217.86 235.57h-.51s-7.91 1.58-6.76-5.1c0 0 7.52-63.6 22.81-68.65 0 0 1.6-.36 4.39-.94-5.38 10.99-22.6 48.64-19.93 74.69zM235.02 391.75a10.2 10.2 0 0 1-9.45 5.54l-3.24-.08-30.51-.74-11-.26-10.17-.66-134.41-19.21.77-13.22 15.47 1.87 6.4.8 94.87 11.74 12.49 1.55 6 .75 25.59-.67 27.69-.72a10.31 10.31 0 0 1 4.1.71 9.94 9.94 0 0 1 5.47 5 8.37 8.37 0 0 1-.07 7.6z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M235.05 392.99a10.21 10.21 0 0 1-9.46 5.54l-44.74-1.08-10.16-.66-143.36-20.46-11.26-1.61-6.14-.88c-12.1-2.31-8.73-14.43-8.73-14.43.74-5.51 21.36-11 28.13-10.89 4.55.05 5.32 7.05 5.33 11.64 0 2.25-.17 3.91-.17 3.91l6.7.83 131.11 16.24 53.28-1.39a10.24 10.24 0 0 1 9.56 5.7 8.38 8.38 0 0 1-.09 7.54z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M19.75 356.31s5.84 6.87 14.74 7.76c-.01 0-3.74-7.75-14.74-7.76zM18.64 375.99s-18.83 0-18.64 10.1 12.07 11.61 12.07 11.61l168.7 29.18 47.8-.06s16.45-13.63-1-19.23l-48.19 2.18-160.81-26.36s4.12-5.79.07-7.42z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M228.6 428.09l-47.8.06-150-25.94-11-1.9-7.7-1.32S.22 397.52.03 387.38c-.14-7.29 9.53-9.31 15-9.87 2.15-.22 3.65-.21 3.65-.21 4 1.61-.08 7.4-.08 7.4l5.86 1 155 25.4 48.18-2.18c17.41 5.53.96 19.17.96 19.17z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M32.65 367.49l9.85-4.63 5.07-.3.39 42.72-15.71-2.88-6.63-4.11-3.51-17.7s1.13-7.42 1.75-8.07 8.79-5.03 8.79-5.03z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M32.65 367.49l9.85-4.63 5.07-.3.39 42.72-15.71-2.88-6.63-4.11-3.51-17.7s1.13-7.42 1.75-8.07 8.79-5.03 8.79-5.03z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M30.79 402.21c.13.14.19.22.19.22l-11-1.92a1.37 1.37 0 0 1-.13-.2c-6-9.24-6.61-16.81-4.8-22.82 2.15-.22 3.65-.21 3.65-.21 4 1.61-.08 7.4-.08 7.4l5.86 1c-.27 8.31 5.22 15.23 6.31 16.53zM46.31 362.58a69.25 69.25 0 0 0-5.12 2.32c-7 3.56-11.37 7.49-13.86 11.43l-11.26-1.61c4.68-10.21 16.22-15.05 16.22-15.05l2.37.49z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M33.56 359.65S2.92 372.5 21.22 400.49l11 1.91s-22.25-24.54 15.32-39.84zM107.39 372l11.42-.63-1.04 45.91-18.46-3.03-7.9-3.66-3.76-9.02-2.71-9.05 5.98-8.36 6.89-4.78 9.58-7.38z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M107.39 372l11.42-.63-1.04 45.91-18.46-3.03-7.9-3.66-3.76-9.02-2.71-9.05 5.98-8.36 6.89-4.78 9.58-7.38z"
  }), React.createElement("ellipse", {
    cx: 171.1,
    cy: 495.72,
    rx: 5.5,
    ry: 9.3,
    transform: "rotate(-1.08 -5166.337 3869.403)",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M67.16 422.42c-1.74-8.06-8-9.69-8-9.69s-12-3.26-12 9.9c0 0 .31 8.09 5.75 10.52l.48 9s.64 8.39-4.13 7.69-4.28-8.17-4.28-8.17-2.69-7.88-8.8-3.64c0 0-1.34 4.47 1.87 6.63 1.88 1.26 2 3.9 1.77 5.88a8.6 8.6 0 0 0 2.11 6.85 8 8 0 0 0 7.68 2.6 11.89 11.89 0 0 0 6.53-3.93 17.26 17.26 0 0 0 4.34-11.6v-11.61s8.42-2.38 6.68-10.43zm-9.6 8.35a6.74 6.74 0 1 1 6.61-6.87 6.75 6.75 0 0 1-6.61 6.87z",
    fill: "#dce0ed"
  }), React.createElement("path", {
    d: "M54.39 409.33a3 3 0 0 0-1.42 4.19c1.29 2.31 2.84 5.3 2.71 6.1-.21 1.35 2.78.18 3.17-.14s5.87-.11 6.12-3.84a6.45 6.45 0 0 0-3-5.66l1.11-8.19-7.54-.49.22 7.45z",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M54.39 409.33a3 3 0 0 0-1.42 4.19c1.29 2.31 2.84 5.3 2.71 6.1-.21 1.35 2.78.18 3.17-.14s5.87-.11 6.12-3.84a6.45 6.45 0 0 0-3-5.66l1.11-8.19-7.54-.49.22 7.45z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M56.48 409.13s2.7 8.68 1.6 9-1.6-9-1.6-9zM59.25 406.99s2.71 8.67 1.6 9-1.6-9-1.6-9z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M89.15 380.17l-3.73 26.3s-5.25-.61-8.15-1.18a6 6 0 0 1-1.83-.53c-.15-.15-.46-.13-.87 0-1.41.32-3.9 1.53-4.4.56a.87.87 0 0 0-.15-.21c-.51-.53-1.47-.11-2.39 0a2 2 0 0 1-1.49-.17c-.79-.5-2.35.37-3.64.67-.81.19-1.52.17-1.86-.56a1.7 1.7 0 0 0-1.28-.88c-1.23-.28-2.93 0-3.91-.23-.39-.07-.66-.21-.76-.47-.2-.57-1.29-.82-2.46-1-1.42-.25-3-.42-3.08-1 0-.19-.17-.27-.38-.27a12.5 12.5 0 0 0-2.31.61c-.63.17-1.16.19-1.32-.27s-.9-.42-1.73-.21c-.67.18-1.41.46-2 .6s-.87.15-.94-.09c-.23-.84-2.94 1.12-3.6-.57s-9.55-12.72 1.38-27.52c0 0 3 .16 5.36.53a8.2 8.2 0 0 1 2.24.59c.81.44 2.54.31 4.09.39a5.41 5.41 0 0 1 2.28.5 1.41 1.41 0 0 1 .64.66c.37.8 1.19.95 2.08.88 1.19-.09 2.52-.57 3-.34.89.36 4.2-.07 4.78.47v.05c.25.36 1.54 0 2.86-.25a3.21 3.21 0 0 1 2.63.37 2.89 2.89 0 0 0 2.08.57 11.7 11.7 0 0 1 2.69.05 1.1 1.1 0 0 1 .54.33c.55.66 1.84.54 3 .58a3 3 0 0 1 1.68.39 1.55 1.55 0 0 0 .62.24 17.87 17.87 0 0 0 5.09-.35z",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M43.41 401.31c-.67.18-1.41.46-2 .6-8.84-13.16-1.8-23.41 2.2-27.65a8.2 8.2 0 0 1 2.24.59c-8.37 10.14-4.17 22.47-2.44 26.46z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M48.77 401.18a12.5 12.5 0 0 0-2.31.61c-7.6-12.86-.22-22.72 3.53-26.54a5.41 5.41 0 0 1 2.28.5c-8.06 9.15-5.41 20.29-3.5 25.43z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M55.48 403.93c-.39-.07-.66-.21-.76-.47-.2-.57-1.29-.82-2.46-1-6.67-11.65-1.08-20.8 2.76-25.15 1.19-.09 2.52-.57 3-.34-8.88 10.37-4.24 23.2-2.54 26.96z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M62.48 405.6c-.81.19-1.52.17-1.86-.56a1.7 1.7 0 0 0-1.28-.88c-7.77-13-.29-22.91 3.47-26.72v.05c.25.36 1.54 0 2.86-.25-10.41 10.99-4.65 25.21-3.19 28.36z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M70.02 405.06c-.51-.53-1.47-.11-2.39 0-8.08-12.87-1.07-22.83 2.82-26.92a11.7 11.7 0 0 1 2.69.05c-8.96 10.06-4.95 22.53-3.12 26.87z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M77.27 405.29a6 6 0 0 1-1.83-.53c-.15-.15-.46-.13-.87 0-7.17-11.75-1.8-21 2.1-25.58a3 3 0 0 1 1.68.39 1.55 1.55 0 0 0 .62.24c-7.41 9.91-3.37 21.63-1.7 25.48z",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 347.12,
    cy: 520.74,
    rx: 34.47,
    ry: 50.75,
    transform: "rotate(-1.08 -4989.9 3894.41)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 345.98,
    cy: 521.5,
    rx: 25.06,
    ry: 41.13,
    transform: "rotate(-1.08 -4990.971 3895.461)",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 345.95,
    cy: 520.23,
    rx: 25.06,
    ry: 41.13,
    transform: "translate(-74.29 -93.38)",
    fill: "#f0f0f4"
  }), React.createElement("ellipse", {
    cx: 349.98,
    cy: 492.55,
    rx: 2.96,
    ry: 5.08,
    transform: "rotate(-1.08 -4986.983 3866.319)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 362.66,
    cy: 536.73,
    rx: 2.96,
    ry: 5.08,
    transform: "rotate(-1.08 -4974.135 3910.475)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 330.33,
    cy: 516.19,
    rx: 2.96,
    ry: 5.08,
    transform: "rotate(-1.08 -5006.836 3890.006)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 339.56,
    cy: 545.63,
    rx: 2.96,
    ry: 5.08,
    transform: "rotate(-1.08 -4997.567 3919.804)",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M533.08 322.08s26 65.5 24.79 69.65c0 0 10.59 6.15 13.09 4.51s-.26-30.77-.26-30.77l-5.22-25.6-5.68-15.12z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M533.08 322.08s26 65.5 24.79 69.65c0 0 10.59 6.15 13.09 4.51s-.26-30.77-.26-30.77l-5.22-25.6-5.68-15.12z",
    opacity: 0.15
  }), React.createElement("ellipse", {
    cx: 366.37,
    cy: 509.16,
    rx: 2.96,
    ry: 5.08,
    transform: "rotate(-1.08 -4970.692 3882.92)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 350.53,
    cy: 521.73,
    rx: 8.67,
    ry: 12.05,
    transform: "rotate(-1.08 -4986.727 3895.501)",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M562.33 409.73c.72 38.19-11.3 73.19-46.58 70-44.42-.12-48.48-30-49.2-68.24s20.19-67 46.64-67.51 48.42 27.57 49.14 65.75z",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M562.61 409.79c-.56-29.56-13.86-53-32.11-61.88-23.13 4.85-40.47 31.89-39.82 66.73.59 31.29 3.43 57 28.88 65.38 32.55.56 43.75-33.35 43.05-70.23z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M580.74 393.2s-6.24 5.51-9.8 1.77c0 0-9.86-68.34-20.65-68.45l-37.11.38s-4.41 2-6.15 10.27l-22.71 68.75-131.48 4.39-10.44-20.85 108.79-1.74v-.05c.55-2.12 17.5-67.37 29.56-75.67a5.08 5.08 0 0 1 1.33-.68s45.24-6.89 60.22-3c0 0 15.61 3.19 19.51 7.88.52.53 6.53 7 8.71 26.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M580.76 394.47s-6.24 5.51-9.8 1.77c0 0-9.85-68.34-20.64-68.45l-37.12.38s-4.4 2-6.15 10.27l-22.7 68.75-131.49 4.38-10.38-20.85 108.74-1.73c.55-2.12 17.49-67.37 29.56-75.67a5.48 5.48 0 0 1 1.32-.67s45.24-6.89 60.23-3c0 0 15.6 3.2 19.5 7.89.52.53 6.53 7 8.71 26.13z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M580.76 394.47s-6.24 5.51-9.8 1.77c0 0-9.85-68.34-20.64-68.45l-37.12.38s-4.4 2-6.15 10.27l-22.7 68.75-131.49 4.38-10.38-20.85 108.74-1.73c.55-2.12 17.49-67.37 29.56-75.67a5.48 5.48 0 0 1 1.32-.67s45.24-6.89 60.23-3c0 0 15.6 3.2 19.5 7.89.52.53 6.53 7 8.71 26.13z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M498.79 321.14c-3 6.09-28.93 80.82-28.93 80.82l-18.64-13v.03c.55-2.12 17.51-67.44 29.58-75.69 7.97 1.16 20.07 3.69 17.99 7.84z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M462.63 287.88l-14 49.12-77.75-.75.77 7.28s61.07 7.73 86.84-4.81l13.12-44.88 122.64-1.68-23.47-5.05z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M462.63 287.88l-14 49.12-77.75-.75.77 7.28s61.07 7.73 86.84-4.81l13.12-44.88 122.64-1.68-23.47-5.05z",
    fill: "#fff",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M99.78 371.72s-41.26 21.72-10 40.8l8.28 1.75s-30.64-21.21 19.5-42.88z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M101.05 371.7s-41.26 21.72-10 40.8l8.28 1.75s-30.64-21.21 19.5-42.89z",
    fill: "#dce0ed"
  }), React.createElement("ellipse", {
    cx: 597.46,
    cy: 515.69,
    rx: 23.16,
    ry: 39.65,
    transform: "translate(-74.15 -88.63)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 596.7,
    cy: 516.56,
    rx: 16.83,
    ry: 32.13,
    transform: "rotate(-1.08 -4739.974 3890.4)",
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 596.67,
    cy: 515.29,
    rx: 16.83,
    ry: 32.13,
    transform: "rotate(-1.08 -4739.964 3889.338)",
    fill: "#f0f0f4"
  }), React.createElement("ellipse", {
    cx: 599.32,
    cy: 493.68,
    rx: 1.99,
    ry: 3.97,
    transform: "rotate(-1.08 -4737.107 3867.613)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 607.93,
    cy: 528.22,
    rx: 1.99,
    ry: 3.97,
    transform: "rotate(-1.08 -4728.413 3902.18)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 586.17,
    cy: 512.1,
    rx: 1.99,
    ry: 3.97,
    transform: "rotate(-1.08 -4750.544 3886.055)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 592.43,
    cy: 535.12,
    rx: 1.99,
    ry: 3.97,
    transform: "rotate(-1.08 -4744.393 3908.927)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 610.36,
    cy: 506.69,
    rx: 1.99,
    ry: 3.97,
    transform: "rotate(-1.08 -4726.086 3880.45)",
    fill: "#636780"
  }), React.createElement("ellipse", {
    cx: 599.75,
    cy: 516.47,
    rx: 5.82,
    ry: 9.42,
    transform: "translate(-74.17 -88.59)",
    fill: "#636780"
  }), React.createElement("path", {
    d: "M193.48 245.69s70.45 1.21 162.27 24.54z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M527.03 116.09s-3.81.68-1.73 5.69a34.5 34.5 0 0 1 2.44 7.6s3.86 1.92 3.58-4.65-4.29-8.64-4.29-8.64z",
    fill: "#dce0ed"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M308.28 378.95h43.46v129.6h-43.46z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M311.39 378.95h37.25v127.28h-37.25z"
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M331.18 275.03L156.17 435.61h350.01l-175-160.58z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M331.18 279.25L163.16 431.31H499.2L331.18 279.25z"
  }), React.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M330.79 214.9L178.68 364.98H482.9L330.79 214.9z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M330.79 218.98l-145.9 143.96h291.8l-145.9-143.96z"
  }), React.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M330.01 160.36l-117.18 134H447.2l-117.19-134z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M330.01 166.48L218.26 291.3h223.51L330.01 166.48z"
  }), React.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M330.01 112l-87.69 117.17h175.39L330.01 112z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M330.01 115.46L246.2 227.44h167.63l-83.82-111.98z"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M330.79 61.54L270.3 166.31h120.98L330.79 61.54z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M330.79 64.65l-57.8 100.11h115.6l-57.8-100.11z"
  }), React.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M789.08 378.95h43.46v129.6h-43.46z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M792.18 378.95h37.25v127.28h-37.25z"
  }), React.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M811.97 275.03l-175 160.58h350l-175-160.58z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M811.97 279.25L643.95 431.31h336.04L811.97 279.25z"
  }), React.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M811.58 214.9L659.47 364.98h304.22L811.58 214.9z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M811.58 218.98l-145.9 143.96h291.8l-145.9-143.96z"
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M810.81 160.36l-117.19 134h234.37l-117.18-134z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M810.81 166.48L699.05 291.3h223.51L810.81 166.48z"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M810.81 112l-87.7 117.17H898.5L810.81 112z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M810.81 115.46l-83.82 111.98h167.63l-83.81-111.98z"
  }), React.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M811.58 61.54l-60.49 104.77h120.98L811.58 61.54z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M811.58 64.65l-57.8 100.11h115.6l-57.8-100.11z"
  }), React.createElement("path", {
    d: "M722.32 472.66c-.47-2.25-2.13-3.84-3.67-3.55s-2.37 2.43-1.89 4.68 2.13 3.84 3.67 3.55 2.36-2.34 1.89-4.68z",
    transform: "translate(-64.52 -100.01)",
    fill: "url(#prefix__m)"
  }), React.createElement("path", {
    d: "M658.98 370.88c-.47-2.25-2.13-3.85-3.67-3.55s-2.36 2.42-1.89 4.67 2.13 3.85 3.67 3.55 2.39-2.36 1.89-4.67z",
    fill: "#fff"
  }), React.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M644.84 323.18h43.46v129.6h-43.46z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M647.94 323.18h37.25v127.28h-37.25z"
  }), React.createElement("path", {
    fill: "url(#prefix__o)",
    d: "M667.73 219.26l-175 160.57h350.01L667.73 219.26z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M667.73 223.48L499.71 375.54h336.04L667.73 223.48z"
  }), React.createElement("path", {
    fill: "url(#prefix__p)",
    d: "M667.34 159.12l-152.1 150.09h304.21L667.34 159.12z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M667.34 163.21l-145.9 143.96h291.81L667.34 163.21z"
  }), React.createElement("path", {
    fill: "url(#prefix__q)",
    d: "M666.57 104.59l-117.19 134h234.37l-117.18-134z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M666.57 110.71L554.81 235.53h223.51L666.57 110.71z"
  }), React.createElement("path", {
    fill: "url(#prefix__r)",
    d: "M666.57 56.23l-87.7 117.17h175.39L666.57 56.23z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M666.57 59.69l-83.82 111.98h167.63L666.57 59.69z"
  }), React.createElement("path", {
    fill: "url(#prefix__s)",
    d: "M667.34 5.77l-60.48 104.77h120.97L667.34 5.77z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M667.34 8.87l-57.8 100.12h115.6L667.34 8.87z"
  }), React.createElement("path", {
    d: "M578.08 416.89c-.47-2.25-2.13-3.84-3.67-3.55s-2.36 2.43-1.89 4.68 2.13 3.84 3.67 3.55 2.37-2.37 1.89-4.68z",
    transform: "translate(-64.52 -100.01)",
    fill: "url(#prefix__t)"
  }), React.createElement("path", {
    d: "M514.75 315.11c-.48-2.25-2.13-3.85-3.67-3.55s-2.37 2.42-1.9 4.67 2.13 3.85 3.67 3.55 2.37-2.37 1.9-4.67z",
    fill: "#fff"
  }), React.createElement("path", {
    fill: "url(#prefix__u)",
    d: "M490.98 317.41h43.46v129.6h-43.46z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M494.09 317.41h37.25v127.28h-37.25z"
  }), React.createElement("path", {
    fill: "url(#prefix__v)",
    d: "M513.88 213.49l-175 160.57h350l-175-160.57z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M513.88 217.71L345.86 369.77H681.9L513.88 217.71z"
  }), React.createElement("path", {
    fill: "url(#prefix__w)",
    d: "M513.49 153.35L361.38 303.44H665.6L513.49 153.35z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M513.49 157.44L367.59 301.4h291.8l-145.9-143.96z"
  }), React.createElement("path", {
    fill: "url(#prefix__x)",
    d: "M512.72 98.82l-117.19 134H629.9l-117.18-134z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M512.72 104.94L400.96 229.76h223.51L512.72 104.94z"
  }), React.createElement("path", {
    fill: "url(#prefix__y)",
    d: "M512.72 50.46l-87.7 117.17h175.39L512.72 50.46z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M512.72 53.91L428.9 165.9h167.63L512.72 53.91z"
  }), React.createElement("path", {
    fill: "url(#prefix__z)",
    d: "M513.49 0L453 104.77h120.98L513.49 0z"
  }), React.createElement("path", {
    fill: "#4c4981",
    d: "M513.49 3.1l-57.8 100.12h115.6L513.49 3.1z"
  }), React.createElement("path", {
    d: "M424.23 411.12c-.47-2.25-2.13-3.84-3.67-3.55s-2.37 2.43-1.89 4.68 2.13 3.84 3.67 3.55 2.36-2.37 1.89-4.68z",
    transform: "translate(-64.52 -100.01)",
    fill: "url(#prefix__A)"
  }), React.createElement("path", {
    fill: "#71412d",
    d: "M876.32 578.98h-13.54v-10.59h13.54zM872.2 595.46h-6.47v-16.48h6.47z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#71412d",
    strokeMiterlimit: 10,
    strokeWidth: 1.84,
    d: "M770.28 435.85l95.45 143.13"
  }), React.createElement("path", {
    fill: "#71412d",
    d: "M276.32 568.38h13.54v10.59h-13.54zM280.44 578.98h6.47v16.48h-6.47z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#71412d",
    strokeMiterlimit: 10,
    strokeWidth: 1.84,
    d: "M382.35 435.85l-95.44 143.13"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M575.98 96.07L712.5 332.53l136.52 236.45H302.95l136.52-236.45L575.98 96.07z"
  }), React.createElement("path", {
    d: "M437.27 534.34h137.72l.88-218.94s-135.07 40.09-138.6 218.94zM576.1 315.4l.89 218.94h137.72C711.18 355.49 576.1 315.4 576.1 315.4z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M438.28 539.46H714.6v39.43H438.28z"
  }), React.createElement("path", {
    fill: "url(#prefix__B)",
    d: "M433.73 534.36h285v48h-285z"
  }), React.createElement("path", {
    opacity: 0.2,
    d: "M438.28 539.46H714.6v39.43H438.28z"
  }), React.createElement("path", {
    fill: "url(#prefix__C)",
    d: "M208.73 589.5h8.79v11.9h-8.79z"
  }), React.createElement("path", {
    d: "M277.65 675.81c-10.57 0-19.14 7.57-19.14 18.1h38.28c0-10.53-8.57-18.1-19.14-18.1z",
    transform: "translate(-64.52 -100.01)",
    fill: "url(#prefix__D)"
  }), React.createElement("path", {
    fill: "url(#prefix__E)",
    d: "M244.28 600.99h6.52v8.82h-6.52z"
  }), React.createElement("path", {
    d: "M312.07 691c-7.84 0-14.2 5-14.2 13.42h28.39c0-8.42-6.36-13.42-14.19-13.42z",
    transform: "translate(-64.52 -100.01)",
    fill: "url(#prefix__F)"
  }), React.createElement("path", {
    fill: "url(#prefix__G)",
    d: "M211.06 630.72h4.78v6.46h-4.78z"
  }), React.createElement("path", {
    d: "M278 724.07c-5.74 0-10.4 3.52-10.4 9.83h20.8c-.03-6.31-4.69-9.83-10.4-9.83z",
    transform: "translate(-64.52 -100.01)",
    fill: "url(#prefix__H)"
  }), React.createElement("path", {
    fill: "#d5b7ac",
    d: "M210.38 590.97h8.03v10.87h-8.03z"
  }), React.createElement("path", {
    d: "M214.4 578.45c-9.65 0-17.48 6.92-17.48 16.54h35c-.03-9.62-7.86-16.54-17.52-16.54z",
    fill: "#ff6e40"
  }), React.createElement("path", {
    fill: "#d5b7ac",
    d: "M242.86 601.47h5.96v8.06h-5.96z"
  }), React.createElement("path", {
    d: "M245.84 592.34c-7.16 0-13 4.57-13 12.26h25.93c.04-7.69-5.76-12.26-12.93-12.26z",
    fill: "#ff6e40"
  }), React.createElement("path", {
    fill: "#d5b7ac",
    d: "M212.51 628.62h4.36v5.9h-4.36z"
  }), React.createElement("path", {
    d: "M214.69 622.54c-5.24 0-9.49 3.22-9.49 9h19c-.01-5.78-4.26-9-9.51-9z",
    fill: "#ff6e40"
  }), React.createElement("ellipse", {
    cx: 913.96,
    cy: 680.54,
    rx: 156.99,
    ry: 19.44,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M859.75 629.43a5.81 5.81 0 0 1-4.33-2.62c-4.33-6.55-15.82-25.24-7.75-27.82a31.76 31.76 0 0 1 3.9-1 39.77 39.77 0 0 1 38.56 15.07 37 37 0 0 1 3.17 4.82 5 5 0 0 1-3 7.15c-7.12 2.1-20.27 5.29-30.55 4.4z",
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#33323d",
    d: "M851.77 628.4l44.02-7.96h65.92l-9.42 14.52h-91.55l-8.97-6.56z"
  }), React.createElement("path", {
    d: "M885.22 161.32c5-2.51 11.39 0 17.27.59 7.62.74 15.17-2 22.84-1.78a28.61 28.61 0 0 1 18.74 7.73 22.89 22.89 0 0 1 6.89 15.71 18.28 18.28 0 0 1-2.41 10.1c-3.65 6.1-12 10.23-20.64 10.91a38.65 38.65 0 0 1-24.12-6.33c-5.69-3.85-9.65-8.95-14.45-13.46-3.42-3.21-12.42-7.26-12.49-11.43-.05-2.87 5.26-10.46 8.37-12.04z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M885.22 161.32c5-2.51 11.39 0 17.27.59 7.62.74 15.17-2 22.84-1.78a28.61 28.61 0 0 1 18.74 7.73 22.89 22.89 0 0 1 6.89 15.71 18.28 18.28 0 0 1-2.41 10.1c-3.65 6.1-12 10.23-20.64 10.91a38.65 38.65 0 0 1-24.12-6.33c-5.69-3.85-9.65-8.95-14.45-13.46-3.42-3.21-12.42-7.26-12.49-11.43-.05-2.87 5.26-10.46 8.37-12.04z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M903.54 590.6l-.67 14a185.49 185.49 0 0 1 19.87-.37c.53-2.11 0-4.32-.45-6.46a49.13 49.13 0 0 1-.8-12.52c.08-1.15-12.3-2.33-13.55-2.39-1.52-.06-3.1-.26-3.83 1.32-.81 1.74-.47 4.52-.57 6.42z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M887.24 595.11l-.67 14a188 188 0 0 1 19.86-.38c.54-2.1 0-4.31-.44-6.45a48.27 48.27 0 0 1-.8-12.52c.07-1.15-12.31-2.33-13.56-2.39-1.52-.06-3.1-.26-3.83 1.32-.81 1.74-.47 4.52-.56 6.42z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M918.1 590.12a7.33 7.33 0 0 0-2.54 1.58l-5 4.18c-1.68 1.41-3.89 2.91-5.9 2a13.26 13.26 0 0 1-2.34-1.84 2.3 2.3 0 0 0-2.74-.31 2.82 2.82 0 0 0-.77 1.74 133.32 133.32 0 0 0-2.17 26.91 15.93 15.93 0 0 0 4.86 1.08.81.81 0 0 0 .54-.1c.3-.23.14-.69.1-1.07-.14-1.29 1.66-2 2.83-1.49a5.64 5.64 0 0 1 2.3 3 3 3 0 0 0 .86 1.29 3.06 3.06 0 0 0 1.18.44 44.12 44.12 0 0 0 6.89.62q16 .57 32 0a10.33 10.33 0 0 0 3.28-.46 6.25 6.25 0 0 0 3.81-4.84 8.61 8.61 0 0 0-1.51-6.13 10.71 10.71 0 0 0-3.51-3.22 21 21 0 0 0-3.32-1.4l-5-1.8c-3.65-1.3-7.43-2.69-10.15-5.44a25.86 25.86 0 0 1-3.83-5.53c-1.87-3.2-4.82-10.69-9.87-9.21z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M918.1 590.12a7.33 7.33 0 0 0-2.54 1.58l-5 4.18c-1.68 1.41-3.89 2.91-5.9 2a13.26 13.26 0 0 1-2.34-1.84 2.3 2.3 0 0 0-2.74-.31 2.82 2.82 0 0 0-.77 1.74 133.32 133.32 0 0 0-2.17 26.91 15.93 15.93 0 0 0 4.86 1.08.81.81 0 0 0 .54-.1c.3-.23.14-.69.1-1.07-.14-1.29 1.66-2 2.83-1.49a5.64 5.64 0 0 1 2.3 3 3 3 0 0 0 .86 1.29 3.06 3.06 0 0 0 1.18.44 44.12 44.12 0 0 0 6.89.62q16 .57 32 0a10.33 10.33 0 0 0 3.28-.46 6.25 6.25 0 0 0 3.81-4.84 8.61 8.61 0 0 0-1.51-6.13 10.71 10.71 0 0 0-3.51-3.22 21 21 0 0 0-3.32-1.4l-5-1.8c-3.65-1.3-7.43-2.69-10.15-5.44a25.86 25.86 0 0 1-3.83-5.53c-1.87-3.2-4.82-10.69-9.87-9.21z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M965.86 363.99q0 4.27-.18 8.57a429.76 429.76 0 0 1-4.74 52.28c-.6 3.88-1.25 7.76-2.2 11.57-1.37 5.45-3.39 10.77-4 16.36-.83 8 1.32 16.25-.49 24.1-.93 4-2.87 7.72-4 11.68a64.83 64.83 0 0 0-1.57 7.19q-1.51 8.4-3 16.77l-.3 1.71a68.75 68.75 0 0 1-6.56 18.9 59.74 59.74 0 0 0-4 11.58l-5.34 19.87c-2.41 8.95-4.83 18.3-3 27.39a63.56 63.56 0 0 1-10.83-1.58 61.13 61.13 0 0 1-13.13-4.81c-.94-15.44-.25-30.91.43-46.36.44-9.78.88-19.6 2.53-29.26 1.78-10.53 4.23-20.58 6.38-31.05 3.21-15.66 6.44-31.47 6.13-47.46-.39-20.71.15-41.8 9.19-60.43a13.87 13.87 0 0 1 4.18-5.66 14.38 14.38 0 0 1 6-2 113.4 113.4 0 0 1 21.77-1.56 15.22 15.22 0 0 1 6.73 2.2z",
    fill: "#33323d"
  }), React.createElement("path", {
    d: "M965.86 363.99c0 2.85-21.64.67-21.73 3.52-26.58-3.07-14.13 3.1-15.31 3.93-2.51 1.77 9.59-1.79 7.07 0-2.19 1.55-5.59 7.57-7.85 9-5.27 3.45 12.3 14.07 8.38 19-3.54 4.46-4.37 10.54-3.9 16.2s2.12 11.17 3 16.8a63 63 0 0 1-3.31 31.68c-2.29 6.05-5.48 11.69-8.39 17.46-3.18 6.35-9.07 12.66-8.36 19.74 1.61 15.94-1.18 32-1.92 48-.29 6.12-.28 12.36 1.42 18.26.64 2.24 1.52 4.43 2 6.71 1.19 5.31.25 10.81-1.32 16.08a61.13 61.13 0 0 1-13.13-4.81c-.94-15.44-.25-30.91.43-46.36.44-9.78.88-19.6 2.53-29.26 1.78-10.53 4.23-20.58 6.38-31.05 3.21-15.66 6.44-31.47 6.13-47.46-.39-20.71.15-41.8 9.19-60.43a13.87 13.87 0 0 1 4.18-5.66 14.38 14.38 0 0 1 6-2 113.4 113.4 0 0 1 21.77-1.56 15.22 15.22 0 0 1 6.74 2.21z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M967.48 349.76c0 5.08 2.83 16.31-1.06 19.57-2.58 2.19-5.78 3.52-8.56 5.47-2.52 1.77-4.67 4-7.19 5.83-2.18 1.55-4.62 2.71-6.88 4.18-5.27 3.45-7.58 9.72-11.5 14.64-3.54 4.46-4.37 10.54-3.9 16.2s2.12 11.17 3 16.8a62.85 62.85 0 0 1-3.3 31.68c-2.29 6.05-5.49 11.69-8.39 17.46-3.19 6.35-9.07 12.66-8.36 19.74 1.6 15.94-1.18 32-1.93 48-.29 6.12-.27 12.36 1.43 18.26.64 2.24 1.52 4.43 2 6.71 1.4 6.27-.16 12.82-2.21 18.91-7.06-1.24-14.2-2.47-21.34-1.94-6.27.47-12.5 2.28-18.75 1.54-.74-16.85.79-33.71 2.32-50.5.3-3.43.62-6.86.92-10.3 1.21-13.15 2.4-26.31 3.1-39.51.18-3.33-1-6.86 0-10.07q2.91-10.07 5.84-20.14a66.24 66.24 0 0 0 2.37-10.16c.88-7.15-.58-14.36-2-21.41q-3-14.47-6-29c-.67-3.22-1.33-6.44-2.25-9.61a64.39 64.39 0 0 1-1.68-6.38 79.66 79.66 0 0 1-.56-9.14c-.3-5.27-1.53-10.43-1.92-15.69a32 32 0 0 1 .23-7.57 19.07 19.07 0 0 1 2.84-7.64 233.25 233.25 0 0 1 45.55-13 64.07 64.07 0 0 1 11-1.28 73.83 73.83 0 0 1 12.54 1.39c5.78 1 11.66 2 17 4.6a25.08 25.08 0 0 1 6.89 4.8c2.69 2.69 1.06-3.52 1.87.18.14 1.29-1.12 6.09-1.12 7.38z",
    fill: "#33323d"
  }), React.createElement("path", {
    d: "M901.79 594.63a7.52 7.52 0 0 0-2.54 1.58l-5 4.18c-1.69 1.41-3.9 2.91-5.91 2a13.56 13.56 0 0 1-2.33-1.84 2.32 2.32 0 0 0-2.75-.31 2.81 2.81 0 0 0-.78 1.75 132.61 132.61 0 0 0-2.18 26.91 15.93 15.93 0 0 0 4.87 1.08.83.83 0 0 0 .54-.1c.29-.23.13-.7.09-1.07-.13-1.29 1.66-2.05 2.83-1.49a5.59 5.59 0 0 1 2.3 3 3 3 0 0 0 .86 1.29 2.89 2.89 0 0 0 1.19.43 42.83 42.83 0 0 0 6.88.63q16 .57 32 0a10.33 10.33 0 0 0 3.28-.46 6.24 6.24 0 0 0 3.82-4.84 8.57 8.57 0 0 0-1.52-6.13 10.52 10.52 0 0 0-3.51-3.22 20.54 20.54 0 0 0-3.31-1.4l-5-1.8c-3.65-1.3-7.43-2.69-10.15-5.44a26.23 26.23 0 0 1-3.83-5.53c-1.85-3.21-4.8-10.7-9.85-9.22z",
    fill: "#4c4981"
  }), React.createElement("path", {
    d: "M950.93 187.5a9.91 9.91 0 0 1-2.09 4.28c-2.16 3-4.55 6.17-8.06 7.36a16.14 16.14 0 0 1-6 .54 78.93 78.93 0 0 1-47.3-18.84c6.27-4.14 9.62-11.68 10.44-19.14a62.82 62.82 0 0 0-1-17.34c-.29-1.69-.59-3.37-.9-5-.55-3.06-2-5.42 1.5-6.28 2.71-.67 6.39-.2 9.16 0 6.09.34 12.31 1.66 17.26 5.39a11.5 11.5 0 0 1 3.32 3.63c2.13 4 .4 8.71-.09 13.3a17.3 17.3 0 0 0-.07 3.13c.38 5.09 3.8 9.48 7.73 12.73s8.48 5.75 12.31 9.1c2.11 1.8 4.16 4.33 3.79 7.14z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M927.14 155.33a29 29 0 0 1-6.63.76 29.56 29.56 0 0 1-23.62-11.73c-.29-1.69-.59-3.37-.9-5-.55-3.06-2-5.42 1.5-6.28 2.71-.67 6.39-.2 9.16 0 6.09.34 12.31 1.66 17.26 5.39a11.5 11.5 0 0 1 3.32 3.63c2.13 3.89.4 8.64-.09 13.23z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 920.51,
    cy: 125.09,
    r: 29.63,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M969.27 344.92c-.18.4-1.59 7.21-1.81 7.6-9.86-1.95-16-2.15-26-2a41.74 41.74 0 0 0-7.57.63c-2.1.42-4.15 1.11-6.27 1.44-11.42 1.76-22.23-7.17-33.76-6.29-3.85.29-7.53 1.67-11.14 3-4 1.52-8 2.68-11.91 4a19.07 19.07 0 0 1 2.84-7.64 233.25 233.25 0 0 1 45.55-13 64.07 64.07 0 0 1 11-1.28 73.83 73.83 0 0 1 12.54 1.39c5.78 1 11.66 2 17 4.6a25.08 25.08 0 0 1 6.89 4.8c2.64 2.75 1.85-.95 2.64 2.75z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M910.62 185.58c-.61-3-2.66-5.39-4.68-7.65q-5.72-6.4-11.82-12.47a16.93 16.93 0 0 0-4.6-3.59 6 6 0 0 0-5.63.05c-1.54 1-2.32 2.76-3.55 4.1-2.66 2.91-7.29 3.6-9.53 6.85a18.13 18.13 0 0 1-1.71 2.59 7.7 7.7 0 0 1-3.35 1.65l-14.12 4.23c-1.66.49-3.5 1.13-4.3 2.67a9 9 0 0 0-.62 2.57c-1.12 6.39-6.76 10.83-11.71 15-1.71 1.45-3.45 3.05-4.18 5.17s-.35 4.37.09 6.53c1.14 5.49 2.79 11 6 15.62 2.13 3.11 4.91 5.79 6.66 9.14a31.5 31.5 0 0 1 2.76 10.1c1 6.56 1.51 13.18 2.08 19.8.49 5.82-.21 12.37 1.47 18 2.07 6.85 9.42 10.75 12.68 17.12a32.1 32.1 0 0 1 2.51 8.42l3.18 15.89a35 35 0 0 1 .93 7.33c-.09 5.83-3.07 11.51-2.13 17.26 5.28-2 10.39-3.37 15.67-5.36 3.62-1.37 7.3-2.75 11.16-3 11.51-.87 22.33 8.05 33.75 6.29 2.12-.32 4.16-1 6.27-1.43a41.68 41.68 0 0 1 7.57-.65 142.79 142.79 0 0 1 30 2.72c2-3.36 2.32-7.47 1.83-11.34a91.63 91.63 0 0 0-2.71-11.37 84.15 84.15 0 0 1-2.18-30.48 66.83 66.83 0 0 0 .68-7.73c0-9.66-5.85-18.71-5.31-28.35s11.37-14.81 15.84-23.21a9.9 9.9 0 0 0 1.49-5.58c-.21-2-1.47-3.8-2.28-5.68-2-4.61-1.26-9.92-2.41-14.8-.4-1.71-1-3.36-1.41-5.07-1-4.75-.09-9.79-1.3-14.49-1-3.64-3.12-6.83-5.44-9.78-3.92-5-8.5-9.67-14.22-12.43s-12.76-3.35-18.35-.32a6.8 6.8 0 0 0-2.26 1.78 8.91 8.91 0 0 0-1.24 2.92 89.92 89.92 0 0 1-8.22 19.13 8.86 8.86 0 0 1-7.25-2.17c-2.11-1.71-5.57-3.42-6.11-5.98z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M906.25 133.99a9.6 9.6 0 0 0 .72-4.2 6.62 6.62 0 0 1 1.12-4.06c1.15-1.4 3.24-1.79 4.35-3.22 1.26-1.63.84-3.94 1.22-6a7.52 7.52 0 0 1 7-5.94c2.48-.08 4.81 1.1 7.25 1.58 3.17.63 6.44.06 9.62-.5 2.37-.42 5-.95 6.48-2.81a9.79 9.79 0 0 0 1.72-4.24c.53-2.39.93-5.05-.3-7.16s-3.84-3.14-5.2-5.19c-1.19-1.79-1.29-4.15-2.5-5.93-1.89-2.78-5.8-3.27-9.13-2.85s-6.71 1.48-10 .77c-3.61-.78-7.2-3.63-10.61-2.2-2.5 1.06-3.55 3.95-5.09 6.2a13.58 13.58 0 0 1-5.27 4.53c-3.26 1.56-7.08 1.78-10.21 3.6a11.41 11.41 0 0 0-5.41 7.76 3.39 3.39 0 0 0 0 1.79 7.64 7.64 0 0 0 .8 1.26c1.3 2.07.46 4.81-.8 6.9s-2.94 4-3.34 6.44.55 4.84 1.78 7a50.07 50.07 0 0 1 3.69 6.32c1.06 2.6 1.27 5.49 2.34 8.09a13.12 13.12 0 0 0 9.79 7.78 3 3 0 0 0 2.39-.36 3.06 3.06 0 0 0 .89-1.7 20.09 20.09 0 0 0 .56-3.37c.18-2.24 0-4.83 1-6.9 1.28-2.63 3.8-.88 5.14-3.39z",
    fill: "#33323d"
  }), React.createElement("path", {
    d: "M945.38 97.45c-1.24-2.12-3.84-3.14-5.2-5.19-1.19-1.79-1.29-4.15-2.5-5.93a6.56 6.56 0 0 0-3.74-2.53c1.21 1.78 1.31 4.14 2.5 5.93 1.37 2.05 4 3.06 5.2 5.19s.83 4.77.3 7.16a10 10 0 0 1-1.71 4.24c-1.54 1.85-4.12 2.39-6.49 2.81-3.18.56-6.45 1.12-9.62.5-2.44-.49-4.77-1.66-7.25-1.59a7.53 7.53 0 0 0-6.95 6c-.38 2 0 4.34-1.22 6-1.11 1.43-3.19 1.81-4.35 3.21a6.67 6.67 0 0 0-1.12 4.07 9.6 9.6 0 0 1-.72 4.2c-1.34 2.53-3.86.77-5.14 3.36-1 2.07-.82 4.67-1 6.9a19.41 19.41 0 0 1-.57 3.38 2.4 2.4 0 0 1-3.28 2.06 12.93 12.93 0 0 1-3-.92 13.1 13.1 0 0 0 6.76 3.43 3 3 0 0 0 2.39-.36 3.06 3.06 0 0 0 .89-1.7 20.09 20.09 0 0 0 .56-3.37c.18-2.24 0-4.83 1-6.9 1.28-2.59 3.8-.84 5.14-3.37a9.6 9.6 0 0 0 .72-4.2 6.62 6.62 0 0 1 1.12-4.06c1.15-1.4 3.24-1.79 4.35-3.22 1.26-1.63.84-3.94 1.22-6a7.52 7.52 0 0 1 7-5.94c2.48-.08 4.81 1.1 7.25 1.58 3.17.63 6.44.06 9.62-.5 2.37-.42 5-.95 6.48-2.81a9.79 9.79 0 0 0 1.72-4.24c.47-2.42.87-5.08-.36-7.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M881.41 651.4c0 10.09-7.06 18.27-15.76 18.27s-15.76-8.18-15.76-18.27v-.14c.07-10 7.11-18.13 15.76-18.13 5.35 0 10.07 3.08 12.91 7.82a20.07 20.07 0 0 1 2.85 10.45zM1006.97 658.76c0 19.44-10 35.19-22.44 35.19s-22.42-15.75-22.42-35.19c0-11 3.19-20.79 8.22-27.22 3.87-5 8.8-8 14.2-8a14.74 14.74 0 0 1 2.21.16c4.46.7 8.55 3.42 11.84 7.6a21.56 21.56 0 0 1 1.3 1.79c4.37 6.45 7.09 15.57 7.09 25.67zM993.62 618.49l-19.61 1.95-2.52-20.96-.17-1.37-3.56-29.54-.16-1.37-18.01-149.43-.39-3.18-10.74-89.18-.26-2.13-1.12-9.33-.75-6.19h15.7l.85 6.41.14 1.02.39 2.87 13.47 100.67.36 2.7 19.21 143.5 4.21 31.45 2.96 22.11z",
    fill: "#33323d"
  }), React.createElement("path", {
    d: "M984.53 623.58a14.74 14.74 0 0 1 2.21.16c-.17.13-.37.25-.55.38a12.59 12.59 0 0 0-5 11.65l3.18 30.24v.48a4.56 4.56 0 0 1-9 .85c-1.32-6.93-3.79-21.09-4.91-33.88-.06-.68-.1-1.32-.1-1.92 3.84-4.97 8.77-7.96 14.17-7.96zM990.19 633.13l-.69-.2c-.21-.55-.4-1.09-.61-1.59a21.56 21.56 0 0 1 1.3 1.79z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M983.42 615.34s-16-1.05-14.38 16.74c1.13 12.79 3.61 26.94 4.91 33.87a4.56 4.56 0 0 0 5.17 3.66 4.56 4.56 0 0 0 3.85-5l-3.19-30.24a12.6 12.6 0 0 1 5-11.66c3.77-2.65 8.8-2.8 13 8.83l2.88.78s3.69-19.07-17.24-16.98z",
    fill: "#504f60"
  }), React.createElement("path", {
    d: "M966.88 418.72a12.09 12.09 0 0 1-2.41.24h-5.62a12.91 12.91 0 0 1-12.79-11.48l-8.58-78.27a12.71 12.71 0 0 1 .73-5.94 12.84 12.84 0 0 1 14.83-8.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M967.24 421.42a12.13 12.13 0 0 1-2.77.31h-5.62a12.78 12.78 0 0 1-9.26-4l-.38-3.18-10.73-89.15a12.82 12.82 0 0 1 14.94-7.35l13.47 100.67z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M937.48 330.59c2.06 18.83 6.44 58.65 8.6 78.29a12.86 12.86 0 0 0 12.79 11.46h5.61a12.64 12.64 0 0 0 12.15-8.63 11.07 11.07 0 0 0 .53-3.34c0-6-6.44-60.35-8.44-77.11a12.73 12.73 0 0 0-4.74-8.51 45.31 45.31 0 0 0-8.51-5.33c-8.99-4.18-19.09 3.31-17.99 13.17z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M937.48 330.59c2.06 18.83 6.44 58.65 8.6 78.29a12.86 12.86 0 0 0 12.79 11.46h5.61a12.64 12.64 0 0 0 12.15-8.63 11.07 11.07 0 0 0 .53-3.34c0-6-6.44-60.35-8.44-77.11a12.73 12.73 0 0 0-4.74-8.51 45.31 45.31 0 0 0-8.51-5.33c-8.99-4.18-19.09 3.31-17.99 13.17z",
    fill: "#fff",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M878.56 640.99l-4.22-.18a19.68 19.68 0 0 0-10.73 2.63l-13.2 7.6c-.17.09-.35.19-.52.26.07-10 7.11-18.13 15.76-18.13 5.35-.04 10.07 3.04 12.91 7.82zM990.66 597.76l-19.17 1.72-.17-1.37-3.56-29.54 18.69-2.25 4.21 31.44z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M971.31 598.11c3.07 45-28.43 44.17-28.43 44.17l-68.54-2.9a19.78 19.78 0 0 0-10.73 2.61l-13.2 7.61a6.86 6.86 0 0 1-7.7-.57 6.88 6.88 0 0 1-1.23-9.51l5.58-7.44a11.66 11.66 0 0 1 10-4.64l71.71 4.09c29 .53 38.84-64.35 38.84-64.35l18.85-2.27 4.21 31.45-19.33 1.73z",
    fill: "#504f60"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M952.88 314.17l-15.8-.22-.75-6.19h15.7l.85 6.41z"
  }), React.createElement("path", {
    d: "M876.63 301.99l132.57 3.33a4.13 4.13 0 0 1 4 4.14 4.14 4.14 0 0 1-4.2 4.14l-132.52-1.89a4.14 4.14 0 0 1-4.08-4.14v-1.48a4.13 4.13 0 0 1 4.23-4.1z",
    fill: "#33323d"
  }), React.createElement("path", {
    d: "M885.78 290.16c4.62.94 9.73.7 13.6 3.4 3.45 2.41 5.12 6.76 5.3 11s-.91 8.35-2 12.42c-.34 1.28-1 2.83-2.34 2.87s-2-1.31-3.07-2c-2.3-1.39-5.56.67-7.87-.69a12.34 12.34 0 0 1-1.82-1.65 6 6 0 0 0-6.74-.8 10.8 10.8 0 0 0-10.92-12.79c-1.79.06-3.72.53-5.3-.34-2.52-1.38-2.32-5.18-.95-7.72 1.91-3.57 3.38-7.07 7.74-7.07 4.97.02 9.57 2.4 14.37 3.37zM976.08 295.13l-.06 9.72c0 3.66 0 7.5 1.81 10.69.94 1.66 2.56 3.16 4.48 3.12.71 0 1.42-.24 2.14-.21 2.09.08 4 2.28 5.94 1.55.67-.25 1.19-.81 1.88-1 1-.31 2.15.25 3.16-.06s1.61-1.47 2-2.49c2-4.88 4-10.26 2.55-15.32a23.77 23.77 0 0 0-3.41-6.35l-6.48-9.59a3.38 3.38 0 0 0-1.06-1.13 2.87 2.87 0 0 0-1.45-.26c-3.22.05-6.23 1.52-9.11 3s-2.37 5.57-2.39 8.33z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M982.48 241.09a28.14 28.14 0 0 0 1.81 6.22c1.15 2.26 3.16 4.18 3.53 6.69.42 3-1.53 6.46.33 8.84.77 1 2 1.46 2.81 2.43 1.92 2.36.09 5.85.37 8.88.25 2.77 2.31 5.07 2.88 7.8s-.38 6.11 1.36 8.41c-1.77-2.79-5.65-3.34-8.91-2.8a20.19 20.19 0 0 0-13.27 8.59 26.52 26.52 0 0 0-1.24-11.76c-1.17-3.37-3-6.66-2.89-10.22.1-2.12.92-4.19.72-6.3-.31-3.3-3-5.81-5.32-8.14-2.82-2.81-5.57-6.15-5.85-10.12-.26-3.7 1.68-7.19 3.91-10.15a19.43 19.43 0 0 1 6.61-6c1.76-.86 7.06-4.46 8.22-4 2.4.94 4.33 9.35 4.93 11.63zM835.96 210.99a11.42 11.42 0 0 0-6.36 5.27 44 44 0 0 0-3.32 7.73 102.61 102.61 0 0 1-7.8 16.51c-2.33 4-5 7.84-6.25 12.25-1.13 3.86-1.22 8.06-3.07 11.63-.91 1.74-2.22 3.27-2.91 5.11-.89 2.38-.66 5-.41 7.56l.65 6.77a17.36 17.36 0 0 0 1.47 6.43c1.26 2.39 3.54 4 5.74 5.61l10.17 7.21a26.81 26.81 0 0 0 6.36 3.68c6.63 2.32 13.76-.89 20.73-1.77 4.8-.6 9.66-.09 14.46.43-.39-3.93-.26-8.09 1.64-11.55s7.69-8 11.52-7.06c-3.81-3.21-10.09-1.42-14.3-4.09-1.69-1.07-3.13-2.49-4.79-3.62-5.24-3.54-12.73-4.14-16.11-9.49a2.17 2.17 0 0 1-.39-1c-.06-.79.61-1.42 1.19-2 4.22-4 6.33-9.77 6.85-15.54s-.4-11.55-1.45-17.24c-.85-4.58-1.8-9.21-3.88-13.37s-5.35-7.91-9.74-9.46z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 290.67,
    cy: 623.54,
    rx: 18.68,
    ry: 3.16,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M278.13 608.86s10.65-.33 13.86-2.61 16.39-5 17.19-1.35 16 18.24 4 18.33-27.95-1.87-31.15-3.82-3.9-10.55-3.9-10.55z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M313.37 621.99c-12 .09-27.94-1.88-31.15-3.83-2.44-1.49-3.41-6.82-3.74-9.28h-.35s.67 8.6 3.88 10.55 19.12 3.92 31.15 3.82c3.47 0 4.67-1.26 4.6-3.09-.48 1.09-1.8 1.83-4.39 1.83z",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 399,
    cy: 586.75,
    rx: 14.37,
    ry: 2.43,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M389.35 575.46s8.19-.26 10.67-2 12.61-3.86 13.22-1 12.32 14 3.06 14.1-21.5-1.44-24-2.94-2.95-8.16-2.95-8.16z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M416.48 585.53c-9.26.08-21.51-1.44-24-2.94-1.88-1.15-2.63-5.25-2.88-7.14h-.27s.52 6.61 3 8.11 14.72 3 24 2.94c2.68 0 3.6-1 3.55-2.38-.4.87-1.4 1.4-3.4 1.41z",
    opacity: 0.2
  }), React.createElement("ellipse", {
    cx: 710.79,
    cy: 620.34,
    rx: 34.31,
    ry: 5.8,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M687.75 593.39s19.57-.6 25.47-4.8 30.1-9.22 31.57-2.48 29.41 33.5 7.31 33.68-51.34-3.45-57.22-7-7.13-19.4-7.13-19.4z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M752.48 617.44c-22.1.18-51.34-3.44-57.23-7-4.48-2.73-6.27-12.53-6.87-17h-.65s1.24 15.78 7.13 19.37 35.13 7.2 57.22 7c6.38-.06 8.58-2.32 8.46-5.69-.86 2.02-3.3 3.28-8.06 3.32z",
    opacity: 0.2
  }));
};

UndrawCamping.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCamping;