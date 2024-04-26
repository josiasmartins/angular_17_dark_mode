module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ['<rootDir>/src/app/setup.jest.ts'],
        // '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    // transform: {
    //     '^.+\\.(ts|tsx)$': 'ts-jest',
    // },

    testPathIgnorePatterns: [
        "<rootDir>/node_modules",
        "<rootDir>/dist"
    ],
    globals: {
        "ts-jest": {
            tsConfig: "<rootDir>/tsconfig.spec.json",
            stringifyContentPathRegex: "\\.html$"
        }
    }
      
}