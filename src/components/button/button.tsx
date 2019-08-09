import * as React from "react";
import styled from "styled-components";
// import const from "src/const";

interface Props {
  name?: string;
  onclick: any;
  type: string;
}

const Button = (props: Props) => {
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
`;

export default Button;
