import React from "react";
import { render, screen } from "@testing-library/react";
import {withGlobalHeader} from "components";

describe("withGlobalHeader HOC", () => {
    const MockedComponent = () => <div>Dummy Content</div>;
    const WrappedComponent = withGlobalHeader(MockedComponent);

    it("should render the header", () => {
        //arrange
        //act
        render(<WrappedComponent />);
        const header = screen.getByRole("banner");
        //assert
        expect(header).toBeInTheDocument();
    });

    it("should render the logo in the header", () => {
        //arrange
        //act
        render(<WrappedComponent />);
        //assert

        const logo = screen.getByAltText("Logo");
        expect(logo).toBeInTheDocument();
    });

    it("should render the wrapped component", () => {
        //arrange
        //act
        render(<WrappedComponent />);
        //assert
        const wrappedComponent = screen.getByText("Dummy Content");
        expect(wrappedComponent).toBeInTheDocument();
    });
});