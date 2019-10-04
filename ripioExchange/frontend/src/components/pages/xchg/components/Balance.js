import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider,subtitle,thHead,td} from '../../../layout/styles';
export class Balance extends Component {
    render() {
        return (
            
                <div className="card text-white  mb-1" style={cardDark}>
                    <span className=" text-center" style={cardTitle}>Balance</span>
                    <div style={divider}></div>
                     <div className="p-2">
                     <table class="" style={textWhite}>
                            <thead>
                                <tr>
                                <th ></th>
                                <th style={thHead} scope="col">Available</th>
                                <th  style={thHead} scope="col">On Hold</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td >BTC</td>
                                <td style={td}>0</td>
                                <td style={td}>0</td>
                                
                                </tr>
                                <tr>
                                <td >ARS</td>
                                <td style={td}>0</td>
                                <td style={td}>0</td>
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
