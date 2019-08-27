import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

// interface IProps {
//   firstName: string;
//   lastName: string;
//   xy: any
// }

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2
];
const trans1 = (xy: any) => `translate3d(${xy[0] / 10}px,${xy[1] / 10}px,0)`;
const trans2 = (xy: any) =>
  `translate3d(${xy[0] / 8 + 35}px,${xy[1] / 8 - 230}px,0)`;

const BackgroundFont = () => {
  // const { firstName, lastName } = props;
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <StyledBack
      onMouseMove={({ clientX: x, clientY: y }) => {
        set({ xy: calc(x, y) });
        // @ ts-ignore
        console.log(props.xy);
      }}
    >
      <animated.div
        id="back-0"
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        <StyledLastName>Kataoka</StyledLastName>
      </animated.div>
      <animated.div
        id="back-1"
        style={{ transform: props.xy.interpolate(trans2) }}
      >
        <StyledFirstName>Yutaro</StyledFirstName>
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

const StyledFirstName = styled.span`
  font-size: 400px;
  color: rgba(221, 221, 221, 0.24);
  font-weight: 800;
  position: absolute;
  top: 12vh;
  left: 20vw;
  transform: translate(0%, 0%);
`;

const StyledLastName = styled.span`
  font-size: 400px;
  color: rgba(221, 221, 221, 0.08);
  font-weight: 800;
  position: absolute;
  top: -8vh;
  left: 12vw;
  transform: translate(0%, 0%);
`;

export default BackgroundFont;
