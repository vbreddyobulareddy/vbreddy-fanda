import {
  faAddressCard,
  faAt,
  faBuilding,
  faKey,
  faPhone,
  faUser,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { VerticalOneColForm } from "../../component/form/vertical-1col-form";
import DefaultLogo from "../../component/logo/default-logo";
import { FieldType, FieldsList } from "../../component/field/field-types";
import { mutateOrgUnitPerson } from "./app-auth-slice";
import { useDispatch } from "react-redux";

const SignUpPageContainer = () => {
  const formFields: FieldType[] = [
    {
      id: "orgName",
      label: "Organization Name",
      placeholder: "Please enter Organization Name",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faBuilding,
      defaultValue: "FandA Solutions",
    },
    {
      id: "orgMobile",
      label: "Organization mobile number",
      placeholder: "Please enter Organization Mobile Number",
      grade: { field: FieldsList.INPUT_MOBILE_FIELD, type: "text" },
      icon: faPhone,
      defaultValue: "8106666344",
    },
    {
      id: "orgEmail",
      label: "Organization Email",
      placeholder: "Please enter organization email",
      grade: { field: FieldsList.INPUT_EMAIL_FIELD, type: "email" },
      icon: faAt,
      defaultValue: "fanda.mile@gmail.com",
    },
    {
      id: "orgAddress",
      label: "Organization Address",
      placeholder: "Please enter organization Address",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faAddressCard,
      defaultValue: "FandA of Bangalore",
    },

    {
      id: "personName",
      label: "Primary Contact Name",
      placeholder: "Please enter person Name",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faUser,
      defaultValue: "VBreddy",
    },
    {
      id: "personMobile",
      label: "Primary Contact Mobile Number",
      placeholder: "Please enter Mobile Number",
      grade: { field: FieldsList.INPUT_MOBILE_FIELD, type: "text" },
      icon: faPhone,
      defaultValue: "8105555322",
    },
    {
      id: "personEmail",
      label: "Primary Contact Email",
      placeholder: "Please enter person email",
      grade: { field: FieldsList.INPUT_EMAIL_FIELD, type: "email" },
      icon: faAt,
      defaultValue: "vbreddyobulareddy@gmail.com ",
    },
    {
      id: "personUserName",
      label: "User Name",
      placeholder: "Please enter User Name",
      grade: { field: FieldsList.INPUT_TEXT_FIELD, type: "text" },
      icon: faUserCheck,
      defaultValue: "VBReddy",
    },
    {
      id: "personPWD",
      label: "Password",
      placeholder: "Please enter Password",
      grade: { field: FieldsList.INPUT_PASSWORD_FIELD, type: "password" },
      icon: faKey,
      defaultValue: "Veera@168",
    },
    {
      id: "cnfPwd",
      label: "Confirm Password",
      placeholder: "Please enter confirm Password",
      grade: { field: FieldsList.INPUT_PASSWORD_FIELD, type: "password" },
      icon: faKey,
      defaultValue: "Veera@168",
    },
  ];
  const dispatch: any = useDispatch();
  function onSubmit(values: any): void {
    console.log("--=-1-=onSubmit ", values);
    dispatch(mutateOrgUnitPerson(values));
  }
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
        <VerticalOneColForm
          handleSubmit={onSubmit}
          fields={formFields}
          actionName="Sign Up"
        >
          <p className="text-sm text-gray-500">
            has account?
            <a className="underline" href="sign-in">
              Sign In
            </a>
          </p>
        </VerticalOneColForm>
      </div>
    </>
  );
};

export default SignUpPageContainer;
