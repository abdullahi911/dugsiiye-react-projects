import { useReducer } from "react";

const Appcounter = () => {
const initialState = { counterA: 0, counterB: 0  };
const reducer = (state, action) => {
switch (action.type) {
  case "incrementA":
    return { ...state, counterA: state.counterA + 1 };
  case "decrementA":
    return { ...state, counterA: state.counterA - 1 };
  case "incrementB":
    return { ...state, counterB: state.counterB + 1 };
  case "decrementB":
    return { ...state, counterB: state.counterB - 1 };
    case "reset":
    return initialState;
  default:
    return state;
}

}

const [state, dispatch] = useReducer(reducer, initialState);

return(
<>
<h1>Double Counter</h1>
<h2>Counter A: {state.counterA}</h2>

<button onClick={() => dispatch({ type: 'decrementA' })} disabled={state.counterA === 0}>-A</button>
<button onClick={() => dispatch({ type: 'incrementA' })}>+A</button>
<h2>Counter B: {state.counterB}</h2>
<button onClick={() => dispatch({ type: 'decrementB' })} disabled={state.counterB === 0}>-B</button>
<button onClick={() => dispatch({ type: 'incrementB' })}>+B</button>
<div>
  <button onClick={() => dispatch({ type: 'reset' })}>Reset both</button>
</div>
</>

)


}
export default Appcounter;