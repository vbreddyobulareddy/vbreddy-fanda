import { useFormikContext } from "formik";
import { ButtonField } from "./field-types";

const InputButtonFieldComponent = (props: ButtonField) => {
  const formikContext: any = useFormikContext<any>();
  let disabled = false;

  if (Object.keys(formikContext.errors).length > 0) {
    disabled = Object.keys(formikContext.errors).length > 0;
  } else if (Object.keys(formikContext.touched).length === 0) {
    disabled = Object.keys(formikContext.touched).length === 0;
    /*
    let formValuesStatus = Object.keys(formikContext.values).length;
    Object.keys(formikContext.values).forEach((item) => {
      const fieldValue = formikContext.values[item];
      if (fieldValue && fieldValue.length > 0) {
        formValuesStatus--;
      }
    });
    disabled = formValuesStatus > 0;
    */
  }
  console.log("--=**=> InputButtonFieldComponent ", disabled, formikContext);

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-flow-col justify-between gap-2">
        {props.children}
        <button
          onClick={() => props.handleOnClick(formikContext.values)}
          type="button"
          className="btn inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          disabled={disabled}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default InputButtonFieldComponent;
