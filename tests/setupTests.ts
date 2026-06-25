import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Automatically unmount and cleanup DOM after the test is finished.
// This prevents memory leaks and ensures a clean state for each test.
afterEach(() => {
    cleanup();
});
