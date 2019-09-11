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
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  margin: 16px;
`;

export default SideBarLink;
