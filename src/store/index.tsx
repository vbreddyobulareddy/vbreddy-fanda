import { configureStore } from "@reduxjs/toolkit";
import { authStoreSlice } from "../container/auth/app-store-slice";
import { metaStoreSlice } from "./meta/app-meta-slice";
import client from "../graphql/client";

const rootReducer = {
  authStoreSlice: authStoreSlice.reducer,
  metaStoreSlice: metaStoreSlice.reducer,
};

export const appReduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: client,
      },
      serializableCheck: false,
    }),
});
