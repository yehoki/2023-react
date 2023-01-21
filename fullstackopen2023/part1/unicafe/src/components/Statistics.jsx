import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics(props) {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positive = (100 * props.good) / total + "%";
  return total === 0 ? (
    "No Feedback given"
  ) : (
    <>
      <table>
        <tbody>
          <StatisticLine name="Good" stat={props.good} />
          <StatisticLine name="Neutral" stat={props.neutral} />
          <StatisticLine name="Bad" stat={props.bad} />
          <StatisticLine name="Total" stat={total} />
          <StatisticLine name="Average" stat={average} />
          <StatisticLine name="Positive" stat={positive} />
        </tbody>
      </table>
    </>
  );
}

export default Statistics;
