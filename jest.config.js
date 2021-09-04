/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

/* eslint sort-keys: "off" */

module.exports = {
  moduleFileExtensions: ['tsx', 'ts', 'js', 'scss'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^helpers$': '<rootDir>/src/helpers',
    '^layouts(.*)$': '<rootDir>/src/layouts$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(scss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
}
