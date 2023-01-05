import React from "react";
import Header from "./Header";
import Tile from "./Tile";

function Numbers(props) {
  //const names = props.persons.map((item) => item.name);

  const filteredData = props.persons.filter((e) => {
    if (props.input === "") {
      return e;
    } else {
      return e.name.common.toLowerCase().includes(props.input.toLowerCase());
    }
  });

  function decision(data) {
    if (data.length === 1) {
      return <Tile data={data} />;
    } else if (data.length < 10 || data.length === 250) {
      return data.map((item) => {
        return <p key={item.name.common}> {item.name.common} </p>;
      });
    } else {
      return <p>Too many entries</p>;
    }
  }

  return (
    <div>
      <Header title="Numbers" />
      {decision(filteredData)}
    </div>
  );
}

export default Numbers;
