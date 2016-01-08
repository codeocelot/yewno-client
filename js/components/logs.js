import React from 'react'
import request from 'superagent'

export default class Logs extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {logs:[]}
  }
  componentDidMount(){
    this.getLogs((err,resp)=>{
      debugger;
      this.setState({logs:resp.body.logs,err})
    });
  }
  render(){
    return(<div>Empty</div>);
  }
  getLogs(cb){
    request
      .get(this.props.url)
      .end((err,res)=>{console.log(res);cb(null,res)});
  }
  // render(){
  //   let logs;
  //   debugger;
  //   if(this.state.logs.logset){
  //     logs = this.state.logs.logset.map(
  //       endpoint=>{return (<table><tr><th>endpoint.endpoint</th></tr></table>)}
  //     )
  //   } else {
  //     logs = this.state.logs.map(l=>{
  //       return(<tr><td><p>{l.ip}</p></td></tr>)
  //     })
  //   }
  //   return (<div>{logs}</div>)
  // }
}
