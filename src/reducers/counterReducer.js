//const {setIn, getIn} = require("immutable");
const counterReducer = (state = 0, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT': 
            return state -1;

        default: 
            return state;
    }
}

// export function increment(state, action) {
//     //let value = state.getIn([ "counter"]) ||0 ;
//     //return state.setIn(["counter", value + action.payload ]);
//     let value = state.getIn(["counter"]) || 0;
//     console.log(value);
//     return state + action.payload;
// }

// export function decrement(state, action) {
//     // let value = state.getIn([ "counter"]) ||0 ;
//     // return state.setIn(["counter", value - action.payload ]);
//     return state-action.payload;
// }

export default counterReducer;