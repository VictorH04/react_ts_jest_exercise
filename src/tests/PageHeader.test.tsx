import { render, screen } from "@testing-library/react";
import PageHeader from "../components/PageHeader/PageHeader";

describe("PageHeader", () => {
  it("Renders the page title", () => {
    const HeaderText = "This is my page";
    render(<PageHeader HeaderText={HeaderText} />);
    const label = screen.getByText(HeaderText);
    expect(label).toBeInTheDocument();
  });
});
