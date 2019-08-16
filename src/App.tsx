import * as React from "react";
import "./App.css";
import TsTest from "./components/TsTest";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header" />
        <div className="App-content">
          <h1 className="App-title">Welcome to React</h1>
          <TsTest text="test" />
          <div className="wrap">
            {/* 読み込みが完了したら表示する要素 */}
            <p>読み込み完了</p>
          </div>
          <div className="box">
            <div className="circle layer-0" />
            <div className="circle layer-1" />
            <div className="circle layer-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
