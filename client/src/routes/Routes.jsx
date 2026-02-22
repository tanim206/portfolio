import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import Projects from "../components/Projects";
import Stacks from "../components/Stacks";
innerWidth;
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "*", element: <NotFound /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/stacks", element: <Stacks /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
