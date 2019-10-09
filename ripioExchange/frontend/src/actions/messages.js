import {CREATE_MESSAGE, GET_ERRORS} from './types';


// CREATE MESSAGE 

 export const createMessage = msg => {
     return {
         type : CREATE_MESSAGE,
         payload: msg
     }
 }


 // RETURN ERRORS

 export const returnErrors = (msg,status) => {
       console.log("RETURN ERRORS")
       return {
           type: GET_ERRORS,
           payload: {msg,status}
       }
 }