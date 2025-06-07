import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updatedTodo, deleteTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updatedTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-white/20 rounded-lg px-3 py-2 gap-x-3 shadow-md duration-300 text-white ${
        todo.completed ? "bg-green-500/20" : "bg-white/10"
      }`}
    >
      <input
        type="checkbox"
        className="w-5 h-5 accent-green-400 transition-all"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none ${
          isTodoEditable ? "border-b border-white/40 px-1" : "border-transparent"
        } ${todo.completed ? "line-through opacity-50" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="text-sm hover:scale-110 transition"
        onClick={() => {
          if (todo.completed) return;
          isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        className="text-sm hover:scale-110 transition"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
