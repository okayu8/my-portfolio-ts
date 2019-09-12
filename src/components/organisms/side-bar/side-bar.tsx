import * as React from "react";
import styled from "styled-components";
import SideBarLink from "../../atoms/side-bar-link";

const SideBar = () => {
  return (
    <StyledSideBar>
      <SideBarLink name={"Top"} uri={"/#/"} />
      <SideBarLink name={"Profile"} uri={"/#/profile"} />
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  position: relative;
  top: -130vh;
  left: -48vw;
  height: 200vh;
  width: 50vw;
  padding-top: 20vh;
  background-color: rgba(51, 51, 51, 0.664);
  display: flex;
  flex-direction: column;
  transform-origin: left top;
  transform: rotate(-5deg);
  animation: side-0 2s;
  transition: 1s;

  @keyframes side-0 {
    0% {
      left: -100vw;
    }
    25% {
      left: -100vw;
    }
    50% {
      left: -48vw;
    }
  }

  :hover {
    left: -8vw;
  }

  @media only screen and (max-width: 780px) {
    top: -150vh;
    left: -80vw;
    width: 80vw;
    animation: side-1 2s;
    transition: 1s;

    :hover {
      left: -24vw;
    }
  }

  @keyframes side-1 {
    0% {
      left: -100vw;
    }
    25% {
      left: -100vw;
    }
    50% {
      left: -80vw;
    }
  }
`;

export default SideBar;
