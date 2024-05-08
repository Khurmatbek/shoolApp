import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import Header from "../../components/Header/Header";
import AccordionExpandDefault from "../../components/Accarddion/Accardion";
import Footer from "../../components/footer/Footer";
import { Section } from "./onlineCourses.style";

const onlineCourses = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <div className="container">
            <AccordionExpandDefault />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default onlineCourses;
