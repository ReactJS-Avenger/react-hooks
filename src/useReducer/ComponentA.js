import React, { useContext } from "react";
import { ContextUser } from "./CounterContextandReducer";

const ComponentA = () => {
  const countContext = useContext(ContextUser);
  return (
    <div>
        Component A: {countContext.contextCount}
      <button onClick={() => countContext.contextDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.contextDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.contextDispatch("reset")}>Reset</button>
    </div>
  );
};
export default ComponentA;
