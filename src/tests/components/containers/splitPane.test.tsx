import React from "react";
import { render, screen } from "@testing-library/react";
import {SplitPane} from "components";

describe("SplitPane component", () => {
    test("renders left and right panes", () => {
        // Arrange
        const leftContent = <div>Left Content</div>;
        const rightContent = <div>Right Content</div>;

        // Act
        render(<SplitPane left={leftContent} right={rightContent} />);

        // Assert
        expect(screen.getByText("Left Content")).toBeInTheDocument();
        expect(screen.getByText("Right Content")).toBeInTheDocument();
    });

    test("renders left pane only", () => {
        // Arrange
        const leftContent = <div>Left Content</div>;

        // Act
        render(<SplitPane left={leftContent} right={null} />);

        // Assert
        expect(screen.getByText("Left Content")).toBeInTheDocument();
        expect(screen.queryByText("Right Content")).toBeNull();
    });

    test("renders right pane only", () => {
        // Arrange
        const rightContent = <div>Right Content</div>;

        // Act
        render(<SplitPane left={null} right={rightContent} />);

        // Assert
        expect(screen.getByText("Right Content")).toBeInTheDocument();
        expect(screen.queryByText("Left Content")).toBeNull();
    });
});
