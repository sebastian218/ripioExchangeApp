import { GETALL_ORDERS } from "../actions/types";


const initialState = {
    ordersAll: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GETALL_ORDERS:
         return {
             ...state,
             state: action.payload
         }
        default:
        return state;
    }  
    
}