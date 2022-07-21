import { render } from "@testing-library/react";
import AppMain from "../App";

describe("App", () => {
  test("renders App component", () => {
    render(<AppMain />);
  });
});
