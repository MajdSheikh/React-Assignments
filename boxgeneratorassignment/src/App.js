import React, { useState } from 'react';
import './App.css';
import BoxDisplay from './components/BoxDisplay';
import BoxForm from './components/BoxForm';

function App() {


  const [currentColor, setCurrentColor] = useState([]);

  const youveGotNewColor = (newColor) => {
    setCurrentColor([...currentColor, newColor]);
    }

  return (
    <div className="App">
          <BoxForm onNewBox={ youveGotNewColor } />
          <BoxDisplay box= {currentColor} />
    </div>
  );
}

export default App;
