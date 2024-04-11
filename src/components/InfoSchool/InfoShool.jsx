import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Desc,
  ImgBox,
  Item,
  LinkBox,
  List,
  ParentBox,
  Title,
  VideoBox,
  ViewVideoLink,
} from "./InfoShoolStyle";
/*  #1d2d5b --> color */

const InfoShool = () => {
  return (
    <ParentBox>
      <div className="container">
        <div className="wrapper">
          <List>
            <Item>
              <Title>
                Yangihayot tumani <br />
                8-sonli umumta'lim maktabi
              </Title>
              <Desc>
                Experience the joy of cooking in a whole new way with our
                engaging online cooking classes. Learn from the chefs, share
                your unique culinary knowledge, and join our growing foodie
                community. With COOK, learning, and teaching becomes a shared
                passion.
              </Desc>
              <VideoBox>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="#1d2d5b"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path
                    stroke="#1d2d5b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 8l6 4-6 4V8z"></path>
                </svg>
                Learn more in the COOK video
              </VideoBox>
              <LinkBox>
                <ViewVideoLink to={"/"}>Find Your Tutor</ViewVideoLink>
                <ViewVideoLink
                  $color="#1d2d5b"
                  $border="2px solid #1d2d5b"
                  $bgcolor="#fff"
                  to={"/"}>
                  Join Our Chefs
                </ViewVideoLink>
              </LinkBox>
            </Item>
            <Item $end={"end"}>
              <ImgBox></ImgBox>
            </Item>
          </List>
        </div>
      </div>
    </ParentBox>
  );
};

export default InfoShool;
