import React from 'react'

const Tile = (props) => {

    return (
    <div>
        <h2>{props.data[0].name.common}</h2>
        <div>
            Capital: {props.data[0].capital}
            <br/>
            Area: {props.data[0].area}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Tile