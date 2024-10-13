import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Destination from "../pages/Destination";
import Explore from "../pages/Explore";
import Hotel from "../pages/Explore/Hotel";
import Adventure from "../pages/Explore/Adventure";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/destination",
    component: Destination,
  },
  {
    path: "/explore",
    component: Explore,
  },
  {
    path: "/hotel",
    component: Hotel,
  },
  {
    path: "/adventure",
    component: Adventure,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "*",
    component: NotFound,
  },
];
