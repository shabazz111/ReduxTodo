import React, { useState } from "react";
import UpperHead from "../components/UpperHead";
import BottomSection from "../components/BottomSection";

const Home = () => {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (todo) => {
    if (!todo) {
      alert("Please enter a todo");
    }
    const newData = [...todoData, todo];
    setTodoData((prev) => [...prev, todo]);
    localStorage.setItem("todos", JSON.stringify(newData));
  };

  const onChangeCrossHandler = (id) => {
    const newTodoData = todoData.map((todo) => {
      if (todo.Id === id) {
        return { ...todo, isCross: !todo.isCross };
      }
      return todo;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todos", JSON.stringify(newTodoData));
  };

  const onDeleteHandler = (id) => {
    const action = confirm("Are you sure to delete this todo?");
    if (!action) {
      return;
    }
    const newTodoData = todoData.filter((todo) => todo.Id !== id);
    setTodoData(newTodoData);
    localStorage.setItem("todos", JSON.stringify(newTodoData));
  };

  const onSearchHandler = (item) => {
    if (item.length === 0) {
      const data = JSON.parse(localStorage.getItem("todos"));
      setTodoData(() => [...data]);
    } else {
      const newTodoData = todoData.filter((todo) => todo.title.includes(item));
      setTodoData(newTodoData);
    }
  };

  return (
    <section className="w-full h-screen overflow-y-auto bg-gray-300 flex flex-col items-center justify-center">
      <span className="text-xl mt-5 underline font-medium text-purple-500 cursor-pointer translate-x-0 hover:text-green-500 ">
        Todo List
      </span>
      <UpperHead addTodo={addTodo} />
      <BottomSection
        onChangeCrossHandler={onChangeCrossHandler}
        onDeleteHandler={onDeleteHandler}
        onSearchHandler={onSearchHandler}
        todoData={todoData}
      />
    </section>
  );
};

export default Home;
