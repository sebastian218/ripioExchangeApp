import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
export class Chart extends Component {
    render() {
        return (
            <div className="card text-white  mb-1" style={cardDark}>
              <span className=" text-center" style={cardTitle}>Chart</span>
              <div style={divider}></div>
             <div className="p-2">
              <h5 className="card-title">Dark card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        )
    }
}

export default Chart
