import React, { Component, Fragment } from 'react'
import {withAlert} from 'react-alert';
import {connect} from "react-redux"
export  class Alerts extends Component {
 
    componentDidUpdate(prevProps){
            const {error , alert} = this.props;
        if(error != prevProps.error){
            if(error.msg.price){
                alert.error("Price is required");
            }
            if(error.msg.amount){
                alert.error("Amount is required");
            }
            if(error.msg.total){
                alert.error("Total is required");
            }
        }
    }
    render() {
        return <Fragment />;
    }
}
const mapStateToProps = state =>( {
        error: state.errors
})
export default connect(mapStateToProps)(withAlert()(Alerts))
