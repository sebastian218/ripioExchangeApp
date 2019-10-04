import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider,subtitle,thHead,td} from '../../../layout/styles';
export class Balance extends Component {
    render() {
        return (
            
                <div className="card text-white  mb-1" style={cardDark}>
                    <span className=" text-center" style={cardTitle}>Balance</span>
                    <div style={divider}></div>
                     <div className="p-2">
                     <table class="" style={{color:"#fff",width:"100%"}}>
                            <thead>
                                <tr>
                                <th ></th>
                                <th style={thHead} scope="col">Available</th>
                                <th  style={thHead} scope="col">On Hold</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td > 
                                <img src="../../../static/assets/imgs/solid_btc.svg" width="20"/>
                                <span style={subtitle}>BTC</span> 
                                </td>
                                <td style={td}>0</td>
                                <td style={td}>0</td>
                                
                                </tr>
                                <tr>
                                <td > 
                                <img src="../../../static/assets/imgs/solid_fiat.svg" width="20"/>
                                <span style={subtitle}>ARS</span> 
                                </td>
                                <td style={td}>0</td>
                                <td style={td}>0</td>
                                </tr>
                            </tbody>
                            </table>
                            <div className="Buttons" style={btnContainer}>

                            <button className="btn "style={submitBtn}>
                            DEPOSIT
                            </button>
                            <button className="btn "style={submitBtn}>
                            WITHDRAW
                            </button>
                            </div>
                </div>
                </div>
            
        )
    }
}
const submitBtn ={
    borderRadius: "20px",
    backgroundColor: "#545a60",
    borderColor: "#545a60",
    color: "#202a33",
    fontSize: "12px",
    width: "45%"
}
const btnContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "10px",
    marginTop: "10px",
}
export default Balance
