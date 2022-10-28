import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const link = screen.getByText("Admin UI");
  expect(link).toBeInTheDocument();
});
