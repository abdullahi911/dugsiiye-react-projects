import React, { useContext } from "react";
import Todocontext from "./todocontext";

export const Todoitem = ({ todo }) => {
  const { dispatch } = useContext(Todocontext);

  return (
    <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-2 shadow-sm">
      <span
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
      >
        Delete
      </button>
    </li>
  );
};