import React from "react";

const TodoList = ({ todos }) => {

  const handleChange = (index) => { 
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    console.log('The checkbox was toggled'); 
    
  };   
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="liStyle">
          <input type="checkbox" checked={todo.completed} 
          onChange={handleChange} className="liStyle__checkbox"/>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;