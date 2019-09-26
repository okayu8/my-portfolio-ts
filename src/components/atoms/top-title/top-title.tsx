import * as React from "react";
import styled from "styled-components";

interface IProps {
  firstName: string;
  lastName: string;
  className?: string;
}

const TopTitle = (props: IProps) => {
  const { firstName, lastName, className } = props;
  return (
    <StyledTitle className={className}>
      <StyledLast>{lastName}</StyledLast>
      <StyledFirst>{firstName}</StyledFirst>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  animation: fadeIn-1 3s ease 0s 1 normal;
  -webkit-animation: fadeIn-1 3s ease 0s 1 normal;
  @keyframes fadeIn-1 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledLast = styled.span`
  font-size: 80px;
  font-weight: 800;
  position: absolute;
  top: 22vh;
  left: 32vw;
  @media only screen and (max-width: 780px) {
    font-size: 48px;
    top: 28vh;
    left: 24vw;
  }
`;

const StyledFirst = styled.span`
  font-size: 80px;
  font-weight: 800;
  position: absolute;
  top: 36vh;
  left: 48vw;
  @media only screen and (max-width: 780px) {
    font-size: 48px;
    top: 36vh;
    left: 40vw;
  }
`;

export default TopTitle;
