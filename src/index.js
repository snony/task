import React from "react";
import ReactDOM from "react-dom";
import App from "./solution/App";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './solution/reducers'
import feedMiddleware from './solution/feedMiddleware'
import feedAPI from './solution/feed'
import "./index.css";

//setup the store
const store = createStore(rootReducer, applyMiddleware(feedMiddleware(feedAPI)))

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });

    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>An error has occured. Please check the console.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
