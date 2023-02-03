import {render, screen} from "@testing-library/react";
import {PageHeader} from "components";

test("should render the PageHeader with title device and no right children", () => {
    //arrange
    const title= "Device"
    // act
    render(<PageHeader title={title} />);
    const wrapper = screen.getByTestId("pageHeaderWrapper");
    const h1 = screen.getByTestId("h1");
    //assert
    expect(h1).toBeInTheDocument();
    expect(wrapper).toHaveClass("pageheader_wrapper");
    expect(h1).toHaveClass("h1 f_medium black100");
});

test("should render the PageHeader with title device", () => {
    //arrange
    const title= "Teste"
    const expectedTitle = 'Device'
    // act
    render(<PageHeader title={title} />);
    const wrapper = screen.getByTestId("pageHeaderWrapper");
    const h1 = screen.getByTestId("h1");

    //assert
    expect(h1).toBeInTheDocument();
    expect(h1).not.toHaveTextContent(expectedTitle);
    expect(wrapper).toHaveClass("pageheader_wrapper");
    expect(h1).toHaveClass("h1 f_medium black100");
});

test("should render the PageHeader with title device and a right fragment children", () => {
    //arrange
    const title= "Device"
    // act
    render(<PageHeader title={title} right={<></>} />);
    const wrapper = screen.getByTestId("pageHeaderWrapper");
    const h1 = screen.getByTestId("h1");
    const rightChildrenContainer = screen.getByTestId("pageHeader_right");

    //assert
    expect(h1).toBeInTheDocument();
    expect(rightChildrenContainer).toBeInTheDocument();
    expect(wrapper).toHaveClass("pageheader_wrapper");
    expect(h1).toHaveClass("h1 f_medium black100");
});