import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { text } from "express";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act - nothing in this case

    //Assert
    const helloWorldelement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldelement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act - nothing in this case

    //Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button WAS clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not renders "good to see you" if the button WAS clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {exact: false});
    expect(outputElement).toBeNull()
  });
});
