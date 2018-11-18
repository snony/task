import React from "react";
import SymbolSelectContainer from './symbolSelect'
import CompanyQuoteContainer from './companyQuote'
import "./app.css";


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