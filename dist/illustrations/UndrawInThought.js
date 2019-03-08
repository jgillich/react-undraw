function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawInThought = function UndrawInThought(_props) {
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
    viewBox: "0 0 839.387 834.645",
    style: style
  }, props), React.createElement("path", {
    d: "M569.347 224.369q15.11 7.976 29.54 16.323M381.885 191.421c43.939 9.501 91.91 25.903 140.235 49.05a670.774 670.774 0 0 1 100.103 58.752",
    fill: "none",
    stroke: "#2f2e41",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M235.63 832.573h450.533"
  }), React.createElement("path", {
    d: "M340.77 184.39c13.204 1.623 26.95 3.969 41.115 7.031M211.555 322.155c-24.394-35.7-32.774-69.428-20.24-95.594 13.862-28.94 50.969-43.745 101.268-44.836M725.253 401.89c20.333 32.732 26.641 63.419 15.044 87.63-10.206 21.306-33.01 34.95-64.4 41.102M622.223 299.223a498.103 498.103 0 0 1 57.619 47.756M198.048 139.888c40.492-8.699 92.891-7.152 151.494 4.4M787.386 401.887c18.128 26.48 29.277 52.105 32.19 75.44M598.887 240.692q27.274 15.77 51.9 32.62",
    fill: "none",
    stroke: "#2f2e41",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M624.944 630.714a25.07 25.07 0 0 0-21.61 15.11c-5.404 13.062 1.554 28.405 11.998 37.93s23.862 14.97 36.052 22.125c16.374 9.613 31.087 22.956 39.28 40.084s9.063 38.344-.567 54.707c-8.938 15.188-25.19 24.278-40.692 32.66",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 638.71,
    cy: 631.851,
    rx: 19.09,
    ry: 9.272,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 653.983,
    cy: 692.941,
    rx: 19.09,
    ry: 9.272,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 619.074,
    cy: 702.759,
    rx: 19.09,
    ry: 9.272,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 673.618,
    cy: 754.03,
    rx: 19.09,
    ry: 9.272,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 711.799,
    cy: 754.03,
    rx: 19.09,
    ry: 9.272,
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M522.642 270.647h10.754s9.859 76.178 2.689 83.348-26.887 11.65-29.575 0 0-54.669 0-54.669z",
    fill: primaryColor
  }), React.createElement("ellipse", {
    cx: 452.289,
    cy: 204.328,
    rx: 65.424,
    ry: 76.626,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M437.501 218.667s3.585 29.575-7.17 35.849 12.548 42.122 12.548 42.122l27.782 7.17 18.82-25.991-3.584-26.886s-21.51-21.51-11.65-41.226z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M437.501 218.667s3.585 29.575-7.17 35.849 12.548 42.122 12.548 42.122l27.782 7.17 18.82-25.991-3.584-26.886s-21.51-21.51-11.65-41.226z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M397.172 539.709s-10.755 97.687 0 120.988 39.433 88.725 39.433 88.725l-8.962 18.82 24.198-5.377 9.858-18.82s-11.65-45.707-13.443-61.839S433.02 636.5 433.02 636.5l25.094-106.65zM482.312 523.38s.896 98.583 7.17 113.875l-3.585 133.535 19.717 2.633s28.678-112.027 24.197-138.913.897-123.678.897-123.678z",
    fill: "#ffc1c7"
  }), React.createElement("circle", {
    cx: 452.289,
    cy: 196.71,
    r: 34.056,
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M568.348 535.926s-24.197 16.132-34.056 4.481-130.847 7.17-146.082 3.585 8.066-60.942 8.066-90.517c0-22.128 8.03-55.79 12.072-71.348 1.362-5.234 2.267-8.415 2.267-8.415s9.195-26.16 7.475-37.032a9.35 9.35 0 0 0-.673-2.393 4.913 4.913 0 0 0-.528-.905c-4.293-5.727-16.598-47.49-21.375-65.423a80.965 80.965 0 0 1-1.927-8.066c0-2.689 33.16-10.755 41.45-11.14 8.299-.385 10.53 11.14 10.53 11.14 2.689 1.792 15.236 33.16 15.236 33.16l11.65-29.575s-.895-6.274-1.792-6.274 13.255-8.46 13.255-8.46 14.528 10.253 22.594 8.46 26.886 14.34 26.886 14.34-33.16 83.347-19.716 101.272 54.668 163.11 54.668 163.11z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M459.01 740.46s-15.235 15.236-15.235 17.028l-12.547-5.377s-5.377 19.717-6.274 22.405-16.131 26.887-31.367 37.641 0 24.198 13.443 21.51 47.5-33.16 47.5-33.16 23.301 0 31.367-17.925c0 0-21.51-43.914-26.886-42.122z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M503.821 766.31s-23.023-16.729-24.507-1.195-1.483 49.59-1.483 49.59-7.17 22.405 15.236 19.717 24.197-8.963 24.197-8.963l-10.754-43.018v-18.82z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M416.889 333.382c-4.293-5.727-16.598-47.49-21.375-65.423h4.346s10.916 42.722 17.557 66.328a4.913 4.913 0 0 0-.528-.905zM476.039 392.532s-12.547.896-58.254-8.066a91.374 91.374 0 0 1-9.437-2.339c1.362-5.234 2.267-8.415 2.267-8.415s9.195-26.16 7.475-37.032c2.141 7.528 3.737 12.61 4.176 12.834 1.792.896 59.15 10.755 67.216 14.34s-13.443 28.678-13.443 28.678zM492.17 275.237s24.72-3.05 26.251.958 7.805 42.743 10.494 47.71 3.585 35.755-7.17 36.749-25.094-9.933-22.405-18.872-7.17-66.545-7.17-66.545z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M479.623 357.58s37.641 4.481 43.915 0 32.263-4.481 26.886 8.066-51.98 13.443-51.98 13.443h-26.887z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M399.86 261.685h-6.273s-12.547 2.689-10.755 42.122-10.754 65.424 34.953 74.386 58.254 8.066 58.254 8.066 21.509-25.094 13.443-28.679-65.424-13.443-67.216-14.34-22.406-81.555-22.406-81.555z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M517.733 279.374s-15.704-58.915-28.251-58.915-26.887 2.69-16.132 14.34 24.198 24.198 25.094 30.471 4.481 15.236 4.481 15.236z",
    fill: "#ffc1c7"
  }), React.createElement("path", {
    d: "M495.755 275.237s24.72-3.05 26.251.958 7.805 42.743 10.494 47.71 3.585 35.755-7.17 36.749-25.094-9.933-22.405-18.872-7.17-66.545-7.17-66.545z",
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 443.327,
    cy: 164.446,
    r: 32.264,
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M573.337 529.167c-50.068-8.252-106.709-26.19-163.846-53.558-65.057-31.161-120.184-69.485-159.465-108.216M370.337 492.465c-44.792-23.206-85.344-49.006-120.313-75.866",
    fill: "none",
    stroke: "#2f2e41",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 53.7,
    cy: 76.078,
    r: 53.7,
    fill: primaryColor
  }), React.createElement("circle", {
    cx: 66.297,
    cy: 54.2,
    r: 53.7,
    fill: "none",
    stroke: "#2f2e41",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 800.314,
    cy: 270.044,
    r: 31.244,
    fill: "#f2f2f2"
  }), React.createElement("circle", {
    cx: 807.643,
    cy: 257.315,
    r: 31.244,
    fill: "none",
    stroke: "#2f2e41",
    strokeMiterlimit: 10
  }), React.createElement("circle", {
    cx: 230.363,
    cy: 595.729,
    r: 44.913,
    fill: "#f2f2f2"
  }), React.createElement("circle", {
    cx: 240.898,
    cy: 577.431,
    r: 44.913,
    fill: "none",
    stroke: "#2f2e41",
    strokeMiterlimit: 10
  }));
};

UndrawInThought.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawInThought;