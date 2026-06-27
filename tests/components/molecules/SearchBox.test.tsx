import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "@src/webparts/spfxVitest/components/molecules/SearchBox";

describe("SearchBox component (Molecule)", () => {
  const mockOnSearch = vi.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  beforeAll(() => {
    console.log("🧪 [MOLECULES] Starting SearchBox component tests...");
    console.log("📋 Testing a search bar = input field + button working together");
  });

  afterAll(() => {
    console.log("✅ [MOLECULES] SearchBox component tests complete!\n");
  });

  it("renders with default placeholder and button text", () => {
    console.log("  → Testing: Does it show default placeholder 'Search...' and button 'Search'?");
    render(<SearchBox onSearch={mockOnSearch} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
    console.log(" Default placeholder and button text rendered");
  });

  it("renders with custom placeholder and button label", () => {
    console.log("  → Testing: Can we customize placeholder and button text?");
    render(<SearchBox onSearch={mockOnSearch} placeholder="Find items..." buttonLabel="Go" />);
    expect(screen.getByPlaceholderText("Find items...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go" })).toBeInTheDocument();
    console.log(" Custom placeholder 'Find items...' and button 'Go' rendered");
  });

  it("updates input value when user types", () => {
    console.log("  → Testing: Does typing update the input field?");
    render(<SearchBox onSearch={mockOnSearch} />);
    const input = screen.getByLabelText("Search input");
    fireEvent.change(input, { target: { value: "hello world" } });
    expect(input).toHaveValue("hello world");
    console.log(" Input value updated to 'hello world' after typing");
  });

  it("calls onSearch when button is clicked with valid input", () => {
    console.log("  → Testing: Does clicking Search trigger the callback?");
    render(<SearchBox onSearch={mockOnSearch} />);
    const input = screen.getByLabelText("Search input");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "SharePoint" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("SharePoint");
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    console.log(" onSearch called with 'SharePoint' after button click");
  });

  it("calls onSearch when Enter key is pressed", () => {
    console.log("  → Testing: Does pressing Enter trigger search?");
    render(<SearchBox onSearch={mockOnSearch} />);
    const input = screen.getByLabelText("Search input");

    fireEvent.change(input, { target: { value: "Vitest" } });
    fireEvent.keyPress(input, { key: "Enter", charCode: 13 });

    expect(mockOnSearch).toHaveBeenCalledWith("Vitest");
    console.log(" onSearch called with 'Vitest' after Enter key press");
  });

  it("does NOT call onSearch when input is empty", () => {
    console.log("  → Testing: Is the button disabled when input is empty?");
    render(<SearchBox onSearch={mockOnSearch} />);
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
    console.log(" onSearch NOT called — empty input correctly blocked");
  });

  it("trims whitespace from search query", () => {
    console.log("  → Testing: Does it trim spaces from the search text?");
    render(<SearchBox onSearch={mockOnSearch} />);
    const input = screen.getByLabelText("Search input");

    fireEvent.change(input, { target: { value: "  SPFx Testing  " } });
    fireEvent.keyPress(input, { key: "Enter", charCode: 13 });

    expect(mockOnSearch).toHaveBeenCalledWith("SPFx Testing");
    console.log(" Search query trimmed from '  SPFx Testing  ' to 'SPFx Testing'");
  });

  it("disables input and button when disabled prop is true", () => {
    console.log("  → Testing: Does disabled prop disable everything?");
    render(<SearchBox onSearch={mockOnSearch} disabled={true} />);
    const input = screen.getByLabelText("Search input");
    const button = screen.getByRole("button", { name: "Search" });

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
    console.log(" Both input and button are disabled");
  });

  it("shows search count after performing searches", () => {
    console.log("  → Testing: Does it track and show number of searches?");
    render(<SearchBox onSearch={mockOnSearch} />);
    const input = screen.getByLabelText("Search input");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "first search" } });
    fireEvent.click(button);

    expect(screen.getByText("Searches performed: 1")).toBeInTheDocument();
    console.log(" Search count shows '1' after first search");
  });
});
