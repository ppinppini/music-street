import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ButtonBox from "./components/ButtonBox";
import Footer from "./components/Footer";
import InfoBox from "./components/InfoBox";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ivory;
  }
`;
const Main = styled.div`
  min-height: 100vh;
  margin: 0 20px;
`;
const Title = styled.h1`
  font-family: ACCchildrenheartOTF-Regular;
  padding: 140px 0 100px;
  margin: 0;
  text-align: center;
  color: #333;
  font-size: 100px;
  @media (max-width: 768px) {
    padding: 70px 0 50px;
    font-size: 40px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const App = () => {
  const [category, setCategory] = useState("인디음악");
  const changePage = (e) => {
    setCategory(e);
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <Title>Music Street</Title>
        <Content>
          <InfoBox category={category} />
          <ButtonBox changePage={changePage} category={category} />
        </Content>
      </Main>
      <Footer />
    </>
  );
};

export default App;
