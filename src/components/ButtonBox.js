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
    if (props.k === 1) {
      return "#FCD1D1";
    }
    if (props.k === 2) {
      return "#ECE2E1";
    }
    if (props.k === 3) {
      return "#D3E0DC";
    }
    if (props.k === 4) {
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

const buttonTitle = [
  `인디음악`,
  `아티스트들의 성지`,
  `마이너에서 메이저로`,
  `성지, 소속사 그리고...`,
];

const ButtonBox = ({ changePage, num }) => {
  return (
    <Wrapper>
      {buttonTitle.map((e, index) => (
        <Button
          key={index}
          k={index + 1}
          selected={num === index + 1}
          onClick={() => changePage(index + 1)}
        >
          {e}
        </Button>
      ))}
    </Wrapper>
  );
};

export default ButtonBox;
