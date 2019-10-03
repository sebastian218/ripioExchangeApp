import React, { Component } from 'react'
import Balance from './components/Balance';
 
const containerBg = {
        backgroundColor: "black"
}
export class XCHG extends Component {
  

    render() {
        return (

           <React.Fragment>
              <div  style={containerBg}>
                 <div className="row">
                    <div className="col-lg-3 col-sm-12">
                    <Balance />
                    </div>

                    <div className="col-lg-2 col-sm-12">

                    </div>

                    <div className="col-lg-5 col-sm-12">

                    </div>

                    <div className="col-lg-2 col-sm-12">

                    </div>
                 </div>
            
              </div>
           </React.Fragment>
        
        )
    }
}

export default XCHG
