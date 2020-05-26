import React from "react";
import "./List.css";
import Card from "../components/card";
import data from "../utils/data"



function List() {

  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <a href={"#/movie?index=" + index} key={item.id}>
            <Card index={index} item={item}></Card>
          </a>
        );
      })}
    </div>
  );
}

export default List;
