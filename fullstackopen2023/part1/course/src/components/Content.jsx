import React from "react";
import Part from "./Part";
function Content(props) {
  const exercisesArray = props.course.parts.map((item) => item.exercises);

  const total = exercisesArray.reduce((s, p) => s + p, 0) + " exercises";

  const parts = props.course.parts.map((item) => <Part key = {item.id} info = {item}/> )

  return (
    <>
      {parts}
      <h4>Total of {total}</h4>
    </>
  );
}
export default Content;
