import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import Logs from './components/logs';
import AllLogs from './components/allLogs'
import SingleLog from './components/singleLog'
import Log from './components/log'

import {Route, Router, Link, browserHistory,IndexRoute } from 'react-router'

ReactDOM.render(
  <App>
    <Log base="localhost:3000/v1" path=""/>
  </App>,

  document.getElementById('react-app')
)
