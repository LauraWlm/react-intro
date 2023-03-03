import React from "react";

const Form = ({clickHandler, inputRef}) => {

  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
};

export default Form;
