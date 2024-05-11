import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Rahbariyat } from "../pages/Rahbariyat/Rahbariyat";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { TalantStudent } from "../pages/TalantStudent/TalantStudent";
import { Coursers } from "../pages/Coursers/Coursers";
import OnlineCourses from "../pages/onlineCourses/onlineCourses";
import Tadbirlar from "../pages/Tadbirlar/Tadbirlar";
/*  routes part */
/*  routes test */
export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rahbariyat",
    element: <Rahbariyat />,
  },

  {
    path: "/iqtidorli",
    element: <TalantStudent />,
  },
  {
    path: "/togaraklar",
    element: <Coursers />,
  },
  {
    path: "/online-lessons",
    element: <OnlineCourses />,
  },
  {
    path: "/tadbirlar",
    element: <Tadbirlar/>,
  },
]);
