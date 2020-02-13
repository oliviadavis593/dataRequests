import React from "react";
import ReactDOM from "react-dom";
import CountrySelector from "./countrySelector";

describe("CountrySelector Component", () => {
  it("renders without any errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CountrySelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
