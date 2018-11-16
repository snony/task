import React from "react";

//The API
import SymbolSelectContainer from './symbolSelect'
import CompanyQuoteContainer from './companyQuote'
import "./app.css";

// Just code in this file. No need to make others.

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <SymbolSelectContainer />
        <CompanyQuoteContainer />
      </React.Fragment>
    )
  }
}

export default App;