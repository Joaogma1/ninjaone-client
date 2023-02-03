import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import {FormInput} from "components";

describe("FormInput component", () => {
    it("renders the label and input correctly", () => {
        //arrange
        const labelName = "Name";
        //act
        render(<FormInput labelName={labelName} name="inputName" />);
        const input = screen.getByTestId("form_input_hoc");
        //assert
        expect(input).toBeInTheDocument();
    });

    it("shows error message if hasError prop is true", () => {
        //arrange
        const errorMessage = "This field is required";
        //act

        render(
            <FormInput labelName="Name" name="inputName" hasError={true} errorMessage={errorMessage} />
        );
        const error = screen.getByText(errorMessage);
        //assert
        expect(error).toBeInTheDocument();
    });

    it("mandatory asterisk is shown if isMandatory prop is true", () => {

        //act
        render(<FormInput labelName="Name" name="inputName" isMandatory={true} />);
        const mandatoryAsterisk =  screen.queryByText("*");
        //assert

        expect(mandatoryAsterisk).toBeInTheDocument();
    });

    it("handles onChange event correctly", () => {
        //arrange
        const onChange = jest.fn();
        //act
        render(
            <FormInput labelName="Name" name="inputName" onChange={onChange} />
        );
        const input =  screen.getByTestId("form_input_hoc");
        fireEvent.change(input, { target: { value: "new value" } });
        //assert
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});