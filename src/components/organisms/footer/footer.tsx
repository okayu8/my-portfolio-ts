import * as React from "react";
import styled from "styled-components";
import Button from "../../atoms/button";

interface IProps {
  className?: string;
}

const Footer = (props: IProps) => {
  const { className } = props;
  return (
    <StyledFooter className={className}>
      <StyledButton
        href="https://github.com/okayu8"
        target="_blank"
        name="GitHub"
      />
      <StyledButton href="" name="Email" />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 120%;
  height: 300px;
  padding-left: 70%;
  padding-top: 32px;
  background-color: #474747;
  transform-origin: left bottom;
  transform: rotate(-5deg);
  display: flex;
  @media only screen and (max-width: 780px) {
    padding-left: 60%;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 16px;
`;

export default Footer;
