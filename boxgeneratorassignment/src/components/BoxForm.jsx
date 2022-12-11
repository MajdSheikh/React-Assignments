
import React, { useState } from 'react';
const BoxForm = (props) => {

    const [color, setColor] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(color);
    }


    return (
    <div>
        <div className="container">
        <form onSubmit={ handleSubmit }>
            <div className="display">
                <div>
                    <label><h4>Color</h4></label>
                </div>
                <div>
                    <input type="text" name="color" onChange={(e) => setColor(e.target.value)} value={color} />
                </div>
                <button type="submit">Add Box</button>
            </div>
        </form>
        </div>
    </div>
    )
}
export default BoxForm

