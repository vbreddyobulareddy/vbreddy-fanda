export interface CodeValueType {
  id: number;
  name: string;
  description: string;
  codeId: string;
}
export interface PersonType {
  id: number;
  name: string;
  email: string;
  mobile: string;
  userName: string;
  address: string;
}
export interface OrgUnitType {
  id: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
  parentOrgUnitId: number;
}
export interface OrgUnitPersonType {
  id: number;
  isActive?: boolean;
  orgUnit?: OrgUnitType;
  person?: PersonType;
  codeValue?: CodeValueType;
}

export interface AuthSliceStoreType {
  orgUnitPerson: Partial<OrgUnitPersonType>;
}
