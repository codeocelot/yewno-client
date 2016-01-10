import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import Logs from './components/logs';
// import AllLogs from './components/allLogs'
// import SingleLog from './components/singleLog'
import Log from './components/log';

import {Route, Router, Link, browserHistory,IndexRoute } from 'react-router'

ReactDOM.render(
  <App>
    <Log base="server/v1" path="/hello-world"/>
  </App>,

  document.getElementById('react-app')
)
