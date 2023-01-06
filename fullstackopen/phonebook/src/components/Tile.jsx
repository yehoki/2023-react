import React from 'react'

const Tile = (props) => {
    const languages = Object.values(props.data[0].languages).map((item) => <li key = {item}> {item}</li>)
    return (
    <div>
        <h2>{props.data[0].name.common}</h2>
        <img src={props.data[0].flags.png} alt='Flag' />
        <div>
            Capital: {props.data[0].capital}
            <br/>
            Area: {props.data[0].area}
        </div>
        <div>
            <h3>Languages:</h3>
            <ul>
                {languages}
            </ul>
        </div>
    </div>
  )
}

export default Tile