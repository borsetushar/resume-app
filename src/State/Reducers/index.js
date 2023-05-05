import personalInfoReducer from "./personalInfo";
import selectedTemplateReducer from "./selectTemplate";
import { combineReducers } from 'redux'
import updateFormReducer from "./updateFormData";
import workExperienceReducer from "./workExperience";
import educationReducer from "./education";
import keySkillsReducer from "./keyskills";
import resumeReducer from "./resume";

const rootReducer = combineReducers({
    selectedTemplate : selectedTemplateReducer,
    setPersonalInfo : personalInfoReducer,
    setWorkExperience : workExperienceReducer,
    setEducation : educationReducer,
    setKeySkills : keySkillsReducer,
    setFormData : updateFormReducer,
    addResume : resumeReducer
});

export default rootReducer;