import * as React from "react";
import styled from "styled-components";
import SideBarLink from "../../atoms/side-bar-link";

interface IProps {
  className?: string;
}

const SideBar = (props: IProps) => {
  const { className } = props;
  return (
    <StyledSideBar className={className}>
      <SideBarLink name={"Top"} to={"/"} />
      <SideBarLink name={"Profile"} to={"/profile"} />
      <SideBarLink name={"Skills"} to={"/skills"} />
      <SideBarLink name={"Work"} to={"/work"} />
      <TapButton top={80} light_class={"1"} />
      <TapButton top={86} light_class={"2"} />
      <TapButton top={92} light_class={"3"} />
    </StyledSideBar>
  );
};

interface ITapButtonProps {
  top?: number;
  light_class?: "1" | "2" | "3";
}

const StyledSideBar = styled.div`
  position: relative;
  top: -150vh;
  left: -48vw;
  height: 200vh;
  width: 50vw;
  padding-top: 56vh;
  background-color: rgba(51, 51, 51, 0.664);
  display: flex;
  flex-direction: column;
  transform-origin: left top;
  transform: rotate(-5deg);
  animation: side-0 2s;
  transition: 500ms;
  z-index: 1;

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
    left: -24vw;
  }

  @media only screen and (max-width: 780px) {
    top: -150vh;
    left: -80vw;
    width: 80vw;
    padding-top: 48vh;
    animation: side-1 2s;
    transition: 500ms;

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

const TapButton = styled.div<ITapButtonProps>`
  position: absolute;
  top: ${(props) => props.top}vh;
  right: 20px;
  width: 2px;
  height: 20px;
  background-color: #fff;
  border: solid 4px #fff;
  border-radius: 20px;
  opacity: 0.1;
  animation: light- ${(props) => props.light_class} 5s infinite;

  @keyframes light-1 {
    0% {
      opacity: 0.1;
    }
    32% {
      opacity: 0.6;
    }
    64% {
      opacity: 0.1;
    }
  }

  @keyframes light-2 {
    32% {
      opacity: 0.1;
    }
    64% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.1;
    }
  }

  @keyframes light-3 {
    0% {
      opacity: 0.6;
    }
    32% {
      opacity: 0.1;
    }
    64% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

export default SideBar;
