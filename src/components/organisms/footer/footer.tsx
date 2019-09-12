import * as React from "react";
import styled from "styled-components";
import Button from "../../atoms/button";

const Footer = () => {
  return (
    <StyledFooter>
      <Button to={""} name={"GitHub"} />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 120%;
  height: 300px;
  padding-left: 30%;
  padding-top: 32px;
  background-color: #474747;
  transform-origin: left bottom;
  transform: rotate(-5deg);
`;

export default Footer;
