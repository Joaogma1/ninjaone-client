import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import {InputWithIcon} from "components";

describe("InputCustom WithIcon", () => {
    it("renders the input with the correct icon and placeholder", () => {
        //arrange
        const icon = "Search";
        const placeholder = "Search...";
        //act
        render(
            <InputWithIcon icon={icon} placeholder={placeholder} />
        );
        const input = screen.getByPlaceholderText(placeholder);
        const iconContainer = screen.getByTestId("icon-container");
        //assert
        expect(input).toBeInTheDocument();
        expect(iconContainer).toBeInTheDocument();
    });

    it("handles changes to the input", () => {
        //arrange
        const onChange = jest.fn();
        //act
        render(
            <InputWithIcon onChange={onChange} placeholder="Search..." />
        );
        const input = screen.getByPlaceholderText("Search...");
        fireEvent.change(input, { target: { value: "test" } } );
        // assert
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});