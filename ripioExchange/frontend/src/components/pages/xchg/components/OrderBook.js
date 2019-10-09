import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider,title,subtitle} from '../../../layout/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrders, deleteOrder, getAllOrders } from '../../../../actions/orders';



export class OrderBook extends Component {

    static propTypes = {
        orders : PropTypes.array.isRequired
   }

   componentDidMount(){
    this.props.getAllOrders();
    console.log(this.props.orders)
}
    render() {

        return (
            <div className="card text-white  mb-1" style={cardDark}>
            <span className=" text-center" style={cardTitle}>OrderBook</span>
            <div style={divider}></div>
             <div className="p-1">
                <div className="header" style={header}>
                    <div style={title}>
                        <span className="title">Amount</span>
                        <span style={subtitle} className="subtitle">BTC</span>
                    </div>
                    <div style={title}>
                        <span className="title">Total</span>
                        <span style={subtitle} className="subtitle">ARS</span>
                    </div>
                    <div style={title}>
                        <span className="title">Price</span>
                        <span style={subtitle} className="subtitle">ARS</span>
                    </div>
                </div>
                <div  className="sell-orderbook-data" >

                <div className='orderbook-inner-data light-four-color'>
                   <div>0.00777</div>
                   <div>12321.09</div>
                   <div className="red-color">232123.00</div>
                </div>
                   
                </div>
                <div style={{textAlign:"center"}}>
                <span className="title">5555.32</span>
                </div>
                <div className="buy-orderbook-data" >

                <div className='orderbook-inner-data light-four-color'>
                   <div>0.00777</div>
                   <div>12321.09</div>
                   <div className="green-color">232123.00</div>
                </div>


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

const blackbgContainer = {
    minHeight : "240px",
    display: "flex",
    flexBasis: "calc(50% - 67px)",
    overflowY: "auto",
    flexDirection: "column-reverse",    
    backgroundColor: "#131b1e"

}

const mapStateToProps = state =>({
    orders: state.ordersAll.ordersAll
})

export default connect(mapStateToProps,{getAllOrders})(OrderBook)
