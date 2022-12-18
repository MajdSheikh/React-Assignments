import './App.css';
import Tab from './components/Tab';
import React, {useState} from 'react'



function App() {
  // an array that contains the label and content of the tabs in the form of object 
  const tabData = [
    {
        label: "Tab 1",
        content: "This is tab 1"
    },
    {
        label: "Tab 2",
        content: "This is tab 2"
    },
    {
        label: "Tab 3",
        content: "This is tab 3"
    }
];
return (
    <div className="App">
        <Tab items={tabData} />
    </div>
);
}
export default App;
