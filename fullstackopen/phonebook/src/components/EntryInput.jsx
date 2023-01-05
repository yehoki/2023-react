import React from 'react'

function EntryInput(props) {
  return (
    <div>
        {props.title} <input
                        value = {props.value}
                        onChange = {props.onChange}/>
    </div>
  )
}

export default EntryInput