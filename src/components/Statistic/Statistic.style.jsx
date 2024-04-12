import styled from "@emotion/styled";
/*  #1d2d5b */

export const StatisticBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  min-width: 280px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 23px;
  list-style: none;
  border-radius: 16px;
  border: 1px solid #1d2d5b;
  background-color: #f4f8ff;
  @media (min-width: 320px) {
    min-width: 280px;
    width: 100%;
    flex-direction: column;
  }
  @media (min-width: 756px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 238px;
  width: 100%;
  padding: 20px;
`;
export const Numbers = styled.strong`
  margin: 0;
  margin-bottom: 10px;
  color: #1d2d5b;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Desc = styled.p`
  margin: 0;
  color: #403d39;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
