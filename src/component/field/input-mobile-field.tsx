import { Field, useFormikContext } from "formik";
import { FieldType } from "./field-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputMobileFieldComponent = (item: FieldType) => {
  const formikContext: any = useFormikContext<any>();
  const validateRequireRule = (value: any) => {
    if (!value || value.trim().length === 0) {
      return { status: !value || value.trim().length === 0, text: "Required" };
    } else if (value.length !== 10){
      return { status: value.length !== 10, text: "Invalid mobile number" };
    }
  };
  const handleMobileFieldChange = (e: any) => {
    const allowNumbers = /^[0-9]*$/g
    if (allowNumbers.test(e.target.value)) {
      formikContext.setFieldValue(item.id, e.target.value)
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
              <div className="flex w-full">
                <input
                  type="text"
                  value="+91"
                  disabled
                  className={`input input-bordered w-16 border-r-0 rounded-r-none`}
                />
                <div className="relative w-full">
                  <input
                    autoFocus={item.autoFocus}
                    className={`input input-bordered w-full border-l-0 rounded-l-none ${
                      showError ? "border-red-500" : ""
                    }`}
                    placeholder={item.label}
                    type={item.grade.type || "text"}
                    {...fieldProps.field}
                    onChange={(e) => handleMobileFieldChange(e)}
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

export default InputMobileFieldComponent;
