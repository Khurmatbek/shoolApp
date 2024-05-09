import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { MdAccessTime } from "react-icons/md";
import { ImYoutube2 } from "react-icons/im";
import { GiFlowers } from "react-icons/gi";
import {
  Desc,
  Img,
  Item,
  List,
  Section,
  Time,
  TimeBox,
  Title,
  TubeLink,
} from "./Tadbirlar.style";
import { TadbirlarArr } from "./tadbirlar.db";
const Tadbirlar = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <div className="container">
            <div className="wrapper">
              <List $column="column">
                {TadbirlarArr.map((item) => {
                  return (
                    <Item className="item">
                      <List className="list" $center="start">
                        <Item key={item.id}>
                          <Img
                            style={{
                              borderRadius: "10px",
                            }}
                           
                            src={item.img}
                            alt={item.desc}
                          />
                        </Item>
                              <Item className="rightItem"          $padding="10px">
                          <Title>
                            <GiFlowers />
                            {item.title}
                          </Title>
                          <Desc>{item.desc}</Desc>
                          <TubeLink target="_blank" href={item.you_tube}>
                            <ImYoutube2 fontSize={40} color="red" /> You Tube
                            orqali videosini ko'rish
                          </TubeLink>
                          <TimeBox>
                            <Time dateTime={item.date}>
                              <MdAccessTime />
                              {item.date}
                            </Time>
                          </TimeBox>
                        </Item>
                      </List>
                    </Item>
                  );
                })}
              </List>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Tadbirlar;
