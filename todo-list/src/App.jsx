import React, { useState, useEffect } from "react";
import './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Header from "./components/Header";

function App() {
  // Initialize the state
  const [todos, setTodos] = useState([]);
  const[inputTodo, setInputTodo] = useState("");

  // Update the state
  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { text, checked: false }]);
  }

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
