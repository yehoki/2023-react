import React from 'react'
import Content from './Content'
import Header from './Header'

function Course(props) {
  return (
    <>
        <Header title = {props.title}/>
        <div>
        <Content course = {props.course}/>
        </div>
    </>
    )
}

export default Course