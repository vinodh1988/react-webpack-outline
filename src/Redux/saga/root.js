import {takeEvery} from 'redux-saga/effects';
import { loginHandler } from './loginActions';

export function* rootSaga(){
    yield takeEvery("PERFORM_LOGIN",loginHandler);
}