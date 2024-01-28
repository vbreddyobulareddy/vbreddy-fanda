import { Formik } from "formik";
import { FormOptionsType } from "./form-types";
import { FieldType, FieldsList } from "../field/field-types";
import InputTextFieldComponent from "../field/input-text-field";
import InputEmailFieldComponent from "../field/input-email-field";
import InputMobileFieldComponent from "../field/input-mobile-field";
import InputPasswordFieldComponent from "../field/input-password-field";
import InputButtonFieldComponent from "../field/input-button-field";

export const VerticalOneColForm = (props: FormOptionsType) => {
  const { fields, handleSubmit } = props;

  const fieldEntity: any = {};
  fields.forEach((item: any) => {
    fieldEntity[item.id] = item.defaultValue;
  });

  return (
    <>
      <Formik initialValues={fieldEntity} onSubmit={handleSubmit}>
        {() => {
          return (
            <>
              {fields &&
                fields.map((item: FieldType, index: number) => {
                  if (item.grade.field === FieldsList.INPUT_TEXT_FIELD) {
                    return (
                      <InputTextFieldComponent
                        {...item}
                        autoFocus={index === 0}
                        key={item.id}
                      />
                    );
                  }
                  if (item.grade.field === FieldsList.INPUT_EMAIL_FIELD) {
                    return (
                      <InputEmailFieldComponent
                        {...item}
                        autoFocus={index === 0}
                        key={item.id}
                      />
                    );
                  }
                  if (item.grade.field === FieldsList.INPUT_MOBILE_FIELD) {
                    return (
                      <InputMobileFieldComponent
                        {...item}
                        autoFocus={index === 0}
                        key={item.id}
                      />
                    );
                  }
                  if (item.grade.field === FieldsList.INPUT_PASSWORD_FIELD) {
                    return (
                      <InputPasswordFieldComponent
                        {...item}
                        autoFocus={index === 0}
                        key={item.id}
                      />
                    );
                  }
                })}
              <InputButtonFieldComponent name={props.actionName} handleOnClick={handleSubmit}>
                {props.children}
              </InputButtonFieldComponent>
            </>
          );
        }}
      </Formik>
    </>
  );
};
