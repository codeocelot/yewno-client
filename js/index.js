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
	let base = 'server';
  switch(window.location.pathname){
    case '/':
      app = <Log base={base} path="/"/>
      break;
    default :
      app = <Log base={base} path={window.location.pathname}/>
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
