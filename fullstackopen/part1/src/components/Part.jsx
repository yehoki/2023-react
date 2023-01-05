import React from 'react'

function Part(props) {
  return (
   <div>{props.information.name}: {props.information.exercises}</div>
  )
}

export default Part