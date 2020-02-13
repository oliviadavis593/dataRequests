import React, { Component } from "react";
import DemonymApp from "./DemonymApp/demonymApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DemonymApp />
      </div>
    );
  }
}

export default App;

/*====== Build static app (#4) ====== */
//Finally to see the compoentn in action we placed it inside the App component
//You can also modify index.js to use DemonymApp as the main component instead of App (optional)
