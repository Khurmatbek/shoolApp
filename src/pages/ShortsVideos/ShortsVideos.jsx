import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { LikeDislikeButton } from "../../components/LikeDislike/LikeDislike";
import {
  Desc,
  Item,
  Section,
  Title,
  TitleTop,
  Wrapper,
  WrapperText,
} from "./ShortsVodeos.style";

export const ShortsVideos = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <div className="container">
            <Wrapper className="wrapper">
              <TitleTop>Maktabimiz haqida qisqa videolar</TitleTop>
              <ul>
                <Item>
                  <video width="300" height="350" controls autoFocus autoPlay>
                    <source src="" type="video/mp4" />
                  </video>
                  <WrapperText>
                    <Title>
                      <strong>Title: </strong> Maktabdagi holat
                    </Title>
                    <Title>
                      <strong>Description: </strong>
                      <Desc>salom salom salom salom salom salom salom salo salom salom salom</Desc>
                    </Title>
                  </WrapperText>
                  <WrapperText $top="5px">
                    <LikeDislikeButton />
                    <p className="author">Olloyorov Xurmatbek</p>
                  </WrapperText>
                </Item>
              </ul>
            </Wrapper>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
