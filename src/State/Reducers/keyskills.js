import { CLEAR_KEYSKILLS, SET_KEYSKILLS } from "../Actions/Constants/actionTypes"


const INIT_STATE = [
    {
        skill1:"",
        skill2:"",
        skill3:"",
        skill4:""
    }
]

const keySkillsReducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case SET_KEYSKILLS :
            state = [...state, action.payload]
            return state;
        case CLEAR_KEYSKILLS :
            return INIT_STATE;    
        default :
            return state;    
    }
};

export default keySkillsReducer;