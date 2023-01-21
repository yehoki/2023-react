import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };

  const incrementBad = () => {
    setBad(bad + 1);
  };
  console.log(good);
  return (
    <div>
      <Header title="Give feedback" />
      <Button text="Good" handleClick={() => incrementGood()} />
      <Button text="Bad" handleClick={() => incrementBad()} />
      <Button text="Neutral" handleClick={() => incrementNeutral()} />
      <div>
        <Header title = 'Statistics' />
        <Statistics good = {good} bad = {bad} neutral = {neutral}/>
      </div>
    </div>
  );
};

export default App;
