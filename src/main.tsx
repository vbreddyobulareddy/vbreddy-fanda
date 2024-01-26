import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import appRouter from "./app-router";

import "./index.css";

const client = new ApolloClient({
  uri: "https://cloud-api.vbreddy.life/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={appRouter} />
    </ApolloProvider>
  </React.StrictMode>
);
