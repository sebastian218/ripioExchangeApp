import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle} from '../../../layout/styles';
export class Balance extends Component {
    render() {
        return (
            
                <div className="card text-white  mb-1" style={cardDark}>
                    <h5 className=" text-center" style={cardTitle}>Balance</h5>
                    
                     <div className="p-2">
                     <table class="table" style={textWhite}>
                            <thead>
                                <tr>
                                <th ></th>
                                <th scope="col">Available</th>
                                <th scope="col">On Hold</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td >BTC</td>
                                <td>0</td>
                                <td>0</td>
                                
                                </tr>
                                <tr>
                                <td >ARS</td>
                                <td>0</td>
                                <td>0</td>
                                </tr>
                            </tbody>
                            </table>
                            <div className="Buttons" >

                            <button className="btn "style={textWhite}>
                            DEPOSIT
                            </button>
                            <button className="btn "style={textWhite}>
                            WITHDRAW
                            </button>
                            </div>
                </div>
                </div>
            
        )
    }
}

export default Balance
