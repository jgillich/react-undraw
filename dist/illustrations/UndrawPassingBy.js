function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

var UndrawPassingBy = function UndrawPassingBy(_props) {
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
    viewBox: "0 0 662.59 772.47",
    style: style
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "prefix__a",
    x1: 712.84,
    y1: 780.83,
    x2: 712.84,
    y2: 63.76,
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
    x1: 823.89,
    y1: 836.24,
    x2: 823.89,
    y2: 792.92,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__c",
    x1: 765.44,
    y1: 798.81,
    x2: 774.59,
    y2: 798.81,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__d",
    x1: 773.04,
    y1: 819.89,
    x2: 782.68,
    y2: 819.89,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__e",
    x1: 841.4,
    y1: 774.77,
    x2: 857.03,
    y2: 774.77,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__f",
    x1: 813.5,
    y1: 743.8,
    x2: 827.3,
    y2: 743.8,
    xlinkHref: "#prefix__a"
  }), React.createElement("linearGradient", {
    id: "prefix__g",
    x1: 547.19,
    y1: 827.61,
    x2: 547.19,
    y2: 401.38,
    xlinkHref: "#prefix__a"
  })), React.createElement("path", {
    d: "M889.68 368.95v-9.72c3.06 3.49 6.61 5.5 10.4 5.5 7.78 0 14.55-8.42 18.12-20.88a10.37 10.37 0 0 0 13.09-9.9v-30.79a10.41 10.41 0 0 0-16.42-8.34c-3.77-7.52-9-12.18-14.79-12.18-3.79 0-7.34 2-10.4 5.5v-20a36.92 36.92 0 0 0-22.14-33.6c7.56-8.91 11.74-18.66 11.74-28.87 0-38.14-58.13-69.79-134.42-75.88a30.27 30.27 0 0 0 .34-4.49V94.54c0-16.93-14-30.78-31.21-30.78s-31.21 13.85-31.21 30.78v30.78a30.22 30.22 0 0 0 .46 5.22c-72.32 7.59-126.45 38.35-126.45 75.15 0 9.23 3.41 18.09 9.66 26.29-17.28 3.2-30.46 18.24-30.46 36.18v20c-3.06-3.49-6.61-5.5-10.4-5.5-5.78 0-11 4.66-14.79 12.18a10.41 10.41 0 0 0-16.42 8.34v30.78a10.37 10.37 0 0 0 13.09 9.9c3.57 12.46 10.35 20.88 18.12 20.88 3.79 0 7.34-2 10.4-5.5v9.72a36.61 36.61 0 0 0 14 28.65 55.05 55.05 0 0 0-14 36.58v288.6a54.59 54.59 0 0 0 2.72 17H509.1a14.65 14.65 0 0 0-14.71 14.51v12a14.65 14.65 0 0 0 14.71 14.51h407.48a14.65 14.65 0 0 0 14.71-14.51v-12a14.65 14.65 0 0 0-14.71-14.51H887a54.59 54.59 0 0 0 2.72-17V434.17a55.05 55.05 0 0 0-14-36.58 36.61 36.61 0 0 0 13.96-28.64z",
    transform: "translate(-268.71 -63.76)",
    fill: "url(#prefix__a)"
  }), React.createElement("path", {
    d: "M617.29 305.82v-9.48c2.94 3.41 6.36 5.37 10 5.37 7.48 0 14-8.21 17.43-20.36a9.9 9.9 0 0 0 2.58.35 10 10 0 0 0 10-10v-30a10 10 0 0 0-10-10 9.93 9.93 0 0 0-5.79 1.87c-3.63-7.33-8.66-11.87-14.22-11.87-3.65 0-7.06 2-10 5.37v-19.53a36 36 0 0 0-21.3-32.77c7.3-8.69 11.3-18.19 11.3-28.15 0-37.19-55.92-68.06-129.28-74a29.92 29.92 0 0 0 .28-4.38v-30a30 30 0 0 0-60 0v30a29.86 29.86 0 0 0 .44 5.09c-69.56 7.4-121.62 37.4-121.62 73.28 0 9 3.28 17.64 9.29 25.64a36 36 0 0 0-29.3 35.28v19.49c-2.94-3.41-6.36-5.37-10-5.37-5.56 0-10.6 4.54-14.22 11.87a9.93 9.93 0 0 0-5.79-1.87 10 10 0 0 0-10 10v30a10 10 0 0 0 10 10 9.9 9.9 0 0 0 2.58-.35c3.43 12.15 10 20.36 17.43 20.36 3.65 0 7.06-2 10-5.37v9.48a35.88 35.88 0 0 0 13.43 27.94 54.11 54.11 0 0 0-13.44 35.73v281.44a53.91 53.91 0 0 0 2.61 16.59h-28.48a14.19 14.19 0 0 0-14.15 14.15v11.72a14.19 14.19 0 0 0 14.15 14.15h391.93a14.19 14.19 0 0 0 14.14-14.15v-11.72a14.19 14.19 0 0 0-14.15-14.15h-28.47a53.91 53.91 0 0 0 2.62-16.59V369.44a54.11 54.11 0 0 0-13.43-35.67 35.88 35.88 0 0 0 13.43-27.95z",
    fill: primaryColor
  }), React.createElement("g", {
    "data-name": "<Group>",
    opacity: 0.5,
    fill: "#2d5676"
  }, React.createElement("path", {
    d: "M239.29 537.4l5.23 2.94a.08.08 0 1 1-.08.14zM254.93 546.24l10.4 5.9a.34.34 0 0 1-.33.59l-10.28-6.11z"
  }), React.createElement("path", {
    d: "M265.29 552.12l10.4 5.9-.46.79-10.28-6.11a.34.34 0 0 1 .34-.59zM286.11 563.95l10.37 5.94a.623.623 0 0 1-.62 1.08l-10.3-6.07a.55.55 0 0 1 .55-.95z"
  }), React.createElement("path", {
    d: "M296.48 569.89l10.37 5.94a.692.692 0 1 1-.69 1.2l-10.3-6.07a.62.62 0 0 1 .62-1.07zM317.23 581.76l10.37 5.94a.84.84 0 1 1-.83 1.46l-10.3-6.07a.77.77 0 0 1 .77-1.32z"
  }), React.createElement("path", {
    d: "M327.61 587.7l10.35 6a.87.87 0 0 1-.87 1.5l-10.32-6a.84.84 0 0 1 .84-1.45zM348.29 599.66l10.35 6a.914.914 0 1 1-.92 1.58l-10.33-6a.89.89 0 0 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M358.66 605.65l10.35 6a.94.94 0 0 1-.94 1.63l-10.33-6a.914.914 0 0 1 .92-1.58zM379.36 617.61l10.35 6a1 1 0 1 1-1 1.71l-10.33-6a1 1 0 0 1 1-1.67z"
  }), React.createElement("path", {
    d: "M389.71 623.59l10.34 6a1 1 0 1 1-1 1.71l-10.34-6a1 1 0 0 1 1-1.71zM410.37 635.62l10.33 6a.94.94 0 0 1-.94 1.63l-10.35-6a1 1 0 0 1 1-1.67z"
  }), React.createElement("path", {
    d: "M420.7 641.64l10.33 6a.92.92 0 0 1-.92 1.58l-10.35-6a.94.94 0 0 1 .94-1.63zM441.35 653.69l10.33 6a.87.87 0 0 1-.87 1.5l-10.35-6a.89.89 0 0 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M451.67 659.71l10.33 6a.845.845 0 0 1-.85 1.46l-10.35-6a.87.87 0 1 1 .87-1.5zM472.29 671.8l10.3 6.07a.7.7 0 0 1-.7 1.2l-10.37-5.94a.77.77 0 0 1 .76-1.34z"
  }), React.createElement("path", {
    d: "M482.6 677.87l10.3 6.07a.625.625 0 0 1-.63 1.08l-10.37-5.94a.7.7 0 1 1 .69-1.21zM503.2 690l10.29 6.08a.461.461 0 0 1-.46.8l-10.38-5.93a.568.568 0 0 1 .54-1z"
  }), React.createElement("path", {
    d: "M513.5 696.08l10.28 6.11a.34.34 0 0 1-.34.59l-10.4-5.9a.46.46 0 0 1 .45-.8zM534.05 708.24l10.24 6.17a.08.08 0 0 1-.08.14l-10.41-5.88z"
  }), React.createElement("path", {
    d: "M544.29 714.41l5.15 3.08-5.23-2.94a.08.08 0 0 1 .08-.14z"
  })), React.createElement("g", {
    "data-name": "<Group>",
    opacity: 0.5,
    fill: "#2d5676"
  }, React.createElement("path", {
    d: "M241.52 555.18l5.23 2.94a.08.08 0 1 1-.08.14zM257.15 564.01l10.4 5.9a.34.34 0 0 1-.33.59l-10.28-6.11z"
  }), React.createElement("path", {
    d: "M267.55 569.91l10.4 5.9-.46.79-10.28-6.11a.34.34 0 0 1 .34-.59zM288.29 581.73l10.37 5.94a.623.623 0 1 1-.62 1.08l-10.3-6.07a.55.55 0 0 1 .55-.95z"
  }), React.createElement("path", {
    d: "M298.71 587.67l10.37 5.94a.692.692 0 1 1-.69 1.2l-10.3-6.07a.62.62 0 0 1 .62-1.07zM319.46 599.55l10.37 5.94a.84.84 0 1 1-.83 1.46l-10.3-6.07a.77.77 0 0 1 .77-1.32z"
  }), React.createElement("path", {
    d: "M329.83 605.49l10.35 6a.87.87 0 0 1-.87 1.5l-10.32-6a.84.84 0 0 1 .84-1.45zM350.53 617.45l10.35 6a.914.914 0 0 1-.92 1.58l-10.33-6a.89.89 0 0 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M360.88 623.43l10.35 6a.94.94 0 0 1-.94 1.63l-10.33-6a.914.914 0 0 1 .92-1.58zM381.58 635.4l10.35 6a1 1 0 0 1-1 1.71l-10.33-6a1 1 0 0 1 1-1.67z"
  }), React.createElement("path", {
    d: "M391.93 641.38l10.34 6a1 1 0 0 1-1 1.71l-10.34-6a1 1 0 0 1 1-1.71zM412.6 653.4l10.33 6a.94.94 0 0 1-.94 1.63l-10.35-6a1 1 0 0 1 1-1.67z"
  }), React.createElement("path", {
    d: "M422.92 659.43l10.33 6a.92.92 0 0 1-.92 1.58l-10.35-6a.94.94 0 0 1 .94-1.63zM443.57 671.47l10.33 6a.87.87 0 0 1-.87 1.5l-10.35-6a.89.89 0 1 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M453.9 677.5l10.33 6a.845.845 0 0 1-.85 1.46l-10.35-6a.87.87 0 0 1 .87-1.5zM474.52 689.59l10.3 6.07a.7.7 0 0 1-.7 1.2l-10.37-5.94a.77.77 0 1 1 .76-1.34z"
  }), React.createElement("path", {
    d: "M484.82 695.65l10.3 6.07a.625.625 0 0 1-.63 1.08l-10.37-5.94a.7.7 0 0 1 .69-1.21zM505.43 707.79l10.29 6.08a.461.461 0 0 1-.46.8l-10.38-5.93a.568.568 0 1 1 .54-1z"
  }), React.createElement("path", {
    d: "M515.72 713.86l10.28 6.11a.34.34 0 0 1-.34.59l-10.4-5.9a.46.46 0 0 1 .45-.8zM536.29 726.08l10.25 6.16a.08.08 0 0 1-.08.14l-10.41-5.88z"
  }), React.createElement("path", {
    d: "M546.54 732.24l5.15 3-5.23-2.94a.08.08 0 1 1 .08-.14z"
  })), React.createElement("g", {
    "data-name": "<Group>",
    opacity: 0.5,
    fill: "#2d5676"
  }, React.createElement("path", {
    d: "M269.29 534.06l5.23 2.94a.08.08 0 1 1-.08.14zM284.95 542.89l10.4 5.9a.34.34 0 0 1-.33.59l-10.29-6.14z"
  }), React.createElement("path", {
    d: "M295.35 548.79l10.4 5.9-.46.79-10.28-6.11a.34.34 0 0 1 .34-.59zM316.13 560.61l10.37 5.94a.623.623 0 0 1-.62 1.08l-10.3-6.07a.55.55 0 0 1 .55-.95z"
  }), React.createElement("path", {
    d: "M326.5 566.55l10.37 5.94a.692.692 0 0 1-.69 1.2l-10.3-6.07a.62.62 0 0 1 .62-1.07zM347.29 578.43l10.37 5.94a.84.84 0 0 1-.83 1.46l-10.3-6.07a.77.77 0 0 1 .77-1.32z"
  }), React.createElement("path", {
    d: "M357.62 584.37l10.35 6a.87.87 0 1 1-.87 1.5l-10.32-6a.84.84 0 0 1 .84-1.45zM378.29 596.33l10.35 6a.914.914 0 1 1-.92 1.58l-10.33-6a.89.89 0 0 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M388.67 602.31l10.35 6a.94.94 0 0 1-.94 1.63l-10.33-6a.914.914 0 0 1 .92-1.58zM409.37 614.24l10.35 6a1 1 0 0 1-1 1.71l-10.33-6a1 1 0 0 1 1-1.66z"
  }), React.createElement("path", {
    d: "M419.72 620.24l10.34 6a1 1 0 0 1-1 1.71l-10.34-6a1 1 0 0 1 1-1.71zM440.39 632.24l10.33 6a.94.94 0 0 1-.94 1.63l-10.35-6a1 1 0 1 1 1-1.67z"
  }), React.createElement("path", {
    d: "M450.71 638.3l10.33 6a.92.92 0 0 1-.92 1.58l-10.35-6a.94.94 0 1 1 .94-1.63zM471.36 650.35l10.33 6a.87.87 0 0 1-.87 1.5l-10.35-6a.89.89 0 0 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M481.69 656.37l10.33 6a.845.845 0 0 1-.85 1.46l-10.35-6a.87.87 0 0 1 .87-1.5zM502.29 668.46l10.3 6.07a.7.7 0 0 1-.7 1.2l-10.37-5.94a.77.77 0 0 1 .76-1.34z"
  }), React.createElement("path", {
    d: "M512.62 674.53l10.3 6.07a.625.625 0 0 1-.63 1.08l-10.37-5.94a.7.7 0 1 1 .69-1.21zM533.22 686.66l10.29 6.08a.461.461 0 0 1-.46.8l-10.38-5.93a.568.568 0 0 1 .54-1z"
  }), React.createElement("path", {
    d: "M543.51 692.74l10.28 6.11a.34.34 0 0 1-.34.59l-10.4-5.9a.46.46 0 0 1 .45-.8zM564.07 704.95l10.22 6.13a.08.08 0 0 1-.08.14l-10.41-5.88z"
  }), React.createElement("path", {
    d: "M574.29 711.08l5.15 3.08-5.15-2.92a.08.08 0 0 1 .08-.14z"
  })), React.createElement("g", {
    "data-name": "<Group>",
    opacity: 0.5,
    fill: "#2d5676"
  }, React.createElement("path", {
    d: "M244.85 569.64l5.23 2.94a.08.08 0 0 1-.08.14zM260.49 578.46l10.4 5.9a.34.34 0 1 1-.33.59l-10.27-6.11z"
  }), React.createElement("path", {
    d: "M270.89 584.36l10.4 5.88-.46.79-10.28-6.11a.34.34 0 0 1 .34-.59zM291.67 596.19l10.37 5.94a.623.623 0 1 1-.62 1.08l-10.3-6.07a.55.55 0 0 1 .55-.95z"
  }), React.createElement("path", {
    d: "M302.04 602.13l10.37 5.94a.692.692 0 0 1-.69 1.2l-10.3-6.03a.62.62 0 0 1 .62-1.07zM322.79 614l10.37 5.94a.84.84 0 1 1-.83 1.46l-10.3-6.07a.77.77 0 0 1 .77-1.32z"
  }), React.createElement("path", {
    d: "M333.17 619.94l10.35 6a.87.87 0 0 1-.87 1.5l-10.32-6a.84.84 0 0 1 .84-1.45zM353.87 631.9l10.35 6a.914.914 0 0 1-.92 1.58l-10.33-6a.89.89 0 0 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M364.22 637.89l10.35 6a.94.94 0 1 1-.94 1.63l-10.33-6a.914.914 0 0 1 .92-1.58zM384.92 649.85l10.35 6a1 1 0 1 1-1 1.71l-10.33-6a1 1 0 0 1 1-1.67z"
  }), React.createElement("path", {
    d: "M395.29 655.83l10.34 6a1 1 0 1 1-1 1.71l-10.34-6a1 1 0 0 1 1-1.71zM415.93 667.86l10.33 6a.94.94 0 0 1-.94 1.63l-10.35-6a1 1 0 1 1 1-1.67z"
  }), React.createElement("path", {
    d: "M426.29 673.88l10.33 6a.92.92 0 0 1-.92 1.58l-10.35-6a.94.94 0 0 1 .94-1.63zM446.91 685.93l10.33 6a.87.87 0 0 1-.87 1.5l-10.35-6a.89.89 0 0 1 .89-1.54z"
  }), React.createElement("path", {
    d: "M457.23 691.95l10.33 6a.845.845 0 0 1-.85 1.46l-10.35-6a.87.87 0 1 1 .87-1.5zM477.86 704.04l10.3 6.07a.7.7 0 0 1-.7 1.2l-10.37-5.94a.77.77 0 0 1 .76-1.34z"
  }), React.createElement("path", {
    d: "M488.16 710.11l10.3 6.07a.625.625 0 0 1-.63 1.08l-10.37-5.94a.7.7 0 1 1 .69-1.21zM508.76 722.24l10.29 6.08a.461.461 0 0 1-.46.8l-10.38-5.93a.568.568 0 0 1 .54-1z"
  }), React.createElement("path", {
    d: "M519.05 728.32l10.24 6.1a.34.34 0 0 1-.34.59l-10.4-5.9a.46.46 0 1 1 .45-.8zM539.61 740.53l10.27 6.12a.08.08 0 0 1-.08.14l-10.41-5.88z"
  }), React.createElement("path", {
    d: "M549.88 746.65l5.15 3.08-5.23-2.94a.08.08 0 0 1 .08-.14z"
  })), React.createElement("path", {
    d: "M846.07 793.16c-3.63.92-6.31 4.12-9.88 5.24-4.22 1.32-8.7-.48-13-1.34s-9.87-.12-11.57 4c2.82 1.53 2.35 6.19-.27 8s-6.24 1.45-9.2.23-5.59-3.16-8.57-4.33-6.65-1.43-9.16.56c3.18.38 4.11 4.75 3.06 7.77s-3.25 5.71-3.42 8.9c-.31 5.86 6 9.67 11.66 11.33a68.32 68.32 0 0 0 48.64-4c7.39-3.58 20.2-12.46 19.43-22.19-.61-7.08-10.55-15.99-17.72-14.17z",
    transform: "translate(-268.71 -63.76)",
    fill: "url(#prefix__b)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M574.83 731.37c-3.26.82-5.66 3.69-8.86 4.69-3.79 1.19-7.8-.43-11.69-1.2s-8.85-.11-10.38 3.55c2.53 1.37 2.11 5.55-.24 7.21s-5.6 1.3-8.25.2-5-2.84-7.69-3.88-6-1.28-8.21.5c2.85.34 3.69 4.26 2.75 7s-2.91 5.12-3.07 8c-.28 5.25 5.42 8.67 10.46 10.16a61.27 61.27 0 0 0 43.64-3.61c6.63-3.21 18.12-11.17 17.42-19.9-.53-6.36-9.42-14.35-15.88-12.72zM417.04 673.01c.84 1.22 2.09 2.1 2.95 3.3s1.25 3 .27 4.08a2.76 2.76 0 0 1-3.33.36 5.07 5.07 0 0 1-2.11-2.84c-1-2.79-.46-6.6 1.74-8.65a4.08 4.08 0 0 0 .48 3.75zM430.38 691.91c.84 1.22 2.09 2.1 2.95 3.3s1.25 3 .27 4.08a2.76 2.76 0 0 1-3.33.36 5.07 5.07 0 0 1-2.11-2.84c-1-2.79-.46-6.6 1.74-8.65a4.08 4.08 0 0 0 .48 3.75z",
    fill: "#2d5676",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M769.24 795.72c1.18 1.71 2.94 3 4.16 4.65s1.77 4.21.38 5.76a3.89 3.89 0 0 1-4.69.5 7.14 7.14 0 0 1-3-4c-1.36-3.93-.64-9.3 2.45-12.19a5.75 5.75 0 0 0 .7 5.28z",
    transform: "translate(-268.71 -63.76)",
    fill: "url(#prefix__c)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M500.42 733.05c.84 1.22 2.09 2.1 2.95 3.3s1.25 3 .27 4.08a2.76 2.76 0 0 1-3.33.36 5.07 5.07 0 0 1-2.11-2.84c-1-2.79-.46-6.6 1.74-8.65a4.08 4.08 0 0 0 .48 3.75z",
    fill: "#2d5676",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M777 816.64c1.25 1.8 3.09 3.12 4.38 4.89s1.86 4.43.4 6.06a4.09 4.09 0 0 1-4.94.53 7.52 7.52 0 0 1-3.14-4.21c-1.43-4.14-.68-9.79 2.58-12.83a6 6 0 0 0 .72 5.56z",
    transform: "translate(-268.71 -63.76)",
    fill: "url(#prefix__d)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M508.2 754.17c.84 1.22 2.09 2.1 2.95 3.3s1.25 3 .27 4.08a2.76 2.76 0 0 1-3.33.36 5.07 5.07 0 0 1-2.11-2.84c-1-2.79-.46-6.6 1.74-8.65a4.08 4.08 0 0 0 .48 3.75zM450.79 621.48c1-1.07 1.63-2.47 2.63-3.56s2.67-1.83 3.95-1.09a2.76 2.76 0 0 1 1 3.19 5.07 5.07 0 0 1-2.35 2.65c-2.53 1.51-6.37 1.79-8.82.06a4.08 4.08 0 0 0 3.59-1.25z",
    fill: "#2d5676",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M846.33 776.51c1.41-1.48 2.26-3.41 3.63-4.92s3.69-2.53 5.45-1.51a3.81 3.81 0 0 1 1.42 4.4 7 7 0 0 1-3.25 3.66c-3.5 2.08-8.8 2.47-12.19.08a5.63 5.63 0 0 0 4.94-1.71z",
    transform: "translate(-268.71 -63.76)",
    fill: "url(#prefix__e)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M578.64 712.64c1-1.07 1.63-2.47 2.63-3.56s2.67-1.83 3.95-1.09a2.76 2.76 0 0 1 1 3.19 5.07 5.07 0 0 1-2.35 2.65c-2.53 1.51-6.37 1.79-8.82.06a4.08 4.08 0 0 0 3.59-1.25zM456.35 632.6c1-1.07 1.63-2.47 2.63-3.56s2.67-1.83 3.95-1.09a2.76 2.76 0 0 1 1 3.19 5.07 5.07 0 0 1-2.35 2.65c-2.53 1.51-6.37 1.79-8.82.06a4.08 4.08 0 0 0 3.59-1.25z",
    fill: "#2d5676",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M817.86 745.33c1.24-1.3 2-3 3.21-4.34s3.26-2.24 4.81-1.33a3.36 3.36 0 0 1 1.25 3.89 6.18 6.18 0 0 1-2.87 3.23c-3.09 1.84-7.77 2.18-10.76.07a5 5 0 0 0 4.36-1.52z",
    transform: "translate(-268.71 -63.76)",
    fill: "url(#prefix__f)",
    "data-name": "<Group>"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M549.73 681.51c1-1.07 1.63-2.47 2.63-3.56s2.67-1.83 3.95-1.09a2.76 2.76 0 0 1 1 3.19 5.07 5.07 0 0 1-2.35 2.65c-2.53 1.51-6.37 1.79-8.82.06a4.08 4.08 0 0 0 3.59-1.25z",
    fill: "#2d5676",
    opacity: 0.5
  }), React.createElement("path", {
    d: "M825.68 490.08c0-7.74-3.07-14.48-7.61-18-2.55-6.41-7.47-10.76-13.13-10.76-.31 0-.6 0-.9.06a12.69 12.69 0 0 0-9.46-4.67 11.12 11.12 0 0 0-4 .76 11.94 11.94 0 0 0-4.11-.76 12.8 12.8 0 0 0-8.24 3.17 12 12 0 0 0-4.43-.87c-4.6 0-8.72 2.68-11.57 6.92-5.33 0-10 3.61-12.81 9.08-3.7 1.6-6.78 5-8.68 9.41-5.5.38-10.25 4.55-12.78 10.61a11.81 11.81 0 0 0-2.54-.3c-7.75 0-14.16 7.57-15.34 17.46a11.8 11.8 0 0 0-1.94-.18c-5.65 0-10.58 4-13.3 10l-.42-.11a20.4 20.4 0 0 0-3.64-13.05A20.68 20.68 0 0 0 672.94 483a20.7 20.7 0 0 0-34.2 1.92 20.53 20.53 0 0 0-19.44 16.19 20.63 20.63 0 0 0-22.5 3.69 20.69 20.69 0 0 0-28.29-5.64 20.7 20.7 0 0 0-30.24-12 20.61 20.61 0 0 0-10.37-2.8 20.93 20.93 0 0 0-2.24.13 20.68 20.68 0 0 0-8.32-27.4 20.73 20.73 0 0 0-22.67-23.31A20.69 20.69 0 0 0 472 422.52a20.67 20.67 0 0 0-20.74-8.06 20.69 20.69 0 0 0-13.75-8.23 20.67 20.67 0 0 0-23.67-2 20.67 20.67 0 0 0-27.9 6.9 20.69 20.69 0 0 0-32.18 6.54 21 21 0 0 0-2.13-.11 20.6 20.6 0 0 0-20.54 23.42 20.72 20.72 0 0 0-7 29.61 20.7 20.7 0 0 0-7.47 34.53 20.54 20.54 0 0 0-5.77 20 75.74 75.74 0 0 1-21.44 5.88 10.4 10.4 0 1 0-7.87 10.66c7.88 24.09 34 41.78 64.93 41.78a79.51 79.51 0 0 0 14-1.23c.53 0 1.05.08 1.59.08h.31a20.73 20.73 0 0 0 11.85 15.42 20.74 20.74 0 0 0 9 12.48 20.68 20.68 0 0 0 4.32 17.61 20.68 20.68 0 0 0-2 23.62 20.68 20.68 0 0 0-.26 20.3 20.66 20.66 0 0 0-3.95 29.23 22.29 22.29 0 0 0-6.45 24.59 20.72 20.72 0 0 0-5.44 3.29 20.71 20.71 0 0 0-17.72 18.9 20.71 20.71 0 0 0 4.82 30.54 20.58 20.58 0 0 0 18.84 24 20.7 20.7 0 0 0 28.1-1.73l.09.1c0 .57-.09 1.14-.09 1.71a20.71 20.71 0 0 0 33.41 16.39 20.66 20.66 0 0 0 27.77-2.21 20.62 20.62 0 0 0 26.18-22.62 20.69 20.69 0 0 0 3.8-33.34 20.59 20.59 0 0 0 1.89-18.69 20.34 20.34 0 0 0 .74-12.67 20.43 20.43 0 0 0-1.6-14.61c.11-.33.22-.65.31-1h.82a20.63 20.63 0 0 0 13.57-5.08 20.68 20.68 0 0 0 31.75 4 20.59 20.59 0 0 0 16.88-1.75 20.62 20.62 0 0 0 20.74 0 20.64 20.64 0 0 0 18.2 1.23 20.82 20.82 0 0 0 .7 14.22 20.76 20.76 0 0 0 1.89 19.62c0 .5.07 1 .13 1.5a20.8 20.8 0 0 0-8.71 9.53 20.72 20.72 0 0 0-12.21 18.89c0 .58 0 1.15.09 1.71A20.71 20.71 0 0 0 584.6 810a20.69 20.69 0 0 0 30.84 14.82 20.69 20.69 0 0 0 18.44 1.18 20.73 20.73 0 0 0 27-10.59 20.76 20.76 0 0 0 11.38-13.11 20.69 20.69 0 0 0 .69-31.7 20.65 20.65 0 0 0 4.26-25.92 20.65 20.65 0 0 0-4.21-25.83v-.67a20.61 20.61 0 0 0-2.8-10.37 20.63 20.63 0 0 0-.5-21.55 20.66 20.66 0 0 0 5.79-2.13 20.69 20.69 0 0 0 33.88-9.9 20.68 20.68 0 0 0 10.48-30.15 20.63 20.63 0 0 0-4-16.83A20.39 20.39 0 0 0 720 611h.31a20.74 20.74 0 0 0 19.14-12.76c5.05-.6 9.38-4.66 11.75-10.47a11 11 0 0 0 1.94.19c5.21 0 9.8-3.69 12.48-9.28 6.38-.53 11.68-6.68 13.38-14.91h.59c7.13 0 13.09-6.91 14.6-16.15h.38c5.89 0 11-4.72 13.42-11.57 7.92-.54 14.23-9.58 14.23-20.68a27.19 27.19 0 0 0-1.73-9.67 24.62 24.62 0 0 0 5.19-15.62z",
    transform: "translate(-268.71 -63.76)",
    fill: "url(#prefix__g)"
  }), React.createElement("g", {
    "data-name": "<Group>"
  }, React.createElement("g", {
    "data-name": "<Group>"
  }, React.createElement("circle", {
    "data-name": "<Path>",
    cx: 638.43,
    cy: 668.24,
    r: 20.01,
    transform: "rotate(-10.03 140.546 2167.201)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 653.1,
    cy: 617.1,
    r: 20.01,
    transform: "rotate(-10.03 155.248 2116.127)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 635,
    cy: 616.91,
    r: 20.01,
    transform: "rotate(-10.03 137.123 2115.914)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 631.51,
    cy: 597.21,
    r: 20.01,
    transform: "rotate(-10.03 133.685 2096.206)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 628.03,
    cy: 577.5,
    r: 20.01,
    transform: "rotate(-10.03 130.19 2076.492)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 634.01,
    cy: 553.86,
    r: 20.01,
    transform: "rotate(-10.03 136.164 2052.901)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 634.13,
    cy: 529,
    r: 20.01,
    transform: "rotate(-10.03 136.278 2028.05)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 636.32,
    cy: 509.43,
    r: 20.01,
    transform: "rotate(-10.03 138.459 2008.432)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 652.67,
    cy: 499.76,
    r: 20.01,
    transform: "rotate(-10.03 154.808 1998.785)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 666.45,
    cy: 507.48,
    r: 20.01,
    transform: "rotate(-10.03 168.597 2006.54)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 669.36,
    cy: 523.91,
    r: 20.01,
    transform: "rotate(-10.03 171.465 2022.926)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 673.81,
    cy: 549.08,
    r: 20.01,
    transform: "matrix(.98 -.17 .17 .98 -354.02 61.94)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 676.33,
    cy: 563.32,
    r: 20.01,
    transform: "rotate(-10.03 178.455 2062.354)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 678.07,
    cy: 573.17,
    r: 20.01,
    transform: "rotate(-10.03 180.174 2072.208)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 672.09,
    cy: 596.81,
    r: 20.01,
    transform: "rotate(-10.03 174.2 2095.8)",
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 646.01,
    cy: 621.74,
    r: 20.01,
    transform: "rotate(-10.03 148.127 2120.727)",
    fill: "#f59295"
  }), React.createElement("rect", {
    "data-name": "<Rectangle>",
    x: 638.93,
    y: 489.89,
    width: 40.02,
    height: 180.1,
    rx: 18,
    ry: 18,
    transform: "matrix(.98 -.17 .17 .98 -359.62 59.83)",
    fill: "#f59295"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 659.67,
    cy: 644.72,
    rx: 35.02,
    ry: 25.01,
    transform: "rotate(-10.03 161.782 2143.744)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 661.42,
    cy: 664.17,
    r: 20.01,
    transform: "rotate(-10.03 163.582 2163.137)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 684.48,
    cy: 666.87,
    r: 20.01,
    transform: "rotate(-10.03 186.599 2165.845)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 696.77,
    cy: 653.41,
    r: 20.01,
    transform: "rotate(-10.03 198.917 2152.4)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 694.26,
    cy: 639.17,
    r: 20.01,
    transform: "rotate(-10.03 196.377 2138.167)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 687.55,
    cy: 626.81,
    r: 20.01,
    transform: "rotate(-10.03 189.653 2125.806)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 677.12,
    cy: 625.27,
    r: 20.01,
    transform: "rotate(-10.03 179.224 2124.26)",
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 651.55,
    cy: 627.53,
    r: 20.01,
    transform: "rotate(-10.03 153.701 2126.556)",
    fill: "#fbd5cc"
  })), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 134.24,
    cy: 621.88,
    r: 20.01,
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 139.8,
    cy: 637.45,
    r: 20.01,
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 134.24,
    cy: 646.34,
    r: 20.01,
    fill: "#f59295"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 130.91,
    cy: 650.79,
    r: 20.01,
    fill: "#f59295"
  }), React.createElement("rect", {
    "data-name": "<Rectangle>",
    x: 139.8,
    y: 526.28,
    width: 40.02,
    height: 180.1,
    rx: 18,
    ry: 18,
    fill: "#f59295"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 144.8,
    cy: 691.37,
    rx: 35.02,
    ry: 25.01,
    fill: "#fcddd6"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M85.04 410.66a47.14 47.14 0 0 1 .28 5c0 30.39-29.12 55-65 55h-.28c3 28 30.83 50 64.76 50 35.92 0 65-24.64 65-55s-28.97-54.87-64.76-55z",
    fill: "#f8ab99"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 149.81,
    cy: 445.12,
    rx: 90.05,
    ry: 80.04,
    fill: "#f2777a"
  }), React.createElement("rect", {
    "data-name": "<Rectangle>",
    x: 346.58,
    y: 550.73,
    width: 40.02,
    height: 180.1,
    rx: 18,
    ry: 18,
    fill: "#f2777a"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 354.92,
    cy: 715.82,
    rx: 35.02,
    ry: 25.01,
    fill: "#fbd5cc"
  }), React.createElement("rect", {
    "data-name": "<Rectangle>",
    x: 169.82,
    y: 540.73,
    width: 40.02,
    height: 180.1,
    rx: 18,
    ry: 18,
    fill: "#f2777a"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 174.82,
    cy: 705.82,
    rx: 35.02,
    ry: 25.01,
    fill: "#fbd5cc"
  }), React.createElement("path", {
    "data-name": "<Path>",
    d: "M265.42 457.35c-69.82 0-129.19 25.15-151.08 60.21 16.1 14 25.45 30.78 25.45 48.74 0 10.46-3.18 20.5-9 29.84 28.5 24.86 78.15 41.31 134.63 41.31 88.41 0 160.09-40.32 160.09-90s-71.68-90.1-160.09-90.1z",
    fill: "#f2777a"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 169.82,
    cy: 455.68,
    rx: 40.02,
    ry: 55.03,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 19.73,
    cy: 470.69,
    r: 10.01,
    fill: "#2d5676"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 69.76,
    cy: 430.67,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 79.77,
    cy: 400.65,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 89.77,
    cy: 380.64,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 109.78,
    cy: 369.52,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 139.8,
    cy: 365.07,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 159.81,
    cy: 365.07,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 169.82,
    cy: 369.52,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 189.83,
    cy: 377.3,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 209.84,
    cy: 385.09,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 229.85,
    cy: 396.2,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 239.86,
    cy: 416.21,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 239.86,
    cy: 445.12,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 259.87,
    cy: 445.12,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 279.88,
    cy: 445.12,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 309.89,
    cy: 456.24,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 339.91,
    cy: 459.57,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 366.59,
    cy: 470.69,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 389.94,
    cy: 479.58,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 415.51,
    cy: 486.25,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 409.95,
    cy: 499.59,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 425.51,
    cy: 525.16,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 425.51,
    cy: 550.73,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 415.51,
    cy: 570.74,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 395.5,
    cy: 596.31,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 375.49,
    cy: 606.32,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 346.58,
    cy: 616.32,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 319.9,
    cy: 626.33,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 279.88,
    cy: 626.33,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 299.89,
    cy: 626.33,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 259.87,
    cy: 630.78,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 229.85,
    cy: 626.33,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 209.84,
    cy: 626.33,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 189.83,
    cy: 616.32,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 209.84,
    cy: 640.78,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 210.95,
    cy: 656.35,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 210.95,
    cy: 666.35,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 210.95,
    cy: 680.81,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 179.82,
    cy: 640.78,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 179.82,
    cy: 656.35,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 174.26,
    cy: 666.35,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 349.92,
    cy: 637.45,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 346.58,
    cy: 650.79,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 346.58,
    cy: 666.35,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 349.92,
    cy: 676.36,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 379.93,
    cy: 630.78,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 379.93,
    cy: 650.79,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 386.6,
    cy: 666.35,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 386.6,
    cy: 686.36,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 109.78,
    cy: 680.81,
    r: 20.01,
    fill: "#fcddd6"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 134.24,
    cy: 671.91,
    r: 20.01,
    fill: "#fcddd6"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 119.79,
    cy: 676.36,
    r: 20.01,
    fill: "#fcddd6"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 105.34,
    cy: 691.92,
    r: 20.01,
    fill: "#fcddd6"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 114.23,
    cy: 711.93,
    r: 20.01,
    fill: "#fcddd6"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 125.35,
    cy: 716.38,
    r: 20.01,
    fill: "#fcddd6"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 366.59,
    cy: 687.48,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 375.49,
    cy: 697.48,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 386.6,
    cy: 716.38,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 379.93,
    cy: 726.39,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 369.93,
    cy: 736.39,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 354.36,
    cy: 736.39,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 334.35,
    cy: 736.39,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 324.35,
    cy: 721.94,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 329.91,
    cy: 706.37,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 339.91,
    cy: 696.37,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 214.29,
    cy: 706.37,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 204.28,
    cy: 726.39,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 184.27,
    cy: 731.94,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 159.81,
    cy: 731.94,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 154.25,
    cy: 716.38,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 159.81,
    cy: 707.49,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 154.25,
    cy: 691.92,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 174.26,
    cy: 687.48,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 190.94,
    cy: 691.92,
    r: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 159.81,
    cy: 610.77,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 139.8,
    cy: 596.31,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 139.8,
    cy: 576.3,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 139.8,
    cy: 550.73,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 130.91,
    cy: 529.61,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 119.79,
    cy: 516.27,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 99.78,
    cy: 499.59,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 85.33,
    cy: 480.69,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 69.76,
    cy: 459.57,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 475.54,
    cy: 471.24,
    rx: 30.02,
    ry: 35.02,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 505.56,
    cy: 446.79,
    rx: 30.02,
    ry: 35.02,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 445.53,
    cy: 492.37,
    rx: 30.02,
    ry: 35.02,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 134.8,
    cy: 440.67,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 144.8,
    cy: 420.66,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 160.37,
    cy: 410.66,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 180.38,
    cy: 410.66,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 195.94,
    cy: 427.33,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 210.39,
    cy: 451.79,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 433.85,
    cy: 471.8,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 450.53,
    cy: 455.12,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 466.09,
    cy: 445.12,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 478.32,
    cy: 435.11,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 486.1,
    cy: 427.33,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 497.22,
    cy: 420.66,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 509.45,
    cy: 418.44,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 517.23,
    cy: 418.44,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 527.24,
    cy: 422.88,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 532.8,
    cy: 430.67,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 523.9,
    cy: 450.68,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 529.46,
    cy: 455.12,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 517.23,
    cy: 466.24,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 502.78,
    cy: 481.81,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 488.33,
    cy: 496.26,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 477.21,
    cy: 505.15,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 462.76,
    cy: 515.16,
    rx: 14.45,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 209.28,
    cy: 479.58,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 189.27,
    cy: 495.15,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 164.81,
    cy: 494.03,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 144.8,
    cy: 485.14,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("ellipse", {
    "data-name": "<Path>",
    cx: 134.8,
    cy: 466.24,
    rx: 15.01,
    ry: 20.01,
    fill: "#fbd5cc"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 415.51,
    cy: 480.69,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 425.51,
    cy: 505.15,
    r: 20.01,
    fill: "#f2777a"
  }), React.createElement("circle", {
    "data-name": "<Path>",
    cx: 445.53,
    cy: 527.39,
    r: 20.01,
    fill: "#f2777a"
  })));
};

UndrawPassingBy.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPassingBy;