import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import const from "src/const";

interface IProps {
  name?: string;
  to?: any;
}

const Button = (props: IProps) => {
  const { name, to } = props;
  return (
    <StyledButton>
      <StyledLink to={to}>{name}</StyledLink>
    </StyledButton>
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
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: #bbbbbb1f;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
`;

export default Button;
