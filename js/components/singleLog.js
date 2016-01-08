import React from 'react'
import Log from './logs'
import request from 'superagent'
import config from '../config/config'

export default class SingleLog extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {logs:[]}
  }
  componentDidMount(){
    request
      .get(`${config.API_URL}${this.props.params.page}/logs`)
      .end((err,logs)=>this.setState({logs}))
  }
  render(){
    return(<div>Single</div>)
  }
}
