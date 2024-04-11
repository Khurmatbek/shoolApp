
import { Link } from "react-router-dom";
import {
  BorderLink,
  HeaderStyle,
  Items,
  Links,
  ListHeader,
  LoginLink,
  Nav,
  Option,
  Select,
  SiteLogo,
  StyleItemForTriangle,
  WrapperIn,
} from "./Header.style";
import { IoIosLogIn } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";
import { MdPlayLesson } from "react-icons/md";
import { RiSchoolLine } from "react-icons/ri";
import Drawers from "../Drawer/Dreawer";
const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <WrapperIn className="wrapper">
          <WrapperIn>
            <SiteLogo to={"/"}>8School</SiteLogo>
            <Nav className="nav">
              <ListHeader>
                <Items $left={"2px solid #1d2d5b "}>
                  <Links to={"/"}>
                    <GiTeacher color="#1d2d5b" />
                    Rahbariyat
                  </Links>
                </Items>
                <Items>
                  <Links to={"/"}>
                    <IoNewspaper color="#1d2d5b" />
                    Yangiliklar
                  </Links>
                </Items>
                <Items>
                  <Links to={"/"}>
                    <MdPlayLesson color="#1d2d5b" />
                    Online darslar
                  </Links>
                </Items>
              </ListHeader>
            </Nav>
          </WrapperIn>
          <ListHeader >
            <StyleItemForTriangle>
              <Select id="select">
                <Option value="uz">UZ</Option>
                <Option value="en">EN</Option>
                <Option value="ru">RU</Option>
              </Select>
            </StyleItemForTriangle>
            <li>
              <BorderLink to={"/"}>
                <RiSchoolLine color="#1d2d5b" fontSize={20} />
              </BorderLink>
            </li>
            <li>
              <LoginLink to={"/"}>
                Log In <IoIosLogIn />
              </LoginLink>
            </li>
          </ListHeader>
          <Drawers />
        </WrapperIn>
      </div>
    </HeaderStyle>
  );
};

export default Header;
