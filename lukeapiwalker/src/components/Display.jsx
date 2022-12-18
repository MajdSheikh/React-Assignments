import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Display = (props) =>{
    const [info, setInfo] = useState({});
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(response =>{
                console.log(response)
                setInfo(response.data)
            })
            .catch(err=>console.log(err))
    },[props.category, props.id])
    return(
        <div>
                {props.category === "people"? 
                    <div>
                        <h1>{info.name}</h1>
                        <div>
                            <p><b>Height: </b>{info.height}</p>
                            <p><b>Mass: </b>{info.mass}</p>
                            <p><b>Hair Color: </b>{info.hair_color}</p>
                            <p><b>Skin Color: </b>{info.skin_color}</p>
                        </div>
                    </div>:
                    props.category === "planets"?
                    <div>
                        <h1>{info.name}</h1>
                        <div>
                            <p><b>Climate: </b>{info.climate}</p>
                            <p><b>Terrain: </b>{info.mass}</p>
                            <p><b>Surface Water: </b>{info.hair_color}</p>
                            <p><b>Population: </b>{info.skin_color}</p>
                        </div>
                    </div>:""
}  
        </div>
    )
}

export default Display;