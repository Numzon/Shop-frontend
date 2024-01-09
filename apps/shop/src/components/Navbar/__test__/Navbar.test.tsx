import { render, screen } from "@testing-library/react";
import { Navbar } from "..";

test("should render navbar correctly", () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId("custom-element");
  if (linkElement) {
    expect(linkElement).toBeInTheDocument();
  }
});
