// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app directory
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Handle CSS Modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    // Handle CSS files
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    // Handle image imports
    "^.+\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  collectCoverage: true, // Enable coverage reporting
  // collectCoverageFrom: [
  //   "**/*.{js,jsx,ts,tsx}", // Specify file types to include
  //   "!**/node_modules/**", // Exclude dependencies
  //   "!**/.next/**", // Exclude Next.js build output
  //   "!**/coverage/**", // Exclude coverage directory
  //   "!**/jest.config.js", // Exclude Jest config file
  // ],
  coverageDirectory: "<rootDir>/coverage", // Specify output directory for coverage reports
  coverageReporters: ["text", "lcov", "json", "clover"], // Define coverage report formats
};

module.exports = createJestConfig(customJestConfig);
