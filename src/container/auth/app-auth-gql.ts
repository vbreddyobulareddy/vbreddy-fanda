import { gql } from "@apollo/client";

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
