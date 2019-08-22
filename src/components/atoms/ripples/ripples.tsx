import * as React from "react";
import styled from "styled-components";

// interface IProps {
//   width?: number;
//   height?: number;
//   vertical: number;
//   horizon: number;
// }

const Ripples = () => {
  return (
    <StyledBox>
      <StyledCircle1 />
      <StyledCircle2 />
      <StyledCircle3 />
    </StyledBox>
  );
};

// interface IStyleProps {
//   // width?: number;
//   // // height?: number;
//   // // vertical: number;
//   // // horizon: number;
// }

const StyledBox = styled.div`
  width: 8vw;
  height: 8vw;
  display: flex;
  top: 0px
  left: 0px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledCircle1 = styled.div`
  width: 80%;
  height: 80%;
  border: solid thin #aaacbe60;
  border-radius: 100%;
  position: absolute;
  animation: wave-0 5s infinite;

  @keyframes wave-0 {
    0% {
      width: 0%;
      height: 0%;
      box-shadow: 0 0 100px inset #8585853f;
    }
    50% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    100% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
  }
`;

const StyledCircle2 = styled.div`
  width: 80%;
  height: 80%;
  border: solid thin #aaacbe60;
  border-radius: 100%;
  position: absolute;
  animation: wave-1 5s infinite;

  @keyframes wave-1 {
    0% {
      width: 0%;
      height: 0%;
      box-shadow: 0 0 100px inset #8585853f;
    }
    50% {
      width: 75%;
      height: 75%;
      opacity: 0;
    }
    100% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
  }
`;

const StyledCircle3 = styled.div`
  width: 80%;
  height: 80%;
  border: solid thin #aaacbe60;
  border-radius: 100%;
  position: absolute;
  animation: wave-2 5s infinite;

  @keyframes wave-2 {
    0% {
      width: 0%;
      height: 0%;
      box-shadow: 0 0 100px inset #8585853f;
    }
    50% {
      width: 50%;
      height: 50%;
      opacity: 0;
    }
    100% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
  }
`;

export default Ripples;
