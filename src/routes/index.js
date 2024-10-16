import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Destination from "../pages/Destination";
import Explore from "../pages/Explore";
import Hotel from "../pages/Explore/Hotel";
import Adventure from "../pages/Explore/Adventure";
import AdventureDetail from "../pages/Explore/Adventure/AdventureDetail";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
import DestinationDetail from "../pages/Destination/DestinationDetail";
import Tour from "../pages/Tour";
import TourDetail from "../pages/Tour/TourDetail";
import Scenery from "../pages/Scenery";
import SceneryDetail from "../pages/Scenery/SceneryDetail";
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
    path: "/destination/:country",
    component: DestinationDetail,
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
    path: "/adventure/:type",
    component: AdventureDetail,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/scenery",
    component: Scenery,
  },
  {
    path: "/scenery/:scenery",
    component: SceneryDetail,
  },
  {
    path: "/tour",
    component: Tour,
  },
  {
    path: "/tour/:tourID",
    component: TourDetail,
  },
  {
    path: "*",
    component: NotFound,
  },
];
