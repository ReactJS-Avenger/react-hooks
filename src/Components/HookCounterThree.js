import { render } from '@testing-library/react';
import React, { useState } from 'react';

function HookCounterThree(){
    const [name, setName] = useState({firstName: '', secondName: ''});

    // in class component setState will merge the state
    // But in functional component useState Hooks will  not merge the state have to do to it manually
    return(
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
                <input type="text" value={name.secondName} onChange={e => setName({...name, secondName: e.target.value})}/>
                <h1>FirstName: {name.firstName} and SecondName: {name.secondName}</h1>
                <h1>{JSON.stringify(name)}</h1>
            </form>
            
        </div>
    )
}
export default HookCounterThree