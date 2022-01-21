import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 100px;
  display: flex;
  margin-top: 300px;
  text-align: center;
  background-color: #333;
  color: ivory;
  height: 100vh;
  font-family: ACCchildrenheartOTF-Regular;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 100px;
    font-size: 40px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      Contack Me
      <br />
      bnm0218@naver.com
    </Wrapper>
  );
};

export default Footer;
