import {combineReducers} from 'redux';
import orders from './orders';
import errors from './errors';


export default combineReducers({
    orders,
    errors
});