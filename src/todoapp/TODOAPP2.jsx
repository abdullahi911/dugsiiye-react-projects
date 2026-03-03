import React, { useReducer } from "react";
import Todocontext from "./todocontext";
import { reducer, initialState } from "./Todoapp";
import TodoForm from "./todoform";
import Todolist from "./Todolist";


const TODOAPP2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Todocontext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Todo App with Context + Reducer
          </h1>

          <TodoForm />
          <Todolist />
        </div>
      </div>
    </Todocontext.Provider>
  );
};

export default TODOAPP2;