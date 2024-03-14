import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import About from "pages/About";
//import Works from "pages/Works";
import Contact from "pages/Contact";
import OrderManagementPage from "pages/order";
import ProductsManagementPage from "pages/Product";
import OrderCalendarView from "pages/Calendarview";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "Product",
      element: <ProductsManagementPage />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "Order",
      element: <OrderManagementPage />,
    },
    {
      path: "Calendarview",
      element: <OrderCalendarView/>,
    },
  ]);

  return element;
};

export default ProjectRoutes;
