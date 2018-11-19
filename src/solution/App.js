import React, { Fragment, Component } from "react";
import SymbolSelectContainer from './symbolSelect'
import CompanyQuoteContainer from './companyQuote'
import "./app.css";


class App extends Component {

  render() {

    return (
      <Fragment>
        <SymbolSelectContainer />
        <CompanyQuoteContainer />
      </Fragment>
    )
  }
}

export default App;