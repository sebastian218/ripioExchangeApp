import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
import { Icon } from '@material-ui/core';
import { Select } from '@material-ui/core';

export class Rates extends Component {
    render() {
        return (
            <div className="rates">
                <div className="rates text-white" style={cardDark}>
                    <div className="rates-elements">
                        
                    </div>
                    <div className="rates-elements last-price">
                       <span>Last Price</span>
                        <div className="last-price-row">
                        <img src="../../../static/assets/imgs/solid_fiat.svg" width="20"/>
                        <span>123123</span>
                        </div>          
                        
                        <span className="rate-balance red-color">
                            0.08%
                            <Icon  style={{ fontSize: 12 }}>arrow_downward</Icon>
                        </span>
                    </div>
                    <div className="rates-elements">
                            <table >
                                <thead>
                                   <tr>
                                       <th>
                                           <span>Volume 24hs</span>
                                       </th>
                                       <th>
                                           <span>Hight 24hs</span>
                                           <Icon style={{color: "#35ba8e",fontSize: 12 }}>arrow_upward</Icon>
                                       </th>
                                       <th>
                                           <span>Low 24hs</span>
                                           <Icon style={{color: "#eb5b49",fontSize: 12 }} >arrow_downward</Icon>
                                       </th>
                                   </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">
                                            <span> 13212.00</span>
                                            <span className="subtitle">BTC</span>

                                        </td>
                                        <td className="text-center">
                                            <span>1232.00</span>

                                        </td>
                                        <td className="text-center">
                                        <span>1232.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                    </div>
            
                </div>
            </div>
        )
    }
}

export default Rates
