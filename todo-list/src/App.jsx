import React, { useState, useEffect } from "react";
import './Header/Header';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';
import Header from "./Header/Header";

const LSKEY = "MyTodoApp";

function App() {
  // Initialize the state
  const [todos, setTodos] = useState([]);

  // Update the state
  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text, checked: false }]);
  }

  //Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + "todos", JSON.stringify(todos))
  }, [todos]);


  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} addTodo={addTodo} />
      </main>
      
    </div>
  );
}

export default App
