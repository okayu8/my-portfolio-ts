import * as React from "react";
import styled from "styled-components";
import data from "data/profile.json";

export type Data = typeof data;

const Profile = () => {
  return (
    <StyledProfile>
      <StyledName>{data.name}</StyledName>
      <P>{data.text}</P>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  text-align: left;
`;

const StyledName = styled.p`
  font-weight: 800;
  overflow-wrap: break-word;
`;

const P = styled.p`
  overflow-wrap: break-word;
`;

export default Profile;
