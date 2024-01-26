import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  Field,
  VerticalOneColForm,
} from "../../component/form/vertical-1col-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultLogo from "../../component/logo/default-logo";

const SignInPageContainer = () => {
  const formFields: Field[] = [
    {
      id: "email",
      label: "Email",
      placeholder: "Please enter email",
      type: "email",
      icon: <FontAwesomeIcon icon={faAt} className="h-4 m-4 text-gray-300" />,
      defaultValue: "vbreddy@gmail.com",
    },
    {
      id: "pwd",
      label: "Password",
      placeholder: "Please enter Password",
      type: "password",
      icon: <FontAwesomeIcon icon={faKey} className="h-4 m-4 text-gray-300" />,
      defaultValue: "veera@168",
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
      </div>
      <div className="divider divider-end text-xl font-FFNort">Sign In</div>
      <div className="mx-auto mb-0 mt-8 space-y-4 bg-base-300 p-4">
        <VerticalOneColForm handleSubmit={onSubmit} fields={formFields}>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href="sign-up">
                Sign up
              </a>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
        </VerticalOneColForm>
      </div>
    </>
  );
};

export default SignInPageContainer;
