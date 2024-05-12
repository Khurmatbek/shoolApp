import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import styled from "styled-components";
import { IoFolderOpenOutline } from "react-icons/io5";
const Section = styled.section`
  height: 60vh;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  text-align: center;
  font-size: 50px;
  color: #1d2d5b;
  @media (min-width: 320px) {
    font-size: 30px;
  }
  @media (min-width: 720px) {
    font-size: 40px;
  }
  @media (min-width: 1000px) {
    font-size: 50px;
  }
`;

export const ErrorPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <ErrorMessage>
            <IoFolderOpenOutline />
            Page Not Found !!
          </ErrorMessage>
        </Section>
      </main>
      <Footer />
    </>
  );
};
