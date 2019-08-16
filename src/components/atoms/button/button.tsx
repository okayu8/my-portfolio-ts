import * as React from "react";
import styled from "styled-components";
// import const from "src/const";

interface IProps {
  name?: string;
  onclick?: any;
  type: string;
}

const Button = (props: IProps) => {
  const { name, onclick } = props;
  return <StyledButton onClick={onclick}>{name}</StyledButton>;
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
  font-size: 14px;
  color: #fff;
  background-color: #bbbbbb1f;
  border: 1px solid #fff;
  border-radius: 4px;
`;

export default Button;
