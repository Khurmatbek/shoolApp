import React from "react";
import Work from "../../components/work/Work";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ParticlesComponent from "../../particles";

export const TalantStudent = () => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <GlobalStyle />
      <Header />
      <main>
        <section>
          <Work />
        </section>
      </main>
      <Footer />
    </>
  );
};
