import { Field, useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputEmailFieldComponent = (item: any) => {
  const formikContext: any = useFormikContext<any>();
  const validateRequireRule = (value: any) => {
    if (!value || value.trim().length === 0) {
      return {
        status: !value || value.trim().length === 0,
        text: "Required",
        field: item.id,
      };
    } else if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.trim())) {
      return { status: true, text: "Invalid email", field: item.id };
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
              {showError ? (
                <div className="label">
                  <span className="label-text-alt text-red-600">
                    {formikContext.errors[item.id].text}
                  </span>
                </div>
              ) : (
                <>
                  {item.apiError && (
                    <div className="label">
                      <span className="label-text-alt text-red-600">
                        {item.validationMsg}
                      </span>
                    </div>
                  )}
                </>
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

export default InputEmailFieldComponent;
