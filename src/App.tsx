import * as React from "react";
import "./App.css";
import Top from "./components/pages/top";
import {
  Route,
  // Link,
  HashRouter as Router
} from "react-router-dom";

export const test: any = "test";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <div className="wrap">
            <div className="App-content">
              <Route exact={true} path="/" component={Top} />
            </div>
            <div className="App-footer" />
            <div className="App-side" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
