module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ['<rootDir>/src/app/setup.jest.ts'],
        // '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
      
}