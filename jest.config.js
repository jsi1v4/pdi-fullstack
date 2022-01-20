module.exports = {
  preset: 'ts-jest',
  globals: {
    tsJest: {
      tsConfigFile: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^!/(.*)$': '<rootDir>/tests/$1',
  },
  testMatch: ['**/*.test.+(ts|js)'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
};
