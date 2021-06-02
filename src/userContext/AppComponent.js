import React from 'react';
import ComponentB from './ComponentB';

export const userContext = React.createContext();
export const oneMoreContext = React.createContext();

const AppComponent = ()=>{
    return(
        <div>
            <userContext.Provider value="shubham">
                <oneMoreContext.Provider value="coding">
                <ComponentB/>
                </oneMoreContext.Provider>
            </userContext.Provider>
        </div>
    )
}
export default AppComponent