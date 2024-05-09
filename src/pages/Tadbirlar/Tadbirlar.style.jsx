import styled from "styled-components";

export const Section = styled.section`
  padding: 50px 0;
`;
export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.$column || "row"};
  justify-content: center;
  align-items: ${(props) => props.$center || "center"};
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 30px;
  .item {
    width: 100%;
    justify-content: space-between;
    padding: 15px;
  }
  .item:nth-child(even) {
    .list {
      flex-direction: row-reverse;
    }
  }
  @media (min-width: 320px) {
    .list {
      flex-direction: column;
      gap: 15px;
    }
    .item:nth-child(even) {
      .list {
        flex-direction: column;
      }
    }
    .item {
      max-width: 600px;
      width: 100%;
    }
  }
  @media (min-width: 490px) {
    .list {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .item:nth-child(even) {
      .list {
        flex-direction: column;
      }
    }
  }
  @media (min-width: 750px) {
    .list {
      flex-direction: row;
      align-items: center;
      gap: 30px;
    }
    .item:nth-child(even) {
      .list {
        flex-direction: row-reverse;
      }
    }
    .item {
      max-width: 1200px;
      width: 100%;
      gap: 24px;
    }
    .rightItem{
        gap: 22px;
    }
  }
  @media (min-width: 1110px) {
    .list {
      flex-direction: row;
      align-items: center;
      gap: 100px;
    }
    .item:nth-child(even) {
      .list {
        flex-direction: row-reverse;
      }
    }
  }
`;
export const Item = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: ${(props) => props.$padding || ""};
  border-radius: 10px;
`;
export const Title = styled.strong`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  color: #1d2d5b;
  @media (min-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 490px) {
    font-size: 20px;
  }
  @media (min-width: 1110px) {
    font-size: 30px;
  }
`;
export const Desc = styled.p`
  max-width: 414px;
  width: 100%;
  margin: 0;
  font-size: 17px;
  opacity: 0.7;
  color: #1d2d5b;

  @media (min-width: 320px) {
    font-size: 13px;
  }
  @media (min-width: 490px) {
    font-size: 15px;
  }
  @media (min-width: 1110px) {
    max-width: 600px;
    width: 100%;
    font-size: 18px;
  }
`;
export const TubeLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: red;
  text-decoration: none;
  @media (min-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 490px) {
    font-size: 15px;
  }
`;
export const Time = styled.time`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 6px;
  opacity: 0.4;
  margin: 0;
  color: #1d2d5b;
`;
export const TimeBox = styled.div`
  width: 100%;
  text-align: end;
`;

export const Img = styled.img`
  display: block;
  @media (min-width: 320px) {
    min-width: 250px;
    max-width: 400px;
    width: 100%;
    height: 300px;
  }
`;
