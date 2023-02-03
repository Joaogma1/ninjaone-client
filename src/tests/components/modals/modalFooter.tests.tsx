import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import ModalFooter from "components/modals/modalFooter";

describe("ModalFooter", () => {
    it("should render bottom of modal withtwo buttons as Update and Create Device design", () => {
        // Arrange
        const actionText = "Submit";
        const secondaryText = "Cancel";
        const actionColor = "primary";
        const secondaryColor = "secondary";
        const onActionClick = jest.fn();
        const onSecondaryClick = jest.fn();

        // Act
            render(
            <ModalFooter
                actionColor={actionColor}
                actionText={actionText}
                onActionClick={onActionClick}
                secondaryColor={secondaryColor}
                onSecondaryClick={onSecondaryClick}
                secondaryText={secondaryText}
            />
        );

        const actionBtn = screen.getByText(actionText);
        const secondaryBtn = screen.getByText(secondaryText);
        fireEvent.click(actionBtn);
        fireEvent.click(secondaryBtn);
        // Assert
        expect(actionBtn).toBeInTheDocument();
        expect(actionBtn).toHaveClass("white100");
        expect(actionBtn).toHaveStyle("height: 2.5rem; width: auto;");
        expect(secondaryBtn).toBeInTheDocument();
        expect(secondaryBtn).toHaveClass("b_gray bg_white black100");
        expect(secondaryBtn).toHaveStyle("height: 2.5rem; width: auto;");

        expect(onActionClick).toHaveBeenCalledTimes(1);
        expect(onSecondaryClick).toHaveBeenCalledTimes(1);
    });

    it("should render bottom of modal with two buttons as Delete Device design", () => {
        // Arrange
        const actionText = "Delete";
        const secondaryText = "Cancel";
        const actionColor = "danger";
        const secondaryColor = "basic";
        const onActionClick = jest.fn();
        const onSecondaryClick = jest.fn();
        // Act
        render(
            <ModalFooter
                actionColor={actionColor}
                actionText={actionText}
                onActionClick={onActionClick}
                secondaryColor={secondaryColor}
                onSecondaryClick={onSecondaryClick}
                secondaryText={secondaryText}
            />
        );

        const actionBtn = screen.getByText(actionText);
        const secondaryBtn = screen.getByText(secondaryText);
        fireEvent.click(actionBtn);
        fireEvent.click(secondaryBtn);
        // Assert
        expect(actionBtn).toBeInTheDocument();
        expect(actionBtn).toHaveClass("white100");
        expect(actionBtn).toHaveStyle("height: 2.5rem; width: auto;");
        expect(secondaryBtn).toBeInTheDocument();
        expect(secondaryBtn).toHaveClass("b_gray bg_white black100");
        expect(secondaryBtn).toHaveStyle("height: 2.5rem; width: auto;");

        expect(onActionClick).toHaveBeenCalledTimes(1);
        expect(onSecondaryClick).toHaveBeenCalledTimes(1);
    });
});
