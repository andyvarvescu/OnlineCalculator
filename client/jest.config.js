const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/*.js'],
  // "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
}

module.exports = jestConfig