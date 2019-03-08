function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawForSale = function UndrawForSale(_props) {
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
    viewBox: "0 0 886 757.3",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 709,
    y1: 237.54,
    x2: 768,
    y2: 237.54,
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
    x1: 816,
    y1: 110,
    x2: 816,
    y2: 0,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 347.64,
    y1: 559.73,
    x2: 347.64,
    y2: 158.42,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 205.4,
    y1: 660.58,
    x2: 205.4,
    y2: 215.07,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 527.17,
    y1: 577.53,
    x2: 527.17,
    y2: 241.78,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 356.61,
    y1: 658.33,
    x2: 356.61,
    y2: 284.4,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 719.08,
    y1: 790.22,
    x2: 719.08,
    y2: 410,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__h",
    x1: 561.04,
    y1: 372.91,
    x2: 561.04,
    y2: 256.23,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__i",
    x1: 400.09,
    y1: 530.21,
    x2: 400.09,
    y2: 427.08,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__j",
    x1: 719.9,
    y1: 530.21,
    x2: 719.9,
    y2: 427.08,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__k",
    x1: 560.01,
    y1: 430.7,
    x2: 560.01,
    y2: 100.75,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__l",
    x1: 560.52,
    y1: 716.16,
    x2: 560.52,
    y2: 543.75,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__m",
    x1: 592.29,
    y1: 643.76,
    x2: 592.29,
    y2: 618.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__n",
    x1: 558.44,
    y1: 741.68,
    x2: 558.44,
    y2: 691.68,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__o",
    x1: 424.15,
    y1: 725.92,
    x2: 424.15,
    y2: 540.93,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__p",
    x1: 273.95,
    y1: 740.07,
    x2: 273.95,
    y2: 534.71,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__q",
    x1: 506.91,
    y1: 734.12,
    x2: 506.91,
    y2: 579.36,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__r",
    x1: 343.65,
    y1: 739.03,
    x2: 343.65,
    y2: 566.66,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__s",
    x1: 45.22,
    y1: 748.2,
    x2: 45.22,
    y2: 468.2,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__t",
    x1: 147,
    y1: 528.64,
    x2: 147,
    y2: 479.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__u",
    x1: 45.67,
    y1: 511.76,
    x2: 45.67,
    y2: 495.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__v",
    x1: 259.89,
    y1: 511.76,
    x2: 259.89,
    y2: 495.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__w",
    x1: 75.89,
    y1: 627.76,
    x2: 247.44,
    y2: 627.76,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__x",
    x1: 500.45,
    y1: 749.89,
    x2: 500.45,
    y2: 581.7,
    gradientTransform: "matrix(-1 0 0 1 1458.08 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__y",
    x1: 506.63,
    y1: 817.3,
    x2: 506.63,
    y2: 630.59,
    gradientTransform: "matrix(-1 0 0 1 1301.08 -60)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__z",
    x1: 575.69,
    y1: 757.35,
    x2: 575.69,
    y2: 616.64,
    gradientTransform: "matrix(-1 0 0 1 1458.08 0)",
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__A",
    x1: 570.01,
    y1: 816.36,
    x2: 570.01,
    y2: 659.65,
    gradientTransform: "matrix(-1 0 0 1 1301.08 -60)",
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M709 242.4V176h59v123.07l-59-56.67z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M716 247v-58h44v110.07L716 247z"
  }), React.createElement("circle", {
    cx: 816,
    cy: 55,
    r: 55,
    fill: "url(#prefix__b)"
  }), React.createElement("circle", {
    cx: 816,
    cy: 55,
    r: 44,
    fill: "#ff9800"
  }), React.createElement("path", {
    d: "M502.49 365.47a86.18 86.18 0 0 0-17.79-128.9 51 51 0 0 0 8.16-27.75c0-27.84-22.07-50.41-49.29-50.41-22.42 0-41.32 15.33-47.29 36.29-12.87-21.75-36.22-36.29-62.89-36.29-40.57 0-73.45 33.63-73.45 75.12a76.49 76.49 0 0 0 4.5 25.93c-1.49-.12-3-.23-4.5-.23-32.56 0-59 27-59 60.3 0 2.05.1 4.08.3 6.09A74.94 74.94 0 0 0 157 394.41c0 41.35 32.78 74.88 73.21 74.88a72 72 0 0 0 12.67-1.14c-.22 2.49-.35 5-.35 7.57 0 46.4 36.78 84 82.15 84a80.5 80.5 0 0 0 46.78-15 60.29 60.29 0 0 0 39.72 15c33.89 0 61.37-28.1 61.37-62.77 0-1.5-.12-3-.22-4.45h.22c36.3 0 65.72-30.09 65.72-67.21a67.38 67.38 0 0 0-35.78-59.82z",
    transform: "translate(-157 -60)",
    fill: "url(#prefix__c)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M336 305.07a80.89 80.89 0 0 0-16.7-121 47.84 47.84 0 0 0 7.66-26c0-26.13-20.71-47.32-46.27-47.32-21 0-38.78 14.39-44.39 34.06a68.61 68.61 0 0 0-59-34.06c-38.08 0-68.95 31.57-68.95 70.51a71.8 71.8 0 0 0 4.22 24.34c-1.4-.11-2.8-.22-4.22-.22C77.75 205.37 53 230.7 53 262c0 1.93.1 3.83.28 5.71a70.34 70.34 0 0 0-41.56 64.57c0 38.82 30.77 70.28 68.72 70.28a67.57 67.57 0 0 0 11.89-1.07c-.2 2.34-.33 4.71-.33 7.1 0 43.55 34.52 78.86 77.11 78.86a75.56 75.56 0 0 0 43.91-14 56.59 56.59 0 0 0 37.28 14c31.81 0 57.61-26.38 57.61-58.92 0-1.41-.11-2.79-.21-4.18h.21c34.07 0 61.69-28.25 61.69-63.09a63.24 63.24 0 0 0-33.6-56.19z",
    fill: "#00897b"
  }), React.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M196.44 215.07h17.91v445.51h-17.91z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M201.53 221.33h9.01v439.25h-9.01z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M200.712 350.768l73.93-79.837 6.61 6.122-73.93 79.837zM124.675 369.164l5.372-7.234 76.653 56.928-5.372 7.233z"
  }), React.createElement("path", {
    d: "M390 415a69.52 69.52 0 0 1-18.86-47.52c0-25.44 13.83-47.74 34.61-60.31a41 41 0 0 1-7.18-23.17c0-23.29 19.54-42.17 43.65-42.17 19.86 0 36.59 12.82 41.88 30.36a65.5 65.5 0 0 1 55.69-30.36c35.93 0 65 28.14 65 62.85a60.83 60.83 0 0 1-4 21.69c1.32-.1 2.64-.19 4-.19 28.84 0 52.21 22.58 52.21 50.44a49.31 49.31 0 0 1-.27 5.09c23.06 9.6 39.21 31.75 39.21 57.55 0 34.6-29 62.64-64.84 62.64a67.38 67.38 0 0 1-11.22-1c.19 2.09.31 4.19.31 6.33 0 38.82-32.57 70.29-72.75 70.29A74.16 74.16 0 0 1 506.07 565a55.23 55.23 0 0 1-35.18 12.52c-30 0-54.35-23.51-54.35-52.51 0-1.26.1-2.49.19-3.73h-.19c-32.14 0-58.2-25.18-58.2-56.23 0-21.82 12.89-40.73 31.66-50.05z",
    transform: "translate(-157 -60)",
    fill: "url(#prefix__e)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M238.91 354.77a66.54 66.54 0 0 1-18-45.49c0-24.35 13.24-45.69 33.13-57.72a39.2 39.2 0 0 1-6.91-22.22c0-22.29 18.71-40.37 41.78-40.37 19 0 35 12.27 40.09 29.06A62.7 62.7 0 0 1 382.25 189c34.39 0 62.26 26.93 62.26 60.15a58.22 58.22 0 0 1-3.81 20.77c1.26-.09 2.52-.19 3.81-.19 27.6 0 50 21.62 50 48.28a47.2 47.2 0 0 1-.25 4.87c22.07 9.19 37.53 30.39 37.53 55.08 0 33.11-27.78 60-62.06 60A64.49 64.49 0 0 1 459 437c.18 2 .29 4 .29 6.06 0 37.16-31.18 67.28-69.63 67.28a71 71 0 0 1-39.65-12 52.86 52.86 0 0 1-33.67 12c-28.73 0-52-22.5-52-50.26 0-1.2.1-2.38.19-3.57h-.19c-30.77 0-55.71-24.1-55.71-53.82-.05-20.9 12.28-39 30.28-47.92z",
    fill: "#009688"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M356.95 284.4v373.93"
  }), React.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M346.43 284.4h20.37v373.92h-20.37z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M351.32 284.4h11.26v373.92h-11.26z"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M358.09 396.39l-66.77-68.11"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M287.294 332.223l8.04-7.882 66.77 68.111-8.04 7.883z"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M358.09 454.93l69.22-48.57"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M354.855 450.306l69.217-48.574 6.468 9.217-69.217 48.574z"
  }), React.createElement("path", {
    d: "M970.21 410H468c-11.47 0-20.76 5.16-20.76 11.54v368.68H991V421.54c0-6.38-9.32-11.54-20.79-11.54z",
    transform: "translate(-157 -60)",
    fill: "url(#prefix__g)"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M560.52 139.04l-261.99 194.6v382.52h525.55V347.52L560.52 139.04z"
  }), React.createElement("circle", {
    cx: 561.04,
    cy: 314.57,
    r: 58.34,
    fill: "url(#prefix__h)"
  }), React.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M348.53 427.08h103.13v103.13H348.53z"
  }), React.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M668.34 427.08h103.13v103.13H668.34z"
  }), React.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M248 430.7l-13.97-78.14 327.64-251.81L886 357.59l-9 70.11-315.38-237.98L248 430.7z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M248.64 415.01l-9.61-53.99 322.56-251.7L881 361.04l-9.67 53.94-309.79-244.14-312.9 244.17z"
  }), React.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M497.5 543.75h126.05v172.41H497.5z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M501.14 547.4H619.9v168.76H501.14zM353.22 430.72h95.84v33.86h-95.84z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M353.22 464.58h95.84v61.98h-95.84z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M671.99 430.72h95.84v33.86h-95.84z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.2,
    d: "M671.99 464.58h95.84v61.98h-95.84z"
  }), React.createElement("path", {
    d: "M560.52 367.18A53.13 53.13 0 0 0 613.65 314H507.39a53.13 53.13 0 0 0 53.13 53.18z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M560.52 366.66a53.13 53.13 0 0 0 53.13-53.13H507.39a53.13 53.13 0 0 0 53.13 53.13z",
    opacity: 0.2
  }), React.createElement("path", {
    d: "M560.52 260.92A53.13 53.13 0 0 0 507.39 314h106.26a53.13 53.13 0 0 0-53.13-53.08z",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("path", {
    d: "M560.52 260.92A53.13 53.13 0 0 0 507.39 314h106.26a53.13 53.13 0 0 0-53.13-53.08z",
    fill: primaryColor,
    opacity: 0.2
  }), React.createElement("circle", {
    cx: 592.29,
    cy: 631.26,
    r: 12.5,
    fill: "url(#prefix__m)"
  }), React.createElement("circle", {
    cx: 592.29,
    cy: 631.26,
    r: 9.38,
    fill: "#263238"
  }), React.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M481.87 691.68H635v50H481.87z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M484.99 695.84h146.88v42.71H484.99z"
  }), React.createElement("path", {
    d: "M495.53 636.37a39.73 39.73 0 0 0-8.2-59.41 23.49 23.49 0 0 0 3.76-12.79 22.66 22.66 0 0 0-44.52-6.51 33.69 33.69 0 0 0-29-16.73c-18.7 0-33.86 15.5-33.86 34.63a35.26 35.26 0 0 0 2.07 12c-.69-.05-1.37-.11-2.07-.11-15 0-27.18 12.44-27.18 27.79 0 .95 0 1.88.14 2.81a34.55 34.55 0 0 0-20.41 31.71c0 19.06 15.11 34.51 33.75 34.51a33.18 33.18 0 0 0 5.84-.53c-.1 1.15-.16 2.31-.16 3.49 0 21.39 17 38.73 37.87 38.73a37.11 37.11 0 0 0 21.56-6.9 27.79 27.79 0 0 0 18.31 6.9c15.62 0 28.29-13 28.29-28.93 0-.69-.05-1.37-.1-2.05h.1c16.73 0 30.29-13.87 30.29-31a31.06 31.06 0 0 0-16.48-27.61z",
    transform: "translate(-157 -60)",
    fill: "url(#prefix__o)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M334.15 576.19a37.29 37.29 0 0 0-7.7-55.77 22.05 22.05 0 0 0 3.53-12 21.27 21.27 0 0 0-41.79-6.11 31.63 31.63 0 0 0-27.19-15.7c-17.55 0-31.78 14.55-31.78 32.5a33.1 33.1 0 0 0 1.95 11.22c-.64 0-1.29-.1-1.95-.1-14.09 0-25.51 11.68-25.51 26.09 0 .89 0 1.77.13 2.63a32.43 32.43 0 0 0-19.16 29.76c0 17.89 14.18 32.4 31.68 32.4a31.15 31.15 0 0 0 5.48-.49c-.09 1.08-.15 2.17-.15 3.27 0 20.08 15.91 36.35 35.54 36.35a34.83 34.83 0 0 0 20.24-6.48 26.09 26.09 0 0 0 17.19 6.48c14.67 0 26.55-12.16 26.55-27.16 0-.65-.05-1.29-.1-1.93h.1c15.7 0 28.44-13 28.44-29.08a29.15 29.15 0 0 0-15.5-25.88z",
    fill: "#00897b"
  }), React.createElement("path", {
    fill: "url(#prefix__p)",
    d: "M269.82 534.71h8.26v205.36h-8.26z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M272.17 537.59h4.15v202.48h-4.15z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M271.8 597.22l34.082-36.804 3.045 2.82-34.081 36.804zM236.742 605.752l2.474-3.332 35.332 26.24-2.474 3.332z"
  }), React.createElement("path", {
    d: "M443.69 659.21A32 32 0 0 1 435 637.3a32.52 32.52 0 0 1 16-27.8 18.88 18.88 0 0 1-3.33-10.7c0-10.74 9-19.44 20.12-19.44a20 20 0 0 1 19.31 14 30.19 30.19 0 0 1 25.67-14c16.56 0 30 13 30 29a28 28 0 0 1-1.84 10c.61 0 1.22-.09 1.84-.09 13.29 0 24.07 10.41 24.07 23.25a22.73 22.73 0 0 1-.12 2.35 28.88 28.88 0 0 1 18.07 26.53c0 15.95-13.38 28.88-29.89 28.88a31.06 31.06 0 0 1-5.17-.44c.09 1 .14 1.93.14 2.92 0 17.89-15 32.4-33.54 32.4a34.19 34.19 0 0 1-19.1-5.77 25.46 25.46 0 0 1-16.23 5.73c-13.84 0-25.05-10.84-25.05-24.21 0-.58 0-1.15.09-1.72h-.09c-14.82 0-26.83-11.61-26.83-25.92a25.83 25.83 0 0 1 14.57-23.06z",
    transform: "translate(-157 -60)",
    fill: "url(#prefix__q)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M289.4 599.1a30.67 30.67 0 0 1-8.32-21 31.13 31.13 0 0 1 15.27-26.61 18.07 18.07 0 0 1-3.19-10.24c0-10.28 8.62-18.61 19.26-18.61a19.18 19.18 0 0 1 18.48 13.39 28.9 28.9 0 0 1 24.57-13.39c15.85 0 28.7 12.41 28.7 27.73a26.84 26.84 0 0 1-1.76 9.57c.58 0 1.16-.09 1.76-.09 12.72 0 23 10 23 22.26a21.76 21.76 0 0 1-.12 2.25 27.64 27.64 0 0 1 17.3 25.39c0 15.26-12.81 27.64-28.61 27.64a29.73 29.73 0 0 1-5-.42c.09.92.14 1.85.14 2.79 0 17.13-14.37 31-32.1 31a32.72 32.72 0 0 1-18.28-5.52 24.37 24.37 0 0 1-15.52 5.52c-13.24 0-24-10.37-24-23.17 0-.55 0-1.1.09-1.64h-.09c-14.18 0-25.68-11.11-25.68-24.81a24.72 24.72 0 0 1 14.1-22.04z",
    fill: "#009688"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M343.81 566.66v172.37"
  }), React.createElement("path", {
    fill: "url(#prefix__r)",
    d: "M338.96 566.66h9.39v172.36h-9.39z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M341.22 566.66h5.19v172.36h-5.19z"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M344.34 618.29l-30.78-31.4"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M311.704 588.71l3.706-3.633 30.781 31.4-3.706 3.633z"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M344.34 645.27l31.91-22.39"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M342.854 643.128l31.907-22.391 2.982 4.248-31.907 22.392z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#37474f",
    strokeMiterlimit: 10,
    d: "M89.22 503.76l67.56 70.22 76.44-70.22"
  }), React.createElement("path", {
    fill: "url(#prefix__s)",
    d: "M22.56 468.2h45.33v280H22.56z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M26.11 473.53h38.22v264.89H26.11z"
  }), React.createElement("path", {
    fill: "url(#prefix__t)",
    d: "M11 479.76h272v48.89H11z"
  }), React.createElement("path", {
    fill: "#f5f5f5",
    d: "M14.56 523.31v-38.22h264.89v38.22z"
  }), React.createElement("circle", {
    cx: 45.67,
    cy: 503.76,
    r: 8,
    fill: "url(#prefix__u)"
  }), React.createElement("circle", {
    cx: 259.89,
    cy: 503.76,
    r: 8,
    fill: "url(#prefix__v)"
  }), React.createElement("circle", {
    cx: 45.67,
    cy: 503.76,
    r: 6.22,
    fill: "#e6e6e6"
  }), React.createElement("circle", {
    cx: 259.89,
    cy: 503.76,
    r: 6.22,
    fill: "#e6e6e6"
  }), React.createElement("path", {
    fill: "url(#prefix__w)",
    d: "M75.89 569.53h171.56v116.44H75.89z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M77.22 570.87h168.89v112H77.22z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M96.78 588.64h119.11v10.67H96.78zM118.56 609.53H203v10.67h-84.44zM107.89 630.42h102.22v10.67H107.89zM98.11 651.31h119.11v10.67H98.11z"
  }), React.createElement("path", {
    d: "M892.74 668.47a36.12 36.12 0 0 1 7.46-54 21.36 21.36 0 0 1-3.42-11.63 20.6 20.6 0 0 1 40.48-5.92 30.63 30.63 0 0 1 26.36-15.21c17 0 30.78 14.1 30.78 31.48a32.06 32.06 0 0 1-1.88 10.87c.62 0 1.25-.1 1.88-.1 13.65 0 24.71 11.31 24.71 25.27 0 .86 0 1.71-.13 2.55a31.41 31.41 0 0 1 18.56 28.83c0 17.33-13.74 31.38-30.68 31.38a30.17 30.17 0 0 1-5.31-.48c.09 1 .15 2.1.15 3.17 0 19.45-15.41 35.21-34.43 35.21a33.74 33.74 0 0 1-19.61-6.27 25.27 25.27 0 0 1-16.66 6.27c-14.2 0-25.72-11.78-25.72-26.31 0-.63 0-1.25.09-1.87h-.09c-15.21 0-27.54-12.61-27.54-28.17a28.24 28.24 0 0 1 15-25.07z",
    transform: "translate(-157 -60)",
    fill: "url(#prefix__x)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M739.72 608.31a33.9 33.9 0 0 1 7-50.7 20 20 0 0 1-3.21-10.91 19.34 19.34 0 0 1 38-5.56 28.75 28.75 0 0 1 24.74-14.28c16 0 28.89 13.23 28.89 29.55a30.09 30.09 0 0 1-1.77 10.2c.59 0 1.17-.09 1.77-.09 12.81 0 23.19 10.62 23.19 23.72 0 .81 0 1.61-.12 2.39a29.48 29.48 0 0 1 17.42 27.06c0 16.27-12.89 29.45-28.8 29.45a28.32 28.32 0 0 1-5-.45c.09 1 .14 2 .14 3 0 18.25-14.47 33.05-32.32 33.05a31.67 31.67 0 0 1-18.4-5.89 23.72 23.72 0 0 1-15.62 5.89c-13.33 0-24.14-11.05-24.14-24.69 0-.59 0-1.17.09-1.75h-.09c-14.28 0-25.85-11.84-25.85-26.44a26.51 26.51 0 0 1 14.08-23.55z",
    fill: "#00897b"
  }), React.createElement("path", {
    fill: "url(#prefix__y)",
    d: "M790.69 570.59h7.51V757.3h-7.51z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M792.29 573.21h3.78V757.3h-3.78z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M762.66 596.65l2.774-2.57 30.982 33.459-2.773 2.568zM793.903 655.976l32.128-23.861 2.254 3.034-32.129 23.861z"
  }), React.createElement("path", {
    d: "M939.86 689.23a29.13 29.13 0 0 0 7.9-19.92 29.57 29.57 0 0 0-14.5-25.31 17.16 17.16 0 0 0 3-9.73c0-9.76-8.19-17.68-18.29-17.68a18.21 18.21 0 0 0-17.55 12.72 27.45 27.45 0 0 0-23.34-12.72c-15.06 0-27.26 11.79-27.26 26.34a25.49 25.49 0 0 0 1.67 9.09c-.55 0-1.11-.08-1.67-.08-12.08 0-21.88 9.46-21.88 21.14a20.67 20.67 0 0 0 .11 2.13 26.25 26.25 0 0 0-16.43 24.12c0 14.5 12.17 26.25 27.17 26.25a28.24 28.24 0 0 0 4.7-.4c-.08.87-.13 1.76-.13 2.65 0 16.27 13.65 29.46 30.49 29.46a31.08 31.08 0 0 0 17.36-5.25 23.15 23.15 0 0 0 14.79 5.31c12.58 0 22.78-9.85 22.78-22 0-.53 0-1-.08-1.56h.08c13.47 0 24.39-10.55 24.39-23.57a23.48 23.48 0 0 0-13.31-20.99z",
    transform: "translate(-157 -60)",
    fill: "url(#prefix__z)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M780.4 629.14a27.89 27.89 0 0 0 7.6-19.07 28.3 28.3 0 0 0-13.88-24.19 16.43 16.43 0 0 0 2.9-9.31c0-9.34-7.84-16.92-17.51-16.92a17.43 17.43 0 0 0-16.8 12.18 26.28 26.28 0 0 0-22.34-12.18c-14.41 0-26.09 11.29-26.09 25.21a24.4 24.4 0 0 0 1.6 8.7c-.53 0-1.06-.08-1.6-.08-11.57 0-20.94 9.06-20.94 20.23a19.78 19.78 0 0 0 .11 2 25.13 25.13 0 0 0-15.73 23.08c0 13.88 11.64 25.13 26 25.13a27 27 0 0 0 4.5-.38c-.08.84-.12 1.68-.12 2.54 0 15.57 13.07 28.2 29.18 28.2a29.75 29.75 0 0 0 16.62-5 22.15 22.15 0 0 0 14.11 5c12 0 21.8-9.43 21.8-21.06 0-.5 0-1-.08-1.49h.08c12.89 0 23.35-10.1 23.35-22.56a22.48 22.48 0 0 0-12.76-20.03z",
    fill: "#009688"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M730.93 599.65v156.71"
  }), React.createElement("path", {
    fill: "url(#prefix__A)",
    d: "M726.81 599.65h8.54v156.71h-8.54z"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M728.57 599.65h4.72v156.71h-4.72z"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M730.46 646.58l27.98-28.54"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M728.773 644.935l27.98-28.543 3.37 3.304-27.98 28.543z"
  }), React.createElement("path", {
    "data-name": "<Path>",
    fill: "#795548",
    d: "M730.46 671.11l-29.02-20.35"
  }), React.createElement("path", {
    fill: "#795548",
    d: "M700.09 652.705l2.711-3.863 29.01 20.358-2.712 3.863z"
  }));
};

UndrawForSale.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawForSale;