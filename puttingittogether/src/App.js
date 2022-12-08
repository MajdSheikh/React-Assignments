import React from 'react';
import Counter from './Components/Counter';
import './App.css';



function App() {
  return (
    <div className="App">
      <Counter lastname="Doe" firstname="Jane" age={45} haircolor="Black"></Counter>
      <Counter lastname="Smith" firstname="John" age={88} haircolor="Brown"></Counter>
    </div>
  );
}

export default App;

