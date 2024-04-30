import React from "react";
import TodoList from "./TodoList";

const BottomSection = ({
  todoData,
  onChangeCrossHandler,
  onDeleteHandler,
  onSearchHandler,
}) => {
  return (
    <div className="mt-24 flex flex-col w-1/2">
      <span className="text-2xl font-bold text-gray-600">All Todos</span>
      <div className="flex justify-end w-full relative items-center my-3">
        <input
          type="text"
          onChange={(e)=>onSearchHandler(e.target.value)}
          placeholder="Search your todo here..."
          className="border-2 p-2 rounded-lg w-80"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="w-6 h-6 absolute right-3 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <TodoList
        data={todoData}
        onChangeCrossHandler={onChangeCrossHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};

export default BottomSection;
