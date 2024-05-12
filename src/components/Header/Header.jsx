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
export const Header = ({ path }) => {
  return (
    <HeaderStyle>
      <div className="container">
        <WrapperIn className="wrapper">
          <WrapperIn>
            <SiteLogo to={"/"}>8School</SiteLogo>
            <Nav className="nav">
              <ListHeader>
                <Items $left={"2px solid #fff "}>
                  <Links
                    to={"/rahbariyat"}
                    style={{
                      opacity: path === "/rahbariyat" ? "0.6" : "1",
                    }}>
                    <GiTeacher color="#fff" />
                    Rahbariyat
                  </Links>
                </Items>
                <Items>
                  <Links
                    target="_blank"
                    to={"https://t.me/emaktab_uz"}
                    style={{
                      opacity: path === "/yangiliklar" ? "0.6" : "1",
                    }}>
                    <IoNewspaper color="#fff" />
                    Yangiliklar
                  </Links>
                </Items>
                <Items>
                  <Links
                    to={"/online-lessons"}
                    style={{
                      opacity: path === "/online-lessons" ? "0.6" : "1",
                    }}>
                    <MdPlayLesson color="#fff" />
                    Online darslar
                  </Links>
                </Items>
              </ListHeader>
            </Nav>
          </WrapperIn>
          <ListHeader>
            <StyleItemForTriangle>
              <Select id="select">
                <Option value="uz">UZ</Option>
                <Option value="en">EN</Option>
                <Option value="ru">RU</Option>
              </Select>
            </StyleItemForTriangle>
            <li>
              <BorderLink
                target="_blank"
                to={"https://sinaps.uz/bilasizmi/3904/"}>
                <RiSchoolLine color="#fff" fontSize={20} />
              </BorderLink>
            </li>
            <li>
              <LoginLink to={"/"}>
                E-mail <IoIosLogIn />
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
