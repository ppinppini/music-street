import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;
const Item = styled.div`
  width: 48%;
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
  padding-left: 20px;
`;

const HolyLand = () => {
  return (
    <Wrapper>
      <Item>
        <img src="images/p2-1.jpeg" alt="p2-1" />
        <Title>언플러그드 홍대점</Title>
        <TextBox>
          <li>
            월요일 저녁, 젊은 예술가들이 노래를 한다. 한국인디 음악의 성지
            언플러그드
          </li>
          <li>
            언플러그드는 홍대 인디문화에서 빠질 수 없는 중요한 공간이다. 무려
            아이유도 "잠 못드는 밤에 비는 내리고" 뮤비를 홍대 언플러그드에서
            촬영했다.
          </li>
          <li>
            언플러그드는 지상1층과 지하1층 두 개의 층으로 구성되어있다. 매주
            월요일마다 신인 아티스트들을 만날 수 있는 오픈마이크가 구성되어있다.
          </li>
        </TextBox>
      </Item>
      <Item>
        <img src="images/p2-2.jpeg" alt="p2-2" />
        <Title>언플러그드 신촌점</Title>
        <TextBox>
          <li>홍대점과 같은 특징을 가지고 있다.</li>
          <li>현대백화점 빌딩 내에 위치해 있다.</li>
          <li>
            어썸나이트 라는 이름으로 매주 수요일마다 오픈마이크를 진행한다.
          </li>
        </TextBox>
      </Item>
    </Wrapper>
  );
};

export default HolyLand;
