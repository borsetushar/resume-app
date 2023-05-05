import { CLEAR_KEYSKILLS, SET_KEYSKILLS } from "./Constants/actionTypes"



const keySkills=(data)=>{
    return{
        type:SET_KEYSKILLS,
        payload:data,
    }
};
const clearKeySkills=()=>{
    return{
        type:CLEAR_KEYSKILLS,
    }
}
export{keySkills,clearKeySkills};