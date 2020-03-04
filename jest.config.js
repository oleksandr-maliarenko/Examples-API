module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '(./test/*/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['./node_modules', './dist'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  reporters: ['default', './node_modules/jest-html-reporters'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
