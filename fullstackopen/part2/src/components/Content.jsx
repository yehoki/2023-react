import React from 'react'
import Part from './Part'

function Content(props) {
    const listed = props.course.parts.map((item) =>
    <Part key={item.id} name ={item.name} exercises = {item.exercises}/>)

    const exercisesArray = props.course.parts.map((item) => item.exercises)

    const total = exercisesArray.reduce((s,p) => s + p, 0) + ' exercises';
    return (
    <>
    {listed}
    <h3><Part name = 'Total of' exercises = {total} /></h3>
    </>
    )
}

export default Content