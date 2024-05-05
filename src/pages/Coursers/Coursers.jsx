import React from "react";
import Header from "../../components/Header/Header";
import CardItem from "../../components/CardItem/CardItem";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import CourseCard from "../../components/CourseCard/CourseCard";
import styled from "styled-components";
const Section = styled.section`
  padding: 50px 0;
`;
export const Coursers = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <div className="container">
            <h2>Maktabimizda mavjud bo'lgan to'garaklar to'plami</h2>

            <CourseCard />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
