import { ADD_RESUME } from "./Constants/actionTypes"



const resume=(data,template)=>{
    return{
        type:ADD_RESUME,
        payload: {
            data: data,
            template: template
          }
    }
}

export {resume};