import React from 'react'

const Component2 = (props) => {
  return (
    <div>
      {isNaN(props.string)? <p>The word is {props.string}</p> : <p>The number is: {props.string}</p>}
    </div>
  )
}

export default Component2

