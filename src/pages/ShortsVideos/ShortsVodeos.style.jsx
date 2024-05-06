import styled from "styled-components";

export const Section = styled.section`
  padding: 50px 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
export const TitleTop = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 30px;
  color: #1d2d5b;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  background-color: #1d2d5b;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.7s linear;

  &:hover {
    -webkit-box-shadow: 0px 1px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 11px 0px rgba(0, 0, 0, 0.75);
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
