import { Link } from "react-router-dom";
import styled from "styled-components";

export const DrawerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  background-color: #1d2d5b;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 12px;
`;
export const LinkForHeaderNav = styled(Link)`
  font-size: 16px;
  color: #fff;
`;
export const NavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Login = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 250px;
  text-align: center;
  padding: 8px;
  color: #1d2d5b;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 4px;
  background-color: #fff;
`;
