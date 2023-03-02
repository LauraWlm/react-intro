import React, { useRef, useState } from "react";

export default function Form({onAddTodo}) {
  const inputRef = useRef();
  const[addTodo, setAddTodo] = useState("");

  function clickHandler() {
    const inputElement = inputRef.current;
    onAddTodo(inputElement.value)

    // Do something with inputElement...
    console.log(inputElement.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}
