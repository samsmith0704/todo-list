import React from "react";
import { useState, useEffect } from "react";
import Todo from "./Todo";

const TdList = () => {
  const [todos, setTodos] = useState(Array(10).fill(null));

  const addTodo = () => {
                                 //Could probably do this in a better way                
    const newTodo = <Todo text={document.getElementById("todo-input").value} />;
    const todosCopy = [...todos];
    todosCopy.push(newTodo);
    setTodos(todosCopy);
  };

  return (
    <div>
      <input id="todo-input"></input>
      <button onClick={addTodo}>Add Todo</button>
      <p>{todos}</p>
    </div>
  );
};

export default TdList;
