import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Home = () =>{
    const [categories, setCategories] = useState([]);
    const [formInfo, setFormInfo] = useState({
        category: "",
        id: ""
    });
    const changeHandler = (event) =>{
        setFormInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        navigate(`/${formInfo.category}/${formInfo.id}`)
    }
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(response =>{
                setCategories(Object.keys(response.data))
            })
            .catch(err=>console.log(err))
    },[])
    return(
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <label><b>Search for: </b></label>
                    <select onChange={changeHandler} name="category">
                        <option defaultValue>--Select--</option>
                        {
                            categories.map((category, index) =>{
                                return <option key={index} value={category}>{category}</option>
                            })
                        }
                    </select>
                    <label><b>ID: </b></label>
                    <input onChange={changeHandler} type="number" name="id"/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </div>
    )
}

export default Home;