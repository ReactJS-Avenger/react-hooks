import React, { useContext } from 'react';
import { oneMoreContext, userContext } from './AppComponent';
import ComponentD from './ComponentD';

// we will have the userContext hooks for consuming value here

const ComponentC=()=>{
    const user =useContext(userContext);
    const hobby = useContext(oneMoreContext)
    return(
        <div>
            {user} - {hobby}
            {/* <ComponentD/> */}
        </div>
    )
}
export default ComponentC;