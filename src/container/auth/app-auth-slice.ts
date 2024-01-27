import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceStoreType } from "./app-auth-types";
import { SET_ORG_UNIT_PERSON } from "./app-auth-gql";
import { popStatus, pushStatus } from "../../store/status/app-status.slice";
import { APPSTATUSTYPES } from "../../store/status/app-status-type";

const initialState: AuthSliceStoreType = {
  orgUnitPerson: {},
};

export const authSliceStore = createSlice({
  name: "AuthSliceStore",
  initialState,
  reducers: {
    setOrgUnitPerson: (state, action) => {
      state.orgUnitPerson = action.payload;
    },
  },
});

export const { setOrgUnitPerson } = authSliceStore.actions;

export const mutateOrgUnitPerson =
  (payload: any) => async (dispatch: any, getState: any, client: any) => {
    const stateEntity = getState();
    console.log("--==> mutateOrgUnitPerson ", stateEntity, client, payload);
    const vars = {
      orgUnitName: payload.orgName,
      orgUnitEmail: payload.orgEmail,
      orgUnitMobile: payload.orgMobile,
      orgUnitAddress: payload.orgAddress,
      orgUnitTypeId: 102,
      primPersonName: payload.personName,
      primPersonEmail: payload.personEmail,
      primPersonMobile: payload.personMobile,
      primPersonUserName: payload.personUserName,
      primPersonPassword: payload.personPWD,
      primPersonAddress: payload.orgAddress,
    };
    console.log("--==> mutateOrgUnitPerson :: vars ", vars);
    const event = {
      id: new Date().getTime(),
      type: APPSTATUSTYPES.APOLLO_CLIENT_MUTATION,
      gql: "SET_ORG_UNIT_PERSON",
      variables: vars,
    };
    dispatch(pushStatus(event));

    client
      .mutate({
        mutation: SET_ORG_UNIT_PERSON,
        variables: vars,
      })
      .then(
        (result: any) => {
          console.log("--=--*1.0*=> SET_ORG_UNIT_PERSON ", result);
          const { data } = result;
          console.log(
            "--=--*1.1*=> SET_ORG_UNIT_PERSON ",
            data.setOrgUnitPerson
          );
          dispatch(popStatus(event));
          dispatch(
            pushStatus({
              id: new Date().getTime(),
              type: APPSTATUSTYPES.REDIRECTION,
              path: "status-snap",
            })
          );
          dispatch(setOrgUnitPerson(data.setOrgUnitPerson));
        },
        (error: any) => {
          console.log("--=-*2*-=> SET_ORG_UNIT_PERSON ", error);
        }
      );
  };
