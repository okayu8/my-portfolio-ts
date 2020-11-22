import * as React from "react";
import styled from "styled-components";
import worksDto from "data/works.json";
import WorksPanel from "../../molecules/works-panel";

// TODO:JSONの型定義したい

const Work = () => {
  return (
    <WorkContent>
      <h1>Work</h1>
      <ContentWrapper>
        {worksDto.map((data, index: number) => {
          return <WorksPanel key={index} data={data} />;
        })}
      </ContentWrapper>
    </WorkContent>
  );
};

const WorkContent = styled.div`
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

const ContentWrapper = styled.div`
  margin-bottom: 100px;
`;

export default Work;
