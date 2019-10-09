import React, { Component, Fragment } from 'react';
import {withAlert} from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error : PropTypes.object.isRequired,
        message : PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const {error , alert, message}  = this.props
        if(error !== prevProps.error){
            if(error.msg.price){
                alert.error(`Price: ${error.msg.price.join()}`);
            }
            if(error.msg.amount){
                alert.error(`Amount: ${error.msg.amount.join()}`);
            }
            if(error.msg.total){
                alert.error(`Total: ${error.msg.total.join()}`);
            }
            if(error.msg.non_field_errors){
                alert.error(error.msg.non_field_errors.join())
            }
            if(error.msg.username){
                alert.error(error.msg.username.join())
            }
        }
        if(message !== prevProps.message){
           if(message.passwordsNotMatch){
            alert.error(message.passwordsNotMatch);
       }
        }
    }
    render() {
        return <Fragment />;
    }
}
const mapStateToprops = state => ({
      error: state.errors,
      message: state.messages
})
export default connect(mapStateToprops)(withAlert()(Alerts));
