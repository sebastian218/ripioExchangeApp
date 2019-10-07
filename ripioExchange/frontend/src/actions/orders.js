import axios from "axios";
import {GET_ORDERS} from "./types";


// GET ORDERS 

export const getOrders = () => dispatch =>{
       axios.get("/api/orders")
            .then(res => {
                dispatch({
                    type: GET_ORDERS,
                    payload: Response.data
                })

            } )
            .catch(err =>{
                console.log(err)

            })
}