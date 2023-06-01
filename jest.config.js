module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./src/__test__/main.test.tsx"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
