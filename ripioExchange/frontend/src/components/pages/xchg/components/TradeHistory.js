import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
export class TradeHistory extends Component {
    render() {
        return (
            <div className="card text-white  mb-1" style={cardDark}>
                    <span className=" text-center" style={cardTitle}>Trade History</span>
                    <div style={divider}></div>
               <div className="p-2">
             
               </div>
            </div>
        )
    }
}

export default TradeHistory
