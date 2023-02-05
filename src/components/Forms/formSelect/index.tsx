import React from "react";
import FormDropdown, { FormDropdownProps } from "components/inputs/dropdownInput";
import withFormField from "../formField";
import { Props } from "react-select";

interface FormSelectProps {
   hasError?: boolean;
   labelName: string;
   errorMessage?: string;
   isMandatory?: boolean;
}

const FormSelect: React.FC<Props & FormSelectProps & FormDropdownProps> = ({ hasError, labelName, errorMessage, isMandatory, name, ...rest }) => {
   return <FormDropdown data-testid="form_dropdown" className={`${hasError ? "b_danger" : "b_gray"}`} id={name} {...rest} />;
};

export default withFormField(FormSelect);
