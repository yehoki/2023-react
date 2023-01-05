import { useState } from 'react'
import AddButton from './components/AddButton'
import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);

  const incrementGood = () =>  {
    setGood(good + 1);
  }

  const incrementNeutral = () =>  {
    setNeutral(neutral + 1);
  }

  const incrementBad = () =>  {
    setBad(bad + 1);
  }


  return (
    <div>
      <Feedback />
      <AddButton handleClick = {() => incrementGood()} name = "good"/>
      <AddButton handleClick = {() => incrementNeutral()} name = "neutral"/>
      <AddButton handleClick = {() => incrementBad()} name = "bad"/>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App