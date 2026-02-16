import { useReducer } from "react";

const initialState = {
  step: 1,
  firstname: "",
  lastname: "",
  email: "",
  phone: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    case "NEXT":
      return {
        ...state,
        step: state.step + 1
      };

    case "BACK":
      return {
        ...state,
        step: state.step - 1
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const Registration = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleConfirm = () => {
    alert("Confirmed your registration");
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h1>Multi-step Registration</h1>

      {}
      {state.step === 1 && (
        <>
          <h3>Step 1 : Profile</h3>

          firstname:
          <input
            type="text"
            value={state.firstname}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "firstname",
                value: e.target.value
              })
            }
          />
          <br />

          lastname:
          <input
            type="text"
            value={state.lastname}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "lastname",
                value: e.target.value
              })
            }
          />
          <br />

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <>
          <h3>Step 2 : Contact</h3>

          email:
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: e.target.value
              })
            }
          />
          <br />

          phone:
          <input
            type="text"
            value={state.phone}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "phone",
                value: e.target.value
              })
            }
          />
          <br />

          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </>
      )}

      {/* STEP 3 */}
      {state.step === 3 && (
        <>
          <h3>Step 3 : Confirm</h3>

          <p>Firstname: {state.firstname}</p>
          <p>Lastname: {state.lastname}</p>
          <p>Email: {state.email}</p>
          <p>Phone: {state.phone}</p>

          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>

          <button onClick={handleConfirm}>
            Confirm
          </button>
        </>
      )}
    </>
  );
};

export default Registration;
