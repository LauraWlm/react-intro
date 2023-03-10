import React, { useState } from "react";

const TodoList = ({todos, done}) => {
 
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="list">
      <h2 className="list__h2">Todos</h2>
    <ul>
      {todos.map((todo, index) => (
        <li className="list__li" key={index}>
          <input 
          type="checkbox"
          checked={checked}
          onChange={handleChange}
           /> {todo}
        </li>
      ))}
    </ul>
    </div>
  );
}
 export default TodoList;