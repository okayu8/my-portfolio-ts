import * as React from "react";
import styled from "styled-components";
import data from "data/profile.json";

// export type Data = typeof data;

const Profile = () => {
  return (
    <ProfileContent>
      <h1>Profile</h1>
      <StyledName>{data.name}</StyledName>
      <P>{data.text}</P>
      <StyledContact />
    </ProfileContent>
  );
};

const ProfileContent = styled.div`
  text-align: left;
  height: 70vh;
  overflow-y: scroll;
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

export default Profile;
