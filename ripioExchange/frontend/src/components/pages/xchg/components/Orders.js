import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
import { Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrders, deleteOrder } from '../../../../actions/orders';


export class Orders extends Component {
    static propTypes = {
         orders : PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.getOrders();
    }
    render() {
        const {orders} = this.props;
        return (
            <div className="card text-white  mb-1" style={cardDark}>
                <span className=" text-center" style={cardTitle}>Order</span>
                    <div style={divider}></div>
                        
                         <div>
                             <table style={{width:"100%"}}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className=""> 
                                            <span className="">Price</span>
                                            <Icon style={icons}>keyboard_arrow_up</Icon>
                                        </th>
                                        <th className="">
                                            <span className="">Created</span>
                                            <Icon style={icons}>keyboard_arrow_up</Icon>
                                        </th>
                                        <th  className="" >
                                            <span className="">Status</span>
                                            <Icon style={icons}>keyboard_arrow_up</Icon>
                                        </th>
                                        <th className="">
                                            <span className="">Field/Amount</span>
                                            <Icon style={icons}>keyboard_arrow_up</Icon>
                                        </th>
                                        <th >

                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                   { orders.map(order =>(
                                      
                                    <tr key={order.id} className={(order.orderType == "sell" ? "red-color" :"green-color" )} >
                                        <td></td>
                                        <td><span>{order.price}</span> </td>
                                        <td><span> { new Date(order.created_at).toLocaleDateString() + " " + new Date(order.created_at).toLocaleTimeString() }</span> </td>
                                        <td>{order.status}</td>
                                        <td><span>{order.amount} </span> </td>
                                        <td><span><i onClick={this.props.deleteOrder.bind(this, order.id)} style={{cursor:"pointer",fontSize:"16px"}}  className="material-icons">delete_forever</i></span></td>
                                    </tr>
                                   ))}
                                </tbody>
                             </table>
                    
                        </div>
             </div>
        )
    }
}

const icons ={
    top: "7px",
    paddingLeft: "7px",
    position: "relative",
    cursor: "pointer"
}
const mapStateToProps = state => ({
    orders: state.orders.orders
})
export default connect(mapStateToProps,{getOrders,deleteOrder})(Orders)
