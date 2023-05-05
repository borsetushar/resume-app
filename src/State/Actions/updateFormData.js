import { UPDATE_FORM_DATA } from "./Constants/actionTypes"


const updatFormData=(formData)=>{
    return{
        type: UPDATE_FORM_DATA,
        payload : formData
    }
};

export {updatFormData};