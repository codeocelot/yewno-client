import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Log from './components/log';
import Config from './config/config';

ReactDOM.render(
  <App>
    <Log base={Config.API_URL} path="/hello-world"/>
  </App>,
  document.getElementById('react-app')
)
