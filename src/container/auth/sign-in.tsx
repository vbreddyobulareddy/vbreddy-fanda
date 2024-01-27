import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { VerticalOneColForm } from "../../component/form/vertical-1col-form";
import DefaultLogo from "../../component/logo/default-logo";
import { FieldType, FieldsList } from "../../component/field/field-types";

const SignInPageContainer = () => {
  const formFields: FieldType[] = [
    {
      id: "email",
      label: "Email",
      placeholder: "Please enter email",
      grade: { field: FieldsList.INPUT_EMAIL_FIELD, type: "email" },
      icon: faAt,
      defaultValue: "vbreddy@gmail.com",
    },
    {
      id: "pwd",
      label: "Password",
      placeholder: "Please enter Password",
      grade: { field: FieldsList.INPUT_PASSWORD_FIELD, type: "password" },
      icon: faKey,
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
        <VerticalOneColForm handleSubmit={onSubmit} fields={formFields} actionName="Sign In">
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href="sign-up">
                Sign up
              </a>
            </p>
          </div>
        </VerticalOneColForm>
      </div>
    </>
  );
};

export default SignInPageContainer;
