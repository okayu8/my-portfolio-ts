import * as React from "react";
import "./App.css";
import BackgroundFont from "./components/molecules/backgroung-font";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="App-content">
            {/* <div className="App-back">
              <span id="back-0" className="App-back-first">
                Kataoka
              </span>
              <span id="back-1" className="App-back-second">
                Yutaro
              </span>
            </div> */}
            <BackgroundFont />
            <div className="App-title">
              <span className="App-title-first">Kataoka</span>
              <span className="App-title-second">Yutaro</span>
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
