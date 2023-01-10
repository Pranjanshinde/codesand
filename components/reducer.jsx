import { useReducer } from "react";

const initialstate = 50;

function reducecallback(state, action) {
  switch (action.type) {
    case "INCREAMNT": {
      return state + 1;
    }
    case "DECREAMENT": {
      return state - 1;
    }
    case "RESET": {
      return 50;
    }
    default: {
      return state;
    }
  }
}

function counterReducer() {
  const [state, dispatch] = useReducer(reducecallback, initialstate);

  const handleAdd = () => {
    const increamentAction = { type: "INCREAMNT" };
    dispatch(increamentAction);
  };

  const reducehandle = () => {
    const increamentAction = { type: "DECREAMENT" };
    dispatch(increamentAction);
  };

  const resethandle = () => {
    const increamentAction = { type: "RESET" };
    dispatch(increamentAction);
  };

  return (
    <>
      <h1>Reducer</h1>
      <h2>{state}</h2>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={reducehandle}>REDUCE</button>
      <button onClick={resethandle}>RESET</button>
    </>
  );
}
export default counterReducer;
