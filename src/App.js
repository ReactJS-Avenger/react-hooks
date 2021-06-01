import React from 'react';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCounterTwo';

class App extends React.Component{
  render(){
    return(
      <div>
         {/* <ClassCounter/>
        <HookCounter/> 
        <HookCounterTwo/>
        <HookCounterThree/> */}
        <HookCounterFour/>
      </div>
    )
  }
}
export default App;