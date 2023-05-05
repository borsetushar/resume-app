import { SELECT_TEMPLATE } from "../Actions/Constants/actionTypes"
import Temp1 from "../../Components/Templates/Temp1";


const INIT_STATE = {
    selectedTemplate: <Temp1/>,
}

const selectedTemplateReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case SELECT_TEMPLATE :
            return{
                ...state,
                selectedTemplate : action.payload,
            };
        default :
            return state;    
    }
};

export default selectedTemplateReducer;