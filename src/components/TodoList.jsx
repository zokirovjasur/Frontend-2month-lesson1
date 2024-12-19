import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../todoSlice";
import { playDeleteSound } from "../audioUtils";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-2 rounded"
        >
          <span
            className={`flex-grow cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
              playDeleteSound();
            }}
            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
