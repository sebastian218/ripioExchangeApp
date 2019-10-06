import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';



export class OrderForm extends Component {

    state = {
        isSellOrder : false,
        isBuyOrder : true
    } 

onCLick = (type) => {
     switch(type){
        case "buy":
        this.setState({isSellOrder: false, isBuyOrder:true})
         return 
         case "sell":
         this.setState({isSellOrder: true, isBuyOrder:false})
         return 

     }
}


    render() {
        const {isSellOrder ,isBuyOrder } = this.state ;
        return (
            <div className="card text-white  mb-1" style={cardDark}>
                <span className=" text-center" style={cardTitle}>Order Form</span>
                    <div style={divider}></div>
                         <div className="p-2">
                           
                            <div className="buttons-container">
                              <div className="side-button" >
                                  <button onClick={() => this.onCLick("buy")} 
                                  style={{backgroundColor: isBuyOrder ? "#35ba8e" : ""}} 
                                  className="btn">BUY</button>
                              </div>
                              <div className="side-button">
                              <button 
                              onClick={() => this.onCLick("sell")}
                              style={{backgroundColor: isSellOrder ?  "#eb5b49": "" }}
                              className="btn"> SELL</button>
                              </div>
                            </div>
                    
                    </div>
                </div>
        )
    }
}

export default OrderForm
