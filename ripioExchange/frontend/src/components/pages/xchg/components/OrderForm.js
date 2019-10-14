import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createOrder } from '../../../../actions/orders';




export class OrderForm extends Component {

    state = {
        isSellOrder : false,
        isBuyOrder : true,
        showTotal: true,
        orderBy: "limit",
        price : "",
        amount: "",
        total: ""
    } 
componentDidUpdate(){
   /*  console.log("UPDATED")
    console.log(this.state.price) */
}
 onSubmit = e => {
    e.preventDefault();
     const {isSellOrder,price,amount,total} = this.state;
        const order = {
             price: price,
             amount: amount,
             total: total,
             status: "opened",
             orderType: isSellOrder ? "sell" : "buy",
             pair: "btc/ars"
        }
        
        this.props.createOrder(order);
        console.log(this.state)
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
        this.setState({orderBy: type,price: ""})
        return
        case"stop":
        return
        case"market":
        this.setState({orderBy: type,price:"MARKET"})
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

    if(e.target.value == "MARKET"){
        this.setState({
            [e.target.name]:
            e.target.value });
    }else{
        const value = e.target.value.replace(/[^0-9.]/g, "");
        this.setState({
            [e.target.name]:
            value });
              
         if(this.state.amount != "" && this.state.price != ""){
             var total = (this.state.amount * this.state.price).toFixed(2);
             if(total != NaN){
                this.setState({
                    ["total"] : total
              })
             }
          } else {
            this.setState({
                ["total"] : ""
          })
          }
        
    }
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
                            <form autoComplete="off"  onSubmit={this.onSubmit}>
                                <div className="inputs-container">
                                 <div className="input-field prefix-icon">
                                     <div className="input-label">
                                     <div className="label">Price</div>
                                     <img src="../../../static/assets/imgs/solid_fiat.svg" />
                                     </div>
                                     <input  className="form-input"  disabled={orderBy == "market"} onInput={this.handleChange} onChange={this.onChange} value={price}  name="price"/>     
                                 </div>
                                 <div className="input-field prefix-icon">
                                     <div className="input-label">
                                     <div className="label">Amount</div>
                                     <img src="../../../static/assets/imgs/solid_btc.svg" width="20px" />
                                     </div>
                                     <input  className="form-input"  onInput={this.handleChange}  onChange={this.onChange} value={amount} name="amount"/>     
                                 </div>
                                 <div style={{display: orderBy == "market" ? "none": ""}} className="input-field prefix-icon">
                                     <div className="input-label">
                                     <div className="label">Total</div>
                                     <img src="../../../static/assets/imgs/solid_fiat.svg"  />
                                     </div>
                                     <input disabled  className="form-input"  onInput={this.handleChange} onChange={this.onChange} value={total}  name="total"/>     
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

export default connect(null,{createOrder})(OrderForm)
