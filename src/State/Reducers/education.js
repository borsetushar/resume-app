import { CLEAR_EDUCATION, SET_EDUCATION } from "../Actions/Constants/actionTypes"


const INIT_STATE = [
    {
        type:"",
        university:"",
        degree:"",
        startYear:"",
        endYear:"",
    }
]

const educationReducer =(state=INIT_STATE,action)=>{
    switch(action.type){
        case SET_EDUCATION :
            state = [...state, action.payload]
            return state;
        case CLEAR_EDUCATION :
            return INIT_STATE ;   
        default :
            return state;    
    }
};

export default educationReducer;