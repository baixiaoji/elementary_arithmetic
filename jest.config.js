module.exports = {
    verbose: true,
    testMatch: ['<rootDir>/test/*.(unit|test).(js|jsx|ts|tsx)'],
    moduleFileExtensions: ['js',],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules'],
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
  };
  