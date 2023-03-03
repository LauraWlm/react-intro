import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Header from "./components/Header";
import Footer from "./components/Footer";


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

  const [count, setCount] = useState(0);
  const inputRef = useRef();

  function clickHandler() {
    setCount(count + 1);
    const inputElement = inputRef.current;
    const plusTodos = [...todos];
    plusTodos.push(inputElement.value);
    setTodos(plusTodos);
    console.log("test");
    inputElement.value = "";
  }

  /*const [done, setDone] = useState();
  const handleChange = () => {
    setDone(done - 1);
  };*/


  return (
    <div className="app">
      <Header /><hr/>
      <Form
        clickHandler={clickHandler}
        inputRef={inputRef}
        addTodo={addTodo}
  
      />
      <TodoList todos={todos} />
      <hr/>
      <Footer count={count} 
       />
    </div>
  );
};

export default App;
