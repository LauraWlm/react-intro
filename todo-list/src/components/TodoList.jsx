import React, { useState } from "react";

export default function TodoList() {
  const initialTodos = [
    { text: "My first todo", completed: false },
    { text: "My second todo", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  function handleToggle(index) {
    const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed;
  setTodos(newTodos);
  }
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input 
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(index)} /> {todo.text}
        </li>
      ))}
    </ul>
  );
}
