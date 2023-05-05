import { CLEAR_PERSONALINFO, SET_PERSONAL_INFO } from "../Actions/Constants/actionTypes"


const INIT_STATE =[
     {
        image:null,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state:"",
        postalCode:"",
        objective:'',
    }
]

const personalInfoReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case SET_PERSONAL_INFO:
            state = [...state, action.payload]
            return state;   
        case CLEAR_PERSONALINFO:
            return INIT_STATE;    
        default :
            return state;    
    }
};

export default personalInfoReducer;