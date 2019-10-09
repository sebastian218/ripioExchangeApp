import axios from "axios";
import {GET_ORDERS, DELETE_ORDER,CREATE_ORDER, GET_ERRORS, GETALL_ORDERS} from "./types";
import { createMessage , returnErrors} from './messages';
import {tokenConfig} from './auth';


// GET ALL ORDERS
export const getAllOrders = () => (dispatch ) =>{
    axios.get("api/ordersAll")
         .then(res => {
             
             dispatch({
                 type: GETALL_ORDERS,
                 payload: res.data
             })

         } )
         .catch(err =>{
             dispatch(returnErrors(err.response.data, err.response.status))
         })
}
// GET ORDERS 

export const getOrders = () => (dispatch , getState) =>{
       axios.get("/api/orders", tokenConfig(getState))
            .then(res => {
                
                dispatch({
                    type: GET_ORDERS,
                    payload: res.data
                })

            } )
            .catch(err =>{
                dispatch(returnErrors(err.response.data, err.response.status))
            })
}
// DELETE ORDER

export const deleteOrder = (id) => (dispatch , getState) => {
     axios.delete(`/api/orders/${id}/`, tokenConfig(getState))
            .then(res => {
                 dispatch({
                     type: DELETE_ORDER,
                     payload: id
                 })
            })
            .catch(err =>{
                dispatch(returnErrors(err.response.data, err.response.status))
            })
}

// ADD LEAD

export const createOrder = (order) => (dispatch , getState) =>{
    axios.post("/api/orders/",order,tokenConfig(getState))
    .then(res => {
        console.log(res)
        dispatch({
            type: CREATE_ORDER,
            payload: res.data
        })

    } )
    .catch(err =>{
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}