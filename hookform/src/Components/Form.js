import React, { useState }  from 'react'

const Form = (props) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("password");  
    const [confirmpassword, setConfirmpassword] = useState("password");  
    
  return (
    <div>
      <form>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
        </form>


        <h3>Your form data</h3>
        <p>First name: {firstname}</p> 
        <p>Last name: {lastname}</p> 
        <p>Email: {email}</p> 
        <p>Password: {password}</p> 
        <p>Confirm Password: {confirmpassword}</p> 
    </div>
  )
}

export default Form
