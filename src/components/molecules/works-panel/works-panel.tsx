import * as React from "react";
import styled from "styled-components";

interface IProps {
  dto: {
    name: string;
    tecnology: string;
    description: string;
    imgPath: string;
  };
}

const WorksPanel = (props: IProps) => {
  const { name, tecnology, description, imgPath } = props.dto;
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Tecnology>{tecnology}</Tecnology>
      <Description>{description}</Description>
      <Img src={imgPath} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Name = styled.div``;
const Tecnology = styled.div``;
const Description = styled.div``;
const Img = styled.img``;

export default WorksPanel;
