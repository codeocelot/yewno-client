import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Log from './components/log'
import Config from './config/config';

// import {Route, Router, Link, browserHistory,IndexRoute } from 'react-router'
debugger;
ReactDOM.render(
  <App>
    <Log base={Config.API_URL} path=""/>
  </App>,

  document.getElementById('react-app')
)
