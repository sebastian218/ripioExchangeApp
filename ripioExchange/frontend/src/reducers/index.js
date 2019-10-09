import {combineReducers} from 'redux';
import orders from './orders';
import errors from './errors';
import auth from './auth';
import messages from './messages';
import ordersAll from './ordersAll';

export default combineReducers({
    orders,
    errors,
    auth,
    messages,
    ordersAll
});