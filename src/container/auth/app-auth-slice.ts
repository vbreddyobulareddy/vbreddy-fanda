import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceStoreType } from "./app-auth-types";
import {
  CHECK_DUPLICATES,
  MUTATE_CHECK_USERNAME_PASSWORD,
  SET_ORG_UNIT_PERSON,
} from "./app-auth-gql";
import { popStatus, pushStatus } from "../../store/status/app-status.slice";
import { APPSTATUSTYPES } from "../../store/status/app-status-type";

const initialState: AuthSliceStoreType = {
  orgUnitPerson: {},
  validations: new Map<string, any>(),
};

export const authSliceStore = createSlice({
  name: "AuthSliceStore",
  initialState,
  reducers: {
    setOrgUnitPerson: (state, action) => {
      state.orgUnitPerson = action.payload;
    },
    setValidations: (state, action) => {
      state.validations = action.payload;
    },
  },
});

export const { setOrgUnitPerson, setValidations } = authSliceStore.actions;

export const validateSignUpFields =
  (payload: any) => async (interceptors: any) => {
    const {dispatch, client} = interceptors
    const event = {
      id: new Date().getTime(),
      type: APPSTATUSTYPES.APOLLO_CLIENT_MUTATION,
      gql: "CHECK_DUPLICATES",
    };
    dispatch(pushStatus(event));
    Promise.all([
      client.query({
        query: CHECK_DUPLICATES,
        variables: {
          tableName: "OrgUnit",
          fieldName: "mobile",
          fieldVal: payload.orgMobile,
          fieldRef: "orgMobile",
        },
      }),
      client.query({
        query: CHECK_DUPLICATES,
        variables: {
          tableName: "OrgUnit",
          fieldName: "email",
          fieldVal: payload.orgEmail,
          fieldRef: "orgEmail",
        },
      }),
      client.query({
        query: CHECK_DUPLICATES,
        variables: {
          tableName: "Person",
          fieldName: "email",
          fieldVal: payload.personEmail,
          fieldRef: "personEmail",
        },
      }),
      client.query({
        query: CHECK_DUPLICATES,
        variables: {
          tableName: "Person",
          fieldName: "userName",
          fieldVal: payload.personUserName,
          fieldRef: "personUserName",
        },
      }),
    ]).then(
      (response: any) => {
        const validates = new Map<string, any>();
        response.forEach((result: any) => {
          const { checkDuplicates } = result.data;
          const { count, payload } = checkDuplicates;
          if (count > 0) {
            validates.set(payload.fieldRef, {
              count: count,
              isInValid: count > 0,
              fieldVal: payload.fieldVal,
            });
          }
        });
        const failedValidations = Array.from(validates.keys());
        dispatch(popStatus(event));
        if (failedValidations?.length > 0) {
          dispatch(setValidations(validates));
        } else {
          dispatch(mutateOrgUnitPerson(payload));
        }
      },
      (error: any) => {
        console.log("--=-*2*-=> validateSignUpFields ", error);
      }
    );
  };

export const mutateOrgUnitPerson =
  (payload: any) => async (interceptors: any) => {
    const {dispatch, client} = interceptors
    const vars = {
      orgUnitName: payload.orgName,
      orgUnitEmail: payload.orgEmail.trim(),
      orgUnitMobile: payload.orgMobile.trim(),
      orgUnitAddress: payload.orgAddress,
      orgUnitTypeId: 102,
      primPersonName: payload.personName,
      primPersonEmail: payload.personEmail.trim(),
      primPersonMobile: payload.personMobile.trim(),
      primPersonUserName: payload.personUserName.trim(),
      primPersonPassword: payload.personPWD,
      primPersonAddress: payload.orgAddress,
    };
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
          const { data } = result;
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

export const queryTokenByUserNameAndPwd =
  (payload: any) => async (interceptors: any) => {
    const {dispatch, client} = interceptors
    console.log("--==queryUserNameAndPwdToken ", payload);
    const event = {
      id: new Date().getTime(),
      type: APPSTATUSTYPES.APOLLO_CLIENT_MUTATION,
      gql: "MUTATE_CHECK_USERNAME_PASSWORD",
      variables: payload,
    };
    dispatch(pushStatus(event));
    client
      .mutate({
        mutation: MUTATE_CHECK_USERNAME_PASSWORD,
        variables: payload,
      })
      .then(
        (result: any) => {
          const { data } = result;
          console.log("--=-*2*-=> MUTATE_CHECK_USERNAME_PASSWORD ", data);
          const { getToken } = data;
          if (getToken.token) {
            localStorage.setItem("FANDA_JWT_TOKEN", getToken.token);
          }
          dispatch(popStatus(event));
          dispatch(
            pushStatus({
              id: new Date().getTime(),
              type: APPSTATUSTYPES.REDIRECTION,
              path: "/app/dashboard",
            })
          );
        },
        (error: any) => {
          console.log("--=-*2*-=> MUTATE_CHECK_USERNAME_PASSWORD ", error);
        }
      );
  };
