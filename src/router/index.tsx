import { createBrowserRouter } from "react-router-dom";
import { render } from '@react-email/render';
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import CuscoCity from "../pages/CuscoCity";
import IncaTrail from "../pages/IncaTrail";
import TourList from "../pages/Tours/ToursList";
import ListTours from "../pages/ListTours";
import Contact from "../Contact";
import MuseumCusco from "../pages/MuseumCusco";
import Rainbow from "../pages/Rainbow";
import SacredValley from "../pages/SacredValley";
import Humantay from "../pages/Humantay";
import Login from "../pages/Login";
import Mail from "../emails/mail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cusco-city",
    element: <CuscoCity />,
  },
  {
    path: "/email",
    element: <Mail/>,
  },
]);
