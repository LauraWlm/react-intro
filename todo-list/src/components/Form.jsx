import React from "react";

const Form = ({clickHandler, inputRef}) => {

  
  return (
    <div className="form">
      <input className="form__input" ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button className="form__button" onClick={clickHandler}>Add todo</button>
    </div>
  );
};

export default Form;
