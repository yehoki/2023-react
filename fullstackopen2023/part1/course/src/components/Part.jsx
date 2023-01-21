import React from 'react'

function Part(props) {
  return (
    <p>
        {props.info.name} {props.info.exercises}
    </p>
  )
}

export default Part