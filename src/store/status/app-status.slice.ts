import { createSlice } from "@reduxjs/toolkit";

const initialState: { events: any } = {
  events: [],
};

export const statusSliceStore = createSlice({
  name: "StatusSliceStore",
  initialState,
  reducers: {
    pushStatus: (state, action) => {
      state.events.push(action.payload);
    },
    popStatus: (state, action) => {
      state.events = state.events.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
  },
});

export const { pushStatus, popStatus } = statusSliceStore.actions;
