const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(enzyme)/).+\\.js$",
    "/node_modules/(?!(enzyme-adapter-react-16)/).+\\.js$",
  ],

  testMatch: ['**/__tests__/*.js'],
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
}

module.exports = jestConfig