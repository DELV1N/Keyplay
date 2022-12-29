import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import GamePage from "./pages/GamePage";
import Shop from "./pages/Shop";
import {
  ADMIN_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  GAME_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: GAME_ROUTE + "/:id",
    Component: GamePage,
  },
];
