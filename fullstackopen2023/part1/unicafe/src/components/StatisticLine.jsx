import React from "react";

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.name} </td>
      <td> {props.stat}</td>
    </tr>
  );
}

export default StatisticLine;
