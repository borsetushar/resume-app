import { CLEAR_WORKEXPERIENCE, SET_WORK_EXPERIENCE } from "./Constants/actionTypes"



const workExperience=(data)=>{
    return{
        type: SET_WORK_EXPERIENCE,
        payload : data,
    }
};

const clearWorkExperience=()=>{
    return{
        type:CLEAR_WORKEXPERIENCE,
    }
}
export {workExperience,clearWorkExperience};