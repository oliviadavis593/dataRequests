import React from "react";
import "./demonym.css";

export default function Demonym(props) {
  return (
    <div className="demonym">
      A {props.name} comes from {props.country}
    </div>
  );
}

/*====== Build static app (#1) ====== */
//Accepts two props (name & country)
//Simply reneders the 'A Barbadian comes from Barbados' string
//Add a smoke test
//demonym.js ===> CountrySelector.js
