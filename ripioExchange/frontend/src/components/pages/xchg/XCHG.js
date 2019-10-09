import React, { Component } from 'react'
import Balance from './components/Balance';
import OrderForm from './components/OrderForm';
import OrderBook from './components/OrderBook';
import Chart from './components/Chart';
import Orders from './components/Orders';
import TradeHistory from './components/TradeHistory';
import Rates from './components/Rates';
import Header from '../../layout/Header';



export class XCHG extends Component {
  

    render() {
        return (

           <React.Fragment>
           <Header />
              <div >
                 <Rates />
                 <div style={container} className="">
                    <div className="" style={columnFlex}>
                    <Balance />
                    <OrderForm />
                    </div>

                    <div className=""  style={orderBook}>
                    <OrderBook />
                    </div>

                    <div className="" style={centerColumn}>
                    <Chart />
                    <Orders />
                    </div>

                    <div className="" style={tradeHistoru}>
                    <TradeHistory />
                    </div>
                 </div>
            
              </div>
           </React.Fragment>
        
        )
    }
}

export default XCHG

const container = {
   backgroundColor: "#131b1e",
   paddingTop: "8px",
   display: "flex",
   flexDirection: "row",
   flexWrap: "nowrap",
   justifyContent: "space-between",
   height: "90vh!important",
   marginTop: "0",
   minHeight: "645px",
   
}
const columnFlex ={
flexBasis: "15%",
order: "1",
marginRight: "5px",
marginLeft: "5px",
display: "flex",
flexDirection: "column",
minWidth: "230px"
}
const centerColumn = {
flexBasis: "55%",
order: "3",
marginRight: "5px",
display: "flex",
flexDirection: "column"
}
const tradeHistoru = {
flexBasis: "15%",
order: "4",
marginRight: "5px",
display: "flex",
flexDirection: "column"
}
const orderBook = {
flexBasis: "15%",
order: "2",
marginRight: "5px",
display: "flex",
flexDirection: "column",
minWidth: "210px"
}