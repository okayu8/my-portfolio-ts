import * as React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  uri?: string;
}

const SideBarLink = (props: IProps) => {
  const { name, uri } = props;
  return <StyledLink href={uri}>{name}</StyledLink>;
};

const StyledLink = styled.a`
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
