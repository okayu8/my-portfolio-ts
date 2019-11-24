import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

interface IProps {
  firstName: string;
  lastName: string;
  className?: string;
}

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2
];

// @ts-ignore
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// @ts-ignore
const trans2 = (x, y) => `translate3d(${x / 4}px,${y / 5}px,0)`;

const BackgroundFont = (props: IProps) => {
  const { firstName, lastName, className } = props;
  const [prlxProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <StyledBack
      onMouseMove={({ clientX: x, clientY: y }) => {
        set({ xy: calc(x, y) });
      }}
      className={className}
    >
      <animated.div
        id="back-0"
        // @ts-ignore
        style={{ transform: prlxProps.xy.interpolate(trans1) }}
      >
        <StyledLastName>{lastName}</StyledLastName>
      </animated.div>
      <animated.div
        id="back-1"
        // @ts-ignore
        style={{ transform: prlxProps.xy.interpolate(trans2) }}
      >
        <StyledFirstName>{firstName}</StyledFirstName>
      </animated.div>
    </StyledBack>
  );
};

const StyledBack = styled.div`
  animation: fadeIn-0 4s ease 0s 1 normal;
  -webkit-animation: fadeIn-0 4s ease 0s 1 normal;

  @keyframes fadeIn-0 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledLastName = styled.span`
  font-size: 400px;
  color: rgba(221, 221, 221, 0.02);
  font-weight: 800;
  position: absolute;
  top: -50vh;
  left: -5vw;
  transform: translate(0%, 0%);
  @media only screen and (max-width: 780px) {
    font-size: 250px;
    color: rgba(221, 221, 221, 0.02);
    font-weight: 800;
    position: absolute;
    top: -40vh;
    left: 0;
  }
`;

const StyledFirstName = styled.span`
  font-size: 400px;
  color: rgba(221, 221, 221, 0.08);
  font-weight: 800;
  position: absolute;
  top: -25vh;
  left: 0vw;
  transform: translate(0%, 0%);
  @media only screen and (max-width: 780px) {
    font-size: 250px;
    color: rgba(221, 221, 221, 0.06);
    font-weight: 800;
    position: absolute;
    top: -25vh;
    left: 10vw;
  }
`;

export default BackgroundFont;
