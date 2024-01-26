import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codeValues: [],
  isLoading: true,
  error: {},
};

export const metaStoreSlice = createSlice({
  name: "MetaStoreSlice",
  initialState,
  reducers: {
    fetchCodeValues: (state, action) => {
      state.codeValues = action.payload;
    },
  },
});

export const { fetchCodeValues } = metaStoreSlice.actions;

export const queryCodeValues =
  () => async (dispatch: any, getState: any, client: any) => {
    const stateEntity = getState();
    console.log("--==> queryCodeValues ", stateEntity, client);
    dispatch(fetchCodeValues([]));
  };
/*
export const queryCodeValues = createAsyncThunk<any>(
  "MetaStoreSlice/fetchCodeValues",
  async (...params: any) => {
    console.log("--==> queryCodeValues ", params);
    return [];
  }
);
*/
