import React from "react";

const SearchBar = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={props.onChange}
        value={props.value}
      />
      {props.children}
    </>
  );
};

export default SearchBar;
