import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
              Todo List
            </h1>
            <p className="text-sm text-gray-600 mb-7 text-center"></p>
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
