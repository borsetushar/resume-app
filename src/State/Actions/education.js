import { CLEAR_EDUCATION, SET_EDUCATION } from "./Constants/actionTypes"



const education=(data)=>{
    return{
        type:SET_EDUCATION,
        payload:data,
    }
};
const clearEducation=()=>{
    return{
        type:CLEAR_EDUCATION,
    }
}
export{education, clearEducation};