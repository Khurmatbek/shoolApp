import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";

export const ErrorPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <section>Page Not Found</section>
      </main>
      <Footer />
    </>
  );
};