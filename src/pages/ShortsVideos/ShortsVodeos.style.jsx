import styled from "styled-components";

export const Section = styled.section`
  /* padding: 50px 0; */
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;
export const TitleTop = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 30px;
  color: #1d2d5b;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 350px;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  border: 0;

  @media (max-width: "320px") {
    width: 280px;
  }
  @media (max-width: "420px") {
    width: 360px;
    border-radius: 12px;
  }
`;
export const WrapperText = styled.div`
  padding: ${(props) => props.$top || "20px"} 12px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 15px;
  max-height: 100px;
  height: 100%;
`;
export const Iframe = styled.iframe`
  width: 100%;
`;

export const Title = styled.p`
  margin: 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  overflow: hidden;
`;
export const Desc = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;
export const Left = styled.div`
  width: 350px;
  height: 100vh;
  background-color: #1d2d5b;
  @media (min-width: "320px") {
    display: none;
  }
`;
