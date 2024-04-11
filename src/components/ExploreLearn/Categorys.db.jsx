import { Strelka } from "./Categorys.decorations";
import { LuSchool } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { SiYoutubeshorts } from "react-icons/si";
import { FaDiscourse } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";

export const CategorysObj = [
  {
    id: 1,
    title: "Qonunlar",
    info: " Qonunlar haqida ma'lumot olish uchun...",
    icon: <LuSchool className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
  },
  {
    id: 2,
    title: "O'qituvchilar",
    info: " O'qituvchilar haqida ma'lumot olish uchun...",
    icon: <GiTeacher className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
  },
  {
    id: 3,
    title: "Iqtidorlilar",
    info: " Iqtidorlilar haqida ma'lumot olish uchun...",
    icon: (
      <MdOutlineLeaderboard className="icon" fontSize={30} color="#1d2d5b" />
    ),
    decaration: <Strelka />,
  },
  {
    id: 4,
    title: "Tadbirlar",
    info: " Tadbirlar haqida ma'lumot olish uchun...",
    icon: <GiTargetPrize className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
  },
  {
    id: 5,
    title: "To'garaklar",
    info: " To'garaklar haqida ma'lumot olish uchun...",
    icon: <FaDiscourse className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
  },
  {
    id: 6,
    title: "Shorts",
    info: "Maktab haqida shorts videolar ko'rish uchun...",
    icon: <SiYoutubeshorts className="icon" fontSize={30} color="#1d2d5b" />,
    decaration: <Strelka />,
  },
];
export default CategorysObj;
