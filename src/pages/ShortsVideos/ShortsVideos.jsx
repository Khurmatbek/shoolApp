import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { LikeDislikeButton } from "../../components/LikeDislike/LikeDislike";
import {
  Desc,
  Iframe,
  Item,
  Left,
  Section,
  Title,
  TitleTop,
  Wrapper,
  WrapperText,
} from "./ShortsVodeos.style";
import { List } from "antd";

export const ShortsVideos = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <div className="">
            <Wrapper className="wrapper">
              <Left></Left>
              <div>
                <List>
                  <Item>
                    <Iframe
                      width={280}
                      height={550}
                      frameBorder={0}
                      src="https://www.youtube.com/embed/LIF874MgrU0"
                      title="Maktab - Yangi qism (Pul uchun jigarlar)"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen=""></Iframe>
                  </Item>
                </List>
              </div>
            </Wrapper>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
