import React from "react";

function Persons(props) {
  return (
    <ul>
      {props.filteredData.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={props.onclick} id = {person.id}> delete {person.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default Persons;
