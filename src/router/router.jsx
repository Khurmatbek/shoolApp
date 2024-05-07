import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Rahbariyat } from "../pages/Rahbariyat/Rahbariyat";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { TalantStudent } from "../pages/TalantStudent/TalantStudent";
import { Coursers } from "../pages/Coursers/Coursers";
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

]);
