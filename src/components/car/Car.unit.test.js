import { render, screen } from "@testing-library/react";
import { Car } from "./Car";

test("should render name", () => {
  // Declare component's props
  const name = "BMW";
  const image = "image link";

  // Render the component
  render(<Car name={name} image={image} />);

  // Name should be in the UI
  const nameElement = screen.getByRole("heading", { name });
  expect(nameElement).toBeInTheDocument();
});

test("should render image", () => {
  // Declare component's props
  const name = "BMW";
  const image = "image link";

  // Render the component
  render(<Car name={name} image={image} />);

  // Image should be in the UI
  const imageElement = screen.getByRole("img", { name });
  expect(imageElement).toBeInTheDocument();
});
