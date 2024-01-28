import {
  faAddressCard,
  faAt,
  faBuilding,
  faKey,
  faPhone,
  faUser,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import DefaultLogo from "../../component/logo/default-logo";
import { FieldsList } from "../../component/field/field-types";
import { validateSignUpFields } from "./app-auth-slice";

import { Formik } from "formik";
import InputTextFieldComponent from "../../component/field/input-text-field";
import InputEmailFieldComponent from "../../component/field/input-email-field";
import InputMobileFieldComponent from "../../component/field/input-mobile-field";
import InputPasswordFieldComponent from "../../component/field/input-password-field";
import InputButtonFieldComponent from "../../component/field/input-button-field";

const SignUpPageContainer = () => {
  const { validations } = useSelector((state: any) => state.authSliceStore);
  const formFields: any = {
    orgName: {
      id: "orgName",
      label: "Organization Name",
      placeholder: "Please enter Organization Name",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faBuilding,
      value: "FandA Solutions",
    },
    orgMobile: {
      id: "orgMobile",
      label: "Organization mobile number",
      placeholder: "Please enter Organization Mobile Number",
      grade: { field: FieldsList.INPUT_MOBILE_FIELD, type: "text" },
      icon: faPhone,
      value: "8106666344",
      validationMsg:
        "Mobile number already registered, please provide unique mobile number.",
    },
    orgEmail: {
      id: "orgEmail",
      label: "Organization Email",
      placeholder: "Please enter organization email",
      grade: { field: FieldsList.INPUT_EMAIL_FIELD, type: "email" },
      icon: faAt,
      value: "fanda.mile@gmail.com",
      validationMsg:
        "Email address already registered, please provide unique email.",
    },
    orgAddress: {
      id: "orgAddress",
      label: "Organization Address",
      placeholder: "Please enter organization Address",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faAddressCard,
      value: "FandA of Bangalore",
    },

    personName: {
      id: "personName",
      label: "Primary Contact Name",
      placeholder: "Please enter person Name",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faUser,
      value: "VBreddy",
    },
    personMobile: {
      id: "personMobile",
      label: "Primary Contact Mobile Number",
      placeholder: "Please enter Mobile Number",
      grade: { field: FieldsList.INPUT_MOBILE_FIELD, type: "text" },
      icon: faPhone,
      value: "8105555322",
      validationMsg:
        "Mobile number already registered, please provide mobile number.",
    },
    personEmail: {
      id: "personEmail",
      label: "Primary Contact Email",
      placeholder: "Please enter person email",
      grade: { field: FieldsList.INPUT_EMAIL_FIELD, type: "email" },
      icon: faAt,
      value: "vbreddyobulareddy@gmail.com ",
      validationMsg:
        "Email address already registered, please provide unique email.",
    },
    personUserName: {
      id: "personUserName",
      label: "User Name",
      placeholder: "Please enter User Name",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faUserCheck,
      value: "VBReddy",
      validationMsg:
        "UserName address already registered, please provide unique UserName.",
    },
    personPWD: {
      id: "personPWD",
      label: "Password",
      placeholder: "Please enter Password",
      grade: { field: FieldsList.INPUT_PASSWORD_FIELD, type: "password" },
      icon: faKey,
      value: "Veera@168",
    },
    cnfPwd: {
      id: "cnfPwd",
      label: "Confirm Password",
      placeholder: "Please enter confirm Password",
      grade: { field: FieldsList.INPUT_PASSWORD_FIELD, type: "password" },
      icon: faKey,
      value: "Veera@168",
    },
  };

  const dispatch: any = useDispatch();
  function onSubmit(values: any): void {
    dispatch(validateSignUpFields(values));
  }
  console.log("--=-*1*-==SignUpPageContainer ", validations);

  return (
    <>
      <div className="mx-auto max-w-lg text-center">
        <DefaultLogo />
        <p className="mt-4 text-gray-500">
          Welcome to FandA portal, start using for free ..!
        </p>
        <p className="mt-4 text-gray-500">
          Register your Organization and a primary contact details, with in a
          day our representive will connect and followup to activate the
          account.
        </p>
      </div>
      <div className="divider divider-end text-xl font-FFNort">Sign Up</div>
      <div className="mx-auto mb-0 mt-8 space-y-4 bg-base-300 p-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        <Formik
          initialValues={{
            orgName: formFields.orgName.value,
            orgMobile: formFields.orgMobile.value,
            orgEmail: formFields.orgEmail.value,
            orgAddress: formFields.orgAddress.value,
            personName: formFields.personName.value,
            personMobile: formFields.personMobile.value,
            personEmail: formFields.personEmail.value,
            personUserName: formFields.personUserName.value,
            personPWD: formFields.personPWD.value,
            cnfPwd: formFields.cnfPwd.value,
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
                    const validationOpt = validations.size > 0 ? validations.get(item.id) : null;

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
                    if (item.grade.field === FieldsList.INPUT_EMAIL_FIELD) {
                      return (
                        <InputEmailFieldComponent
                          {...item}
                          autoFocus={index === 0}
                          key={item.id}
                          apiError={validationOpt?.fieldVal === values[item.id]}
                        />
                      );
                    }
                    if (item.grade.field === FieldsList.INPUT_MOBILE_FIELD) {
                      return (
                        <InputMobileFieldComponent
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
                  <p className="text-sm text-gray-500">
                    has account?
                    <a className="underline" href="sign-in">
                      Sign In
                    </a>
                  </p>
                </InputButtonFieldComponent>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SignUpPageContainer;
