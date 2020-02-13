import React, { Component } from "react";
import "./countrySelector.css";

class CountrySelector extends Component {
  changeSelection(value) {
    if (value === "None") {
      this.props.changeHandler(null);
    } else {
      // find the country selected
      const country = this.props.countries.find(
        country => country.name === value
      );
      this.props.changeHandler(country);
    }
  }

  render() {
    const options = this.props.countries.map((country, i) => (
      <option value={country.name} key={i}>
        {country.name}
      </option>
    ));
    return (
      <div className="country_selector">
        <form>
          <label htmlFor="country">Select a country:</label>
          <select
            id="country"
            name="country"
            onChange={e => this.changeSelection(e.target.value)}
          >
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

CountrySelector.defaultProps = {
  countries: []
};

export default CountrySelector;

/*====== Build static app (#2) ====== */
//Since this component has a form component on it
// We'll eventually have to add event handlers & possibly interact with state
//In anticipation of that - we start with a class component
// That renders the select box displaying a list countries passed as a prop
//countrySelector.js ===> DemonymApp.js

/*============================ */

/*========= Interactivity (#2) ========== */
//Now we'll add the event handler that will invoke the callback function on a selection change
//We have the placeholder option to handle 1st
//So let's add a method to CountrySelector that checks if the options selected is the placeholder or a valid country
//From here our app is fully functioning
//countrySelector.js ===> demonymApp.js
