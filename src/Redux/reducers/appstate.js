import {combineReducers} from 'redux';
import { loginReducer } from './reducers';

export const appstate = combineReducers({
    login: loginReducer
})