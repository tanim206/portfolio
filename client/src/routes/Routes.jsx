import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import Projects from "../components/Projects";
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
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
