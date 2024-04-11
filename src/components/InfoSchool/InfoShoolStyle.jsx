import { Link } from "react-router-dom";
import styled from "styled-components";

export const ParentBox = styled.div`
  padding-top: 71px;
  padding-bottom: 100px;
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
`;
export const Item = styled.li`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ${(props) => props.$end || "start"};
  gap: 24px;
`;
export const Title = styled.h2`
  margin: 0;
  color: #252422;
  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 113.3%; /* 69.113px */
  letter-spacing: -2.44px;
`;
export const Desc = styled.p`
  margin: 0;
  color: #403d39;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
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
  border: ${props=>props.$border||"2px solid transparent"};
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

`;
