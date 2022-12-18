import React, {useState} from 'react'

const Todos = (props) => {
    
// state for the list of do dos
    const [items, setItems] = useState([]);
// state for the input
    const [input, setInput] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, {text:input, completed:false }]);
    setInput("");

    }

    const toggleCompleted = (index) => {
        const item = items[index];
        item.completed = !item.completed;
        setItems([...items.slice(0, index), item, ...items.slice(index + 1) ]);
    }

    const handleDelete = (index) => {
        
        setItems(items.filter(( i) => i.id !== index.id));
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={ (e) => setInput(e.target.value)}></input>
        <button>Add</button>
      </form>
        <div>{ items.map((item, i) => (
            <div key={i}> <span style={{textDecoration: item.completed ? 'line-through': 'none'}}>{item.text}</span>
            <input type="checkbox" checked={item.completed} 
            onChange={ () => toggleCompleted(i)}></input>
            <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
        )  
         )}</div>
    </div>
  )
}

export default Todos