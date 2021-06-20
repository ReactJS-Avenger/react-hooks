import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  posts: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
        console.log("hello succes")
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        error: action.payload,
        posts: {},
      };
    default:
      return state;
  }
};
const DataFetchingUseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({type:'FETCH_SUCCESS', payload: response.data})
      })
      .catch((error) => {
        dispatch({type: 'FETCH_FAILURE', payload:'Something went wrong'})
      });
  }, []);

  return (
      <div>
          {state.loading ? "Loading....." : state.posts.title}
      </div>
  )
};
export default DataFetchingUseReduce;
