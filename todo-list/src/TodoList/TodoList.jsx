import React from "react";

const TodoList = ({ todos }) => {
  const handleChange = () => { 
    
    console.log('The checkbox was toggled'); 
    
  };   
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="liStyle">
          <input type="checkbox" checked={todo.checked} 
          onChange={handleChange} className="liStyle__checkbox"/>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
