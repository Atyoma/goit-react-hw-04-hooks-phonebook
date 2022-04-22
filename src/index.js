import React from 'react';
import { App } from './components/App';
import ReactDom from 'react-dom';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
