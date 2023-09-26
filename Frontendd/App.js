import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [todolist, setTodoList] = useState([]);

  const addList = () => {
    return todolist.map((todo, index) => (
      <p key={index}>
        {todo}{' '}
        <button onClick={() => removeItem(index)}>Delete</button>
      </p>
    ));
  };

  const removeItem = (indexToRemove) => {
    const updatedList = todolist.filter((_, index) => index !== indexToRemove);
    setTodoList(updatedList);
  };

  const add = () => {
    if (name.trim() !== '') {
      setTodoList([...todolist, name]);
      setName('');
    }
  };

  return (
    <div>
      <div className="header">
        <h1>To-do List</h1>
      </div>
      <input
        className="textfield"
        type="text"
        value={name}
        placeholder="Type your activity here"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={add} className="btn">
        Add
      </button>

      <div id="list">{addList()}</div>
    </div>
  );
}

export default App;
