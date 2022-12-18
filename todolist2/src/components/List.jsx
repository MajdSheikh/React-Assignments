import React, { useState } from 'react'

const List = (props) => {

  const[todo,setTodo]=useState({});

  const fun1 =(e)=>{
    setTodo({
      // id:props.todos.length,
      text:e.target.value,
      completed:false,
    })
  }
    const handleSubmit=(e)=>{
      props.myfun(todo);
      e.preventDefault();
    }
 
  return (
    <div>
       <form onSubmit={handleSubmit} >
        {/* 27 */}
         <input type="text" onChange={fun1}/><br></br>
         <input type="submit" value="Add"/>
       </form>
       <hr></hr>
       <div>       
            
      </div>

    </div>
  )
}

export default List