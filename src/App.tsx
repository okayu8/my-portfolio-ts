import * as React from "react";
import "./App.css";
import BackgroundFont from "./components/molecules/backgroung-font";
import TopTitle from "./components/atoms/top-title";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="App-content">
            <BackgroundFont firstName="Yutaro" lastName="Kataoka" />
            <TopTitle firstName="Yutaro" lastName="Kataoka" />
          </div>
          <div className="App-footer" />
          <div className="App-side" />
        </div>
      </div>
    );
  }
}

export default App;
