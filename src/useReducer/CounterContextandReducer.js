import React, { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const ContextUser = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterContextandReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <ContextUser.Provider
        value={{ contextCount: count, contextDispatch: dispatch }}
      >
        <h4>Count : {count}</h4>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </ContextUser.Provider>
    </div>
  );
};
export default CounterContextandReducer;
