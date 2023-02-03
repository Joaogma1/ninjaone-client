import {render, screen} from "@testing-library/react";
import {Loading} from "components";

test("should render the loading container, spinner, and message elements", () => {
   //arrange
   // act
   render(<Loading />);
   const loadingContainer = screen.getByTestId("loading-container");
   const svg = screen.getByTestId("loading-svg");
   const message = screen.getByTestId("loading-message");
   //assert

   expect(loadingContainer).toBeInTheDocument();
   expect(svg).toBeInTheDocument();
   expect(message).toBeInTheDocument();

   expect(loadingContainer).toHaveClass("loading-container");
   expect(svg).toHaveClass("loading-spinner");
   expect(message).toHaveClass("loading-message");
});

test("should render the custom loading message", () => {
   //arrange
   const message = "Custom Loading...";
   // act
   render(<Loading message={message} />);
   //assert
   expect(screen.getByTestId("loading-container")).toBeInTheDocument();
   expect(screen.getByTestId("loading-message")).toHaveTextContent(message);
});

test("shouldn render the loader but doesn't match the text", () => {
   //arrange
   const message = "not a Loading";
   const expectedMessage = "loading...";
   // act
   render(<Loading message={message} />);
   //assert
   expect(screen.getByTestId("loading-container")).toBeInTheDocument();
   expect(screen.getByTestId("loading-message")).not.toHaveTextContent(expectedMessage);
});
