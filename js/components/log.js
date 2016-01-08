import React from 'react'
import Logs from './logs'
import config from '../config/config'
import request from 'superagent'
import LogTable from './logTable'

export default class Log extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {logset:[]}
  }
  getLogs = () => {
    debugger;
    request
      .get(`//${this.props.base}${this.props.path}/logs`)
      .end((err,res)=>{
        this.setState({logset:res.body.logset, logs:res.body.logs});
      });
  };
  componentDidMount = () => {
    this.getLogs();
  };
  render(){
    let singleEndpoint = this.state.logs ?
      <LogTable endpoint={this.props.endpoint-name || window.location.pathname } logs={this.state.logs}/>
      :
      '';
    let multiEndpoint = this.state.logset ?
      this.state.logset.map(l=><LogTable key={l.endpoint} {...l}/>)
      :
      '';

    return(
      <div>
        {/*{fmtEndPoints}*/}
        {singleEndpoint}
        {multiEndpoint}
      </div>
    )
  }
}
//
// Log.prototype.PropTypes = {
//   base:React.PropType.string,
//   path:React.PropType.string
// }
