import * as React from "react";
import styled from "styled-components";
// import const from "src/const";

interface IProps {
  name?: string;
  href?: string;
  target?: string;
  className?: string;
}

const Button = (props: IProps) => {
  const { name, className, href, target } = props;
  return (
    <ApearDelay>
      <StyledButton className={className}>
        <StyledLink href={href} target={target}>
          {name}
        </StyledLink>
      </StyledButton>
    </ApearDelay>
  );
};

// interface StyledButtonProps {
//   type: string;
// }

// const StyledButton = styled.button`
//   padding: 8px;
//   background-color: ${(props: StyledButtonProps) => props.type == }
// `;
const StyledButton = styled.button`
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.493);
  border-radius: 4px;
  background-color: #bbbbbb1f;
`;

const StyledLink = styled.a`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
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

export default Button;
