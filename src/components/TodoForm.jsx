import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex shadow-lg">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-l-lg px-4 py-2 outline-none backdrop-blur-md focus:ring-2 focus:ring-purple-300 duration-200"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
