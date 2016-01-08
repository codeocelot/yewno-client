import React from 'react'
import Log from './logs'
import LogTable from './logTable'
import request from 'superagent'
import config from '../config/config'

export default class SingleLog extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {logs:[]}
  }
  getLogs = () => {
    request
      .get(`${config.API_URL}/logs`)
      .end((err,res)=>{
        this.setState({logs:res.body.logs})
      })
  };
  componentDidMount(){
    request
      .get(`${config.API_URL}${this.props.page}/logs`)
      .end((err,resp)=>this.setState({logs:resp.body.logs}))
  }
  render(){

    return(
      <div>
        <LogTable endpoint="hello-world" logs={this.state.logs}/>
      </div>
    )
  }
}
