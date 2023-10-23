import counterReducer from "./counterReducer";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//let reducers = Object.assign({},counterReducer, loggedReducer);

//{counter: counterReducer, isLogged: loggedReducer}
const allReducers = combineReducers({ counterReducer, loggedReducer});

export default allReducers;