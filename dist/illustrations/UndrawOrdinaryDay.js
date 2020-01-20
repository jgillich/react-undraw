function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawOrdinaryDay = function UndrawOrdinaryDay(_props) {
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
    viewBox: "0 0 910.84 383.58",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 473.46,
    y1: 633.68,
    x2: 473.46,
    y2: 567.7,
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
    x1: 595.6,
    y1: 570.19,
    x2: 595.6,
    y2: 559.23,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 609.65,
    y1: 634.83,
    x2: 609.65,
    y2: 552.65,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 770.53,
    y1: 635.68,
    x2: 770.53,
    y2: 553.51,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 350.22,
    y1: 637.66,
    x2: 350.22,
    y2: 556.06,
    xlinkHref: "#prefix__a"
  })), React.createElement("g", {
    opacity: 0.2,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M343.53 205.09c0-18.53-5.71-35.37-15-47.9a44.95 44.95 0 1 0-81 0c-9.31 12.53-15 29.37-15 47.9s5.71 35.37 15 47.9a44.95 44.95 0 1 0 81 0c9.28-12.53 15-29.37 15-47.9z"
  }), React.createElement("path", {
    d: "M343.53 205.09c0-18.53-5.71-35.37-15-47.9a44.95 44.95 0 1 0-81 0c-9.31 12.53-15 29.37-15 47.9s5.71 35.37 15 47.9a44.95 44.95 0 1 0 81 0c9.28-12.53 15-29.37 15-47.9z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M346.17 205.09c0-18.53-5.71-35.37-15-47.9a44.95 44.95 0 1 0-81 0c-9.31 12.53-15 29.37-15 47.9s5.71 35.37 15 47.9a44.95 44.95 0 1 0 81 0c9.25-12.53 15-29.37 15-47.9z"
  }), React.createElement("path", {
    d: "M295.94 375.62h-10.58l5.29-174.5 5.29 174.5z"
  }), React.createElement("path", {
    d: "M291.97 244.73l34.37-14.53-34.37 18.51v-3.98zM288.85 260.61l-10.1-11.9 9.9 18.51.2-6.61z"
  })), React.createElement("g", {
    opacity: 0.2,
    fill: primaryColor
  }, React.createElement("path", {
    d: "M424.17 264.97c0-12-3.69-22.86-9.71-31a29.05 29.05 0 1 0-52.35 0c-6 8.1-9.71 19-9.71 31s3.69 22.86 9.71 31a29.05 29.05 0 1 0 52.35 0c6.01-8.18 9.71-19.02 9.71-31z"
  }), React.createElement("path", {
    d: "M424.17 264.97c0-12-3.69-22.86-9.71-31a29.05 29.05 0 1 0-52.35 0c-6 8.1-9.71 19-9.71 31s3.69 22.86 9.71 31a29.05 29.05 0 1 0 52.35 0c6.01-8.18 9.71-19.02 9.71-31z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M425.88 264.97c0-12-3.69-22.86-9.71-31a29.05 29.05 0 1 0-52.35 0c-6 8.1-9.71 19-9.71 31s3.69 22.86 9.71 31a29.05 29.05 0 1 0 52.35 0c6.01-8.18 9.71-19.02 9.71-31z"
  }), React.createElement("path", {
    d: "M393.41 375.19h-6.84l3.42-112.78 3.42 112.78z"
  }), React.createElement("path", {
    d: "M390.85 290.6l22.21-9.4-22.21 11.97v-2.57zM388.83 300.86l-6.53-7.69 6.4 11.96.13-4.27z"
  })), React.createElement("path", {
    fill: "#535461",
    d: "M314.43 332.75h1.22v18.37h-1.22zM313.21 353.57h3.06V375h-3.06zM378.11 353.57h3.06V375h-3.06z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M313.21 353.57h3.06V375h-3.06zM378.11 353.57h3.06V375h-3.06z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M380.56 351.12h-1.22v-18.37h1.22z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M314.43 332.75h1.22v18.37h-1.22zM380.56 351.12h-1.22v-18.37h1.22z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M308.92 331.53h77.15v3.67h-77.15zM308.92 337.65h77.15v3.67h-77.15zM308.92 343.78h77.15v3.67h-77.15zM308.92 350.51h77.15v6.74h-77.15z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M214.93 110.78h27.55v53.27h-27.55z"
  }), React.createElement("path", {
    fill: "#eee",
    d: "M270.96 192.53v181.86H23.57V192.53l20.82-12.8 19.6-12.05 83.58-51.38 123.39 76.23z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M239.73 374.39V183.12l-3.68 2.26v189.01h3.68z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M119.71 289.59h55.11v84.5h-55.11z"
  }), React.createElement("circle", {
    cx: 166.55,
    cy: 331.84,
    r: 2.45,
    fill: "#535461"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M214.93 111.4h27.55v3.06h-27.55z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M210.03 107.72h36.74v6.12h-36.74z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M23.57 235.39h247.38v4.9H23.57z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M23.57 234.78h247.38v4.9H23.57z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M232.99 107.72h6.74v56.33h-6.74zM228.09 108.03h1.84v56.33h-1.84zM264.83 185.18v189.21h-19.59V179.73l19.59 5.45zM58.48 167.68v206.71h-19.6V179.73l19.6-12.05zM33.37 374.39V183.12l-3.67 2.26v189.01h3.67z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M147.57 96.09L0 203.25l9.8 15.92 137.77-93.69 137.78 93.69 9.79-15.92L147.57 96.09z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M147.57 94.86L0 202.02l9.8 15.92 137.77-93.68 137.78 93.68 9.79-15.92L147.57 94.86z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M44.09 268.77h51.44v51.44H44.09z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M41.94 318.67h55.11v6.12H41.94z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M41.94 317.45h55.11v6.12H41.94z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.15,
    d: "M65.59 269.07l-21.2 29.25v-14.9l11.92-14.35h9.28zM83.8 269.07l-39.41 41.41v-7.31l29.41-34.1h10z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M44.09 294.48h51.43M44.39 269.07h51.44M69.81 268.77v51.43M95.22 269.07v51.44M44.39 268.46v51.44"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M250.44 320.2H199v-51.44h51.44z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M252.58 324.8h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M252.58 323.57h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.15,
    d: "M228.94 269.07l21.2 29.25v-14.9l-11.92-14.35h-9.28zM210.73 269.07l39.41 41.41v-7.31l-29.41-34.1h-10z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M250.44 294.48h-51.43M250.14 269.07H198.7M224.73 268.77v51.43M199.31 269.07v51.44M250.14 268.46v51.44"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M172.68 215.49h-51.44v-51.44h51.44z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M174.82 220.09h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M174.82 218.86h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.15,
    d: "M151.17 164.36l21.2 29.25v-14.9l-11.91-14.35h-9.29zM132.96 164.36l39.41 41.41v-7.31l-29.41-34.1h-10z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M172.68 189.78h-51.44M172.37 164.36h-51.43M146.96 164.06v51.43M121.55 164.36v51.44M172.37 163.75v51.44"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M119.71 362.15h55.11v12.25h-55.11z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M665.91 234.17h192.27v140.22H665.91z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M844.1 374.39V183.12l-3.68 2.26v189.01h3.68zM854.51 374.39V183.12l-3.68 2.26v189.01h3.68z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M665.91 237.23h192.27v15.92H665.91z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M876.55 250.09H583.86v-134.1h244.93l47.76 134.1z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M876.55 250.09H583.86v-134.1h244.93l47.76 134.1z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M667.75 234.17h15.92v140.22h-15.92z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M625.8 110.78h27.55v53.27H625.8z"
  }), React.createElement("path", {
    fill: "#eee",
    d: "M681.83 192.53v181.86H434.45V192.53l20.82-12.8 19.59-12.05 83.59-51.38 123.38 76.23z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M530.59 289.59h55.11v84.5h-55.11z"
  }), React.createElement("circle", {
    cx: 577.43,
    cy: 331.84,
    r: 2.45,
    fill: "#535461"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M625.8 111.4h27.55v3.06H625.8z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M620.9 107.72h36.74v6.12H620.9z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M434.45 235.39h247.38v4.9H434.45z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M434.45 234.78h247.38v4.9H434.45z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M643.87 107.72h6.74v56.33h-6.74zM638.97 108.03h1.84v56.33h-1.84zM675.71 185.18v189.21h-19.6V179.73l19.6 5.45zM469.35 167.68v206.71h-19.59V179.73l19.59-12.05zM444.25 374.39V183.12l-3.68 2.26v189.01h3.68z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M558.45 96.09L410.87 203.25l9.8 15.92 137.78-93.69 137.77 93.69 9.8-15.92L558.45 96.09z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M558.45 94.86L410.87 202.02l9.8 15.92 137.78-93.68 137.77 93.68 9.8-15.92L558.45 94.86z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M454.96 268.77h51.44v51.44h-51.44z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M452.82 318.67h55.11v6.12h-55.11z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M452.82 317.45h55.11v6.12h-55.11z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.15,
    d: "M476.47 269.07l-21.2 29.25v-14.9l11.91-14.35h9.29zM494.68 269.07l-39.41 41.41v-7.31l29.41-34.1h10z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M454.96 294.48h51.44M455.27 269.07h51.43M480.68 268.77v51.43M506.09 269.07v51.44M455.27 268.46v51.44"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M661.32 320.2h-51.44v-51.44h51.44z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M663.46 324.8h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M663.46 323.57h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.15,
    d: "M639.81 269.07l21.2 29.25v-14.9l-11.91-14.35h-9.29zM621.6 269.07l39.41 41.41v-7.31l-29.41-34.1h-10z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M661.32 294.48h-51.44M661.01 269.07h-51.43M635.6 268.77v51.43M610.19 269.07v51.44M661.01 268.46v51.44"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M583.56 215.49h-51.44v-51.44h51.44z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M585.7 220.09h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M585.7 218.86h-55.11v-6.12h55.11z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.15,
    d: "M562.05 164.36l21.2 29.25v-14.9l-11.92-14.35h-9.28zM543.84 164.36l39.41 41.41v-7.31l-29.41-34.1h-10z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#535461",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M583.55 189.78h-51.43M583.25 164.36h-51.44M557.83 164.06v51.43M532.42 164.36v51.44M583.25 163.75v51.44"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M530.59 362.15h55.11v12.25h-55.11z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.7,
    d: "M696.53 278.87h139.61v63.68H696.53z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M694.69 340.71h143.29v6.12H694.69z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M694.69 339.49h143.29v6.12H694.69z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.2,
    d: "M715.82 278.87l-19.29 15.92v8.27l30-24.19h-10.71z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M763.88 279.87h4.9v63.68h-4.9zM696.88 279.87h4.9v63.68h-4.9zM830.88 279.87h4.9v63.68h-4.9z"
  }), React.createElement("path", {
    fill: "#535461",
    d: "M836.13 308.26v4.9H696.52v-4.9zM836.13 279.26v4.9H696.52v-4.9z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.2,
    d: "M734.8 278.87l-38.27 36.43v9.19l46.53-45.73-8.26.11z"
  }), React.createElement("path", {
    d: "M289.94 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M289.94 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M291.16 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    fill: "#5d291b",
    d: "M267.89 374.39H263l2.45-80.83 2.44 80.83z"
  }), React.createElement("path", {
    fill: "#5d291b",
    d: "M266.06 313.77l15.92-6.73-15.92 8.57v-1.84zM264.61 321.12l-4.67-5.51 4.58 8.57.09-3.06z"
  }), React.createElement("path", {
    d: "M909.62 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M909.62 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M910.84 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    fill: "#5d291b",
    d: "M887.57 374.39h-4.89l2.45-80.83 2.44 80.83z"
  }), React.createElement("path", {
    fill: "#5d291b",
    d: "M885.74 313.77l15.92-6.73-15.92 8.57v-1.84zM884.29 321.12l-4.68-5.51 4.59 8.57.09-3.06z"
  }), React.createElement("path", {
    d: "M459.55 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M459.55 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M460.78 295.4a37.3 37.3 0 0 0-7-22.19 20.82 20.82 0 1 0-37.52 0 38.85 38.85 0 0 0 0 44.38 20.82 20.82 0 1 0 37.52 0 37.3 37.3 0 0 0 7-22.19z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    fill: "#5d291b",
    d: "M437.51 374.39h-4.9l2.45-80.83 2.45 80.83z"
  }), React.createElement("path", {
    fill: "#5d291b",
    d: "M435.67 313.77l15.92-6.73-15.92 8.57v-1.84zM434.23 321.12l-4.68-5.51 4.58 8.57.1-3.06z"
  }), React.createElement("path", {
    d: "M482.05 606.28l-.5-.09 1-3.67c1.57-11.75-4.35-12.93-6.57-13a7.3 7.3 0 0 0-.78-.24v-1.39a7.36 7.36 0 0 0 5.49-5.94c.35 0 .64-.54.64-1.2a1.66 1.66 0 0 0-.28-1v-.77a7.65 7.65 0 0 0-2.36-5.54 4.93 4.93 0 0 0-.54-1.46c-.54-1-1.45-2-1.08-3l-2.39.25v-1.58c-.75.13-1.06 1-1.5 1.62-1.07 1.48-3.2 1.69-4.62 2.84-.48.39-1.56 1.59-1.36 2.37a7.63 7.63 0 0 0-1.46 4.5v.77a1.66 1.66 0 0 0-.28 1c0 .66.29 1.2.64 1.2a7.36 7.36 0 0 0 5.49 5.94v1.39a7.3 7.3 0 0 0-.78.24c-2.22 0-8.14 1.22-6.57 13l1 3.67H465a2.73 2.73 0 0 0-2.18 3.18l3.92 21a.83.83 0 0 0 1 .66l.69-.13v.41a2.3 2.3 0 0 0-1.28 2.06v.26h4.63v-.26a2.29 2.29 0 0 0-1.12-2v-.91l.63-.12a.83.83 0 0 0 .66-1l-3.69-19.75h10.22l-3.69 19.75a.83.83 0 0 0 .66 1l.63.12v.91a2.29 2.29 0 0 0-1.12 2v.26h4.63v-.26a2.3 2.3 0 0 0-1.28-2.06V631l.69.13a.83.83 0 0 0 1-.66l4-21.28a2.45 2.45 0 0 0-1.95-2.91z",
    transform: "translate(-144.58 -258.21)",
    fill: "url(#prefix__a)",
    opacity: 0.7
  }), React.createElement("path", {
    fill: "#fdb797",
    d: "M324.09 370.06h2.15v2.92h-2.15zM331.47 370.06h2.15v2.92h-2.15z"
  }), React.createElement("path", {
    fill: "#4d8af0",
    d: "M321.79 346.08h14.15v5.07h-14.15z"
  }), React.createElement("path", {
    d: "M321.79 346.08h14.15v5.07h-14.15z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M321.78 347a54 54 0 0 0 7.07 1.23 54 54 0 0 0 7.07-1.23v-.77h-14.14z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M335.93 346.85a54 54 0 0 1-7.07 1.23 54 54 0 0 1-7.07-1.23v-8.46a7.07 7.07 0 0 1 7.07-7.07 7.07 7.07 0 0 1 7.07 7.07z",
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M327.17 327.78h3.38v3.88a1.66 1.66 0 0 1-1.66 1.66h-.06a1.66 1.66 0 0 1-1.66-1.66v-3.88z",
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M326.49 371.15l-2.71.51a1.16 1.16 0 0 1-1.35-.93l-3.49-18.68a3.82 3.82 0 0 1 3.06-4.46h.09a1.16 1.16 0 0 1 1.35.93l4 21.3a1.16 1.16 0 0 1-.95 1.33zM331.31 371.16l2.52.47a1.25 1.25 0 0 0 1.46-1l3.49-18.68a3.73 3.73 0 0 0-3-4.35h-.09a1.25 1.25 0 0 0-1.46 1l-3.94 21.11a1.25 1.25 0 0 0 1.02 1.45z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M327.17 330.35a7.08 7.08 0 0 0 3.38 0v-2.41h-3.38z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 328.86,
    cy: 321.63,
    r: 7.38,
    fill: "#333"
  }), React.createElement("circle", {
    cx: 328.86,
    cy: 323.32,
    r: 7.07,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M324.19 315.03c1.36-1.11 3.42-1.31 4.44-2.74.43-.59.73-1.43 1.45-1.55v1.52l2.3-.24c-.36 1 .52 2 1 2.89a4.75 4.75 0 0 1 .61 2.23c-.8.48-1.79 0-2.68-.32a9.88 9.88 0 0 0-2.69-.33 5.59 5.59 0 0 0-1.39.08 7 7 0 0 0-1.15.42c-.61.26-2.55 1.22-3.12.6s.7-2.14 1.23-2.56z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M324.57 319.79a3.24 3.24 0 0 0 1.25.38 11 11 0 0 0 5.37-.6 2.62 2.62 0 0 0 1.69 1.43 7.77 7.77 0 0 0 2.27.25.84.84 0 0 0 .49-.09c.34-.23.18-.76 0-1.12l-1-1.79a5.3 5.3 0 0 0-1-1.47 4.33 4.33 0 0 0-2.06-.88 11.6 11.6 0 0 0-5.28.18c-1.88.49-4.25 2.17-1.73 3.71z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M324.57 319.62a3.24 3.24 0 0 0 1.25.38 11 11 0 0 0 5.37-.6 2.62 2.62 0 0 0 1.69 1.43 7.77 7.77 0 0 0 2.27.25.84.84 0 0 0 .49-.09c.34-.23.18-.76 0-1.12l-1-1.79a5.3 5.3 0 0 0-1-1.47 4.33 4.33 0 0 0-2.06-.88 11.6 11.6 0 0 0-5.28.18c-1.88.5-4.25 2.19-1.73 3.71z",
    fill: "#333"
  }), React.createElement("ellipse", {
    cx: 335.85,
    cy: 323.32,
    rx: 0.62,
    ry: 1.15,
    fill: "#fdb797"
  }), React.createElement("ellipse", {
    cx: 321.86,
    cy: 323.32,
    rx: 0.62,
    ry: 1.15,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M327.19 331.79s-8.95-1.39-7.1 12.44l1.08 4 3.08-.12s-2-4.61-.77-7.69 3.71-8.63 3.71-8.63zM330.52 331.79s8.95-1.39 7.1 12.44l-1.08 4-3.08-.12s2-4.61.77-7.69-3.71-8.63-3.71-8.63z",
    fill: "#f55f44"
  }), React.createElement("circle", {
    cx: 322.86,
    cy: 348.69,
    r: 1.69,
    fill: "#fdb797"
  }), React.createElement("circle", {
    cx: 335.16,
    cy: 348.69,
    r: 1.69,
    fill: "#fdb797"
  }), React.createElement("path", {
    d: "M325.05 371.76h.08a2.19 2.19 0 0 1 2.19 2.19v.27h-4.46v-.27a2.19 2.19 0 0 1 2.19-2.19zM332.58 371.76h.08a2.19 2.19 0 0 1 2.19 2.19v.27h-4.45v-.27a2.19 2.19 0 0 1 2.18-2.19z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M323.32 339.16s-.62 3.23.46 4.61M334.42 339.16s.62 3.23-.46 4.61",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 447.31,
    cy: 300.3,
    r: 3.06,
    fill: "#f55f44"
  }), React.createElement("path", {
    d: "M595.58 569.32v.87l3.69-2.33-.39-.49-.18.11-2.86-4.19v-2.43l-1.09.1v-.39c-2.87-3.3-3.17.39-2.57 1.46a6.52 6.52 0 0 0 1.68 1.85c.61.51 1.66 4.36 1.92 5.32z",
    transform: "translate(-144.58 -258.21)",
    fill: "url(#prefix__b)"
  }), React.createElement("path", {
    d: "M619.56 567.38l-.5-.34-.46-1.36h-.17l-.57-1.14a4.69 4.69 0 0 0 1.31-1 5.89 5.89 0 0 0 1.5-4.93c0-.53.83-1.89-1.77-2.6a3.58 3.58 0 0 0-2.73-3.11 9.91 9.91 0 0 0-3.07-.27 3.86 3.86 0 0 0-3.74 3.64s-.6.19-.64 2.16h.08a5.67 5.67 0 0 0 4.14 6.87v.21l.11.05.37 1-1.18.71-2.37.08a9.29 9.29 0 0 0-3.19.68 47.63 47.63 0 0 1-6.13 1.72l-1.26-1.8-3.69 2.55 2.43 3.71a5.63 5.63 0 0 0 1.26.72h.11a10 10 0 0 0 1.86.52 18.55 18.55 0 0 0 6.42.1l.83 16.73h.05l-.39 2.87c-3.89 4.86-5 19-5 19l5.83 16.53c-.11.47-.55 1.49-2.3 2.21-2.36 1 1.67 1.65 1.67 1.65l3.66-1.13c.3.61 2 1.42 2 1.42l7.29-.19V631h-.1s.68-6.51.19-7.87 0-8 0-8l.39-14.09a7.79 7.79 0 0 0 .29-7.29 6.76 6.76 0 0 1-.61-2.15 7 7 0 0 0 .12-3.68c-.87-5.51 1.94-11 1.94-11a9.5 9.5 0 0 0-3.98-9.54zm-4.35 64.5l-.82-2.94-.19.05-3.56-15 3.3-6.9v6.61l1.85 12.93V631a1.93 1.93 0 0 1-.58.88z",
    transform: "translate(-144.58 -258.21)",
    fill: "url(#prefix__c)"
  }), React.createElement("path", {
    d: "M451.73 303.94v2.33l2.78 4.07-2.78 1.81s-1.24-4.76-1.9-5.32a6.27 6.27 0 0 1-1.62-1.77c-.57-1-.29-4.58 2.47-1.4v.37zM473.88 309.51l-1.1-2.2a.41.41 0 0 0-.34-.22l-4.18-.21a.41.41 0 0 0-.4.55l1.08 2.79a.41.41 0 0 0 .42.26l4.2-.37a.41.41 0 0 0 .32-.6z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "#edeef9",
    d: "M473.57 308.56l.71 2.08-7.3-.26 2.81-1.68 3.78-.14zM455.03 310.66l-.37-.46-3.18 1.86v.84l3.55-2.24z"
  }), React.createElement("path", {
    d: "M476.48 331.33a6.94 6.94 0 0 0 .49 4.27 7.49 7.49 0 0 1-.28 7l-.37 13.54s-.47 6.35 0 7.66-.19 7.56-.19 7.56h-5.23v-4.2l-1.77-12.37v-6.35l-3.18 6.63 3.64 15.32-4.76 2-6-17.18s1-13.54 4.76-18.21l.7-5.09z",
    fill: "#7a7478"
  }), React.createElement("path", {
    d: "M476.23 374.79v-3.46h-5.32s-.37 1.4-2.8 1.68 1.12 2 1.12 2z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M470.48 372.67l-.93-3.33-5.13 1.45s0 1.45-2.25 2.37 1.61 1.59 1.61 1.59z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M464.32 332.1l12.16-.49a6.8 6.8 0 0 0-.06 2.18 1.46 1.46 0 0 1-1.75 1l-10.64-.33z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M474.03 309.87l.48.33a9.12 9.12 0 0 1 3.86 9.2s-2.71 5.3-1.87 10.6-1.87 4.48-1.87 4.48l-10.69-.33-.79-16.08s-6.44.92-9.34-1.32l-2.33-3.57 3.55-2.45 1.21 1.73a45.77 45.77 0 0 0 5.89-1.65 8.92 8.92 0 0 1 3.06-.66z",
    fill: "#252a62"
  }), React.createElement("path", {
    d: "M473.94 335.79s.65 3.27-3.08 8.69M463.11 318.09s-4.48-1.49-6.44-1.49-1.63.85-1.63.85a15.62 15.62 0 0 0 8.07.64zM468.19 307.06l1.78.21c.06 0 .11.08.14.19-.39.71-.88 1.13-1.42 1.13a1.1 1.1 0 0 1-.54-.15l-.14-.83c-.04-.28.05-.57.18-.55z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 469.44,
    cy: 302.95,
    r: 5.45,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M464.8 299.87l.27.25a.94.94 0 0 1-.27 1.56s2.44 2.44 2.78 2.89-.06 1.65-.06 1.65-1.08 2 4.6 1.53c0 0 3.74-.79 3.35-5.84 0-.51.79-1.82-1.7-2.5a3.44 3.44 0 0 0-2.63-3 9.52 9.52 0 0 0-3-.26 3.71 3.71 0 0 0-3.34 3.72z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M464.68 299.57s-.58.18-.61 2.08l.82-.06s1.9 5.09 1.7 4.43c-.74-2.44.74-2 1.08-1.53s-.06 1.65-.06 1.65-1.08 2 4.6 1.53c0 0 3.74-.79 3.35-5.84 0-.51.79-1.82-1.7-2.5a3.44 3.44 0 0 0-2.63-3 9.52 9.52 0 0 0-3-.26 3.71 3.71 0 0 0-3.55 3.5z",
    fill: "#72351c"
  }), React.createElement("path", {
    d: "M68.84 359.32v-.85a11 11 0 0 0-16.61-9.49 11 11 0 0 0-18.59-1.32 11 11 0 0 0-10.6 17.89 11 11 0 0 0 14.87 14 11 11 0 0 0 11.94-1.81 10.94 10.94 0 0 0 11 2.18 11.012 11.012 0 0 0 7.92-20.55z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M68.84 359.32v-.85a11 11 0 0 0-16.61-9.49 11 11 0 0 0-18.59-1.32 11 11 0 0 0-10.6 17.89 11 11 0 0 0 14.87 14 11 11 0 0 0 11.94-1.81 10.94 10.94 0 0 0 11 2.18 11.012 11.012 0 0 0 7.92-20.55z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M70.07 359.32v-.85a11 11 0 0 0-16.61-9.49 11 11 0 0 0-18.59-1.32 11 11 0 0 0-10.6 17.89 11 11 0 0 0 14.87 14 11 11 0 0 0 11.94-1.81 10.94 10.94 0 0 0 11 2.18A11.012 11.012 0 0 0 70 359.37zM842.83 355.04v-.85a11 11 0 0 0-16.61-9.49 11 11 0 0 0-18.59-1.32 11 11 0 0 0-10.6 17.89 17.25 17.25 0 0 0 26.82 12.14 13.72 13.72 0 1 0 18.94-18.37z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    d: "M842.83 355.04v-.85a11 11 0 0 0-16.61-9.49 11 11 0 0 0-18.59-1.32 11 11 0 0 0-10.6 17.89 17.25 17.25 0 0 0 26.82 12.14 13.72 13.72 0 1 0 18.94-18.37z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M844.05 355.04v-.85a11 11 0 0 0-16.61-9.49 11 11 0 0 0-18.59-1.32 11 11 0 0 0-10.6 17.89 17.25 17.25 0 0 0 26.82 12.14 13.72 13.72 0 1 0 18.94-18.37z",
    fill: "#4db6ac"
  }), React.createElement("path", {
    fill: "#333",
    d: "M9.49 374.39h897.68v9.18H9.49z"
  }), React.createElement("circle", {
    cx: 807.69,
    cy: 28.24,
    r: 28.24,
    fill: "#ffffa5"
  }), React.createElement("g", {
    opacity: 0.3,
    fill: "#e0e0e0"
  }, React.createElement("rect", {
    x: 599.83,
    y: 27.99,
    width: 94.52,
    height: 18.44,
    rx: 9.22,
    ry: 9.22
  }), React.createElement("rect", {
    x: 576.78,
    y: 46.43,
    width: 94.52,
    height: 18.44,
    rx: 9.22,
    ry: 9.22
  }), React.createElement("rect", {
    x: 599.83,
    y: 64.87,
    width: 94.52,
    height: 18.44,
    rx: 9.22,
    ry: 9.22
  })), React.createElement("g", {
    opacity: 0.3,
    fill: "#e0e0e0"
  }, React.createElement("rect", {
    x: 163.85,
    y: 18.8,
    width: 94.52,
    height: 18.44,
    rx: 9.22,
    ry: 9.22
  }), React.createElement("rect", {
    x: 140.8,
    y: 37.24,
    width: 94.52,
    height: 18.44,
    rx: 9.22,
    ry: 9.22
  }), React.createElement("rect", {
    x: 163.85,
    y: 55.69,
    width: 94.52,
    height: 18.44,
    rx: 9.22,
    ry: 9.22
  })), React.createElement("g", {
    opacity: 0.3,
    fill: "#030b44"
  }, React.createElement("path", {
    d: "M85 85.37h20.17s-7.6 13.42-20.17 0z"
  }), React.createElement("path", {
    d: "M86.22 91.1l13.2-15.24s5.2 14.56-13.2 15.24z"
  })), React.createElement("g", {
    opacity: 0.3,
    fill: "#030b44"
  }, React.createElement("path", {
    d: "M306.27 12.51h20.15s-7.58 13.44-20.15 0z"
  }), React.createElement("path", {
    d: "M307.48 18.23L320.7 3s5.18 14.55-13.22 15.23z"
  })), React.createElement("g", {
    opacity: 0.3,
    fill: "#030b44"
  }, React.createElement("path", {
    d: "M719.22 78.03h21.64s-8.16 14.42-21.64 0z"
  }), React.createElement("path", {
    d: "M720.52 84.16l14.19-16.37s5.55 15.65-14.19 16.37z"
  })), React.createElement("path", {
    d: "M783.26 632.76c-1.23-.73-1.88-3.16-2.07-4l-1.47-18.93a67.35 67.35 0 0 0-5.28-15.19c-.05-5.31-.25-22.12-.72-23.93l-2.72-3.39a6.65 6.65 0 0 1 .44-.75h.15l.19-.23a4.59 4.59 0 0 0 2.38-6.74c.68-.5-.19-.71-.19-.71a4.59 4.59 0 0 0-5.19-3.52 2.49 2.49 0 0 0-2.39-1.81h-.14a2.49 2.49 0 0 1 2.24 1.74 6.32 6.32 0 0 0-3.17-1.75h-.14a2.48 2.48 0 0 1 1.38.52h-.22a2.49 2.49 0 0 0-1.26 4.64 4.59 4.59 0 0 0 .25 3.07 3.65 3.65 0 0 0 2 3.84l-.3.68c-.36 0-3.29.37-5.17 7-.81 1.67-1.42 4.36-1.38 8.72-.08 1.12-.14 2.31-.17 3.59l-1.36 5.6v.14a48.94 48.94 0 0 0 .74 13.43c.51 2.49.91 5 .67 5.86-.54 2-2.46 9.17-2.19 11.38l-.64 3.87-2.4 4.56s1.48 1.35 2.06 1.39 1.26 1 1.26 1 3.45 2.66 4.62 1.84-.44-1.8-1.54-3.15c-.9-1.11-.67-3.61-.56-4.48l5.15-18.28a52.71 52.71 0 0 0 .59-7.7 4.1 4.1 0 0 0 1.33.71.83.83 0 0 0 .5 0l.33 1.19s5.94 8.49 6.11 10.53.85 9.45 1.87 11.44l.74 3.85-.68 5.11a6.79 6.79 0 0 0 2.42.59c.56-.17 1.53.53 1.53.53s4.15 1.31 5 .13-1.1-1.51-2.6-2.39z",
    transform: "translate(-144.58 -258.21)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M628.27 334.51l1.47 3.44s-.16-22.56-.71-24.64l-3.55-4.32-1.2 3.17 2.73 3.39a30.52 30.52 0 0 1 1.42 9.94c-.27 4.93-.16 9.02-.16 9.02z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M628.27 334.51l1.47 3.44s-.16-22.56-.71-24.64l-3.55-4.32-1.2 3.17 2.73 3.39a30.52 30.52 0 0 1 1.42 9.94c-.27 4.93-.16 9.02-.16 9.02z",
    fill: "#381e1d"
  }), React.createElement("path", {
    d: "M628.1 334.51l1.47 3.44s-.16-22.56-.71-24.64l-3.55-4.32-1.2 3.17 2.73 3.39a30.52 30.52 0 0 1 1.42 9.94c-.27 4.93-.16 9.02-.16 9.02z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M614.69 333.01a47.41 47.41 0 0 0 .7 13.21c.49 2.4.88 4.81.64 5.66-.52 1.9-2.38 8.85-2.11 11l-.61 3.73 3.33 1.22 5-17.72a67.91 67.91 0 0 0 0-18.09l-7 1z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M613.49 366.34l-2.46 4.67s1.43 1.31 2 1.34 1.21 1 1.21 1 3.32 2.57 4.46 1.77-.42-1.74-1.49-3-.5-4.62-.5-4.62z",
    fill: "#381e1d"
  }), React.createElement("path", {
    d: "M624.28 344.51s5.74 8.19 5.9 10.16.82 9.12 1.8 11l.71 3.71h3.55l-1.42-18.35a67.91 67.91 0 0 0-6.23-17l-6.28 3.44z",
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M628.68 335.41c0 .44-5 0-5 0v-21.3l2.29-3.39a10.35 10.35 0 0 1 1.74 3.54 33.17 33.17 0 0 1 1.32 4.38c.17.93-.44 2.22-.33 3.39a51.08 51.08 0 0 1-.02 13.38z",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M625.67 311.93a7.59 7.59 0 0 1 1.72-3.3l-4.26-1.09-1 2.35z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M622.5 309.19s-6-.14-6.53 18.65l-1.31 5.41s10.6 17.37 12.73 3.28c0 0 1.15-15.35-1.09-20.54l1.09-2.62z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M622.5 309.03s-6-.14-6.53 18.65l-1.31 5.41s10.6 17.37 12.73 3.28c0 0 1.15-15.35-1.09-20.54l1.09-2.62z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M620.07 336.37s-.39 5.77 3.41 7a.81.81 0 0 0 1.06-.72c.06-1-.25-3-2.06-7.08z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M620.29 336.26s-.39 5.77 3.41 7a.81.81 0 0 0 1.06-.72c.06-1-.25-3-2.06-7.08z",
    fill: "#fda57d"
  }), React.createElement("circle", {
    cx: 626.79,
    cy: 319.22,
    r: 0.22,
    fill: "#fa9221"
  }), React.createElement("circle", {
    cx: 626.79,
    cy: 327.41,
    r: 0.22,
    fill: "#fa9221"
  }), React.createElement("path", {
    d: "M632.78 369.11l-.7 5.23a6.55 6.55 0 0 0 2.33.57c.54-.17 1.48.51 1.48.51s4 1.27 4.79.13-1-1.49-2.45-2.34-2.06-4.17-2.06-4.17z",
    fill: "#381e1d"
  }), React.createElement("path", {
    d: "M621 313.26s-5.46-1.09-4.81 12.78c0 0 1.31 10.16 3.61 10.82l3.44-.87-1.37-9.5 1.37-4.92s1.09-7.43-2.24-8.31z",
    fill: "#daa4a2",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M621.49 313.26s-5.46-1.09-4.81 12.78c0 0 1.31 10.16 3.61 10.82l3.44-.87-1.37-9.5 1.37-4.92s1.1-7.43-2.24-8.31z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M621.22 313.26s-5.46-1.09-4.81 12.78c0 0 1.31 10.16 3.61 10.82l3.44-.87-1.37-9.5 1.37-4.92s1.09-7.43-2.24-8.31z",
    fill: "#333"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M620.28 337.14v-.35l2.71-.68.12.29-2.83.74zM620.49 311.05l5.68 4.92.16-.11-5.74-4.86-.1.05zM627.46 335.58l-.02.27 1.11-.14-.06-.13h-1.03zM622.67 308.21a5 5 0 0 0 3 1.28 4.42 4.42 0 0 0 1.28-.19 3.77 3.77 0 0 1 .47-.51l-4.26-1.09z"
  }), React.createElement("circle", {
    cx: 624.91,
    cy: 302.86,
    r: 4.42,
    fill: "#fdd835"
  }), React.createElement("circle", {
    cx: 625.65,
    cy: 304.91,
    r: 4.42,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M621.25 302.86s-1.66 4.34 1.85 5.67a2.07 2.07 0 0 0 .52-3.32z",
    fill: "#fdd835"
  }), React.createElement("circle", {
    cx: 621.85,
    cy: 299.63,
    r: 2.4,
    fill: "#fdd835"
  }), React.createElement("path", {
    d: "M629.23 301.89s1.53.37-1.15 1.3a3.39 3.39 0 0 0-2 1.81 2.08 2.08 0 0 1-2.88 1l-.85-.47-1.47-3.44 1.75-2 3-.38z",
    fill: "#fdd835"
  }), React.createElement("path", {
    d: "M624.03 299.14a2.4 2.4 0 0 0-2.27-2.4h.14a2.405 2.405 0 1 1 0 4.81h-.14a2.4 2.4 0 0 0 2.27-2.41z",
    fill: "#fdd835"
  }), React.createElement("path", {
    d: "M623 299.14a2.4 2.4 0 0 0-2.27-2.4h.14a2.405 2.405 0 1 1 0 4.81h-.14a2.4 2.4 0 0 0 2.27-2.41z",
    fill: "#fdd835"
  }), React.createElement("ellipse", {
    cx: 624.47,
    cy: 306.35,
    rx: 0.44,
    ry: 0.76,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M368.4 634.71c-1.24-.74-1.9-3.19-2.09-4.06l-1.48-19.14a68.1 68.1 0 0 0-5.34-15.36c-.05-5.37-.25-22.37-.73-24.19l-2.86-3.47a6.56 6.56 0 0 1 .47-.71l.73 2.06 2.63-.29-1.42-2.72a4.75 4.75 0 0 0 .89-6.44 1.17 1.17 0 0 0 0-1.48 6.08 6.08 0 0 0-1.56-1.3 5.55 5.55 0 0 0-8.1 7.57 1.21 1.21 0 0 1-.55.35 5.06 5.06 0 0 0-2.31 1.57 1 1 0 0 0 .2 1.45l.43.27a1 1 0 0 0 1.12-.07l.89-.74a.07.07 0 0 1 .1.1.87.87 0 0 0 .42 1.43 11.66 11.66 0 0 0-2.37 3.67c-1.19 1.45-2.28 4.39-2.2 10.29q-.13 1.61-.18 3.45l-1.37 5.67s-10.59 19.52-8 22.1c0 0 1.59.28 3.82.87l-6.34 8.4.09.08-4 3s.74 1.89 1.26 2.18.69 1.49.69 1.49 1.95 3.95 3.38 3.72.4-1.83 0-3.55c-.31-1.34.87-3.36 1.4-4.2l.14.14s7.52-5.65 10.4-8.81a21.52 21.52 0 0 1 4.31 2.46 100.39 100.39 0 0 0 4.19-14c1.78 2.65 4.77 7.3 4.89 8.75.17 2.06.86 9.56 1.89 11.56l.74 3.89-.69 5.16a6.86 6.86 0 0 0 2.44.6c.56-.17 1.55.53 1.55.53s4.2 1.33 5 .13-.96-1.51-2.48-2.41z",
    transform: "translate(-144.58 -258.21)",
    fill: "url(#prefix__e)",
    opacity: 0.5
  }), React.createElement("circle", {
    cx: 209.02,
    cy: 304.93,
    r: 5.31
  }), React.createElement("path", {
    d: "M196.28 355.51l-6.9 9.15 2.79 2.68s9.68-7.27 10.89-9.67a1 1 0 0 0 .12-.41c0-1.81-6.9-1.75-6.9-1.75zM209.04 346.09s5.75 8.22 5.92 10.19.82 9.15 1.81 11.06l.71 3.72h3.56l-1.42-18.4a68.09 68.09 0 0 0-6.24-17l-6.3 3.45z",
    fill: "#7a7478"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M208.41 315.61h5.04v21.36h-5.04z"
  }), React.createElement("path", {
    d: "M212.88 336.07l1.48 3.45s-.16-22.62-.71-24.7l-3.56-4.33-1.2 3.18 2.74 3.4a30.6 30.6 0 0 1 1.42 10c-.28 4.89-.17 9-.17 9z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M212.88 308.95l1.86 3.56-2.52.28-1.26-3.56 1.92-.28z"
  }), React.createElement("circle", {
    cx: 210.52,
    cy: 306.38,
    r: 4.55,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M210.52 312.73a6.33 6.33 0 0 1 1.64-2.63l-4.27-1.1-1 2.36z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M208.6 310.93s-7.39-.55-7.89 18.29l-1.29 5.42s-10.13 18.68-7.61 21.14c0 0 9.53 1.7 14.46 5.48a111.08 111.08 0 0 0 5.92-23.33s1.15-15.39-1.1-20.59l1.1-2.63z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M213.04 336.07l1.48 3.45s-.16-22.62-.71-24.7l-3.56-4.33-1.2 3.18 2.74 3.4a30.6 30.6 0 0 1 1.42 10c-.28 4.89-.17 9-.17 9z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    d: "M213.04 336.07l1.48 3.45s-.16-22.62-.71-24.7l-3.56-4.33-1.2 3.18 2.74 3.4a30.6 30.6 0 0 1 1.42 10c-.28 4.89-.17 9-.17 9z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M204.82 337.93s-.39 5.79 3.41 7a.81.81 0 0 0 1.06-.72c.06-1-.25-3-2.06-7.1z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M205.04 337.79s-.39 5.79 3.41 7a.81.81 0 0 0 1.06-.72c.06-1-.25-3-2.06-7.1z",
    fill: "#fda57d"
  }), React.createElement("circle", {
    cx: 211.56,
    cy: 320.73,
    r: 0.22,
    fill: "#4d8af0"
  }), React.createElement("circle", {
    cx: 211.56,
    cy: 328.94,
    r: 0.22,
    fill: "#4d8af0"
  }), React.createElement("path", {
    d: "M189.87 364.44l-4.27 3.12s.71 1.81 1.2 2.08.66 1.42.66 1.42 1.86 3.78 3.23 3.56.38-1.75 0-3.4 1.59-4.38 1.59-4.38zM217.56 370.79l-.7 5.24a6.57 6.57 0 0 0 2.34.57c.54-.17 1.48.51 1.48.51s4 1.27 4.81.13-1-1.49-2.45-2.35-2.07-4.18-2.07-4.18z"
  }), React.createElement("path", {
    d: "M205.76 314.79s-5.48-1.1-4.82 12.82c0 0 1.31 10.19 3.61 10.84l3.45-.88-1.37-9.53 1.37-4.93s1.1-7.47-2.24-8.32z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M206.25 314.79s-5.48-1.1-4.82 12.82c0 0 1.31 10.19 3.61 10.84l3.45-.88-1.37-9.53 1.37-4.93s1.1-7.47-2.24-8.32z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M205.98 314.79s-5.48-1.1-4.82 12.82c0 0 1.31 10.19 3.61 10.84l3.45-.88-1.37-9.53 1.37-4.93s1.1-7.47-2.24-8.32z",
    fill: "#3ad29f"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M205.03 338.7v-.35l2.72-.69.12.3-2.84.74zM205.24 312.54l5.69 4.93.17-.11-5.75-4.87-.11.05z"
  }), React.createElement("path", {
    fill: "#3ad29f",
    d: "M206.85 312.49l3.21-.61 2.79 3.73-1.62.97-4.38-4.09z"
  }), React.createElement("path", {
    d: "M214.16 303.85l-2.08 2.2v1.35a6.78 6.78 0 0 1-.51 2.57l-1.4 3.4a.92.92 0 0 1-1.19.5l-1.18-.47a.92.92 0 0 1-.5-1.22l.33-.75a.07.07 0 0 0-.12-.07l-.67 1a.92.92 0 0 1-1 .36l-.65-.16a.83.83 0 0 1-.4-1.37.07.07 0 0 0-.09-.1l-.85.7a.92.92 0 0 1-1.08.07l-.41-.26a.92.92 0 0 1-.19-1.38 4.84 4.84 0 0 1 2.21-1.5c1-.28 1.36-2 1.48-3.51a5 5 0 0 1 3.22-4.3 4.33 4.33 0 0 1 5.07 1.46 1.12 1.12 0 0 1 .01 1.48z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M212.23 336.97l-.02.27 1.11-.13-.06-.14h-1.03zM212.19 337.24h.41s-1.18 10.55-2.25 10.76l-.09-.13s1.82-8.6 1.93-10.63z"
  }));
};

UndrawOrdinaryDay.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawOrdinaryDay;