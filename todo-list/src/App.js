import React from "react";
import './App.css';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My Todo App
        </h1>
        <Form />
        <TodoList/>
       
      </header>
    </div>
  );
}

export default App;
