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
      <ButtonArea>
        <StyledButton
          href="https://github.com/okayu8"
          target="_blank"
          name="GitHub"
        />
        <StyledButton href="" name="Twitter" />
        <StyledButton href="" name="facebook" />
        <StyledButton href="" name="Email" />
      </ButtonArea>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 120%;
  height: 300px;
  text-align: right;
  background-color: #474747;
  transform-origin: left bottom;
  transform: rotate(-5deg);
`;

const ButtonArea = styled.div`
  position: relative;
  top: 32px;
  right: 24vw;
  justify-content: flex-end;
  display: flex;
  @media only screen and (max-width: 780px) {
    top: 8px;
    right: 18vw;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 16px;
  @media only screen and (max-width: 780px) {
    margin-left: 8px;
  }
`;

export default Footer;
