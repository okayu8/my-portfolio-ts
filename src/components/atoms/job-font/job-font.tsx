import * as React from "react";
import styled from "styled-components";
// import const from "src/const";

interface IProps {
  value: string;
  top: number;
  left: number;
  className?: string;
}

const JobFont = (props: IProps) => {
  const { value, top, left, className } = props;
  return (
    <ApearDelay>
      <StyledJobFont top={top} left={left} className={className}>
        {value}
      </StyledJobFont>
    </ApearDelay>
  );
};

interface IStyledProps {
  top: number;
  left: number;
}

const StyledJobFont = styled.p<IStyledProps>`
  position: relative;
  color: #000;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

const ApearDelay = styled.div`
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

export default JobFont;
