import { Link } from "react-router-dom";
import styled from "styled-components";

export const ParentBox = styled.div`
  padding-top: 71px;
  padding-bottom: 100px;
  @media (min-width: 320px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }
  @media (min-width: 1000px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 20px;
  @media (min-width: 320px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ${(props) => props.$end || "start"};
  gap: 24px;
  @media (min-width: 320px) {
    gap: 18px;
  }
  @media (min-width: 1000px) {
    gap: 24px;
  }
`;
export const Title = styled.h2`
  margin: 0;
  color: #252422;
  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 69.113px;
  letter-spacing: -1.9px;
  @media (min-width: 320px) {
    font-size: 29px;
    line-height: 50px;
  }
  @media (min-width: 1000px) {
    font-size: 40px;
    line-height: 69.113px;
  }
  @media (min-width: 1300px) {
    font-size: 60px;
    line-height: 69.113px;
  }
`;
export const Desc = styled.p`
  margin: 0;
  color: #403d39;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  @media (min-width: 576px) {
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    font-size: 16px;
  }
`;
export const VideoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;
export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (min-width: 320px) {
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 700px) {
    justify-content: space-between;
  }
  @media (min-width: 1000px) {
    justify-content: start;
    gap: 20px;
  }
`;
export const ViewVideoLink = styled(Link)`
  width: 153px;
  padding: 8px;
  text-align: center;
  color: ${(props) => props.$color || "#fff"};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 4px;
  background-color: ${(props) => props.$bgcolor || "#1d2d5b"};
  border: ${(props) => props.$border || "2px solid transparent"};
  @media (min-width: 320px) {
    width: 130px;
    font-size: 14px;
  }
  @media (min-width: 400px) {
    width: 170px;
    font-size: 16px;
  }
  @media (min-width: 576px) {
    width: 250px;
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    width: 180px;
  }
`;
/*  right  part style */

export const ImgBox = styled.div`
  width: 90%;
  height: 416px;
  overflow: hidden;
  background-image: url("schoolchildren.avif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 32px;
  @media (min-width: 320px) {
    width: 100%;
    height: 300px;
  }
  @media (min-width: 576px) {
    width: 100%;
    height: 400px;
    background-size: 100% 100%;
  }
  @media (min-width: 576px) {
    width: 100%;
    height: 450px;
    background-size: 100% 100%;
  }
  @media (min-width: 1000px) {
    width: 90%;
    height: 416px;
    overflow: hidden;
    background-image: url("schoolchildren.avif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 32px;
  }
`;
