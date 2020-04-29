import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  value: string;
}

const Tooltip = (props: IProps) => {
  const { className, value } = props;
  return (
    <StyledTooltip className={className}>
      <Span>{value}</Span>
    </StyledTooltip>
  );
};

const StyledTooltip = styled.div`
  position: absolute;
  top: 52vh;
  left: 52vw;
  padding: 16px;
  font-size: 24px;
  background-color: #001729;
  border: solid 4px #fff;
  border-color: rgba(150, 150, 150);
  border-radius: 8px;
  animation: fadeIn-0 5s ease 0s 1 normal;
  -webkit-animation: fadeIn-0 5s ease 0s 1 normal;

  &:after,
  &:before {
    bottom: 100%;
    left: 30%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-bottom-color: #001729;
    border-width: 20px;
    margin-left: -20px;
  }

  &:before {
    border-bottom-color: rgba(150, 150, 150);
    border-width: 26px;
    margin-left: -26px;
  }

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

  @media only screen and (max-width: 780px) {
    left: 38vw;
    font-size: 16px;
  }
`;

const Span = styled.span`
  font-family: Arial;
  color: #0195b9;
`;

export default Tooltip;
