import { UPDATE_FORM_DATA } from "../Actions/Constants/actionTypes";


const INIT_STATE = {
    formData :{
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state:"",
        postalCode:"",
        objective:'',
    }
};

const updateFormReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case UPDATE_FORM_DATA:
            return{
                ...state,
                formData : {
                    ...state.formData,
                    ...action.payload
                },
            };
        default :
            return state;    
    }
}

export default updateFormReducer;