import { render } from "@testing-library/react";
import Main from "../main";

test("renders the Main component", () => {
  const { container } = render(<Main />);
  expect(container.firstChild).toBeInTheDocument();
});
