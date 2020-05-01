import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import TrailerScreen from "views/TrailerScreen.jsx";
import TruckScreen from "views/TruckScreen.jsx";
import Maps from "views/Map.jsx";
import UserScreen from "views/UserScreen.jsx";
import FormScreen from "views/FormScreen.jsx";
import ComingSoonScreen from "views/ComingSoonScreen.jsx";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Users",
    icon: "nc-icon nc-single-02",
    component: UserScreen,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Trucks",
    icon: "nc-icon nc-delivery-fast",
    component: TruckScreen,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Trailers",
    icon: "nc-icon nc-delivery-fast",
    component: TrailerScreen,
    layout: "/admin"
  },
  {
    path: "/form",
    name: "Forms",
    icon: "nc-icon nc-single-copy-04",
    component: FormScreen,
    layout: "/admin"
  },
  {
    path: "/comingsoon",
    name: "Coming Soon",
    icon: "nc-icon nc-bulb-63",
    component: ComingSoonScreen,
    layout: "/admin"
  }
];
export default routes;
