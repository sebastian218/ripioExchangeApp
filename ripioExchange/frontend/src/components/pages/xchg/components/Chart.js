import React, { Component } from 'react'
import {cardDark,textWhite,cardTitle,divider} from '../../../layout/styles';
import { minHeight } from '@material-ui/system';

export class Chart extends Component {
    render() {
        return (
            <div className="card text-white  mb-1" style={cardDark}>
              <span className=" text-center" style={cardTitle}>Chart</span>
              <div style={divider}></div>
             <div className="p-2" style={{minHeight:"240px"}}>
            
                    </div>
                 </div>
        )
    }
}

export default Chart
