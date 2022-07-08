import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectBox } from "./SelectBox";

test("should render items", () => {
  // Declare component's props
  const items = ["item 1", "item 2"];

  // Render component
  render(<SelectBox items={items} />);

  // Items should be in the UI
  items.forEach((item) => {
    const itemElement = screen.getByRole("button", { name: item });
    expect(itemElement).toBeInTheDocument();
  });
});

test("should be able to select an item", async () => {
  // Declare component's props
  const items = ["item 1", "item 2"];
  const onClick = jest.fn();

  // Render component
  const user = userEvent.setup();
  render(<SelectBox items={items} onClick={onClick} />);

  // Click on the first item
  const firstItemElement = screen.getByRole("button", { name: items[0] });
  await user.click(firstItemElement);

  // onClick should get called
  expect(onClick).toBeCalled();
  expect(onClick).toBeCalledWith(items[0]);
});

test("should add -active class to the selected item", () => {
  // Declare component's props
  const items = ["item 1", "item 2"];
  const value = items[0];

  // Render component
  render(<SelectBox items={items} value={value} />);

  // selected item should have -active class
  const selectedItemElement = screen.getByRole("button", { name: items[0] });
  expect(selectedItemElement).toHaveClass("-active");
});

test("should add a custom class to the component", () => {
  // Declare component's props
  const items = ["item 1", "item 2"];
  const className = "custom class";

  // Render component
  render(<SelectBox items={items} className={className} />);

  // component should have the custom class
  const selectBoxElement = screen.getByTestId("selectBox");
  expect(selectBoxElement).toHaveClass(className);
});
