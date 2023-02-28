import React, {useState} from "react";
import './style/App.scss';
import './style/Form.scss';
import './style/TodoList.scss';
import './Header/Header';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';
import Header from "./Header/Header";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { text, checked: false }]);
  };

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

export default App;
