import * as React from "react";
import styled from "styled-components";
import "./App.css";
import logoImg from "./images/atomicstyle_logo_comic.png";
import Top from "./components/pages/top";
import Profile from "./components/pages/profile";
import SideBar from "./components/organisms/side-bar";
import Footer from "./components/organisms/footer";
import Ripples from "./components/atoms/ripples";
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
              <IMG src={logoImg} />
              <StyledContent>
                <Route exact={true} path="/" component={Top} />
                <Route path="/profile" component={Profile} />
              </StyledContent>
            </div>
            <Footer />
            <SideBar />
            <Ripples
              width={840}
              height={840}
              vertical_top={-420}
              horizon_right={-420}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const IMG = styled.img`
  position: absolute;
  top: 16px;
  right: 4vw;
  width: 160px;

  @media only screen and (max-width: 780px) {
    width: 100px;
  }
`;

const StyledContent = styled.div`
  margin-left: 15vw;
  width: 80%;
  z-index: 1;
`;

export default App;
