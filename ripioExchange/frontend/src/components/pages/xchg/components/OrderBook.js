import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle} from '../../../layout/styles';
export class OrderBook extends Component {
    render() {
        return (
            <div className="card text-white  mb-1" style={cardDark}>
            <h5 className=" text-center" style={cardTitle}>Order Book</h5>
             <div className="p-1">
                <div className="header" style={header}>
                    <div style={title}>
                        <span className="title">Amount</span>
                        <span style={subtitle} class="subtitle">BTC</span>
                    </div>
                    <div style={title}>
                        <span className="title">Total</span>
                        <span style={subtitle} class="subtitle">ARS</span>
                    </div>
                    <div style={title}>
                        <span className="title">Price</span>
                        <span style={subtitle} class="subtitle">ARS</span>
                    </div>
                </div>
                <div style={blackbgContainer}>

                </div>
                <div style={{textAlign:"center"}}>
                <span className="title">5555.32</span>

                </div>
                <div style={blackbgContainer}>

                </div>
             </div>
        </div>
        )
    }
}
const header = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontWeight: "100",
    padding: "5px 0",
    fontSize: "14px"
}
const title = {
    display: "flex",
    flexDirection: "column"

}
const subtitle = {
    fontWeight: "700",
    fontSize: "10px",
    textAlign: "center"
}
const blackbgContainer = {
    minHeight : "240px",
    display: "flex",
    flexBasis: "calc(50% - 67px)",
    overflowY: "auto",
    flexDirection: "column-reverse",    
    backgroundColor: "#131b1e"

}
export default OrderBook
