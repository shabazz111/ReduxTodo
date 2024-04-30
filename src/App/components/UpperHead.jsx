import React, { useState } from "react";

const UpperHead = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const addTodoHandler = () => {
    addTodo({ title: input, isCross: false, Id: Date.now() });
    setInput("");
  };

  return (
    <div className="flex w-1/2 justify-center mt-10 p-2 py-10 rounded-lg shadow-md border-2 bg-white">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 p-2 rounded-lg w-1/2 bg-gray-100"
        placeholder="Please enter your todo here..."
      />
      <button
        className="px-10 bg-blue-500 rounded-2xl p-2 ml-10 text-white hover:bg-blue-700"
        onClick={addTodoHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default UpperHead;
