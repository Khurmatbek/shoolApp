import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Drawer.style.jsx";
import {
  DrawerButton,
  LinkForHeaderNav,
  Login,
  NavItem,
} from "./Drawer.style.jsx";
import { LoginLink, SiteLogo } from "../Header/Header.style.jsx";
import { GiTeacher } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";
import { MdPlayLesson } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
export default function Drawers() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100vh", backgroundColor: "#1d2d5b" }}
      role="presentation"
      onClick={toggleDrawer(false)}>
      <List sx={{ padding: "15px" }}>
        <li>
          <SiteLogo $color="#fff">8School</SiteLogo>
        </li>
      </List>
      <Divider />
      <List
        sx={{
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
        <NavItem>
          <GiTeacher color="#fff" />{" "}
          <LinkForHeaderNav to={"/rahbariyat"}>Rahbariyat</LinkForHeaderNav>
        </NavItem>
        <NavItem>
          <MdPlayLesson color="#fff" />
          <LinkForHeaderNav to={"/online-lessons"}>
            Online Darslar
          </LinkForHeaderNav>
        </NavItem>
        <NavItem>
          <IoNewspaper color="#fff" />
          <LinkForHeaderNav to={"/yangiliklar"}>Yangiliklar</LinkForHeaderNav>
        </NavItem>
      </List>
      <Divider />
      <List
        sx={{
          padding: "15px",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
        }}>
        <li>
          <Login>
            Log In <IoIosLogIn />
          </Login>
        </li>
      </List>
    </Box>
  );

  return (
    <div className="none">
      <DrawerButton onClick={toggleDrawer(true)}>
        <IoReorderThreeOutline fontSize={20} color="#fff" />
      </DrawerButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
