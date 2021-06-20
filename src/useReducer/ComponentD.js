import React, { useContext } from "react";
import { ContextUser } from "./CounterContextandReducer";

const ComponentD = () => {
  const countContext = useContext(ContextUser);
  return (
    <div>
        Component D : {countContext.contextCount}
      <button onClick={() => countContext.contextDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.contextDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.contextDispatch("reset")}>Reset</button>
    </div>
  );
};
export default ComponentD;