import React from 'react'

const AddButton  = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.name}
        </button>
    )
}

export default AddButton