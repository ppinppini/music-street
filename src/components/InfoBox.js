import React from "react";
import styled from "styled-components";
import Etc from "./Info/Etc";
import HolyLand from "./Info/HolyLand";
import IndieMusic from "./Info/IndieMusic";
import ToMajor from "./Info/ToMajor";

const Info = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 0 200px 5vw;
  font-size: 2vw;
  padding: 5vw 3vw;
  border-radius: 30px 0 30px 30px;
  font-family: ACCchildrenheartOTF-Regular;
  white-space: pre-wrap;
  transition: ease-in-out 0.3s;
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
  @media (max-width: 768px) {
    margin: 0;
    padding: 7vw 5vw;
    border-radius: 20px 0 20px 20px;
    width: 100%;
  }
`;

const InfoBox = ({ category }) => {
  if (category === "인디음악")
    return (
      <Info category={category}>
        <IndieMusic />
      </Info>
    );
  if (category === "아티스트들의 성지")
    return (
      <Info category={category}>
        <HolyLand />
      </Info>
    );
  if (category === "마이너에서 메이저로")
    return (
      <Info category={category}>
        <ToMajor />
      </Info>
    );
  if (category === "성지, 소속사 그리고...")
    return (
      <Info category={category}>
        <Etc />
      </Info>
    );
};

export default InfoBox;
