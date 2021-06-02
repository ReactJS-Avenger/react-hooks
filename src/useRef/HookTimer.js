import React, { Component, useEffect, useRef, useState } from 'react';

const HookTimer = ()=>{
    const [timer, setTimer] = useState(0);
    const interRef = useRef()

    useEffect(()=>{
        interRef.current = setInterval(()=>{
            setTimer(prevState => prevState +1)}, 1000)

        return ()=>{
            clearInterval(interRef.current)
        }
    },[])

    return(
        <div>
            {timer}
            <button onClick={()=> clearInterval(interRef.current)}>Clear</button>
        </div>
    )
}
export default HookTimer;