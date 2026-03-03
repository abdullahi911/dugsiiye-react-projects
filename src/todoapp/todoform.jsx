import { useState, useContext } from "react";
import TodoContext from "./todocontext";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({
        type: "add",
        payload: {
          id: Date.now(),
          text,
          completed: false,
        },
      });
      setText("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;