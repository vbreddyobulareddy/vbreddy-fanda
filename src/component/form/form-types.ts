import { FieldType } from "../field/field-types";


export interface FormOptionsType {
  fields: FieldType[];
  handleSubmit: (values: any) => void;
  actionName: string;
  children: React.ReactNode;
}
