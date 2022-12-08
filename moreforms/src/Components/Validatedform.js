import React, { useState } from 'react'

const Validatedform = (props) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("password");  
    const [confirmpassword, setConfirmpassword] = useState("password");
    const [firstnameerror, setFirstnameerror] = useState("");
    const [lastnameerror, setLastnameerror] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const [confirmpassworderror, setConfirmpassworderror] = useState("");

    const errorFun=(e) => {
        if(e.target.value.length < 2) {
            setFirstnameerror("first name must be at least 2 characters")
        }
        else{
            setFirstname(e.target.value);
            setFirstnameerror("");
        }
    }
    const errorFun1=(e) => {
        if(e.target.value.length < 2) {
            setLastnameerror("last name must be at least 2 characters")
        }
        else{
            setLastname(e.target.value);
            setLastnameerror("");
        }
    }
    const errorFun2=(e) => {
        if(e.target.value.length < 2) {
            setEmailerror("email must be at least 2 characters")
        }
        else{
            setEmail(e.target.value);
            setEmailerror("");
        }
    }
    const errorFun3=(e) => {
        if(e.target.value.length < 8) {
            setPassworderror("password must be at least 8 characters")
        }
        else{
            setPassword(e.target.value);
            setPassworderror("");
        }
    }



    return (
    <div>
    <form className="form">
            <div className="margin">
                <label>Firstname: </label> 
                <input type="text" onChange={ errorFun } />
                <div>{firstnameerror}</div>
            </div>
            <div className="margin">
                <label>Lastname: </label> 
                <input type="text" onChange={ errorFun1 }  />
            </div>
            <div>{lastnameerror}</div>
            <div className="margin">
                <label>Email Address: </label> 
                <input type="text" onChange={ errorFun2 }  />
            </div>
            <div>{emailerror}</div>
            <div className="margin">
                <label>Password: </label>
                <input type="password" onChange={ errorFun3 } />
            </div>
            <div>{passworderror}</div>
            <div className="margin">
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
        </form>
    </div>
)
}

export default Validatedform

