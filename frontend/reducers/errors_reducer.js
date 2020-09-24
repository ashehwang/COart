import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import characterPostErrorsReducer from './character_post_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  characterPost: characterPostErrorsReducer
});

export default errorsReducer;