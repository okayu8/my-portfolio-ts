import * as React from "react";
import styled from "styled-components";
// import data from "data/profile.json";

// export type Data = typeof data;

const Profile = () => {
  return (
    <ProfileContent>
      <h1>Profile</h1>
      <StyledName>片岡 祐太郎 (カタオカ ユウタロウ)</StyledName>
      <P>1990年生まれ。北海道出身のWEBエンジニアです。</P>
      <P>
        フロントエンド開発が主ですが、サーバーサイドやブロックチェーンの開発、CMSのカスタマイズ等の仕事もします。
      </P>
      <P>
        現在は React + TypeScript環境でのフロントエンド構築にハマっています。
        <br />
        興味のある技術は Next.js,Gatsby, WebGLです。
      </P>
      <P>趣味は美味いカレーとラーメンを探すことです。</P>
      <StyledContact />
    </ProfileContent>
  );
};

const ProfileContent = styled.div`
  text-align: left;
  margin: 0 auto;
  max-width: 1030px;
  height: 70vh;
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
