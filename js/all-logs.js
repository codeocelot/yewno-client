import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import Logs from './components/logs';
import AllLogs from './components/allLogs'
import SingleLog from './components/singleLog'

import {Route, Router, Link, browserHistory,IndexRoute } from 'react-router'

ReactDOM.render(
  <App>
    <AllLogs/>
  </App>,

  document.getElementById('react-app')
)
