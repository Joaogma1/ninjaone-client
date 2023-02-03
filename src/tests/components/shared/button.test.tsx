import React from "react";
import { render, screen } from "@testing-library/react";
import {Button} from "components";

test("renders button with text", () => {
    render(<Button text="Click me" />);
    const button = screen.getByText("Click me");

    expect(button).toBeInTheDocument();
});

test("renders button with children", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");

    expect(button).toBeInTheDocument();
});

test("renders button with children and text", () => {
    render(<Button text="too">Click me</Button>);
    const button = screen.getByText("Click me too");

    expect(button).toBeInTheDocument();
});