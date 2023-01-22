import React from 'react'

function PersonForm(props) {
  return (
    <form onSubmit = {props.onSubmit}>
        <div>
            Name: <input value = {props.newName} onChange = {props.nameChange} />
        </div>
        <div>
            Number: <input value = {props.newNumber} onChange = {props.numberChange} />
        </div>
        <div>
            <button type = "submit">Add person</button>
        </div>
    </form>
  )
}

export default PersonForm