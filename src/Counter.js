import React from "react";
import { useSelector, connect } from "react-redux";
import {increment} from './actions/counterActions';

function Counter(props) {
    //const {incrementCounter} = props;
    // const counter = useSelector(state=> {
    //     console.log("enter");
    //     return state.counter;
    //   });

    function handleIncrement() {
        props.incrementCounter(2);
    }

    return (<>
    <p>Counter :{props.counter}</p>
    <button onClick = {handleIncrement}> Increment Counter</button>
    </>);
}

const mapStateToProps = (state)=>{
    return  {
        counter: state.counter
    }
}

const mapDispatchToProps =  {
    incrementCounter: increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);