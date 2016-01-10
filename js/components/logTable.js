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
    return _.groupBy(ip,i=>Math.floor(i.timestamp/(60*1000)))
  };
  roundToMin = (timestamp) => {
    return Math.floor(timestamp/(60*1000));
  };
  fmtAddr = (addr) => {
    var minSummary = addr.map(m=>{
      return(
        <tr>
          <td>
            {m[0].timestamp}
          </td>
        </tr>
      )
    })
    return( {minSummary} )
  };
  fmtEntries = (entries) => {
    return entries.map(
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
  };
  fmtAddrs = (addrs) => {
    return addrs.map(a=>{
      let mins = _.values(a).map(min=>{
        let time = moment(min[0].timestamp)
        return(
          <tr>
            <td>{time.unix()}</td>
            <td>{time.format('YYYY-MM-DD HH:mm')} : </td>
            <td>{min.length}</td>
          </tr>
        )
      });
      
      return(
        <div className="ip-useage">
        <h4 className="text-left">{_.values(a)[0][0].ip}</h4>
        <table>
          <tbody>
            <tr>
              <th>Timestamp</th>
              <th>Human Readable<br/>YYYY-MM-DD HH-MM-ss</th>
              <th>Requests / Minute</th>
            </tr>
            {mins}
          </tbody>
        </table>
        </div>
      );
    })
  }

  render(){
    let entries = this.fmtEntries(this.props.logs)
    let ips = _.groupBy(this.props.logs, l=> l.ip);
    let ipUseages = Object.keys(ips).map(key => this.computeUseage(ips[key]))
    let eachAddr = ipUseages.map(a=>{
      let minutes = _.values(a).map(min=>{
        let time = moment(min[0].timestamp)
        return(
          <tr>
            <td>{time.unix()}</td>
            <td>{time.format('YYYY-MM-DD HH:mm')} : </td>
            <td>{min.length}</td>
          </tr>
        )
      });
      return(
        <div className="ip-useage">
        <h4 className="text-left">{_.values(a)[0][0].ip}</h4>
        <table>
          <tbody>
            <tr>
              <th>Timestamp</th>
              <th>Human Readable<br/>YYYY-MM-DD HH-MM-ss</th>
              <th>Requests / Minute</th>
            </tr>
            {minutes}
          </tbody>
        </table>
        </div>
      );
    })
    return(
      <div className="endpoint">
        <hr/>
          <h2>Endpoint: {this.props.endpoint}</h2>
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
          <h3 className="text-left">Aggregates for each addr</h3>
          {eachAddr}
        <hr/>
      </div>
    )
  }
}
