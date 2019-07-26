// jest.config.js
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/core/styled/'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/core/styled',
    '<rootDir>/src/core/atoms/index.js',
    '<rootDir>/src/core/index.js',
    '<rootDir>/src/constants',
  ],
  moduleNameMapper: {
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
};
