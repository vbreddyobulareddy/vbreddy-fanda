import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  Field,
  VerticalOneColForm,
} from "../../component/form/vertical-1col-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultLogo from "../../component/logo/default-logo";

const SignUpPageContainer = () => {
  const formFields: Field[] = [
    {
      id: "orgName",
      label: "Organization Name",
      placeholder: "Please enter Organization Name",
      type: "text",
      icon: <FontAwesomeIcon icon={faAt} className="h-4 m-4 text-gray-300" />,
      defaultValue: "",
    },
    {
      id: "firstName",
      label: "Primary Contact Name",
      placeholder: "Please enter Name",
      type: "text",
      icon: <FontAwesomeIcon icon={faAt} className="h-4 m-4 text-gray-300" />,
      defaultValue: "",
    },
    {
      id: "mobile",
      label: "Primary Contact Mobile Number",
      placeholder: "Please enter Mobile Number",
      type: "text",
      icon: <FontAwesomeIcon icon={faAt} className="h-4 m-4 text-gray-300" />,
      defaultValue: "",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Please enter email",
      type: "email",
      icon: <FontAwesomeIcon icon={faAt} className="h-4 m-4 text-gray-300" />,
      defaultValue: "",
    },
    {
      id: "pwd",
      label: "Password",
      placeholder: "Please enter Password",
      type: "password",
      icon: <FontAwesomeIcon icon={faKey} className="h-4 m-4 text-gray-300" />,
      defaultValue: "",
    },
    {
      id: "cnfPwd",
      label: "Confirm Password",
      placeholder: "Please enter confirm Password",
      type: "password",
      icon: <FontAwesomeIcon icon={faKey} className="h-4 m-4 text-gray-300" />,
      defaultValue: "",
    },
  ];
  function onSubmit(values: any): void {
    console.log("--==onSubmit ", values);
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
      <div className="mx-auto mb-0 mt-8 space-y-4 bg-base-300 p-4 grid grid-cols-1 lg:grid-cols-2">
        <VerticalOneColForm handleSubmit={onSubmit} fields={formFields}>
          <p className="text-sm text-gray-500">
            has account?
            <a className="underline" href="sign-in">
              Sign In
            </a>
          </p>
          <div className="flex justify-end">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign Up
          </button>
          </div>
        </VerticalOneColForm>
      </div>
    </>
  );
};

export default SignUpPageContainer;
