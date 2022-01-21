import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  @media (max-width: 768px) {
    flex-direction: row;
    -webkit-justify-content: flex-end;
    width: unset;
  }
`;
const Button = styled.button`
  cursor: pointer;
  height: 100px;
  font-family: ACCchildrenheartOTF-Regular;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  border: none;
  white-space: pre-wrap;
  transition: ease-in-out 0.3s;
  border-radius: 0 20px 20px 0px;
  word-break: keep-all;
  width: 120px;
  background-color: ${(props) => {
    if (props.category === "인디음악") {
      return "#FCD1D1";
    }
    if (props.category === "아티스트들의 성지") {
      return "#ECE2E1";
    }
    if (props.category === "마이너에서 메이저로") {
      return "#D3E0DC";
    }
    if (props.category === "성지, 소속사 그리고...") {
      return "#AEE1E1";
    }
  }};
  ${(props) =>
    props.selected &&
    css`
      font-size: 25px;
    `}
  @media (max-width: 768px) {
    height: 50px;
    border-radius: 10px 10px 0 0;
    font-size: 10px;
    width: 60px;
    ${(props) =>
      props.selected &&
      css`
        font-size: 10px;
      `}
  }
`;

const categoryList = [
  "인디음악",
  "아티스트들의 성지",
  "마이너에서 메이저로",
  "성지, 소속사 그리고...",
];

const ButtonBox = ({ changePage, category }) => {
  return (
    <Wrapper>
      {categoryList.map((e) => (
        <Button
          key={e}
          category={e}
          selected={category === e}
          onClick={() => changePage(e)}
        >
          {e}
        </Button>
      ))}
    </Wrapper>
  );
};

export default ButtonBox;
