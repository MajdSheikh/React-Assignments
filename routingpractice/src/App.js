import logo from './logo.svg';
import './App.css';
import {Router} from './@reach/router'
import Component1 from './components/Component1';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Component1 path="/home/" />
      </Router>
    </div>
    
  );
}

export default App;
