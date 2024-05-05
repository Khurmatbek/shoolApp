import React from "react";
import Work from "../../components/work/Work";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";

export const TalantStudent = () => {
  return (
    <>
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
