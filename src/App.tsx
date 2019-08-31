import * as React from "react";
import "./App.css";
import Top from "./components/pages/top";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="App-content">
            <Top />
          </div>
          <div className="App-footer" />
          <div className="App-side" />
        </div>
      </div>
    );
  }
}

export default App;
