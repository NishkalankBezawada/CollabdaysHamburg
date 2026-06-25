import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()] as any,
    test: {
        globals: true, //This makes it so that you don't have to import 'describe', 'it', 'expect' in every test file.
        environment: "jsdom", //Fake browser that runs inside Node.js. This is needed for React testing.
        setupFiles: ["./tests/setupTests.ts"],
        coverage: {
            enabled: true,
            provider: "v8",
            reporter: ["text-summary", "cobertura", "html", "lcov"],
            cleanOnRerun: true,
            reportsDirectory: "./tests/coverage",
            include: ["**/src/**/*.{ts,tsx}"],
            exclude: [
                "**/node_modules/**",
                "**/tests/**",
            ],
        },

        alias: {
            "@src/": new URL("./src/", import.meta.url).pathname,
        },

        reporters: ["junit", "default"],
        outputFile: {
            junit: "./tests/reports/junit.xml",
        },
    },
});
