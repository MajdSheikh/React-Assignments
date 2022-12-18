import React, {useEffect, useState} from 'react'
import axios from 'axios';


const Pokemon = (props) => {

    const [names, setNames] = useState([])


    const handleClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
                .then(response => response.data)
                .then(response => setNames(response.results))
                .catch(err => console.log(err))
    }


  return (
    <div>
      <button type="submit" onClick={handleClick}>Fetch Pokemon</button>

        {names.map( (item, index) => {
        return <ul><li key={index}>{item.name}</li></ul>
        })
        }

    </div>
  )
    }


export default Pokemon