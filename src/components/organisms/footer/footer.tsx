import * as React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledFooter />;
};

const StyledFooter = styled.div`
  width: 120%;
  height: 300px;
  background-color: #474747;
  transform-origin: left bottom;
  transform: rotate(-5deg);
`;

export default Footer;
