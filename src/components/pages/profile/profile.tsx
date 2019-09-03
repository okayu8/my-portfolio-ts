import * as React from "react";
import styled from "styled-components";
import data from "data/profile.json";

export type Data = typeof data;

const Profile = () => {
  return <StyledProfile>{data.name}</StyledProfile>;
};

const StyledProfile = styled.div``;

export default Profile;
