export interface OrgUnitType {
  name: string;
  email: string;
  mobile: string;
  address: string;
  codeValueId: number;
  parentOrgUnitId: number;
  dateOfCreation: Date;
  dateLastModified: Date;
  lastUpdatedBy: number;
}

export interface AuthStoreSliceType {
    orgUnit: Partial<OrgUnitType>;
}
