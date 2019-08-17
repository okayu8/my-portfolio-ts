import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="App-content">
            <div className="App-back">
              <span className="App-back-first">Kataoka</span>
              <span className="App-back-second">Yutaro</span>
            </div>
            <div className="App-title">
              <span className="App-title-first">Kataoka</span>
              <span className="App-title-second">Yutaro</span>
            </div>
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
