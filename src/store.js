import allReducers from "./reducers";
import {createStore} from "redux";

const initialState = {
    counter: 0
}
export default createStore(allReducers, initialState);