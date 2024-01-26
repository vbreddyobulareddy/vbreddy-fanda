import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default appRouter;
