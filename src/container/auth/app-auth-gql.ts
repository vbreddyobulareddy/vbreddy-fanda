import { gql } from "@apollo/client";

export const MUTATE_CHECK_USERNAME_PASSWORD = gql`
  mutation getToken($userName: String!, $password: String!) {
    getToken(userName: $userName, password: $password) {
      id
      token
      message
    }
  }
`;

export const SET_ORG_UNIT_PERSON = gql`
  mutation setOrgUnitPerson(
    $orgUnitName: String!
    $orgUnitEmail: String!
    $orgUnitMobile: String!
    $orgUnitAddress: String!
    $orgUnitTypeId: Int!
    $primPersonName: String!
    $primPersonEmail: String!
    $primPersonMobile: String!
    $primPersonUserName: String!
    $primPersonPassword: String!
    $primPersonAddress: String!
  ) {
    setOrgUnitPerson(
      orgUnitName: $orgUnitName
      orgUnitEmail: $orgUnitEmail
      orgUnitMobile: $orgUnitMobile
      orgUnitAddress: $orgUnitAddress
      orgUnitTypeId: $orgUnitTypeId
      primPersonName: $primPersonName
      primPersonEmail: $primPersonEmail
      primPersonMobile: $primPersonMobile
      primPersonUserName: $primPersonUserName
      primPersonPassword: $primPersonPassword
      primPersonAddress: $primPersonAddress
    ) {
      id
      orgUnit {
        id
        name
        email
        mobile
        address
        parentOrgUnitId
      }
      person {
        id
        name
        email
        mobile
        userName
        address
      }
      codeValue {
        id
        name
        description
        codeId
      }
      isActive
    }
  }
`;

export const CHECK_DUPLICATES = gql`
  query checkDuplicates(
    $tableName: String!
    $fieldName: String!
    $fieldVal: String!
    $fieldRef: String!
  ) {
    checkDuplicates(
      tableName: $tableName
      fieldName: $fieldName
      fieldVal: $fieldVal
      fieldRef: $fieldRef
    ) {
      count
      payload {
        tableName
        fieldName
        fieldVal
        fieldRef
      }
    }
  }
`;

/***
 * 
 * 
  client
    .mutate({
      mutation: SET_ORG_UNIT_PERSON,
      variables: vars,
    })
    .then(
      (result: any) => {},
      (error: any) => {
        console.log("--=-*2*-=> SET_ORG_UNIT_PERSON ", error);
      }
    );
 * 
 * 
 * 
 */
