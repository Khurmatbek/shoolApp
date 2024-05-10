import React from "react";
import Header from "../../components/Header/Header";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ParticlesComponent from "../../particles";
import Footer from "../../components/footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import {
  Image,
  Item,
  LinkTo,
  List,
  Main,
  Position,
  Section,
  Strong,
  Wrapper,
} from "./Rahbariyat.style";
import { RahbariyatObj } from "./Rahbariyat.db";
import CardItem from "../../components/CardItem/CardItem";

export const Rahbariyat = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <ParticlesComponent id="particles" />
      <GlobalStyle />
      <Header path={path} />
      <Main>
        <Section>
          <div className="container">
            <List>
              {RahbariyatObj.map((rahbar) => {
                return <CardItem key={rahbar.id} rahbar={rahbar} />;
              })}
            </List>
          </div>
        </Section>
      </Main>
      <Footer />
    </>
  );
};
