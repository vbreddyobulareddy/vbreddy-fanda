import { configureStore } from "@reduxjs/toolkit";
import graphqlClient from "./graphql-client";

import { authSliceStore } from "../container/auth/app-auth-slice";
import { metaSliceStore } from "./meta/app-meta-slice";
import { statusSliceStore } from "./status/app-status.slice";

const rootReducer = {
  authSliceStore: authSliceStore.reducer,
  metaSliceStore: metaSliceStore.reducer,
  statusSliceStore: statusSliceStore.reducer,
};

export const appReduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: graphqlClient,
      },
      serializableCheck: false,
    }),
});
