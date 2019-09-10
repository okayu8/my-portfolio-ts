import * as React from "react";
import styled from "styled-components";

const SideBar = () => {
  return <StyledSideBar />;
};

const StyledSideBar = styled.div`
  position: relative;
  top: -130vh;
  left: -48vw;
  height: 200vh;
  width: 50vw;
  background-color: rgba(51, 51, 51, 0.664);
  transform-origin: left top;
  transform: rotate(-5deg);
  animation: side-0 2s;

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
`;

export default SideBar;
