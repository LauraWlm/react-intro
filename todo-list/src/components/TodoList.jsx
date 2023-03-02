import React from "react";

const TodoList = ({ todos, onToggleCompleted }) => {
  const handleChange = (index) => {
    onToggleCompleted(index);

    console.log("The checkbox was toggled");
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="liStyle">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={()=> handleChange(index)}
            className="liStyle__checkbox"
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
