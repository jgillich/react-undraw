function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawEmpty = function UndrawEmpty(_props) {
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
    viewBox: "0 0 1009.54 789.93",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 318.22,
    y1: 488.45,
    x2: 630.35,
    y2: 488.45,
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
  }))), React.createElement("ellipse", {
    cx: 354.13,
    cy: 741.27,
    rx: 176.1,
    ry: 33.36,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M586.55 111.4c-64.72-2.24-126.36-23.14-185.22-46S284.17 17.22 221 5.11c-40.63-7.79-87.1-8.9-119.83 12.86-31.51 21-41.69 57.15-47.16 90.72-4.12 25.26-6.54 51.85 4.74 75.5 7.84 16.42 21.74 30.22 31.36 45.95 33.47 54.72 9.81 122.2-26.45 175.63-17 25.06-36.75 49-49.88 75.65s-19.2 57.29-7.71 84.55c11.38 27 38.51 47.24 67.9 61.49 59.69 28.95 130 37.23 198.61 41.93 151.83 10.38 304.46 5.89 456.69 1.38 56.34-1.66 112.92-3.35 168.34-12.06 30.78-4.84 62.55-12.52 84.9-31.06 28.36-23.53 35.39-63.37 16.38-92.87-31.88-49.5-120-61.79-142.31-114.9-12.26-29.24.33-61.8 18.16-88.91 38.24-58.17 102.33-109.2 105.7-175.68 2.32-45.66-28.49-91.39-76.13-113-49.93-22.65-119.18-19.8-156 17.69-37.95 38.56-104.61 53.41-161.76 51.42z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M630.35 416.77l-30.63-20.65 15.45-23-80.9-6.45-29.07 22.48-36.39-20.4-30.35 3.65-.36-8a225.78 225.78 0 0 0-2.51-24.9c.13-2.5.22-5.37.21-8.49 0-13.15-1.78-30.58-9.6-42.2l1.8-16.18-14.6-17.25a110.37 110.37 0 0 1 8-13.46c.5-.72 1-1.42 1.54-2.1 18.95-1.37 33.9-16.95 33.9-36 0-.88 0-1.76-.1-2.63 0-.35-.07-.71-.11-1.06 1.85 1 3.72 2 5.59 3 .35.5.75 1 1.19 1.59l.09.11.56.69.18.21c.2.24.41.47.62.71l.14.16c.53.59 1.09 1.19 1.69 1.78a1.8 1.8 0 0 1 .2.19l.75.7.21.19c.64.57 1.32 1.12 2 1.64l.22.16.86.59.28.18c.33.2.67.41 1 .6l.12.07c.39.21.79.41 1.19.6l.2.08q.51.22 1 .42l.31.11c.35.12.69.23 1.05.33l.22.06c.44.11.88.2 1.33.27h.05a10.88 10.88 0 0 0 1.28.13h.29a11 11 0 0 0 1.15 0h.25a11.85 11.85 0 0 0 1.43-.17 15.78 15.78 0 0 0 6.3-2.26 5.5 5.5 0 0 0 1.28-1.19c2-2.62-.2-5.49-.2-5.49-.78-1.86-5.84-3.17-5.84-3.17s-16-6.68-16-12-4-32.92-45.29-39.23c0 0-26.86-1.51-34.41 12.87l-.16 1.68c-2.22 1.39-4.06 4.18-6.25 5a10.21 10.21 0 0 0-2.71 1v-.19a2.58 2.58 0 0 0-.61.79 8 8 0 0 0-.83 3 11.3 11.3 0 0 1-1.31 3.63 8.07 8.07 0 0 1-.6.92l-.17.27a7.3 7.3 0 0 0 3.4-.55 16.93 16.93 0 0 1-1 4 3.32 3.32 0 0 0 3.08-1.84v-.08l.13-.18a8.44 8.44 0 0 0 .62-1.45l-.11.12c.2-.65.38-1.31.6-1.95a3.06 3.06 0 0 1 .49-1 2.42 2.42 0 0 1 2.07-.69l-.41 8.67h.18a11.83 11.83 0 0 1-.88 1.82c-1.42 2.3-4 3.87-4.95 6.39a9.4 9.4 0 0 0-.46 3.78c0 .75.09 1.51.15 2.26v-.06c.14 2 .18 3.9-.9 5.51-.74 1.1-1.93 1.93-2.34 3.18a3.1 3.1 0 0 0-.15 1.08 12.13 12.13 0 0 0 .68 3.21.14.14 0 0 0 0-.06 4.88 4.88 0 0 1 .17 2.36c-.45 2-2.88 3.67-2.76 5.58a2.15 2.15 0 0 0 .11.74 4.05 4.05 0 0 0 2.26 2 8.8 8.8 0 0 0 5.08 1.12 6.68 6.68 0 0 0 1.9-.65c-.7 1.61-1.42 3.2-2.15 4.71-.11.24-.23.48-.35.72 0 0-6.18-4.13-9.69 4.29a18.68 18.68 0 0 0-2.17 5.64 13.42 13.42 0 0 1-.74 2.32 14.93 14.93 0 0 1-6.68 6c-7.16 3.28-36.08 39.35-36.59 48.69a54.49 54.49 0 0 1-1.84 10.78 64.15 64.15 0 0 0-1.72 25.49 48.77 48.77 0 0 0 1.77 8.13c3.07 9.33 5.12 26.74 5.12 26.74l3.32 30.22a86 86 0 0 0 .54 12.49c-3.39 3.87-17 20-11.8 24.39 4 3.46 11 2.89 14.93 2.18-3.31 8.19-8.52 22.43-9.21 32.21-1 14.47 1.71 33.64 6 41s18.59 26.24 18.59 26.24-.67 25.9 4.44 35.31 7.17 28.93 7.17 28.93 4.77 16.48 2.38 22.54 4.43 11.1-2.73 15.13-16.32 94.86-16.32 94.86-3.69 59.53 0 62.56a3.75 3.75 0 0 0 .63.37v20s-2.56 4.2 7.85 5.05c7.13.57 27.34 1.86 39.33 2.61l9.29.58s22 4.38 31.72 0 26.95-4.28 24.39-15.85a32.92 32.92 0 0 0-1.36-4.63c-2.81-7.18-7.58-8-16.37-10-.51-.11-1-.21-1.45-.29-9.26-1.61-12.3 2.7-17.49-2.91-4.51-4.85-18.87-10.28-23.76-12 .12-.36.27-.71.39-1.08a7.32 7.32 0 0 1-3.71-1.81l13.25.84 7.89.49s18.7 3.73 27 0 22.9-3.63 20.72-13.46a28.21 28.21 0 0 0-1.15-3.94c-2.39-6.1-6.45-6.77-13.92-8.46-.43-.09-.83-.18-1.23-.25-7.87-1.37-10.45 2.29-14.86-2.47-3.78-4.06-15.71-8.61-20-10.16 0-2.22-3-5.38-4.89-8.55-2.22-3.7 1.88-16.65 1.88-16.65l2.34-53.73a10.38 10.38 0 0 1 2.8-.8s10.58-10.1 8.19-20.86a69.13 69.13 0 0 1-.76-9.83c3.48-3.23 8.27-8 9.63-10.94 2.22-4.79 0-28 0-28v-88.75l17.7 1.79 16.06 1.65 4.89.5 16.06 1.62 36.91 3.73 33.26-6.3 14.39-2.72 29.59-5.6v-72.4zM386.74 176.86l-2.06-.22c.68.03 1.4.16 2.06.22z",
    transform: "translate(-95.23 -55.03)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M463.33 408.75c-10 14.31-45.95 6.73-45.95 6.73l-27.86-26.07-3.75-3.53 6.29-13.36s2 .55 5.43 1.53c18.01 5.23 74.28 22.67 65.84 34.7z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M397.47 374.05c-1.23 4.28-4.6 10.69-7.95 15.36l-3.75-3.53 6.29-13.36s2.02.55 5.41 1.53z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M301.92 223.39s-25.68 11.39-24.42 39.36a461.14 461.14 0 0 0 5.88 53.76s-5.25 42.09 16.61 52.94 42.09 19.77 42.09 19.77 34.2 3.68 38.45 5.2 17.53-21.72 15.08-25.34-33.84-11.21-37.84-17.25-13.25-9.77-13.25-9.77-9.55-5.78-10.2-11 1.87-9.11 2.51-11.4 2.26-24.4 2.26-24.4 10.78-78.7-37.17-71.87z",
    fill: "#dce6f2"
  }), React.createElement("path", {
    d: "M318.87 315.36s-35.23 5.9-31.82 18.23c0 0 12.79-13.31 31.82-18.23zM319.14 320.35s-19.37 15.81-15.58 16.62 15.58-16.62 15.58-16.62zM328.45 325.86s-5.19 10.63-2 9.91 2-9.91 2-9.91z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M398.77 375.18l-2.14-.61c.61-2 .78-3.62.28-4.37-2.45-3.62-33.82-11.2-37.81-17.25s-13.25-9.77-13.25-9.77-9.55-5.78-10.2-11 1.87-9.11 2.51-11.4 2.26-24.41 2.26-24.41 10.75-78.69-37.2-71.86c0 0-25.68 11.4-24.43 39.37a459.85 459.85 0 0 0 5.89 53.76s-5.25 42.09 16.61 52.94 42.09 19.77 42.09 19.77 34.19 3.67 38.45 5.2c1.61.58 4.52-2.41 7.37-6.52l1.62 1.51 27.86 26.06s35.95 7.59 45.95-6.72c8.45-12.04-47.81-29.48-65.86-34.7z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M287.14 118.41a8.5 8.5 0 0 0-2.77 1.07c-1 .83-1 2.25-1.25 3.49a11.48 11.48 0 0 1-2 4.78 7.19 7.19 0 0 0 3.33-.55 17.14 17.14 0 0 1-1 4 3.24 3.24 0 0 0 3-1.83 19.26 19.26 0 0 0 1.25-3.51 2.89 2.89 0 0 1 .48-1c.92-1.09 2.63-.6 4.05-.46a6.65 6.65 0 0 0 6.08-2.92c1.51-2.29 1.6-8.15-2-8.77-3.76-.62-6.1 4.56-9.17 5.7z",
    fill: "#965d7b"
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M284.27 120.71c.09-.49.15-1 .26-1.49-.95.83-1 2.24-1.25 3.49a11 11 0 0 1-.59 2.11 11.46 11.46 0 0 0 1.58-4.11zM284.59 128.97a16.63 16.63 0 0 0 1-4 7.16 7.16 0 0 1-3.17.55 11.57 11.57 0 0 1-1.15 2 7.12 7.12 0 0 0 3.32-.54 16.63 16.63 0 0 1-1 4 3.25 3.25 0 0 0 3-1.83 7.46 7.46 0 0 0 .6-1.43 3 3 0 0 1-2.6 1.25zM293.37 122.17c-1.42-.14-3.14-.63-4.06.46a3.09 3.09 0 0 0-.48 1c-.09.26-.17.53-.24.8.95-.75 2.49-.35 3.78-.22a6.68 6.68 0 0 0 6.08-2.92 5.54 5.54 0 0 0 .67-1.57 6.66 6.66 0 0 1-5.75 2.45z"
  })), React.createElement("path", {
    fill: "#dce6f2",
    d: "M317.24 201l15.25 18.34-1.99 18.51L312.07 209l5.17-8z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M332.48 219.34l-1.87 17.41-.12 1.1-16.63-26.04-1.79-2.81.52-.81 4.64-7.19 1.03 1.24 14.22 17.1z"
  }), React.createElement("path", {
    d: "M340.4 176.17c-5.16 1.48-10.09 6.56-14.38 12.73a108.65 108.65 0 0 0-7.76 13.34c-1.41 2.82-2.65 5.53-3.68 7.89l-.72 1.68c-1.74 4.11-2.71 6.86-2.71 6.86s-39.5-29.7-33.25-31.7c2.1-.67 4.86-5.17 7.59-10.84l.34-.72c1.73-3.64 3.43-7.7 4.94-11.52 3.09-7.85 5.38-14.67 5.38-14.67s60 22.45 44.25 26.95z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M364.03 147.55s9.12 16.5 21.37 14.25 7.21-8.86 7.21-8.86z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M346.36 718.7c-8.08 3.69-26.35 0-26.35 0l-7.7-.48c-10-.64-26.74-1.72-32.66-2.2-8.64-.71-6.52-4.25-6.52-4.25v-21.39l41.92-10.62s16.57 5.67 21.11 10.62c4.31 4.72 6.83 1.09 14.52 2.45.38.07.78.15 1.2.25 7.3 1.67 11.26 2.33 13.6 8.38a28.1 28.1 0 0 1 1.13 3.9c2.16 9.74-12.18 9.67-20.25 13.34z",
    fill: "#a36468"
  }), React.createElement("path", {
    d: "M365.48 701.46a31.34 31.34 0 0 1-4.72 2.42c-5.5 2.51-10.73 5.57-16.29 7.94s-11.55 4.06-17.57 3.61c-3.15-.23-6.37-1-9.38-.1a21.66 21.66 0 0 0-5.21 2.89c-10-.64-26.74-1.72-32.66-2.2-8.64-.71-6.52-4.25-6.52-4.25v-2.5c.31 0 .66-.09 1.06-.12a18.88 18.88 0 0 1 6.1.91c4.34 1.18 8.66 2.34 13 3.5a10.27 10.27 0 0 1 5-6.38 15.94 15.94 0 0 1 8.06-1.85c6.73.09 13.1 3.28 19.82 3.6a10.92 10.92 0 0 0 5.49-.92c.92-.46 1.73-1.13 2.63-1.64a19.2 19.2 0 0 1 4.53-1.53 99.76 99.76 0 0 0 12.95-4.18c1.2-.47 2.6-1.32 2.44-2.6-.21-1.7-2.88-1.9-3.58-3.46a2 2 0 0 1 .08-1.77c.38.07.78.15 1.2.25 7.27 1.67 11.23 2.33 13.57 8.38z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M337.82 765.5c-9.5 4.34-31 0-31 0l-9.05-.53c-11.72-.75-31.46-2-38.43-2.59-10.17-.84-7.67-5-7.67-5v-25.21l49.33-12.5s19.5 6.67 24.84 12.5c5.07 5.55 8 1.28 17.09 2.88.45.08.92.18 1.41.29 8.59 2 13.25 2.75 16 9.87a32.1 32.1 0 0 1 1.33 4.59c2.48 11.46-14.35 11.37-23.85 15.7z",
    fill: "#a36468"
  }), React.createElement("path", {
    d: "M360.32 745.21a37.23 37.23 0 0 1-5.55 2.85c-6.47 2.95-12.63 6.55-19.17 9.34s-13.59 4.77-20.68 4.25c-3.7-.27-7.49-1.2-11-.12a25.5 25.5 0 0 0-6.15 3.44c-11.72-.75-31.46-2-38.43-2.59-10.17-.84-7.67-5-7.67-5v-2.94a12.5 12.5 0 0 1 1.25-.14 21.94 21.94 0 0 1 7.18 1.07l15.29 4.12a12.1 12.1 0 0 1 5.93-7.51 18.66 18.66 0 0 1 9.49-2.18c7.92.11 15.41 3.86 23.32 4.24a12.91 12.91 0 0 0 6.44-1.07c1.09-.55 2-1.34 3.1-1.93a21.75 21.75 0 0 1 5.33-1.8 119.69 119.69 0 0 0 15.16-4.92c1.41-.56 3.06-1.56 2.87-3.06-.25-2-3.39-2.24-4.22-4.08a2.41 2.41 0 0 1 .1-2.08c.45.08.92.18 1.41.29 8.59 1.92 13.25 2.7 16 9.82z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M316.32 592.51l-2.67 62.83s-4 12.83-1.83 16.5 5.83 7.33 4.5 9.5-17.33 25.63-22.5 16.63-10.27-48-10.27-48l4.77-48.17zM327.9 435.97l7.42 9.92v86.28s2.17 23 0 27.75-13.17 14.25-13.17 14.25l-9.25-47.5 2-50.25z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M316.32 592.51l-2.67 62.83s-4 12.83-1.83 16.5 5.83 7.33 4.5 9.5-17.33 25.63-22.5 16.63-10.27-48-10.27-48l4.77-48.17zM327.9 435.97l7.42 9.92v86.28s2.17 23 0 27.75-13.17 14.25-13.17 14.25l-9.25-47.5 2-50.25z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M335.32 399.17v46.67l-8.33 36.33s-2.67 87.67-.34 98.33-8 20.67-8 20.67-6 .67-6 5.33-10 18-10 18l.33 26s4.34 48.67-2.33 58 2.33 10.67 2.33 10.67c-8.33 27.33-48.33 21-51.94 18s0-62 0-62 8.94-90 15.94-94 .34-9 2.67-15-2.33-22.33-2.33-22.33-2-19.34-7-28.67-4.34-35-4.34-35-14-18.67-18.16-26-6.84-26.33-5.84-40.67c.68-9.69 5.77-23.8 9-31.92 1.55-3.89 2.67-6.41 2.67-6.41l.95.25 54.62 14.3z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M340.4 176.17c-5.16 1.48-10.09 6.56-14.38 12.73h-1.12a35.72 35.72 0 0 1-31-17.93 35.18 35.18 0 0 1-3.14-7.15c3.09-7.85 5.38-14.67 5.38-14.67s60.01 22.52 44.26 27.02z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M360.65 151.17a35.75 35.75 0 1 1-66.88-17.52 34.93 34.93 0 0 1 3.78-5.46 36.18 36.18 0 0 1 8.22-7.22 35.75 35.75 0 0 1 54.83 27.58c.02.88.05 1.75.05 2.62z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M330.61 236.75l-.12 1.1-16.63-26c-1.74 4.11-2.71 6.86-2.71 6.86s-39.5-29.74-33.25-31.74c2.1-.67 4.86-5.17 7.59-10.84l.34-.72c2.9 8.64 19.75 25.91 26.76 32.83.81.8 1.48 1.46 2 1.94l1.07 1 .56.56c2.55 2.63 13.31 14.23 14.39 25.01z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M343.04 324.97l-1.82 58.57-.32 10.43s-21.56-2-41.68-4.2c-16.2-1.77-31.47-3.68-33.82-4.8-3-1.41-9.43-2.5-14.5-3.19-3.92-.53-7-.81-7-.81s-1.15.34-2.92.66c-3.86.7-10.64 1.27-14.59-2.16-5.05-4.39 8.22-20.34 11.53-24.17l.73-.83-1.25-11.55-3.25-29.95s-2-17.25-5-26.5a48.88 48.88 0 0 1-1.73-8.05 64.48 64.48 0 0 1 1.68-25.26 55.08 55.08 0 0 0 1.8-10.69c.5-9.25 28.75-45 35.75-48.25a14.84 14.84 0 0 0 7.16-7.14 13.64 13.64 0 0 0 1.09-3.11c3-13 10.59-7.84 10.59-7.84 1.83 10.17 30.16 37.09 30.16 37.09l.56.56c2.81 2.88 15.33 16.4 14.44 27.94a33.87 33.87 0 0 0 1.89 12.64 213.75 213.75 0 0 1 9.85 56z",
    fill: "#dce6f2"
  }), React.createElement("path", {
    d: "M302.9 255.42s-7 17-12.25 19.75 14.75 5.8 12.25-19.75zM308.15 287.17s-16 2-16 5 16-5 16-5zM324.9 306.67s-23.25 49.5-29.75 51 29.75-51 29.75-51zM315.21 215.73l-19.23 8.36-23.21-35.06a13.64 13.64 0 0 0 1.09-3.11c3-13 10.59-7.84 10.59-7.84 1.83 10.17 30.16 37.09 30.16 37.09z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M316.21 213.73l-19.23 8.36-23.21-35.06a13.64 13.64 0 0 0 1.09-3.11c3-13 10.59-7.84 10.59-7.84 1.83 10.17 30.16 37.09 30.16 37.09z",
    fill: "#dce6f2"
  }), React.createElement("path", {
    d: "M340.9 393.97s-21.56-2-41.68-4.2l36.1 9.45v11c-1.58 1.43-2.95 2.17-3.84 1.79-4.16-1.75-38.11-7.25-38.11-7.25s-19.72-10-41-22a16.43 16.43 0 0 1-1.5-.94 23.64 23.64 0 0 1-6.3-6.31c-3.93-5.69-5.85-13-6.68-20.17a87.22 87.22 0 0 1-.52-12.38 101.51 101.51 0 0 1 1.28-13.99 460.08 460.08 0 0 1-3-54c.25-28 26.5-38 26.5-38 48.25-4.25 33.29 73.75 33.29 73.75s-2.79 22-3.55 24.25-3.49 6-3.12 11.25 9.59 11.53 9.59 11.53 9 4.22 12.71 10.47c2.7 4.61 20.24 10.86 30.15 15.32zM357.06 128.97a11.32 11.32 0 0 1-1 4.78 29.55 29.55 0 0 1-1.78 3.56 16.4 16.4 0 0 1-4.38 5.44c-2.31 1.65-5.23 2.11-8 2.78s-5.65 1.74-7.23 4.1a14.34 14.34 0 0 0-1.69 4.9 10.54 10.54 0 0 1-2 4.74 3.93 3.93 0 0 1-4.68 1.12 4.73 4.73 0 0 1-1.81-2.33c-1.14-2.57-1.43-5.42-1.89-8.19s-1.11-5.62-2.81-7.85-4.71-3.7-7.38-2.83a7.11 7.11 0 0 0-4 3.88 22.24 22.24 0 0 0-1.51 5.52q-1.86 10.18-4.39 20.24a1.86 1.86 0 0 1-.33.76 1.44 1.44 0 0 1-1 .42c-2.24.3-4.39-1.27-6.65-1.1a3.82 3.82 0 0 0-.69.11 35.73 35.73 0 0 1 3.61-40.8l.18-.05a10.78 10.78 0 0 0 4-2.52 42.22 42.22 0 0 0 4-4.63l.8-1a45.61 45.61 0 0 1 7.8-7.41 8 8 0 0 1 2.66-1.44 7.88 7.88 0 0 1 2.52-.08 63.57 63.57 0 0 0 10.41.39 66.79 66.79 0 0 1 7.31-.74c6.33.18 11.73 4.65 15.73 9.55 2.15 2.51 4.07 5.4 4.2 8.68z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M289.1 134.6c-1.39 2.28-3.9 3.83-4.84 6.33-1.38 3.63.95 8.15-1.19 11.39-.71 1.09-1.88 1.9-2.28 3.15-.68 2.11 1.18 4.36.7 6.53s-3.34 4-2.58 6.12a4 4 0 0 0 2.2 2 8.6 8.6 0 0 0 5 1.11c2.73-.45 4.76-3.13 7.53-3.33 2.25-.16 4.4 1.4 6.64 1.11a1.5 1.5 0 0 0 1-.43 1.73 1.73 0 0 0 .33-.76q2.52-10.05 4.4-20.24a21.8 21.8 0 0 1 1.5-5.52 7.17 7.17 0 0 1 4-3.88c2.67-.86 5.67.6 7.38 2.83s2.36 5.08 2.82 7.85.75 5.62 1.88 8.19a4.78 4.78 0 0 0 1.82 2.34c1.5.87 3.52.18 4.67-1.12a10.43 10.43 0 0 0 2-4.75 14.28 14.28 0 0 1 1.69-4.89c1.58-2.36 4.47-3.43 7.23-4.1s5.67-1.14 8-2.79a16.46 16.46 0 0 0 4.38-5.43c1.48-2.58 2.86-5.38 2.74-8.35-.13-3.24-2.05-6.13-4.1-8.65-4-4.9-9.41-9.37-15.74-9.54a62.2 62.2 0 0 0-7.31.74 62.57 62.57 0 0 1-10.41-.4 8.18 8.18 0 0 0-2.52.09 7.54 7.54 0 0 0-2.65 1.44 45.63 45.63 0 0 0-7.81 7.4 57.31 57.31 0 0 1-4.82 5.6 10.85 10.85 0 0 1-4 2.53c-1 .28-2 .08-2.95.39-2.95.93-3.34 4.78-4.71 7.04z",
    fill: "#965d7b"
  }), React.createElement("path", {
    d: "M385.4 161.79c-8 1.47-14.63-5-18.3-9.72a39.22 39.22 0 0 1-3.07-4.52l27.46 5.18 1.11.21s5.05 6.61-7.2 8.85z",
    opacity: 0.1
  }), React.createElement("g", {
    opacity: 0.1
  }, React.createElement("path", {
    d: "M281.49 159.14a8.33 8.33 0 0 0-.58-3.84c0 .1-.09.2-.12.3-.43 1.34.15 2.73.52 4.12a3 3 0 0 0 .18-.58zM283.87 142.77a22.22 22.22 0 0 0 .08 4.15 22.28 22.28 0 0 0-.08-4.15zM353.32 133.42a16.4 16.4 0 0 1-4.38 5.44c-2.31 1.65-5.22 2.11-8 2.78s-5.65 1.74-7.23 4.1a14.41 14.41 0 0 0-1.69 4.9 10.47 10.47 0 0 1-2 4.75c-1.15 1.3-3.17 2-4.67 1.12a4.78 4.78 0 0 1-1.82-2.34c-1.13-2.57-1.43-5.41-1.88-8.19s-1.12-5.62-2.82-7.85-4.71-3.7-7.38-2.83a7.14 7.14 0 0 0-4 3.88 21.8 21.8 0 0 0-1.5 5.52q-1.87 10.19-4.4 20.24a1.73 1.73 0 0 1-.33.76 1.5 1.5 0 0 1-1 .43c-2.24.29-4.39-1.27-6.64-1.11-2.77.2-4.8 2.88-7.53 3.32a8.45 8.45 0 0 1-5-1.11 5.35 5.35 0 0 1-1.83-1.3 2.7 2.7 0 0 0-.37 2.33 3.9 3.9 0 0 0 2.2 2 8.45 8.45 0 0 0 5 1.11c2.73-.44 4.76-3.12 7.53-3.32 2.25-.16 4.4 1.4 6.64 1.11a1.5 1.5 0 0 0 1-.43 1.73 1.73 0 0 0 .33-.76q2.52-10 4.4-20.24a21.8 21.8 0 0 1 1.5-5.52 7.14 7.14 0 0 1 4-3.88c2.67-.87 5.67.6 7.38 2.83s2.36 5.08 2.82 7.85.75 5.62 1.88 8.19a4.78 4.78 0 0 0 1.82 2.34c1.5.87 3.52.18 4.67-1.12a10.47 10.47 0 0 0 2-4.75 14.41 14.41 0 0 1 1.69-4.9c1.58-2.36 4.47-3.42 7.23-4.1s5.67-1.13 8-2.78a16.4 16.4 0 0 0 4.38-5.44c1.48-2.57 2.86-5.37 2.74-8.34a10.74 10.74 0 0 0-.12-1.14 19.65 19.65 0 0 1-2.62 6.45z"
  })), React.createElement("path", {
    d: "M356.1 133.72a35.33 35.33 0 0 1 4.45 14.85c-8.91-5-17.29-10.49-21.52-12.4-7.37-3.33-34.93-2.83-45.29-2.52a34.93 34.93 0 0 1 3.78-5.46 36.18 36.18 0 0 1 8.25-7.22 35.77 35.77 0 0 1 50.38 12.73zM387.9 157.55c-4.81 1.48-12.66-1.38-20.8-5.48a39.22 39.22 0 0 1-3.07-4.52l27.46 5.18c1.82 1.24 2.28 3.01-3.59 4.82z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M327.03 99.05s-26.25-1.5-33.63 12.75l-1.19 12.63-2-.22-.4 8.59s40.12-1.75 49.25 2.37 37.5 24.88 48.87 21.38-1-6.75-1-6.75-15.65-6.63-15.65-11.83-3.88-32.67-44.25-38.92z",
    fill: "#444053"
  }), React.createElement("path", {
    d: "M276.4 567.25s16.75 16.25 24 15c0 0-20.5-1.75-24-15zM272.9 574.78s1.5 8.36 5.5 7.54-5.5-7.54-5.5-7.54zM299.15 714.5s-23.78 18.5-19.77 19 19.77-19 19.77-19z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M330.96 347.33l77-12.53v72.9l-73.16-3.83-3.84-56.54z"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M330.96 347.33l77-12.53v72.9l-73.16-3.83-3.84-56.54z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M407.96 334.8l92.34 6.91-5.11 63.44-87.23 2.55v-72.9z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M407.96 334.8l92.34 6.91-5.11 63.44-87.23 2.55v-72.9z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M436.35 312.55l-28.39 22.25 92.34 6.91 15.09-22.77-79.04-6.39zM303.08 323.03l69.32-8.44 35.56 20.21-77 12.53-27.88-24.3zM424.84 353.73v99.67l-36.07-3.7-15.69-1.6-4.78-.5-15.68-1.61-21.66-2.22v-96.44l76.99 5.24 16.89 1.16z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M500.3 341.71v97.2l-28.91 5.55-14.06 2.7-32.49 6.24v-99.67l75.46-12.02z"
  }), React.createElement("path", {
    opacity: 0.05,
    d: "M500.3 341.71v97.2l-28.91 5.55-14.06 2.7-32.49 6.24v-99.67l75.46-12.02z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M303.08 368.31l27.88-20.98 93.88 6.4-13.82 23.28-107.94-8.7z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.1,
    d: "M303.08 368.31l27.88-20.98 93.88 6.4-13.82 23.28-107.94-8.7z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M500.3 341.71l-75.46 12.02 24.56 22 80.83-13.56-29.93-20.46z"
  }), React.createElement("path", {
    fill: "#fff",
    opacity: 0.1,
    d: "M500.3 341.71l-75.46 12.02 24.56 22 80.83-13.56-29.93-20.46zM471.39 444.46l-14.06 2.7v-20.77l13.17-3.32.89 21.39zM388.77 435.96v13.74l-15.69-1.6v-12.14h15.69zM368.3 440.29v7.31l-15.68-1.61v-5.7h15.68z"
  }), React.createElement("path", {
    d: "M415.4 428.67c-10.75 13.75-46.25 4.25-46.25 4.25l-26.38-27.52-3.58-3.73 7-13s2 .66 5.34 1.82c17.68 6.18 72.92 26.61 63.87 38.18z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M414.4 426.67c-10.75 13.75-46.25 4.25-46.25 4.25l-26.38-27.52-3.58-3.73 7-13s2 .66 5.34 1.82c17.68 6.18 72.92 26.61 63.87 38.18z",
    fill: "#efb7b9"
  }), React.createElement("path", {
    d: "M350.49 388.49c-1.46 4.2-5.17 10.42-8.76 14.91l-3.58-3.73 7-13s2.01.66 5.34 1.82z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M263.15 232.97s-26.25 10-26.5 38a460.08 460.08 0 0 0 3 54s-7.5 41.75 13.75 53.75 41 22 41 22 33.95 5.5 38.12 7.25 18.66-20.75 16.41-24.5-33.16-13-36.83-19.25-12.71-10.46-12.71-10.46-9.22-6.29-9.59-11.54 2.35-9 3.12-11.25 3.56-24.25 3.56-24.25 14.92-78.05-33.33-73.75z",
    fill: "#dce6f2"
  }), React.createElement("path", {
    d: "M275.15 325.67s-35.5 4-32.75 16.5c0 0 13.49-12.61 32.75-16.5zM275.15 330.67S255 345.42 258.7 346.42s16.45-15.75 16.45-15.75zM284.15 336.67s-5.75 10.34-2.5 9.8 2.5-9.8 2.5-9.8z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M653.77 112.39s-38-2.29-33.56 24.37c0 0-.89 4.71 3.38 6.85 0 0 .07-2 3.9-1.31a17.51 17.51 0 0 0 4.13.2 8.57 8.57 0 0 0 5.06-2.09s10.69-4.41 14.85-21.89c0 0 3.08-3.82 3-4.8l-6.42 2.75s2.19 4.63.46 8.48c0 0-.2-8.31-1.44-8.12-.25 0-3.33 1.61-3.33 1.61s3.77 8.06.92 13.93c0 0 1.08-9.94-2.1-13.35l-4.52 2.64s4.41 8.33 1.42 15.13c0 0 .77-10.43-2.37-14.49l-4.1 3.19s4.15 8.22 1.62 13.86c0 0-.33-12.14-2.51-13.06 0 0-3.58 3.16-4.12 4.46 0 0 2.83 6 1.07 9.11 0 0-1.08-8.09-2-8.13 0 0-3.57 5.36-3.94 9a19.46 19.46 0 0 1 3.07-9.54 10.71 10.71 0 0 0-5.46 2.83s.55-3.79 6.34-4.12c0 0 3-4.07 3.74-4.32 0 0-5.76-.48-9.25 1.07 0 0 3.07-3.57 10.31-2l4-3.3s-7.58-1-10.8.11c0 0 3.7-3.16 11.89-.86l4.4-2.63s-6.46-1.4-10.31-.89c0 0 4.06-2.19 11.6.18l3.15-1.41s-4.74-.93-6.12-1.08-1.46-.53-1.46-.53a16.36 16.36 0 0 1 8.89 1s6.75-2.43 6.61-2.85z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M769.23 245.73s-38-2.29-33.56 24.37c0 0-.89 4.71 3.38 6.85 0 0 .07-2 3.91-1.31a17.51 17.51 0 0 0 4.13.2 8.56 8.56 0 0 0 5-2.08s10.7-4.42 14.86-21.9c0 0 3.07-3.81 2.95-4.79l-6.42 2.74s2.19 4.63.47 8.48c0 0-.21-8.31-1.44-8.12-.25 0-3.34 1.61-3.34 1.61s3.78 8.07.93 13.93c0 0 1.08-9.94-2.11-13.35l-4.47 2.61s4.41 8.33 1.42 15.13c0 0 .77-10.43-2.37-14.49l-4.09 3.2s4.14 8.21 1.62 13.85c0 0-.33-12.14-2.51-13.06 0 0-3.58 3.16-4.13 4.46 0 0 2.84 6 1.08 9.11 0 0-1.08-8.09-2-8.13 0 0-3.57 5.36-3.94 9a19.52 19.52 0 0 1 3.08-9.54 10.76 10.76 0 0 0-5.47 2.83s.56-3.79 6.35-4.12c0 0 2.95-4.07 3.74-4.32 0 0-5.76-.48-9.25 1.07 0 0 3.07-3.57 10.3-1.95l4-3.3s-7.59-1-10.8.11c0 0 3.7-3.16 11.89-.86l4.4-2.63s-6.47-1.39-10.32-.89c0 0 4.07-2.19 11.61.18l3.15-1.41s-4.74-.93-6.13-1.08-1.46-.53-1.46-.53a16.39 16.39 0 0 1 8.9 1s6.76-2.45 6.64-2.87zM538.38 222.06s8.75-37.09-18.29-37.22c0 0-4.49-1.68-7.32 2.16 0 0 1.93.41.62 4.07a17.8 17.8 0 0 0-.9 4 8.59 8.59 0 0 0 1.19 5.33s2.53 11.3 19 18.38c0 0 3.24 3.68 4.22 3.72l-1.6-6.79s-4.94 1.37-8.44-1c0 0 8.23 1.21 8.24 0 0-.25-1-3.56-1-3.56s-8.59 2.34-13.89-1.47c0 0 9.61 2.76 13.52.21l-1.8-4.92s-9 2.93-15.16-1.18c0 0 10.15 2.54 14.69.14l-2.45-4.58s-8.8 2.68-13.93-.77c0 0 12 1.74 13.3-.24 0 0-2.5-4.07-3.69-4.83 0 0-6.36 1.78-9.16-.49 0 0 8.15.31 8.34-.55 0 0-4.67-4.43-8.23-5.43a19.6 19.6 0 0 1 8.89 4.66 10.79 10.79 0 0 0-1.86-5.87s3.64 1.2 3 7c0 0 3.5 3.6 3.61 4.42 0 0 1.45-5.59.52-9.3 0 0 3 3.64.17 10.49l2.56 4.55s2.32-7.3 1.73-10.66c0 0 2.49 4.18-1.18 11.86l1.85 4.79s2.47-6.14 2.63-10c0 0 1.47 4.38-2.16 11.41l.86 3.34s1.72-4.51 2.1-5.85.77-1.35.77-1.35a16.38 16.38 0 0 1-2.49 8.6s1.31 6.98 1.74 6.93zM455.16 234.7s-30.52-22.83-41.43 1.9c0 0-3.33 3.45-.94 7.58 0 0 1.14-1.61 4 1.06a17.51 17.51 0 0 0 3.34 2.44 8.58 8.58 0 0 0 5.37 1s11.36 2.19 24.44-10.12c0 0 4.67-1.5 5.11-2.38l-6.89-1.21s-.72 5.07-4.27 7.34c0 0 4.39-7.06 3.25-7.57-.23-.11-3.67-.5-3.67-.5s-1.28 8.82-6.88 12.15c0 0 6.37-7.71 5.58-12.31l-5.23-.28s-.89 9.39-7.13 13.43c0 0 6.37-8.29 6-13.41l-5.18.42s-1.05 9.13-6.26 12.45c0 0 6.39-10.32 5.08-12.28 0 0-4.73.67-5.9 1.45 0 0-.91 6.54-4.11 8.2 0 0 3.55-7.35 2.83-7.86 0 0-5.93 2.51-8.26 5.37a19.53 19.53 0 0 1 7.82-6.28 10.77 10.77 0 0 0-6.12-.64s2.54-2.86 7.56.05c0 0 4.7-1.77 5.5-1.55 0 0-4.55-3.57-8.32-4.19 0 0 4.54-1.3 9.69 4l5.19-.53s-5.77-5-9.08-5.84c0 0 4.83-.61 10.4 5.81l5.12.23s-4.63-4.72-8.12-6.42c0 0 4.59.4 9.59 6.53l3.41.55s-3.45-3.38-4.53-4.26-.93-1.25-.93-1.25a16.43 16.43 0 0 1 6.89 5.72s6.95 1.61 7.08 1.2zM556.77 22.59s-30.52-22.84-41.43 1.9c0 0-3.33 3.45-.94 7.58 0 0 1.14-1.61 4 1.06a17.79 17.79 0 0 0 3.35 2.43 8.57 8.57 0 0 0 5.37 1s11.36 2.19 24.44-10.13c0 0 4.67-1.49 5.1-2.38l-6.89-1.19s-.71 5.07-4.27 7.34c0 0 4.4-7.06 3.26-7.57-.23-.11-3.67-.5-3.67-.5s-1.32 8.84-6.92 12.15c0 0 6.36-7.71 5.58-12.31l-5.23-.28s-.9 9.39-7.13 13.42c0 0 6.37-8.29 6-13.41l-5.17.42s-1.06 9.14-6.27 12.46c0 0 6.4-10.32 5.09-12.28 0 0-4.73.67-5.9 1.45 0 0-.91 6.54-4.11 8.2 0 0 3.55-7.35 2.83-7.87 0 0-5.93 2.52-8.26 5.38a19.44 19.44 0 0 1 7.82-6.28 10.7 10.7 0 0 0-6.13-.64s2.55-2.86 7.57.05c0 0 4.7-1.78 5.5-1.55 0 0-4.55-3.57-8.32-4.2 0 0 4.53-1.29 9.68 4l5.19-.53s-5.76-5-9.08-5.85c0 0 4.83-.6 10.41 5.82l5.12.22s-4.63-4.72-8.13-6.41c0 0 4.6.4 9.6 6.53l3.4.55s-3.46-3.34-4.54-4.2-.93-1.24-.93-1.24a16.4 16.4 0 0 1 6.89 5.72s6.95 1.52 7.12 1.14zM673.39 51.52s-12.2-36.11-35.21-21.92c0 0-4.7 1-5.07 5.71 0 0 1.85-.68 2.67 3.12a18 18 0 0 0 1.37 3.91 8.66 8.66 0 0 0 3.84 3.89s8.12 8.25 25.88 5.52c0 0 4.69 1.42 5.55.93l-5-4.91s-3.46 3.77-7.68 3.62c0 0 7.63-3.32 7-4.39-.13-.21-2.74-2.48-2.74-2.48s-6.06 6.53-12.56 6.1c0 0 9.61-2.74 11.57-7l-4.14-3.19s-6.06 7.22-13.49 7c0 0 10-3.21 12.53-7.65l-4.5-2.59s-6 6.93-12.22 6.71c0 0 11.12-4.87 11.15-7.23 0 0-4.27-2.13-5.68-2.15 0 0-4.46 4.87-8 4.43 0 0 7.08-4.05 6.78-4.88 0 0-6.3-1.29-9.85-.25a19.49 19.49 0 0 1 10-.75 10.79 10.79 0 0 0-4.69-4s3.72-.91 6.21 4.33c0 0 4.88 1.21 5.4 1.84 0 0-1.72-5.51-4.47-8.17 0 0 4.47 1.51 5.69 8.82l4.58 2.5s-1.89-7.41-4.17-10c0 0 4.33 2.24 5.27 10.69l4.1 3.09s-1.14-6.52-3.06-9.9c0 0 3.56 2.94 4.2 10.83l2.49 2.38s-.92-4.74-1.3-6.08-.07-1.43-.07-1.43a16.49 16.49 0 0 1 2.43 8.62s4.84 5.19 5.19 4.93zM593.77 53.3s-37.9-4.22-34.77 22.67c0 0-1.13 4.66 3 7 0 0 .17-2 4-1.1a18.4 18.4 0 0 0 4.12.41 8.6 8.6 0 0 0 5.15-1.83s10.91-3.87 16-21.12c0 0 3.26-3.65 3.19-4.64l-6.55 2.42s2 4.73 0 8.49c0 0 .21-8.31-1-8.18-.25 0-3.41 1.44-3.41 1.44s3.36 8.25.22 14c0 0 1.58-9.88-1.43-13.44l-4.65 2.4s4 8.55.65 15.19c0 0 1.3-10.38-1.63-14.59l-4.25 3s3.72 8.41.91 13.92c0 0 .29-12.14-1.84-13.17 0 0-3.74 3-4.35 4.24 0 0 2.53 6.1.62 9.15 0 0-.67-8.13-1.55-8.21 0 0-3.84 5.17-4.4 8.82a19.47 19.47 0 0 1 3.56-9.38 10.76 10.76 0 0 0-5.6 2.55s.74-3.75 6.54-3.79c0 0 3.15-3.91 4-4.12 0 0-5.73-.77-9.3.6 0 0 3.25-3.42 10.39-1.43l4.21-3.09s-7.61-1.54-10.83-.54c0 0 3.86-3 11.92-.25l4.53-2.41s-6.39-1.72-10.26-1.41c0 0 4.17-2 11.58.77l3.22-1.25s-4.69-1.17-6.07-1.39-1.43-.6-1.43-.6a16.45 16.45 0 0 1 8.84 1.44s6.74-2.15 6.67-2.57zM925.37 347.47s-37.88-4.22-34.75 22.64c0 0-1.13 4.66 3 7 0 0 .17-2 4-1.11a17.3 17.3 0 0 0 4.12.41 8.53 8.53 0 0 0 5.15-1.83s10.91-3.87 15.95-21.11c0 0 3.26-3.66 3.19-4.64l-6.55 2.41s2 4.74 0 8.5c0 0 .21-8.32-1-8.18-.25 0-3.41 1.43-3.41 1.43s3.36 8.25.22 14c0 0 1.58-9.87-1.43-13.44l-4.65 2.41s4 8.55.66 15.19c0 0 1.29-10.38-1.64-14.6l-4.25 3s3.72 8.41.91 13.91c0 0 .29-12.14-1.84-13.16 0 0-3.73 3-4.35 4.24 0 0 2.54 6.1.62 9.15 0 0-.67-8.13-1.55-8.21 0 0-3.84 5.17-4.4 8.82a19.47 19.47 0 0 1 3.56-9.38 10.67 10.67 0 0 0-5.6 2.55s.74-3.76 6.54-3.8c0 0 3.16-3.91 4-4.11 0 0-5.73-.78-9.3.59 0 0 3.25-3.41 10.4-1.42l4.2-3.09s-7.52-1.42-10.79-.44c0 0 3.86-3 11.92-.26l4.53-2.4s-6.39-1.72-10.26-1.41c0 0 4.17-2 11.58.77l3.22-1.26s-4.69-1.17-6.07-1.38-1.43-.6-1.43-.6a16.39 16.39 0 0 1 8.84 1.43s6.76-2.19 6.66-2.62zM983.28 382.85s-37.88-4.21-34.75 22.64c0 0-1.12 4.66 3 7 0 0 .17-2 4-1.1a17.65 17.65 0 0 0 4.11.4 8.64 8.64 0 0 0 5.13-1.82s10.9-3.87 15.94-21.12c0 0 3.27-3.65 3.19-4.64l-6.55 2.41s2 4.74 0 8.5c0 0 .21-8.31-1-8.18-.25 0-3.41 1.43-3.41 1.43s3.36 8.25.22 14c0 0 1.58-9.87-1.43-13.43l-4.65 2.4s4 8.55.66 15.19c0 0 1.29-10.38-1.64-14.59l-4.25 3s3.72 8.41.92 13.92c0 0 .28-12.15-1.85-13.17 0 0-3.73 3-4.35 4.24 0 0 2.54 6.1.62 9.15 0 0-.67-8.13-1.55-8.21 0 0-3.84 5.17-4.39 8.82a19.52 19.52 0 0 1 3.55-9.38 10.76 10.76 0 0 0-5.6 2.55s.75-3.76 6.55-3.79c0 0 3.15-3.91 4-4.12 0 0-5.73-.77-9.3.6 0 0 3.25-3.42 10.4-1.43l4.2-3.09s-7.52-1.42-10.79-.44c0 0 3.86-3 11.92-.25l4.53-2.41s-6.39-1.72-10.26-1.41c0 0 4.17-2 11.58.77l3.22-1.25s-4.69-1.17-6.06-1.39-1.44-.6-1.44-.6a16.45 16.45 0 0 1 8.84 1.44s6.79-2.21 6.69-2.64zM854.71 84.84s-30.52-22.83-41.43 1.9c0 0-3.33 3.45-.94 7.58 0 0 1.14-1.61 4 1.06a17.51 17.51 0 0 0 3.34 2.44 8.59 8.59 0 0 0 5.37 1s11.36 2.19 24.45-10.12c0 0 4.66-1.5 5.1-2.38l-6.87-1.24s-.72 5.07-4.27 7.34c0 0 4.39-7.06 3.25-7.57-.23-.11-3.66-.5-3.66-.5s-1.29 8.82-6.89 12.15c0 0 6.37-7.71 5.58-12.31l-5.23-.28s-.89 9.39-7.13 13.43c0 0 6.38-8.29 6-13.41l-5.18.42s-1 9.13-6.26 12.45c0 0 6.4-10.32 5.08-12.28 0 0-4.73.67-5.9 1.45 0 0-.9 6.54-4.1 8.2 0 0 3.54-7.35 2.82-7.86 0 0-5.93 2.51-8.26 5.37a19.53 19.53 0 0 1 7.82-6.28 10.77 10.77 0 0 0-6.12-.64s2.55-2.86 7.57.05c0 0 4.69-1.77 5.49-1.55 0 0-4.55-3.57-8.32-4.19 0 0 4.54-1.3 9.69 4l5.19-.53s-5.76-5-9.08-5.84c0 0 4.83-.61 10.4 5.81l5.13.23s-4.64-4.72-8.13-6.42c0 0 4.6.4 9.59 6.53l3.41.55s-3.45-3.38-4.53-4.26-.92-1.17-.92-1.17a16.44 16.44 0 0 1 6.88 5.72s6.93 1.56 7.06 1.15zM878.29 249.66s-10.52-36.63-34.18-23.48c0 0-4.74.73-5.33 5.47 0 0 1.88-.59 2.53 3.24a17.73 17.73 0 0 0 1.2 4 8.59 8.59 0 0 0 3.66 4.08s7.74 8.6 25.6 6.68c0 0 4.62 1.62 5.5 1.18l-4.73-5.14s-3.63 3.62-7.83 3.28c0 0 7.76-3 7.16-4.07-.12-.22-2.62-2.61-2.62-2.61s-6.34 6.26-12.82 5.53c0 0 9.73-2.3 11.87-6.44l-4-3.38s-6.38 6.94-13.79 6.4c0 0 10.08-2.77 12.86-7.08l-4.38-2.79s-6.35 6.65-12.51 6.15c0 0 11.33-4.37 11.47-6.72 0 0-4.18-2.32-5.59-2.4 0 0-4.67 4.66-8.22 4.06 0 0 7.26-3.73 7-4.57 0 0-6.24-1.57-9.83-.7a19.51 19.51 0 0 1 10-.29 10.73 10.73 0 0 0-4.5-4.2s3.76-.75 6 4.6c0 0 4.81 1.42 5.31 2.08 0 0-1.47-5.59-4.1-8.36 0 0 4.4 1.7 5.29 9.06l4.46 2.71s-1.56-7.5-3.72-10.14c0 0 4.22 2.43 4.79 10.91l4 3.27s-.85-6.56-2.61-10c0 0 3.43 3.1 3.71 11l2.38 2.5s-.7-4.78-1-6.14 0-1.55 0-1.55a16.39 16.39 0 0 1 2.05 8.72s4.56 5.38 4.92 5.14zM643.87 332.2s-20.43-32.18-39.4-12.92c0 0-4.34 2-3.58 6.75 0 0 1.65-1.1 3.35 2.4a17.12 17.12 0 0 0 2.26 3.46 8.54 8.54 0 0 0 4.65 2.88s9.85 6.08 26.45-.8c0 0 4.89.26 5.61-.41l-6-3.6s-2.47 4.5-6.6 5.35c0 0 6.62-5 5.73-5.92-.17-.18-3.25-1.76-3.25-1.76s-4.33 7.78-10.75 8.91c0 0 8.69-4.95 9.59-9.53l-4.79-2.11s-4.17 8.45-11.43 10c0 0 8.9-5.49 10.35-10.41l-5-1.44s-4.22 8.17-10.27 9.42c0 0 9.64-7.38 9.11-9.68 0 0-4.66-1.05-6-.73 0 0-3.17 5.79-6.75 6.21 0 0 5.92-5.62 5.43-6.36 0 0-6.43.25-9.63 2.1a19.46 19.46 0 0 1 9.54-3.1 10.73 10.73 0 0 0-5.49-2.77s3.39-1.77 7 2.73c0 0 5 0 5.69.5 0 0-3-5-6.29-6.87 0 0 4.7.4 7.62 7.21l5.05 1.34s-3.61-6.75-6.42-8.68c0 0 4.73 1.14 7.66 9.13l4.72 2s-2.66-6.05-5.33-8.88c0 0 4.16 2 6.65 9.51l3 1.73s-2-4.39-2.71-5.6-.43-1.49-.43-1.49a16.4 16.4 0 0 1 4.41 7.79s5.98 3.98 6.25 3.64z",
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M778.14 167.78s-19.43-32.79-39-14.13c0 0-4.4 1.9-3.78 6.64 0 0 1.67-1.06 3.27 2.49a17.28 17.28 0 0 0 2.15 3.54 8.49 8.49 0 0 0 4.56 3s9.65 6.38 26.46 0c0 0 4.88.41 5.62-.24l-5.87-3.78s-2.6 4.41-6.76 5.14c0 0 6.77-4.83 5.92-5.74-.18-.19-3.2-1.87-3.2-1.87s-4.57 7.65-11 8.58c0 0 8.84-4.68 9.87-9.22l-4.72-2.22s-4.43 8.33-11.74 9.66c0 0 9.07-5.21 10.67-10.08l-4.94-1.6s-4.48 8-10.56 9.1c0 0 9.86-7.08 9.4-9.39 0 0-4.62-1.2-6-.92 0 0-3.35 5.69-6.94 6 0 0 6.09-5.42 5.63-6.18 0 0-6.44.05-9.69 1.8a19.52 19.52 0 0 1 9.63-2.8 10.75 10.75 0 0 0-5.41-2.94s3.45-1.67 7 2.94c0 0 5 .17 5.67.68 0 0-2.83-5-6.07-7.06 0 0 4.68.54 7.39 7.44l5 1.5s-3.39-6.86-6.15-8.88c0 0 4.7 1.29 7.38 9.36l4.65 2.17s-2.47-6.13-5-9c0 0 4.09 2.13 6.36 9.71l2.93 1.82s-1.88-4.45-2.54-5.68-.38-1.5-.38-1.5a16.43 16.43 0 0 1 4.17 7.92s5.73 4.07 6.02 3.74zM655.21 236.73s1-38.1-25.47-32.73c0 0-4.74-.73-6.74 3.61 0 0 2 0 1.44 3.85a17.56 17.56 0 0 0-.06 4.14 8.55 8.55 0 0 0 2.25 5s4.77 10.54 22.38 14.12c0 0 3.91 2.95 4.89 2.79l-3-6.32s-4.55 2.34-8.46.75c0 0 8.3-.49 8.07-1.71 0-.25-1.72-3.29-1.72-3.29s-7.94 4.05-13.89 1.39c0 0 10 .75 13.27-2.54l-2.79-4.43s-8.18 4.68-15.08 1.92c0 0 10.45.42 14.41-2.85l-3.33-4s-8.07 4.42-13.79 2.08c0 0 12.12-.73 13-2.94 0 0-3.28-3.47-4.6-4 0 0-5.86 3-9.06 1.38 0 0 8-1.34 8.05-2.23 0 0-5.47-3.39-9.16-3.64a19.47 19.47 0 0 1 9.65 2.76 10.75 10.75 0 0 0-3-5.37s3.81.43 4.33 6.2c0 0 4.17 2.82 4.44 3.6 0 0 .29-5.77-1.38-9.21 0 0 3.68 2.95 2.3 10.23l3.43 3.94s.78-7.62-.47-10.79c0 0 3.28 3.59 1.26 11.85l2.77 4.31s1.18-6.51.55-10.34c0 0 2.32 4 .2 11.61l1.52 3.1s.77-4.77.87-6.16.48-1.48.48-1.48a16.42 16.42 0 0 1-.69 8.93s2.69 6.6 3.13 6.47z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 698.97,
    cy: 716.3,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 600.8,
    cy: 785.38,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 93.14,
    cy: 749.99,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 805.06,
    cy: 780.83,
    rx: 26.93,
    ry: 4.55,
    fill: primaryColor,
    opacity: 0.1
  }), React.createElement("ellipse", {
    cx: 833.1,
    cy: 723.1,
    rx: 40.21,
    ry: 6.8,
    fill: primaryColor
  }), React.createElement("path", {
    d: "M849.77 711.97a11.61 11.61 0 0 0 3.83-5.78c.5-2.3-.48-5.05-2.67-5.89-2.46-.94-5.09.76-7.09 2.48s-4.27 3.69-6.88 3.33a10.5 10.5 0 0 0 3.24-9.81 4.11 4.11 0 0 0-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.09-7s-.66-5-2.65-6.22a7.91 7.91 0 0 0-4-1c-2.34-.08-4.95.15-6.54 1.86-2 2.12-1.47 5.69.25 8s4.35 3.8 6.77 5.42a15.13 15.13 0 0 1 4.84 4.61 4.7 4.7 0 0 1 .35.82h14.66a40.44 40.44 0 0 0 9.04-6.22z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M75.06 728.84s15.35-.47 20-3.77 23.63-7.23 24.78-1.94 23.08 26.29 5.74 26.43-40.29-2.7-44.91-5.52-5.61-15.2-5.61-15.2z",
    fill: "#a8a8a8"
  }), React.createElement("path", {
    d: "M125.87 747.72c-17.34.14-40.29-2.7-44.91-5.52-3.52-2.14-4.92-9.83-5.39-13.38h-.51s1 12.39 5.59 15.2 27.57 5.66 44.91 5.52c5 0 6.73-1.82 6.64-4.46-.7 1.61-2.61 2.61-6.33 2.64z",
    opacity: 0.2
  }));
};

UndrawEmpty.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawEmpty;