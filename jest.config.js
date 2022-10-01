const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: "<rootDir>/",
  }),
};
