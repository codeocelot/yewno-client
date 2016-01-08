import React from 'react'
import Logs from './logs'
import config from '../config/config'
import request from 'superagent'
import LogTable from './logTable'

export default class AllLogs extends React.Component{
  constructor(props){
    super(props);
    this.state = {logset:[]}
  }
  getLogs = (cb) => {
    request
      .get(`${config.API_URL}/logs`)
      .end((err,res)=>{
        // console.log(res);cb(null,res)
        this.setState({logset:res.body.logset})
      });
  };
  componentDidMount = () => {
    this.getLogs();
  };
  render(){
    let fmtEndPoints = this.state.logset.map(ep=>{
      return(<LogTable key={ep.endpoint} {...ep}/>)
    })
    return(
      <div>All logs
        {fmtEndPoints}
      </div>
    )
  }
}
