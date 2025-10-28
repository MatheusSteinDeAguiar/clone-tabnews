const dotenv = require("dotenv");

dotenv.config({
  path: ".env.development",
});

const nextJest = require("next/jest");

const crateJestConfig = nextJest({
  dir: ".",
});
const jestConfig = crateJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
