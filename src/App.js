import './App.css';
import { useState } from 'react';

const defaultValue = ['Tunahan Karaman', 'Ali Yılmaz', 'Ahmet Yılmaz'];

function App() {

  const [text, setText] = useState("");
  const [item, setItem] = useState(defaultValue);

  const addItem = () => {
    if (text !== "") {
      if (item.length >= 10) {
        alert("You can't add more than 5 items");
        setText("");
      }
      else {
        setItem((prev) => [...prev, text]);
        setText("");
      }
    }


  }

  const deleteAll = () => {
    setItem([]);
    setText("");
  }

  return (
    <div className="App">
      <div className="todo-app">
        <h1>Todo List</h1>
        <input value={text} onChange={(e) => { setText(e.target.value); }} className="addInput" />
        <button onClick={addItem} className="addButton">Add</button>
        <button onClick={deleteAll} className="addDelete">All Delete</button>
        <br />
        <br />
        {item.map((item, index) => {
          return <div key={index}>{item}</div>
        }
        )}
      </div>
    </div>
  );
}

export default App;
