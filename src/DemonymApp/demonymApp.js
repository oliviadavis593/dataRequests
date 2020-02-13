import React, { Component } from "react";
import "./demonymApp.css";
import Demonym from "../Demonym/demonym";
import CountrySelector from "../CountrySelector/countrySelector";

class DemonymApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  /*componentDidMount() {
    fetch("https://country.register.gov.uk/records.json?page-size=5000")
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        const countries = Object.keys(data).map(key => data[key].item[0]);
        //console.log(countries);
        this.setState({
          countries
        });
      });
  }*/

  componentDidMount() {
    fetch("https://country.register.gov.uk/records.json?page-size=5000")
      .then(response => {
        //check id response is ok
        console.log("About to check for errors");
        if (!response.ok) {
          console.log("An error did occur, let's throw an error");
          throw new Error("Something went wrong"); //throw an error
        }
        return response; //ok , so just continue
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data).map(key => data[key].item[0]);
        this.setState({
          countries
        });
      })
      .catch(err => {
        //this catch handles the error condition
        //console.log('Handling the error here.', err);
        this.setState({
          error: err.message
        });
      });
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  render() {
    const demon = this.state.selected ? (
      <Demonym
        name={this.state.selected["citizen-names"]}
        country={this.state.selected.name}
      />
    ) : (
      <div className="demonym_app__placeholder">Select a country above</div>
    );

    const error = this.state.error ? (
      <div className="demonym_app__error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className="demonym_app">
        {error}
        <CountrySelector
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}
        />
        {demon}
      </div>
    );
  }
}

export default DemonymApp;

/*====== Build static app (#3) ====== */
//This is the parent of the two other components
//So it simply passes the required data down to the 2 child components

/*========================= */

/*========= Fetching Data (#1) ========== */
//Read about steps on fetch inside Gist
//Initialized state 1st (initially countries are empty and nothing is selected)
//Then we added our componentDidMount() with our Fetch request
//We put a console.log for the data so we can see if the object has populated
//Inside chrome DevTools there is returned data
//There is some metadata for each country (don't plan to use)
//There is also an item array containing at least one object (actual country data we want)

/*========= Fetching Data (#2) ========== */
//How to get the array:
//We iterate over this object
// For each of these properties we extract the country object & drop everything else
// Using Object.key and return the Array from item starting from the 1st index [0]
//We log countries const to make sure its displaying what we want

/*========= Fetching Data (#3) ========== */
//In chrome DevTools we now have an array of country objects with just the 4 properties
//4 properties = citizen-names, country, name, official-name
//This looks useful so we put it inside state (setState)
//Now inside React DevTools we can view the state & see that the state now contains the array of countries (DemonymApp)
//Now that state has been populated with some data - we can add that data to the child components

/*========================= */

/*========= Interactivity (#1) ========== */
//It's time to add the event handling so that users may select a country and see the results
//We only want to set the selected country inside DemonymApp.js
//So we created our setSelected() method
//Then we passed a callback function to the CountrySelector
//demonymApp.js ===> countrySelector.js

/*========================= */

/*========= Handling Failure (#1) ======== */
//Our app works fine now - but we want to build app to behave predictably even when things go wrong
//To simulate such failure - we need to modify the URL used to fetch the data so that it's wrong
//How do we let the user know that something is wrong?:
//We can set a value in the state and conditionally display it
//The catch block can be modified to set this value
//Then inside the render - only display this error message if one exists and if it doesn't then : ''; = display an empty string
