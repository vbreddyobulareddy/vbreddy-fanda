import { createBrowserRouter } from "react-router-dom";
import HomePageContainer from "./container/home/index.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePageContainer />,
  },
]);

export default appRouter;
