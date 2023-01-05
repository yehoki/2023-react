import React from 'react'
import Header from './Header'

function NameForm(props) {
  return (
    <>
    <Header title = {props.title} />
    <form  onSubmit = {props.onSubmit}>
        <div>
            {props.children}
            <button type = "submit" >add</button>
        </div>
    </form>
    </>
  )
}

export default NameForm