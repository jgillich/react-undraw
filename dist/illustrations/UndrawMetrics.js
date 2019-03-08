function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawMetrics = function UndrawMetrics(_props) {
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
    viewBox: "0 0 902.289 674.064",
    style: style
  }, props), React.createElement("path", {
    d: "M181.58 390.433s23.126 1.542 27.237-1.542 21.585 4.112 23.127 8.223-24.669 4.626-28.78 4.626-23.64 6.167-23.64 6.167z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M240.222 338.82a56.628 56.628 0 0 0-37.317 78.332l51.524-23.505z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M266.589 402.418l-51.525 23.506a56.636 56.636 0 1 0 37.317-78.333z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M178.982 448.02l-8.195 77.755s-2.57 30.836-10.279 37.517c0 0 0 9.764-2.57 12.848l-3.597 40.6s5.14 14.904 4.625 17.474 2.056 10.792 1.542 11.82-24.668 0-24.668 0l5.139-82.742 15.932-115.12z",
    fill: "#3c354c"
  }), React.createElement("path", {
    d: "M178.982 448.02l-8.195 77.755s-2.57 30.836-10.279 37.517c0 0 0 9.764-2.57 12.848l-3.597 40.6s5.14 14.904 4.625 17.474 2.056 10.792 1.542 11.82-24.668 0-24.668 0l5.139-82.742 15.932-115.12z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M0 673.564h358.509M351.51 613.032s211-123 483 0"
  }), React.createElement("path", {
    d: "M393.964 593.725a38.155 38.155 0 0 1-30.455-37.367V38.642A38.142 38.142 0 0 1 401.651.5h382.716a38.142 38.142 0 0 1 38.142 38.142v517.716a38.147 38.147 0 0 1-34.033 37.923",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M387.009 61.971h408V533.03h-408z"
  }), React.createElement("circle", {
    cx: 593.009,
    cy: 31,
    r: 10,
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("path", {
    d: "M571.553 558.618a22.006 22.006 0 0 1 42.99.356M341.39 95.957a22.982 22.982 0 0 0-19.81 13.851c-4.954 11.974 1.424 26.04 10.999 34.77s21.873 13.723 33.048 20.283c15.01 8.811 28.497 21.043 36.007 36.744s8.309 35.15-.519 50.15c-8.193 13.922-23.092 22.255-37.302 29.94",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 354.009,
    cy: 97,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 368.009,
    cy: 153,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 336.009,
    cy: 162,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 386.009,
    cy: 209,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 421.009,
    cy: 209,
    rx: 17.5,
    ry: 8.5,
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M811.852 439.323a21.4 21.4 0 0 0-18.447 12.898c-4.612 11.15 1.327 24.247 10.243 32.377s20.368 12.778 30.774 18.887c13.977 8.205 26.536 19.595 33.53 34.216s7.736 32.731-.484 46.699c-7.63 12.964-21.504 20.724-34.736 27.88",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 823.603,
    cy: 440.294,
    rx: 16.296,
    ry: 7.915,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 836.64,
    cy: 492.44,
    rx: 16.296,
    ry: 7.915,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 806.842,
    cy: 500.821,
    rx: 16.296,
    ry: 7.915,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 853.401,
    cy: 544.587,
    rx: 16.296,
    ry: 7.915,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 885.993,
    cy: 544.587,
    rx: 16.296,
    ry: 7.915,
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M851.366 471.302a17.477 17.477 0 0 1 15.065 10.533c3.767 9.106-1.083 19.802-8.365 26.442s-16.634 10.436-25.132 15.424c-11.414 6.701-21.671 16.003-27.382 27.943s-6.319 26.73.394 38.138c6.231 10.587 17.562 16.924 28.368 22.768",
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10
  }), React.createElement("ellipse", {
    cx: 841.769,
    cy: 472.095,
    rx: 13.308,
    ry: 6.464,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 831.123,
    cy: 514.681,
    rx: 13.308,
    ry: 6.464,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 855.458,
    cy: 521.526,
    rx: 13.308,
    ry: 6.464,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 817.434,
    cy: 557.268,
    rx: 13.308,
    ry: 6.464,
    fill: "#57b894"
  }), React.createElement("ellipse", {
    cx: 790.817,
    cy: 557.268,
    rx: 13.308,
    ry: 6.464,
    fill: "#57b894"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M455.509 161.032v226h265"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M489.509 312.032h22v58h-22zM534.509 292.032h22v78h-22zM579.509 268.032h22v102h-22zM624.509 225.032h22v145h-22zM669.509 191.032h22v179h-22z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#3f3d56",
    strokeMiterlimit: 10,
    d: "M482.509 305.032h22v58h-22zM527.509 285.032h22v78h-22zM572.509 261.032h22v102h-22zM617.509 218.032h22v145h-22zM662.509 184.032h22v179h-22z"
  }), React.createElement("ellipse", {
    cx: 177.211,
    cy: 252.444,
    rx: 25.696,
    ry: 20.043,
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M133.957 641.83s-10.778 27.18-5.155 30.46 64.668.937 64.668.937 9.84-6.091-1.406-10.309c0 0-9.372-.469-15.464-4.217s-13.12-10.778-13.12-10.778-.47-10.31-4.218-7.967a9.63 9.63 0 0 0-4.218 6.56z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M133.957 641.83s-10.778 27.18-5.155 30.46 64.668.937 64.668.937 9.84-6.091-1.406-10.309c0 0-9.372-.469-15.464-4.217s-13.12-10.778-13.12-10.778-.47-10.31-4.218-7.967a9.63 9.63 0 0 0-4.218 6.56z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M117.338 638.145s-11.82 29.808-5.653 33.406 70.922 1.027 70.922 1.027 10.792-6.68-1.542-11.306c0 0-10.278-.514-16.96-4.625s-14.39-11.82-14.39-11.82-.513-11.307-4.625-8.737a10.562 10.562 0 0 0-4.625 7.195z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M165.133 446.965s-5.653 52.934-8.222 64.24a146.169 146.169 0 0 0-3.084 22.613s-.514 16.446-5.14 21.071a13.89 13.89 0 0 0-4.11 10.279s-4.626 51.906-2.056 58.074 6.058 14.179 3.488 18.29-31.754 1.239-31.754-1.845 0-5.653-1.542-7.195 0-11.306 0-11.306-6.167-45.74-.514-59.102 8.223-49.85 8.223-49.85-4.111-41.628-9.25-48.31 1.027-30.321 1.027-30.321z",
    fill: "#3c354c"
  }), React.createElement("path", {
    d: "M150.664 282.581c.598 1.361 2.028 2.119 3.33 2.836 7.545 4.157 13.861 10.184 20.084 16.141a23.578 23.578 0 0 1 .936-15.944c.743-1.72 1.716-3.57 1.185-5.367a6.682 6.682 0 0 0-2.606-3.119 80.803 80.803 0 0 0-7.947-5.422c-1.925-1.151-5.881-4.216-8.09-3.882-.115 2.983-.176 5.65-1.482 8.44-.31.66-5.181 6.837-5.41 6.317z",
    fill: "#fbbebe"
  }), React.createElement("circle", {
    cx: 176.954,
    cy: 268.119,
    r: 21.071,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M177.982 317.97s3.597-17.988-6.681-24.155-22.1-13.362-22.1-13.362-3.597-.514-5.138 7.195c0 0-29.294 5.653-32.378 33.405s2.056 68.352 2.056 68.352-4.625 35.461-10.279 54.477c0 0-4.625 4.11 15.932-2.056s56.532 17.473 56.532 17.473 3.597-3.597 3.597-6.167 4.112-17.473 4.112-17.473 3.597-63.213 5.14-70.408-6.168-46.253-10.793-47.281zM171.988 270.29a8.787 8.787 0 0 1 4.132-1.101 7.864 7.864 0 0 0 4.088-1.218c1.99-1.528 2.137-4.481 3.593-6.525 2.108-2.959 6.313-3.315 9.943-3.167 2.22.09 4.611.224 6.48-.977 1.92-1.233 2.79-3.556 3.437-5.743.766-2.587 1.26-5.75-.636-7.669-1.317-1.332-3.395-1.595-4.858-2.765-1.517-1.213-2.141-3.188-2.966-4.946a13.366 13.366 0 0 0-4.304-5.391c-2.76-1.918-6.284-2.348-9.645-2.312s-6.734.478-10.07.066c-2.732-.338-5.456-1.247-8.18-.844-3.47.513-6.342 3.131-8.052 6.195s-2.444 6.56-3.155 9.995l-1.935 9.344c-.6 2.898-1.203 5.873-.74 8.796.96 6.06 6.32 10.876 6.688 17a10.436 10.436 0 0 1 6.37-7.575 1.993 1.993 0 0 1 1.298-.157c.532.17.843.702 1.18 1.149.88 1.17 3.645 2.946 5.213 2.115 1.402-.742.355-3.074 2.119-4.27z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M118.88 366.279s-3.597 22.612 11.307 20.557c0 0 7.708-1.028 8.736 0s39.059-5.654 44.198-11.307c0 0 6.167-2.055 9.25 1.028s33.92 6.167 24.669-3.083-23.64-11.307-23.64-11.307l-19.53 1.028s-10.278 3.084-16.445 0-23.641-2.056-23.641-2.056z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M139.951 294.843s-23.126 2.57-23.126 35.975v42.656s12.848-5.654 15.417-5.14 12.848-6.68 12.848-6.68 11.82-27.753 10.793-35.461-.514-30.322-15.932-31.35z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 176.954,
    cy: 255.014,
    rx: 19.786,
    ry: 10.279,
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 158.452,
    cy: 256.813,
    rx: 6.938,
    ry: 17.217,
    fill: "#3f3d56"
  }));
};

UndrawMetrics.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMetrics;