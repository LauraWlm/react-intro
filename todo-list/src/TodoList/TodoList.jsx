import React, { useState } from "react";

const TodoList = () => {
  const initialTodos = [
    {text: "My first todo", checked:false},
    {text: "My second todo", checked: false },
];

  const [todos, setTodos] = useState(initialTodos);

  const handleCheckboxChange = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index] = {
        ...newTodos[index],
        checked: !newTodos[index].checked,
      };
      return newTodos;
    });
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList
