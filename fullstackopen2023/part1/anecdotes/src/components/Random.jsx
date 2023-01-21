import React from "react";

function Random(props) {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
}

export default Random;
