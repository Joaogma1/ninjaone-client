import React from "react";
import {render, cleanup, screen} from "@testing-library/react";
import withFormField, {FormFieldProps} from "components/Forms/formField";

// arrange
const MockInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & FormFieldProps > = ({...props}) =>
{
    return <input {...props}  data-testid="input" className={props.hasError ? "error" : ""} />;
};

const FormInput = withFormField(MockInput);

describe("withFormField HOC", () => {
    afterEach(cleanup);

    it("renders the wrapped component and label with error message", () => {
        //act
        render(
            <FormInput
                hasError
                labelName="Name"
                errorMessage="This is an error"
                isMandatory
            />
        );
        //assert
        expect(screen.getByText("Name*")).toBeInTheDocument();
        expect(screen.getByTestId("input")).toHaveClass("error");
        expect(screen.getByText("This is an error")).toBeInTheDocument();
    });

    it("renders the wrapped component and label without error message", () => {
        //act
        render(
            <FormInput
                labelName="Name"
                isMandatory
            />
        );

        //assert
        expect(screen.getByText("Name*")).toBeInTheDocument();
        expect(screen.getByTestId("input")).not.toHaveClass("error");
        expect(screen.getByText("This is an error")).not.toBeInTheDocument();
    });
});