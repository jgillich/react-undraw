function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawOpenSource = function UndrawOpenSource(_props) {
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
    viewBox: "0 0 1028 598.997",
    style: style
  }, props), React.createElement("circle", {
    cx: 332.005,
    cy: 292.004,
    r: 292.004,
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M1028 517.997a13.69 13.69 0 0 1-.17 2.12c-7.14 43.76-234.46 78.88-513.83 78.88S7.31 563.877.17 520.117a13.675 13.675 0 0 1-.17-2.12c0-.2 0-.41.02-.61 0-.11.01-.21.01-.32a.49.49 0 0 0 .01-.12c.04-.45.1-.88.18-1.32 3.26-17.89 43.35-34.33 108.74-47.5 53.48-10.77 123.89-19.36 204.93-24.76 61.5-4.1 129.12-6.37 200.11-6.37 57.12 0 112.06 1.47 163.38 4.17h.02q16.11.855 31.74 1.87c71.33 4.62 134.63 11.69 185.63 20.54 31.37 5.45 58.1 11.58 79.19 18.22h.01c32.46 10.23 51.6 21.7 53.81 33.83.08.44.14.87.18 1.32a.487.487 0 0 0 .01.12c0 .11.01.21.01.32.02.2.02.41.02.61z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 501,
    cy: 571.997,
    rx: 165,
    ry: 24,
    opacity: 0.1
  }), React.createElement("path", {
    d: "M973.96 481.797c-5.77 1.65-12.27 3.18-19.4 4.58-29.36 5.78-69.42 9.33-113.53 9.33-49.28 0-93.45-4.43-123.38-11.44-24.84-5.82-39.88-13.39-39.88-21.7 0-7.3 11.64-14.06 31.37-19.53 71.33 4.62 134.63 11.69 185.63 20.54 31.37 5.45 58.1 11.58 79.19 18.22zM532 470.747c0 15.13-94.92 27.4-212 27.4s-212-12.27-212-27.4a4.372 4.372 0 0 1 .96-2.62c53.48-10.77 123.89-19.36 204.93-24.76q3.045-.015 6.11-.01c117.08 0 212 12.26 212 27.39z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M416.472 334.975h41.685v134.584h-41.685zM279.506 271.851h41.685v197.708h-41.685zM143.73 271.851h41.685v197.708H143.73zM211.618 271.851h41.685v134.584h-41.685zM347.393 271.851h41.685v39.303h-41.685z"
  }), React.createElement("path", {
    fill: "#8a8b8c",
    d: "M347.393 334.975h41.685v134.584h-41.685z"
  }), React.createElement("path", {
    fill: primaryColor,
    d: "M416.472 271.851h109.573v39.303H416.472zM815.062 260.029q42.748 0 72.774 29.84a97.983 97.983 0 0 1 21.832 32.838 107.346 107.346 0 0 1 .095 78.409 93.533 93.533 0 0 1-21.74 32.294 104.704 104.704 0 0 1-33.84 22.56 101.425 101.425 0 0 1-39.115 7.824 99.015 99.015 0 0 1-38.661-7.734 104.845 104.845 0 0 1-55.4-55.396 101.764 101.764 0 0 1 .09-77.594 102.307 102.307 0 0 1 22.468-33.386q29.109-29.649 71.497-29.655zm.37 18.377q-34.93 0-58.769 24.38a87.595 87.595 0 0 0-18.466 27.38 80.789 80.789 0 0 0 0 63.312 86.249 86.249 0 0 0 45.577 45.31 82.687 82.687 0 0 0 63.41-.09 87.995 87.995 0 0 0 27.741-18.374q23.831-23.287 23.828-58.405a83.659 83.659 0 0 0-6.186-32.02 81.465 81.465 0 0 0-18.002-26.93q-24.576-24.561-59.134-24.563zm-1.277 66.59l-13.65 7.098a14.006 14.006 0 0 0-5.364-6.368 12.087 12.087 0 0 0-5.916-1.818q-13.64 0-13.646 18.011 0 8.186 3.454 13.095 3.458 4.915 10.192 4.916 8.916 0 12.557-8.733l12.55 6.368a29.99 29.99 0 0 1-26.744 16.011q-13.644 0-22.016-8.37-8.367-8.367-8.367-23.284 0-14.556 8.46-23.105 8.457-8.549 21.379-8.552 18.926-.01 27.11 14.732zm58.764 0l-13.464 7.098a13.992 13.992 0 0 0-5.368-6.368 12.373 12.373 0 0 0-6.094-1.818q-13.645 0-13.65 18.011 0 8.186 3.458 13.095 3.453 4.915 10.192 4.916 8.907 0 12.547-8.733l12.736 6.368a31.277 31.277 0 0 1-11.274 11.736 29.398 29.398 0 0 1-15.464 4.275q-13.831 0-22.1-8.37-8.29-8.367-8.284-23.284 0-14.556 8.463-23.105 8.453-8.549 21.373-8.552 18.922-.01 26.93 14.732z"
  }), React.createElement("path", {
    d: "M753.417 510.336c0 48.737-67.934 33.662-151.113 33.662S452.2 559.073 452.2 510.336s67.925-59.338 151.104-59.338 150.113 10.6 150.113 59.338z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M753.417 498.336c0 48.737-67.934 33.662-151.113 33.662S452.2 547.073 452.2 498.336s67.925-59.338 151.104-59.338 150.113 10.6 150.113 59.338z",
    fill: "#3f3d56"
  }), React.createElement("path", {
    d: "M739.542 410.842l3.433 14.164a.885.885 0 0 1-.017.478l-15.576 48.673a.885.885 0 0 1-1.721-.17l-2.155-18.961a.885.885 0 0 1 .038-.374l14.297-43.876a.885.885 0 0 1 1.7.066z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    fill: "#f2f2f2",
    d: "M738.278 412.038l3.171 12.152-13.738 44.382-3.17-13.737 13.737-42.797z"
  }), React.createElement("path", {
    d: "M669.064 478.083c.528 1.585 54.949-.529 55.477-1.057a11.469 11.469 0 0 0 1.163-2.114c.496-1.056.95-2.113.95-2.113l-2.113-17.108-53.892-1.913s-1.347 14.498-1.622 21.134a15.853 15.853 0 0 0 .037 3.17z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M717.673 458.005l1.056 14.794h-23.776v-14.794h22.72zM687.028 462.76l.142-.028-.67 6.368h-13.209v-6.34h13.737zM669.064 478.083c.528 1.585 54.949-.529 55.477-1.057a11.469 11.469 0 0 0 1.163-2.114h-56.677a15.853 15.853 0 0 0 .037 3.17z"
  }), React.createElement("path", {
    d: "M585.055 422.605h14.794l36.457-14.265s25.89-10.568 23.776 9.51-5.812 47.024-5.812 47.024-11.624-5.284-17.964-3.699-2.114-32.23-2.114-32.23-51.778 24.833-56.534 21.663-5.811-25.361-5.811-25.361z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M585.055 422.605h14.794l36.457-14.265s25.89-10.568 23.776 9.51-5.812 47.024-5.812 47.024-11.624-5.284-17.964-3.699-2.114-32.23-2.114-32.23-51.778 24.833-56.534 21.663-5.811-25.361-5.811-25.361z",
    opacity: 0.1
  }), React.createElement("path", {
    d: "M608.363 376.276l17.904 25.723 41.74 34.872s38.57 8.982 33.287 15.322-37.514-6.34-37.514-6.34-48.08-34.872-49.665-37.513-19.02-27.475-19.02-27.475z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M608.363 376.276l17.904 25.723 41.74 34.872s38.57 8.982 33.287 15.322-37.514-6.34-37.514-6.34-48.08-34.872-49.665-37.513-19.02-27.475-19.02-27.475z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 605.661,
    cy: 324.331,
    r: 23.776,
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M604.076 345.465s-7.925 13.738-9.51 21.135-23.776-14.794-23.776-14.794l-2.906-7.662s20.87-9.774 19.285-17.7 16.907 19.021 16.907 19.021z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M597.736 355.504l11.624 22.72s-2.642 11.095-6.869 12.152-22.19-13.738-22.19-13.738z",
    fill: "#d0cde1"
  }), React.createElement("path", {
    d: "M608.303 386.677l21.663 28.531 51.778 38.57s37.514 7.925 29.06 13.737-32.758-5.283-32.758-5.283-52.307-28.003-63.403-39.627-31.701-31.173-31.701-31.173z",
    fill: "#a0616a"
  }), React.createElement("path", {
    d: "M579.244 431.059l6.34 10.039 37.84-11.905a29.751 29.751 0 0 1 24.77 2.989c6.604 4.16 10.831 10.765 1.32 20.54-19.02 19.549-31.7 8.981-31.7 8.981s-63.932 30.117-74.499 15.323-11.095-22.191-11.095-22.191 40.683-25.361 47.024-23.776z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M658.497 465.93s16.907 11.096-3.17 16.38-34.872-2.114-34.872-2.114-17.436 0-17.436-8.982 5.812-10.039 5.812-10.039l17.964 2.642s21.663-5.812 31.702 2.113z",
    fill: "#d0cde1"
  }), React.createElement("path", {
    d: "M625.166 318.35a17.728 17.728 0 0 0 4.982 1.785 4.548 4.548 0 0 0 4.596-1.97 6.18 6.18 0 0 0 .522-2.794c.063-2.902-.147-6.038-1.985-8.283-1.17-1.43-2.878-2.33-4.09-3.724a17.598 17.598 0 0 1-2.067-3.378c-2.355-4.424-5.843-8.676-10.69-9.951a23.183 23.183 0 0 0-6.24-.477l-12.206.172a21.25 21.25 0 0 0-5.872.632c-3.93 1.188-6.79 4.492-9.41 7.651a47.851 47.851 0 0 0-5.396 7.448 26.133 26.133 0 0 0-3.098 12.804 11.98 11.98 0 0 0 .44 3.388 18.801 18.801 0 0 0 1.33 2.925c2.29 4.496 3.649 10.112 1.071 14.45 4.478-1.83 8.909-4.228 11.863-8.059 1.322-1.714 2.358-3.72 4.12-4.977s4.63-1.367 5.76.479a5.163 5.163 0 0 1 .582 2.418 11.084 11.084 0 0 0 .668 4.081 3.058 3.058 0 0 0 3.322 1.896c2.3-.648 2.08-4.179 3.852-5.782 1.346-1.218 3.422-.986 5.15-1.538a7.643 7.643 0 0 0 4.387-4.321c.655-1.468.645-5.31 1.884-6.105 1.553-.997 5.085.588 6.525 1.23z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M565.996 341.638a6.27 6.27 0 0 1 3.264.008c3.392.911 10.995 3.321 12.625 6.99 2.114 4.755 9.51 12.152 9.51 12.152s10.04 10.038 7.926 16.907-10.039 14.794-10.039 14.794 2.114 32.758-8.453 41.212-14.794 2.642-14.794 10.567-32.758 32.758-39.099 17.436c0 0 3.17-28.532 2.114-38.57-1.042-9.894.483-71.624 36.946-81.496z",
    fill: "#d0cde1"
  }), React.createElement("path", {
    d: "M582.942 354.976s32.23 23.776 26.418 33.814c0 0-19.55 9.51-23.776 8.982s-20.606-19.02-24.833-20.605-6.34-30.117 22.191-22.191z",
    fill: "#d0cde1"
  }), React.createElement("path", {
    d: "M493.81 376.281c-5.012 1.693-9.553 5.653-10.58 10.843-.476 2.406-.184 4.907-.584 7.327-.929 5.611-5.334 9.897-9.397 13.878s-8.258 8.606-8.555 14.286c-.324 6.22 4.187 12.047 3.406 18.226-.907 7.18-8.49 11.831-10.364 18.82-1.251 4.667.282 9.695 2.806 13.815 4.808 7.853 13.028 13.184 21.78 16.041s18.076 3.46 27.283 3.556c11.21.117 23.383-.845 31.806-8.244a25.48 25.48 0 0 0 8.459-16.588c.8-8.571-2.777-17.427-.31-25.674 1.553-5.19 5.447-9.93 4.866-15.316-.568-5.266-5.168-8.999-8.323-13.253-2.946-3.972-4.734-8.663-6.486-13.288l-5.995-15.824c-1.178-3.11-2.472-6.382-5.098-8.424-4.917-3.822-12.823-3.07-18.572-2.283-5.333.732-11.012.37-16.141 2.102z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M495.688 422.376s2.658 8.637-17.274 18.603 1.994 20.595 1.994 20.595l23.252 5.315s23.918-3.322 26.575-7.308 7.308-17.274 5.98-19.267a31.061 31.061 0 0 0-3.322-3.986s-15.945-2.658-15.28-9.966-21.925-3.986-21.925-3.986z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M495.688 422.376s2.658 8.637-17.274 18.603 1.994 20.595 1.994 20.595l23.252 5.315s23.918-3.322 26.575-7.308 7.308-17.274 5.98-19.267a31.061 31.061 0 0 0-3.322-3.986s-15.945-2.658-15.28-9.966-21.925-3.986-21.925-3.986z",
    opacity: 0.1
  }), React.createElement("circle", {
    cx: 508.643,
    cy: 414.736,
    r: 21.26,
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M506.318 459.58s-25.604-1.872-26.09-19.538c0 0-9.122-1.057-11.78 1.6s-11.293 4.651-11.293 11.295 14.616 26.575 14.616 26.575 7.972 26.575 4.65 31.225-3.986 16.61-3.986 16.61 33.219-2.658 38.534 0 26.574 2.657 27.903 0-1.329-35.876-1.329-35.876 5.98-7.973 4.651-17.274l15.945-18.602s-5.98-17.938-15.28-17.938c0 0-12.624-3.322-12.956-1.661s6.312 20.263-23.585 23.585z",
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M446.525 518.045s5.979 9.302 21.26 11.295 17.938-3.322 16.609-4.65-17.274-7.309-17.274-7.309l-9.301-7.308zM555.481 510.073l-17.273 9.966s-22.589-1.33-13.952 5.315 24.582 3.986 24.582 3.986l15.28-7.308z",
    fill: "#ffb9b9"
  }), React.createElement("path", {
    d: "M469.113 527.347s-15.945 39.197 3.322 45.177 72.416 4.65 84.375-3.322 15.28-18.602 13.288-21.924-15.281-12.623-24.582-13.288-76.403-6.643-76.403-6.643z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M469.113 527.347s-15.945 39.197 3.322 45.177 72.416 4.65 84.375-3.322 15.28-18.602 13.288-21.924-15.281-12.623-24.582-13.288-76.403-6.643-76.403-6.643z",
    opacity: 0.05
  }), React.createElement("path", {
    d: "M544.378 529.782s56.28-20.373 55.616 4.208-35.876 31.226-35.876 31.226l-10.63 1.328-58.464 1.994s1.993-10.63-2.658-11.96c0 0 15.28-3.985 15.945-4.65s38.534-13.951 41.191-14.616 10.63-5.98 16.61-5.315c0 0 6.643-5.315 13.951-3.986l-20.595 1.329z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M544.378 529.782s56.28-20.373 55.616 4.208-35.876 31.226-35.876 31.226l-10.63 1.328-58.464 1.994s1.993-10.63-2.658-11.96c0 0 15.28-3.985 15.945-4.65s38.534-13.951 41.191-14.616 10.63-5.98 16.61-5.315c0 0 6.643-5.315 13.951-3.986l-20.595 1.329z",
    opacity: 0.1
  }), React.createElement("path", {
    fill: "#2f2e41",
    d: "M534.434 533.081l7.096 16.19 43.184-15.281 3.322-8.636-11.295-1.994-22.706 3.987-9.848 2.657-9.753 3.077z"
  }), React.createElement("path", {
    opacity: 0.1,
    d: "M534.434 533.081l7.096 16.19 43.184-15.281 3.322-8.636-11.295-1.994-22.706 3.987-9.848 2.657-9.753 3.077z"
  }), React.createElement("path", {
    d: "M442.538 552.593s12.623 15.945 27.24 19.93 22.588-1.328 22.588-1.328l-4.65-18.602-1.993-11.959-8.637-5.98-17.274-7.972-20.595-6.643s-8.637-1.33-8.637 0 7.972 21.26 7.972 21.26z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M457.819 561.23s2.657 19.266 5.98 20.595 13.287-1.329 15.944-2.657 11.69-7.46 11.69-7.46-31.62-11.807-33.614-10.478z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    fill: "#ffb9b9",
    d: "M518.277 563.223l12.623 1.993-1.329 15.28-17.607-4.276 6.313-12.997z"
  }), React.createElement("path", {
    d: "M526.186 567.475s-5.916 7.042.063 11.028l3.986 3.322s13.288 2.657 14.616 3.986 6.644-1.993 6.644-1.993.665-19.931 0-21.26-8.637-2.657-9.301-1.328-8.637 3.321-13.287 1.993z",
    fill: "#f2f2f2"
  }), React.createElement("path", {
    d: "M473.1 531.997s-46.506-27.239-53.815-17.273-15.28 23.917 5.98 34.547 87.697 32.554 87.697 32.554 9.965-15.28 9.965-19.267c0 0-35.211-15.945-41.19-17.273s-29.897-16.61-33.22-17.938-7.972-5.315-7.972-5.315z",
    fill: "#2f2e41"
  }), React.createElement("path", {
    d: "M459.812 449.615l-2.657 1.993s-5.98 15.281-6.644 23.918-8.637 35.211-7.973 38.533 1.33 5.98 5.315 9.301c0 0 5.315-11.958 14.617-9.965l11.294-41.191zM552.824 449.615l5.315 5.98s3.322 7.972 3.322 9.965 6.643 31.226 7.308 32.554 3.322 17.938 0 21.925-9.301 6.643-9.301 6.643 3.986-13.952-8.637-14.616l1.329-5.315-11.96-39.862z",
    fill: "#ff6584"
  }), React.createElement("path", {
    d: "M461.14 495.356v34.995a8.413 8.413 0 0 0 8.29 8.413l73.185 1.084a8.413 8.413 0 0 0 8.532-8.09l1.346-34.998a8.413 8.413 0 0 0-8.286-8.736l-74.53-1.08a8.413 8.413 0 0 0-8.536 8.412z",
    fill: "#3f3d56"
  }), React.createElement("ellipse", {
    cx: 509.89,
    cy: 401.732,
    rx: 22.884,
    ry: 12.322,
    fill: "#2f2e41"
  }), React.createElement("circle", {
    cx: 505.986,
    cy: 513.727,
    r: 5.315,
    fill: "#f2f2f2"
  }));
};

UndrawOpenSource.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawOpenSource;