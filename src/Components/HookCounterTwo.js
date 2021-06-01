import { render } from '@testing-library/react';
import React, { useState } from 'react';

function HookCounterTwo(){
    const initialState = 0;
    const [count, setCount] = useState(initialState)

    const incrementFive =()=>{
        for(let i=0; i<5;i++){
            // setCount(count +1) this is using the stale value of the count
            setCount(prevState => prevState +1)
        }
    }
    return(
        <div>
            {count}
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={()=> setCount(count +1)}>Increment</button>
            <button onClick={()=> setCount(count -1)}>decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}
export default HookCounterTwo;