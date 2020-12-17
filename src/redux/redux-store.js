import {combineReducers, createStore} from 'redux';
import {registerReduce} from '../reducers/registerReduce';
import loginReducer from '../reducers/loginReducer';
import companiesReducer from '../reducers/companiesReducer';


let reducers = combineReducers({
    register: registerReduce,
    login: loginReducer,
    companies: companiesReducer
})

let store = createStore(reducers);
window.store = store;
export default store;