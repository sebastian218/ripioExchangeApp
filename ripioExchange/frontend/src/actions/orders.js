import axios from "axios";
import {GET_ORDERS, DELETE_ORDER,CREATE_ORDER, GET_ERRORS} from "./types";



// GET ORDERS 

export const getOrders = () => dispatch =>{
       axios.get("/api/orders")
            .then(res => {
                console.log(res)
                dispatch({
                    type: GET_ORDERS,
                    payload: res.data
                })

            } )
            .catch(err =>{
                const error = {
                    msg: err.response.data,
                    status: err.response.status
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: error
                })
                

            })
}
// DELETE ORDER

export const deleteOrder = (id) => dispatch => {
     axios.delete(`/api/orders/${id}/`)
            .then(res => {
                 dispatch({
                     type: DELETE_ORDER,
                     payload: id
                 })
            })
            .catch(err =>{
                  console.log(err);
            })
}

// ADD LEAD

export const createOrder = (order) => dispatch =>{
    axios.post("/api/orders/",order)
    .then(res => {
        console.log(res)
        dispatch({
            type: CREATE_ORDER,
            payload: res.data
        })

    } )
    .catch(err =>{
        
        const error = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: error
        })

    })
}