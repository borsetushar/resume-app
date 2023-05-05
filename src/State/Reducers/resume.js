import { ADD_RESUME } from "../Actions/Constants/actionTypes";


const INIT_STATE={
    resumes:[],
};

const resumeReducer=(state=INIT_STATE,action)=>{
        switch(action.type){
            case ADD_RESUME :
                return { ...state, resumes: [...state.resumes, { data: action.payload.data, template: action.payload.template,}] };
            default :
                return state;    
        }
}
export default resumeReducer;