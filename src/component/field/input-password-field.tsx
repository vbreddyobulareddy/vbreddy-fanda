import { Field, useFormikContext } from "formik";
import { FieldType } from "./field-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputPasswordFieldComponent = (item: FieldType) => {
  const formikContext: any = useFormikContext<any>();
  const validateRequireRule = (value: any) => {
    if (!value || value.trim().length === 0) {
      return { status: !value || value.trim().length === 0, text: "Required" };
    } else if ( value.length < 5 ) {
      return { status: value.length < 5, text: "Password should be minimum five characters length" };
    } else if (formikContext.values?.cnfPwd && formikContext.values.personPWD !== formikContext.values?.cnfPwd) {
      return { status: true, text: "Confirm password and password should be equal" };
    }
  };
  const showError =
    formikContext.errors[item.id]?.status && formikContext.touched[item.id];
  return (
    <>
      <Field
        render={(fieldProps: any) => (
          <>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">{item.label}</span>
              </div>
              <div className="relative">
                <input
                  autoFocus={item.autoFocus}
                  className={`input input-bordered w-full ${
                    showError ? "border-red-500" : ""
                  }`}
                  placeholder={item.label}
                  type={item.grade.type || "text"}
                  {...fieldProps.field}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`h-4 m-4 ${
                      showError ? "text-red-600" : "text-gray-300"
                    }`}
                  />
                </span>
              </div>
              {showError && (
                <div className="label">
                  <span className="label-text-alt text-red-600">
                    {formikContext.errors[item.id].text}
                  </span>
                </div>
              )}
            </label>
          </>
        )}
        name={item.id}
        id={item.id}
        validate={validateRequireRule}
        key={item.id}
      />
    </>
  );
};

export default InputPasswordFieldComponent;
