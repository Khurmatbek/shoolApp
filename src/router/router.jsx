import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Rahbariyat } from "../pages/Rahbariyat/Rahbariyat";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { TalantStudent } from "../pages/TalantStudent/TalantStudent";
import { Coursers } from "../pages/Coursers/Coursers";
import { ShortsVideos } from "../pages/ShortsVideos/ShortsVideos";
import { OnlineLessons } from "../pages/onlineCourses/OnlineCourses";
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
    path: "/online-lessons",
    element: <OnlineLessons />,
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
    path: "/shorts",
    element: <ShortsVideos />,
  },
]);
