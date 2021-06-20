// simple counter using useReducer
// no need to have state as an object it can be simple numeric value. and action also no need of
// object can be simple string
import React, { useReducer } from 'react';

const initialState= 0;
const reducer = (state, action)=>{
    switch(action){
        case 'increment':
            return state +1;
        case 'decrement':
            return state -1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CounterOne = () =>{
    const [count, dispatch] =useReducer(reducer, initialState)
    return(
        <div>
            <h4>Count: {count}</h4>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}
export default CounterOne