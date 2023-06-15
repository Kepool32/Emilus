import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import userReducer from "./userReducer";

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    users: userReducer
});

export default reducers;