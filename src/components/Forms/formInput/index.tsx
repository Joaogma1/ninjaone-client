import React from "react";
import withFormField, { FormFieldProps } from "../formField";

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & FormFieldProps > = ({
   errorMessage,
   hasError = false,
   isMandatory = false,
   labelName,
   name,
   ...rest
}) => {
   return <input {...rest} className={` b_darkopaque rounded form_input h3`} data-testid={`form_input_hoc`} id={name} />;
};

export default withFormField(FormInput);
