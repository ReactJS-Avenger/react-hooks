import React from 'react';
import ClassCounter from './useEffect/ClassCounter';
import HookCounter from './useEffect/HookCounter';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCounterTwo';
import ClassMouse from './useEffect/ClassMouse';
import HookMouse from './useEffect/HookMouse';
import MouseContainer from './useEffect/MouseContainer';
import DataFetching from './useEffect/DataFetching';
import AppComponent from './userContext/AppComponent';

class App extends React.Component{
  render(){
    return(
      <div>
         {/* <ClassCounter/>
        <HookCounter/> 
        <HookCounterTwo/>
        <HookCounterThree/> */}
        {/* <HookCounterFour/>
        <HookCounter/> */}
        {/* <ClassCounter/> */}
        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <DataFetching/> */}
        <AppComponent/>
      </div>
    )
  }
}
export default App;