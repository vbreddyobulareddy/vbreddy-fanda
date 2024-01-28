import { ReactNode } from "react";

export interface FieldGrade {
  field: string;
  type: string;
}
export interface FieldType {
  id: string;
  label: string;
  placeholder: string;
  grade: FieldGrade;
  icon: any;
  defaultValue: string;
  autoFocus?: boolean;
  validationMsg?: string;
  error?: any;
}
export interface ButtonField {
  name: string;
  handleOnClick: (event: any) => void;
  children?: ReactNode;
  allowReset?: boolean;
  align?: string;
  errors?: any;
}
export const FieldsList = {
  INPUT_TEXT_FIELD: "input-text-field",
  INPUT_EMAIL_FIELD: "input-email-field",
  INPUT_MOBILE_FIELD: "input-mobile-field",
  INPUT_PASSWORD_FIELD: "input-password-field",
};


