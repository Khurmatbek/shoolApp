import { Strelka } from "./Categorys.decorations";
import { LuSchool } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { SiYoutubeshorts } from "react-icons/si";
import { FaDiscourse } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";

export const CategorysObj = [
  {
    id: 1,
    title: "Qonunlar",
    info: " Qonunlar haqida ma'lumot olish uchun...",
    icon: <LuSchool className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
    path: "https://lex.uz/docs/-3137130",
  },
  {
    id: 2,
    title: "Emaktab",
    info: " Emaktab haqida ma'limot olish uchun",
    icon: <GiTeacher className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
    path: "https://login.emaktab.uz/",
  },
  {
    id: 3,
    title: "Iqtidorlilar",
    info: " Iqtidorlilar haqida ma'lumot olish uchun...",
    icon: (
      <MdOutlineLeaderboard className="icon" fontSize={30} color="#1d2d5b" />
    ),
    decaration: <Strelka />,
    path: "/iqtidorli",
  },
  {
    id: 4,
    title: "Tadbirlar",
    info: " Tadbirlar haqida ma'lumot olish uchun...",
    icon: <GiTargetPrize className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
    path: "/tadbirlar",
  },
  {
    id: 5,
    title: "To'garaklar",
    info: " To'garaklar haqida ma'lumot olish uchun...",
    icon: <FaDiscourse className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
    path: "/togaraklar",
  },
  {
    id: 6,
    title: "Online Kitoblar",
    info: "Elektron kutbxona orqali kitoblarni o'qishingiz mumkin..",
    icon: <IoLibraryOutline className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
    path: "https://unilibrary.uz/",
  },
];
export default CategorysObj;
