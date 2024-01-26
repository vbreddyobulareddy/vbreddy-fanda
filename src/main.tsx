import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./app-router";
import { Provider } from "react-redux";
import { appReduxStore } from "./store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appReduxStore}>
        <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
