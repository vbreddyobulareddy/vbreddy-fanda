import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";

export interface Field {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  icon: any;
  defaultValue: string;
}

export interface Options {
  fields: Field[];
  handleSubmit: (values: any) => void;
  children: React.ReactNode;
}

export const VerticalOneColForm = (props: Options) => {
  const { fields, handleSubmit } = props;

  const fieldEntity: any = {};
  fields.forEach((item) => {
    fieldEntity[item.id] = item.defaultValue;
  });

  const { values, handleChange } = useFormik<any>({
    initialValues: fieldEntity,
    onSubmit: handleSubmit,
  });
  console.log("--== ", fields);
  return (
    <>
      {fields &&
        fields.map((item: Field, index: number) => {
          return (
            <>
              <div key={item.id} className="m-1">
                <label htmlFor={item.id} className="sr-only">
                  {item.label}
                </label>
                <div className="relative">
                  <input
                    autoFocus={index === 0}
                    className="w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm"
                    id={item.id}
                    name={item.id}
                    placeholder={item.label}
                    type={item.type || "text"}
                    onChange={handleChange}
                    value={values[item.id]}
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    {item.icon}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      {props.children}
    </>
  );
};
