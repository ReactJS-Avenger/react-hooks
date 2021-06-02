import React from 'react';
import { oneMoreContext, userContext } from "./AppComponent";

const ComponentD=()=>{
    return(
        <div>
            <userContext.Consumer>
                {
                    (name)=>{
                        return (
                            <oneMoreContext.Consumer>
                                {
                                    (lastname)=>{
                                        return <div> The name is - {name}, and we have hobby {lastname}</div>
                                    }
                                }
                            </oneMoreContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}
export default ComponentD;