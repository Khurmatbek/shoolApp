import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperEventImage = styled.div`
  position: relative;
  width: 280px;
  height: 240px;
  overflow: hidden;
`;
export const ImageDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.background};
  background-size: 100%;
  transition: all 0.5s linear;
`;
export const WrapperEventContent = styled.div`
  padding: 20px;
`;
export const DateSpan = styled.span`
  position: absolute;
  width: 80px;
  padding: 10px;
  background-color: #3e75a99b;
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  left: 0;
  bottom: 0;
`;
export const TextParag = styled(Link)`
  display: block;
  font-size: 12px;
  color: #3e76a9;
  font-weight: 600;
`;
export const TextStrong = styled.strong`
  margin-bottom: 10px;
  display: block;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
export const WrapperEvent = styled.div`
  display: inline-block;
  border: 1px solid transparent;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    ${ImageDiv} {
      transform: scale(1.1);
    }
  }
`;
export const TitleH3 = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1px;
`;
export const WrapperLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const SectionEvent = styled.section`
  margin-bottom: 50px;
`;
