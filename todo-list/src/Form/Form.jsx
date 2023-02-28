import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" value={inputValue} onChange={handleChange} className="form__addTodo" placeholder="Add new Todo"/>
      <button type="submit" className="form__submit">Add Todo</button>
    </form>
  );
};

export default Form;
