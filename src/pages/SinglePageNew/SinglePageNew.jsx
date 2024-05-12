import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { IoMdArrowBack } from "react-icons/io";
import {
  Box,
  Button,
  ButtonBox,
  Desc,
  Img,
  List,
  Section,
  Strong,
  Time,
  Title,
} from "./SinglePageNewStyle";
import { CalendarTime } from "./calendarTime.db";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineVerticalAlignBottom } from "react-icons/md";

export const SinglePageNew = () => {
  const { param } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Section>
          <div className="container">
            <div className="wrapper">
              {CalendarTime?.map((item) => {
                if (item.id == param)
                  return (
                    <List key={item.id}>
                      <div>
                        <Img
                          src={item.img}
                          alt={item.user}
                          width={350}
                          height={350}
                        />
                      </div>
                      <Box key={item.id}>
                        <Title>
                          {" "}
                          To'liq malumot
                          <MdOutlineVerticalAlignBottom />
                        </Title>
                        <Desc>
                          <Strong>Mavzu:</Strong>
                          {item.theme}
                        </Desc>
                        <Desc>
                          <Strong>Tashkilotchi:</Strong>
                          {item.user}
                        </Desc>
                        <Desc>
                          <Strong>Tadbirdan Maqsad</Strong>
                          {item.info}
                        </Desc>
                        <Time>
                          <Strong>Sanasi:</Strong>
                          {item.time}
                        </Time>
                        <ButtonBox>
                          <Button
                            onClick={() => {
                              navigate("/");
                            }}>
                            <IoMdArrowBack />
                            Orqaga qaytish
                          </Button>
                        </ButtonBox>
                      </Box>
                    </List>
                  );
              })}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
