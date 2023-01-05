import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics(props) {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positive = (100 * props.good) / total + "%";

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    );
  }
}

export default Statistics;
