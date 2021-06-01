import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer(){
    const [display, setDispaly] = useState(true)
    return(
        <div>
            <button onClick={() =>setDispaly(!display)}>Toggle</button>
            { display && <HookMouse/>}
        </div>
    )
}
export default MouseContainer;