import React, { useEffect, useState } from 'react';

function HookMouse(){
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const logPosition=(e)=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("updating....")
        window.addEventListener('mousemove', logPosition)

        return ()=>{
            console.log("component unmounting code......");
            window.removeEventListener('mousemove', logPosition)
        }
    }, [])

    return(
        <div>
            X -{X}, Y- {Y}
        </div>
    )
}
export default HookMouse