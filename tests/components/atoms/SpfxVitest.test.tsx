import * as React from "react";
import { render, screen } from "@testing-library/react";
import SpfxVitest from "@src/webparts/spfxVitest/components/atoms/SpfxVitest";

describe("SpfxVitest component (Atom)", () => {
  const baseProps = {
    description: "Test description",
    isDarkTheme: false,
    environmentMessage: "Test environment",
    hasTeamsContext: false,
    userDisplayName: "Test User",
  };

  beforeAll(() => {
    console.log("🧪 [ATOMS] Starting SpfxVitest component tests...");
    console.log("📋 Testing a basic greeting component with theme and context support");
  });

  afterAll(() => {
    console.log("✅ [ATOMS] SpfxVitest component tests complete!\n");
  });

  it("renders user display name and description", () => {
    console.log("  → Testing: Does it show the user's name and description?");
    render(<SpfxVitest {...baseProps} />);
    expect(screen.getByText(/Well done, Test User!/)).toBeInTheDocument();
    expect(screen.getByText(/Web part property value:/)).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    console.log(" User name 'Test User' and description rendered correctly");
  });

  it("renders environment message", () => {
    console.log("  → Testing: Does it display the environment message?");
    render(<SpfxVitest {...baseProps} />);
    expect(screen.getByText("Test environment")).toBeInTheDocument();
    console.log(" Environment message 'Test environment' is visible");
  });

  it("shows dark image when isDarkTheme is true", () => {
    console.log("  → Testing: Does dark theme show the dark welcome image?");
    render(<SpfxVitest {...baseProps} isDarkTheme={true} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", expect.stringContaining("welcome-dark"));
    console.log(" Dark theme image (welcome-dark) is displayed");
  });

  it("shows light image when isDarkTheme is false", () => {
    console.log("  → Testing: Does light theme show the light welcome image?");
    render(<SpfxVitest {...baseProps} isDarkTheme={false} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", expect.stringContaining("welcome-light"));
    console.log(" Light theme image (welcome-light) is displayed");
  });

  it("applies Teams style when hasTeamsContext is true", () => {
    console.log("  → Testing: Does Teams context apply special CSS class?");
    const { container } = render(<SpfxVitest {...baseProps} hasTeamsContext={true} />);
    expect(container.querySelector("section")?.className).toMatch(/teams/);
    console.log(" Teams CSS class is applied to the section");
  });

  it("renders all documentation links", () => {
    console.log("  → Testing: Are all 7+ documentation links rendered?");
    render(<SpfxVitest {...baseProps} />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(7);
    console.log(` Found ${links.length} documentation links (expected >= 7)`);
  });
});
