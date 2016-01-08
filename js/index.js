import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import Logs from './components/logs';
import Log from './components/log'
import AllLogs from './components/allLogs'
import SingleLog from './components/singleLog'

import {Route, Router, Link, browserHistory,IndexRoute } from 'react-router'

(function(){
  debugger;
  let app;
  debugger;
  switch(window.location.pathname){
    case '/':
      app = <Log base="http://localhost:3000" path="/"/>
      break;
    default :
      app = <Log base="http://localhost:3000" path={window.location.pathname}/>
      break;
  }
  ReactDOM.render(
    <App>{app}</App>,
    document.getElementById('react-app')
  )
})()
// ReactDOM.render(
//   <App><AllLogs/></App>,
//   document.getElementById('react-app')
// )
