import * as React from "react";
import styled from "styled-components";

interface IProps {
  firstName: string;
  lastName: string;
}

const BackgroundFont = (props: IProps) => {
  const { firstName, lastName } = props;
  return (
    <StyledBack>
      <StyledLastName>{lastName}</StyledLastName>
      <StyledFirstName>{firstName}</StyledFirstName>
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
