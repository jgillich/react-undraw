function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawNotes = function UndrawNotes(_props) {
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
    viewBox: "0 0 910.74 527.39",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 209.98,
    y1: 290.83,
    x2: 209.98,
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
    x1: 356.48,
    y1: 409.11,
    x2: 356.48,
    y2: 118.28,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 502.98,
    y1: 527.39,
    x2: 502.98,
    y2: 236.57,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 912.16,
    y1: 688.94,
    x2: 912.16,
    y2: 281.8,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0h419.96v290.83H0z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f7f7f7",
    d: "M4.34 4.34H416.7v283.23H4.34z"
  }), React.createElement("g", {
    opacity: 0.5,
    fill: primaryColor
  }, React.createElement("circle", {
    cx: 71.35,
    cy: 100.38,
    r: 7.6
  }), React.createElement("circle", {
    cx: 71.35,
    cy: 145.96,
    r: 7.6
  }), React.createElement("circle", {
    cx: 71.35,
    cy: 191.53,
    r: 7.6
  })), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M127.24 96.04H357.3v8.68H127.24zM127.24 141.61H357.3v8.68H127.24zM127.24 187.19H357.3v8.68H127.24z"
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M146.5 118.28h419.96v290.83H146.5z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#f7f7f7",
    d: "M150.84 122.62H563.2v283.23H150.84z"
  }), React.createElement("g", {
    opacity: 0.5,
    fill: primaryColor
  }, React.createElement("circle", {
    cx: 217.85,
    cy: 218.66,
    r: 7.6
  }), React.createElement("circle", {
    cx: 217.85,
    cy: 264.24,
    r: 7.6
  }), React.createElement("circle", {
    cx: 217.85,
    cy: 309.82,
    r: 7.6
  })), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M273.73 214.32h230.06V223H273.73zM273.73 259.9h230.06v8.68H273.73zM273.73 305.47h230.06v8.68H273.73z"
  }), React.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M293 236.57h419.96V527.4H293z",
    opacity: 0.5
  }), React.createElement("path", {
    fill: "#eee",
    d: "M297.34 240.91H709.7v283.23H297.34z"
  }), React.createElement("circle", {
    cx: 364.35,
    cy: 336.94,
    r: 7.6,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 364.35,
    cy: 382.52,
    r: 7.6,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 364.35,
    cy: 428.1,
    r: 7.6,
    fill: primaryColor
  }), React.createElement("path", {
    fill: "#dfdfdf",
    d: "M420.23 332.6h230.06v8.68H420.23zM420.23 378.18h230.06v8.68H420.23zM420.23 423.76h230.06v8.68H420.23z"
  }), React.createElement("path", {
    d: "M1046.74 419c-3-.19-6.09-2.26-6.39-5.24-.36-3.56 3-6.17 5.13-9.08 3.72-5.18 3.27-12.63-.09-18s-9.18-9-15.29-10.8c-5.07-1.51-11-2.35-14-6.77-4.74-7.18 2.59-16.19 3.22-24.77.6-8.17-6.16-16.18-14.32-17-4.72-.45-10.26 1-13.68-2.3a9.28 9.28 0 0 1-2.1-3.4c-2.2-5.71-1.17-12.07-.89-18.18s-.56-13-5.27-16.89c-2.72-2.27-6.32-3.16-9.81-3.73-10.59-1.73-21.44-1.14-32.06.42-14.79 2.17-30.21 6.77-40 18.06s-11.07 30.89.75 40c-1-.8-.56-2.57.87-4.69v.59a30 30 0 0 0 19.69 28.2v2.11a20.58 20.58 0 0 0-6.08 2.57c-20.14 4.97-60.42 29.79-60.42 29.79l-59.15 10s-29 4.46-27.9 8.93 27.9 1.12 27.9 1.12h59.81a32.26 32.26 0 0 0 15.52-4l32.7-18c-.16 2.6-.24 5.28-.26 8-5.17 3.7-10.23 11.78.4 28.42l.08-.46v.46l-11.89 54.82c-3.62 2.68-6.1 5.15-5.24 6.47.5.76 1.84.9 3.67.65l-16.46 76L921.3 628l7.7 44.1-7.25 6.95-26.9 5a2.44 2.44 0 0 0 .45 4.84h58.94v-11.11h.54l-1-13.34 18.63-12.18-6.11-9.34-.87.57-14.88-20.79-2.55-32.76 27.2-98.54v-.11l-6.68-27.49 11.71-5.94A17.17 17.17 0 0 0 988.7 437c-1.79-5.19-4-11.31-6.58-17.53a50 50 0 0 0 13.24 9.47c19.38 9.11 42.62.43 60-12.07-2.75 1.13-5.63 2.33-8.62 2.13zm-83.48 23.13l-4.15-17.06 5.64 14.42c-.75 1.31-1.31 2.29-1.5 2.65zm-23.16-74.44v-1.28a29.9 29.9 0 0 0 10.68-5 42.77 42.77 0 0 0 1.29 13.36c-2.63-3.41-6.43-5.77-11.98-7.06zm-31.32 196.58l23.84-68.93L918 577.17z",
    transform: "translate(-144.63 -186.3)",
    fill: "url(#prefix__d)",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M820.15 452.27l-20.89 13.66-24.08 23.09a2.37 2.37 0 0 0-.34 3 2.37 2.37 0 0 0 3.28.69l48-31.36z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M776.98 205.1l-48.29 26.51a31.36 31.36 0 0 1-15.09 3.87h-58.16v-9.78l57.51-9.77s65.12-40.13 69.42-27.11-5.39 16.28-5.39 16.28z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M828.85 304.94H748.7l12-55.34c0-30.12-6-65.89 24.13-65.89 30.12 0 26.87 20.58 26.87 50.69z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M777.61 162.68h17.08v23.67a7.87 7.87 0 0 1-7.87 7.87h-1.34a7.87 7.87 0 0 1-7.87-7.87v-23.67z",
    fill: "#fda57d"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M748.7 304.82l-17.08 78.84 69.64 84.1 18.39-14.45-55.41-77.53 24.54-70.96H748.7z"
  }), React.createElement("path", {
    opacity: 0.04,
    d: "M748.7 304.82l-17.08 78.84 69.64 84.1 18.39-14.45-55.41-77.53 24.54-70.96H748.7z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M788.12 304.82l-17.65 98.86 14.39 82.47h24.11l-6.57-85.4 26.45-95.93h-40.73z"
  }), React.createElement("path", {
    d: "M817.13 257.19l-53.17 38 4.34 7.6 62.16-31.53a16.69 16.69 0 0 0 8.24-20.32c-7.41-21.5-21.57 6.25-21.57 6.25z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M802.83 213.42l17.54 44.85-54.24 31.43 5.43 14.11 62.16-31.53a16.69 16.69 0 0 0 8.24-20.32c-7.41-21.47-22.72-59.41-35.71-50.49a10 10 0 0 0-3.42 11.95z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M801.75 211.25l17.55 44.86-53.17 35.81 3.24 9.78 63.24-31.53a16.69 16.69 0 0 0 8.24-20.32c-7.41-21.47-22.72-59.41-35.71-50.49a10 10 0 0 0-3.39 11.89z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M808.45 486.16h-25l-32.79 6.15a2.37 2.37 0 0 0-1.93 2.33 2.37 2.37 0 0 0 2.37 2.37h57.31z",
    fill: "#333"
  }), React.createElement("path", {
    d: "M804.11 213.78s13 17.36 10.85 30.38M777.61 184.7a29.29 29.29 0 0 0 17.08.92v-20.77h-17.08z",
    opacity: 0.05
  }), React.createElement("circle", {
    cx: 787.66,
    cy: 155.08,
    r: 29.2,
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M655.44 225.7s-28.21 4.34-27.13 8.68 27.13 1.09 27.13 1.09zM766.85 292.12s-25.25 13.32-22.8 17.07 26-7.84 26-7.84z",
    fill: "#fda57d"
  }), React.createElement("path", {
    d: "M766.13 219.21s-21.87 4.78-5.51 30.38",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M792.17 221.38s-21.87 4.78-5.51 30.38",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M793.26 221.38s-21.87 4.78-5.51 30.38",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M809.37 164.45c-5.77 9.35-5.42 21.49-1.6 31.79s10.73 19.12 17.73 27.59c6.56 7.94 13.59 15.95 22.91 20.33 18.85 8.86 41.44.42 58.35-11.73-2.68 1.14-5.49 2.31-8.39 2.12s-5.92-2.2-6.22-5.09c-.35-3.46 3-6 5-8.83 3.62-5 3.18-12.28-.08-17.55s-8.92-8.72-14.87-10.5c-4.93-1.47-10.73-2.29-13.57-6.58-4.6-7 2.52-15.74 3.13-24.08.59-7.94-6-15.73-13.92-16.49-4.59-.44-10 1-13.3-2.24a9 9 0 0 1-2-3.31c-2.14-5.55-1.14-11.74-.87-17.68s-.55-12.62-5.12-16.42c-2.65-2.2-6.14-3.07-9.54-3.62-10.3-1.68-20.85-1.11-31.17.41-14.39 2.11-29.37 6.58-38.9 17.56s-10.77 30 .73 38.94c-4.07-3.15 15.77-21.7 25.09-16 10.61 6.44 10.83 22 26.61 21.38z",
    fill: "#333"
  }));
};

UndrawNotes.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawNotes;