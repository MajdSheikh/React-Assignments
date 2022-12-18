import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  return (
<div className="App">
      <Router>
        <Component1 path="/home" />
        <Component2 path="/:string" />
        <Component3 path="/:text/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
