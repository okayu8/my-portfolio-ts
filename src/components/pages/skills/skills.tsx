import * as React from "react";
import styled from "styled-components";
import data from "data/profile.json";

export type Data = typeof data;

const Skills = () => {
  return (
    <StyledProfile style={{ whiteSpace: "pre-line" }}>
      <StyledName>{data.name}</StyledName>
      <P>{data.text}</P>
      <StyledContact />
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  text-align: left;
  animation: fadeIn-1 2s ease 0s 1 normal;
  -webkit-animation: fadeIn-1 2s ease 0s 1 normal;
  @keyframes fadeIn-1 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const StyledName = styled.p`
  font-weight: 800;
  overflow-wrap: break-word;
  margin-bottom: 32px;
`;

const P = styled.p`
  font-size: 16px;
  overflow-wrap: break-word;
  @media only screen and (max-width: 780px) {
    font-size: 12px;
  }
`;

const StyledContact = styled.div``;

export default Skills;
