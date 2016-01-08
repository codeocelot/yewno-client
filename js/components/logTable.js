import React from 'react'
import moment from 'moment'
moment();
import _ from 'lodash'

export default class LogTable extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }
  computeUseage = (ip) => {
    var mins = _.groupBy(ip,i=>{return Math.floor(i.timestamp/(60*1000))})
    debugger;
    return mins;
  };
  getMinCount = (min) => {
    return min.reduce((a,b)=>a+b,0)
  };
  roundToMin = (timestamp) => {
    return Math.floor(timestamp/(60*1000));
  };
  fmtAddr = (addr) => {
    var mins = addr.map(m=>m[0].timestamp);
    // _.zip()
    var minSummary = addr.map(m=>{
      return(
        <tr>
          <td>
            {m[0].timestamp}
          </td>
        </tr>
      )
    })
    return(
      {minSummary}
    )

  };
  render(){
    let entries = this.props.logs.map(
      e=>{
        let date = moment(e.timestamp)
        return(
          <tr>
            <td>{e.ip}</td>
            <td>{e.timestamp}</td>
            <td>{date.format('YYYY-MM-DD HH:mm:ss')}</td>
          </tr>
        )
      }
    )
    let ips = _.groupBy(this.props.logs, l=> l.ip);
    let ipUseages = Object.keys(ips).map(key => this.computeUseage(ips[key]))
    let eachAddr = ipUseages.map(a=>{
      return _.values(a).map(min=>{
        let time = moment(min[0].timestamp)
        debugger;
        return(
          <tr>
            <td>{time.format('YYYY-MM-DD HH:mm')} : </td>
            <td>{min.length}</td>
          </tr>
        )
      })
    })
    return(
      <div>
      <h1>{this.props.endpoint}</h1>
      <table>
        <tbody>
          <tr>
            <th>IP Addr</th>
            <th>Timestamp</th>
            <th>Time</th>
          </tr>
          {entries}
        </tbody>
      </table>
      <h3>Aggregates for each addr</h3>
      <table>
        <tbody>
          {eachAddr}
        </tbody>
      </table>
      </div>
    )
  }
}
