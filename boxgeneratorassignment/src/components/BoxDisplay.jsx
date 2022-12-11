import React from 'react'

const BoxDisplay = (props) => {
    return (
    <div>
        <pre>
        {props.box.map((color, i) => <div key={i} style={{
            backgroundColor:color,
            height:'100px',
            width:'100px',
            border: '1px solid black',
            display: 'inline-block',
            margin: '20px',
        }}></div>)}
        </pre>
    </div>
    )
}

export default BoxDisplay
