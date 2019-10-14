import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
import Icon from '@material-ui/core/Icon';


export class TradeHistory extends Component {
    render() {
        return (
            <div className="card text-white  mb-1" style={cardDark}>
                    <span className=" text-center" style={cardTitle}>Trade History</span>
                    <div style={divider}></div>
               <div>
                  <table style={{width:"100%"}}>
                      <thead>
                         <tr>
                             <th></th>
                             <th style={{paddingBottom:"20px"}}>
                                 <div className="d-flex flex-column text-center" >
                                     <span className="title">Time</span>
                                     <span className="subtitle"></span>
                                 </div>
                             </th>
                             <th>
                                 <div className="d-flex flex-column text-center">
                                     <span className="title">Amount</span>
                                     <span className="subtitle">BTC</span>
                                 </div>
                             </th>
                             <th>
                                 <div className="d-flex flex-column text-center">
                                     <span className="title">Price</span>
                                     <span className="subtitle">ARS</span>
                                 </div>
                             </th>
                         </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                              <Icon >keyboard_arrow_up</Icon>
                              </td>
                              <td style={{paddingRight:"4px"}}>16:25:44</td>
                              <td>0.00108</td>
                              <td>513755.74</td>
                          </tr>
                      </tbody>
                  </table>
               </div>
            </div>
        )
    }
}



export default TradeHistory
