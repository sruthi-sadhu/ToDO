import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";
//import {increment} from "./actions";

// store.subscribe(()=> console.log(store.getState()));

// store.dispatch(increment());
// store.dispatch(increment());

// store.dispatch(increment());
ReactDOM.render(
  <Provider store= {store}>
    <App />
</Provider>
, document.getElementById('root'))
