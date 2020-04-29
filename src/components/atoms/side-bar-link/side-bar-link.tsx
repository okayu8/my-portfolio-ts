import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
  name: string;
  to?: any;
}

const SideBarLink = (props: IProps) => {
  const { name, to, className } = props;
  return (
    <Div>
      <StyledLink to={to} className={className}>
        {name}
      </StyledLink>
    </Div>
  );
};

const Div = styled.div`
  margin: 16px;
`;
const StyledLink = styled(Link)`
  position: relative
  right: -10vw;
  width: 300px;
  margin: 16px;
  /* background-color: #5c000077; */
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  @media only screen and (max-width: 780px) {
    width: 180px;
  }
`;

export default SideBarLink;
