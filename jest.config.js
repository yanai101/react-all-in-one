module.exports = {
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform"
    },
    testURL:"http://localhost/",
    testRegex: "(/specs/.*|(\\.|/)(test|spec))\\.(js?|jsx?|tsx?)?$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
      },
    transformIgnorePatterns: ['node_modules','dist' ]
}