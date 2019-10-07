import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
import { Icon } from '@material-ui/core';

export class Orders extends Component {
    render() {
        return (
            <div className="card text-white  mb-1" style={cardDark}>
                <span className=" text-center" style={cardTitle}>Order</span>
                    <div style={divider}></div>
                        
                         <div>
                             <table style={{width:"100%"}}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>
                                            <span className="title">Price</span>
                                            <Icon></Icon>
                                        </th>
                                        <th>
                                            <span className="title">Created</span>
                                            <Icon></Icon>
                                        </th>
                                        <th>
                                            <span className="title">Status</span>
                                            <Icon></Icon>
                                        </th>
                                        <th>
                                            <span className="title">Field/Amount</span>
                                            <Icon></Icon>
                                        </th>
                                        
                                    </tr>
                                </thead>
                             </table>
                    
                        </div>
             </div>
        )
    }
}

export default Orders
