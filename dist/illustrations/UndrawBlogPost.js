function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawBlogPost = function UndrawBlogPost(_props) {
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
    viewBox: "0 0 627.45 759",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 313.72,
    y1: 759,
    x2: 313.72,
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
    x1: 313.72,
    y1: 455.23,
    x2: 313.72,
    y2: 213.09,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopColor: "#b3b3b3",
    stopOpacity: 0.25
  }), React.createElement("stop", {
    offset: 0.54,
    stopColor: "#b3b3b3",
    stopOpacity: 0.1
  }), React.createElement("stop", {
    offset: 1,
    stopColor: "#b3b3b3",
    stopOpacity: 0.05
  }))), React.createElement("path", {
    fill: "url(#prefix__a)",
    d: "M0 0h627.45v759H0z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M7.58 5.49h612.28v736.45H7.58z"
  }), React.createElement("path", {
    fill: "#64ffda",
    d: "M50.71 52.74h240.74v19.72H50.71zM50.71 513.37h240.74v19.72H50.71z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M50.71 92.18h526.03v19.72H50.71zM50.71 131.63h526.03v19.72H50.71z"
  }), React.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M46.44 213.09H581v242.14H46.44z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M51.18 216.78h526.03v231.2H51.18z"
  }), React.createElement("path", {
    fill: "#e0e0e0",
    d: "M50.71 637.59h526.03v19.72H50.71zM50.71 678.34h526.03v19.72H50.71zM50.71 597.05h526.03v19.72H50.71zM50.71 556.51h526.03v19.72H50.71z"
  }));
};

UndrawBlogPost.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBlogPost;