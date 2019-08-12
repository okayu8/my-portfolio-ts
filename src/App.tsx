import * as React from "react";
import "./App.css";
import TsTest from "./components/TsTest";
import Example from "./components/pages/example";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TsTest text="test" />
        <div className="wrap">
          {/* 読み込みが完了したら表示する要素 */}
          <p>読み込み完了</p>
        </div>
        <div className="box">
          <div className="circle layer-0" />
          <div className="circle layer-1" />
          <div className="circle layer-2" />
          <div className="circle layer-3" />
        </div>
        <Example
          text={text("テキスト", "ああああ")}
          flag={boolean("テキスト表示", true)}
          action={action("ぽちっとな")}
        />
      </div>
    );
  }
}

export default App;
