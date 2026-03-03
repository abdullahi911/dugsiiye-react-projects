import React, { useContext } from "react";
import Todocontext from "./todocontext";
import { Todoitem } from "./todoitem";

const Todolist = () => {
  const { state } = useContext(Todocontext);

  return (
    <ul>
      {state.length === 0 ? (
        <p className="text-center text-gray-400">No todos yet</p>
      ) : (
        state.map((todo) => <Todoitem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default Todolist;