import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserProfileCard from "@src/webparts/spfxVitest/components/organisms/UserProfileCard";

describe("UserProfileCard component (Organism)", () => {
  const baseProps = {
    displayName: "Jane Doe",
    email: "jane.doe@contoso.com",
    role: "SharePoint Developer",
    isOnline: true,
  };

  beforeAll(() => {
    console.log("🧪 [ORGANISMS] Starting UserProfileCard component tests...");
    console.log("📋 Testing a full profile card = avatar + info + search + history");
  });

  afterAll(() => {
    console.log("✅ [ORGANISMS] UserProfileCard component tests complete!\n");
  });

  it("renders user display name", () => {
    console.log("  → Testing: Does it show the user's full name?");
    render(<UserProfileCard {...baseProps} />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    console.log("  ✓ Display name 'Jane Doe' is visible");
  });

  it("renders user email", () => {
    console.log("  → Testing: Does it show the user's email?");
    render(<UserProfileCard {...baseProps} />);
    expect(screen.getByText("jane.doe@contoso.com")).toBeInTheDocument();
    console.log("  ✓ Email 'jane.doe@contoso.com' is visible");
  });

  it("renders user role", () => {
    console.log("  → Testing: Does it show the user's role?");
    render(<UserProfileCard {...baseProps} />);
    expect(screen.getByText("SharePoint Developer")).toBeInTheDocument();
    console.log("  ✓ Role 'SharePoint Developer' is visible");
  });

  it("shows auto-generated initials when no avatarInitials provided", () => {
    console.log("  → Testing: Does it generate initials from the name?");
    render(<UserProfileCard {...baseProps} />);
    const avatar = screen.getByLabelText("User avatar");
    expect(avatar).toHaveTextContent("JD");
    console.log("  ✓ Auto-generated initials 'JD' from 'Jane Doe'");
  });

  it("shows custom initials when avatarInitials provided", () => {
    console.log("  → Testing: Can we override initials with custom text?");
    render(<UserProfileCard {...baseProps} avatarInitials="X" />);
    const avatar = screen.getByLabelText("User avatar");
    expect(avatar).toHaveTextContent("X");
    console.log("  ✓ Custom initials 'X' displayed instead of auto-generated");
  });

  it("shows online status badge when isOnline is true", () => {
    console.log("  → Testing: Does it show 'Online' status indicator?");
    render(<UserProfileCard {...baseProps} isOnline={true} />);
    expect(screen.getByLabelText("Online")).toBeInTheDocument();
    console.log("  ✓ Online status badge is visible");
  });

  it("shows offline status badge when isOnline is false", () => {
    console.log("  → Testing: Does it show 'Offline' status indicator?");
    render(<UserProfileCard {...baseProps} isOnline={false} />);
    expect(screen.getByLabelText("Offline")).toBeInTheDocument();
    console.log("  ✓ Offline status badge is visible");
  });

  it("renders the embedded SearchBox", () => {
    console.log("  → Testing: Is the search box (molecule) embedded inside?");
    render(<UserProfileCard {...baseProps} />);
    expect(screen.getByPlaceholderText("Search user content...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Find" })).toBeInTheDocument();
    console.log("  ✓ SearchBox rendered with 'Search user content...' placeholder and 'Find' button");
  });

  it("performs a search and shows it in recent searches", () => {
    console.log("  → Testing: Does searching add to the recent searches list?");
    const mockOnSearch = vi.fn();
    render(<UserProfileCard {...baseProps} onSearch={mockOnSearch} />);

    const input = screen.getByLabelText("Search input");
    const button = screen.getByRole("button", { name: "Find" });

    fireEvent.change(input, { target: { value: "SPFx web parts" } });
    fireEvent.click(button);

    expect(screen.getByText("Recent Searches")).toBeInTheDocument();
    expect(screen.getByText("SPFx web parts")).toBeInTheDocument();
    expect(mockOnSearch).toHaveBeenCalledWith("SPFx web parts");
    console.log("  ✓ 'SPFx web parts' added to recent searches and callback triggered");
  });

  it("displays pre-existing recent searches", () => {
    console.log("  → Testing: Can we pass in existing search history?");
    render(<UserProfileCard {...baseProps} recentSearches={["React", "TypeScript", "Vitest"]} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
    console.log("  ✓ Pre-existing searches 'React', 'TypeScript', 'Vitest' all displayed");
  });

  it("limits recent searches to 5 items", () => {
    console.log("  → Testing: Does it cap recent searches at 5 items?");
    const mockOnSearch = vi.fn();
    render(
      <UserProfileCard
        {...baseProps}
        onSearch={mockOnSearch}
        recentSearches={["one", "two", "three", "four", "five"]}
      />
    );

    const input = screen.getByLabelText("Search input");
    const button = screen.getByRole("button", { name: "Find" });

    fireEvent.change(input, { target: { value: "six" } });
    fireEvent.click(button);

    // "six" should be there (newest), "five" should be gone (oldest)
    expect(screen.getByText("six")).toBeInTheDocument();
    expect(screen.queryByText("five")).not.toBeInTheDocument();
    console.log("  ✓ Recent searches capped at 5 — oldest item removed");
  });

  it("renders the profile card container", () => {
    console.log("  → Testing: Does the profile card wrapper exist?");
    render(<UserProfileCard {...baseProps} />);
    expect(screen.getByTestId("profile-card")).toBeInTheDocument();
    console.log("  ✓ Profile card container (data-testid='profile-card') found");
  });
});
