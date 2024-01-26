export interface Code {
  id: number;
  name: string;
  description: string;
  dateOfCreation: Date;
  dateLastModified: Date;
  lastUpdatedBy: number;
}

export interface CodeValue {
  id: number;
  name: string;
  description: string;
  codeId: Code;
  dateOfCreation: Date;
  dateLastModified: Date;
  lastUpdatedBy: number;
}

export interface MetaStoreSliceType {
  codeValues: Partial<CodeValue[]>;
  isLoading: boolean;
  error: Partial<any>;
}
