import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;
const Item = styled.div`
  width: 30%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Title = styled.h2``;

const TextBox = styled.ul`
  margin: 0;
  li {
    margin-top: 2vw;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const ToMajor = () => {
  return (
    <Wrapper>
      <Item>
        <img src="images/p3-1.jpeg" alt="p3-1" />
        <Title>이승윤</Title>
        <TextBox>
          <li>사형선고</li>
          <li>폐허가 된다해도</li>
          <li>게인주의</li>
          <li>달이 참 예쁘다고</li>
        </TextBox>
      </Item>
      <Item>
        <img src="images/p3-2.jpeg" alt="p3-2" />
        <Title>검정치마</Title>
        <TextBox>
          <li>everything</li>
          <li>기다린 만큼, 더</li>
          <li>나랑 아니면</li>
          <li>plane jane</li>
        </TextBox>
      </Item>
      <Item>
        <img src="images/p3-3.jpeg" alt="p3-3" />
        <Title>백예린</Title>
        <TextBox>
          <li>square</li>
          <li>Bye bye my blue</li>
          <li>0310</li>
          <li>datoom</li>
        </TextBox>
      </Item>
    </Wrapper>
  );
};

export default ToMajor;
