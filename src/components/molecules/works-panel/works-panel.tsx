import * as React from "react";
import styled from "styled-components";
import CONST from "../../../const";

interface IProps {
  data: {
    name: string;
    tecnology: string;
    description: string;
    imgPath: string;
  };
}

const WorksPanel = (props: IProps) => {
  const { name, tecnology, description, imgPath } = props.data;
  return (
    <Wrapper>
      <Name>{name}</Name>
      <P>
        <Img src={imgPath} />
      </P>
      <Tecnology>{tecnology}</Tecnology>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  padding: 16px;
  margin-top: 40px;
  background: ${CONST.STYLE.COLOR.PANELBACKGROUND};
  opacity: 0.8;
  border-radius: 8px;
`;
const Name = styled.div`
  font-size: 2.4em;
`;
const P = styled.p`
  text-align: center;
`;
const Img = styled.img`
  margin: 16px auto;
  width: 80%;
  height: auto;
`;
const Tecnology = styled.div`
  margin-bottom: 16px;
`;
const Description = styled.div`
  margin-bottom: 16px;
`;

export default WorksPanel;
