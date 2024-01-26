import { createSlice } from "@reduxjs/toolkit";
import { AuthStoreSliceType } from "./app-store-types";

const initialState: AuthStoreSliceType = {
  orgUnit: {},
};

export const authStoreSlice = createSlice({
  name: "AuthStoreSlice",
  initialState,
  reducers: {
    registerOrg: (state, action) => {
      state.orgUnit = action.payload;
    },
  },
});

export const { registerOrg } = authStoreSlice.actions;
