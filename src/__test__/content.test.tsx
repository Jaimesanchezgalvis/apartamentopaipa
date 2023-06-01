import { render } from "@testing-library/react";
import  { Content } from "../components/Content"; // import the Content component correctly

describe("Content", () => {
  it("renders the component", () => {
    const { container } = render(<Content />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

