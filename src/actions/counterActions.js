

export const increment = (payload)=>{
    return {
        type: 'INCREMENT',
        payload: payload
    }
}




// export const increment = (payload)=> {
//     return dispatch({
//         type: 'INCREMENT',
//         payload: payload
//     })
// }


export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}