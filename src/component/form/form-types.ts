export interface FormOptionsType {
  fields: any;
  handleSubmit: (values: any) => void;
  actionName: string;
  children: React.ReactNode;
  validations?: any
}
