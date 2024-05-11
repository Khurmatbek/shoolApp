import React from "react";
import Work from "../../components/work/Work";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ParticlesComponent from "../../particles";
import styled from "styled-components";
const Section = styled.section`
  padding: 75px 0;
`;

export const TalantStudent = () => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <Work />
        </Section>
      </main>
      <Footer />
    </>
  );
};
