import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codeValues: [],
  isLoading: true,
  error: {},
};

export const metaSliceStore = createSlice({
  name: "MetaSliceStore",
  initialState,
  reducers: {
    fetchCodeValues: (state, action) => {
      state.codeValues = action.payload;
    },
  },
});

export const { fetchCodeValues } = metaSliceStore.actions;

export const queryCodeValues =
  () => async (dispatch: any, getState: any, client: any) => {
    console.log("--==queryCodeValues ", getState, client);
    dispatch(fetchCodeValues([]));
  };
/*
export const queryCodeValues = createAsyncThunk<any>(
  "MetaSliceStore/fetchCodeValues",
  async (...params: any) => {
    console.log("--==> queryCodeValues ", params);
    return [];
  }
);
*/
