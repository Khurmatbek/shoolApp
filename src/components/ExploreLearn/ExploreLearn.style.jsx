import { Link } from "react-router-dom";
import styled from "styled-components";
export const BoxWrapper = styled.div`
  padding-top: 58px;
`;
export const FirstTitle = styled.h3`
  margin: 0;
  color: #252422;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 113.3%; /* 56.65px */
  letter-spacing: -1px;
`;
export const SmallDesc = styled.p`
  margin: 0;
  color: #403d39;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 167.5%; /* 26.8px */
`;
export const ListInfo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  gap: 24px;
`;
export const Item = styled.li`
  max-width: 420px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background-color: var(--Background, #fff);
`;
export const LinkCategorys = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 34px;
  gap: 28px;
  border-radius: 16px;
  border: 1px solid var(--Primary-Lighten, #1d2d5b);
  transition: background-color 0.6s linear;
  &:hover {
    background-color: #1d2d5b;
  }
  &:hover .titleactive {
    color: #fff;
  }
  &:hover .descactive {
    color: #fff;
  }
  &:hover .icon {
    fill: #fff !important;
  }
  &:hover .strelka path {
    stroke: #fff;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InBox = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const TitleInfo = styled.h4`
  margin: 0;
  margin-bottom: 5px;
  color: #252422;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 113.3%; /* 27.192px */
  letter-spacing: -0.48px;
  transition: color 0.6s linear;
`;
export const Info = styled.p`
  max-width: 284px;
  width: 100%;
  margin: 0;
  color: #252422;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  transition: color 0.6s linear;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
