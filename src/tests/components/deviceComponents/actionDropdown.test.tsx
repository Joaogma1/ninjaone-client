import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ActionDropdown from "components/deviceComponents/actionDropdown";

describe("ActionDropdown component", () => {

    test("Render component with options", () => {
        // Arrange
        const options = [
            {
                label: "Option 1",
                onClick: jest.fn(),
            },
            {
                label: "Option 2",
                onClick: jest.fn(),
                color: "#000",
            },
        ];

        // Act
        render(<ActionDropdown options={options} id="action-dropdown-test" />);
        const btn =screen.getByRole("button", { name: /Ellipsis/i })
        fireEvent.click(btn);
        // Assert
        expect(btn).toBeInTheDocument();
        options.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    test("Click on ellipsis should show dropdown", () => {
        // Arrange
        const options = [
            {
                label: "Option 1",
                onClick: jest.fn(),
            },
        ];

        // Act
        render(<ActionDropdown options={options} id="action-dropdown-test" />);
        fireEvent.click(screen.getByRole("button", { name: /Ellipsis/i }));

        // Assert
        expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    test("Click outside of dropdown should hide it", () => {
        // Arrange
        const options = [
            {
                label: "Option 1",
                onClick: jest.fn(),
            },
        ];

        // Act
        render(<ActionDropdown options={options} id="action-dropdown-test" />);
        fireEvent.click(screen.getByRole("button", { name: /Ellipsis/i }));
        fireEvent.click(document);

        // Assert
        expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });

    test("Click on option should call the respective onClick function", () => {
        // Arrange
        const option1OnClick = jest.fn();
        const option2OnClick = jest.fn();
        const options = [
            {
                label: "Option 1",
                onClick: option1OnClick,
            },
            {
                label: "Option 2",
                onClick: option2OnClick,
                color: "#000",
            },
        ];

        // Act
        render(<ActionDropdown options={options} id="action-dropdown-test" />);
        fireEvent.click(screen.getByRole("button", { name: /Ellipsis/i }));
        fireEvent.click(screen.getByText("Option 1"));
        fireEvent.click(screen.getByText("Option 2"));

        // Assert
        expect(option1OnClick).toHaveBeenCalledTimes(1);
        expect(option2OnClick).toHaveBeenCalledTimes(1);
    });
});
