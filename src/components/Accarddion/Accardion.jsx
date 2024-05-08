import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { coursesData } from "../../pages/onlineCourses/onlineCourses.db";
import styled from "styled-components";
import { CiYoutube } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";

export const Img = styled.img`
  display: block;
  border-radius: 50%;
`;
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${(props) => props.$tg || "red"};
`;
export const FlexElement = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
`;
export const Title = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export default function AccordionExpandDefault() {
  return (
    <div>
      {coursesData.map((item) => {
        return (
          <Accordion
            key={item.id}
            style={{
              backgroundColor: "#fafafa",
              color: "#1d2d5b",
            }}
            defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header">
              <Title>{item.science}</Title>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <FlexElement>
                  <Img width={60} height={60} src={item.img} alt={item.desc} />
                  <p>{item.desc}</p>
                </FlexElement>
                <FlexElement>
                  <SocialLink target="_blank" href={item.you_tube}>
                    <CiYoutube color="red" fontSize={22} />
                    You Tube
                  </SocialLink>
                  <SocialLink
                    target="_blank"
                    $tg="#077cd6"
                    href={item.you_tube}>
                    <PiTelegramLogo color="077cd6" fontSize={22} />
                    Telegram
                  </SocialLink>
                </FlexElement>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
