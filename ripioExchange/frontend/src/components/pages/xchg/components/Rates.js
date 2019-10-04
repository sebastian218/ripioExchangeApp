import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle} from '../../../layout/styles';
export class Rates extends Component {
    render() {
        return (
            <div className="card text-white  mb-1" style={cardDark}>
                    <h5 className=" text-center" style={cardTitle}>Rates</h5>
             <div className="p-2">
              <h5 className="card-title">Dark card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        )
    }
}

export default Rates
