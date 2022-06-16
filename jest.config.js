module.exports = {
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],  
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
