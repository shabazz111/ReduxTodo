import React from "react";
import Todo from "./Todo";

const TodoList = ({ data = [], onChangeCrossHandler, onDeleteHandler }) => {
  return (
    <div className="w-full mt-24 overflow-y-auto flex flex-col">
      {data &&
        data.map((todo) => (
          <Todo
            todo={todo}
            key={todo.Id}
            onChangeCrossHandler={onChangeCrossHandler}
            onDeleteHandler={onDeleteHandler}
          />
        ))}
    </div>
  );
};

export default TodoList;
