import React, { useRef } from "react";

const Form = () => {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;

    console.log(inputElement.value)
  }

  return (
    <div>
      <input
       ref={inputRef}
        type="text"
        name="newTodo"
        placeholder="Type a new todo"
      />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
};
export default Form;
