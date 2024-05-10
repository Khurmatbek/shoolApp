import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import Header from "../../components/Header/Header";
import AccordionExpandDefault from "../../components/Accarddion/Accardion";
import Footer from "../../components/footer/Footer";
import { Section } from "./onlineCourses.style";
import { useLocation } from "react-router-dom";
import { TitleCourse } from "../Tadbirlar/Tadbirlar.style";
import { FaListOl } from "react-icons/fa6";
import ParticlesComponent from "../../particles";

const onlineCourses = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <ParticlesComponent id="particles" />
      <GlobalStyle />
      <Header path={path} />
      <main>
        <Section>
          <div className="container">
            <TitleCourse>
              <FaListOl />
              Online Kurslar
            </TitleCourse>
            <AccordionExpandDefault />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default onlineCourses;
