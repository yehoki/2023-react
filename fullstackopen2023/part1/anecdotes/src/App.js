import { useState } from "react";
import Header from "./components/Header";
import Random from "./components/Random";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  const newRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const newVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const result = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <Header header="Anecdote of the day" />
      {anecdotes[selected]}
      <div>Has {votes[selected]} votes</div>
      <div>
        <Random text="Random" handleClick={() => newRandom()} />
        <Random
          text="Vote"
          votes={votes[selected]}
          handleClick={() => newVote()}
        />
      </div>
      <div>
        <Header header = 'Anecdote with the most votes' />
        {anecdotes[result]}
        <div>Has {votes[result]} votes</div>
      </div>
    </div>
  );
};

export default App;
