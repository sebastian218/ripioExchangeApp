import {GET_ORDERS,CREATE_ORDERS,CLOSE_ORDER,DELETE_ORDER,UPDATE_ORDER} from '../actions/types.js'

const initialState = {
      orders: []
}


export default function(state = initialState, action){
      switch(action){
          case GET_ORDERS:
             return {
                 ...state,
                 orders: action.pyload
             }
           default:
           return state;  
      }
}