import React from "react";

export interface FormFieldProps {
   hasError?: boolean;
   labelName: string;
   errorMessage?: string;
   isMandatory?: boolean;
}

const withFormField =
   <P extends object & FormFieldProps>(Component: React.FC<P>) =>
   ({ hasError, labelName, errorMessage, isMandatory, ...rest }: P & FormFieldProps) => {
      return (
         <div className="form-input-container">
            <label className="h4 form_input_label f_normal black100">
               {labelName}
               {isMandatory && <span className="h4 f_normal black100">*</span>}
            </label>
            <Component hasError={hasError} {...(rest as P)} />
            {hasError && <span className="danger h4 form_input_errormessage">{errorMessage}</span>}
         </div>
      );
   };

export default withFormField;
