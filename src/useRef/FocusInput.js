import React, { useEffect, useRef } from 'react';

const FocusInput=()=>{
    const inputEle = useRef(null);
    useEffect(()=>{
        // focus the input element
        inputEle.current.focus()
    }, [])
    return(
        <div>
            <input ref={inputEle} type="text"/>
        </div>
    )
}
export default FocusInput;