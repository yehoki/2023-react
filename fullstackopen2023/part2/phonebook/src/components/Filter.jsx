import React from "react";

function Filter(props) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default Filter;
