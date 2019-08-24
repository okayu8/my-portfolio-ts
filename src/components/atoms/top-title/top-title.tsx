import * as React from "react";
import styled from "styled-components";

interface IProps {
  firstName: string;
  lastName: string;
}

const TopTitle = (props: IProps) => {
  const { firstName, lastName } = props;
  return (
    <StyledTitle>
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
`;

const StyledFirst = styled.span`
  font-size: 80px;
  font-weight: 800;
  position: absolute;
  top: 36vh;
  left: 48vw;
`;

export default TopTitle;
