import { createBrowserRouter } from "react-router-dom";
import HomePageContainer from "./container/home/index.tsx";
import SignInPageContainer from "./container/auth/sign-in.tsx";
import DefaultPageLayout from "./container/layouts/default-layout.tsx";
import AuthPageLayout from "./container/layouts/auth-layout.tsx";
import AppPageLayout from "./container/layouts/app-layout.tsx";
import SignUpPageContainer from "./container/auth/sign-up.tsx";
import StatusSnapPageContainer from "./container/auth/status-snap.tsx";
import DashboardPageContainer from "./container/dashboard/index.tsx";

const routesList = [
  {
    path: "/",
    element: <DefaultPageLayout />,
    children: [
      {
        path: "home",
        element: <HomePageContainer />,
      },
    ],
  },
  {
    path: "open",
    element: <AuthPageLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInPageContainer />,
      },
      {
        path: "sign-up",
        element: <SignUpPageContainer />,
      },
      {
        path: "status-snap",
        element: <StatusSnapPageContainer />,
      },
    ],
  },
  {
    path: "app",
    element: <AppPageLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPageContainer />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routesList, {});

export default appRouter;
