function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawFolder = function UndrawFolder(_props) {
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
    viewBox: "0 0 929.545 793.07",
    style: style
  }, props), React.createElement("path", {
    d: "M837.248 441.08c-.15 11.834-.693 25.092-1.908 39.06l34.087-42.503.24.665a106.324 106.324 0 0 0-12.263-27.185l.27.626zM837.271 439.003l19.787-28.417c-5.689-8.57-12.502-15.206-20.283-19.253-.404-.21-.81-.407-1.217-.602.303 3.204 1.953 22.018 1.713 48.272zM873.69 521.498q1.256-7.434 1.951-14.834l-51.405 40.374-.069-.356q-1.16 4.368-2.42 8.587l51.822-34.556zM830.1 519.851l46.007-42.638.18.737a167.143 167.143 0 0 0-6.409-38.93l-34.737 43.313q-1.798 19.631-5.041 37.518zM834.267 481.598l-61.54-61.156.267-.747a139.563 139.563 0 0 0-12.458 25.22l70.032 66.418c1.668-10.382 2.858-20.409 3.7-29.735zM828.962 520.624q.706-3.803 1.325-7.558l-70.29-66.664.259-.752q-1.744 4.653-3.273 9.605l.255-.755zM824.604 544.988l50.976-40.038.149.765a199.594 199.594 0 0 0 .6-26.9l-46.628 43.216q-2.23 11.915-5.097 22.957zM752.098 517.91l57.64 66.82a240.062 240.062 0 0 0 10.127-26.928l-69.37-64.902a193.08 193.08 0 0 0 1.278 25.816zM834.576 390.73l.468-.243c-12.1-5.592-24.768-4.183-36.579 2.879l37.86 45.645c.251-28.406-1.72-48-1.75-48.282zM820.279 560.047a238.504 238.504 0 0 1-9.157 24.284l52.296-31.012.1.773a94.55 94.55 0 0 0 8.186-22.417q1.023-4.595 1.82-9.201l-52.44 34.967c-.268.87-.532 1.746-.805 2.606zM836.301 441.127l-38.727-46.692.296-.714c-8.861 5.454-17.222 14.099-24.478 25.358l61.039 60.658c1.192-13.812 1.723-26.914 1.87-38.61zM820.361 556.193a323.96 323.96 0 0 0 8.281-33.876l-71.9-66.287q-2.042 6.719-3.658 13.943a116.084 116.084 0 0 0-2.539 20.98l69.766 65.273zM894.423 627.91c-7.664 9.018-16.538 18.883-26.383 28.867l53.363-10.995-.24.665a106.326 106.326 0 0 0 7.895-28.758l-.191.654zM925.788 589.294a41.52 41.52 0 0 0-.554-1.24c-1.81 2.66-12.539 18.203-29.469 38.271l33.364-9.267c1.085-10.228.07-19.684-3.34-27.764zM816.994 700.9q-3.68 2.625-7.341 5.07l61.953 6.438-.408.682q5.71-4.924 10.964-10.18l-65.342-1.691zM838.676 684.02l62.63-3.497-.332.684a167.149 167.149 0 0 0 19.894-34.072l-54.38 11.204q-13.906 13.973-27.812 25.68zM818.41 699.873l64.798 1.678-.373.683a199.594 199.594 0 0 0 17.62-20.334l-63.477 3.544q-9.317 7.754-18.568 14.43z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M741.28 736.357c.431-.49.867-.989 1.316-1.509a166.101 166.101 0 0 0 37.647-13.177l-.934-46.477q.68-1.821 1.309-3.669l.995 49.477a240.054 240.054 0 0 0 24.975-14.281L795.6 620.674q.668-.398 1.363-.819l10.973 85.936.059.007a323.986 323.986 0 0 0 27.985-20.81l-11.44-84.632q.663-.546 1.326-1.103l11.44 84.636q2.969-2.48 5.84-4.976l-10.357-85.745q.658-.607 1.314-1.223l10.366 85.812c7.905-6.932 15.218-13.895 21.814-20.542l-8.391-86.353.682-.405a122.596 122.596 0 0 0-7.167 2.583 122.314 122.314 0 0 0 11.455-17.678l-52.796 31.309a183.519 183.519 0 0 1-11.44 21.317c-.938.992-1.87 2-2.791 3.033l.134 1.05q-.614.915-1.236 1.815l-.178-1.397c-.525.605-1.045 1.222-1.564 1.84a172.843 172.843 0 0 0 16.119-28.21l-57.218-66.331c.719 6.162 1.68 12.351 2.814 18.48a104.979 104.979 0 0 0-19.081-20.695l.45.511-10.358 34.214c3.514 11.301 7.097 24.078 10.259 37.738l19.013-50.253q.217 1.14.44 2.276l-18.964 50.124q4.358 19.226 6.802 37.24l23.782-42.605q.276.874.552 1.735l-24.04 43.066q1.562 12.02 2.248 23.407l29.538-44.042q.303.815.597 1.598l-29.85 44.508-.176-.318q.247 4.513.352 8.915l33.723-42.702q.336.83.625 1.533l-34.307 43.44c.014.91.034 1.824.04 2.727a238.481 238.481 0 0 1-1.202 25.925l3.276-3.726q-.87 2.11-1.694 4.159l-1.863 2.118a202.53 202.53 0 0 1-.48 3.818q-.953 2.458-1.833 4.796.715-4.394 1.233-8.842l-74.919-45.398c21.58 47.004 59.625 90.702 62.06 93.475q2.454-5.3 4.428-10.84c.447-.069.894-.143 1.34-.216-.154.443-.305.89-.463 1.329-.234.038-.468.082-.701.119l.608.132q-1.405 3.881-3 7.583a197.978 197.978 0 0 0 6.464-6.876c17.21 3.345 63.379 9.943 101.654-5.974l-60.632-9.561a167.754 167.754 0 0 1-39.348 13.651zm37.686-78.203l1.352-1.537.044 2.183-1.352 1.537zM924.48 587.426l.514.111c-5.753-12.024-16.408-19.019-30.009-21.113l.046 59.303c18.312-21.717 29.291-38.066 29.448-38.301z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M805.474 708.714a238.506 238.506 0 0 1-22.54 12.863l60.056 9.47-.416.658a94.555 94.555 0 0 0 20.603-12.043q3.719-2.887 7.27-5.926l-62.691-6.516c-.761.5-1.522 1.005-2.282 1.494zM867.597 655.886c9.727-9.877 18.493-19.63 26.067-28.544l-.047-60.663.684-.36c-10.304-1.452-22.257-.126-35.027 3.917zM735.132 517.175c-8.06-6.392-16.59-10.597-25.24-12.041-.45-.075-.897-.136-1.344-.196 1.278 2.953 8.663 20.336 16.55 45.379zM735.407 591.754l-77.43-39.14.023-.793a139.558 139.558 0 0 0-4.052 27.836l87.132 41.519c-1.623-10.388-3.59-20.293-5.673-29.422zM741.348 622.911l-87.454-41.672.014-.796q-.22 4.964-.144 10.146l.01-.796 88.65 40.716q-.504-3.835-1.076-7.598zM745.265 668.678l-86.034-40.282a193.077 193.077 0 0 0 9.195 24.157l.06-.868 75.471 45.733a240.068 240.068 0 0 0 1.308-28.74zM707.613 505.24l.37-.375c-13.236-1.578-24.848 3.677-33.897 14.044l50.114 31.707c-8.54-27.093-16.472-45.118-16.587-45.376zM724.832 552.636l-51.264-32.435.062-.771c-6.742 7.926-12.021 18.732-15.442 31.682l76.8 38.821c-3.136-13.503-6.681-26.128-10.156-37.297zM745.239 666.994a323.983 323.983 0 0 0-2.595-34.777l-88.869-40.816q.135 7.02.83 14.39a116.088 116.088 0 0 0 4.072 20.738l86.525 40.512z",
    fill: "#57b894"
  }), React.createElement("path", {
    d: "M672.822 460.961l-258.108-32.535c-11.698-97.31 5.976-192.311 36.15-286.786l258.108 32.535c-38.948 92.684-50.38 188.347-36.15 286.786z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M486.927 175.982l157.732 19.883-2.136 16.946L484.79 192.93z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M450.464 213.1l213.787 26.949-1.068 8.473-213.787-26.949zM447.014 240.475l213.787 26.949-1.068 8.473-213.787-26.949zM443.563 267.85L657.35 294.8l-1.068 8.473-213.787-26.949zM440.112 295.225L653.9 322.174l-1.068 8.473-213.787-26.949zM436.661 322.6l213.787 26.949-1.068 8.473-213.787-26.949zM433.211 349.975l213.787 26.949-1.068 8.473-213.787-26.949zM429.76 377.351L643.547 404.3l-1.069 8.473-213.786-26.949z"
  }), React.createElement("path", {
    d: "M550.594 365.093L309.12 268.306C322.424 171.202 363.562 83.766 416.66 0l241.476 96.787c-61.133 79.813-96.4 169.47-107.542 268.306z",
    fill: "#e6e6e6"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M442.86 42.35l147.568 59.147-6.355 15.855-147.569-59.148z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M398.191 69.034l200.01 80.167-3.177 7.927-200.01-80.167zM387.926 94.645l200.01 80.167-3.177 7.927-200.01-80.167zM377.66 120.256l200.01 80.167-3.177 7.927-200.01-80.167zM367.395 145.867l200.01 80.167-3.177 7.927-200.01-80.167zM357.13 171.478l200.01 80.167-3.177 7.927-200.01-80.167zM346.865 197.09l200.01 80.166-3.177 7.927-200.01-80.167zM336.6 222.7l200.01 80.167-3.178 7.927-200.01-80.167z"
  }), React.createElement("path", {
    d: "M490.877 388.403h-260.15c-23.777-95.083-18.123-191.548 0-289.055h260.15c-27.05 96.827-26.43 193.168 0 289.055z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M270.8 128.91h158.981v17.081H270.8z"
  }), React.createElement("path", {
    fill: primaryColor,
    opacity: 0.3,
    d: "M239.267 170.298h215.478v8.54H239.267zM239.267 197.889h215.478v8.54H239.267zM239.267 225.481h215.478v8.54H239.267zM239.267 253.073h215.478v8.54H239.267zM239.267 280.664h215.478v8.54H239.267zM239.267 308.256h215.478v8.54H239.267zM239.267 335.848h215.478v8.54H239.267z"
  }), React.createElement("path", {
    d: "M315.522 330.698l-89.625-69.677a10.23 10.23 0 0 0-8.87-5.131h-48.372a10.23 10.23 0 0 0-10.23 10.23v426.942a33.185 33.185 0 0 0 33.185 33.185h496.562a33.185 33.185 0 0 0 33.185-33.185V360.86a30.163 30.163 0 0 0-30.163-30.163z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M614.4 429.709h90.069v31.524H614.4z"
  }), React.createElement("path", {
    d: "M0 791.111s411.94-235.587 909.376 0",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M88.226 250.485s4.422 23.432 1.327 25.2a53.743 53.743 0 0 0-7.074 5.306l7.958 11.053 19.011 3.98 18.127-16.801v-16.8s-5.305-8.401-4.421-13.707-34.928 1.769-34.928 1.769z",
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M88.226 250.485s4.422 23.432 1.327 25.2a53.743 53.743 0 0 0-7.074 5.306l7.958 11.053 19.011 3.98 18.127-16.801v-16.8s-5.305-8.401-4.421-13.707-34.928 1.769-34.928 1.769z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M57.72 290.718l-2.652 1.326s-5.748 2.21-8.4 21.222-8.843 64.549-7.075 65.875.885 10.17.885 10.17l13.263-69.413zM89.159 182.816c-.404.844-.546 1.83-.926 2.69-1.723 3.904-6.628 3.03-10.166 4.507-2.997 1.25-5.233 4.685-5.467 8.396-.1 1.576.131 3.165-.01 4.736-.262 2.902-1.759 5.458-2.291 8.309-1.294 6.926 1.725 17.864 5.134 14.126 1.075-1.179 2.42-1.96 3.581-3.021 3.016-2.756 4.551-7.137 7-10.576a3.697 3.697 0 0 1 1.244-1.232c1.79-.89 3.384 1.49 4.798 3.051a7.512 7.512 0 0 0 11.27-.215 6.614 6.614 0 0 1 1.588-1.622 3.386 3.386 0 0 1 2.207-.217 14.486 14.486 0 0 1 8.834 5.26c1.181 1.446 2.17 3.147 3.585 4.268s3.483 1.49 4.758.158c2.567 1.815 3.524 5.667 3.53 9.175s-.711 6.994-.536 10.496 1.55 7.281 4.341 8.566a12.475 12.475 0 0 1 4.62-8.081c1.9-1.415 4.21-2.116 5.818-3.962 3.218-3.697 2.198-9.846 2.322-15.12.153-6.505 2.407-12.723 2.805-19.214.2-3.243-.136-6.721-1.843-9.288a15.262 15.262 0 0 0-4.807-4.164l-15.175-9.736a6.476 6.476 0 0 0-2.25-1.067c-2.234-.4-4.165 1.694-6.283 2.617a12.722 12.722 0 0 1-5.514.67c-5.891-.16-7.55.984-11.51-2.854a2.791 2.791 0 0 0-2.391-.798c-2.368.375-6.97 1.438-8.266 4.142z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#fbbebe",
    d: "M97.511 716.92l9.284 20.337-18.127 6.19-9.284-4.863 2.211-21.664h15.916z"
  }), React.createElement("path", {
    d: "M89.11 734.162s-14.59-8.842-17.242-5.747-23.874 25.643-23.874 25.643-32.717 17.684-7.516 20.337 66.317-15.474 66.317-15.474 2.21-23.874.442-24.317-9.284 3.98-12.821 2.653a15.854 15.854 0 0 1-5.305-3.095z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#fbbebe",
    d: "M121.385 738.584v18.126l-23.874-5.305 5.305-18.569 18.569 5.748z"
  }), React.createElement("path", {
    d: "M97.069 744.773s24.316-3.979 26.527 7.958 7.958 29.622 2.21 34.043-35.369 10.17-35.811 2.653 3.095-22.106 3.095-22.106 2.21-11.495.884-14.59 3.095-7.958 3.095-7.958z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M48.5 446.23S28.54 572.79 44.9 634.686s27.853 98.592 27.853 98.592 28.296-7.958 28.296-13.263-11.053-84.003-13.706-91.519-7.074-10.169-3.095-16.358 10.611-45.98 10.611-45.98 14.59 65.875 15.474 67.643-9.284 103.014-9.284 103.014 29.184 21.18 30.948 5.306c.442-3.98 19.895-145.015 19.895-146.784s7.959-137.056-4.863-143.688-98.528-5.42-98.528-5.42z",
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 105.469,
    cy: 229.263,
    r: 30.064,
    fill: "#fbbebe"
  }), React.createElement("path", {
    d: "M98.837 288.95v-3.096l-8.842-14.59s-8.843.885-10.169 4.864-16.358 35.811-16.358 35.811L47.55 454.744s43.77 10.61 50.402 3.094 31.832-171.1 31.832-171.1l3.537-19.895s-6.073-8.842-7.457-7.516-24.375 26.97-24.375 26.97l-.442 3.979z",
    fill: primaryColor
  }), React.createElement("path", {
    d: "M89.774 268.39s-8.18-1.989-10.832 2.875-2.653 6.631-5.306 8.4-18.126 9.726-19.01 12.821S34.73 393.29 34.73 393.29s-9.284 29.18-4.863 49.075 1.326 23.875 10.61 25.643 10.611 1.769 10.611-.884 11.938-92.403 20.338-98.592 6.19-73.834 6.19-73.834 11.937-14.59 11.937-16.8 1.99-9.672.22-9.506zM114.753 284.528c1.234.206 18.127-21.664 19.454-20.78s7.958 12.38 8.842 12.38 38.464 9.284 41.56 26.527-21.665 72.065-21.665 72.065-10.61 31.39-8.4 45.096a92.332 92.332 0 0 1-.884 31.39c-.884 3.538-3.98 7.517-3.095 9.285s-19.453-2.21-27.853 2.653-45.98 8.4-43.77 3.095 3.537-26.085 9.726-48.191 22.106-74.276 19.454-77.813 3.979-56.149 6.631-55.707z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M179.303 297.35l5.747 5.305s6.632 11.495 5.748 16.8 18.569 85.33 10.61 87.982-26.969 15.916-29.18 19.453-7.515 9.727-11.052 11.495-7.074 4.864-9.285 3.095-7.073-38.022-3.537-39.348 7.074-5.306 10.611-5.306 5.748-3.537 5.748-6.632-2.653-21.663-2.653-21.663l-5.747-43.77zM94.463 187.215c-.358.638-.483 1.383-.818 2.033-1.524 2.952-5.861 2.291-8.99 3.408a7.488 7.488 0 0 0-4.834 6.347c-.088 1.191.116 2.392-.009 3.58-.231 2.194-1.554 4.126-2.025 6.281-1.144 5.236 1.525 13.505 4.54 10.68.95-.892 2.14-1.483 3.166-2.285 2.666-2.083 4.024-5.395 6.19-7.994a3.085 3.085 0 0 1 1.1-.932c1.582-.673 2.99 1.127 4.242 2.307a7.414 7.414 0 0 0 9.965-.163 5.482 5.482 0 0 1 1.404-1.226 3.462 3.462 0 0 1 1.95-.164 13.367 13.367 0 0 1 7.812 3.976 21.363 21.363 0 0 0 3.17 3.227c1.252.847 3.08 1.126 4.207.12 2.27 1.371 3.116 4.283 3.122 6.935s-.63 5.287-.474 7.934 1.37 5.505 3.838 6.476a9.24 9.24 0 0 1 4.084-6.11c1.681-1.069 3.724-1.599 5.145-2.994 2.846-2.795 1.944-7.443 2.053-11.43.135-4.917 2.128-9.618 2.48-14.525.176-2.452-.12-5.08-1.63-7.021a13.124 13.124 0 0 0-4.25-3.148l-13.418-7.36a6.198 6.198 0 0 0-1.99-.807c-1.974-.303-3.682 1.281-5.554 1.979a13.038 13.038 0 0 1-4.876.506c-5.209-.121-6.675.744-10.176-2.158a2.738 2.738 0 0 0-2.115-.603c-2.094.284-6.163 1.087-7.309 3.131z",
    fill: "#2f2e41"
  }));
};

UndrawFolder.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFolder;