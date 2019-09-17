import * as React from "react";
import styled from "styled-components";
import "./App.css";
import Top from "./components/pages/top";
import Profile from "./components/pages/profile";
import SideBar from "./components/organisms/side-bar";
import Footer from "./components/organisms/footer";
import {
  Route,
  // Link,
  HashRouter as Router
} from "react-router-dom";

class App extends React.Component {
  public render() {
    // const [click, clickSideBar] = React.useState(false);

    return (
      <Router>
        <div className="App">
          <div className="wrap">
            <div className="App-content">
              <StyledContent>
                <Route exact={true} path="/" component={Top} />
                <Route path="/profile" component={Profile} />
              </StyledContent>
            </div>
            <Footer />
            <SideBar />
          </div>
        </div>
      </Router>
    );
  }
}

const StyledContent = styled.div`
  margin-left: 10vw;
  width: 80%;
`;

export default App;
