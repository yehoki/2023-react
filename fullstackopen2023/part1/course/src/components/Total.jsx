import React from "react";

function Total(props) {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return <p>The total number of exercises is: {total}</p>;
}

export default Total;
