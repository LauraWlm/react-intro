import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Header from "./components/Header";


const LSKEY = "MyTodoApp";


const App = () => {
  
   // Initialize the state
   const initialTodos = [];
   const [todos, setTodos] = useState(initialTodos);

   // Update the state
  function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), todo, completed: false }]);
  }

   // Update the state

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  const inputRef = useRef();
  function clickHandler() {
    const inputElement = inputRef.current;
    const plusTodos = [...todos];
    plusTodos.push(inputElement.value);
    setTodos(plusTodos);
    console.log("test");
    inputElement.value = "";
  }


  return (
    <div className="app">
      <Header />
      <Form
        clickHandler={clickHandler}
        inputRef={inputRef}
        addTodo={addTodo}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
