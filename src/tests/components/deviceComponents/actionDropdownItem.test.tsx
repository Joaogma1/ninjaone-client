import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ActionDropDownItem from "components/deviceComponents/actionDropdownItem";

describe("ActionDropDownItem component", () => {
    it("should render the label", () => {
        // Arrange
        const label = "Label 1";

        // Act
        render(<ActionDropDownItem label={label} onClick={() => {}} />);

        // Assert
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
    });

    it("should call onClick when item is clicked", () => {
        // Arrange
        const label = "Label 1";
        const onClick = jest.fn();

        // Act
        render(<ActionDropDownItem label={label} onClick={onClick} />);
        fireEvent.click(screen.getByText(label));

        // Assert
        expect(onClick).toHaveBeenCalled();
    });

    it("should render the color passed as props", () => {
        // Arrange
        const label = "Label 1";
        const color = "#000";

        // Act
        render(<ActionDropDownItem label={label} color={color} onClick={() => {}} />);

        // Assert
        const labelElement = screen.getByText(label);
        expect(labelElement).toHaveStyle(`color: ${color}`);
    });
});
