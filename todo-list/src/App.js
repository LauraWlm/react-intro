import './App.css';
import Input from './Input/Input';
import List from './List/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My Todo App
        </h1>
        <Input />
        < List />
      </header>
    </div>
  );
}

export default App;
