import React from 'react';
import PersonCard from './Components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard lastname="Doe" firstname="Jane" age="45" haircolor="Black"></PersonCard>
      <PersonCard lastname="Smith" firstname="John" age="88" haircolor="Brown"></PersonCard>
      <PersonCard lastname="Fillmore" firstname="Millard" age="50" haircolor="Brown"></PersonCard>
      <PersonCard lastname="Smith" firstname="Mira" age="62" haircolor="Brown"></PersonCard>
    </div>
  );
}

export default App;
