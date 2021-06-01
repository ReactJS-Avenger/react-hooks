import React, { useEffect, useState } from 'react';

function HookCounter(){
    const [count, setCount] = useState(0);
    const [name, setName] =useState('')

    // we are requesting the react to execute the function we are passing as an argument
    // everytime when the compoennt renders
    useEffect(()=>{
        console.log("updating is called.....")
        document.title = `Clicked ${count} times`
    }, [count])

    const handleCount = () =>{
        setCount(count+1)
    }

    return(
        <div>
            Hook Counter : {count}
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={handleCount}>Count Hook</button>
        </div>
    )
}
export default HookCounter