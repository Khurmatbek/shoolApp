import styled from "styled-components";

export const Section = styled.section`
  padding: 150px 0 100px;
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 100px;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 60px;
  }
  @media (min-width: 1180px) {
    flex-direction: row;
    gap: 100px;
  }
`;

export const Box = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 16px;
  @media (min-width: 320px) {
    width: 280px;
    padding: 5px;
  }
  @media (min-width: 450px) {
    max-width: 700px;
    width: 100%;
    padding: 5px;
  }
`;
export const Img = styled.img`
  display: block;
  border-radius: 5px;
  @media (min-width: 320px) {
    width: 250px;
    height: 280px;
  }
  @media (min-width: 450px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 450px) {
    width: 320px;
    height: 320px;
  }
  @media (min-width: 450px) {
    width: 350px;
    height: 350px;
  }
`;
export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 40px;
  color: #1d2d5b;
  @media (min-width: 320px) {
    font-size: 25px;
  }
  @media (min-width: 600px) {
    font-size: 35px;
  }
  @media (min-width: 1000px) {
    font-size: 40px;
  }
`;
export const Strong = styled.strong`
  color: #1d2d5d;
  font-size: 20px;
  opacity: 0.9;
  letter-spacing: 2px;
  @media (min-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 600px) {
    font-size: 20px;
  }
  @media (min-width: 1000px) {
    font-size: 21px;
  }
`;
export const Desc = styled.p`
  margin: 0;
  color: #1d2d5d;
`;
export const Time = styled.time`
  color: #1d2d5d;
  margin-bottom: 30px;
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  color: #1d2d5d;
`;
