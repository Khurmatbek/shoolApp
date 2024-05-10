import styled from "styled-components";
export const Section = styled.section`
  padding: 130px 0;
`;
export const ParentList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 320px) {
    flex-direction: column;
    padding: 10px 0;
  }
  @media (min-width: 675px) {
    flex-direction: row;
    padding: 30px 0;
  }
  @media (min-width: 1000px) {
    flex-direction: column;

  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.$row || "column"};
  align-items: center;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  gap: 20px;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const Item = styled.li`
  display: flex;
  text-align: start;
  flex-direction: ${(props) => props.$reverse || "column"};
  justify-content: center;
  align-items: center;
  padding: 5px;
  &:nth-child(even) {
    .reverselist {
      @media (min-width: 1000px) {
        flex-direction: row-reverse;
      }
    }
  }
`;
export const Name = styled.h3`
  margin: 0;
  color: #252422;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (min-width: 320px) {
    font-size: 26px;
  }
`;
export const Info = styled.p`
  color: #403d39;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
`;
export const Img = styled.img`
  border-radius: 20px;
  @media (min-width: 320px) {
    max-width: 550px;
    width: 100%;
    height: 300px;
  }
  @media (min-width: 500px) {
    height: 380px;
  }
  @media (min-width: 1000px) {
    width: 550px;
  }
`;
