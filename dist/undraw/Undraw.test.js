import React from 'react';
import ReactDOM from 'react-dom';
import Undraw from './Undraw';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(Undraw, null), div);
  ReactDOM.unmountComponentAtNode(div);
});