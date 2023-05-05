import { CLEAR_PERSONALINFO, SET_PERSONAL_INFO } from "./Constants/actionTypes"



const personalInfo=(data)=>{
    return{
        type:SET_PERSONAL_INFO,
        payload:data,
    }
};

const clearPersonalInfo=()=>{
    return{
        type:CLEAR_PERSONALINFO,
    }
}
export{personalInfo,clearPersonalInfo};