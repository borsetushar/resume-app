import { SELECT_TEMPLATE } from "./Constants/actionTypes"



const selectTemplate=(template)=>{
    return{
        type: SELECT_TEMPLATE,
        payload: template,
    }
};

export {selectTemplate};