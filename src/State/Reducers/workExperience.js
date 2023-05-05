import { CLEAR_WORKEXPERIENCE, SET_WORK_EXPERIENCE } from "../Actions/Constants/actionTypes"


const INIT_STATE = [
    {
        jobTitle:"",
        orgnizationName:"",
        startYear:"",
        endYear:"",
    }
]

const workExperienceReducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case SET_WORK_EXPERIENCE :
            state = [...state, action.payload]
            return state;
        case CLEAR_WORKEXPERIENCE :
            return INIT_STATE  ;    
        default :
            return state;    
    }
};

export default workExperienceReducer;