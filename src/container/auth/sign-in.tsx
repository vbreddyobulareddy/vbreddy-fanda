import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import DefaultLogo from "../../component/logo/default-logo";
import { FieldsList } from "../../component/field/field-types";
import InputPasswordFieldComponent from "../../component/field/input-password-field";
import InputButtonFieldComponent from "../../component/field/input-button-field";
import InputTextFieldComponent from "../../component/field/input-text-field";
import { queryTokenByUserNameAndPwd } from "./app-auth-slice";

const SignInPageContainer = () => {
  const { validations } = useSelector((state: any) => state.authSliceStore);
  const formFields: any = {
    userName: {
      id: "userName",
      label: "User Name",
      placeholder: "Please enter User Name",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faUser,
      value: "vbreddy",
    },
    pwd: {
      id: "pwd",
      label: "Password",
      placeholder: "Please enter Password",
      grade: { field: FieldsList.INPUT_PASSWORD_FIELD, type: "password" },
      icon: faKey,
      value: "veera@168",
    },
  };
  const dispatch = useDispatch<any>();
  function onSubmit(values: any): void {
    console.log("--==onSubmit ", values);
    dispatch(
      queryTokenByUserNameAndPwd({
        userName: values.userName,
        password: values.pwd,
      })
    );
  }
  return (
    <>
      <div className="mx-auto max-w-lg text-center">
        <DefaultLogo />
        <p className="mt-4 text-gray-500">
          Welcome to FandA portal, start using for free ..!
        </p>
      </div>
      <div className="divider divider-end text-xl font-FFNort">Sign In</div>
      <div className="mx-auto mb-0 mt-8 space-y-4 bg-base-300 p-4">
        <Formik
          initialValues={{
            userName: formFields.userName.value,
            pwd: formFields.pwd.value,
          }}
          onSubmit={onSubmit}
        >
          {(fprops: any) => {
            const { values } = fprops;
            return (
              <>
                {Object.keys(formFields).map(
                  (entity: string, index: number) => {
                    const item: any = formFields[entity];
                    const validationOpt =
                      validations.size > 0 ? validations.get(item.id) : null;
                    if (item.grade.field === FieldsList.INPUT_TEXT_FIELD) {
                      return (
                        <InputTextFieldComponent
                          {...item}
                          autoFocus={index === 0}
                          key={item.id}
                          apiError={validationOpt?.fieldVal === values[item.id]}
                        />
                      );
                    }
                    if (item.grade.field === FieldsList.INPUT_PASSWORD_FIELD) {
                      return (
                        <InputPasswordFieldComponent
                          {...item}
                          autoFocus={index === 0}
                          key={item.id}
                          apiError={validationOpt?.fieldVal === values[item.id]}
                        />
                      );
                    }
                  }
                )}
                <InputButtonFieldComponent
                  name={"Sign In"}
                  handleOnClick={onSubmit}
                >
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-500">
                      No account?
                      <a className="underline" href="sign-up">
                        Sign up
                      </a>
                    </p>
                  </div>
                </InputButtonFieldComponent>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SignInPageContainer;
