import React, { useContext } from "react";
import { ContextUser } from "./CounterContextandReducer";

const ComponentF = () => {
  const countContext = useContext(ContextUser);
  return (
    <div>
        ComponentF : {countContext.contextCount}
      <button onClick={() => countContext.contextDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.contextDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.contextDispatch("reset")}>Reset</button>
    </div>
  );
};
export default ComponentF;