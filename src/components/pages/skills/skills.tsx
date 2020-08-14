import * as React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillsContent>
      <h1>Skills</h1>
    </SkillsContent>
  );
};

const SkillsContent = styled.div`
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

export default Skills;
