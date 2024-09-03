module.exports = {
  coveragePathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transformIgnorePatterns: ["node_modules/(?!(@siemens|@stencil))"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["tsx", "ts", "js", "jsx"],
  resetMocks: true,
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  verbose: true,
};
