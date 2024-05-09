import { Link } from "react-router-dom";
import styled from "styled-components";
/*  #fff --> color */
export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 30px 0 26.5px;
  background-color: #1d2d5b;
  @media (min-width: 30px) {
    display: none;
  }
  @media (min-width: 320px) {
    display: block;
    padding: 28px 0;
    border: none;
  }
  @media (min-width: 1000px) {
    padding: 30px 0;
    .MuiButtonBase-root,
    .none {
      display: none;
    }
  }
`;
export const SiteLogo = styled(Link)`
  margin-right: 32px;
  color: ${(props) => props.$color || "#fff"};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
  @media (min-width: 320px) {
    margin-right: 0;
    font-size: 20px;
    font-weight: 600;
  }
  @media (min-width: 1000px) {
    font-size: 32px;
    margin-right: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperIn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1000px) {
    display: block;
  }
`;
export const ListHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 24px;
  @media (min-width: 320px) {
    display: flex;
  }
  @media (min-width: 1000px) {
    display: flex;
  }
`;
export const Links = styled(Link)`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-left: 32px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  &:hover {
    opacity: 0.8;
  }
`;
export const Items = styled.li`
  border-left: ${(props) => props.$left || ""};
`;
export const StyleItemForTriangle = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &::after {
    width: 12px;
    height: 7px;
    position: absolute;
    background-image: url("triangle.svg");
    background-size: 12px 7px;
    background-position: center;
    background-repeat: no-repeat;
    top: calc(50% - 3.5px);
    left: calc(50% + 15px);
    content: "";
  }
`;

export const Select = styled.select`
  padding: 2px 25px;
  border: 0;
  outline: none;
  appearance: none;
  background-color: transparent;
  border-right: 2px solid #fff;
  font-size: 15px;
  color: #fff;
`;
export const Option = styled.option`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 19px */
`;
export const BorderLink = styled(Link)`
  padding-right: 20px;
  border-right: 2px solid #fff;
`;
export const LoginLink = styled(Link)`
  @media (min-width: 320px) {
    display: none;
    width: 90px;
    font-size: 14px;
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    width: 131px;
    text-align: center;
    padding: 8px;
    color: #1d2d5b;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 4px;
    background-color: #fff;
  }
`;
/*  mobile */
