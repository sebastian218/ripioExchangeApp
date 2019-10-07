import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';



export class OrderForm extends Component {

    state = {
        isSellOrder : false,
        isBuyOrder : true,
        orderBy: "limit",
        price : "",
        amount: "",
        total: ""
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
handleTabs = (type) =>{
    switch(type){
        case "limit":
        this.setState({orderBy: type})
        return
        case"stop":
        return
        case"market":
        this.setState({orderBy: type})
        return
    }
}
handleChange = (e) => {
   /*  console.log(e..value)
    
    this.setState({
        [e.target.name]:
        value }); */
}
onChange = e => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    this.setState({
        [e.target.name]:
        value });
}

onSubmit = e => {
    e.preventDefault();
    console.log("Form Submit")
}


    render() {
        const {isSellOrder ,isBuyOrder,orderBy,price,amount,total } = this.state ;
        return (
            <div className="card text-white  mb-1" style={cardDark}>
                <span className=" text-center" style={cardTitle}>Order Form</span>
                    <div style={divider}></div>
                         <div className="p-2">
                           
                            <div className="buttons-container">
                              <div className="side-button" >
                                  <button onClick={() => this.onCLick("buy")} 
                                  style={{backgroundColor: isBuyOrder ? "#35ba8e" : ""}} 
                                  className="btn btn-round">BUY</button>
                              </div>
                              <div className="side-button">
                              <button 
                              onClick={() => this.onCLick("sell")}
                              style={{backgroundColor: isSellOrder ?  "#eb5b49": "" }}
                              className="btn btn-round"> SELL</button>
                              </div>
                            </div>
                            <div className="tab-buttons-container ">
                            <div className="side-button">
                                <button onClick={() => this.handleTabs("limit")} 
                                className={"btn tab-button " + (orderBy == "limit" ? " tab-active" : "") }   
                                > 
                                        LIMIT
                                </button>
                            </div>
                            <div className="side-button tab-button">
                                <button onClick={() => this.handleTabs("market")} 
                                className={"btn tab-button " + (orderBy == "market" ? " tab-active" : "")}
                                > 
                                        MARKET
                                </button>
                            </div>
                            <div className="side-button tab-button">
                                <button className="btn" disabled> 
                                        STOP
                                </button>
                            </div>

                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="inputs-container">
                                 <div className="input-field prefix-icon">
                                     <div className="input-label">
                                     <div className="label">Price</div>
                                     <img src="../../../static/assets/imgs/solid_fiat.svg" />
                                     </div>
                                     <input className="form-input" pattern="[0-9]*" onInput={this.handleChange} onChange={this.onChange} value={price}  name="price"/>     
                                 </div>
                                 <div className="input-field prefix-icon">
                                     <div className="input-label">
                                     <div className="label">Aumount</div>
                                     <img src="../../../static/assets/imgs/solid_btc.svg" width="20px" />
                                     </div>
                                     <input className="form-input" pattern="[0-9]*" onInput={this.handleChange}  onChange={this.onChange} value={amount} name="amount"/>     
                                 </div>
                                 <div className="input-field prefix-icon">
                                     <div className="input-label">
                                     <div className="label">Total</div>
                                     <img src="../../../static/assets/imgs/solid_fiat.svg"  />
                                     </div>
                                     <input className="form-input" pattern="[0-9]*" onInput={this.handleChange} onChange={this.onChange} value={total}  name="total"/>     
                                 </div>   
                                </div>
                                  <div>
                                    <button className={"submit-order" + (isBuyOrder ?  " bg-green" : " bg-red")}>
                                        {`PLACE ${isBuyOrder ? 'BUY': 'SELL'} ORDER `}
                                    </button>
                                  </div>
                                
                            </form>
                    
                    </div>
                </div>
        )
    }
}

export default OrderForm
