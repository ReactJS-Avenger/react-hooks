import React, { useState } from 'react';

function HookCounter(){
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count+1)
    }

    return(
        <div>
            Hook Counter : {count}
            <button onClick={handleCount}>Count Hook</button>
        </div>
    )
}
export default HookCounter