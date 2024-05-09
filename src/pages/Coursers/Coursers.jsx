// import React from "react";
import Header from "../../components/Header/Header";
// import CardItem from "../../components/CardItem/CardItem";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
// import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import CourseCard from "../../components/CourseCard/CourseCard";
import styled from "styled-components";
import { TitleTadbirlar } from "../Tadbirlar/Tadbirlar.style";
import { BiSolidVideos } from "react-icons/bi";
import ParticlesComponent from "../../particles";
const Section = styled.section`
  margin-top: 120px;
  padding-bottom:50px ;
`;
export const Coursers = () => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <div className="container">

            <TitleTadbirlar style={{ marginBottom: "20px" }}>
              <BiSolidVideos fontSize={25} />
              Maktabimizda mavjud bo'lgan to'garaklar to'plami
            </TitleTadbirlar>

            <h2>{"Maktabimizda mavjud bo'lgan to'garaklar to'plami"}</h2>

            <CourseCard />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
