
import './App.css';
import './counter.css';
import { useState } from 'react';

function App() {
  const [count, setCount]=useState(0);
  const Subtract =()=>{
    setCount(count-1);

  }
  const Add =()=>{
    setCount(count+1);

  }
  const Reset =()=>{
    setCount(0);

  }
  return (
    <div className="counter ">
      <div className="container ">
        <h2>React Counter App</h2>
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={Subtract}>Subtract</button>
          <button onClick={Reset}>Reset</button>
          <button onClick={Add}>Add</button>
      
          </div>
      </div>
    </div>
  );
}

export default App;
