import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import data from "../../data/data.json";

test("should render car types", () => {
  // Render component
  render(<App />);

  // Car types should be in the UI
  const types = data.types.map((type) => type.name);
  types.forEach((type) => {
    const typeElement = screen.getByRole("button", { name: type });
    expect(typeElement).toBeInTheDocument();
  });
});

test("should render parts, after clicking on a car type", async () => {
  // Render component
  const user = userEvent.setup();
  render(<App />);

  // Click on the first type
  const types = data.types.map((type) => type.name);
  const typeElement = screen.getByRole("button", { name: types[0] });
  await user.click(typeElement);

  // Parts of the first type should be in the UI
  const parts = data.types[0].parts.map((part) => part.name);
  parts.forEach((part) => {
    const partElement = screen.getByRole("button", { name: part });
    expect(partElement).toBeInTheDocument();
  });
});

test("should render cars after selecting a type and a part", async () => {
  // Render component
  const user = userEvent.setup();
  render(<App />);

  // Click on the first type
  const types = data.types.map((type) => type.name);
  const typeElement = screen.getByRole("button", { name: types[0] });
  await user.click(typeElement);

  // Click on the first part
  const parts = data.types[0].parts.map((part) => part.name);
  const partElement = screen.getByRole("button", { name: parts[0] });
  await user.click(partElement);

  // Cars of the selected type and part, should be in the UI
  const cars = data.types[0].parts[0].cars;
  cars.forEach((car) => {
    // Check car's name
    const carNameElement = screen.getByRole("heading", { name: car.name });
    expect(carNameElement).toBeInTheDocument();
    // Check car's image
    const carImageElement = screen.getByRole("img", { name: car.name });
    expect(carImageElement).toBeInTheDocument();
    expect(carImageElement).toHaveAttribute("src", car.image);
  });
});
