import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  name: string;
  to?: any;
}

const SideBarLink = (props: IProps) => {
  const { name, to } = props;
  return <StyledLink to={to}>{name}</StyledLink>;
};

const StyledLink = styled(Link)`
  width: 300px;
  margin: 16px;
  background-color: #5c000077;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  @media only screen and (max-width: 780px) {
    width: 180px;
  }
`;

export default SideBarLink;
