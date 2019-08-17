import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="App-content">
            <h1 className="App-title-first">Kataoka</h1>
            <h1 className="App-title-second">Yutaro</h1>
            <div className="box">
              <div className="circle layer-0" />
              <div className="circle layer-1" />
              <div className="circle layer-2" />
            </div>
          </div>
          <div className="App-footer" />
          <div className="App-side" />
        </div>
      </div>
    );
  }
}

export default App;
